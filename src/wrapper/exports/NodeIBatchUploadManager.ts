import { useLogger } from "../../common/log";

const log = useLogger('Wrapper/NodeIBatchUploadManager')
export class NodeIBatchUploadManager {
    protected static singleton?: any = undefined
    protected instance: any
    constructor(instance: any) {
        log.info('constructor called')
        this.instance = instance
    }
    addTaskToSession(...args: any[]) {
        log.info('addTaskToSession called with args:', args)
        const result = this.instance.addTaskToSession(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('addTaskToSession called  promise result:', result)
                return res
            })
        }
        log.info('addTaskToSession called result:', result)
        return result
    }
    cancelUploadSession(...args: any[]) {
        log.info('cancelUploadSession called with args:', args)
        const result = this.instance.cancelUploadSession(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('cancelUploadSession called  promise result:', result)
                return res
            })
        }
        log.info('cancelUploadSession called result:', result)
        return result
    }
    cancelUploadTask(...args: any[]) {
        log.info('cancelUploadTask called with args:', args)
        const result = this.instance.cancelUploadTask(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('cancelUploadTask called  promise result:', result)
                return res
            })
        }
        log.info('cancelUploadTask called result:', result)
        return result
    }
    deleteCachedSession(...args: any[]) {
        log.info('deleteCachedSession called with args:', args)
        const result = this.instance.deleteCachedSession(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('deleteCachedSession called  promise result:', result)
                return res
            })
        }
        log.info('deleteCachedSession called result:', result)
        return result
    }
    getCachedSessions(...args: any[]) {
        log.info('getCachedSessions called with args:', args)
        const result = this.instance.getCachedSessions(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getCachedSessions called  promise result:', result)
                return res
            })
        }
        log.info('getCachedSessions called result:', result)
        return result
    }
    resumeUploadSession(...args: any[]) {
        log.info('resumeUploadSession called with args:', args)
        const result = this.instance.resumeUploadSession(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('resumeUploadSession called  promise result:', result)
                return res
            })
        }
        log.info('resumeUploadSession called result:', result)
        return result
    }
    resumeUploadTask(...args: any[]) {
        log.info('resumeUploadTask called with args:', args)
        const result = this.instance.resumeUploadTask(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('resumeUploadTask called  promise result:', result)
                return res
            })
        }
        log.info('resumeUploadTask called result:', result)
        return result
    }
    startUploadSession(...args: any[]) {
        log.info('startUploadSession called with args:', args)
        const result = this.instance.startUploadSession(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('startUploadSession called  promise result:', result)
                return res
            })
        }
        log.info('startUploadSession called result:', result)
        return result
    }
    suspendUploadSession(...args: any[]) {
        log.info('suspendUploadSession called with args:', args)
        const result = this.instance.suspendUploadSession(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('suspendUploadSession called  promise result:', result)
                return res
            })
        }
        log.info('suspendUploadSession called result:', result)
        return result
    }
    suspendUploadTask(...args: any[]) {
        log.info('suspendUploadTask called with args:', args)
        const result = this.instance.suspendUploadTask(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('suspendUploadTask called  promise result:', result)
                return res
            })
        }
        log.info('suspendUploadTask called result:', result)
        return result
    }
    updateTaskInfo(...args: any[]) {
        log.info('updateTaskInfo called with args:', args)
        const result = this.instance.updateTaskInfo(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('updateTaskInfo called  promise result:', result)
                return res
            })
        }
        log.info('updateTaskInfo called result:', result)
        return result
    }
};
export const getNodeIBatchUploadManager = (engine: any): any => {
    return class extends NodeIBatchUploadManager {
        
    }
}