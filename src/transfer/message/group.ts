import { NTSendForwardMessage, NTSendMessage } from "../../ntqq/message/message"
import { NTSendMessageType } from "../../ntqq/message/interfaces"
import { useLogger } from "../../common/log"
import { convertBotMessage2NTInnerMessage, convertBotMessage2NTMessage } from "./convert"
import { BotMessage, BotMessageSendElements } from "../../onebot/common/message"
import { getBotAccount } from "../../onebot/common/user"
import { CustomError } from "../../server/error/custom-error"

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
  
  if (elements.length == 0) throw new CustomError(500, 'Try to send msg, but size of elements is zero!')
  
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