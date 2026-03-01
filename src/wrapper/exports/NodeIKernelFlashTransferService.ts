import { useLogger } from "../../common/log";

const log = useLogger('Wrapper/NodeIKernelFlashTransferService')
export class NodeIKernelFlashTransferService {
    protected static singleton?: any = undefined
    protected instance: any
    constructor(instance: any) {
        log.info('constructor called')
        this.instance = instance
    }
    addCompressedFileListener(...args: any[]) {
        log.info('addCompressedFileListener called with args:', args)
        const result = this.instance.addCompressedFileListener(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('addCompressedFileListener called  promise result:', result)
                return res
            })
        }
        log.info('addCompressedFileListener called result:', result)
        return result
    }
    addDesktopFileSetSimpleStatusListener(...args: any[]) {
        log.info('addDesktopFileSetSimpleStatusListener called with args:', args)
        const result = this.instance.addDesktopFileSetSimpleStatusListener(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('addDesktopFileSetSimpleStatusListener called  promise result:', result)
                return res
            })
        }
        log.info('addDesktopFileSetSimpleStatusListener called result:', result)
        return result
    }
    addDesktopFileSetSimpleStatusMonitoring(...args: any[]) {
        log.info('addDesktopFileSetSimpleStatusMonitoring called with args:', args)
        const result = this.instance.addDesktopFileSetSimpleStatusMonitoring(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('addDesktopFileSetSimpleStatusMonitoring called  promise result:', result)
                return res
            })
        }
        log.info('addDesktopFileSetSimpleStatusMonitoring called result:', result)
        return result
    }
    addDeviceStatusListener(...args: any[]) {
        log.info('addDeviceStatusListener called with args:', args)
        const result = this.instance.addDeviceStatusListener(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('addDeviceStatusListener called  promise result:', result)
                return res
            })
        }
        log.info('addDeviceStatusListener called result:', result)
        return result
    }
    addDownloadCntStatisticsListener(...args: any[]) {
        log.info('addDownloadCntStatisticsListener called with args:', args)
        const result = this.instance.addDownloadCntStatisticsListener(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('addDownloadCntStatisticsListener called  promise result:', result)
                return res
            })
        }
        log.info('addDownloadCntStatisticsListener called result:', result)
        return result
    }
    addFileAlbumStorageListener(...args: any[]) {
        log.info('addFileAlbumStorageListener called with args:', args)
        const result = this.instance.addFileAlbumStorageListener(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('addFileAlbumStorageListener called  promise result:', result)
                return res
            })
        }
        log.info('addFileAlbumStorageListener called result:', result)
        return result
    }
    addFileSetClusteringListListener(...args: any[]) {
        log.info('addFileSetClusteringListListener called with args:', args)
        const result = this.instance.addFileSetClusteringListListener(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('addFileSetClusteringListListener called  promise result:', result)
                return res
            })
        }
        log.info('addFileSetClusteringListListener called result:', result)
        return result
    }
    addFileSetDownloadListener(...args: any[]) {
        log.info('addFileSetDownloadListener called with args:', args)
        const result = this.instance.addFileSetDownloadListener(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('addFileSetDownloadListener called  promise result:', result)
                return res
            })
        }
        log.info('addFileSetDownloadListener called result:', result)
        return result
    }
    addFileSetSimpleStatusListener(...args: any[]) {
        log.info('addFileSetSimpleStatusListener called with args:', args)
        const result = this.instance.addFileSetSimpleStatusListener(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('addFileSetSimpleStatusListener called  promise result:', result)
                return res
            })
        }
        log.info('addFileSetSimpleStatusListener called result:', result)
        return result
    }
    addFileSetSimpleStatusMonitoring(...args: any[]) {
        log.info('addFileSetSimpleStatusMonitoring called with args:', args)
        const result = this.instance.addFileSetSimpleStatusMonitoring(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('addFileSetSimpleStatusMonitoring called  promise result:', result)
                return res
            })
        }
        log.info('addFileSetSimpleStatusMonitoring called result:', result)
        return result
    }
    addFileSetSimpleUploadInfoListener(...args: any[]) {
        log.info('addFileSetSimpleUploadInfoListener called with args:', args)
        const result = this.instance.addFileSetSimpleUploadInfoListener(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('addFileSetSimpleUploadInfoListener called  promise result:', result)
                return res
            })
        }
        log.info('addFileSetSimpleUploadInfoListener called result:', result)
        return result
    }
    addFileSetSimpleUploadInfoMonitoring(...args: any[]) {
        log.info('addFileSetSimpleUploadInfoMonitoring called with args:', args)
        const result = this.instance.addFileSetSimpleUploadInfoMonitoring(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('addFileSetSimpleUploadInfoMonitoring called  promise result:', result)
                return res
            })
        }
        log.info('addFileSetSimpleUploadInfoMonitoring called result:', result)
        return result
    }
    addFileSetUploadListener(...args: any[]) {
        log.info('addFileSetUploadListener called with args:', args)
        const result = this.instance.addFileSetUploadListener(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('addFileSetUploadListener called  promise result:', result)
                return res
            })
        }
        log.info('addFileSetUploadListener called result:', result)
        return result
    }
    addFlashTransferTaskInfoListener(...args: any[]) {
        log.info('addFlashTransferTaskInfoListener called with args:', args)
        const result = this.instance.addFlashTransferTaskInfoListener(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('addFlashTransferTaskInfoListener called  promise result:', result)
                return res
            })
        }
        log.info('addFlashTransferTaskInfoListener called result:', result)
        return result
    }
    addFolderListener(...args: any[]) {
        log.info('addFolderListener called with args:', args)
        const result = this.instance.addFolderListener(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('addFolderListener called  promise result:', result)
                return res
            })
        }
        log.info('addFolderListener called result:', result)
        return result
    }
    addTransferStateListener(...args: any[]) {
        log.info('addTransferStateListener called with args:', args)
        const result = this.instance.addTransferStateListener(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('addTransferStateListener called  promise result:', result)
                return res
            })
        }
        log.info('addTransferStateListener called result:', result)
        return result
    }
    asyncGetThumbnailPath(...args: any[]) {
        log.info('asyncGetThumbnailPath called with args:', args)
        const result = this.instance.asyncGetThumbnailPath(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('asyncGetThumbnailPath called  promise result:', result)
                return res
            })
        }
        log.info('asyncGetThumbnailPath called result:', result)
        return result
    }
    asyncRequestDownLoadStatus(...args: any[]) {
        log.info('asyncRequestDownLoadStatus called with args:', args)
        const result = this.instance.asyncRequestDownLoadStatus(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('asyncRequestDownLoadStatus called  promise result:', result)
                return res
            })
        }
        log.info('asyncRequestDownLoadStatus called result:', result)
        return result
    }
    batchRemoveFile(...args: any[]) {
        log.info('batchRemoveFile called with args:', args)
        const result = this.instance.batchRemoveFile(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('batchRemoveFile called  promise result:', result)
                return res
            })
        }
        log.info('batchRemoveFile called result:', result)
        return result
    }
    batchRemoveUserFileSetHistory(...args: any[]) {
        log.info('batchRemoveUserFileSetHistory called with args:', args)
        const result = this.instance.batchRemoveUserFileSetHistory(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('batchRemoveUserFileSetHistory called  promise result:', result)
                return res
            })
        }
        log.info('batchRemoveUserFileSetHistory called result:', result)
        return result
    }
    cancelPollFilesTransferProgress(...args: any[]) {
        log.info('cancelPollFilesTransferProgress called with args:', args)
        const result = this.instance.cancelPollFilesTransferProgress(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('cancelPollFilesTransferProgress called  promise result:', result)
                return res
            })
        }
        log.info('cancelPollFilesTransferProgress called result:', result)
        return result
    }
    checkBatchFilesDownloadStatus(...args: any[]) {
        log.info('checkBatchFilesDownloadStatus called with args:', args)
        const result = this.instance.checkBatchFilesDownloadStatus(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('checkBatchFilesDownloadStatus called  promise result:', result)
                return res
            })
        }
        log.info('checkBatchFilesDownloadStatus called result:', result)
        return result
    }
    checkDeviceStatus(...args: any[]) {
        log.info('checkDeviceStatus called with args:', args)
        const result = this.instance.checkDeviceStatus(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('checkDeviceStatus called  promise result:', result)
                return res
            })
        }
        log.info('checkDeviceStatus called result:', result)
        return result
    }
    checkDownloadStatusBeforeLocalFileOper(...args: any[]) {
        log.info('checkDownloadStatusBeforeLocalFileOper called with args:', args)
        const result = this.instance.checkDownloadStatusBeforeLocalFileOper(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('checkDownloadStatusBeforeLocalFileOper called  promise result:', result)
                return res
            })
        }
        log.info('checkDownloadStatusBeforeLocalFileOper called result:', result)
        return result
    }
    checkUploadPathValid(...args: any[]) {
        log.info('checkUploadPathValid called with args:', args)
        const result = this.instance.checkUploadPathValid(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('checkUploadPathValid called  promise result:', result)
                return res
            })
        }
        log.info('checkUploadPathValid called result:', result)
        return result
    }
    cleanFailedFiles(...args: any[]) {
        log.info('cleanFailedFiles called with args:', args)
        const result = this.instance.cleanFailedFiles(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('cleanFailedFiles called  promise result:', result)
                return res
            })
        }
        log.info('cleanFailedFiles called result:', result)
        return result
    }
    createFlashTransferUploadTask(...args: any[]) {
        log.info('createFlashTransferUploadTask called with args:', args)
        const result = this.instance.createFlashTransferUploadTask(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('createFlashTransferUploadTask called  promise result:', result)
                return res
            })
        }
        log.info('createFlashTransferUploadTask called result:', result)
        return result
    }
    createMergeShareTask(...args: any[]) {
        log.info('createMergeShareTask called with args:', args)
        const result = this.instance.createMergeShareTask(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('createMergeShareTask called  promise result:', result)
                return res
            })
        }
        log.info('createMergeShareTask called result:', result)
        return result
    }
    detectPrivacyInfoInPaths(...args: any[]) {
        log.info('detectPrivacyInfoInPaths called with args:', args)
        const result = this.instance.detectPrivacyInfoInPaths(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('detectPrivacyInfoInPaths called  promise result:', result)
                return res
            })
        }
        log.info('detectPrivacyInfoInPaths called result:', result)
        return result
    }
    doAIOFlashTransferBubbleActionWithStatus(...args: any[]) {
        log.info('doAIOFlashTransferBubbleActionWithStatus called with args:', args)
        const result = this.instance.doAIOFlashTransferBubbleActionWithStatus(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('doAIOFlashTransferBubbleActionWithStatus called  promise result:', result)
                return res
            })
        }
        log.info('doAIOFlashTransferBubbleActionWithStatus called result:', result)
        return result
    }
    getCompressedFileFolder(...args: any[]) {
        log.info('getCompressedFileFolder called with args:', args)
        const result = this.instance.getCompressedFileFolder(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getCompressedFileFolder called  promise result:', result)
                return res
            })
        }
        log.info('getCompressedFileFolder called result:', result)
        return result
    }
    getDownloadedFileCount(...args: any[]) {
        log.info('getDownloadedFileCount called with args:', args)
        const result = this.instance.getDownloadedFileCount(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getDownloadedFileCount called  promise result:', result)
                return res
            })
        }
        log.info('getDownloadedFileCount called result:', result)
        return result
    }
    getFailedFileList(...args: any[]) {
        log.info('getFailedFileList called with args:', args)
        const result = this.instance.getFailedFileList(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getFailedFileList called  promise result:', result)
                return res
            })
        }
        log.info('getFailedFileList called result:', result)
        return result
    }
    getFileCategoryList(...args: any[]) {
        log.info('getFileCategoryList called with args:', args)
        const result = this.instance.getFileCategoryList(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getFileCategoryList called  promise result:', result)
                return res
            })
        }
        log.info('getFileCategoryList called result:', result)
        return result
    }
    getFileList(...args: any[]) {
        log.info('getFileList called with args:', args)
        const result = this.instance.getFileList(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getFileList called  promise result:', result)
                return res
            })
        }
        log.info('getFileList called result:', result)
        return result
    }
    getFileMetas(...args: any[]) {
        log.info('getFileMetas called with args:', args)
        const result = this.instance.getFileMetas(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getFileMetas called  promise result:', result)
                return res
            })
        }
        log.info('getFileMetas called result:', result)
        return result
    }
    getFileSet(...args: any[]) {
        log.info('getFileSet called with args:', args)
        const result = this.instance.getFileSet(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getFileSet called  promise result:', result)
                return res
            })
        }
        log.info('getFileSet called result:', result)
        return result
    }
    getFileSetClusteringDetail(...args: any[]) {
        log.info('getFileSetClusteringDetail called with args:', args)
        const result = this.instance.getFileSetClusteringDetail(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getFileSetClusteringDetail called  promise result:', result)
                return res
            })
        }
        log.info('getFileSetClusteringDetail called result:', result)
        return result
    }
    getFileSetClusteringList(...args: any[]) {
        log.info('getFileSetClusteringList called with args:', args)
        const result = this.instance.getFileSetClusteringList(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getFileSetClusteringList called  promise result:', result)
                return res
            })
        }
        log.info('getFileSetClusteringList called result:', result)
        return result
    }
    getFileSetDownloadDir(...args: any[]) {
        log.info('getFileSetDownloadDir called with args:', args)
        const result = this.instance.getFileSetDownloadDir(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getFileSetDownloadDir called  promise result:', result)
                return res
            })
        }
        log.info('getFileSetDownloadDir called result:', result)
        return result
    }
    getFileSetFirstClusteringList(...args: any[]) {
        log.info('getFileSetFirstClusteringList called with args:', args)
        const result = this.instance.getFileSetFirstClusteringList(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getFileSetFirstClusteringList called  promise result:', result)
                return res
            })
        }
        log.info('getFileSetFirstClusteringList called result:', result)
        return result
    }
    getFileSetIdByCode(...args: any[]) {
        log.info('getFileSetIdByCode called with args:', args)
        const result = this.instance.getFileSetIdByCode(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getFileSetIdByCode called  promise result:', result)
                return res
            })
        }
        log.info('getFileSetIdByCode called result:', result)
        return result
    }
    getFileSetList(...args: any[]) {
        log.info('getFileSetList called with args:', args)
        const result = this.instance.getFileSetList(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getFileSetList called  promise result:', result)
                return res
            })
        }
        log.info('getFileSetList called result:', result)
        return result
    }
    getFileSetListCount(...args: any[]) {
        log.info('getFileSetListCount called with args:', args)
        const result = this.instance.getFileSetListCount(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getFileSetListCount called  promise result:', result)
                return res
            })
        }
        log.info('getFileSetListCount called result:', result)
        return result
    }
    getFileThumbnailUrl(...args: any[]) {
        log.info('getFileThumbnailUrl called with args:', args)
        const result = this.instance.getFileThumbnailUrl(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getFileThumbnailUrl called  promise result:', result)
                return res
            })
        }
        log.info('getFileThumbnailUrl called result:', result)
        return result
    }
    getFilesTransferProgress(...args: any[]) {
        log.info('getFilesTransferProgress called with args:', args)
        const result = this.instance.getFilesTransferProgress(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getFilesTransferProgress called  promise result:', result)
                return res
            })
        }
        log.info('getFilesTransferProgress called result:', result)
        return result
    }
    getLocalFileList(...args: any[]) {
        log.info('getLocalFileList called with args:', args)
        const result = this.instance.getLocalFileList(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getLocalFileList called  promise result:', result)
                return res
            })
        }
        log.info('getLocalFileList called result:', result)
        return result
    }
    getLocalFileListByStatuses(...args: any[]) {
        log.info('getLocalFileListByStatuses called with args:', args)
        const result = this.instance.getLocalFileListByStatuses(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getLocalFileListByStatuses called  promise result:', result)
                return res
            })
        }
        log.info('getLocalFileListByStatuses called result:', result)
        return result
    }
    getShareLinkReq(...args: any[]) {
        log.info('getShareLinkReq called with args:', args)
        const result = this.instance.getShareLinkReq(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getShareLinkReq called  promise result:', result)
                return res
            })
        }
        log.info('getShareLinkReq called result:', result)
        return result
    }
    handleDownloadFinishAfterSaveToAlbum(...args: any[]) {
        log.info('handleDownloadFinishAfterSaveToAlbum called with args:', args)
        const result = this.instance.handleDownloadFinishAfterSaveToAlbum(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('handleDownloadFinishAfterSaveToAlbum called  promise result:', result)
                return res
            })
        }
        log.info('handleDownloadFinishAfterSaveToAlbum called result:', result)
        return result
    }
    onCheckAlbumStorageStatusResult(...args: any[]) {
        log.info('onCheckAlbumStorageStatusResult called with args:', args)
        const result = this.instance.onCheckAlbumStorageStatusResult(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('onCheckAlbumStorageStatusResult called  promise result:', result)
                return res
            })
        }
        log.info('onCheckAlbumStorageStatusResult called result:', result)
        return result
    }
    onSystemGoingToSleep(...args: any[]) {
        log.info('onSystemGoingToSleep called with args:', args)
        const result = this.instance.onSystemGoingToSleep(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('onSystemGoingToSleep called  promise result:', result)
                return res
            })
        }
        log.info('onSystemGoingToSleep called result:', result)
        return result
    }
    onSystemWokeUp(...args: any[]) {
        log.info('onSystemWokeUp called with args:', args)
        const result = this.instance.onSystemWokeUp(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('onSystemWokeUp called  promise result:', result)
                return res
            })
        }
        log.info('onSystemWokeUp called result:', result)
        return result
    }
    pauseAllTasks(...args: any[]) {
        log.info('pauseAllTasks called with args:', args)
        const result = this.instance.pauseAllTasks(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('pauseAllTasks called  promise result:', result)
                return res
            })
        }
        log.info('pauseAllTasks called result:', result)
        return result
    }
    pauseFileListDownLoad(...args: any[]) {
        log.info('pauseFileListDownLoad called with args:', args)
        const result = this.instance.pauseFileListDownLoad(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('pauseFileListDownLoad called  promise result:', result)
                return res
            })
        }
        log.info('pauseFileListDownLoad called result:', result)
        return result
    }
    pauseFileSetDownload(...args: any[]) {
        log.info('pauseFileSetDownload called with args:', args)
        const result = this.instance.pauseFileSetDownload(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('pauseFileSetDownload called  promise result:', result)
                return res
            })
        }
        log.info('pauseFileSetDownload called result:', result)
        return result
    }
    pauseFileSetUpload(...args: any[]) {
        log.info('pauseFileSetUpload called with args:', args)
        const result = this.instance.pauseFileSetUpload(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('pauseFileSetUpload called  promise result:', result)
                return res
            })
        }
        log.info('pauseFileSetUpload called result:', result)
        return result
    }
    pauseFileUpload(...args: any[]) {
        log.info('pauseFileUpload called with args:', args)
        const result = this.instance.pauseFileUpload(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('pauseFileUpload called  promise result:', result)
                return res
            })
        }
        log.info('pauseFileUpload called result:', result)
        return result
    }
    pollFilesTransferProgress(...args: any[]) {
        log.info('pollFilesTransferProgress called with args:', args)
        const result = this.instance.pollFilesTransferProgress(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('pollFilesTransferProgress called  promise result:', result)
                return res
            })
        }
        log.info('pollFilesTransferProgress called result:', result)
        return result
    }
    refreshFolderStatus(...args: any[]) {
        log.info('refreshFolderStatus called with args:', args)
        const result = this.instance.refreshFolderStatus(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('refreshFolderStatus called  promise result:', result)
                return res
            })
        }
        log.info('refreshFolderStatus called result:', result)
        return result
    }
    removeCompressedFileListener(...args: any[]) {
        log.info('removeCompressedFileListener called with args:', args)
        const result = this.instance.removeCompressedFileListener(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('removeCompressedFileListener called  promise result:', result)
                return res
            })
        }
        log.info('removeCompressedFileListener called result:', result)
        return result
    }
    removeDesktopFileSetSimpleStatusListener(...args: any[]) {
        log.info('removeDesktopFileSetSimpleStatusListener called with args:', args)
        const result = this.instance.removeDesktopFileSetSimpleStatusListener(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('removeDesktopFileSetSimpleStatusListener called  promise result:', result)
                return res
            })
        }
        log.info('removeDesktopFileSetSimpleStatusListener called result:', result)
        return result
    }
    removeDesktopFileSetSimpleStatusMonitoring(...args: any[]) {
        log.info('removeDesktopFileSetSimpleStatusMonitoring called with args:', args)
        const result = this.instance.removeDesktopFileSetSimpleStatusMonitoring(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('removeDesktopFileSetSimpleStatusMonitoring called  promise result:', result)
                return res
            })
        }
        log.info('removeDesktopFileSetSimpleStatusMonitoring called result:', result)
        return result
    }
    removeDeviceStatusListener(...args: any[]) {
        log.info('removeDeviceStatusListener called with args:', args)
        const result = this.instance.removeDeviceStatusListener(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('removeDeviceStatusListener called  promise result:', result)
                return res
            })
        }
        log.info('removeDeviceStatusListener called result:', result)
        return result
    }
    removeDownloadCntStatisticsListener(...args: any[]) {
        log.info('removeDownloadCntStatisticsListener called with args:', args)
        const result = this.instance.removeDownloadCntStatisticsListener(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('removeDownloadCntStatisticsListener called  promise result:', result)
                return res
            })
        }
        log.info('removeDownloadCntStatisticsListener called result:', result)
        return result
    }
    removeFileAlbumStorageListener(...args: any[]) {
        log.info('removeFileAlbumStorageListener called with args:', args)
        const result = this.instance.removeFileAlbumStorageListener(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('removeFileAlbumStorageListener called  promise result:', result)
                return res
            })
        }
        log.info('removeFileAlbumStorageListener called result:', result)
        return result
    }
    removeFileSetClusteringListListener(...args: any[]) {
        log.info('removeFileSetClusteringListListener called with args:', args)
        const result = this.instance.removeFileSetClusteringListListener(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('removeFileSetClusteringListListener called  promise result:', result)
                return res
            })
        }
        log.info('removeFileSetClusteringListListener called result:', result)
        return result
    }
    removeFileSetDownloadListener(...args: any[]) {
        log.info('removeFileSetDownloadListener called with args:', args)
        const result = this.instance.removeFileSetDownloadListener(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('removeFileSetDownloadListener called  promise result:', result)
                return res
            })
        }
        log.info('removeFileSetDownloadListener called result:', result)
        return result
    }
    removeFileSetSimpleStatusListener(...args: any[]) {
        log.info('removeFileSetSimpleStatusListener called with args:', args)
        const result = this.instance.removeFileSetSimpleStatusListener(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('removeFileSetSimpleStatusListener called  promise result:', result)
                return res
            })
        }
        log.info('removeFileSetSimpleStatusListener called result:', result)
        return result
    }
    removeFileSetSimpleStatusMonitoring(...args: any[]) {
        log.info('removeFileSetSimpleStatusMonitoring called with args:', args)
        const result = this.instance.removeFileSetSimpleStatusMonitoring(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('removeFileSetSimpleStatusMonitoring called  promise result:', result)
                return res
            })
        }
        log.info('removeFileSetSimpleStatusMonitoring called result:', result)
        return result
    }
    removeFileSetSimpleUploadInfoListener(...args: any[]) {
        log.info('removeFileSetSimpleUploadInfoListener called with args:', args)
        const result = this.instance.removeFileSetSimpleUploadInfoListener(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('removeFileSetSimpleUploadInfoListener called  promise result:', result)
                return res
            })
        }
        log.info('removeFileSetSimpleUploadInfoListener called result:', result)
        return result
    }
    removeFileSetSimpleUploadInfoMonitoring(...args: any[]) {
        log.info('removeFileSetSimpleUploadInfoMonitoring called with args:', args)
        const result = this.instance.removeFileSetSimpleUploadInfoMonitoring(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('removeFileSetSimpleUploadInfoMonitoring called  promise result:', result)
                return res
            })
        }
        log.info('removeFileSetSimpleUploadInfoMonitoring called result:', result)
        return result
    }
    removeFileSetUploadListener(...args: any[]) {
        log.info('removeFileSetUploadListener called with args:', args)
        const result = this.instance.removeFileSetUploadListener(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('removeFileSetUploadListener called  promise result:', result)
                return res
            })
        }
        log.info('removeFileSetUploadListener called result:', result)
        return result
    }
    removeFlashTransferTaskInfoListener(...args: any[]) {
        log.info('removeFlashTransferTaskInfoListener called with args:', args)
        const result = this.instance.removeFlashTransferTaskInfoListener(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('removeFlashTransferTaskInfoListener called  promise result:', result)
                return res
            })
        }
        log.info('removeFlashTransferTaskInfoListener called result:', result)
        return result
    }
    removeFolderListener(...args: any[]) {
        log.info('removeFolderListener called with args:', args)
        const result = this.instance.removeFolderListener(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('removeFolderListener called  promise result:', result)
                return res
            })
        }
        log.info('removeFolderListener called result:', result)
        return result
    }
    removeTransferStateListener(...args: any[]) {
        log.info('removeTransferStateListener called with args:', args)
        const result = this.instance.removeTransferStateListener(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('removeTransferStateListener called  promise result:', result)
                return res
            })
        }
        log.info('removeTransferStateListener called result:', result)
        return result
    }
    resumeAllUnfinishedTasks(...args: any[]) {
        log.info('resumeAllUnfinishedTasks called with args:', args)
        const result = this.instance.resumeAllUnfinishedTasks(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('resumeAllUnfinishedTasks called  promise result:', result)
                return res
            })
        }
        log.info('resumeAllUnfinishedTasks called result:', result)
        return result
    }
    resumeFileListDownLoad(...args: any[]) {
        log.info('resumeFileListDownLoad called with args:', args)
        const result = this.instance.resumeFileListDownLoad(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('resumeFileListDownLoad called  promise result:', result)
                return res
            })
        }
        log.info('resumeFileListDownLoad called result:', result)
        return result
    }
    resumeFileSetDownload(...args: any[]) {
        log.info('resumeFileSetDownload called with args:', args)
        const result = this.instance.resumeFileSetDownload(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('resumeFileSetDownload called  promise result:', result)
                return res
            })
        }
        log.info('resumeFileSetDownload called result:', result)
        return result
    }
    resumeFileSetUpload(...args: any[]) {
        log.info('resumeFileSetUpload called with args:', args)
        const result = this.instance.resumeFileSetUpload(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('resumeFileSetUpload called  promise result:', result)
                return res
            })
        }
        log.info('resumeFileSetUpload called result:', result)
        return result
    }
    resumeFileUpload(...args: any[]) {
        log.info('resumeFileUpload called with args:', args)
        const result = this.instance.resumeFileUpload(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('resumeFileUpload called  promise result:', result)
                return res
            })
        }
        log.info('resumeFileUpload called result:', result)
        return result
    }
    resumePausedTasksAfterDeviceStatus(...args: any[]) {
        log.info('resumePausedTasksAfterDeviceStatus called with args:', args)
        const result = this.instance.resumePausedTasksAfterDeviceStatus(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('resumePausedTasksAfterDeviceStatus called  promise result:', result)
                return res
            })
        }
        log.info('resumePausedTasksAfterDeviceStatus called result:', result)
        return result
    }
    retrieveLocalLastFailedSetTasksInfo(...args: any[]) {
        log.info('retrieveLocalLastFailedSetTasksInfo called with args:', args)
        const result = this.instance.retrieveLocalLastFailedSetTasksInfo(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('retrieveLocalLastFailedSetTasksInfo called  promise result:', result)
                return res
            })
        }
        log.info('retrieveLocalLastFailedSetTasksInfo called result:', result)
        return result
    }
    sendFlashTransferMsg(...args: any[]) {
        log.info('sendFlashTransferMsg called with args:', args)
        const result = this.instance.sendFlashTransferMsg(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('sendFlashTransferMsg called  promise result:', result)
                return res
            })
        }
        log.info('sendFlashTransferMsg called result:', result)
        return result
    }
    setDownLoadDefaultFileDir(...args: any[]) {
        log.info('setDownLoadDefaultFileDir called with args:', args)
        const result = this.instance.setDownLoadDefaultFileDir(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setDownLoadDefaultFileDir called  promise result:', result)
                return res
            })
        }
        log.info('setDownLoadDefaultFileDir called result:', result)
        return result
    }
    setFileSetDownloadDir(...args: any[]) {
        log.info('setFileSetDownloadDir called with args:', args)
        const result = this.instance.setFileSetDownloadDir(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setFileSetDownloadDir called  promise result:', result)
                return res
            })
        }
        log.info('setFileSetDownloadDir called result:', result)
        return result
    }
    setFlashTransferDir(...args: any[]) {
        log.info('setFlashTransferDir called with args:', args)
        const result = this.instance.setFlashTransferDir(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setFlashTransferDir called  promise result:', result)
                return res
            })
        }
        log.info('setFlashTransferDir called result:', result)
        return result
    }
    startFileListDownLoad(...args: any[]) {
        log.info('startFileListDownLoad called with args:', args)
        const result = this.instance.startFileListDownLoad(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('startFileListDownLoad called  promise result:', result)
                return res
            })
        }
        log.info('startFileListDownLoad called result:', result)
        return result
    }
    startFileListDownLoadBySessionId(...args: any[]) {
        log.info('startFileListDownLoadBySessionId called with args:', args)
        const result = this.instance.startFileListDownLoadBySessionId(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('startFileListDownLoadBySessionId called  promise result:', result)
                return res
            })
        }
        log.info('startFileListDownLoadBySessionId called result:', result)
        return result
    }
    startFileSetDownload(...args: any[]) {
        log.info('startFileSetDownload called with args:', args)
        const result = this.instance.startFileSetDownload(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('startFileSetDownload called  promise result:', result)
                return res
            })
        }
        log.info('startFileSetDownload called result:', result)
        return result
    }
    startFileSetUpload(...args: any[]) {
        log.info('startFileSetUpload called with args:', args)
        const result = this.instance.startFileSetUpload(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('startFileSetUpload called  promise result:', result)
                return res
            })
        }
        log.info('startFileSetUpload called result:', result)
        return result
    }
    startFileTransferUrl(...args: any[]) {
        log.info('startFileTransferUrl called with args:', args)
        const result = this.instance.startFileTransferUrl(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('startFileTransferUrl called  promise result:', result)
                return res
            })
        }
        log.info('startFileTransferUrl called result:', result)
        return result
    }
    startThumbnailListDownload(...args: any[]) {
        log.info('startThumbnailListDownload called with args:', args)
        const result = this.instance.startThumbnailListDownload(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('startThumbnailListDownload called  promise result:', result)
                return res
            })
        }
        log.info('startThumbnailListDownload called result:', result)
        return result
    }
    stopFileListDownLoad(...args: any[]) {
        log.info('stopFileListDownLoad called with args:', args)
        const result = this.instance.stopFileListDownLoad(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('stopFileListDownLoad called  promise result:', result)
                return res
            })
        }
        log.info('stopFileListDownLoad called result:', result)
        return result
    }
    stopFileSetDownload(...args: any[]) {
        log.info('stopFileSetDownload called with args:', args)
        const result = this.instance.stopFileSetDownload(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('stopFileSetDownload called  promise result:', result)
                return res
            })
        }
        log.info('stopFileSetDownload called result:', result)
        return result
    }
    stopFileSetUpload(...args: any[]) {
        log.info('stopFileSetUpload called with args:', args)
        const result = this.instance.stopFileSetUpload(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('stopFileSetUpload called  promise result:', result)
                return res
            })
        }
        log.info('stopFileSetUpload called result:', result)
        return result
    }
    stopFileUpload(...args: any[]) {
        log.info('stopFileUpload called with args:', args)
        const result = this.instance.stopFileUpload(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('stopFileUpload called  promise result:', result)
                return res
            })
        }
        log.info('stopFileUpload called result:', result)
        return result
    }
    stopThumbnailListDownload(...args: any[]) {
        log.info('stopThumbnailListDownload called with args:', args)
        const result = this.instance.stopThumbnailListDownload(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('stopThumbnailListDownload called  promise result:', result)
                return res
            })
        }
        log.info('stopThumbnailListDownload called result:', result)
        return result
    }
    updateFlashTransfer(...args: any[]) {
        log.info('updateFlashTransfer called with args:', args)
        const result = this.instance.updateFlashTransfer(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('updateFlashTransfer called  promise result:', result)
                return res
            })
        }
        log.info('updateFlashTransfer called result:', result)
        return result
    }
};
export const getNodeIKernelFlashTransferService = (engine: any): any => {
    return class extends NodeIKernelFlashTransferService {
        
    }
}