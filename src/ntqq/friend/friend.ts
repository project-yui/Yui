import { randomUUID } from "crypto"
import { useStore } from "../../store/store"
import { NTFriend } from "./interfaces"
import { useLogger } from "../../common/log"
import { useNTCore } from "../core/core"
import { CustomError } from "../../server/error/custom-error"


const { registerEventListener } = useStore()
const log = useLogger('NTQQ/Friend')

/**
 * 获取好友列表
 * 
 * @returns 好友列表
 */
export const NTGetFriendList = async (): Promise<NTFriend.FriendGroupType[]> => {
  
    const { getWrapperSession } = useNTCore()
    const buddyService = getWrapperSession().getBuddyService()
    const profileService = getWrapperSession().getProfileService();
    const groupList = await buddyService.getBuddyListV2(true, 0);
    
    const result: NTFriend.FriendGroupType[] = []
    if (!groupList.data) throw new CustomError(500, '好友分组获取失败')

    for (const group of groupList.data) {
      const infos = profileService.getCoreAndBaseInfo('nodeStore', group.buddyUids)
      const fs: NTFriend.FriendType[] = []
      for( const id of group.buddyUids) {
        const info = infos.get(id)
        if (!info) continue
        fs.push({
          uid: info.uid,
          qid: "",
          uin: info.uin,
          nick: info.coreInfo.nick,
          remark: info.coreInfo.remark,
          longNick: info.baseInfo.loongNick,
          richTime: info.baseInfo.richTime,
          avatarUrl: `https://q1.qlogo.cn/g?b=qq&nk=${info.uin}&s=100`
        })
      }
      result.push({
        categoryId: group.categoryId,
        categorySortId: group.categorySortId,
        categroyName: group.categroyName,
        categroyMbCount: group.categroyMbCount,
        onlineCount: group.onlineCount,
        buddyList: fs
      })
    }
    return result
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
  const { getWrapperSession } = useNTCore()
  const likeService = getWrapperSession().getProfileLikeService()
  const likeResult = await likeService.setBuddyProfileLike({
    friendUid: userId,
    sourceId: 71,
    doLikeCount: count,
    doLikeTollCount: 0
  })
  log.info('send like result:', likeResult)
  return likeResult
}

/**
 * 为好友点赞
 * 
 * @param userId 好友Id
 * @param count 点赞次数
 * @returns 好友列表
 */
// export const NTGetUserInfo = async (userId: `u_${string}`, count: number): Promise<NTFriend.LikeRespType> => {
//   log.info('send like:', userId, count)
//   const { getWrapperSession } = useNTCore()
//   const profileService = getWrapperSession().getProfileService()
//   const likeResult = await profileService.getUserSimpleInfo()
//   log.info('send like result:', likeResult)
//   return likeResult
// }