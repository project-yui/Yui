import { useLogger } from "../../common/log"
import { requireCurrentNTUserModel } from "../../ntqq/core/runtime-store"
import { getGroupInfoById } from "../../ntqq/query/detail-info"
import { CustomError } from "../../common/error/custom-error"
import { GroupMemberDetailInfoType } from "../../onebot/contracts/common"
import {
  GroupInfoReq,
  GroupInfoResp,
  GroupMemberInfoReq,
  GroupMemberInfoResp,
} from "../../onebot/contracts/friend"

const log = useLogger('App/GroupQueryService')

export const getGroupInfo = async (payload: GroupInfoReq): Promise<GroupInfoResp> => {
  const response: GroupInfoResp = {
    name: '',
    avatarUrl: '',
    id: payload.groupId,
  }

  const detail = await getGroupInfoById(payload.groupId)
  log.info('getGroupInfoById:', detail)
  response.name = detail.groupName
  response.avatarUrl = `https://p.qlogo.cn/gh/${payload.groupId}/${payload.groupId}/640`
  return response
}

export const getGroupMemberInfo = async (payload: GroupMemberInfoReq): Promise<GroupMemberInfoResp> => {
  const response: GroupMemberInfoResp = {
    userUid: "u_",
    userUin: 0,
    nick: "",
    cardName: "",
    avatarUrl: '',
  }

  let detail: GroupMemberDetailInfoType | undefined
  const user = requireCurrentNTUserModel()
  const group = user.getGroup(payload.groupId)

  if (payload.userUid === undefined || payload.userUid === null || payload.userUid.length === 0) {
    if (payload.userUin <= 0) {
      throw new CustomError(1, 'uid or uin is error!')
    }
    const member = group.getMember(payload.userUin)
    detail = await member.getInfo()
  } else {
    const member = group.getMemberByUid(payload.userUid)
    detail = await member.getInfo()
  }

  if (detail === undefined) {
    throw new CustomError(1, 'Failed to get member info!')
  }

  log.info('getGroupMemberInfoById:', detail)
  response.userUid = detail.uid
  response.userUin = parseInt(detail.uin)
  response.nick = detail.nick
  response.cardName = detail.cardName
  response.avatarUrl = `http://q1.qlogo.cn/g?b=qq&nk=${response.userUin}&s=640`
  return response
}
