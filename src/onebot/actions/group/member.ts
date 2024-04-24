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
      user_uid: "u_",
      user_uin: 0,
      nick: "",
      card_name: "",
      avatar_url: ''
    }
    // 检查uid是否可用
    let ret: GroupMemberDetailInfoType | undefined = undefined
    if (p.user_uid === undefined || p.user_uid === null || p.user_uid.length === 0) {
      if (p.user_uin <= 0) {
        throw new CustomError(1, 'uid or uin is error!');
      }
      ret = await getGroupMemberInfoByUin(p.group_id, p.user_uin)
    }
    else
    {
      ret = await getGroupMemberInfoByUid(p.group_id, p.user_uid)
    }
    if (ret === undefined) {
      throw new CustomError(1, 'Failed to get member info!');
    }
    log.info('getGroupMemberInfoById:', ret)
    resp.user_uid = ret.uid
    resp.user_uin = parseInt(ret.uin)
    resp.nick = ret.nick
    resp.card_name = ret.cardName
    resp.avatar_url = `http://q1.qlogo.cn/g?b=qq&nk=${resp.user_uin}&s=640`
    return resp
  }
  /**
   * 初始化好友动作
   */
  export const initGroupMember = () => {
    const { registerActionHandle } = useStore()
    registerActionHandle('get_group_member_info', getGroupMemberInfo)
  }