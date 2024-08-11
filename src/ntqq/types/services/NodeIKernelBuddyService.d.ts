
interface NodeIKernelBuddyListenerConstructorOptions {
    onBuddyListChange: () => void
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
export class NodeIKernelBuddyService {
    addKernelBuddyListener(listener: NodeIKernelBuddyListener): number
    getAvatarUrl(a: any, b: any): any
}