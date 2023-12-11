import { randomUUID } from "crypto"
import { useLogger } from "../../common/log"
import { sendEvent } from "../event/base"
import { NTLogin } from "./interfaces"
import { useStore } from "../../store/store"

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
    const onUserLoggedIn = registerEventListener('IPC_DOWN_1_ns-ntApi-1_nodeIKernelLoginListener/onUserLoggedIn', 'once', (payload: any) => {
      if (!responseStart) {
        responseStart = true
        result.result = '-1'
        result.loginErrorInfo.errMsg = '重复登录'
        resolve(result)
      }
    })
    // 注册登录失败事件
    const onQRCodeSessionQuickLoginFailed = registerEventListener('IPC_DOWN_1_ns-ntApi-1_nodeIKernelLoginListener/onQRCodeSessionQuickLoginFailed', 'once', (payload: NTLogin.PayloadQRCodeSessionQuickLoginFailed) => {
      // 需要手Q确认，但是手Q没有登录
      result.result = '-1'
      result.loginErrorInfo.errMsg = '需要手Q确认，但是手Q没有登录'
      reject(result)
    })
    const onConfirmUnusualDeviceFailed = registerEventListener('IPC_DOWN_1_ns-ntApi-1_nodeIKernelLoginListener/OnConfirmUnusualDeviceFailed', 'once', (payload: NTLogin.PayloadConfirmUnusualDeviceFailed) => {
      // 手Q有登录，但是手Q取消/拒绝授权
      result.result = '-1'
      let msg = '不知道发生了什么'
      if (payload.errCode === 5) {
        msg = '手机端取消授权'
      }
      else if(payload.errCode === 9) {
        msg = '手机端拒绝授权'
      }
      else if(payload.errCode === 10) {
        msg = '手机端长时间未确认'
      }
      result.loginErrorInfo.errMsg = `手Q有登录，但是${msg}`
      reject(result)
    })
    
    const onLoginState = registerEventListener('IPC_DOWN_1_ns-ntApi-1_nodeIKernelLoginListener/onLoginState', 'once', (payload: { state: number }) => {
      if (payload.state === 0) {
        // 手Q确认，登录成功
        resolve(result)
      }
    })
    try {
      // 重复登录会导致超时
      const resp = await sendEvent<NTLogin.AccountLoginRequest, NTLogin.AccountLoginResponse>('IPC_UP_1', {
        type: "request",
        callbackId: randomUUID(),
        eventName: "ns-ntApi-1"
      }, [
        'nodeIKernelLoginService/passwordLogin',
        ntLogin,
        null
      ])
      // 非重复登录，移除监听
      onUserLoggedIn.remove()

      if (!responseStart) {
        responseStart = true
        const data = resp.data
        if (data.result === '0') {
          // 直接成功
          onLoginState.remove()
          onQRCodeSessionQuickLoginFailed.remove()
          onConfirmUnusualDeviceFailed.remove()
          resolve(resp.data)
        }
        else if (data.result === '4'){
          // 需要手Q确认，通知客户端

        }
        else if (data.result === '140022008') {
          // 滑动验证
          onLoginState.remove()
          onQRCodeSessionQuickLoginFailed.remove()
          onConfirmUnusualDeviceFailed.remove()
          resolve(resp.data)
        }
        else {
          // 其它情况
          onLoginState.remove()
          onQRCodeSessionQuickLoginFailed.remove()
          onConfirmUnusualDeviceFailed.remove()
          reject(resp.data)
        }
      }
    }
    catch(e) {

    }

  })
}