import { useStore } from "../../../store/store"
import { BotActionResponse } from "../interfaces"
import { NTGetFriendList, NTSendLikeFriend } from "../../../ntqq/friend/friend"
import { LikeUserReq, UserInfoReq, UserInfoResp } from "./interfaces"
import { useLogger } from "../../../common/log"
import { useNTCore } from "../../../ntqq/core/core"
import { getUserInfoByUid } from "../../common/user"

const { registerActionHandle } = useStore()
const log = useLogger('Action/Friend')

/**
 * 获取好友列表
 * 
 * @param p 空参数
 * @returns 好友列表
 */
const getFriendList = async (p: {}): Promise<any> => {
  const list = await NTGetFriendList()
  const result = list.map(e => ({
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
  return result
}

/**
 * 对好友进行点赞
 * 
 * @param p 点赞参数
 * @returns 点赞结果
 */
const sendLikeFriend = async (p: LikeUserReq): Promise<any> => {
  log.info('sendLikeFriend')
  const r = await NTSendLikeFriend(p.userId, p.count)
  log.info('sendLikeFriend end')
  // TODO: 错误码处理
  return r
}

const getUserInfo = async (p: UserInfoReq): Promise<UserInfoResp> => {
  const resp: UserInfoResp = {
    uid: "u_",
    uin: 0,
    nick: "",
    userDisplayname: "",
    userRemark: "",
    avatarUrl: ''
  }
  const ret = await getUserInfoByUid(p.userUid)
  log.info('getUserDetailInfo:', ret)
  resp.uid = ret.uid
  resp.uin = parseInt(ret.uin)
  resp.nick = ret.simpleInfo.coreInfo.nick
  resp.avatarUrl = `http://q1.qlogo.cn/g?b=qq&nk=${resp.uin}&s=640`
  return resp
}
/**
 * 初始化好友动作
 */
export const initFriend = () => {
  // 注册获取好友列表
  registerActionHandle('get_friend_list', getFriendList)
  registerActionHandle('get_friend_list_with_group', getFriendList)
  registerActionHandle('send_like_friend', sendLikeFriend)
  registerActionHandle('get_user_info', getUserInfo)
}