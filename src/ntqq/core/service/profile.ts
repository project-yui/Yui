import { NodeIKernelProfileListener } from "ntwrapper"
import { useNTCore } from "../core"
import { useLogger } from "../../../common/log"
import { useNTDispatcher } from "../dispatcher"

const log = useLogger('service/profile')
const dispatcher = useNTDispatcher()

/**
 * 初始化个人资料服务
 */
export const initProfileService = () => {
  const { getWrapperSession } = useNTCore()
  const profileService = getWrapperSession().getProfileService()
  const listener = new NodeIKernelProfileListener({
    onProfileDetailInfoChanged(...args) {
        log.info('KernelProfileListener/onProfileDetailInfoChanged', ...args)
        dispatcher.emit('KernelProfileListener/onProfileDetailInfoChanged', ...args)
    },
    onProfileSimpleChanged(...args) {
      // log.info('KernelProfileListener/onProfileSimpleChanged', ...args)
      dispatcher.emit('KernelProfileListener/onProfileSimpleChanged', ...args)
    },
    onStatusUpdate(...args) {
      log.info('KernelProfileListener/onStatusUpdate', ...args)
      dispatcher.emit('KernelProfileListener/onStatusUpdate', ...args)
    },
    onSelfStatusChanged(...args) {
      log.info('KernelProfileListener/onSelfStatusChanged', ...args)
      dispatcher.emit('KernelProfileListener/onSelfStatusChanged', ...args)
    },
  })
  profileService.addKernelProfileListener(listener)
}