import { randomUUID } from "crypto"
import { useLogger } from "../../common/log"
import { NTLogin } from "./interfaces"
import { useStore } from "../../store/store"
import { useNTCore } from "../core/core"
import { sleep } from "../../common/utils"
import { Oidb0xc9e_8 } from "../core/oidb/0xc9e_8"
import { CheckScanStatusResult } from "../types/core/oidb/0xc9e_8"

const log = useLogger('NT Account')
const { registerEventListener } = useStore()

/**
 * 使用账户登录
 * 
 * @param ntLogin.LoginRequest 登录信息
 * @returns 登录结果
 */
export const NTLoginByAccountInfo = (ntLogin: NTLogin.AccountLoginRequest): Promise<NTLogin.AccountLoginResponse> => {
  return new Promise(async (resolve, reject) => {
    log.info("req to nt:", JSON.stringify(ntLogin))
    let responseStart = false
    const result: NTLogin.AccountLoginResponse = {
      result: "0",
      loginErrorInfo: {
        step: 0,
        errMsg: "",
        proofWaterUrl: "",
        newDevicePullQrCodeSig: "",
        jumpUrl: "",
        jumpWord: "",
        tipsTitle: "",
        tipsContent: ""
      }
    }

    // 注册重复登录监听事件
    const onUserLoggedIn = registerEventListener('KernelLoginListener/onUserLoggedIn', 'once', (payload: any) => {
      if (!responseStart) {
        responseStart = true
        result.result = '-1'
        result.loginErrorInfo.errMsg = '重复登录'
        resolve(result)
      }
    })
    // 注册登录失败事件
    const onQRCodeSessionQuickLoginFailed = registerEventListener('KernelLoginListener/onQRCodeSessionQuickLoginFailed', 'once', (payload: NTLogin.PayloadQRCodeSessionQuickLoginFailed) => {
      // 需要手Q确认，但是手Q没有登录
      result.result = '-1'
      result.loginErrorInfo.errMsg = '需要手Q确认，但是手Q没有登录'
      reject(result)
    })
    
    try {
      // 重复登录会导致超时
      const { getLoginService } = useNTCore()
      await sleep(2000)
      const loginService = getLoginService()
      
      log.info('using password login:', ntLogin.loginInfo)
      // str转Uint8Array
      const loginInfo: NodeIKernelLoginServiceType.PasswordLoginReq = {
        uin: `${ntLogin.loginInfo.uin}`,
        passwordMd5: ntLogin.loginInfo.passwordMd5,
        step: ntLogin.loginInfo.step,
        newDeviceLoginSig: new Uint8Array(Buffer.from(ntLogin.loginInfo.newDeviceLoginSig || '')),
        proofWaterSig: new Uint8Array(Buffer.from(ntLogin.loginInfo.proofWaterSig || '')),
        proofWaterRand: new Uint8Array(Buffer.from(ntLogin.loginInfo.proofWaterRand || '')),
        proofWaterSid: new Uint8Array(Buffer.from(ntLogin.loginInfo.proofWaterSid || ''))
      }
      const resp = await loginService.passwordLogin(loginInfo)
      log.debug('passwordLogin resp:', resp)
      
      // 非重复登录，移除监听
      onUserLoggedIn.remove()

      if (!responseStart) {
        responseStart = true
        if (resp.result === '0') {
          // 直接成功
          onQRCodeSessionQuickLoginFailed.remove()
          resolve(resp)
        }
        else if (resp.result === '4'){
          // 需要手Q确认，通知客户端
          resolve(resp)
        }
        else if (resp.result === '140022008') {
          // 滑动验证
          onQRCodeSessionQuickLoginFailed.remove()
          resolve(resp)
        } else if (resp.result === '140022010') {
          // 设备验证
          log.info('need device verify, start get qrcode')
          const deviceQRCode = new Oidb0xc9e_8(Number(ntLogin.loginInfo.uin))
          const jumpUrl = resp.loginErrorInfo.jumpUrl
          const u = new URL(jumpUrl)
          const uinToken = u.searchParams.get('uin-token') || ''
          const devToken = u.searchParams.get('sig') || ''
          const url = await deviceQRCode.getQRCode(uinToken, devToken)
          resp.loginErrorInfo.deviceVerifyQRCodeUrl = url

          onQRCodeSessionQuickLoginFailed.remove()
          resolve(resp)
        } else {
          // 其它情况
          onQRCodeSessionQuickLoginFailed.remove()
          reject(resp)
        }
      }
    }
    catch(e) {
      log.error('login error:', e)
      if (!responseStart) {
        responseStart = true
        result.result = '-1'
        result.loginErrorInfo.errMsg = '登录发生错误'
        onUserLoggedIn.remove()
        onQRCodeSessionQuickLoginFailed.remove()
        reject(result)
      }
    }

  })
}

