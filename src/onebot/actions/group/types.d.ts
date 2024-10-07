import { BotActionParams } from "../interfaces"

/**
 * 群列表类型
 */
export interface GroupDetailInfoResp {
    /**
     * 群号
     */
    code: number
    name: string
    avatarUrl: string
    role: 'owner' | 'member' | 'manager'
    top: boolean
    toppedTimestamp: number
    isConf: boolean
}

/**
 * 群消息查询类型
 */
export interface GroupMsgReq extends BotActionParams  {
    code: `${number}`
    msgId: `${number}`
    cnt: number
}