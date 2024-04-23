import { initBot } from "./bot/bot"
import { initFriend } from "./friend/friend"
import { initRecallMessage } from "./message/recall_message"
import { initSendMessage } from "./message/send_message"

/**
 * 初始化onebot的动作
 */
export const initAction = () => {
  initBot()
  initSendMessage()
  initRecallMessage()
  initFriend()
}