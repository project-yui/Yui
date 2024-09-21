import { convertNTMessage2BotMessage } from "../../transfer/message/convert"
import { NTReceiveMessageType } from "../../ntqq/message/interfaces"
import { useServer } from "../../server/server"
import { useStore } from "../../store/store"
import { getBotAccount, getUserInfoByUid } from "../common/user"
import { EventDataType, MessageData, RecallMessageData } from "./interfaces"
import { useLogger } from "../../common/log"
import { getGroupMemberInfoByUid } from "../common/group"

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
        detailType: "",
        subType: "",
        data: {
          messageId: msg.msgId,
          messageSeq: msg.msgSeq,
          groupId: 0,
          groupName: '',
          senderId: parseInt(senderUserInfo.uin),
          senderUid: msg.senderUid,
          senderMemberName: msg.sendMemberName,
          time: parseInt(msg.msgTime),
          elements: [],
          records: [],
        }
      }
      switch (msg.chatType) {
        case 1:
          // 好友消息
          ret.detailType = 'private'

          break
        case 2:
          // 群聊消息
          ret.detailType = 'group'
          ret.data.groupId = parseInt(msg.peerUid)
          ret.data.groupName = msg.peerName
          break
      }
      ret.data.elements = convertNTMessage2BotMessage({
        chatType: msg.chatType,
        peerUid: msg.peerUid,
        guildId: ''
      }, msg.msgId, msg.elements)
      for (const ele of ret.data.elements) {
        if (ele.type === 'mention') {
          if(false === ele.data.at?.isAll) {
            // at特定成员，获取QQ号
            const info = await getGroupMemberInfoByUid(ret.data.groupId, ele.data.at.uid as `u_${string}`)
            ele.data.at.uin = parseInt(info.uin)
          }
        }
      }
      ret.data.records = msg.records.map(e => ({
        messageId: e.msgId,
        messageSeq: e.msgSeq,
        groupId: 0,
        groupName: e.peerName,
        senderId: parseInt(senderUserInfo.uin),
        senderUid: e.senderUid,
        senderMemberName: e.sendMemberName,
        time: parseInt(e.msgTime),
        elements: convertNTMessage2BotMessage({
          chatType: msg.chatType,
          peerUid: msg.peerUid,
          guildId: ''
        }, msg.msgId, e.elements),
        records: [],
      }))
      sendMessage(JSON.stringify(ret))
    }
  })
}
/**
 * 监听新发送的消息
 * 
 */
const onAddSendMsg = () => {
  registerEventListener('KernelMsgListener/onAddSendMsg', 'always', async (payload: NTReceiveMessageType.NTMessageItemType) => {
    const msg = payload
    const user = getBotAccount()
    if (user.uid === undefined || user.uin === undefined)
      throw new Error('can not get user info!')
    // 一分钟前的消息不处理
    if (Date.now()/1000 - parseInt(msg.msgTime) > 60) {
      log.info('一分钟前的消息不处理')
      return;
    }
    log.info('receive:', JSON.stringify(msg, null, 4))
    // 频道消息暂不处理
    if (msg.chatType === 4) return
    
    const senderUserInfo = await getUserInfoByUid(msg.senderUid)
    const ret: EventDataType<MessageData> = {
      self: {
        id: parseInt(user.uin),
        uid: user.uid
      },
      time: parseInt(msg.msgTime),
      type: "notice",
      detailType: "group_message_post_send",
      subType: "",
      data: {
        messageId: msg.msgId,
        messageSeq: msg.msgSeq,
        groupId: 0,
        groupName: '',
        senderId: parseInt(senderUserInfo.uin),
        senderUid: msg.senderUid,
        senderMemberName: msg.sendMemberName,
        time: parseInt(msg.msgTime),
        elements: [],
        records: [],
      }
    }
    switch (msg.chatType) {
      case 2:
        // 群聊消息
        ret.data.groupId = parseInt(msg.peerUid)
        break
    }
    ret.data.elements = convertNTMessage2BotMessage({
      chatType: msg.chatType,
      peerUid: msg.peerUid,
      guildId: ''
    }, msg.msgId, msg.elements)
    ret.data.records = msg.records.map(e => ({
      messageId: e.msgId,
      messageSeq: e.msgSeq,
      groupId: 0,
      groupName: e.peerName,
      senderId: parseInt(senderUserInfo.uin),
      senderUid: e.senderUid,
      senderMemberName: e.sendMemberName,
      time: parseInt(e.msgTime),
      elements: convertNTMessage2BotMessage({
        chatType: msg.chatType,
        peerUid: msg.peerUid,
        guildId: ''
      }, msg.msgId, e.elements),
      records: [],
    }))
    sendMessage(JSON.stringify(ret))
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
          detailType: "group_message_delete",
          subType: "recall",
          data: {
            messageId: msg.msgId,
            messageSeq: msg.msgSeq,
            groupId: 0,
            senderId: parseInt(senderUserInfo.uin),
            senderUid: msg.senderUid,
            senderMemberName: msg.sendMemberName || msg.sendNickName,
            time: parseInt(msg.recallTime),
          }
        }
        switch (msg.chatType) {
          case 1:
            // 好友消息
            ret.detailType = 'private_message_delete'
            break
          case 2:
            // 群聊消息
            ret.detailType = 'group_message_delete'
            ret.data.groupId = parseInt(msg.peerUid)
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
  onAddSendMsg()
  onUpdateMsg()
}