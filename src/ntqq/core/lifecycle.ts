import { useLogger } from "../../common/log"
import { registerEventListener } from "../../store/event-registry"
import {
  getNTLoginService,
} from "./core"
import { initLogin } from "./service/login"
import { NodeIKernelLoginService } from "../types/services/NodeIKernelLoginService"
import {
  buildNTDesktopInitConfig as buildLifecycleNTDesktopInitConfig,
  buildNTSessionInitConfig as buildLifecycleNTSessionInitConfig,
  initializeNTLoginRuntime as initializeLifecycleNTLoginRuntime,
  initializeNTWrapperEngineRuntime as initializeLifecycleNTWrapperEngineRuntime,
  prepareNTBaseEnvironmentPhases,
  startNTSessionBootstrapPhases,
  waitNTLoginRuntimeReadyPhase,
} from "./lifecycle-phases"
import { runNTLoginSuccessPhases } from "./login-success-lifecycle"
import { initializeNTPostLoginServices as initializeNTPostLoginServicePhases } from "./post-login-services"
import {
  runNTSessionInitCompletePhases,
  runNTSessionReadyPhases,
} from "./session-lifecycle"

const log = useLogger('NTCore/Lifecycle')
let ntLoginLifecycleBound = false
let ntSessionLifecycleBound = false
let ntLoginSuccessLifecycleBound = false

const runNTWrapperEnginePhase = () => {
  log.info('phase: init wrapper engine')
  return initializeLifecycleNTWrapperEngineRuntime()
}

const runNTLoginConnectPhase = async (globalPath: string) => {
  log.info('phase: init login config and connect')
  await initializeLifecycleNTLoginRuntime(globalPath)
}

const runNTLoginRuntimeReadyPhase = async () => {
  await waitNTLoginRuntimeReadyPhase()
}

const runNTBaseEnvironmentPhases = async () => {
  const { globalPath } = runNTWrapperEnginePhase()
  await runNTLoginConnectPhase(globalPath)
  await runNTLoginRuntimeReadyPhase()
  return { globalPath }
}

export const buildNTDesktopInitConfig = () => {
  return buildLifecycleNTDesktopInitConfig()
}

export const initializeNTWrapperEngineRuntime = () => {
  return initializeLifecycleNTWrapperEngineRuntime()
}

export const initializeNTLoginRuntime = async (globalPath: string) => {
  await initializeLifecycleNTLoginRuntime(globalPath)
}

export const prepareNTCoreRuntime = () => {
  return runNTWrapperEnginePhase()
}

export const connectNTLoginRuntime = async (globalPath: string) => {
  await runNTLoginConnectPhase(globalPath)
}

export const waitNTLoginRuntimeReady = async () => {
  await runNTLoginRuntimeReadyPhase()
}

export const getNTLoginServiceWhenReady = async (): Promise<NodeIKernelLoginService> => {
  await waitNTLoginRuntimeReady()
  return getNTLoginService()
}

export const bindNTLoginLifecycle = () => {
  if (ntLoginLifecycleBound) {
    log.info('phase: login lifecycle already bound')
    return
  }

  log.info('phase: bind login lifecycle')
  initLogin()
  bindNTLoginSuccessLifecycle()
  ntLoginLifecycleBound = true
}

export const initializeNTRuntime = async () => {
  await prepareNTBaseEnvironment()
  bindNTLoginLifecycle()
}

export const prepareNTBaseEnvironment = async () => {
  log.info('phase: prepare base environment')
  return prepareNTBaseEnvironmentPhases()
}

const handleNTQRCodeLoginSuccess = async (info: NodeIKernelLoginListenerType.UserInfo) => {
  await runNTLoginSuccessPhases(info, startNTWrapperSessionRuntime)
}

export const bindNTLoginSuccessLifecycle = () => {
  if (ntLoginSuccessLifecycleBound) {
    log.info('phase: login success lifecycle already bound')
    return
  }

  log.info('phase: bind login success lifecycle')
  registerEventListener('KernelLoginListener/onQRCodeLoginSucceed', 'always', handleNTQRCodeLoginSuccess)
  ntLoginSuccessLifecycleBound = true
}

export const initializeNTPostLoginServices = async () => {
  await initializeNTPostLoginServicePhases()
}

const handleNTSessionCreate = async (result: unknown) => {
  log.info('onOpentelemetryInit called:', result)
  log.info('NTWrapperSession init successful!')
  await runNTSessionReadyPhases()
}

const handleNTSessionInitComplete = async () => {
  await runNTSessionInitCompletePhases()
}

export const bindNTSessionLifecycle = () => {
  if (ntSessionLifecycleBound) {
    log.info('phase: session lifecycle already bound')
    return
  }

  log.info('phase: bind session lifecycle')
  registerEventListener('KernelSessionListener/onNTSessionCreate', 'always', handleNTSessionCreate)
  registerEventListener('KernelSessionListener/onSessionInitComplete', 'always', handleNTSessionInitComplete)
  ntSessionLifecycleBound = true
}

export const buildNTSessionInitConfig = (uin: `${number}`, uid: `u_${string}`): NodeIQQNTWrapperSessionType.Init => {
  return buildLifecycleNTSessionInitConfig(uin, uid)
}

const initializeNTSessionRuntime = (initConfig: NodeIQQNTWrapperSessionType.Init) => {
  bindNTSessionLifecycle()
  startNTSessionBootstrapPhases(initConfig.selfUin as `${number}`, initConfig.selfUid as `u_${string}`)
}

const runNTSessionStartPhases = (uin: `${number}`, uid: `u_${string}`) => {
  const initConfig = buildNTSessionInitConfig(uin, uid)
  initializeNTSessionRuntime(initConfig)
}

export const startNTWrapperSessionRuntime = async (uin: `${number}`, uid: `u_${string}`) => {
  runNTSessionStartPhases(uin, uid)
}
