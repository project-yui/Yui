import { getNTMsgService } from "../../ntqq/core/core"
import { CustomError } from "../../common/error/custom-error"
import { BotMessage } from "../../onebot/contracts/message"

export const recallMessage = async (payload: BotMessage.DeleteMsg): Promise<any> => {
  const msgService = getNTMsgService()
  const peerInfo: PeerInfo = {
    chatType: 0,
    peerUid: "",
    guildId: "",
  }

  if (payload.detailType === 'group') {
    peerInfo.chatType = 2
    if (!payload.groupId) {
      throw new CustomError(1, 'group_id is not supported!')
    }
    peerInfo.peerUid = `${payload.groupId}`
    return msgService.recallMsg(peerInfo, payload.messageId)
  }

  if (payload.detailType === 'private') {
    peerInfo.chatType = 1
    if (!payload.userId) {
      throw new CustomError(1, 'user_id is not supported!')
    }
    peerInfo.peerUid = `${payload.userId}`
    return msgService.recallMsg(peerInfo, payload.messageId)
  }

  throw new CustomError(1, 'detail_type is not supported!')
}
