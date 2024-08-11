
interface NodeIKernelGroupListenerConstructorOptions {
    onGroupListUpdate: () => void
    onGroupExtListUpdate: () => void
    onGroupSingleScreenNotifies: () => void
    onGroupNotifiesUpdated: () => void
    onGroupNotifiesUnreadCountUpdated: () => void
    onGroupDetailInfoChange: () => void
    onGroupAllInfoChange: () => void
    onGroupsMsgMaskResult: () => void
    onGroupConfMemberChange: () => void
    onGroupBulletinChange: () => void
    onGetGroupBulletinListResult: () => void
    onMemberListChange: () => void
    onMemberInfoChange: () => void
    onSearchMemberChange: () => void
    onGroupBulletinRichMediaDownloadComplete: () => void
    onGroupBulletinRichMediaProgressUpdate: () => void
    onGroupStatisticInfoChange: () => void
    onJoinGroupNotify: () => void
    onShutUpMemberListChanged: () => void
    onGroupBulletinRemindNotify: () => void
    onGroupFirstBulletinNotify: () => void
    onJoinGroupNoVerifyFlag: () => void
    onGroupArkInviteStateResult: () => void
}
export class NodeIKernelGroupListener {
    constructor(options: NodeIKernelGroupListenerConstructorOptions)
}
export class NodeIKernelGroupService {
    addKernelGroupListener(listener: NodeIKernelGroupListener): number
    getGroupDetailInfo(groupId: `${number}`, b: number): Promise<SimpleResult>
    /**
     * 获取群成员信息
     * 
     * @param groupId 群号
     * @param uidList 用户id列表
     * @param c true
     */
    getMemberInfo(groupId: `${number}`, uidList: `u_${string}`[], c: boolean): Promise<SimpleResult>
}