import { randomUUID } from "crypto"
import { IpcUpInfo } from "../../store/interfaces"
import { sendEvent } from "../event/base"
import { NTSendMessageType, AddMsgType, NTRecallMessage as NTRecallMessageType } from "./interfaces"
import { useLogger } from "../../common/log"
import { useStore } from "../../store/store"
import { Lock } from "../../common/lock"

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
  const channel = 'IPC_UP_2'
  const uuid = randomUUID()
  log.info(`send data with ${uuid}:`, msg, msg.msgElements)
  const reqInfo: IpcUpInfo = {
    type: 'request',
    callbackId: uuid,
    eventName: 'ns-ntApi-2'
  }
  const reqData: [string, NTSendMessageType.SendRequest, any] = [
    "nodeIKernelMsgService/sendMsg",
    msg,
    null
  ]

  // await msgLock.lock()
  const msgInfo = new Promise<AddMsgType>((resolve) => {
      
    registerEventListener('IPC_DOWN_2_ns-ntApi-2_nodeIKernelMsgListener/onAddSendMsg', 'once', (payload) => {
      resolve(payload)
    })
  })
  const sendResult = await sendEvent<NTSendMessageType.SendRequest, NTSendMessageType.SendNTResponse>(channel, reqInfo, reqData)
  const info = await msgInfo
  log.info('onAddSendMsg info:', JSON.stringify(info, null, 4))
  // msgLock.unlock()
  return {
    msgId: info.msgRecord.msgId
  }
}

/**
 * 调用NTAPI发送普通消息
 * 
 * @param msg 消息内容
 * @returns 发送结果
 */
export const NTSendForwardMessage = async (msg: NTSendMessageType.SendForwardRequest): Promise<NTSendMessageType.SendResponse> => {
  log.info('send data:', msg, msg.msgInfos)
  const channel = 'IPC_UP_2'
  const uuid = randomUUID()
  const reqInfo: IpcUpInfo = {
    type: 'request',
    callbackId: uuid,
    eventName: 'ns-ntApi-2'
  }
  const reqData: [string, NTSendMessageType.SendForwardRequest, any] = [
    "nodeIKernelMsgService/multiForwardMsgWithComment",
    msg,
    null
  ]

  // await msgLock.lock()
  const msgInfo = new Promise<AddMsgType>((resolve) => {
      
    registerEventListener('IPC_DOWN_2_ns-ntApi-2_nodeIKernelMsgListener/onAddSendMsg', 'once', (payload) => {
      resolve(payload)
    })
  })
  const sendResult = await sendEvent<NTSendMessageType.SendForwardRequest, NTSendMessageType.SendResponse>(channel, reqInfo, reqData)
  const info = await msgInfo
  log.info('onAddSendMsg info:', JSON.stringify(info, null, 4))
  // msgLock.unlock()
  return {
    msgId: info.msgRecord.msgId
  }
}

/**
 * 调用NTAPI撤回消息
 * 
 * @param msg 撤回请求数据
 * @returns 撤回结果
 */
export const NTRecallMessage = async (msg: NTRecallMessageType.Request): Promise<NTRecallMessageType.Response> => {
  const channel = 'IPC_UP_2'
  const uuid = randomUUID()
  log.info(`recall msg with ${uuid}:`, msg)
  const reqInfo: IpcUpInfo = {
    type: 'request',
    callbackId: uuid,
    eventName: 'ns-ntApi-2'
  }
  const reqData: [string, NTRecallMessageType.Request, any] = [
    "nodeIKernelMsgService/recallMsg",
    msg,
    null
  ]

  const sendResult = await sendEvent<NTRecallMessageType.Request, NTRecallMessageType.Response>(channel, reqInfo, reqData)
  log.info('onAddSendMsg info:', JSON.stringify(sendResult, null, 4))
  
  return sendResult.data
}