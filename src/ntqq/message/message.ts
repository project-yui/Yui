import { randomUUID } from "crypto"
import { IpcUpInfo } from "../../store/interfaces"
import { NTSendMessageType, AddMsgType, NTRecallMessage as NTRecallMessageType } from "./interfaces"
import { useLogger } from "../../common/log"
import { useStore } from "../../store/store"
import { Lock } from "../../common/lock"
import { useNTCore } from "../core/core"

const log = useLogger('NTMessage')
// const msgLock = new Lock()
const { registerEventListener } = useStore()

/**
 * 调用NTAPI发送普通消息
 * 
 * @param msg 消息内容
 * @returns 发送结果
 */
export const NTSendMessage = async (msg: NTSendMessageType.SendRequest): Promise<NTSendMessageType.SendResponse> => {
  const { getWrapperSession } = useNTCore()
  const session = getWrapperSession()
  const service = session.getMsgService()
  // await msgLock.lock()
  const msgInfo = new Promise<AddMsgType>((resolve) => {
      
    registerEventListener('KernelMsgListener/onAddSendMsg', 'once', (payload) => {
      resolve(payload)
    })
  })
  await service.sendMsg(msg.msgId, msg.peer, msg.msgElements, msg.msgAttributeInfos)
  
  const info = await msgInfo
  log.info('onAddSendMsg info:', JSON.stringify(info, null, 4))
  // msgLock.unlock()
  return {
    msgId: info.msgId,
    subMsgType: info.subMsgType,
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
  const uuid = randomUUID()
  // nodeIKernelMsgService/forwardMsgWithComment 是逐条转发
  // 合并转发
  const reqData: [string, NTSendMessageType.SendForwardRequest, any] = [
    "nodeIKernelMsgService/multiForwardMsgWithComment",
    msg,
    null
  ]

  // await msgLock.lock()
  const msgInfo = new Promise<AddMsgType>((resolve) => {
      
    registerEventListener('KernelMsgListener/onAddSendMsg', 'once', (payload) => {
      resolve(payload)
    })
  })
  
  const { getWrapperSession } = useNTCore()
  const msgService = getWrapperSession().getMsgService()
  const sendResult = await msgService.multiForwardMsgWithComment(msg.msgInfos, msg.srcContact, msg.dstContact, msg.commentElements, new Map())
  const info = await msgInfo
  log.info('onAddSendMsg info:', JSON.stringify(info, null, 4))
  // msgLock.unlock()
  return {
    msgId: info.msgId,
    subMsgType: info.subMsgType,
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
  const { getWrapperSession } = useNTCore()
  const msgService = getWrapperSession().getMsgService()
  const sendResult = await msgService.recallMsg(msg.peer, msg.msgIds)
  log.info('onAddSendMsg info:', JSON.stringify(sendResult, null, 4))
  
  return sendResult
}