
interface NodeIKernelQQPlayListenerConstructorOptions {
    onMojoCallback: () => void
}
export class NodeIKernelQQPlayListener {
    constructor(options: NodeIKernelQQPlayListenerConstructorOptions)
}
export class NodeIKernelQQPlayService {
    addKernelQQPlayListener(listener: NodeIKernelQQPlayListener): void
    uninit(): void
}