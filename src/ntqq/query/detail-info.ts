import { useLogger } from "../../common/log"
import { getNTGroupService, getNTProfileService } from "../core/core"
import { GroupDetailInfoType, UserDetailInfoType } from "../../onebot/contracts/common"
import { createNTEventWaiter } from "./wait"
const log = useLogger('NTQQ/Query/DetailInfo')

export const getUserInfoByUid = (uid: `u_${string}`): Promise<UserDetailInfoType> => {
  log.info('getUserInfoByUid start')
  return new Promise(async (resolve, reject) => {
    const waiter = createNTEventWaiter<[UserDetailInfoType], UserDetailInfoType>({
      event: 'KernelProfileListener/onUserDetailInfoChanged',
      match: (payload) => payload.uid === uid,
      select: (payload) => payload,
    })
    try {
      const service = getNTProfileService()
      log.info('getUserInfoByUid call', service)
      const result = await service.fetchUserDetailInfo('BuddyProfileStore', [uid], 1, [0])
      log.info(`getUserInfoByUid[${uid}]:`, result)
      resolve(await waiter.promise)
    } catch (error) {
      waiter.cancel()
      reject(error)
    }
  })
}

export const getGroupInfoById = (gid: number): Promise<GroupDetailInfoType> => {
  return new Promise(async (resolve, reject) => {
    const waiter = createNTEventWaiter<[GroupDetailInfoType], GroupDetailInfoType>({
      event: 'KernelGroupListener/onGroupDetailInfoChange',
      match: (payload) => payload.groupCode === `${gid}`,
      select: (payload) => payload,
    })
    try {
      const service = getNTGroupService()
      const result = await service.getGroupDetailInfo(`${gid}`, 1)
      log.info(`getGroupDetailInfo[${gid}]:`, result)
      resolve(await waiter.promise)
    } catch (error) {
      waiter.cancel()
      reject(error)
    }
  })
}
