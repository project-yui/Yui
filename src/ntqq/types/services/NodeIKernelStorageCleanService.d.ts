

interface NodeIKernelStorageCleanListenerConstructorOptions {
    onCleanCacheProgressChanged: () => void
    onScanCacheProgressChanged: () => void
    onCleanCacheStorageChanged: () => void
    onFinishScan: () => void
    onChatCleanDone: () => void
}
export class NodeIKernelStorageCleanListener {
    constructor(options: NodeIKernelStorageCleanListenerConstructorOptions)
}
export class NodeIKernelStorageCleanService {
    addKernelStorageCleanListener(listener: NodeIKernelStorageCleanListener): number
    addNewDownloadOrUploadFile(info: NodeIKernelStorageCleanServiceType.AddNewDownloadOrUploadFileReq): any
}
