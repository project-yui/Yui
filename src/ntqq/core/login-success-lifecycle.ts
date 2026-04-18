import { useLogger } from "../../common/log"
import { getCurrentNTUserInfo, patchCurrentNTSelfIdentity } from "./core"

const log = useLogger('NTCore/LoginSuccessLifecycle')

type NTLoginSuccessIdentity = Pick<NodeIKernelLoginListenerType.UserInfo, 'uin' | 'uid'>

const requireNTLoginSuccessUserInfo = () => {
  const userInfo = getCurrentNTUserInfo()
  if (!userInfo) {
    log.error('qrcode login success but user info is empty')
    return null
  }
  return userInfo
}

const patchNTLoginSuccessIdentity = (info: NTLoginSuccessIdentity) => {
  log.info('qrcode login success payload:', info)
  return patchCurrentNTSelfIdentity({
    uid: info.uid,
    uin: parseInt(info.uin),
  })
}

const startNTSessionAfterLoginSuccess = async (
  info: NTLoginSuccessIdentity,
  startSession: (uin: `${number}`, uid: `u_${string}`) => Promise<void>,
) => {
  const patchedUserInfo = patchNTLoginSuccessIdentity(info)
  log.info('qrcode login user info:', info, patchedUserInfo)
  await startSession(info.uin, info.uid)
}

export const runNTLoginSuccessPhases = async (
  info: NodeIKernelLoginListenerType.UserInfo,
  startSession: (uin: `${number}`, uid: `u_${string}`) => Promise<void>,
) => {
  const userInfo = requireNTLoginSuccessUserInfo()
  if (!userInfo) {
    return
  }

  log.info('qrcode login success current user info:', userInfo)
  await startNTSessionAfterLoginSuccess(info, startSession)
}
