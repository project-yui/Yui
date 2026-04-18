import { requireCurrentNTUserInfo, requireCurrentNTUserModel } from "../../ntqq/core/runtime-store"
import { getUserInfoByUid } from "../../ntqq/query/detail-info"
import { BotMessageData, BotUserInfo, EventDataType, NudgeMessageData, RecallMessageData } from "../../onebot/contracts/event"
import { NTReceiveMessageType } from "../../ntqq/message/interfaces"

export const resolveCurrentEventSelf = (): BotUserInfo => {
  const user = requireCurrentNTUserInfo()
  return {
    id: user.uin,
    uid: user.uid,
  }
}

export const resolveSenderUin = async (senderUid?: `u_${string}`) => {
  if (!senderUid) {
    return 0
  }

  const senderUserInfo = await getUserInfoByUid(senderUid)
  return parseInt(senderUserInfo.uin)
}

export const applyMessageEventChatContext = (
  msg: NTReceiveMessageType.NTMessageItemType,
  event: EventDataType<BotMessageData | RecallMessageData | NudgeMessageData>,
) => {
  switch (msg.chatType) {
    case 1:
      return 'private'
    case 2:
      event.data.groupId = parseInt(msg.peerUid)
      if ('groupName' in event.data) {
        event.data.groupName = msg.peerName
      }
      return 'group'
    default:
      return ''
  }
}

export const hydrateMentionUin = async (
  msg: NTReceiveMessageType.NTMessageItemType,
  elements: BotMessageData["elements"],
) => {
  for (const element of elements) {
    if (element.type !== 'mention' || element.data.at?.isAll !== false) {
      continue
    }

    const user = requireCurrentNTUserModel()
    const group = user.getGroup(parseInt(msg.peerUid))
    const member = group.getMemberByUid(element.data.at.uid as `u_${string}`)
    const info = await member.getInfo()
    element.data.at.uin = parseInt(info.uin)
  }
}

export const resolveNudgeTargets = async (fromUid: `u_${string}`, toUid: `u_${string}`) => {
  const [fromInfo, toInfo] = await Promise.all([
    getUserInfoByUid(fromUid),
    getUserInfoByUid(toUid),
  ])

  return {
    senderUin: parseInt(fromInfo.uin),
    targetUin: parseInt(toInfo.uin),
  }
}
