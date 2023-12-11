/**
 * 登录数据
 * 框架 <-> NTQQ
 */
export declare namespace NTLogin {
  
  /**
   * 登录数据
   * 框架 -> NTQQ
   */
  interface AccountLoginRequest {
    loginInfo: {
      /**
       * 用户账号
       */
      uin: `${number}`
      /**
       * 用户密码的MD5
       * 
       */
      passwordMd5: string
      step: number
      newDeviceLoginSig: string
      proofWaterSig: string
      proofWaterRand: string
      proofWaterSid: string
    }
  }

  /**
   * 响应数据
   * NTQQ -> 框架
   */
  export interface AccountLoginResponse {
    /**
     * 0 - 成功
     * 
     * 4 - 登录需要手Q验证。
     * 
     * 140022013 - 账号或密码错误
     * 
     * 140022008 - 滑动验证码
     * 
     */
    result: `${number}`
    loginErrorInfo: {
      step: number
      errMsg: string
      /**
       * 滑动验证码的链接
       */
      proofWaterUrl: string
      newDevicePullQrCodeSig: string
      jumpUrl: string
      jumpWord: string
      tipsTitle: string
      tipsContent: string
    }
  }

  /**
   * 二维码
   */
  export interface GetQRCodeResponse {
    qrcodeInfo: {
      pngBase64QrcodeData: string
      qrcodeUrl: string
      expireTime: number
      pollTimeInterval: number
    }
  }

  export interface PayloadQRCodeSessionQuickLoginFailed {
    code: number
    errMsg: string
    result: {
      pngBase64QrcodeData: string
      qrcodeUrl: string
      expireTime: number
      pollTimeInterval: number
    }
  }

  /**
   * 非常用设备，手机端确认异常
   */
  export interface PayloadConfirmUnusualDeviceFailed {
    /**
     * 5 - 手Q取消授权
     * 9 - 手Q拒绝授权
     * 10 - 手机端长时间未确认
     */
    errCode: number
    errMsg: string
    tips: {
      tips_version: string
      tips_title: string
      tips_template: string
    }
  }
}