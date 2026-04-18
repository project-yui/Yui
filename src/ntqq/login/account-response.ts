import { useLogger } from "../../common/log"
import { NTLogin } from "./interfaces"
import { getDeviceVerifyQRCodeFromJumpUrl } from "./account-device-verify"

const log = useLogger('NT Account')

const PASSWORD_LOGIN_RESOLVE_RESULTS = new Set<NTLogin.AccountLoginResponse['result']>([
  '0',
  '4',
  '140022008',
])

export const createDefaultAccountLoginResponse = (): NTLogin.AccountLoginResponse => ({
  result: '0',
  loginErrorInfo: {
    step: 0,
    errMsg: '',
    proofWaterUrl: '',
    newDevicePullQrCodeSig: '',
    jumpUrl: '',
    jumpWord: '',
    tipsTitle: '',
    tipsContent: '',
  },
})

const appendDeviceVerifyQRCode = async (
  ntLogin: NTLogin.AccountLoginRequest,
  response: NTLogin.AccountLoginResponse,
) => {
  const deviceVerifyQRCodeUrl = await getDeviceVerifyQRCodeFromJumpUrl(
    Number(ntLogin.loginInfo.uin),
    response.loginErrorInfo.jumpUrl,
  )
  ;(
    response.loginErrorInfo as typeof response.loginErrorInfo & {
      deviceVerifyQRCodeUrl?: string
    }
  ).deviceVerifyQRCodeUrl = deviceVerifyQRCodeUrl
  return response
}

export const resolvePasswordLoginResponse = async (
  ntLogin: NTLogin.AccountLoginRequest,
  response: NTLogin.AccountLoginResponse,
): Promise<{ type: 'resolve' | 'reject', value: NTLogin.AccountLoginResponse }> => {
  if (PASSWORD_LOGIN_RESOLVE_RESULTS.has(response.result)) {
    return {
      type: 'resolve',
      value: response,
    }
  }

  if (response.result === '140022010') {
    log.info('need device verify, start get qrcode')
    return {
      type: 'resolve',
      value: await appendDeviceVerifyQRCode(ntLogin, response),
    }
  }

  return {
    type: 'reject',
    value: response,
  }
}

export const createFailedAccountLoginResponse = (errMsg: string) => {
  const response = createDefaultAccountLoginResponse()
  response.result = '-1'
  response.loginErrorInfo.errMsg = errMsg
  return response
}

export const isAccountLoginResponse = (value: unknown): value is NTLogin.AccountLoginResponse => {
  return typeof value === 'object'
    && value !== null
    && 'result' in value
    && 'loginErrorInfo' in value
}
