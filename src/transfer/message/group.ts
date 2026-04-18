import { useLogger } from "../../common/log"
import { BotMessage } from "../../onebot/contracts/message"
import {
  prepareGroupSendMessageRequest,
  sendPreparedMessage,
} from "./send-message-flow"

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
  const request = await prepareGroupSendMessageRequest(targetId, msg)
  return sendPreparedMessage(request)
}
