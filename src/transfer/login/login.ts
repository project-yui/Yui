import { NTCheckDeviceVerifyQRCodeStatus, NTGetDeviceVerifyQRCode, NTLoginByAccountInfo } from "../../ntqq/login/account"
import { NTLogin } from "../../ntqq/login/interfaces"
import { NTGetLoginQrCode } from "../../ntqq/login/qrcode"
import { BotLogin } from "../../onebot/actions/bot/interfaces"
import { BotActionParams } from "../../onebot/actions/interfaces"
import { useLogger } from "../../common/log"
import { CustomError } from "../../server/error/custom-error"
import { CheckScanStatusResult } from "../../ntqq/types/core/oidb/0xc9e_8"

const log = useLogger('Login')

/**
 * 使用账户进行登录
 * 
 * wss -> NTQQ
 * 
 * @param p 账户信息
 * @returns 登录结果
 */
export const loginByAccount = async (p: BotLogin.AccountLoginData): Promise<any> => {
  log.info("req param from client:", JSON.stringify(p))
  if (p.id === undefined || p.id == null || typeof p.id !== 'number') {
    throw new CustomError(10003, 'id参数不正确')
  }
  const ntLogin: NTLogin.AccountLoginRequest = {
    loginInfo: {
      uin: `${p.id}`,
      passwordMd5: p.password,
      step: p.step,
      newDeviceLoginSig: p.deviceVerifySig || '',
      proofWaterSig: p.proofWaterSig,
      proofWaterRand: p.proofWaterRand,
      proofWaterSid: p.proofWaterSid
    }
  }
  log.info("req to nt:", JSON.stringify(ntLogin))
  try {
    const resp = await NTLoginByAccountInfo(ntLogin)
    return resp
  }
  catch(e) {
    return e
  }

}

export const getDeviceVerifyQRCode = async (p: BotLogin.DeviceVerifyQRCodeData): Promise<string> => {
  const result = await NTGetDeviceVerifyQRCode(p.uin, p.url)
  return result
}

export const checkDeviceVerifyQRCodeStatus = async (p: BotLogin.DeviceVerifyStatusData): Promise<CheckScanStatusResult> => {
  const result = await NTCheckDeviceVerifyQRCodeStatus(p.url)
  return result
}

/**
 * 使用二维码登录
 * 
 * @param p 
 * @returns 登录的二维码
 */
export const loginByQrCode = async (p: BotActionParams) => {
  log.info('loginByQrCode', p);
  const resp = await NTGetLoginQrCode()
}