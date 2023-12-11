import { BotMessage } from "../../onebot/common/interfaces";
import { NTSendMessage } from "../../ntqq/message/message";
import { NTReceiveMessageType, NTSendMessageType } from "../../ntqq/message/interfaces";

export const sendMessageToFriend = async (targetId: string, msg: BotMessage.BotMsgBase[]) => {

  const elements: NTSendMessageType.MsgElement[] = []
  for (const m of msg) {
    if (m.type === 'text') {
      elements.push({
        elementType: 1,
        elementId: "",
        textElement: {
          content: '',
          atType: 0,
          atUid: "",
          atTinyId: "",
          atNtUid: ""
        }
      })
    }
  }
  return await NTSendMessage({
    "msgId": "0",
    "peer": {
      "chatType": 2,
      "peerUid": `${targetId}`,
      "guildId": ""
    },
    "msgElements": elements,
    "msgAttributeInfos": new Map()
  })
}