import { BotActionParams } from "../interfaces"

/**
 * 登陆数据
 * 机器人 <-> 框架
 * 
 */
export declare namespace BotLogin {
  
  /**
   * 请求体
   * 机器人 -> 框架
   */
  interface AccountLoginData extends BotActionParams {
    id: number
    password: string
    step: number
    proofWaterSig: string
    proofWaterRand: string
    proofWaterSid: string
    deviceVerifySig?: string
  }

  /**
   * 请求体
   * 机器人 -> 框架
   */
  interface DeviceVerifyQRCodeData extends BotActionParams {
    uin: number
    url: string
  }

  /**
   * 请求体
   * 机器人 -> 框架
   */
  interface DeviceVerifyStatusData extends BotActionParams {
    url: string
  }

  /**
   * 响应体
   * 框架 -> 机器人
   */
  export interface AccountLoginResponse {
    result: `${number}`
    loginErrorInfo: {
      step: number
      errMsg: string
      proofWaterUrl: string
      newDevicePullQrCodeSig: string
      jumpUrl: string
      jumpWord: string
      tipsTitle: string
      tipsContent: string
    }
  }
  export interface QrCodeResponse {
    qrCodeImage: string
    qrCodeUrl: string
    expireTime: number
  }
}