import { useLogger } from "../../../common/log"
import { useStore } from "../../../store/store"
import { getGroupInfoById } from "../../common/group"
import { getUserInfoByUid } from "../../common/user"
import { GroupInfoReq, GroupInfoResp, UserInfoReq, UserInfoResp } from "../friend/interfaces"

const log = useLogger('Group/Member')

const getGroupInfo = async (p: GroupInfoReq): Promise<GroupInfoResp> => {
    const resp: GroupInfoResp = {
      group_name: '',
      avatar_url: '',
      group_id: p.group_id
    }
    const ret = await getGroupInfoById(p.group_id)
    log.info('getGroupInfoById:', ret)
    resp.group_name = ret.groupName
    resp.avatar_url = `https://p.qlogo.cn/gh/${p.group_id}/${p.group_id}/640`
    return resp
  }
  /**
   * 初始化群组动作
   */
  export const initGroup = () => {
    const { registerActionHandle } = useStore()
    registerActionHandle('get_group_info', getGroupInfo)
  }