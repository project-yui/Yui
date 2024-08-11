
interface NodeIKernelQiDianListenerConstructorOptions {
    onSideBarConfigNotify: () => void
}
export class NodeIKernelQiDianListener {
    constructor(options: NodeIKernelQiDianListenerConstructorOptions)
}
export class NodeIKernelQiDianService {
    addKernelQiDianListener(listener: NodeIKernelQiDianListener): number
}