import { defineActionHandlers, registerActionHandlers } from "../register-action-handlers"
import { getFriendList, getUserInfo, sendLikeFriend } from "./friend-service"

export const friendActionHandlers = defineActionHandlers({
  get_friend_list: getFriendList,
  get_friend_list_with_group: getFriendList,
  send_like_friend: sendLikeFriend,
  get_user_info: getUserInfo,
})

export const registerFriendActions = () => {
  registerActionHandlers(friendActionHandlers)
}
