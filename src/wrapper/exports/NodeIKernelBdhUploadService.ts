import { useLogger } from "../../common/log";

const log = useLogger('Wrapper/NodeIKernelBdhUploadService')
export class NodeIKernelBdhUploadService {
    protected static singleton?: any = undefined
    protected instance: any
    constructor(instance: any) {
        log.info('constructor called')
        this.instance = instance
    }
    cancelUpload(...args: any[]) {
        log.info('cancelUpload called with args:', args)
        const result = this.instance.cancelUpload(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('cancelUpload called  promise result:', result)
                return res
            })
        }
        log.info('cancelUpload called result:', result)
        return result
    }
    processForTask(...args: any[]) {
        log.info('processForTask called with args:', args)
        const result = this.instance.processForTask(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('processForTask called  promise result:', result)
                return res
            })
        }
        log.info('processForTask called result:', result)
        return result
    }
    uploadFile(...args: any[]) {
        log.info('uploadFile called with args:', args)
        const result = this.instance.uploadFile(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('uploadFile called  promise result:', result)
                return res
            })
        }
        log.info('uploadFile called result:', result)
        return result
    }
};
export const getNodeIKernelBdhUploadService = (engine: any): any => {
    return class extends NodeIKernelBdhUploadService {
        
    }
}