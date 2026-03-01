import { useLogger } from "../../common/log";

const log = useLogger('Wrapper/NodeIKernelRichMediaService')
export class NodeIKernelRichMediaService {
    protected static singleton?: any = undefined
    protected instance: any
    constructor(instance: any) {
        log.info('constructor called')
        this.instance = instance
    }
    batchGetGroupFileCount(...args: any[]) {
        log.info('batchGetGroupFileCount called with args:', args)
        const result = this.instance.batchGetGroupFileCount(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('batchGetGroupFileCount called  promise result:', result)
                return res
            })
        }
        log.info('batchGetGroupFileCount called result:', result)
        return result
    }
    beaconReportRMData(...args: any[]) {
        log.info('beaconReportRMData called with args:', args)
        const result = this.instance.beaconReportRMData(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('beaconReportRMData called  promise result:', result)
                return res
            })
        }
        log.info('beaconReportRMData called result:', result)
        return result
    }
    cancelSearcheGroupFile(...args: any[]) {
        log.info('cancelSearcheGroupFile called with args:', args)
        const result = this.instance.cancelSearcheGroupFile(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('cancelSearcheGroupFile called  promise result:', result)
                return res
            })
        }
        log.info('cancelSearcheGroupFile called result:', result)
        return result
    }
    cancelTransferTask(...args: any[]) {
        log.info('cancelTransferTask called with args:', args)
        const result = this.instance.cancelTransferTask(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('cancelTransferTask called  promise result:', result)
                return res
            })
        }
        log.info('cancelTransferTask called result:', result)
        return result
    }
    cancelUrlDownload(...args: any[]) {
        log.info('cancelUrlDownload called with args:', args)
        const result = this.instance.cancelUrlDownload(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('cancelUrlDownload called  promise result:', result)
                return res
            })
        }
        log.info('cancelUrlDownload called result:', result)
        return result
    }
    createGroupFolder(...args: any[]) {
        log.info('createGroupFolder called with args:', args)
        const result = this.instance.createGroupFolder(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('createGroupFolder called  promise result:', result)
                return res
            })
        }
        log.info('createGroupFolder called result:', result)
        return result
    }
    deleteGroupFile(...args: any[]) {
        log.info('deleteGroupFile called with args:', args)
        const result = this.instance.deleteGroupFile(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('deleteGroupFile called  promise result:', result)
                return res
            })
        }
        log.info('deleteGroupFile called result:', result)
        return result
    }
    deleteGroupFolder(...args: any[]) {
        log.info('deleteGroupFolder called with args:', args)
        const result = this.instance.deleteGroupFolder(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('deleteGroupFolder called  promise result:', result)
                return res
            })
        }
        log.info('deleteGroupFolder called result:', result)
        return result
    }
    deleteTransferInfo(...args: any[]) {
        log.info('deleteTransferInfo called with args:', args)
        const result = this.instance.deleteTransferInfo(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('deleteTransferInfo called  promise result:', result)
                return res
            })
        }
        log.info('deleteTransferInfo called result:', result)
        return result
    }
    downloadFile(...args: any[]) {
        log.info('downloadFile called with args:', args)
        const result = this.instance.downloadFile(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('downloadFile called  promise result:', result)
                return res
            })
        }
        log.info('downloadFile called result:', result)
        return result
    }
    downloadFileByUrlList(...args: any[]) {
        log.info('downloadFileByUrlList called with args:', args)
        const result = this.instance.downloadFileByUrlList(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('downloadFileByUrlList called  promise result:', result)
                return res
            })
        }
        log.info('downloadFileByUrlList called result:', result)
        return result
    }
    downloadFileForFileInfo(...args: any[]) {
        log.info('downloadFileForFileInfo called with args:', args)
        const result = this.instance.downloadFileForFileInfo(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('downloadFileForFileInfo called  promise result:', result)
                return res
            })
        }
        log.info('downloadFileForFileInfo called result:', result)
        return result
    }
    downloadFileForFileUuid(...args: any[]) {
        log.info('downloadFileForFileUuid called with args:', args)
        const result = this.instance.downloadFileForFileUuid(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('downloadFileForFileUuid called  promise result:', result)
                return res
            })
        }
        log.info('downloadFileForFileUuid called result:', result)
        return result
    }
    downloadFileForModelId(...args: any[]) {
        log.info('downloadFileForModelId called with args:', args)
        const result = this.instance.downloadFileForModelId(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('downloadFileForModelId called  promise result:', result)
                return res
            })
        }
        log.info('downloadFileForModelId called result:', result)
        return result
    }
    downloadGroupFolder(...args: any[]) {
        log.info('downloadGroupFolder called with args:', args)
        const result = this.instance.downloadGroupFolder(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('downloadGroupFolder called  promise result:', result)
                return res
            })
        }
        log.info('downloadGroupFolder called result:', result)
        return result
    }
    downloadRichMediaInVisit(...args: any[]) {
        log.info('downloadRichMediaInVisit called with args:', args)
        const result = this.instance.downloadRichMediaInVisit(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('downloadRichMediaInVisit called  promise result:', result)
                return res
            })
        }
        log.info('downloadRichMediaInVisit called result:', result)
        return result
    }
    getGroupFileInfo(...args: any[]) {
        log.info('getGroupFileInfo called with args:', args)
        const result = this.instance.getGroupFileInfo(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getGroupFileInfo called  promise result:', result)
                return res
            })
        }
        log.info('getGroupFileInfo called result:', result)
        return result
    }
    getGroupFileList(...args: any[]) {
        log.info('getGroupFileList called with args:', args)
        const result = this.instance.getGroupFileList(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getGroupFileList called  promise result:', result)
                return res
            })
        }
        log.info('getGroupFileList called result:', result)
        return result
    }
    getGroupSpace(...args: any[]) {
        log.info('getGroupSpace called with args:', args)
        const result = this.instance.getGroupSpace(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getGroupSpace called  promise result:', result)
                return res
            })
        }
        log.info('getGroupSpace called result:', result)
        return result
    }
    getGroupTransferList(...args: any[]) {
        log.info('getGroupTransferList called with args:', args)
        const result = this.instance.getGroupTransferList(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getGroupTransferList called  promise result:', result)
                return res
            })
        }
        log.info('getGroupTransferList called result:', result)
        return result
    }
    getRichMediaCodecInfo(...args: any[]) {
        log.info('getRichMediaCodecInfo called with args:', args)
        const result = this.instance.getRichMediaCodecInfo(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getRichMediaCodecInfo called  promise result:', result)
                return res
            })
        }
        log.info('getRichMediaCodecInfo called result:', result)
        return result
    }
    getRichMediaFileDir(...args: any[]) {
        log.info('getRichMediaFileDir called with args:', args)
        const result = this.instance.getRichMediaFileDir(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getRichMediaFileDir called  promise result:', result)
                return res
            })
        }
        log.info('getRichMediaFileDir called result:', result)
        return result
    }
    getScreenOCR(...args: any[]) {
        log.info('getScreenOCR called with args:', args)
        const result = this.instance.getScreenOCR(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getScreenOCR called  promise result:', result)
                return res
            })
        }
        log.info('getScreenOCR called result:', result)
        return result
    }
    getScreenOCRWithSourceType(...args: any[]) {
        log.info('getScreenOCRWithSourceType called with args:', args)
        const result = this.instance.getScreenOCRWithSourceType(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getScreenOCRWithSourceType called  promise result:', result)
                return res
            })
        }
        log.info('getScreenOCRWithSourceType called result:', result)
        return result
    }
    getVideoPlayUrl(...args: any[]) {
        log.info('getVideoPlayUrl called with args:', args)
        const result = this.instance.getVideoPlayUrl(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getVideoPlayUrl called  promise result:', result)
                return res
            })
        }
        log.info('getVideoPlayUrl called result:', result)
        return result
    }
    getVideoPlayUrlInVisit(...args: any[]) {
        log.info('getVideoPlayUrlInVisit called with args:', args)
        const result = this.instance.getVideoPlayUrlInVisit(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getVideoPlayUrlInVisit called  promise result:', result)
                return res
            })
        }
        log.info('getVideoPlayUrlInVisit called result:', result)
        return result
    }
    getVideoPlayUrlV2(...args: any[]) {
        log.info('getVideoPlayUrlV2 called with args:', args)
        const result = this.instance.getVideoPlayUrlV2(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getVideoPlayUrlV2 called  promise result:', result)
                return res
            })
        }
        log.info('getVideoPlayUrlV2 called result:', result)
        return result
    }
    moveGroupFile(...args: any[]) {
        log.info('moveGroupFile called with args:', args)
        const result = this.instance.moveGroupFile(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('moveGroupFile called  promise result:', result)
                return res
            })
        }
        log.info('moveGroupFile called result:', result)
        return result
    }
    onlyDownloadFile(...args: any[]) {
        log.info('onlyDownloadFile called with args:', args)
        const result = this.instance.onlyDownloadFile(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('onlyDownloadFile called  promise result:', result)
                return res
            })
        }
        log.info('onlyDownloadFile called result:', result)
        return result
    }
    onlyUploadFile(...args: any[]) {
        log.info('onlyUploadFile called with args:', args)
        const result = this.instance.onlyUploadFile(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('onlyUploadFile called  promise result:', result)
                return res
            })
        }
        log.info('onlyUploadFile called result:', result)
        return result
    }
    queryPicDownloadSize(...args: any[]) {
        log.info('queryPicDownloadSize called with args:', args)
        const result = this.instance.queryPicDownloadSize(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('queryPicDownloadSize called  promise result:', result)
                return res
            })
        }
        log.info('queryPicDownloadSize called result:', result)
        return result
    }
    renameGroupFile(...args: any[]) {
        log.info('renameGroupFile called with args:', args)
        const result = this.instance.renameGroupFile(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('renameGroupFile called  promise result:', result)
                return res
            })
        }
        log.info('renameGroupFile called result:', result)
        return result
    }
    renameGroupFolder(...args: any[]) {
        log.info('renameGroupFolder called with args:', args)
        const result = this.instance.renameGroupFolder(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('renameGroupFolder called  promise result:', result)
                return res
            })
        }
        log.info('renameGroupFolder called result:', result)
        return result
    }
    searchGroupFile(...args: any[]) {
        log.info('searchGroupFile called with args:', args)
        const result = this.instance.searchGroupFile(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('searchGroupFile called  promise result:', result)
                return res
            })
        }
        log.info('searchGroupFile called result:', result)
        return result
    }
    searchGroupFileByWord(...args: any[]) {
        log.info('searchGroupFileByWord called with args:', args)
        const result = this.instance.searchGroupFileByWord(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('searchGroupFileByWord called  promise result:', result)
                return res
            })
        }
        log.info('searchGroupFileByWord called result:', result)
        return result
    }
    searchMoreGroupFile(...args: any[]) {
        log.info('searchMoreGroupFile called with args:', args)
        const result = this.instance.searchMoreGroupFile(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('searchMoreGroupFile called  promise result:', result)
                return res
            })
        }
        log.info('searchMoreGroupFile called result:', result)
        return result
    }
    transGroupFile(...args: any[]) {
        log.info('transGroupFile called with args:', args)
        const result = this.instance.transGroupFile(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('transGroupFile called  promise result:', result)
                return res
            })
        }
        log.info('transGroupFile called result:', result)
        return result
    }
    translateEnWordToZn(...args: any[]) {
        log.info('translateEnWordToZn called with args:', args)
        const result = this.instance.translateEnWordToZn(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('translateEnWordToZn called  promise result:', result)
                return res
            })
        }
        log.info('translateEnWordToZn called result:', result)
        return result
    }
    updateOnlineVideoElemStatus(...args: any[]) {
        log.info('updateOnlineVideoElemStatus called with args:', args)
        const result = this.instance.updateOnlineVideoElemStatus(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('updateOnlineVideoElemStatus called  promise result:', result)
                return res
            })
        }
        log.info('updateOnlineVideoElemStatus called result:', result)
        return result
    }
    uploadRMFileWithoutMsg(...args: any[]) {
        log.info('uploadRMFileWithoutMsg called with args:', args)
        const result = this.instance.uploadRMFileWithoutMsg(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('uploadRMFileWithoutMsg called  promise result:', result)
                return res
            })
        }
        log.info('uploadRMFileWithoutMsg called result:', result)
        return result
    }
};
export const getNodeIKernelRichMediaService = (engine: any): any => {
    return class extends NodeIKernelRichMediaService {
        
        static isExtraLargePic(...args: any[]) {
            log.info('isExtraLargePic called with args:', args)
            const result = engine.isExtraLargePic(...args)
            log.info('isExtraLargePic called result:', result)
            return result
        }
        static isFileExpired(...args: any[]) {
            log.info('isFileExpired called with args:', args)
            const result = engine.isFileExpired(...args)
            log.info('isFileExpired called result:', result)
            return result
        }
    }
}