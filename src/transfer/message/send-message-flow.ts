import { useLogger } from "../../common/log"
import { NTSendMessageType } from "../../ntqq/message/interfaces"
import { NTSendMessage } from "../../ntqq/message/message"
import { BotMessage } from "../../onebot/contracts/message"
import { CustomError } from "../../common/error/custom-error"
import { convertBotMessage2NTMessage } from "./convert"
import { createGroupSendRequest, createPrivateSendRequest } from "./send-request"

const log = useLogger('Transfer/SendMessageFlow')

export const prepareSendMessageElements = async (
  message: BotMessage.SendElement[],
) => {
  const elements = await convertBotMessage2NTMessage(message)
  if (elements.length === 0) {
    throw new CustomError(500, 'Try to send msg, but size of elements is zero!')
  }
  return elements
}

export const sendPreparedMessage = async (
  request: NTSendMessageType.SendRequest,
) => {
  log.info('send prepared message:', request.peer)
  return NTSendMessage(request)
}

export const preparePrivateSendMessageRequest = async (
  peerUid: `u_${string}`,
  message: BotMessage.SendElement[],
) => {
  const elements = await prepareSendMessageElements(message)
  return createPrivateSendRequest(peerUid, elements)
}

export const prepareGroupSendMessageRequest = async (
  peerUid: `${number}`,
  message: BotMessage.SendElement[],
) => {
  const elements = await prepareSendMessageElements(message)
  return createGroupSendRequest(peerUid, elements)
}
