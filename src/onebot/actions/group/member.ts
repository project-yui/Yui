import { useLogger } from "../../../common/log"
import { CustomError } from "../../../server/error/custom-error"
import { useStore } from "../../../store/store"
import { getGroupMemberInfoByUid, getGroupMemberInfoByUin } from "../../common/group"
import { GroupMemberDetailInfoType } from "../../common/interfaces"
import { getUserInfoByUid } from "../../common/user"
import { GroupMemberInfoReq, GroupMemberInfoResp, UserInfoReq, UserInfoResp } from "../friend/interfaces"

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
    if (p.userUid === undefined || p.userUid === null || p.userUid.length === 0) {
      if (p.userUin <= 0) {
        throw new CustomError(1, 'uid or uin is error!');
      }
      ret = await getGroupMemberInfoByUin(p.groupId, p.userUin)
    }
    else
    {
      ret = await getGroupMemberInfoByUid(p.groupId, p.userUid)
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
  /**
   * 初始化好友动作
   */
  export const initGroupMember = () => {
    const { registerActionHandle } = useStore()
    registerActionHandle('get_group_member_info', getGroupMemberInfo)
  }