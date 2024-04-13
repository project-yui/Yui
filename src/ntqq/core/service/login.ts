import { NodeIKernelLoginListener } from "ntwrapper"
import { useLogger } from "../../../common/log"
import { useListenerProxy } from "../dispatcher"
import { useNTCore } from "../core"
import { initWrapperSession } from "../wrapper-session"
import { useNTUserStore } from "../../store/user"
import { useStore } from "../../../store/store"

const log = useLogger('LoginInit')

/**
 * 初始化登录服务
 */
export const initLogin = () => {
  const { getLoginService } = useNTCore()
  const login = getLoginService()
  const p = useListenerProxy('KernelLoginListener')
  const listener = new NodeIKernelLoginListener(p)
  const { registerEventListener } = useStore()
  log.info('add handle after login success.')
  registerEventListener('KernelLoginListener/onQRCodeLoginSucceed', 'once', (info) => {
    const { userInfo } = useNTUserStore()
    userInfo.uid = info.uid
    userInfo.uin = info.uin
    // start to init session
    initWrapperSession(info.uin, info.uid)
  })
  login.addKernelLoginListener(listener)
}