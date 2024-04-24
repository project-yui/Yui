import { BotActionParams } from "../interfaces"

//#region "UserInfo"
/**
 * 获取用户信息动作的数据
 */
export interface UserInfoReq extends BotActionParams {
  user_uid: `u_${string}`
}

/**
 * 响应用户信息动作的数据
 */
export interface UserInfoResp {
  /**
   * 用户id
   */
  user_uid: `u_${string}`
  /**
   * 用户QQ号
   */
  user_uin: number
  /**
   * 用户昵称
   */
  nick: string
  user_displayname: string
  user_remark: string
  avatar_url: string
}

//#endregion

//#region "GroupInfo"
/**
 * 获取用户信息动作的数据
 */
export interface GroupInfoReq extends BotActionParams {
  group_id: number
}

/**
 * 响应用户信息动作的数据
 */
export interface GroupInfoResp {
  /**
   * 群号
   */
  group_id: number
  /**
   * 群名称
   */
  group_name: string
  /**
   * 群头像
   */
  avatar_url: string
}

//#endregion
//#region "GroupMemberInfo"
/**
 * 获取用户信息动作的数据
 */
export interface GroupMemberInfoReq extends BotActionParams {
  group_id: number
  user_uin: number
  user_uid: `u_${string}`
}

/**
 * 响应用户信息动作的数据
 */
export interface GroupMemberInfoResp {
  /**
   * 用户id
   */
  user_uid: `u_${string}`
  /**
   * 用户QQ号
   */
  user_uin: number
  /**
   * 用户昵称
   */
  nick: string
  /**
   * 群昵称
   */
  card_name: string
  avatar_url: string
}

//#endregion
export interface LikeUserReq extends BotActionParams {
  user_id: `u_${string}`
  count: number
}
