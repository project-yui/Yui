

interface NodeIKernelOnlineStatusListenerConstructorOptions {
    onRecvOnlineStatusPraisePush: () => void
    onRecvLikeStatusResultAfterGetAggregation: () => void
}
export class NodeIKernelOnlineStatusListener {
    constructor(options: NodeIKernelOnlineStatusListenerConstructorOptions)
}
export default class NodeIKernelOnlineStatusService {
    addKernelOnlineStatusListener(listener: NodeIKernelOnlineStatusListener): number
}