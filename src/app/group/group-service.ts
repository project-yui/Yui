import { useLogger } from "../../common/log"
import { requireCurrentNTUserModel } from "../../ntqq/core/runtime-store"
import { NTGetGroupList } from "../../ntqq/group/list"
import { NTGroupMsgList } from "../../ntqq/group/msg"
import { CustomError } from "../../common/error/custom-error"
import { NTMessageConverter } from "../../transfer/message/convert"
import { GroupMemberNudgeReq } from "../../onebot/contracts/friend"
import { GroupDetailInfoResp, GroupMsgReq } from "../../onebot/contracts/group"
import { getGroupInfo, getGroupMemberInfo } from "./group-query-service"

const log = useLogger('App/GroupService')

export { getGroupInfo, getGroupMemberInfo } from "./group-query-service"

const code2role: Record<number, 'owner' | 'member' | 'manager'> = {
  2: 'member',
  3: 'manager',
  4: 'owner'
}

export const getGroupList = async (): Promise<GroupDetailInfoResp[]> => {
  const ret = await NTGetGroupList()
  log.info('getGroupList:', ret)
  return ret.map<GroupDetailInfoResp>(e => ({
    code: parseInt(e.groupCode),
    name: e.groupName,
    avatarUrl: `https://p.qlogo.cn/gh/${e.groupCode}/${e.groupCode}/640/`,
    role: code2role[e.memberRole],
    top: e.isTop,
    toppedTimestamp: parseInt(e.toppedTimestamp),
    isConf: e.isConf,
  }))
}

export const getGroupMsgList = async (payload: GroupMsgReq) => {
  const ret = await NTGroupMsgList(payload.code, payload.msgId, payload.cnt)
  log.info('group msg list:', JSON.stringify(ret, null, 4))
  return ret.map(msg => new NTMessageConverter(msg).convert())
}

export const sendNudgeToMember = async (payload: GroupMemberNudgeReq): Promise<boolean> => {
  const user = requireCurrentNTUserModel()
  const group = user.getGroup(payload.groupId)
  if (!group) {
    throw new CustomError(10000002, '获取群实例失败')
  }
  const member = group.getMember(payload.userUin)
  if (!member) {
    throw new CustomError(10000002, '获取群成员失败')
  }
  return await member.nudge()
}
