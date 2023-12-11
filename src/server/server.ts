import { WebSocketServer } from "ws"
import { useLogger } from "../common/log"
import { startHTTPServer } from "./http"
import { startWebsocketServer } from "./websocket"
import { SendHandleType } from "./interfacces"

const log = useLogger('Server')
const sendHandleList: SendHandleType[] = []

/**
 * 添加发送消息的监听器
 * 
 * @param h 发送消息的监听器
 */
const addSendHandle = (h: SendHandleType) => {
  sendHandleList.push(h)
}

/**
 * 移除发送消息的监听器
 * 
 * @param h 发送消息的监听器
 */
const removeSendHandle = (h: SendHandleType) => {
  const i = sendHandleList.indexOf(h)
  if (i < 0) {
    log.warn('事件处理器移除失败，未找到该处理器')
    return
  }
  sendHandleList.splice(i, 1)
}

/**
 * 服务器主动发送消息给机器人
 * 
 * 框架 -> 机器人
 * 
 * @param msg 消息内容
 */
const sendMessage = (msg: string) => {
  for (let i = 0; i < sendHandleList.length; i++) {
    const handle = sendHandleList[i];
    try {
      handle(msg)
    } catch (error) {
      sendHandleList.splice(i, 1)
      i--
    }
  }

}
export const useServer = () => ({
  sendMessage,
  removeSendHandle,
  addSendHandle: addSendHandle
})