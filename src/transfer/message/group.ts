import { BotMessage } from "../../onebot/common/interfaces"
import { NTSendMessage } from "../../ntqq/message/message"
import { NTSendMessageType } from "../../ntqq/message/interfaces"
import { useLogger } from "../../common/log"
import { convertBotMessage2NTMessage } from "./convert"

const log = useLogger('Group')

export const sendMessageToGroup = async (targetId: string, msg: BotMessage.BotMsgBase[]) => {
  log.info(`sendMessage to ${targetId} with:`, msg)
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