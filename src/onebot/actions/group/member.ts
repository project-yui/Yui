import { useLogger } from "../../../common/log"
import { useNTUserStore } from "../../../ntqq/store/user"
import { CustomError } from "../../../server/error/custom-error"
import { useStore } from "../../../store/store"
import { GroupMemberDetailInfoType } from "../../common/interfaces"
import { GroupMemberInfoReq, GroupMemberInfoResp, GroupMemberNudgeReq, UserInfoReq, UserInfoResp } from "../friend/interfaces"

const log = useLogger('Group/Member')
/**
 * 
 * @param p 
 * @returns 
 */
const getGroupMemberInfo = async (p: GroupMemberInfoReq): Promise<GroupMemberInfoResp> => {
  const resp: GroupMemberInfoResp = {
    userUid: "u_",
    userUin: 0,
    nick: "",
    cardName: "",
    avatarUrl: ''
  }
  // 检查uid是否可用
  let ret: GroupMemberDetailInfoType | undefined = undefined
  const { getUser } = useNTUserStore()
  const user = getUser()
  const group = user.getGroup(p.groupId)
  if (p.userUid === undefined || p.userUid === null || p.userUid.length === 0) {
    if (p.userUin <= 0) {
      throw new CustomError(1, 'uid or uin is error!');
    }
    const member = group.getMember(p.userUin)
    ret = await member.getInfo()
  }
  else {
    const member = group.getMemberByUid(p.userUid)
    ret = await member.getInfo()
  }
  if (ret === undefined) {
    throw new CustomError(1, 'Failed to get member info!');
  }
  log.info('getGroupMemberInfoById:', ret)
  resp.userUid = ret.uid
  resp.userUin = parseInt(ret.uin)
  resp.nick = ret.nick
  resp.cardName = ret.cardName
  resp.avatarUrl = `http://q1.qlogo.cn/g?b=qq&nk=${resp.userUin}&s=640`
  return resp
}

const sendNudgeToMember = async (p: GroupMemberNudgeReq): Promise<boolean> => {
  const { getUser } = useNTUserStore()
  // 1. get operate user
  const user = getUser()
  // 2. get group
  const group = user.getGroup(p.groupId)
  if (!group)
  {
    throw new CustomError(10000002, '获取群实例失败')
  }
  // 3. get member
  const member = group.getMember(p.userUin)
  if (!member)
  {
    throw new CustomError(10000002, '获取群成员失败')
  }
  // 4. send nudge
  return await member.nudge()
  // 5. return result
}
/**
 * 初始化好友动作
 */
export const initGroupMember = () => {
  const { registerActionHandle } = useStore()
  registerActionHandle('send_nudge_to_member', sendNudgeToMember)
  registerActionHandle('get_group_member_info', getGroupMemberInfo)
}