export interface NTGroupInfo {
    /**
     * 群号
     */
    groupCode: `${number}`
    /**
     * 创建时间戳
     * 
     * 秒
     */
    createTime: `${number}`
    /**
     * 普通群： 200
     * svip群：2000
     */
    maxMember: 200 | 2000
    /**
     * 人数
     */
    memberCount: number
    /**
     * 群名称
     */
    groupName: string
    groupStatus: 0
    /**
     * 角色
     * 
     * 2 - 普通群成员
     * 
     * 3 - 管理员
     * 
     * 4 - 群主
     */
    memberRole: 2 | 3 | 4
    /**
     * 是否置顶
     */
    isTop: boolean
    toppedTimestamp: '0'
    privilegeFlag: 590016
    isConf: false
    hasModifyConfGroupFace: true
    hasModifyConfGroupName: true
    remarkName: string
    hasMemo: false
    groupShutupExpireTime: '0'
    personShutupExpireTime: '0'
    discussToGroupUin: '0'
    discussToGroupMaxMsgSeq: 0
    discussToGroupTime: 0
    groupFlagExt: 1075905728
    authGroupType: 0
    groupCreditLevel: 5
    groupFlagExt3: 9344
    groupOwnerId: {
        memberUin: '0',
        memberUid: `u_${string}`
    }
}