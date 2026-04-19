import { getNTMsgService } from "../../ntqq/core/core"
import { CustomError } from "../../common/error/custom-error"
import { BotMessage } from "../../onebot/contracts/message"

export const likeMessage = async (payload: BotMessage.LikeMsg): Promise<any> => {
  const msgService = getNTMsgService()
  const peerInfo: PeerInfo = {
    chatType: 0,
    peerUid: "",
    guildId: "",
  }
  if (payload.detailType === 'group' && payload.groupId) {
    peerInfo.chatType = 2
    peerInfo.peerUid = `${payload.groupId}`
    if (!payload.groupId) {
      throw new CustomError(1, 'group_id is not supported!')
    }
  } else if (payload.detailType === 'channel' && payload.channelId) {
    peerInfo.chatType = 4
    peerInfo.guildId = `${payload.channelId}`
    if (!payload.channelId) {
      throw new CustomError(1, 'channel_id is not supported!')
    }
  } else {
    throw new CustomError(1, 'detail_type is not supported!')
  }
  const result = await msgService.setMsgEmojiLikes(peerInfo, payload.messageSeq, payload.emojiId, payload.emojiType, payload.set)
  if (result.result !== 0) {
    throw new CustomError(result.result, result.errMsg)
  }
  return true
}
