import { BotActionParams } from "../interfaces"

/**
 * 群列表类型
 */
export interface GroupDetailInfoResp {
    code: `${number}`
    name: string
    avatar_url: string
    role: 'owner' | 'member' | 'manager'
    top: boolean
    topped_timestamp: number
    is_conf: boolean
}

/**
 * 群消息查询类型
 */
export interface GroupMsgReq extends BotActionParams  {
    code: `${number}`
    msg_id: `${number}`
    cnt: number
}