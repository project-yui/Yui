
interface NodeIKernelAvatarListenerConstructorOptions {
    onAvatarChanged: () => void
    onGroupAvatarChanged: () => void
    onGroupPortraitChanged: () => void
    onAvatarChangedForUin: () => void
}
export class NodeIKernelAvatarListener {
    constructor(options: NodeIKernelAvatarListenerConstructorOptions)
}
export class NodeIKernelAvatarService {
    addAvatarListener(listener: NodeIKernelAvatarListener): number
}