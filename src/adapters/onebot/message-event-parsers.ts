import { EventDataType, NudgeMessageData } from "../../onebot/contracts/event"
import { NTReceiveMessageType } from "../../ntqq/message/interfaces"
import { applyMessageEventChatContext, resolveCurrentEventSelf, resolveNudgeTargets } from "./message-event-resolvers"

export const hasRecallMessageEvent = (msg: NTReceiveMessageType.NTMessageItemType) => {
  return msg.elements.some((element) => element.elementType === 8 && element.grayTipElement?.subElementType === 1)
}

type NudgeEventPayload = {
  fromUid: `u_${string}`
  toUid: `u_${string}`
}

const parseNudgeEventPayload = (msg: NTReceiveMessageType.NTMessageItemType): NudgeEventPayload | null => {
  if (msg.msgType !== 5 || msg.subMsgType !== 12) {
    return null
  }

  const element = msg.elements[0]
  if (element.elementType !== 8) {
    return null
  }

  const grayTip = element.grayTipElement
  if (!grayTip || grayTip.subElementType !== 17) {
    return null
  }

  const jsonGrayTip = grayTip.jsonGrayTipElement
  if (jsonGrayTip.busiId !== '1061') {
    return null
  }

  const data = JSON.parse(jsonGrayTip.jsonStr) as { items?: Array<{ type?: string, uid?: `u_${string}` }> }
  const qqItems = (data.items ?? []).filter((item) => item.type === 'qq' && item.uid)
  if (qqItems.length < 2) {
    return null
  }

  return {
    fromUid: qqItems[0].uid!,
    toUid: qqItems[1].uid!,
  }
}

export const buildParsedNudgeEvent = async (
  msg: NTReceiveMessageType.NTMessageItemType,
): Promise<EventDataType<NudgeMessageData> | null> => {
  const parsed = parseNudgeEventPayload(msg)
  if (!parsed) {
    return null
  }

  const { senderUin, targetUin } = await resolveNudgeTargets(parsed.fromUid, parsed.toUid)
  const event: EventDataType<NudgeMessageData> = {
    self: resolveCurrentEventSelf(),
    time: parseInt(msg.msgTime),
    type: "notice",
    detailType: "group_member_nudge",
    subType: "",
    data: {
      messageId: msg.msgId,
      messageSeq: msg.msgSeq,
      groupId: parseInt(msg.peerUin),
      senderUin,
      senderUid: parsed.fromUid,
      targetUin,
      targetUid: parsed.toUid,
    },
  }

  switch (msg.chatType) {
    case 1:
      event.detailType = 'private_nudge'
      break
    case 2:
      event.detailType = 'group_nudge'
      applyMessageEventChatContext(msg, event)
      break
  }

  return event
}
