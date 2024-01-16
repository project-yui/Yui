export declare namespace NTFriend {
  export interface PayloadBuddyList {
    data: FriendGroupType[]
  }
  export interface FriendGroupType {
    categoryId: number
    categroyName: string
    categroyMbCount: number
    buddyList: FriendType[]
  }
  export interface FriendType {
    /**
     * 用户唯一标识
     */
    uid: `u_${string}`
    qid: string
    /**
     * QQ号
     */
    uin: `${number}`
    /**
     * QQ昵称
     */
    nick: string
    remark: string
    /**
     * 个性签名
     */
    longNick: string
    /**
     * 头像链接
     * 
     * 但实际上是空的
     */
    avatarUrl: string
    birthday_year: number
    birthday_month: number
    birthday_day: number
    /**
     * 性别
     */
    sex: number
    topTime: `${number}`
    isBlock: boolean
    isMsgDisturb: boolean
    isSpecialCareOpen: boolean
    isSpecialCareZone: boolean
    ringId: string
    status: number
    extStatus: number
    categoryId: number
    onlyChat: boolean
    qzoneNotWatch: boolean
    qzoneNotWatched: boolean
    vipFlag: boolean
    yearVipFlag: boolean
    svipFlag: boolean
    vipLevel: number
  }

  /**
   * 点赞请求类型
   */
  export interface LikeReqType {
    doLikeUserInfo: {
      friendUid: `u_${string}`,
      sourceId: number,
      doLikeCount: number,
      doLikeTollCount: number
    }
  }

  /**
   * 点赞结果类型
   */
  export interface LikeRespType {
    /**
     * 结果
     * 
     * 0 - 成功
     * 
     */
    result: number
    errMsg: string
    
    /**
     * 点赞成功数量
     */
    succCounts: number
  }
}