import { randomUUID } from "crypto"
import { useStore } from "../../store/store"
import { NTFriend } from "./interfaces"
import { useLogger } from "../../common/log"
import { IpcUpInfo } from "../../store/interfaces"
import { useNTCore } from "../core/core"
import { sendEvent } from "../event/base"


const { registerEventListener } = useStore()
const log = useLogger('NTQQ/Friend')

/**
 * 获取好友列表
 * 
 * @returns 好友列表
 */
export const NTGetFriendList = (): Promise<NTFriend.FriendGroupType[]> => {
  return new Promise(async (resolve, reject) => {

    // 超时拒绝
    let time = setTimeout(() => {
      reject(new Error('NTGetFriendList timeout'))
    }, 30000)

    registerEventListener(`KernelBuddyListener/onBuddyListChange`, 'once', (payload: NTFriend.PayloadBuddyList) => {

      // 清除超时计时
      clearTimeout(time)
      resolve(payload.data)
    })
    const { getWrapperSession } = useNTCore()
    const buddyService = getWrapperSession().getBuddyService()
    // buddyService.
    const reqResult = await sendEvent('IPC_UP_2', {
      type: 'request',
      callbackId: randomUUID(),
      eventName: 'ns-NodeStoreApi-2'
    }, ['getBuddyList', null, null])
    
  })
}

/**
 * 为好友点赞
 * 
 * @param userId 好友Id
 * @param count 点赞次数
 * @returns 好友列表
 */
export const NTSendLikeFriend = async (userId: `u_${string}`, count: number): Promise<NTFriend.LikeRespType> => {
  log.info('send like:', userId, count)
  const channel = 'IPC_UP_2'
  const uuid = randomUUID()
  const reqInfo: IpcUpInfo = {
    type: 'request',
    callbackId: uuid,
    eventName: 'ns-ntApi-2'
  }
  const reqData: [string, NTFriend.LikeReqType, any] = [
    "nodeIKernelProfileLikeService/setBuddyProfileLike",
    {
      doLikeUserInfo: {
        friendUid: userId,
        sourceId: 71,
        doLikeCount: count,
        doLikeTollCount: 0
      }
    },
    null
  ]
  const likeResult = await sendEvent<NTFriend.LikeReqType, NTFriend.LikeRespType>(channel, reqInfo, reqData)
  
  log.info('send like result:', likeResult)
  return likeResult.data
}