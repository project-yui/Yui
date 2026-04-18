import { useLogger } from "../../common/log"
import { NTGetFriendList, NTSendLikeFriend } from "../../ntqq/friend/friend"
import { LikeUserReq } from "../../onebot/contracts/friend"
import { getUserInfo } from "./friend-query-service"

const log = useLogger('App/FriendService')

export { getUserInfo } from "./friend-query-service"

export const getFriendList = async () => {
  const list = await NTGetFriendList()
  return list.map(e => ({
    id: e.categoryId,
    name: e.categroyName,
    count: e.categroyMbCount,
    friend_list: e.buddyList.map(f => ({
      uin: parseInt(f.uin),
      nick: f.nick,
      avatar_url: f.avatarUrl,
      remark: f.remark,
      long_nick: f.longNick,
    }))
  }))
}

export const sendLikeFriend = async (payload: LikeUserReq) => {
  log.info('sendLikeFriend')
  const result = await NTSendLikeFriend(payload.userId, payload.count)
  log.info('sendLikeFriend end')
  return result
}
