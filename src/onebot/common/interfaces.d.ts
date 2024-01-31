export interface UserDetailInfoType {
  info: {
    /**
     * 唯一标识
     */
    uid: `u_${string}`
    qid: string
    /**
     * QQ号
     */
    uin: string
    /**
     * QQ昵称
     */
    nick: string
    remark: string
    longNick: string
    avatarUrl: string
    birthday_year: number
    birthday_month: number
    birthday_day: number
    /**
     * 2 - 女
     */
    sex: number
    regTime: number
  }
}

/**
 * 当前账户信息
 */
export interface CurrentAccountInfo {
  /**
   * qq号
   */
  account: string
  mainAccount: string
  /**
   * qq号
   */
  uin: string
  uid: `u_${string}`
  nickName: string
  gender: number
  age: number
  faceUrl: string
  a2: string
  d2: string
  d2key: string
}