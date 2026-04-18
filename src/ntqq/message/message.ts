import { NTSendMessageType, AddMsgType, NTRecallMessage as NTRecallMessageType } from "./interfaces"
import { useLogger } from "../../common/log"
import { getNTMsgService } from "../core/core"
import { createNTEventWaiter } from "../query/wait"

const log = useLogger('NTMessage')

const waitForAddSendMessage = () => createNTEventWaiter<[AddMsgType], AddMsgType>({
  event: 'KernelMsgListener/onAddSendMsg',
  match: () => true,
  select: (payload) => payload,
})

/**
 * 调用NTAPI发送普通消息
 * 
 * @param msg 消息内容
 * @returns 发送结果
 */
export const NTSendMessage = async (msg: NTSendMessageType.SendRequest): Promise<NTSendMessageType.SendResponse> => {
  const service = getNTMsgService()
  const waiter = waitForAddSendMessage()
  try {
    await service.sendMsg(msg.msgId, msg.peer, msg.msgElements, msg.msgAttributeInfos)
    const info = await waiter.promise
    log.info('onAddSendMsg info:', JSON.stringify(info, null, 4))
    return {
      msgId: info.msgId,
      subMsgType: info.subMsgType,
    }
  } catch (error) {
    waiter.cancel()
    throw error
  }
}

/**
 * 调用NTAPI发送合并转发消息
 * 
 * @param msg 消息内容
 * @returns 发送结果
 */
export const NTSendForwardMessage = async (msg: NTSendMessageType.SendForwardRequest): Promise<NTSendMessageType.SendResponse> => {
  log.info('send data:', msg, msg.msgInfos)
  const waiter = waitForAddSendMessage()
  
  const msgService = getNTMsgService()
  try {
    await msgService.multiForwardMsgWithComment(msg.msgInfos, msg.srcContact, msg.dstContact, msg.commentElements, new Map())
    const info = await waiter.promise
    log.info('onAddSendMsg info:', JSON.stringify(info, null, 4))
    return {
      msgId: info.msgId,
      subMsgType: info.subMsgType,
    }
  } catch (error) {
    waiter.cancel()
    throw error
  }
}

/**
 * 调用NTAPI撤回消息
 * 
 * @param msg 撤回请求数据
 * @returns 撤回结果
 */
export const NTRecallMessage = async (msg: NTRecallMessageType.Request): Promise<NTRecallMessageType.Response> => {

  log.info(`recall msg:`, msg)
  const msgService = getNTMsgService()
  const sendResult = await msgService.recallMsg(msg.peer, msg.msgIds)
  log.info('onAddSendMsg info:', JSON.stringify(sendResult, null, 4))
  
  return sendResult
}
