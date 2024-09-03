import { useLogger } from "../../../common/log"
import { NTGroupMsgList } from "../../../ntqq/group/msg"
import { convertNTMessage2BotMessage } from "../../../transfer/message/convert"
import { GroupMsgReq } from "./types"
const log = useLogger('GroupMsg')

export const getGroupMsgList = async (p: GroupMsgReq) => {
    const ret = await NTGroupMsgList(p.code, p.msg_id, p.cnt)
    log.info('group msg list:', JSON.stringify(ret, null, 4))
    let resp = ret.map(msg => ({
        message_id: msg.msgId,
        message_seq: msg.msgSeq,
        group_id: 0,
        group_name: '',
        sender_id: parseInt(msg.senderUin),
        sender_uid: msg.senderUid,
        sender_member_name: msg.sendMemberName,
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