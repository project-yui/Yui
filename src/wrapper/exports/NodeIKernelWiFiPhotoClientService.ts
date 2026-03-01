import { useLogger } from "../../common/log";

const log = useLogger('Wrapper/NodeIKernelWiFiPhotoClientService')
export class NodeIKernelWiFiPhotoClientService {
    protected static singleton?: any = undefined
    protected instance: any
    constructor(instance: any) {
        log.info('constructor called')
        this.instance = instance
    }
    addKernelWiFiPhotoClientListener(...args: any[]) {
        log.info('addKernelWiFiPhotoClientListener called with args:', args)
        const result = this.instance.addKernelWiFiPhotoClientListener(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('addKernelWiFiPhotoClientListener called  promise result:', result)
                return res
            })
        }
        log.info('addKernelWiFiPhotoClientListener called result:', result)
        return result
    }
    cancelAll(...args: any[]) {
        log.info('cancelAll called with args:', args)
        const result = this.instance.cancelAll(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('cancelAll called  promise result:', result)
                return res
            })
        }
        log.info('cancelAll called result:', result)
        return result
    }
    cancelGetPhoto(...args: any[]) {
        log.info('cancelGetPhoto called with args:', args)
        const result = this.instance.cancelGetPhoto(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('cancelGetPhoto called  promise result:', result)
                return res
            })
        }
        log.info('cancelGetPhoto called result:', result)
        return result
    }
    cancelGetPhotoThumbBatch(...args: any[]) {
        log.info('cancelGetPhotoThumbBatch called with args:', args)
        const result = this.instance.cancelGetPhotoThumbBatch(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('cancelGetPhotoThumbBatch called  promise result:', result)
                return res
            })
        }
        log.info('cancelGetPhotoThumbBatch called result:', result)
        return result
    }
    cancelRequest(...args: any[]) {
        log.info('cancelRequest called with args:', args)
        const result = this.instance.cancelRequest(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('cancelRequest called  promise result:', result)
                return res
            })
        }
        log.info('cancelRequest called result:', result)
        return result
    }
    clearUncompleteDownloadRecords(...args: any[]) {
        log.info('clearUncompleteDownloadRecords called with args:', args)
        const result = this.instance.clearUncompleteDownloadRecords(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('clearUncompleteDownloadRecords called  promise result:', result)
                return res
            })
        }
        log.info('clearUncompleteDownloadRecords called result:', result)
        return result
    }
    connectToHostForTest(...args: any[]) {
        log.info('connectToHostForTest called with args:', args)
        const result = this.instance.connectToHostForTest(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('connectToHostForTest called  promise result:', result)
                return res
            })
        }
        log.info('connectToHostForTest called result:', result)
        return result
    }
    deletePhotoBatch(...args: any[]) {
        log.info('deletePhotoBatch called with args:', args)
        const result = this.instance.deletePhotoBatch(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('deletePhotoBatch called  promise result:', result)
                return res
            })
        }
        log.info('deletePhotoBatch called result:', result)
        return result
    }
    disconnect(...args: any[]) {
        log.info('disconnect called with args:', args)
        const result = this.instance.disconnect(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('disconnect called  promise result:', result)
                return res
            })
        }
        log.info('disconnect called result:', result)
        return result
    }
    getAlbumFileSavePath(...args: any[]) {
        log.info('getAlbumFileSavePath called with args:', args)
        const result = this.instance.getAlbumFileSavePath(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getAlbumFileSavePath called  promise result:', result)
                return res
            })
        }
        log.info('getAlbumFileSavePath called result:', result)
        return result
    }
    getAlbumList(...args: any[]) {
        log.info('getAlbumList called with args:', args)
        const result = this.instance.getAlbumList(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getAlbumList called  promise result:', result)
                return res
            })
        }
        log.info('getAlbumList called result:', result)
        return result
    }
    getAllPhotoSimpleInfo(...args: any[]) {
        log.info('getAllPhotoSimpleInfo called with args:', args)
        const result = this.instance.getAllPhotoSimpleInfo(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getAllPhotoSimpleInfo called  promise result:', result)
                return res
            })
        }
        log.info('getAllPhotoSimpleInfo called result:', result)
        return result
    }
    getPeerNetworkStatus(...args: any[]) {
        log.info('getPeerNetworkStatus called with args:', args)
        const result = this.instance.getPeerNetworkStatus(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getPeerNetworkStatus called  promise result:', result)
                return res
            })
        }
        log.info('getPeerNetworkStatus called result:', result)
        return result
    }
    getPhotoAndSaveAs(...args: any[]) {
        log.info('getPhotoAndSaveAs called with args:', args)
        const result = this.instance.getPhotoAndSaveAs(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getPhotoAndSaveAs called  promise result:', result)
                return res
            })
        }
        log.info('getPhotoAndSaveAs called result:', result)
        return result
    }
    getPhotoBatch(...args: any[]) {
        log.info('getPhotoBatch called with args:', args)
        const result = this.instance.getPhotoBatch(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getPhotoBatch called  promise result:', result)
                return res
            })
        }
        log.info('getPhotoBatch called result:', result)
        return result
    }
    getPhotoInfoBatch(...args: any[]) {
        log.info('getPhotoInfoBatch called with args:', args)
        const result = this.instance.getPhotoInfoBatch(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getPhotoInfoBatch called  promise result:', result)
                return res
            })
        }
        log.info('getPhotoInfoBatch called result:', result)
        return result
    }
    getPhotoSimpleInfoForFirstView(...args: any[]) {
        log.info('getPhotoSimpleInfoForFirstView called with args:', args)
        const result = this.instance.getPhotoSimpleInfoForFirstView(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getPhotoSimpleInfoForFirstView called  promise result:', result)
                return res
            })
        }
        log.info('getPhotoSimpleInfoForFirstView called result:', result)
        return result
    }
    getPhotoThumbBatchWithConfig(...args: any[]) {
        log.info('getPhotoThumbBatchWithConfig called with args:', args)
        const result = this.instance.getPhotoThumbBatchWithConfig(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getPhotoThumbBatchWithConfig called  promise result:', result)
                return res
            })
        }
        log.info('getPhotoThumbBatchWithConfig called result:', result)
        return result
    }
    getWiFiPhotoDownFileInfos(...args: any[]) {
        log.info('getWiFiPhotoDownFileInfos called with args:', args)
        const result = this.instance.getWiFiPhotoDownFileInfos(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getWiFiPhotoDownFileInfos called  promise result:', result)
                return res
            })
        }
        log.info('getWiFiPhotoDownFileInfos called result:', result)
        return result
    }
    queryUncompleteDownloadRecords(...args: any[]) {
        log.info('queryUncompleteDownloadRecords called with args:', args)
        const result = this.instance.queryUncompleteDownloadRecords(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('queryUncompleteDownloadRecords called  promise result:', result)
                return res
            })
        }
        log.info('queryUncompleteDownloadRecords called result:', result)
        return result
    }
    removeKernelWiFiPhotoClientListener(...args: any[]) {
        log.info('removeKernelWiFiPhotoClientListener called with args:', args)
        const result = this.instance.removeKernelWiFiPhotoClientListener(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('removeKernelWiFiPhotoClientListener called  promise result:', result)
                return res
            })
        }
        log.info('removeKernelWiFiPhotoClientListener called result:', result)
        return result
    }
    requestAlbumFullAccess(...args: any[]) {
        log.info('requestAlbumFullAccess called with args:', args)
        const result = this.instance.requestAlbumFullAccess(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('requestAlbumFullAccess called  promise result:', result)
                return res
            })
        }
        log.info('requestAlbumFullAccess called result:', result)
        return result
    }
    requestVisitAlbum(...args: any[]) {
        log.info('requestVisitAlbum called with args:', args)
        const result = this.instance.requestVisitAlbum(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('requestVisitAlbum called  promise result:', result)
                return res
            })
        }
        log.info('requestVisitAlbum called result:', result)
        return result
    }
    resumeUncompleteDownloadRecords(...args: any[]) {
        log.info('resumeUncompleteDownloadRecords called with args:', args)
        const result = this.instance.resumeUncompleteDownloadRecords(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('resumeUncompleteDownloadRecords called  promise result:', result)
                return res
            })
        }
        log.info('resumeUncompleteDownloadRecords called result:', result)
        return result
    }
    wifiPhotoPreCheck(...args: any[]) {
        log.info('wifiPhotoPreCheck called with args:', args)
        const result = this.instance.wifiPhotoPreCheck(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('wifiPhotoPreCheck called  promise result:', result)
                return res
            })
        }
        log.info('wifiPhotoPreCheck called result:', result)
        return result
    }
};
export const getNodeIKernelWiFiPhotoClientService = (engine: any): any => {
    return class extends NodeIKernelWiFiPhotoClientService {
        
    }
}