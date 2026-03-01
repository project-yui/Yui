import { useLogger } from "../../common/log";

const log = useLogger('Wrapper/NodeIKernelMsgBackupService')
export class NodeIKernelMsgBackupService {
    protected static singleton?: any = undefined
    protected instance: any
    constructor(instance: any) {
        log.info('constructor called')
        this.instance = instance
    }
    addKernelMsgBackupListener(...args: any[]) {
        log.info('addKernelMsgBackupListener called with args:', args)
        const result = this.instance.addKernelMsgBackupListener(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('addKernelMsgBackupListener called  promise result:', result)
                return res
            })
        }
        log.info('addKernelMsgBackupListener called result:', result)
        return result
    }
    clearCache(...args: any[]) {
        log.info('clearCache called with args:', args)
        const result = this.instance.clearCache(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('clearCache called  promise result:', result)
                return res
            })
        }
        log.info('clearCache called result:', result)
        return result
    }
    deleteAllLocalBackup(...args: any[]) {
        log.info('deleteAllLocalBackup called with args:', args)
        const result = this.instance.deleteAllLocalBackup(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('deleteAllLocalBackup called  promise result:', result)
                return res
            })
        }
        log.info('deleteAllLocalBackup called result:', result)
        return result
    }
    deleteLocalBackup(...args: any[]) {
        log.info('deleteLocalBackup called with args:', args)
        const result = this.instance.deleteLocalBackup(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('deleteLocalBackup called  promise result:', result)
                return res
            })
        }
        log.info('deleteLocalBackup called result:', result)
        return result
    }
    getLocalStorageBackup(...args: any[]) {
        log.info('getLocalStorageBackup called with args:', args)
        const result = this.instance.getLocalStorageBackup(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getLocalStorageBackup called  promise result:', result)
                return res
            })
        }
        log.info('getLocalStorageBackup called result:', result)
        return result
    }
    getMsgBackupLocation(...args: any[]) {
        log.info('getMsgBackupLocation called with args:', args)
        const result = this.instance.getMsgBackupLocation(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getMsgBackupLocation called  promise result:', result)
                return res
            })
        }
        log.info('getMsgBackupLocation called result:', result)
        return result
    }
    hasLocalStorageBackup(...args: any[]) {
        log.info('hasLocalStorageBackup called with args:', args)
        const result = this.instance.hasLocalStorageBackup(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('hasLocalStorageBackup called  promise result:', result)
                return res
            })
        }
        log.info('hasLocalStorageBackup called result:', result)
        return result
    }
    pause(...args: any[]) {
        log.info('pause called with args:', args)
        const result = this.instance.pause(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('pause called  promise result:', result)
                return res
            })
        }
        log.info('pause called result:', result)
        return result
    }
    queryLocalStorageBackupDiskUsage(...args: any[]) {
        log.info('queryLocalStorageBackupDiskUsage called with args:', args)
        const result = this.instance.queryLocalStorageBackupDiskUsage(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('queryLocalStorageBackupDiskUsage called  promise result:', result)
                return res
            })
        }
        log.info('queryLocalStorageBackupDiskUsage called result:', result)
        return result
    }
    queryLocalStorageBackupLastModifyTime(...args: any[]) {
        log.info('queryLocalStorageBackupLastModifyTime called with args:', args)
        const result = this.instance.queryLocalStorageBackupLastModifyTime(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('queryLocalStorageBackupLastModifyTime called  promise result:', result)
                return res
            })
        }
        log.info('queryLocalStorageBackupLastModifyTime called result:', result)
        return result
    }
    removeKernelMsgBackupListener(...args: any[]) {
        log.info('removeKernelMsgBackupListener called with args:', args)
        const result = this.instance.removeKernelMsgBackupListener(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('removeKernelMsgBackupListener called  promise result:', result)
                return res
            })
        }
        log.info('removeKernelMsgBackupListener called result:', result)
        return result
    }
    requestMsgBackup(...args: any[]) {
        log.info('requestMsgBackup called with args:', args)
        const result = this.instance.requestMsgBackup(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('requestMsgBackup called  promise result:', result)
                return res
            })
        }
        log.info('requestMsgBackup called result:', result)
        return result
    }
    requestMsgMigrate(...args: any[]) {
        log.info('requestMsgMigrate called with args:', args)
        const result = this.instance.requestMsgMigrate(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('requestMsgMigrate called  promise result:', result)
                return res
            })
        }
        log.info('requestMsgMigrate called result:', result)
        return result
    }
    requestMsgRestore(...args: any[]) {
        log.info('requestMsgRestore called with args:', args)
        const result = this.instance.requestMsgRestore(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('requestMsgRestore called  promise result:', result)
                return res
            })
        }
        log.info('requestMsgRestore called result:', result)
        return result
    }
    setMsgBackupDataHandlingOption(...args: any[]) {
        log.info('setMsgBackupDataHandlingOption called with args:', args)
        const result = this.instance.setMsgBackupDataHandlingOption(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setMsgBackupDataHandlingOption called  promise result:', result)
                return res
            })
        }
        log.info('setMsgBackupDataHandlingOption called result:', result)
        return result
    }
    setMsgBackupLocation(...args: any[]) {
        log.info('setMsgBackupLocation called with args:', args)
        const result = this.instance.setMsgBackupLocation(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setMsgBackupLocation called  promise result:', result)
                return res
            })
        }
        log.info('setMsgBackupLocation called result:', result)
        return result
    }
    start(...args: any[]) {
        log.info('start called with args:', args)
        const result = this.instance.start(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('start called  promise result:', result)
                return res
            })
        }
        log.info('start called result:', result)
        return result
    }
    stop(...args: any[]) {
        log.info('stop called with args:', args)
        const result = this.instance.stop(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('stop called  promise result:', result)
                return res
            })
        }
        log.info('stop called result:', result)
        return result
    }
};
export const getNodeIKernelMsgBackupService = (engine: any): any => {
    return class extends NodeIKernelMsgBackupService {
        
    }
}