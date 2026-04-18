import { BotMessage } from "../../onebot/contracts/message"
import { useLogger } from "../../common/log"
import {
  preparePrivateSendMessageRequest,
  sendPreparedMessage,
} from "./send-message-flow"

const log = useLogger('Friend')

export const sendMessageToFriend = async (targetId: `u_${string}`, msg: BotMessage.SendElement[]) => {
  log.info('sendMessageToFriend', JSON.stringify(msg))
  const request = await preparePrivateSendMessageRequest(targetId, msg)
  return sendPreparedMessage(request)
}
