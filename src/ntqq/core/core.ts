import { createNTListenerProxy } from "./dispatcher"
import { useLogger } from "../../common/log"
import { NodeIKernelLoginService } from "../types/services/NodeIKernelLoginService"
import {
  getCurrentNTUserInfo,
  patchCurrentNTSelfIdentity,
  requireCurrentNTRuntime,
  requireCurrentNTSelfInfo,
  requireCurrentNTUserInfo,
} from "./runtime-store"
import { getNTWrapper, resetNTWrapper } from "./service/nt-wrapper"

const log = useLogger('NTStore')

export {
  getCurrentNTUserInfo,
  patchCurrentNTSelfIdentity,
  requireCurrentNTRuntime,
  requireCurrentNTSelfInfo,
  requireCurrentNTUserInfo,
}

const ensureNTWrapperRuntime = () => {
  getNTWrapper()
}

const requireNTRuntimeServiceState = () => {
  ensureNTWrapperRuntime()
  return requireCurrentNTRuntime()
}

const getNTSessionService = <TService>(
  getService: (session: NTNativeWrapper.NodeIQQNTWrapperSession) => TService,
) => {
  return getService(getNTWrapperSession())
}

export const getNTWrapperUtil = () => {
  const wrapper = getNTWrapper()
  return wrapper.NodeQQNTWrapperUtil
}

/**
 * 暂时只调用一次
 */
export const getNTGlobalAdapter = () => {
  return createNTListenerProxy('NodeIGlobalAdapter')
}

/**
 * 暂时只调用一次
 */
export const getNTWrapperEngine = () => {
  return requireNTRuntimeServiceState().wrapperEngine
}

/**
 * 频繁调用
 */
export const getNTLoginService = (): NodeIKernelLoginService => {
  return requireNTRuntimeServiceState().loginService
}

/**
 * 频繁调用
 */
export const getNTWrapperSession = (): NTNativeWrapper.NodeIQQNTWrapperSession => {
  return requireNTRuntimeServiceState().wrapperSession
}

export const getNTMsgService = () => {
  return getNTSessionService((session) => session.getMsgService())
}

export const getNTProfileService = () => {
  return getNTSessionService((session) => session.getProfileService())
}

export const getNTGroupService = () => {
  return getNTSessionService((session) => session.getGroupService())
}

export const getNTBuddyService = () => {
  return getNTSessionService((session) => session.getBuddyService())
}

export const getNTProfileLikeService = () => {
  return getNTSessionService((session) => session.getProfileLikeService())
}

export const getNTNodeMiscService = () => {
  return getNTSessionService((session) => session.getNodeMiscService())
}

export const getNTBaseEmojiService = () => {
  return getNTSessionService((session) => session.getBaseEmojiService())
}

export const getNTStorageCleanService = () => {
  return getNTSessionService((session) => session.getStorageCleanService())
}

export const getNTSearchService = () => {
  return getNTSessionService((session) => session.getSearchService())
}

export const getNTUixConvertService = () => {
  return getNTSessionService((session) => session.getUixConvertService())
}

export const getNTMSFService = () => {
  return getNTSessionService((session) => session.getMSFService())
}

export const getNTUnitedConfigService = () => {
  return getNTSessionService((session) => session.getUnitedConfigService())
}

/**
 * 频繁调用
 */
export const getNTStartupSessionWrapper = (): NTNativeWrapper.NodeIQQNTStartupSessionWrapper => {
  ensureNTWrapperRuntime()
  return requireNTRuntimeServiceState().startupSessionWrapper
}

export const createNTSessionLifecycleAdapters = () => {
  return {
    dependsAdapter: createNTListenerProxy('DependsAdapter'),
    dispatcherAdapter: createNTListenerProxy('DispatcherAdapter'),
    sessionListener: createNTListenerProxy('KernelSessionListener'),
  }
}

export const initializeCurrentNTWrapperSession = (initConfig: NodeIQQNTWrapperSessionType.Init) => {
  const session = getNTWrapperSession()
  const { dependsAdapter, dispatcherAdapter, sessionListener } = createNTSessionLifecycleAdapters()
  session.init(initConfig, dependsAdapter, dispatcherAdapter, sessionListener)
  return session
}

export const startNTStartupSession = () => {
  const startupSessionWrapper = getNTStartupSessionWrapper()
  startupSessionWrapper.start()
  return startupSessionWrapper
}

export const destroyNTCore = () => {
  log.warn('destroy ntqq core')
  resetNTWrapper()
}
