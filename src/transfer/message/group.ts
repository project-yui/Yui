import { NTSendForwardMessage, NTSendMessage } from "../../ntqq/message/message"
import { NTSendMessageType } from "../../ntqq/message/interfaces"
import { useLogger } from "../../common/log"
import { convertBotMessage2NTInnerMessage, convertBotMessage2NTMessage } from "./convert"
import { BotMessage, BotMessageSendElements } from "../../onebot/common/message"
import { useNTCore } from "../../ntqq/core/core"
import { getBotAccount } from "../../onebot/common/user"
import { addMsg } from "yui-native"
import { CustomError } from "../../server/error/custom-error"

const log = useLogger('Group')

/**
 * 向群发送普通消息
 * 
 * @param targetId 目标群号
 * @param msg 消息内容
 * @returns 发送结果
 */
export const sendMessageToGroup = async (targetId: `${number}`, msg: BotMessage.SendElement[]) => {
  log.info(`sendMessage to ${targetId} with:`, JSON.stringify(msg))
  const elements: NTSendMessageType.MsgElement[] = await convertBotMessage2NTMessage(msg)
  
  if (elements.length == 0) throw new CustomError(500, 'Try to send msg, but size of elements is zero!')
  
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

/**
 * 向群发送转发消息
 * 
 * @param srcId 来源Id
 * @param targetId 目标Id，群Id
 * @param msg 转发消息内容
 * @returns 转发结果
 */
export const sendForwardMessageToGroup = async (targetId: `${number}`, msg: BotMessageSendElements.ForwardElement) => {
  log.info('sendForwardMessageToGroup')
  const user = getBotAccount()
  
  if (user.uid === undefined || user.uin === undefined)
    throw new CustomError(500, 'can not get user info!')
  // 2. 存储转发消息的内容
  const forwardData = msg
  // 先检查能不能根据msgId获取到消息，获取不到再添加
  /**
   * 转发消息列表的来源对象
   */
  const peer: PeerInfo = {
    chatType: forwardData.from_type === 'group' ? 2 : 1,
    peerUid: (forwardData.from_type === 'group' ? `${forwardData.group_id ?? ''}` : forwardData.sender_id) || '',
    guildId: ''
  }
  const msgList: NTSendMessageType.ForwardMsgItem[] = []
  for (let i = 0; i < forwardData.items.length; i++) {
    const msgItem = forwardData.items[i]
    // if (msgItem.msg_id) {
    //   // 搜索消息
    //   log.info('getMsgsByMsgId:', msgItem.msg_id)
    //   const targetMsg = await msgService.getMsgsByMsgId(peer, [msgItem.msg_id])
    //   log.info('targetMsg:', targetMsg.msgList)
    //   if (targetMsg.msgList.length > 0) {
    //     // 找到不用添加进数据库
    //     msgList.push({
    //       msgId: msgItem.msg_id,
    //       senderShowName: '',
    //     })
    //     continue
    //   }
    // }
    // 生成随机msgId
    const msgId: `${number}` = `${Math.floor(Math.random() * 10e15)}`
    log.info('use random msgId:', msgId)
    // 转换为可添加的消息
    try {
      const msgContent: YuiNativeWrapper.AddMsgType = {
        msgId: msgId,
        msgRandom: Math.floor(Math.random() * 10e5),
        msgSeq: 10000 + i,
        cntSeq: '0',
        chatType: 2,
        msgType: 2,
        subMsgType: 1,
        sendType: 0,
        senderUid: msgItem.sender_uid,
        peerUid: peer.peerUid as `${number}`,
        channelId: "",
        guildId: "",
        guildCode: "0",
        fromUid: "0",
        fromAppid: "0",
        msgTime: msgItem.msg_time,
        msgMeta: "0x",
        sendStatus: 2,
        sendRemarkName: "",
        sendMemberName: msgItem.sender_member_name,
        sendNickName: "nick name",
        guildName: "",
        channelName: "",
        elements: await convertBotMessage2NTInnerMessage(msgItem.elements),
        records: [],
        emojiLikesList: [],
        commentCnt: "0",
        directMsgFlag: 0,
        directMsgMembers: [],
        peerName: "",
        freqLimitInfo: null,
        editable: false,
        avatarMeta: "",
        avatarPendant: "",
        feedId: "",
        roleId: "0",
        timeStamp: "0",
        clientIdentityInfo: null,
        isImportMsg: false,
        atType: 0,
        roleType: 0,
        fromChannelRoleInfo: {
          roleId: "0",
          name: "",
          color: 0
        },
        fromGuildRoleInfo: {
          roleId: "0",
          name: "",
          color: 0
        },
        levelRoleInfo: {
          roleId: "0",
          name: "",
          color: 0
        },
        recallTime: "0",
        isOnlineMsg: false,
        generalFlags: "0x",
        clientSeq: 0,
        fileGroupSize: null,
        foldingInfo: null,
        multiTransInfo: null,
        senderUin: msgItem.sender_uin,
        peerUin: peer.peerUid as `${number}`,
        msgAttrs: new Map(),
        anonymousExtInfo: null,
        nameType: 0,
        avatarFlag: 0,
        extInfoForUI: null,
        personalMedal: null,
        categoryManage: 0
      }
      log.debug('msgContent:', JSON.stringify(msgContent, null, 4))
      log.info('start to add')
      const addResult = addMsg(msgContent)
      log.info('add result:')
      log.info('add result:', addResult)
      if (addResult) {
        msgList.push({
          msgId: msgId,
          senderShowName: '',
        })
      }
    } catch (err) {
      log.error('error:', err)
    }
  }
  // 3. 创建并发送转发消息
  if (msgList.length === 0) throw new CustomError(400, 'forward list is empty!')
  log.info(`sendForwardMessage to ${targetId} with:`, JSON.stringify(msg))
  return await NTSendForwardMessage({
    msgInfos: msgList,
    srcContact: peer,
    dstContact: {
      chatType: 2,
      peerUid: `${targetId}`,
      guildId: ""
    },
    commentElements: [],
    msgAttributeInfos: new Map()
  })
}