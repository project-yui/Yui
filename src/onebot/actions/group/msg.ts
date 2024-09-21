import { useLogger } from "../../../common/log"
import { NTGroupMsgList } from "../../../ntqq/group/msg"
import { convertNTMessage2BotMessage } from "../../../transfer/message/convert"
import { GroupMsgReq } from "./types"
const log = useLogger('GroupMsg')

export const getGroupMsgList = async (p: GroupMsgReq) => {
  const ret = await NTGroupMsgList(p.code, p.msgId, p.cnt)
  log.info('group msg list:', JSON.stringify(ret, null, 4))
  let resp = ret.map(msg => ({
    messageId: msg.msgId,
    messageSeq: msg.msgSeq,
    groupId: 0,
    groupName: '',
    senderId: parseInt(msg.senderUin),
    senderUid: msg.senderUid,
    senderMemberName: msg.sendMemberName,
    time: parseInt(msg.msgTime),
    elements: convertNTMessage2BotMessage({
      chatType: msg.chatType,
      peerUid: msg.peerUid,
      guildId: ''
    }, msg.msgId, msg.elements),
    records: [],
  }))

  return resp
}