import { useLogger } from "../../common/log"
import { CustomError } from "../../common/error/custom-error"
import { getCurrentNTUserInfo, getNTLoginService, requireCurrentNTRuntime } from "./core"
import { initializeNTPostLoginServices } from "./post-login-services"

const log = useLogger('NTCore/SessionLifecycle')

const ensureNTSessionReady = () => {
  const currentRuntime = requireCurrentNTRuntime()
  log.info('runtime data:', currentRuntime)
  if (!currentRuntime.info.uin) {
    throw new CustomError(20302, 'uin error')
  }
  log.info('current user info:', getCurrentNTUserInfo())
}

const finalizeNTSessionReady = async () => {
  await initializeNTPostLoginServices()
  ensureNTSessionReady()
}

const destroyNTLoginServiceAfterSessionInit = () => {
  const login = getNTLoginService()
  login.destroy()
}

export const runNTSessionReadyPhases = async () => {
  log.info('phase: finalize session ready')
  await finalizeNTSessionReady()
}

export const runNTSessionInitCompletePhases = async () => {
  log.info('phase: finalize session init complete')
  destroyNTLoginServiceAfterSessionInit()
}
