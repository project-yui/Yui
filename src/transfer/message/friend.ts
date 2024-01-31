import { NTSendMessage } from "../../ntqq/message/message";
import { NTReceiveMessageType, NTSendMessageType } from "../../ntqq/message/interfaces";
import { BotMessage } from "../../onebot/common/message";

export const sendMessageToFriend = async (targetId: `u_${string}`, msg: BotMessage.SendElement[]) => {

  const elements: NTSendMessageType.MsgElement[] = []
  for (const m of msg) {
    if (m.type === 'text' && m.data.text) {
      elements.push({
        elementType: 1,
        elementId: "",
        textElement: {
          content: m.data.text,
          atType: 0,
          atUid: "",
          atTinyId: "",
          atNtUid: ""
        }
      })
    }
  }
  return await NTSendMessage({
    msgId: "0",
    peer: {
      chatType: 1,
      peerUid: targetId,
      guildId: ""
    },
    msgElements: elements,
    msgAttributeInfos: new Map()
  })
}