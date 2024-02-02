import { NTSendForwardMessage, NTSendMessage } from "../../ntqq/message/message"
import { NTSendMessageType } from "../../ntqq/message/interfaces"
import { useLogger } from "../../common/log"
import { convertBotMessage2NTMessage } from "./convert"
import { BotMessage } from "../../onebot/common/message"

const log = useLogger('Group')

/**
 * 向群发送普通消息
 * 
 * @param targetId 目标群号
 * @param msg 消息内容
 * @returns 发送结果
 */
export const sendMessageToGroup = async (targetId: `${number}`, msg: BotMessage.SendElement[]) => {
  log.info(`sendMessage to ${targetId} with:`, JSON.stringify(msg))
  const elements: NTSendMessageType.MsgElement[] = await convertBotMessage2NTMessage(msg)
  
  if (elements.length == 0) throw new Error('Try to send msg, but size of elements is zero!')
  
  return await NTSendMessage({
    "msgId": "0",
    "peer": {
      "chatType": 2,
      "peerUid": `${targetId}`,
      "guildId": ""
    },
    "msgElements": elements,
    "msgAttributeInfos": new Map()
  })
}

/**
 * 向群发送转发消息
 * 
 * @param srcId 来源Id
 * @param targetId 目标Id，群Id
 * @param msg 转发消息内容
 * @returns 转发结果
 */
export const sendForwardMessageToGroup = async (srcId: `u_${string}`,targetId: `${number}`, msg: NTSendMessageType.ForwardMsgItem[]) => {
  if (msg.length === 0) throw new Error('')
  log.info(`sendForwardMessage to ${targetId} with:`, JSON.stringify(msg))
  return await NTSendForwardMessage({
    msgInfos: msg,
    srcContact: {
      chatType: 1,
      peerUid: srcId,
      guildId: ""
    },
    dstContact: {
      chatType: 2,
      peerUid: `${targetId}`,
      guildId: ""
    },
    commentElements: [],
    msgAttributeInfos: new Map()
  })
}