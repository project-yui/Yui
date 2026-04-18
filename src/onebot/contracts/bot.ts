import { BotActionParams } from "./actions"

/**
 * 登陆数据
 * 机器人 <-> 框架
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

export interface QuickLoginItem {
  /**
   * QQ号
   */
  uin: `${number}`
  /**
   * 用户ID
   */
  uid: `u_${string}`
  /**
   * 昵称
   */
  nick_name: string
  face_url: string
  face_path: string
  login_type: 1 | 2
  /**
   * 是否快速登录
   */
  is_quick_login: boolean
  /**
   * 是否自动登录
   */
  is_auto_login: boolean
}
