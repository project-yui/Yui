import { NTSendMessage } from "../../ntqq/message/message";
import { NTReceiveMessageType, NTSendMessageType } from "../../ntqq/message/interfaces";
import { BotMessage } from "../../onebot/common/message";
import { useLogger } from "../../common/log";
import { convertBotMessage2NTMessage } from "./convert";

const log = useLogger('Friend')

export const sendMessageToFriend = async (targetId: `u_${string}`, msg: BotMessage.SendElement[]) => {
  log.info('sendMessageToFriend', JSON.stringify(msg))
  const elements: NTSendMessageType.MsgElement[] = await convertBotMessage2NTMessage(msg)
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