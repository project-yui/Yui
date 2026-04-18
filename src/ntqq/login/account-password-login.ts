import { useLogger } from "../../common/log"
import { NTLogin } from "./interfaces"
import { withReadyNTLoginService } from "./runtime"
import {
  createFailedAccountLoginResponse,
  isAccountLoginResponse,
  resolvePasswordLoginResponse,
} from "./account-response"
import {
  createDuplicateLoginWaiter,
  createQuickLoginFailedWaiter,
} from "./account-waiters"

const log = useLogger('NT Account')

const buildPasswordLoginRequest = (
  ntLogin: NTLogin.AccountLoginRequest,
): NodeIKernelLoginServiceType.PasswordLoginReq => ({
  uin: `${ntLogin.loginInfo.uin}`,
  passwordMd5: ntLogin.loginInfo.passwordMd5,
  step: ntLogin.loginInfo.step,
  newDeviceLoginSig: new Uint8Array(Buffer.from(ntLogin.loginInfo.newDeviceLoginSig || '')),
  proofWaterSig: new Uint8Array(Buffer.from(ntLogin.loginInfo.proofWaterSig || '')),
  proofWaterRand: new Uint8Array(Buffer.from(ntLogin.loginInfo.proofWaterRand || '')),
  proofWaterSid: new Uint8Array(Buffer.from(ntLogin.loginInfo.proofWaterSid || '')),
})

const runPasswordLoginRequest = async (
  ntLogin: NTLogin.AccountLoginRequest,
): Promise<NTLogin.AccountLoginResponse> => {
  try {
    const response = await withReadyNTLoginService(async (loginService) => {
      log.info('using password login:', ntLogin.loginInfo)
      const loginInfo = buildPasswordLoginRequest(ntLogin)
      const passwordLoginResponse = await loginService.passwordLogin(loginInfo)
      log.debug('passwordLogin resp:', passwordLoginResponse)
      return passwordLoginResponse
    })

    const resolved = await resolvePasswordLoginResponse(ntLogin, response)
    if (resolved.type === 'resolve') {
      return resolved.value
    }
    throw resolved.value
  } catch (error) {
    if (isAccountLoginResponse(error)) {
      throw error
    }
    log.error('login error:', error)
    throw createFailedAccountLoginResponse('登录发生错误')
  }
}

export const NTLoginByAccountInfo = async (
  ntLogin: NTLogin.AccountLoginRequest,
): Promise<NTLogin.AccountLoginResponse> => {
  log.info('req to nt:', JSON.stringify(ntLogin))

  const duplicateLoginWaiter = createDuplicateLoginWaiter()
  const quickLoginFailedWaiter = createQuickLoginFailedWaiter()

  try {
    return await Promise.race([
      duplicateLoginWaiter.promise,
      quickLoginFailedWaiter.promise.then((response) => Promise.reject(response)),
      runPasswordLoginRequest(ntLogin),
    ])
  } finally {
    duplicateLoginWaiter.cancel()
    quickLoginFailedWaiter.cancel()
  }
}
