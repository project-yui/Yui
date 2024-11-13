interface UserInfo {
  /**
   * 用户QQ号
   */
  uin: number
  /**
   * 用户ID
   */
  uid: `u_${string}` | undefined
  /**
   * 用户昵称
   */
  userNick: string
}