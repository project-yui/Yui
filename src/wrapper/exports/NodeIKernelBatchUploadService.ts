import { useLogger } from "../../common/log";

const log = useLogger('Wrapper/NodeIKernelBatchUploadService')
export class NodeIKernelBatchUploadService {
    protected static singleton?: any = undefined
    protected instance: any
    constructor(instance: any) {
        log.info('constructor called')
        this.instance = instance
    }
    createBatchUploadConfig(...args: any[]) {
        log.info('createBatchUploadConfig called with args:', args)
        const result = this.instance.createBatchUploadConfig(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('createBatchUploadConfig called  promise result:', result)
                return res
            })
        }
        log.info('createBatchUploadConfig called result:', result)
        return result
    }
    getBatchUploadManager(...args: any[]) {
        log.info('getBatchUploadManager called with args:', args)
        const result = this.instance.getBatchUploadManager(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getBatchUploadManager called  promise result:', result)
                return res
            })
        }
        log.info('getBatchUploadManager called result:', result)
        return result
    }
};
export const getNodeIKernelBatchUploadService = (engine: any): any => {
    return class extends NodeIKernelBatchUploadService {
        
    }
}