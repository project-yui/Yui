import { useLogger } from "../../../common/log"
import { getNTProfileService } from "../core"
import { bindRuntimeServiceKernelListener } from "./bind-kernel-listener"

const log = useLogger('service/profile')

/**
 * 初始化个人资料服务
 */
export const initProfileService = () => {
  log.info('initProfileService')
  bindRuntimeServiceKernelListener({
    listenerName: 'KernelProfileListener',
    getService: getNTProfileService,
    attach: (service, listener) => service.addKernelProfileListener(listener),
  })
}
