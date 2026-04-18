import { useLogger } from "../../common/log"
import { getNTProfileService } from "../core/core"
import { createNTEventWaiter } from "../query/wait"

const log = useLogger('NTQQ/Login/status')

const createNTSelfStatusWaiter = () => createNTEventWaiter<[any], boolean>({
  event: 'KernelProfileListener/onSelfStatusChanged',
  match: () => true,
  select: (payload) => {
    log.info('onSelfStatusChanged:', payload)
    log.info('result:', payload.status === 10)
    return payload.status === 10
  },
})

export const NTGetLoginStatus = async (): Promise<boolean> => {
  try {
    const profileService = getNTProfileService()
    if (!profileService) {
      return false
    }

    const waiter = createNTSelfStatusWaiter()
    const status = await profileService.getSelfStatus()
    if (status.result !== 0) {
      waiter.cancel()
      return false
    }

    log.info('self status:', status)
    return await waiter.promise
  }
  catch (error) {
    log.error('get login status error:', error)
    return false
  }
}
