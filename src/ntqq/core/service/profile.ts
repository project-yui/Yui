import { NodeIKernelProfileListener } from "ntwrapper"
import { useNTCore } from "../core"
import { useLogger } from "../../../common/log"
import { useListenerProxy, useNTDispatcher } from "../dispatcher"

const log = useLogger('service/profile')
const dispatcher = useNTDispatcher()

/**
 * 初始化个人资料服务
 */
export const initProfileService = () => {
  const { getWrapperSession } = useNTCore()
  const profileService = getWrapperSession().getProfileService()
  const p = useListenerProxy('KernelProfileListener')
  const listener = new NodeIKernelProfileListener(p)
  profileService.addKernelProfileListener(listener)
}