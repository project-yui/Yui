

interface NodeIKernelSkinListenerConstructorOptions {
    onThemeInfoChange: () => void
    onCustomThemeInfoChange: () => void
}
export class NodeIKernelSkinListener {
    constructor(options: NodeIKernelSkinListenerConstructorOptions)
}
export class NodeIKernelSkinService {
    addKernelSkinListener(listener: NodeIKernelSkinListener): number
}
