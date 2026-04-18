import { useLogger } from "../../../common/log"
import { getNTBuddyService } from "../core"
import { bindRuntimeServiceKernelListener } from "./bind-kernel-listener"
const log = useLogger('BuddyService')

/**
 * 初始化好友服务
 * 
 * 登陆后调用
 */
export const initBuddyService = () => {
  bindRuntimeServiceKernelListener({
    listenerName: 'KernelBuddyListener',
    getService: getNTBuddyService,
    attach: (service, listener) => service.addKernelBuddyListener(listener),
  })
}
