import { NodeIKernelGroupListener } from "ntwrapper"
import { useNTCore } from "../core"
import { useListenerProxy, useNTDispatcher } from "../dispatcher"
import { useLogger } from "../../../common/log"

/**
 * 初始化群组服务
 * 
 * 登陆后调用
 */
export const initGroupService = () => {
  const { getWrapperSession } = useNTCore()
  const group = getWrapperSession().getGroupService()
  const p = useListenerProxy('KernelGroupListener')
  const listener = new NodeIKernelGroupListener(p)
  group.addKernelGroupListener(listener)
}