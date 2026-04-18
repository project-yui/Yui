import { useWrapper } from "ntwrapper"
import { useLogger } from "../../../common/log"
import { initNative } from "../../../native/native"
import {
  getCurrentNTUin,
  getCurrentNTRuntimeOrNull,
  requireCurrentNTRuntime,
  requireCurrentNTUin,
} from "../runtime-store"
import {
  initializeCurrentNTRuntimeState,
  refreshCurrentNTRuntimeServiceState,
} from "./nt-wrapper-runtime"
import { resetNTPostLoginServicesState } from "../post-login-services"

const log = useLogger('NTWrapper')

const createNTWrapperInstance = () => {
  return useWrapper()
}

const runNTWrapperNativeBootstrapPhase = () => {
  initNative('wrapper.node')
}

const runNTWrapperRuntimeBootstrapPhases = (uin?: number) => {
  log.info('wrapper file:', uin, 'wrapper.node')
  const wrapper = createNTWrapperInstance()
  initializeCurrentNTRuntimeState(wrapper, uin)
  runNTWrapperNativeBootstrapPhase()
  return wrapper
}

export const initializeNTWrapperRuntime = (uin?: number) => {
  return runNTWrapperRuntimeBootstrapPhases(uin)
}

const destroyCurrentNTRuntimeServices = (runtime: ReturnType<typeof requireCurrentNTRuntime>) => {
  runtime.wrapperEngine.destroy()
  runtime.loginService.destroy()
}

const runNTWrapperResolvePhase = () => {
  const current = getCurrentNTRuntimeOrNull()
  if (!current) {
    return initializeNTWrapperRuntime(getCurrentNTUin())
  }
  return createNTWrapperInstance()
}

const runNTWrapperResetPhases = () => {
  requireCurrentNTUin()
  const currentRuntime = requireCurrentNTRuntime()
  destroyCurrentNTRuntimeServices(currentRuntime)
  resetNTPostLoginServicesState()

  const wrapper = createNTWrapperInstance()
  refreshCurrentNTRuntimeServiceState(wrapper, currentRuntime)
}

export const getNTWrapper = () => {
  return runNTWrapperResolvePhase()
}

export const resetNTWrapper = () => {
  runNTWrapperResetPhases()
}
