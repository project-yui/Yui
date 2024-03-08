import { useLogger } from "../../../common/log"
import { useStore } from "../../../store/store"
import { convertBotMessage2NTInnerMessage, convertBotMessage2NTMessage } from "../../../transfer/message/convert"
import { sendMessageToFriend } from "../../../transfer/message/friend"
import { sendForwardMessageToGroup, sendMessageToGroup } from "../../../transfer/message/group"
import { BotMessage } from "../../common/message"
import { getBotAccount } from "../../common/user"
import { BotActionResponse } from "../interfaces"
import { addMsg } from 'yukihana-native'

const { registerActionHandle } = useStore()
const log = useLogger('ActionGroup')
const sendMessage = (p: BotMessage.SendMsg): Promise<BotActionResponse<any>> => {
  return new Promise(async (resolve, reject) => {
    const resp: BotActionResponse<any> = {
      id: "",
      status: "ok",
      retcode: 0,
      data: undefined,
      message: ""
    }
    if (p.detail_type === 'group' && p.group_id) {
      const result = await sendMessageToGroup(p.group_id, p.message)
      resp.data = result
      resolve(resp)
    }
  })
}

/**
 * 向群发送转发消息
 * 
 * 待完善
 * 
 * @param p 转发消息内容
 * @returns 发送结果
 */
const sendForwardMessage = (p: BotMessage.SendMsg): Promise<BotActionResponse<any>> => {
  return new Promise(async (resolve, reject) => {
    const resp: BotActionResponse<any> = {
      id: "",
      status: "ok",
      retcode: 0,
      data: undefined,
      message: ""
    }
    if (p.detail_type === 'group' && p.group_id) {
      /**
       * 1. 检查是否为转发消息
       * 2. 存储转发消息的内容
       * 3. 创建并发送转发消息
       */
      const msg = p.message[0]
      if (msg.type == 'multiforward') {
        if (msg.data.forwardList) {
          const idList: `${number}`[] = []
          const user = getBotAccount()
          
          if (user.uid === undefined || user.uin === undefined)
            throw new Error('can not get user info!')
          // 2. 存储转发消息的内容
          // 先检查能不能根据msgId获取到消息，获取不到再添加
          for (const msgItem of msg.data.forwardList) {
            // 转换为可添加的消息
            addMsg({
              msgId: msgItem.msgId,
              msgRandom: msgItem.msgRandom,
              msgSeq: msgItem.msgSeq,
              cntSeq: msgItem.cntSeq,
              chatType: 2,
              msgType: 2,
              subMsgType: 1,
              sendType: 0,
              senderUid: msgItem.senderUid,
              peerUid: msgItem.peerUid,
              channelId: "",
              guildId: "",
              guildCode: "0",
              fromUid: "0",
              fromAppid: "0",
              msgTime: msgItem.msgTime,
              msgMeta: "0x",
              sendStatus: 2,
              sendRemarkName: "",
              sendMemberName: "",
              sendNickName: "",
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
              clientSeq: "0",
              fileGroupSize: null,
              foldingInfo: null,
              multiTransInfo: null,
              senderUin: msgItem.senderUin,
              peerUin: msgItem.peerUin,
              msgAttrs: new Map(),
              anonymousExtInfo: null,
              nameType: 0,
              avatarFlag: 0,
              extInfoForUI: null,
              personalMedal: null,
              categoryManage: 0
            })
          }
          // 3. 创建并发送转发消息
          log.info('forward list:', idList)
          const result = await sendForwardMessageToGroup(user.uid, p.group_id, idList.map(e => ({
            msgId: e,
            senderShowName: 'QQ用户'
          })))
          resp.data = result
        }
      }
      resolve(resp)
    }
  })
}

export const initGroup = () => {
  registerActionHandle('send_message', sendMessage)
  registerActionHandle('send_forward_message', sendForwardMessage)
}