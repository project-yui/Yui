import { useNTCore } from "../core"
import { useListenerProxy, useNTDispatcher } from "../dispatcher"
import { useLogger } from "../../../common/log"
import { useNTWrapper } from "./nt-wrapper"
const log = useLogger('BuddyService')

/**
 * 初始化好友服务
 * 
 * 登陆后调用
 */
export const initBuddyService = () => {
  const { getWrapperSession } = useNTCore()
  const buddy = getWrapperSession().getBuddyService()
  const p = useListenerProxy('KernelBuddyListener')
  const wrapper = useNTWrapper()
  const listener = new wrapper.NodeIKernelBuddyListener(p)
  buddy.addKernelBuddyListener(listener)
}