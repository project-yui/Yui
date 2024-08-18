export interface UserDetailInfoType {
  /**
   * 唯一标识
   */
  uid: `u_${string}`
  /**
   * QQ号
   */
  uin: string
  simpleInfo: {
    coreInfo: {
      nick: string
    }
  }
}
export interface GroupDetailInfoType {
  /**
   * 群号
   */
  groupCode: `${number}`,
  /**
   * 群主uid
   */
  ownerUid: `u_${string}`,
  groupFlag: number,
  groupFlagExt: number,
  /**
   * 最大成员数
   * 
   * 200
   */
  maxMemberNum: number,
  /**
   * 成员数量
   */
  memberNum: number,
  groupOption: 4,
  classExt: 34,
  /**
   * 群名称
   */
  groupName: string,
  fingerMemo: '',
  /**
   * 入群提问
   */
  groupQuestion: string,
  certType: 0,
  richFingerMemo: '',
  tagRecord: [],
  shutUpAllTimestamp: 0,
  shutUpMeTimestamp: 0,
  groupTypeFlag: 1,
  privilegeFlag: 590018,
  groupSecLevel: 5,
  groupFlagExt3: 9344,
  isConfGroup: 0,
  isModifyConfGroupFace: 1,
  isModifyConfGroupName: 1,
  noFigerOpenFlag: 1,
  noCodeFingerOpenFlag: 1,
  groupFlagExt4: 131072,
  /**
   * 群公告
   */
  groupMemo: string
  cmdUinMsgSeq: 11474,
  cmdUinJoinTime: 1680788268,
  cmdUinUinFlag: 0,
  cmdUinMsgMask: 1,
  groupSecLevelInfo: 2,
  cmdUinPrivilege: 2,
  cmdUinFlagEx2: 0,
  appealDeadline: 0,
  remarkName: '',
  isTop: false
}

export interface GroupMemberDetailInfoType {
  /**
   * 唯一标识
   */
  uid: `u_${string}`,
  qid: string,
  /**
   * QQ号
   */
  uin: `${number}`,
  /**
   * 昵称
   */
  nick: string
  remark: '',
  cardType: 0,
  /**
   * 群昵称
   */
  cardName: string
  role: 4,
  /**
   * 头像路径
   * 
   * 磁盘的文件路径
   */
  avatarPath: string
  shutUpTime: 0,
  isDelete: false,
  isSpecialConcerned: false,
  isSpecialShield: false,
  /**
   * 是否机器人
   */
  isRobot: boolean,
  groupHonor: '0x1064',
  memberRealLevel: 100,
  memberLevel: 2,
  memberTitleId: 10315,
  memberSpecialTitle: '',
  specialTitleExpireTime: '0',
  userShowFlag: 0,
  userShowFlagNew: 0
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