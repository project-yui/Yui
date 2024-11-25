/**
 * 基本用户信息
 */
export interface BaseUserInfoType {
    uin: number
    uid: `u_${string}` | undefined
    /**
     * 昵称
     */
    nick: string
    /**
     * 签名
     */
    signature: string
}

/**
 * 当前用户信息
 */
export interface UserInfoType extends BaseUserInfoType {
}

/**
 * 好友信息
 */
export interface FriendUserInfoType extends BaseUserInfoType {
    /**
     * 备注
     */
    remark: string
}

/**
 * 群成员信息
 */
export interface MemberUserInfoType extends FriendUserInfoType {
    /**
     * 群昵称
     */
    groupNick: string
}