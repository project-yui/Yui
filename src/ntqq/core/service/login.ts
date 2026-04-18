
import { useLogger } from "../../../common/log"
import { bindLoginKernelListener } from "./bind-kernel-listener"

const log = useLogger('LoginInit')

/**
 * 初始化登录服务
 */
export const initLogin = () => {
  log.info('create listener')
  bindLoginKernelListener({
    listenerName: 'KernelLoginListener',
    attach: (service, listener) => service.addKernelLoginListener(listener),
  })
}
