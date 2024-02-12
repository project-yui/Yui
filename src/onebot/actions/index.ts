import { initBot } from "./bot/bot"
import { initFriend } from "./friend/friend"
import { initGroup } from "./group/group"

/**
 * 初始化onebot的动作
 */
export const initAction = () => {
  initBot()
  initGroup()
  initFriend()
}