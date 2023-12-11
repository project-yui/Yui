import { convertNTMessage2BotMessage } from "../../transfer/message/convert"
import { NTReceiveMessageType } from "../../ntqq/message/interfaces"
import { useServer } from "../../server/server"
import { useStore } from "../../store/store"
import { getBotAccount, getUserInfoByUid } from "../common/user"
import { EventDataType, MessageData } from "./interfaces"

const { registerEventListener } = useStore()
const { sendMessage } = useServer()

/**
 * 监听新消息事件
 * 
 * 每收到一条新消息就会触发事件
 */
export const listenMessage = () => {
  registerEventListener('IPC_DOWN_2_ns-ntApi-2_nodeIKernelMsgListener/onRecvMsg', 'always', async (payload: NTReceiveMessageType.NTMessagePayloadType) => {
    const { msgList } = payload
    const botAccount = await getBotAccount()
    for (const msg of msgList) {
      const senderUserInfo = await getUserInfoByUid(msg.senderUid)
      const ret: EventDataType<MessageData> = {
        self: {
          id: parseInt(botAccount.uin),
          uid: botAccount.uid
        },
        time: parseInt(msg.msgTime),
        type: "message",
        detail_type: "",
        sub_type: "",
        data: {
          message_id: msg.msgId,
          message_seq: msg.msgSeq,
          group_id: 0,
          sender_id: parseInt(senderUserInfo.info.uin),
          sender_uid: msg.senderUid,
          sender_member_name: msg.sendMemberName,
          elements: [],
        }
      }
      switch (msg.chatType) {
        case 1:
          // 好友消息
          ret.detail_type = 'private'

          break
        case 2:
          // 群聊消息
          ret.detail_type = 'group'
          ret.data.group_id = parseInt(msg.peerUid)
          break
      }
      ret.data.elements = convertNTMessage2BotMessage(msg.elements)
      sendMessage(JSON.stringify(ret))
    }
  })
}