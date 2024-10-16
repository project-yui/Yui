import { useNTCore } from "../core"
import { useListenerProxy } from "../dispatcher"

/**
 * 初始化群组服务
 * 
 * 登陆后调用
 */
export const initGroupService = () => {
  const { getWrapperSession } = useNTCore()
  const group = getWrapperSession().getGroupService()
  const p = useListenerProxy('KernelGroupListener')
  group.addKernelGroupListener(p)
}