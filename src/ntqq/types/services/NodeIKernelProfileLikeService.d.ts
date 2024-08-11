
interface NodeIKernelProfileLikeListenerConstructorOptions {
    onProfileLikeScidResourceInfo: () => void
}
export class NodeIKernelProfileLikeListener {
    constructor(options: NodeIKernelProfileLikeListenerConstructorOptions)
}
export class NodeIKernelProfileLikeService {
    addKernelProfileLikeListener(listener: NodeIKernelProfileLikeListener): number
    setBuddyProfileLike(like: NodeIKernelProfileLikeServiceType.LikeReq): Promise<NodeIKernelProfileLikeServiceType.LikeResp>
}