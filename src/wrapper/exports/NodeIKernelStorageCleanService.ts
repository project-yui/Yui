import { useLogger } from "../../common/log";

const log = useLogger('Wrapper/NodeIKernelStorageCleanService')
export class NodeIKernelStorageCleanService {
    protected static singleton?: any = undefined
    protected instance: any
    constructor(instance: any) {
        log.info('constructor called')
        this.instance = instance
    }
    addCacheScanedPaths(...args: any[]) {
        log.info('addCacheScanedPaths called with args:', args)
        const result = this.instance.addCacheScanedPaths(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('addCacheScanedPaths called  promise result:', result)
                return res
            })
        }
        log.info('addCacheScanedPaths called result:', result)
        return result
    }
    addFilesScanedPaths(...args: any[]) {
        log.info('addFilesScanedPaths called with args:', args)
        const result = this.instance.addFilesScanedPaths(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('addFilesScanedPaths called  promise result:', result)
                return res
            })
        }
        log.info('addFilesScanedPaths called result:', result)
        return result
    }
    addKernelStorageCleanListener(...args: any[]) {
        log.info('addKernelStorageCleanListener called with args:', args)
        const result = this.instance.addKernelStorageCleanListener(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('addKernelStorageCleanListener called  promise result:', result)
                return res
            })
        }
        log.info('addKernelStorageCleanListener called result:', result)
        return result
    }
    addNewDownloadOrUploadFile(...args: any[]) {
        log.info('addNewDownloadOrUploadFile called with args:', args)
        const result = this.instance.addNewDownloadOrUploadFile(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('addNewDownloadOrUploadFile called  promise result:', result)
                return res
            })
        }
        log.info('addNewDownloadOrUploadFile called result:', result)
        return result
    }
    addReportData(...args: any[]) {
        log.info('addReportData called with args:', args)
        const result = this.instance.addReportData(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('addReportData called  promise result:', result)
                return res
            })
        }
        log.info('addReportData called result:', result)
        return result
    }
    clearAllChatCacheInfo(...args: any[]) {
        log.info('clearAllChatCacheInfo called with args:', args)
        const result = this.instance.clearAllChatCacheInfo(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('clearAllChatCacheInfo called  promise result:', result)
                return res
            })
        }
        log.info('clearAllChatCacheInfo called result:', result)
        return result
    }
    clearCacheDataByKeys(...args: any[]) {
        log.info('clearCacheDataByKeys called with args:', args)
        const result = this.instance.clearCacheDataByKeys(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('clearCacheDataByKeys called  promise result:', result)
                return res
            })
        }
        log.info('clearCacheDataByKeys called result:', result)
        return result
    }
    clearChatCacheInfo(...args: any[]) {
        log.info('clearChatCacheInfo called with args:', args)
        const result = this.instance.clearChatCacheInfo(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('clearChatCacheInfo called  promise result:', result)
                return res
            })
        }
        log.info('clearChatCacheInfo called result:', result)
        return result
    }
    closeCleanWindow(...args: any[]) {
        log.info('closeCleanWindow called with args:', args)
        const result = this.instance.closeCleanWindow(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('closeCleanWindow called  promise result:', result)
                return res
            })
        }
        log.info('closeCleanWindow called result:', result)
        return result
    }
    endScan(...args: any[]) {
        log.info('endScan called with args:', args)
        const result = this.instance.endScan(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('endScan called  promise result:', result)
                return res
            })
        }
        log.info('endScan called result:', result)
        return result
    }
    getChatCacheInfo(...args: any[]) {
        log.info('getChatCacheInfo called with args:', args)
        const result = this.instance.getChatCacheInfo(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getChatCacheInfo called  promise result:', result)
                return res
            })
        }
        log.info('getChatCacheInfo called result:', result)
        return result
    }
    getFileCacheInfo(...args: any[]) {
        log.info('getFileCacheInfo called with args:', args)
        const result = this.instance.getFileCacheInfo(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getFileCacheInfo called  promise result:', result)
                return res
            })
        }
        log.info('getFileCacheInfo called result:', result)
        return result
    }
    removeKernelStorageCleanListener(...args: any[]) {
        log.info('removeKernelStorageCleanListener called with args:', args)
        const result = this.instance.removeKernelStorageCleanListener(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('removeKernelStorageCleanListener called  promise result:', result)
                return res
            })
        }
        log.info('removeKernelStorageCleanListener called result:', result)
        return result
    }
    reportData(...args: any[]) {
        log.info('reportData called with args:', args)
        const result = this.instance.reportData(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('reportData called  promise result:', result)
                return res
            })
        }
        log.info('reportData called result:', result)
        return result
    }
    scanCache(...args: any[]) {
        log.info('scanCache called with args:', args)
        const result = this.instance.scanCache(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('scanCache called  promise result:', result)
                return res
            })
        }
        log.info('scanCache called result:', result)
        return result
    }
    setSilentScan(...args: any[]) {
        log.info('setSilentScan called with args:', args)
        const result = this.instance.setSilentScan(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setSilentScan called  promise result:', result)
                return res
            })
        }
        log.info('setSilentScan called result:', result)
        return result
    }
};
export const getNodeIKernelStorageCleanService = (engine: any): any => {
    return class extends NodeIKernelStorageCleanService {
        
    }
}