
interface NodeIKernelBuddyListenerConstructorOptions {
    onBuddyListChange: () => void
    onBuddyListChangedV2: () => void
    onBuddyInfoChange: () => void
    onBuddyDetailInfoChange: () => void
    onNickUpdated: () => void
    onBuddyRemarkUpdated: () => void
    onAvatarUrlUpdated: () => void
    onBuddyReqChange: () => void
    onBuddyReqUnreadCntChange: () => void
    onCheckBuddySettingResult: () => void
    onAddBuddyNeedVerify: () => void
    onSmartInfos: () => void
    onSpacePermissionInfos: () => void
    onDoubtBuddyReqChange: () => void
    onDoubtBuddyReqUnreadNumChange: () => void
    onBlockChanged: () => void
    onAddMeSettingChanged: () => void
    onDelBatchBuddyInfos: () => void
}
export class NodeIKernelBuddyListener {
    constructor(options: NodeIKernelBuddyListenerConstructorOptions)
}

interface BuddyGroupType {
    categoryId: number
    categorySortId: number
    categroyName: string
    /**
     * 总数
     */
    categroyMbCount: number
    /**
     * 在线数量
     */
    onlineCount: number
    buddyUids: `u_${string}`[]
}

/**
 * 详细好友类型
 */
interface BuddyType {
    /**
     * 用户ID
     */
    uid: `u_${string}`
    /**
     * QQ号
     */
    uin: `${number}`
    coreInfo: {
        /**
         * 用户ID
         */
        uid: `u_${string}`
        /**
         * QQ号
         */
        uin: `${number}`
        /**
         * 昵称
         */
        nick: string
        /**
         * 备注
         */
        remark: string
    }
}
export class NodeIKernelBuddyService {
    addKernelBuddyListener(listener: NodeIKernelBuddyListener): number
    getAvatarUrl(a: any, b: any): any
    getBuddyListV2(a: boolean, b: number): Promise<SimpleResult<BuddyGroupType[]>>
}