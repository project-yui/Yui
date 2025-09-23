
import { useLogger } from "../../../common/log"
import { useListenerProxy } from "../dispatcher"
import { useNTCore } from "../core"
import { initWrapperSession } from "../wrapper-session"
import { useNTUserStore } from "../../store/user"
import { useStore } from "../../../store/store"
import { useAsyncStore } from "../../../store/async-store"
import { useNTWrapper } from "./nt-wrapper"

const log = useLogger('LoginInit')

/**
 * 初始化登录服务
 */
export const initLogin = () => {
  const asyncStore = useAsyncStore()
  const s = asyncStore.getStore()
  log.info('initLogin async store:', s)
  const { getLoginService } = useNTCore()
  const login = getLoginService()
  const p = useListenerProxy('KernelLoginListener')
  log.info('create listener')
  const { registerEventListener } = useStore()
  log.info('add handle after login success.')
  registerEventListener('KernelLoginListener/onQRCodeLoginSucceed', 'always', (info) => {
    const { getUserInfo } = useNTUserStore()
    const userInfo = getUserInfo()
    log.info('qrcode login success:', info, userInfo)
    userInfo.uid = info.uid
    userInfo.uin = parseInt(info.uin)
    log.info('qrcode login user info:', info)
    // start to init session
    initWrapperSession(info.uin, info.uid)
  })
  login.addKernelLoginListener(p)
}