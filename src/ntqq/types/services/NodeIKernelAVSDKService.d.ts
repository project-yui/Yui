
interface NodeIKernelAVSDKListenerConstructorOptions {
    onActionToAVSDK: () => void
    OnInviteActionToAVSDK: () => void
    OnGroupVideoActionToAVSDK: () => void
    OnGroupVideoServerPushToAVSDK: () => void
    OnGroupVideoMemNumPushInfo: () => void
    onGroupAudioMemNumChange: () => void
    onGroupVideoInviteMemberUpdate: () => void
    onRecvGroupVideoJsonBufferRsp: () => void
}
export class NodeIKernelAVSDKListener {
    constructor(options: NodeIKernelAVSDKListenerConstructorOptions)
}
export class NodeIKernelAVSDKService {
    addKernelAVSDKListener(listener: NodeIKernelAVSDKListener): void
}