import { WebSocketServer } from "ws"
import { useLogger } from "../common/log"
import { startHTTPServer } from "./http"
import { startWebsocketServer } from "./websocket"
import { SendHandleType } from "./interfacces"

const log = useLogger('Server')
const clientHandleList: SendHandleType[] = []

/**
 * 添加发送消息的监听器
 * 
 * @param h 发送消息的监听器
 */
const addSendHandle = (h: SendHandleType) => {
  clientHandleList.push(h)
}

/**
 * 移除发送消息的监听器
 * 
 * @param h 发送消息的监听器
 */
const removeSendHandle = (h: SendHandleType) => {
  const i = clientHandleList.indexOf(h)
  if (i < 0) {
    log.warn('事件处理器移除失败，未找到该处理器')
    return
  }
  clientHandleList.splice(i, 1)
}

/**
 * 服务器主动发送消息给机器人
 * 
 * 框架 -> 机器人
 * 
 * @param msg 消息内容
 */
const sendMessage = (msg: string) => {
  for (let i = 0; i < clientHandleList.length; i++) {
    const clientHandle = clientHandleList[i];
    try {
      clientHandle(msg)
    } catch (error) {
      clientHandleList.splice(i, 1)
      i--
    }
  }

}
export const useServer = () => ({
  sendMessage,
  removeSendHandle,
  addSendHandle: addSendHandle
})