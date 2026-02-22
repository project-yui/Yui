import { listenAccountEvent } from "./account"
import { listenLoginEvent } from "./login"
import { listenMessage } from "./message"

/**
 * 初始化onebot的事件
 */
export const initEvent = () => {
  listenMessage()
  listenLoginEvent()
  listenAccountEvent()
}