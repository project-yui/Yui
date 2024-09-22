import { useLogger } from "../../../common/log"
import { NTGroupMsgList } from "../../../ntqq/group/msg"
import { convertNTMsg2BotMsg } from "../../../transfer/message/convert"
import { GroupMsgReq } from "./types"
const log = useLogger('GroupMsg')

export const getGroupMsgList = async (p: GroupMsgReq) => {
  const ret = await NTGroupMsgList(p.code, p.msgId, p.cnt)
  log.info('group msg list:', JSON.stringify(ret, null, 4))
  let resp = ret.map(msg => convertNTMsg2BotMsg(msg))

  return resp
}