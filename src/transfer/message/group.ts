import { BotMessage } from "../../onebot/common/interfaces"
import { NTSendForwardMessage, NTSendMessage } from "../../ntqq/message/message"
import { NTSendMessageType } from "../../ntqq/message/interfaces"
import { useLogger } from "../../common/log"
import { convertBotMessage2NTMessage } from "./convert"

const log = useLogger('Group')

export const sendMessageToGroup = async (targetId: `${number}`, msg: BotMessage.BotMsgBase[]) => {
  log.info(`sendMessage to ${targetId} with:`, JSON.stringify(msg))
  const elements: NTSendMessageType.MsgElement[] = convertBotMessage2NTMessage(msg)
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

export const sendForwardMessageToGroup = async (srcId: `u_${string}`,targetId: `${number}`, msg: NTSendMessageType.ForwardMsgItem[]) => {
  log.info(`sendForwardMessage to ${targetId} with:`, JSON.stringify(msg))
  return await NTSendForwardMessage({
    msgInfos: msg,
    srcContact: {
      chatType: 1,
      peerUid: srcId,
      guildId: ""
    },
    dstContact: {
      chatType: 2,
      peerUid: `${targetId}`,
      guildId: ""
    },
    commentElements: [],
    msgAttributeInfos: new Map()
  })
}