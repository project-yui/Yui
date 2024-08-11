
interface NodeIKernelProfileListenerConstructorOptions {
    onProfileSimpleChanged: () => void
    onProfileDetailInfoChanged: () => void
    onStatusUpdate: () => void
    onSelfStatusChanged: () => void
}
export class NodeIKernelProfileListener {
    constructor(options: NodeIKernelProfileListenerConstructorOptions)
}
export class NodeIKernelProfileService {
    addKernelProfileListener(listener: NodeIKernelProfileListener): number
    getUserSimpleInfo(a: boolean, uid: `u_${string}`[]): Promise<NodeIKernelProfileServiceType.UserSimpleInfoResp>
    getUserDetailInfo(uid: `u_${string}`): Promise<SimpleResult>
    getUserDetailInfoWithBizInfo(uid: `u_${string}`, keys: number[]): Promise<SimpleResult>
}