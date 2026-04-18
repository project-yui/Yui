import { useLogger } from "../../common/log"
import { requireCurrentNTUserModel } from "../../ntqq/core/runtime-store"
import { CustomError } from "../../common/error/custom-error"
import { sendMessageToFriend } from "../../transfer/message/friend"
import { sendMessageToGroup } from "../../transfer/message/group"
import { BotMessage } from "../../onebot/contracts/message"
import { recallMessage } from "./message-recall-service"

const log = useLogger('App/MessageService')

export { recallMessage } from "./message-recall-service"

const sendForwardMessageToGroup = async (payload: BotMessage.SendMsg) => {
  const user = requireCurrentNTUserModel()
  const group = user.getGroup(payload.groupId!)
  if (!group) {
    throw new CustomError(10000002, '获取群实例失败')
  }
  const msg = payload.message[0]
  if (msg.type !== 'multiforward' || !msg.data.forwardData) {
    throw new CustomError(1, 'forward message payload is invalid!')
  }
  return await group.sendForwardMessage(msg.data.forwardData)
}

export const sendMessage = async (payload: BotMessage.SendMsg): Promise<any> => {
  log.info('sendMessage payload:', JSON.stringify(payload))
  if (payload.detailType === 'group' && payload.groupId) {
    return await sendMessageToGroup(`${payload.groupId}`, payload.message)
  }
  if (payload.detailType === 'private' && payload.user_id) {
    return await sendMessageToFriend(payload.user_id as `u_${string}`, payload.message)
  }
  throw new CustomError(1, 'detail_type not supported!')
}

export const sendForwardMessage = async (payload: BotMessage.SendMsg): Promise<any> => {
  log.info('sendForwardMessage payload:', JSON.stringify(payload))
  if (payload.detailType === 'group' && payload.groupId) {
    return await sendForwardMessageToGroup(payload)
  }
  throw new CustomError(1, 'detail_type is not supported!')
}
