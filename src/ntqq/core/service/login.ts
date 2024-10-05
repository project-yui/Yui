import { useWrapper } from "ntwrapper"
import { useLogger } from "../../../common/log"
import { useListenerProxy } from "../dispatcher"
import { useNTCore } from "../core"
import { initWrapperSession } from "../wrapper-session"
import { useNTUserStore } from "../../store/user"
import { useStore } from "../../../store/store"
import { useAsyncStore } from "../../../store/async-store"

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
  const wrapper = useWrapper()
  const p = useListenerProxy('KernelLoginListener')
  const listener = new wrapper.NodeIKernelLoginListener(p)
  const { registerEventListener } = useStore()
  log.info('add handle after login success.')
  registerEventListener('KernelLoginListener/onQRCodeLoginSucceed', 'always', (info) => {
    const { getUserInfo } = useNTUserStore()
    const userInfo = getUserInfo()
    userInfo.uid = info.uid
    userInfo.uin = info.uin
    // start to init session
    initWrapperSession(info.uin, info.uid)
  })
  login.addKernelLoginListener(listener)
}