import { useLogger } from "../../common/log"
import {
  NTCheckDeviceVerifyQRCodeStatus,
  NTGetDeviceVerifyQRCode,
  NTGetLoginQrCode,
  NTGetLoginStatus,
  NTLoginByAccountInfo,
  NTQuickLoginByUin,
} from "../../ntqq/login"
import { NTParseClipboard2Msg } from "../../ntqq/common/clipboard"
import { CheckScanStatusResult } from "../../ntqq/types/core/oidb/0xc9e_8"
import { BotLogin } from "../../onebot/contracts/bot"
import { CustomError } from "../../common/error/custom-error"
import { NTLogin } from "../../ntqq/login/interfaces"
import { getAccountList, getBotInfo } from "./login-self-service"
import { getQuickLoginList } from "./login-quick-service"

const log = useLogger('App/LoginService')

export { getAccountList, getBotInfo } from "./login-self-service"
export { getQuickLoginList } from "./login-quick-service"

const buildAccountLoginRequest = (payload: BotLogin.AccountLoginData): NTLogin.AccountLoginRequest => {
  if (payload.id === undefined || payload.id === null || typeof payload.id !== 'number') {
    throw new CustomError(10003, 'id参数不正确')
  }
  return {
    loginInfo: {
      uin: `${payload.id}`,
      passwordMd5: payload.password,
      step: payload.step,
      newDeviceLoginSig: payload.deviceVerifySig || '',
      proofWaterSig: payload.proofWaterSig,
      proofWaterRand: payload.proofWaterRand,
      proofWaterSid: payload.proofWaterSid
    }
  }
}

export const loginByAccount = async (payload: BotLogin.AccountLoginData) => {
  log.info("req param from client:", JSON.stringify(payload))
  const request = buildAccountLoginRequest(payload)
  log.info("req to nt:", JSON.stringify(request))
  try {
    return await NTLoginByAccountInfo(request)
  }
  catch (error) {
    return error
  }
}

export const getDeviceVerifyQRCode = async (payload: BotLogin.DeviceVerifyQRCodeData): Promise<string> => {
  return await NTGetDeviceVerifyQRCode(payload.uin, payload.url)
}

export const checkDeviceVerifyQRCodeStatus = async (payload: BotLogin.DeviceVerifyStatusData): Promise<CheckScanStatusResult> => {
  return await NTCheckDeviceVerifyQRCodeStatus(payload.url)
}

export const loginByQrCode = async () => {
  return await NTGetLoginQrCode()
}

export const getLoginStatus = async (): Promise<boolean> => {
  return await NTGetLoginStatus()
}

export const getClipboardMsg = async () => {
  return await NTParseClipboard2Msg()
}

export const quickLoginByUin = async (uin: `${number}`) => {
  const result = await NTQuickLoginByUin(uin)
  if (result.result !== '0') {
    throw new CustomError(parseInt(result.result), result.loginErrorInfo.errMsg)
  }
  return {}
}
