
interface NodeIKernelCollectionListenerConstructorOptions {
    onDownloadCollectionFileStart: () => void
    onDownloadCollectionFileProgress: () => void
    onDownloadCollectionFileComplete: () => void
    onEditCollectionItemSuccess: () => void
    onCreateNewCollectionItemSuccess: () => void
}
export class NodeIKernelCollectionListener {
    constructor(options: NodeIKernelCollectionListenerConstructorOptions)
}
export class NodeIKernelCollectionService {
    addKernelCollectionListener(listener: NodeIKernelCollectionListener): void
}