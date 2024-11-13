
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
    getCollectionItemList(searchInfo: {
        category: number
        groupId: number
        forceSync: boolean
        forceFromDb: boolean
        timeStamp: `${number}`
        count: number
        searchDown: boolean
    }): Promise<any>
}