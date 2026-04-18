import { CustomError } from "../../common/error/custom-error"
import { User } from "../../models/contact/user"
import {
  getCurrentRuntime,
  getCurrentSelfInfo,
  getCurrentUin,
  getUserInfo,
  NTRuntimeState,
  requireCurrentUin as requireStoreCurrentUin,
  setCurrentRuntime,
  setCurrentUin,
} from "../store/user"

export const getCurrentNTUin = () => {
  return getCurrentUin()
}

export const getCurrentNTRuntimeOrNull = () => {
  try {
    return getCurrentRuntime()
  } catch {
    return null
  }
}

export const requireCurrentNTRuntime = (): NTRuntimeState => {
  requireStoreCurrentUin()
  return getCurrentRuntime()
}

export const setCurrentNTUin = (uin?: number) => {
  setCurrentUin(uin)
}

export const requireCurrentNTUin = () => {
  const uin = getCurrentNTUin()
  if (!uin) {
    throw new CustomError(500, 'id error')
  }
  return uin
}

export const setCurrentNTRuntime = (runtime: NTRuntimeState) => {
  setCurrentRuntime(runtime)
}

export const getCurrentNTUserInfo = () => {
  return getUserInfo()
}

export const isCurrentNTUserReady = () => {
  return Boolean(getCurrentNTUserInfo())
}

export const getCurrentNTSelfOrNull = (uid: `u_${string}` = 'u_0') => {
  const uin = getCurrentNTUin()
  if (!uin) {
    return null
  }
  return {
    id: uin,
    uid,
  }
}

export const requireCurrentNTSelfInfo = () => {
  return getCurrentSelfInfo()
}

export const requireCurrentNTUserInfo = () => {
  const info = getUserInfo()
  if (!info) {
    requireStoreCurrentUin()
    throw new CustomError(500, 'current nt user info is empty')
  }
  return info
}

export const requireCurrentNTUserModel = (): User => {
  const runtime = requireCurrentNTRuntime()
  const uin = runtime.info.uin || getCurrentNTUin()
  if (!uin) {
    throw new CustomError(500, 'current nt user id error.')
  }
  let user = runtime.user
  if (user) {
    return user
  }
  user = User.create(uin)
  runtime.user = user
  return user
}

export const patchCurrentNTSelfIdentity = (identity: Pick<UserInfo, 'uin' | 'uid'>) => {
  const info = requireCurrentNTUserInfo()
  info.uin = identity.uin
  info.uid = identity.uid
  return info
}
