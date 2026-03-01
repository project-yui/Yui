import { useLogger } from "../../common/log";

const log = useLogger('Wrapper/NodeIKernelFileBridgeClientService')
export class NodeIKernelFileBridgeClientService {
    protected static singleton?: any = undefined
    protected instance: any
    constructor(instance: any) {
        log.info('constructor called')
        this.instance = instance
    }
    addKernelFileBridgeClientListener(...args: any[]) {
        log.info('addKernelFileBridgeClientListener called with args:', args)
        const result = this.instance.addKernelFileBridgeClientListener(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('addKernelFileBridgeClientListener called  promise result:', result)
                return res
            })
        }
        log.info('addKernelFileBridgeClientListener called result:', result)
        return result
    }
    authenticateWithPassword(...args: any[]) {
        log.info('authenticateWithPassword called with args:', args)
        const result = this.instance.authenticateWithPassword(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('authenticateWithPassword called  promise result:', result)
                return res
            })
        }
        log.info('authenticateWithPassword called result:', result)
        return result
    }
    cancelGet(...args: any[]) {
        log.info('cancelGet called with args:', args)
        const result = this.instance.cancelGet(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('cancelGet called  promise result:', result)
                return res
            })
        }
        log.info('cancelGet called result:', result)
        return result
    }
    cancelSearchFolderForFiles(...args: any[]) {
        log.info('cancelSearchFolderForFiles called with args:', args)
        const result = this.instance.cancelSearchFolderForFiles(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('cancelSearchFolderForFiles called  promise result:', result)
                return res
            })
        }
        log.info('cancelSearchFolderForFiles called result:', result)
        return result
    }
    checkIfInWiFiPhotoOrFilebridge(...args: any[]) {
        log.info('checkIfInWiFiPhotoOrFilebridge called with args:', args)
        const result = this.instance.checkIfInWiFiPhotoOrFilebridge(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('checkIfInWiFiPhotoOrFilebridge called  promise result:', result)
                return res
            })
        }
        log.info('checkIfInWiFiPhotoOrFilebridge called result:', result)
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
    getAuthenticationType(...args: any[]) {
        log.info('getAuthenticationType called with args:', args)
        const result = this.instance.getAuthenticationType(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getAuthenticationType called  promise result:', result)
                return res
            })
        }
        log.info('getAuthenticationType called result:', result)
        return result
    }
    getCurrentStatus(...args: any[]) {
        log.info('getCurrentStatus called with args:', args)
        const result = this.instance.getCurrentStatus(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getCurrentStatus called  promise result:', result)
                return res
            })
        }
        log.info('getCurrentStatus called result:', result)
        return result
    }
    getFile(...args: any[]) {
        log.info('getFile called with args:', args)
        const result = this.instance.getFile(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getFile called  promise result:', result)
                return res
            })
        }
        log.info('getFile called result:', result)
        return result
    }
    getFileLocalStoragePath(...args: any[]) {
        log.info('getFileLocalStoragePath called with args:', args)
        const result = this.instance.getFileLocalStoragePath(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getFileLocalStoragePath called  promise result:', result)
                return res
            })
        }
        log.info('getFileLocalStoragePath called result:', result)
        return result
    }
    getHostDeviceName(...args: any[]) {
        log.info('getHostDeviceName called with args:', args)
        const result = this.instance.getHostDeviceName(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getHostDeviceName called  promise result:', result)
                return res
            })
        }
        log.info('getHostDeviceName called result:', result)
        return result
    }
    getHostIsSupportSearch(...args: any[]) {
        log.info('getHostIsSupportSearch called with args:', args)
        const result = this.instance.getHostIsSupportSearch(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getHostIsSupportSearch called  promise result:', result)
                return res
            })
        }
        log.info('getHostIsSupportSearch called result:', result)
        return result
    }
    getHostMaxSearchCount(...args: any[]) {
        log.info('getHostMaxSearchCount called with args:', args)
        const result = this.instance.getHostMaxSearchCount(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getHostMaxSearchCount called  promise result:', result)
                return res
            })
        }
        log.info('getHostMaxSearchCount called result:', result)
        return result
    }
    getHostSystemType(...args: any[]) {
        log.info('getHostSystemType called with args:', args)
        const result = this.instance.getHostSystemType(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getHostSystemType called  promise result:', result)
                return res
            })
        }
        log.info('getHostSystemType called result:', result)
        return result
    }
    getMaxAuthenticateWithoutPasswordValidDays(...args: any[]) {
        log.info('getMaxAuthenticateWithoutPasswordValidDays called with args:', args)
        const result = this.instance.getMaxAuthenticateWithoutPasswordValidDays(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getMaxAuthenticateWithoutPasswordValidDays called  promise result:', result)
                return res
            })
        }
        log.info('getMaxAuthenticateWithoutPasswordValidDays called result:', result)
        return result
    }
    getPageContent(...args: any[]) {
        log.info('getPageContent called with args:', args)
        const result = this.instance.getPageContent(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getPageContent called  promise result:', result)
                return res
            })
        }
        log.info('getPageContent called result:', result)
        return result
    }
    getRootPageContent(...args: any[]) {
        log.info('getRootPageContent called with args:', args)
        const result = this.instance.getRootPageContent(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getRootPageContent called  promise result:', result)
                return res
            })
        }
        log.info('getRootPageContent called result:', result)
        return result
    }
    getThumbnail(...args: any[]) {
        log.info('getThumbnail called with args:', args)
        const result = this.instance.getThumbnail(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getThumbnail called  promise result:', result)
                return res
            })
        }
        log.info('getThumbnail called result:', result)
        return result
    }
    preCheck(...args: any[]) {
        log.info('preCheck called with args:', args)
        const result = this.instance.preCheck(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('preCheck called  promise result:', result)
                return res
            })
        }
        log.info('preCheck called result:', result)
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
    removeKernelFileBridgeClientListener(...args: any[]) {
        log.info('removeKernelFileBridgeClientListener called with args:', args)
        const result = this.instance.removeKernelFileBridgeClientListener(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('removeKernelFileBridgeClientListener called  promise result:', result)
                return res
            })
        }
        log.info('removeKernelFileBridgeClientListener called result:', result)
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
    searchFolderForFiles(...args: any[]) {
        log.info('searchFolderForFiles called with args:', args)
        const result = this.instance.searchFolderForFiles(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('searchFolderForFiles called  promise result:', result)
                return res
            })
        }
        log.info('searchFolderForFiles called result:', result)
        return result
    }
    sendRequest(...args: any[]) {
        log.info('sendRequest called with args:', args)
        const result = this.instance.sendRequest(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('sendRequest called  promise result:', result)
                return res
            })
        }
        log.info('sendRequest called result:', result)
        return result
    }
};
export const getNodeIKernelFileBridgeClientService = (engine: any): any => {
    return class extends NodeIKernelFileBridgeClientService {
        
    }
}