import { useStore } from "../../../store/store"
import { BotActionResponse } from "../interfaces"
import { NTGetFriendList } from "../../../ntqq/friend/friend"

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
 * 初始化好友动作
 */
export const initFriend = () => {
  // 注册获取好友列表
  registerActionHandle('get_friend_list', getFriendList)
}