export const NTGetDeviceVerifyQRCode = async (uin: number, url: string): Promise<string> => {
  const deviceQRCode = new Oidb0xc9e_8(uin)
  const u = new URL(url)
  const uinToken = u.searchParams.get('uin-token') || ''
  const devToken = u.searchParams.get('sig') || ''
  const result = await deviceQRCode.getQRCode(uinToken, devToken)
  return result
}

export const NTCheckDeviceVerifyQRCodeStatus = async (url: string): Promise<CheckScanStatusResult> => {
  const deviceQRCode = new Oidb0xc9e_8(0)
  const result = await deviceQRCode.checkScanStatus(url)
  return result
}

export const NTLoginByQuickList = (ntLogin: NTLogin.AccountLoginRequest): Promise<NTLogin.AccountLoginResponse> => {
  return new Promise(async (resolve, reject) => {
    log.info("req to nt:", JSON.stringify(ntLogin))
    let responseStart = false
    const result: NTLogin.AccountLoginResponse = {
      result: "0",
      loginErrorInfo: {
        step: 0,
        errMsg: "",
        proofWaterUrl: "",
        newDevicePullQrCodeSig: "",
        jumpUrl: "",
        jumpWord: "",
        tipsTitle: "",
        tipsContent: ""
      }
    }

    // 注册重复登录监听事件
    const onUserLoggedIn = registerEventListener('KernelLoginListener/onUserLoggedIn', 'once', (payload: any) => {
      if (!responseStart) {
        responseStart = true
        result.result = '-1'
        result.loginErrorInfo.errMsg = '重复登录'
        resolve(result)
      }
    })
    try {
      // 重复登录会导致超时
      const { getLoginService } = useNTCore()
      await sleep(2000)
      const loginService = getLoginService()
      // 获取登录列表
      const loginList = await loginService.getLoginList()
      log.info('login list:', loginList)
      const quick = loginList.LocalLoginInfoList.find(e => e.uin === ntLogin.loginInfo.uin && e.isQuickLogin)
      if (quick) {
        // 可以快速登陆
        log.info('using quick login.')
        const loginResult = await loginService.quickLoginWithUin( ntLogin.loginInfo.uin)
        log.info('loginResult:', loginResult)
        resolve(loginResult)
        return
      }
    }
    catch(e) {

    }

  })
}

export const NTGetQuickLoginList = async () => {
  const { getLoginService } = useNTCore()
  await sleep(2000)
  const loginService = getLoginService()
  const loginList = await loginService.getLoginList()
  return loginList.LocalLoginInfoList
}

export const NTQuickLoginByUin = async (uin: `${number}`) => {
  const { getLoginService } = useNTCore()
  await sleep(2000)
  const loginService = getLoginService()
  const loginResult = await loginService.quickLoginWithUin(uin)
  return loginResult
}

export const NTGetLoginStatus = () => new Promise<boolean>(async (resolve) => {
  const { getWrapperSession } = useNTCore()
  try{
    const profileService = getWrapperSession().getProfileService()
    if (!profileService) {
      resolve(false)
      return
    }
    const l = registerEventListener('KernelProfileListener/onSelfStatusChanged', 'once', (payload: any) => {
      log.info('onSelfStatusChanged:', payload)
      log.info('result:', payload.status === 10)
      resolve(payload.status === 10)
    })
    const status = await profileService.getSelfStatus()
    if (status.result !== 0) {
      l.remove()
      resolve(false)
      return
    }
    log.info('self status:', status)
  } catch(e) {
    log.error('get login status error:', e)
    resolve(false)
  }
})