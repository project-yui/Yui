import { convertNTMessage2BotMessage } from "../../transfer/message/convert"
import { NTReceiveMessageType } from "../../ntqq/message/interfaces"
import { useServer } from "../../server/server"
import { useStore } from "../../store/store"
import { getBotAccount, getUserInfoByUid } from "../common/user"
import { EventDataType, MessageData, RecallMessageData } from "./interfaces"
import { useLogger } from "../../common/log"

const { registerEventListener } = useStore()
const { sendMessage } = useServer()
const log = useLogger('event/Message')
/**
 * 监听新消息
 * 
 */
const onRecvMsg = () => {
  registerEventListener('KernelMsgListener/onRecvMsg', 'always', async (payload: NTReceiveMessageType.NTMessageItemType[]) => {
    const msgList = payload
    const user = getBotAccount()
    if (user.uid === undefined || user.uin === undefined)
      throw new Error('can not get user info!')
    for (const msg of msgList) {
      // 一分钟前的消息不处理
      if (Date.now()/1000 - parseInt(msg.msgTime) > 60) {
        log.info('一分钟前的消息不处理')
        continue
      }
      log.info('receive:', JSON.stringify(msg, null, 4))
      // 频道消息暂不处理
      if (msg.chatType === 4) continue
      
      const senderUserInfo = await getUserInfoByUid(msg.senderUid)
      const ret: EventDataType<MessageData> = {
        self: {
          id: parseInt(user.uin),
          uid: user.uid
        },
        time: parseInt(msg.msgTime),
        type: "message",
        detail_type: "",
        sub_type: "",
        data: {
          message_id: msg.msgId,
          message_seq: msg.msgSeq,
          group_id: 0,
          sender_id: parseInt(senderUserInfo.uin),
          sender_uid: msg.senderUid,
          sender_member_name: msg.sendMemberName,
          time: parseInt(msg.msgTime),
          elements: [],
          records: [],
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
      ret.data.records = msg.records.map(e => ({
        message_id: e.msgId,
        message_seq: e.msgSeq,
        group_id: 0,
        sender_id: parseInt(senderUserInfo.uin),
        sender_uid: e.senderUid,
        sender_member_name: e.sendMemberName,
        time: parseInt(e.msgTime),
        elements: convertNTMessage2BotMessage(e.elements),
        records: [],
      }))
      sendMessage(JSON.stringify(ret))
    }
  })
}

/**
 * 监听消息更新
 */
const onUpdateMsg = () => {
  registerEventListener('KernelMsgListener/onMsgInfoListUpdate', 'always', async (payload: NTReceiveMessageType.NTMessageItemType[]) => {
    const msgList = payload
    const user = getBotAccount()
    if (user.uid === undefined || user.uin === undefined)
      throw new Error('can not get user info!')
    for (const msg of msgList) {
      
      const senderUserInfo = await getUserInfoByUid(msg.senderUid)
      // 判断一下撤回消息
      const rMsg = msg.elements.find(e => e.elementType === 8 && e.grayTipElement?.subElementType === 1)
      if (rMsg) {
        // 是撤回消息
        const ret: EventDataType<RecallMessageData> = {
          self: {
            id: parseInt(user.uin),
            uid: user.uid
          },
          time: parseInt(msg.msgTime),
          type: "notice",
          detail_type: "group_message_delete",
          sub_type: "recall",
          data: {
            message_id: msg.msgId,
            message_seq: msg.msgSeq,
            group_id: 0,
            sender_id: parseInt(senderUserInfo.uin),
            sender_uid: msg.senderUid,
            sender_member_name: msg.sendMemberName || msg.sendNickName,
            time: parseInt(msg.recallTime),
          }
        }
        switch (msg.chatType) {
          case 1:
            // 好友消息
            ret.detail_type = 'private_message_delete'
            break
          case 2:
            // 群聊消息
            ret.detail_type = 'group_message_delete'
            ret.data.group_id = parseInt(msg.peerUid)
            break
        }
        sendMessage(JSON.stringify(ret))
      }
    }
  })
}
/**
 * 监听消息事件
 * 
 * 每收到一条新消息就会触发事件
 */
export const listenMessage = () => {
  onRecvMsg()
  onUpdateMsg()
}