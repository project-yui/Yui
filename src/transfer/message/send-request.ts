import { NTSendMessageType } from "../../ntqq/message/interfaces"

const createBaseSendRequest = (
  chatType: number,
  peerUid: `${number}` | `u_${string}` | '',
  msgElements: NTSendMessageType.MsgElement[],
): NTSendMessageType.SendRequest => {
  return {
    msgId: "0",
    peer: {
      chatType,
      peerUid,
      guildId: "",
    },
    msgElements,
    msgAttributeInfos: new Map(),
  }
}

export const createPrivateSendRequest = (
  peerUid: `u_${string}`,
  msgElements: NTSendMessageType.MsgElement[],
): NTSendMessageType.SendRequest => {
  return createBaseSendRequest(1, peerUid, msgElements)
}

export const createGroupSendRequest = (
  peerUid: `${number}`,
  msgElements: NTSendMessageType.MsgElement[],
): NTSendMessageType.SendRequest => {
  return createBaseSendRequest(2, peerUid, msgElements)
}
