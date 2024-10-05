import { useWrapper } from "ntwrapper"
import { useNTCore } from "../core"
import { useLogger } from "../../../common/log"
import { useListenerProxy, useNTDispatcher } from "../dispatcher"

const log = useLogger('service/profile')

/**
 * 初始化个人资料服务
 */
export const initProfileService = () => {
  const { getWrapperSession } = useNTCore()
  const wrapper = useWrapper()
  const profileService = getWrapperSession().getProfileService()
  const p = useListenerProxy('KernelProfileListener')
  const listener = new wrapper.NodeIKernelProfileListener(p)
  profileService.addKernelProfileListener(listener)
}