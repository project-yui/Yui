import { useLogger } from "../../../common/log"
import { NTGetGroupList } from "../../../ntqq/group/list"
import { useStore } from "../../../store/store"
import { getGroupInfoById } from "../../common/group"
import { GroupInfoReq, GroupInfoResp } from "../friend/interfaces"
import { getGroupMsgList } from "./msg"
import { GroupDetailInfoResp } from "./types"

const log = useLogger('Group/Member')

const getGroupList = async (p: GroupInfoReq): Promise<GroupDetailInfoResp[]> => {
  const ret = await NTGetGroupList()
  log.info('getGroupList:', ret)
  const code2role: Record<number, 'owner' | 'member' | 'manager'> = {
    2: 'member',
    3: 'manager',
    4: 'owner'
  }
  const resp: GroupDetailInfoResp[] = ret.map<GroupDetailInfoResp>(e => ({
    code: e.groupCode,
    name: e.groupName,
    avatar_url: `https://p.qlogo.cn/gh/${e.groupCode}/${e.groupCode}/640/`,
    role: code2role[e.memberRole],
    top: e.isTop,
    topped_timestamp: parseInt(e.toppedTimestamp),
    is_conf: e.isConf,
  }))
  return resp
}

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
  registerActionHandle('get_group_list', getGroupList)
  registerActionHandle('get_group_info', getGroupInfo)
  registerActionHandle('get_group_msg', getGroupMsgList)
}