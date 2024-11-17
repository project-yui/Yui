import { BotActionParams } from "../interfaces"

//#region "UserInfo"
/**
 * 获取用户信息动作的数据
 */
export interface UserInfoReq extends BotActionParams {
  userUid: `u_${string}`
}

/**
 * 响应用户信息动作的数据
 */
export interface UserInfoResp {
  /**
   * 用户id
   */
  uid: `u_${string}`
  /**
   * 用户QQ号
   */
  uin: number
  /**
   * 用户昵称
   */
  nick: string
  userDisplayname: string
  userRemark: string
  avatarUrl: string
}

//#endregion

//#region "GroupInfo"
/**
 * 获取用户信息动作的数据
 */
export interface GroupInfoReq extends BotActionParams {
  groupId: number
}

/**
 * 响应用户信息动作的数据
 */
export interface GroupInfoResp {
  /**
   * 群号
   */
  id: number
  /**
   * 群名称
   */
  name: string
  /**
   * 群头像
   */
  avatarUrl: string
}

//#endregion
//#region "GroupMemberInfo"
/**
 * 获取用户信息动作的数据
 */
export interface GroupMemberInfoReq extends BotActionParams {
  groupId: number
  userUin: number
  userUid: `u_${string}`
}

/**
 * 响应用户信息动作的数据
 */
export interface GroupMemberInfoResp {
  /**
   * 用户id
   */
  userUid: `u_${string}`
  /**
   * 用户QQ号
   */
  userUin: number
  /**
   * 用户昵称
   */
  nick: string
  /**
   * 群昵称
   */
  cardName: string
  avatarUrl: string
}

//#endregion

//#region "GroupNudgeInfo"
/**
 * 获取用户信息动作的数据
 */
export interface GroupMemberNudgeReq extends BotActionParams {
  groupId: number
  userUin: number
  userUid: `u_${string}`
}

/**
 * 响应用户信息动作的数据
 */
export interface GroupMemberNudgeResp {
  /**
   * 用户id
   */
  userUid: `u_${string}`
  /**
   * 用户QQ号
   */
  userUin: number
  /**
   * 用户昵称
   */
  nick: string
  /**
   * 群昵称
   */
  cardName: string
  avatarUrl: string
}

//#endregion
export interface LikeUserReq extends BotActionParams {
  userId: `u_${string}`
  count: number
}
