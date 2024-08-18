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
const getFriendList = async (p: {}): Promise<BotActionResponse<any>> => {
  const ret: BotActionResponse = {
    id: "",
    status: "ok",
    retcode: 0,
    data: undefined,
    message: ""
  }
  const list = await NTGetFriendList()
  ret.data = list
  return ret
}

/**
 * 对好友进行点赞
 * 
 * @param p 点赞参数
 * @returns 点赞结果
 */
const sendLikeFriend = async (p: LikeUserReq): Promise<any> => {
  log.info('sendLikeFriend')
  const r = await NTSendLikeFriend(p.user_id, p.count)
  log.info('sendLikeFriend end')
  // TODO: 错误码处理
  return r
}

const getUserInfo = async (p: UserInfoReq): Promise<UserInfoResp> => {
  const resp: UserInfoResp = {
    user_uid: "u_",
    user_uin: 0,
    nick: "",
    user_displayname: "",
    user_remark: "",
    avatar_url: ''
  }
  const ret = await getUserInfoByUid(p.user_uid)
  log.info('getUserDetailInfo:', ret)
  resp.user_uid = ret.uid
  resp.user_uin = parseInt(ret.uin)
  resp.nick = ret.simpleInfo.coreInfo.nick
  resp.avatar_url = `http://q1.qlogo.cn/g?b=qq&nk=${resp.user_uin}&s=640`
  return resp
}
/**
 * 初始化好友动作
 */
export const initFriend = () => {
  // 注册获取好友列表
  registerActionHandle('get_friend_list', getFriendList)
  registerActionHandle('send_like_friend', sendLikeFriend)
  registerActionHandle('get_user_info', getUserInfo)
}