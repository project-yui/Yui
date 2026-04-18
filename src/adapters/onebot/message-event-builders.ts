import { convertNTMsg2BotMsg, convertNTMsgElement2BotMsgElement } from "../../transfer/message/convert"
import { NTReceiveMessageType } from "../../ntqq/message/interfaces"
import { BotMessageData, EventDataType, NudgeMessageData, RecallMessageData } from "../../onebot/contracts/event"
import { buildParsedNudgeEvent, hasRecallMessageEvent } from "./message-event-parsers"
import {
  applyMessageEventChatContext,
  hydrateMentionUin,
  resolveCurrentEventSelf,
  resolveSenderUin,
} from "./message-event-resolvers"

export const isExpiredMessage = (msgTime: string) => Date.now() / 1000 - parseInt(msgTime) > 60

export const isUnsupportedChatType = (chatType: number) => chatType === 4

export const shouldSkipMessageEvent = (msg: Pick<NTReceiveMessageType.NTMessageItemType, 'msgTime' | 'chatType'>) => {
  return isExpiredMessage(msg.msgTime) || isUnsupportedChatType(msg.chatType)
}

export { hasRecallMessageEvent }

const buildBaseMessageEventData = (
  msg: NTReceiveMessageType.NTMessageItemType,
  senderId: number,
): BotMessageData => ({
  messageId: msg.msgId,
  messageSeq: msg.msgSeq,
  groupId: 0,
  groupName: '',
  senderId,
  senderUid: msg.senderUid,
  senderMemberName: msg.sendMemberName,
  time: parseInt(msg.msgTime),
  elements: [],
  records: [],
})

export const buildMessageEvent = async (msg: NTReceiveMessageType.NTMessageItemType): Promise<EventDataType<BotMessageData>> => {
  const senderId = await resolveSenderUin(msg.senderUid)
  const ret: EventDataType<BotMessageData> = {
    self: resolveCurrentEventSelf(),
    time: parseInt(msg.msgTime),
    type: "message",
    detailType: "",
    subType: "",
    data: buildBaseMessageEventData(msg, senderId),
  }
  ret.detailType = applyMessageEventChatContext(msg, ret)
  ret.data.elements = convertNTMsgElement2BotMsgElement({
    chatType: msg.chatType,
    peerUid: msg.peerUid,
    guildId: ''
  }, msg.msgId, msg.elements)
  await hydrateMentionUin(msg, ret.data.elements)
  ret.data.records = msg.records.map(e => convertNTMsg2BotMsg(e))
  return ret
}

export const buildPostSendEvent = async (msg: NTReceiveMessageType.NTMessageItemType): Promise<EventDataType<BotMessageData>> => {
  const senderId = await resolveSenderUin(msg.senderUid)
  const ret: EventDataType<BotMessageData> = {
    self: resolveCurrentEventSelf(),
    time: parseInt(msg.msgTime),
    type: "notice",
    detailType: "group_message_post_send",
    subType: "",
    data: buildBaseMessageEventData(msg, senderId),
  }
  applyMessageEventChatContext(msg, ret)
  ret.data.elements = convertNTMsgElement2BotMsgElement({
    chatType: msg.chatType,
    peerUid: msg.peerUid,
    guildId: ''
  }, msg.msgId, msg.elements)
  ret.data.records = msg.records.map(e => convertNTMsg2BotMsg(e))
  return ret
}

export const buildRecallEvent = async (msg: NTReceiveMessageType.NTMessageItemType): Promise<EventDataType<RecallMessageData>> => {
  const senderId = await resolveSenderUin(msg.senderUid)
  const ret: EventDataType<RecallMessageData> = {
    self: resolveCurrentEventSelf(),
    time: parseInt(msg.msgTime),
    type: "notice",
    detailType: "group_message_delete",
    subType: "recall",
    data: {
      messageId: msg.msgId,
      messageSeq: msg.msgSeq,
      groupId: 0,
      senderId,
      senderUid: msg.senderUid,
      senderMemberName: msg.sendMemberName || msg.sendNickName,
      time: parseInt(msg.recallTime),
    }
  }
  switch (msg.chatType) {
    case 1:
      ret.detailType = 'private_message_delete'
      break
    case 2:
      ret.detailType = 'group_message_delete'
      applyMessageEventChatContext(msg, ret)
      break
  }
  return ret
}

export const buildNudgeEvent = async (msg: NTReceiveMessageType.NTMessageItemType): Promise<EventDataType<NudgeMessageData> | null> => {
  return buildParsedNudgeEvent(msg)
}
