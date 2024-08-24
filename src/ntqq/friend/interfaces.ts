export declare namespace NTFriend {
  export interface PayloadBuddyList {
    data: FriendGroupType[]
  }
  export interface FriendGroupType {
    categoryId: number
    categorySortId: number
    categroyName: string
    categroyMbCount: number
    onlineCount: number
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
    /**
     * 头像
     */
    avatarUrl: string
    /**
     * 备注
     */
    remark: string
    /**
     * 个性签名
     */
    longNick: string
    richTime: number
  }

  /**
   * 点赞请求类型
   */
  export interface LikeReqType {
    doLikeUserInfo: {
      friendUid: `u_${string}`,
      /**
       * 70 - 好友列表
       * 
       * 71 - 群
       * 
       * 72 - 谁给我点赞
       * 
       */
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