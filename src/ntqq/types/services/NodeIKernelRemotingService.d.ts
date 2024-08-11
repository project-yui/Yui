
interface NodeIKernelRemotingListenerConstructorOptions {
    onPenetrateBuffer: () => void
    onReceiveControlRequest: () => void
    onReceiveControlInvite: () => void
    onPeerAccept: () => void
    onConnected: () => void
    onDisConnected: () => void
}
export class NodeIKernelRemotingListener {
    constructor(options: NodeIKernelRemotingListenerConstructorOptions)
}
export class NodeIKernelRemotingService {
    addKernelRemotingListener(listener: NodeIKernelRemotingListener): void
}