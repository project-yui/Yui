
interface NodeIKernelMsgBackupListenerConstructorOptions {
    onGetRequestMsgBackup: () => void
    onGetRequestMsgRestore: () => void
    onStateChange: () => void
    onRecvChatCount: () => void
    onTransferProgess: () => void
    onTransferSpeed: () => void
    onDisconnection: () => void
}
export class NodeIKernelMsgBackupListener {
    constructor(options: NodeIKernelMsgBackupListenerConstructorOptions)
}
export default class NodeIKernelMsgBackupService {
    addKernelMsgBackupListener(listener: NodeIKernelMsgBackupListener): void
}