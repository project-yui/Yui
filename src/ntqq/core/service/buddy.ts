import { NodeIKernelBuddyListener } from "ntwrapper"
import { useNTCore } from "../core"
import { useListenerProxy, useNTDispatcher } from "../dispatcher"
import { useLogger } from "../../../common/log"

const dispatcher = useNTDispatcher()
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
  const listener = new NodeIKernelBuddyListener(p)
  buddy.addKernelBuddyListener(listener)
}