import { useWrapper } from "ntwrapper"
import EventEmitter from "events"
import { CustomError } from "../../../common/error/custom-error"
import { requireCurrentNTRuntime, setCurrentNTRuntime } from "../runtime-store"

type NTWrapperInstance = ReturnType<typeof useWrapper>

export type NTWrapperSessionContext = {
  startupSessionWrapper: NTNativeWrapper.NodeIQQNTStartupSessionWrapper
  sessionId: `${number}`
}

export const createCurrentNTWrapperSessionContext = (
  wrapper: NTWrapperInstance,
): NTWrapperSessionContext => {
  const startupSessionWrapper = wrapper.NodeIQQNTStartupSessionWrapper.create()
  const sessionIdList = startupSessionWrapper.getSessionIdList()
  const sessionId = sessionIdList.get('nt')
  if (!sessionId) {
    throw new CustomError(500, `sessionId error: ${JSON.stringify(sessionIdList)}`)
  }
  return {
    startupSessionWrapper,
    sessionId: sessionId as `${number}`,
  }
}

export const createCurrentNTRuntimeServiceState = (
  wrapper: NTWrapperInstance,
  sessionContext: NTWrapperSessionContext,
) => {
  return {
    loginService: new wrapper.NodeIKernelLoginService(),
    wrapperSession: wrapper.NodeIQQNTWrapperSession.getNTWrapperSession(sessionContext.sessionId),
    wrapperEngine: new wrapper.NodeIQQNTWrapperEngine(),
    startupSessionWrapper: sessionContext.startupSessionWrapper,
  }
}

export const buildCurrentNTRuntimeState = (
  wrapper: NTWrapperInstance,
  sessionContext: NTWrapperSessionContext,
  uin?: number,
): ReturnType<typeof requireCurrentNTRuntime> => {
  return {
    info: {
      uin: uin || 0,
      uid: 'u_' as `u_${string}`,
      userNick: "",
    },
    dispatcher: new EventEmitter(),
    ...createCurrentNTRuntimeServiceState(wrapper, sessionContext),
  }
}

export const applyCurrentNTRuntimeServiceState = (
  runtime: ReturnType<typeof requireCurrentNTRuntime>,
  serviceState: ReturnType<typeof createCurrentNTRuntimeServiceState>,
) => {
  runtime.loginService = serviceState.loginService
  runtime.wrapperSession = serviceState.wrapperSession
  runtime.wrapperEngine = serviceState.wrapperEngine
  runtime.startupSessionWrapper = serviceState.startupSessionWrapper
}

export const initializeCurrentNTRuntimeState = (
  wrapper: NTWrapperInstance,
  uin?: number,
) => {
  const sessionContext = createCurrentNTWrapperSessionContext(wrapper)
  const runtime = buildCurrentNTRuntimeState(wrapper, sessionContext, uin)
  setCurrentNTRuntime(runtime)
  return runtime
}

export const refreshCurrentNTRuntimeServiceState = (
  wrapper: NTWrapperInstance,
  runtime: ReturnType<typeof requireCurrentNTRuntime>,
) => {
  const sessionContext = createCurrentNTWrapperSessionContext(wrapper)
  applyCurrentNTRuntimeServiceState(
    runtime,
    createCurrentNTRuntimeServiceState(wrapper, sessionContext),
  )
}
