import { getNTGroupService } from "../core"
import { bindRuntimeServiceKernelListener } from "./bind-kernel-listener"

/**
 * 初始化群组服务
 * 
 * 登陆后调用
 */
export const initGroupService = () => {
  bindRuntimeServiceKernelListener({
    listenerName: 'KernelGroupListener',
    getService: getNTGroupService,
    attach: (service, listener) => service.addKernelGroupListener(listener),
  })
}
