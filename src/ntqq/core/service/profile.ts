import { useNTCore } from "../core"
import { useLogger } from "../../../common/log"
import { useListenerProxy } from "../dispatcher"

const log = useLogger('service/profile')

/**
 * 初始化个人资料服务
 */
export const initProfileService = () => {
  log.info('initProfileService')
  const { getWrapperSession } = useNTCore()
  const profileService = getWrapperSession().getProfileService()
  const p = useListenerProxy('KernelProfileListener')
  profileService.addKernelProfileListener(p)
}