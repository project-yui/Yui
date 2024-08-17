import { NTLoginByAccountInfo } from "../../ntqq/login/account"
import { NTLogin } from "../../ntqq/login/interfaces"
import { NTGetLoginQrCode } from "../../ntqq/login/qrcode"
import { BotLogin } from "../../onebot/actions/bot/interfaces"
import { BotActionResponse, BotActionParams } from "../../onebot/actions/interfaces"
import { useLogger } from "../../common/log"
import { CustomError } from "../../server/error/custom-error"

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
      step: 0,
      newDeviceLoginSig: "",
      proofWaterSig: "",
      proofWaterRand: "",
      proofWaterSid: ""
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

/**
 * 使用二维码登录
 * 
 * @param p 
 * @returns 登录的二维码
 */
export const loginByQrCode = async (p: BotActionParams): Promise<BotLogin.QrCodeResponse> => {
  const resp = await NTGetLoginQrCode()
  return {
    qrCodeImage: resp.pngBase64QrcodeData,
    qrCodeUrl: resp.qrcodeUrl,
    expireTime: resp.expireTime
  }
}