import { NodeIKernelLoginListener } from "ntwrapper"
import { useLogger } from "../../../common/log"
import { useNTDispatcher } from "../dispatcher"
import { useNTCore } from "../core"
import { initWrapperSession } from "../wrapper-session"
import { useNTUserStore } from "../../store/user"

const log = useLogger('LoginInit')
const dispatcher = useNTDispatcher()

/**
 * 初始化登录服务
 */
export const initLogin = () => {
  const { getLoginService } = useNTCore()
  const login = getLoginService()
  const listener = new NodeIKernelLoginListener({
    onLoginConnected(...args) {
      log.info('KernelLoginListener/onLoginConnected', ...args)
      dispatcher.emit('KernelLoginListener/onLoginConnected', ...args)
    },
    onLoginDisConnected(...args) {
      log.info('KernelLoginListener/onLoginDisConnected', ...args)
      dispatcher.emit('KernelLoginListener/onLoginDisConnected', ...args)
    },
    onLoginConnecting(...args) {
      log.info('KernelLoginListener/onLoginConnecting', ...args)
      dispatcher.emit('KernelLoginListener/onLoginConnecting', ...args)
    },
    onQRCodeGetPicture(...args) {
      log.info('KernelLoginListener/onQRCodeGetPicture', ...args)
      dispatcher.emit('KernelLoginListener/onQRCodeGetPicture', ...args)
    },
    onQRCodeLoginPollingStarted(...args) {
      log.info('KernelLoginListener/onQRCodeLoginPollingStarted', ...args)
      dispatcher.emit('KernelLoginListener/onQRCodeLoginPollingStarted', ...args)
    },
    onQRCodeSessionUserScaned(...args) {
      log.info('KernelLoginListener/onQRCodeSessionUserScaned', ...args)
      dispatcher.emit('KernelLoginListener/onQRCodeSessionUserScaned', ...args)
    },
    onLoginState(...args) {
      log.info('KernelLoginListener/onLoginState', ...args)
      dispatcher.emit('KernelLoginListener/onLoginState', ...args)
    },
    /**
     * 扫描/快速登录成功
     * 
     * @param args 
     */
    onQRCodeLoginSucceed(info) {
      log.info('KernelLoginListener/onQRCodeLoginSucceed', info)
      dispatcher.emit('KernelLoginListener/onQRCodeLoginSucceed', info)
      const { userInfo } = useNTUserStore()
      userInfo.uid = info.uid
      userInfo.uin = info.uin
      // start to init session
      initWrapperSession(info.uin, info.uid)
    },
    onQRCodeSessionFailed(...args) {
      log.info('KernelLoginListener/onQRCodeSessionFailed', ...args)
      dispatcher.emit('KernelLoginListener/onQRCodeSessionFailed', ...args)
    },
    onLoginFailed(...args) {
      log.info('KernelLoginListener/onLoginFailed', ...args)
      dispatcher.emit('KernelLoginListener/onLoginFailed', ...args)
    },
    onLogoutSucceed(...args) {
      log.info('KernelLoginListener/onLogoutSucceed', ...args)
      dispatcher.emit('KernelLoginListener/onLogoutSucceed', ...args)
    },
    onLogoutFailed(...args) {
      log.info('KernelLoginListener/onLogoutFailed', ...args)
      dispatcher.emit('KernelLoginListener/onLogoutFailed', ...args)
    },
    onUserLoggedIn(...args) {
      log.info('KernelLoginListener/onUserLoggedIn', ...args)
      dispatcher.emit('KernelLoginListener/onUserLoggedIn', ...args)
    },
    onQRCodeSessionQuickLoginFailed(...args) {
      log.info('KernelLoginListener/onQRCodeSessionQuickLoginFailed', ...args)
      dispatcher.emit('KernelLoginListener/onQRCodeSessionQuickLoginFailed', ...args)
    },
    onPasswordLoginFailed(...args) {
      log.info('KernelLoginListener/onPasswordLoginFailed', ...args)
      dispatcher.emit('KernelLoginListener/onPasswordLoginFailed', ...args)
    },
    OnConfirmUnusualDeviceFailed(...args) {
      log.info('KernelLoginListener/OnConfirmUnusualDeviceFailed', ...args)
      dispatcher.emit('KernelLoginListener/OnConfirmUnusualDeviceFailed', ...args)
    },
    onQQLoginNumLimited(...args) {
      log.info('KernelLoginListener/onQQLoginNumLimited', ...args)
      dispatcher.emit('KernelLoginListener/onQQLoginNumLimited', ...args)
    },
  })
  login.addKernelLoginListener(listener)
}