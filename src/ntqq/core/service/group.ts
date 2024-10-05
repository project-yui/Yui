import { useNTCore } from "../core"
import { useListenerProxy, useNTDispatcher } from "../dispatcher"
import { useLogger } from "../../../common/log"
import { useNTWrapper } from "./nt-wrapper"

/**
 * 初始化群组服务
 * 
 * 登陆后调用
 */
export const initGroupService = () => {
  const { getWrapperSession } = useNTCore()
  const group = getWrapperSession().getGroupService()
  const p = useListenerProxy('KernelGroupListener')
  const wrapper = useNTWrapper()
  const listener = new wrapper.NodeIKernelGroupListener(p)
  group.addKernelGroupListener(listener)
}