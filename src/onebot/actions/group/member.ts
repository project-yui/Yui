import { useLogger } from "../../../common/log"
import { useStore } from "../../../store/store"
import { getGroupMemberInfoById } from "../../common/group"
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
    const ret = await getGroupMemberInfoById(p.group_id, p.user_uid)
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