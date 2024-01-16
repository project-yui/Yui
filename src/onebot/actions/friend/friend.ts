import { useStore } from "../../../store/store"
import { BotActionResponse } from "../interfaces"
import { NTGetFriendList, NTSendLikeFriend } from "../../../ntqq/friend/friend"
import { LikeUserReq } from "./interfaces"

const { registerActionHandle } = useStore()

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
const sendLikeFriend = async (p: LikeUserReq): Promise<BotActionResponse<any>> => {
  const ret: BotActionResponse = {
    id: "",
    status: "ok",
    retcode: 0,
    data: undefined,
    message: ""
  }
  const r = await NTSendLikeFriend(p.user_id, p.count)
  // TODO: 错误码处理
  ret.data = r
  return ret
}

/**
 * 初始化好友动作
 */
export const initFriend = () => {
  // 注册获取好友列表
  registerActionHandle('get_friend_list', getFriendList)
  registerActionHandle('send_like_friend', sendLikeFriend)
}