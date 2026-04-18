import EventEmitter from "events"
import { useLogger } from "../../common/log"
import { NodeIKernelLoginService } from "../types/services/NodeIKernelLoginService"
import { CustomError } from "../../common/error/custom-error"
import { User } from "../../models/contact/user"

const log = useLogger('Store/User')

export interface NTRuntimeState {
  loginService: NodeIKernelLoginService
  wrapperSession: NTNativeWrapper.NodeIQQNTWrapperSession
  wrapperEngine: NTNativeWrapper.NodeIQQNTWrapperEngine
  startupSessionWrapper: NTNativeWrapper.NodeIQQNTStartupSessionWrapper
  dispatcher: EventEmitter
  info: UserInfo
  user?: User
}

let currentRuntime: NTRuntimeState | null = null
let currentUin: number | undefined

export const getCurrentUin = () => currentRuntime?.info.uin || currentUin

export const setCurrentUin = (uin?: number) => {
  currentUin = uin
}

export const setCurrentRuntime = (runtime: NTRuntimeState) => {
  currentRuntime = runtime
  if (runtime.info.uin) {
    currentUin = runtime.info.uin
  }
}

export const getUserInfo = (uin?: number) => {
  const info = currentRuntime?.info
  if (!info) {
    return undefined
  }
  if (uin !== undefined && info.uin && info.uin !== uin) {
    return undefined
  }
  log.info('NTUserStore -> getUserInfo', info.uin || currentUin)
  return info
}

/**
 * 获取当前登录的用户
 * @returns 
 */
export const getCurrentUser = () => {
  const uin = currentRuntime?.info.uin || currentUin
  if (!uin || !currentRuntime) {
    throw new CustomError(500, 'current user id error.')
  }
  log.info('NTUserStore -> getCurrentUser', uin, currentRuntime)
  let user = currentRuntime.user
  if (user) return user
  user = User.create(uin)
  currentRuntime.user = user
  return user
}

export const listCurrentUins = () => {
  const uin = currentRuntime?.info.uin || currentUin
  return uin ? [uin] : []
}

export const requireCurrentUin = () => {
  const uin = currentRuntime?.info.uin || currentUin
  if (!uin) {
    throw new CustomError(500, 'current uin id error.')
  }
  return uin
}

export const getCurrentRuntime = () => {
  if (!currentRuntime) {
    throw new CustomError(500, 'current runtime id error.')
  }
  return currentRuntime
}

export const getCurrentSelfInfo = () => {
  const runtime = currentRuntime
  if (!runtime) {
    throw new CustomError(500, 'current self info id error.')
  }
  return runtime.info
}
