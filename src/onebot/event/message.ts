import { convertNTMsg2BotMsg, convertNTMsgElement2BotMsgElement } from "../../transfer/message/convert"
import { NTReceiveMessageType } from "../../ntqq/message/interfaces"
import { useServer } from "../../server/server"
import { useStore } from "../../store/store"
import { getBotAccount, getUserInfoByUid } from "../common/user"
import { EventDataType, BotMessageData, RecallMessageData, NudgeMessageData } from "./interfaces"
import { useLogger } from "../../common/log"
import { CustomError } from "../../server/error/custom-error"
import { useNTUserStore } from "../../ntqq/store/user"
import { CommunicationPkg } from "../../ntqq/protobuf/communication"

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
      throw new CustomError(500, 'can not get user info!')
    for (const msg of msgList) {
      // 一分钟前的消息不处理
      if (Date.now()/1000 - parseInt(msg.msgTime) > 60) {
        log.info('一分钟前的消息不处理')
        continue
      }
      log.info('receive:', JSON.stringify(msg, null, 4))
      // 频道消息暂不处理
      if (msg.chatType === 4) continue
      
      let uin: number = 0
      if (msg.senderUid)
      {
        const senderUserInfo = await getUserInfoByUid(msg.senderUid)
        uin = parseInt(senderUserInfo.uin)
      }
      if (msg.msgType == 5 && msg.subMsgType === 12)
      {
        const ele = msg.elements[0]
        if (ele.elementType !== 8) return;
        const grayTip = ele.grayTipElement!
        if (grayTip.subElementType !== 17) return;
        const jg = grayTip.jsonGrayTipElement
        if (jg.busiId !== '1061') return
        const data = JSON.parse(jg.jsonStr)
        const items = (data.items as any[]).filter(e => e.type === 'qq')
        const from = items[0]
        const to = items[1]
        // 是戳一戳消息
        const ret: EventDataType<NudgeMessageData> = {
          self: {
            id: user.uin,
            uid: user.uid
          },
          time: parseInt(msg.msgTime),
          type: "notice",
          detailType: "group_member_nudge",
          subType: "",
          data: {
            messageId: msg.msgId,
            messageSeq: msg.msgSeq,
            groupId: parseInt(msg.peerUin),
            senderUin: parseInt((await getUserInfoByUid(from.uid)).uin),
            senderUid: from.uid,
            targetUin: parseInt((await getUserInfoByUid(to.uid)).uin),
            targetUid: to.uid
          }
        }
        switch (msg.chatType) {
          case 1:
            // 好友消息
            ret.detailType = 'private_nudge'
            break
          case 2:
            // 群聊消息
            ret.detailType = 'group_nudge'
            ret.data.groupId = parseInt(msg.peerUid)
            break
        }
        sendMessage(ret)
        return
      }
      const ret: EventDataType<BotMessageData> = {
        self: {
          id: user.uin,
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
          senderId: uin,
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
      ret.data.elements = convertNTMsgElement2BotMsgElement({
        chatType: msg.chatType,
        peerUid: msg.peerUid,
        guildId: ''
      }, msg.msgId, msg.elements)
      for (const ele of ret.data.elements) {
        if (ele.type === 'mention') {
          if(false === ele.data.at?.isAll) {
            // at特定成员，获取QQ号
            const { getUser } = useNTUserStore()
            const user = getUser()
            const group = user.getGroup(parseInt(msg.peerUid))
            const member = group.getMemberByUid(ele.data.at.uid as `u_${string}`)
            const info = await member.getInfo()
            ele.data.at.uin = parseInt(info.uin)
          }
        }
      }
      ret.data.records = msg.records.map(e => convertNTMsg2BotMsg(e))
      sendMessage(ret)
    }
  })
  // registerEventListener('KernelMsgListener/onRecvSysMsg', 'always', async (payload: number[]) => {
    
  //   log.info('onRecvSysMsg:', payload)
  //   const data = CommunicationPkg.decode(new Uint8Array(payload[0]))
  //   log.info('onRecvSysMsg', data)
  // })
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
      throw new CustomError(500, 'can not get user info!')
    // 一分钟前的消息不处理
    if (Date.now()/1000 - parseInt(msg.msgTime) > 60) {
      log.info('一分钟前的消息不处理')
      return;
    }
    log.info('receive:', JSON.stringify(msg, null, 4))
    // 频道消息暂不处理
    if (msg.chatType === 4) return
    
    const senderUserInfo = await getUserInfoByUid(msg.senderUid)
    const ret: EventDataType<BotMessageData> = {
      self: {
        id: user.uin,
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
    ret.data.elements = convertNTMsgElement2BotMsgElement({
      chatType: msg.chatType,
      peerUid: msg.peerUid,
      guildId: ''
    }, msg.msgId, msg.elements)
    ret.data.records = msg.records.map(e => convertNTMsg2BotMsg(e))
    sendMessage(ret)
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
      throw new CustomError(500, 'can not get user info!')
    for (const msg of msgList) {
      
      const senderUserInfo = await getUserInfoByUid(msg.senderUid)
      // 判断一下撤回消息
      const rMsg = msg.elements.find(e => e.elementType === 8 && e.grayTipElement?.subElementType === 1)
      if (rMsg) {
        // 是撤回消息
        const ret: EventDataType<RecallMessageData> = {
          self: {
            id: user.uin,
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
        sendMessage(ret)
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