import { useLogger } from "../../common/log";

const log = useLogger('Wrapper/NodeIKernelVasSystemUpdateService')
export class NodeIKernelVasSystemUpdateService {
    protected static singleton?: any = undefined
    protected instance: any
    constructor(instance: any) {
        log.info('constructor called')
        this.instance = instance
    }
    Destroy(...args: any[]) {
        log.info('Destroy called with args:', args)
        const result = this.instance.Destroy(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('Destroy called  promise result:', result)
                return res
            })
        }
        log.info('Destroy called result:', result)
        return result
    }
    Init(...args: any[]) {
        log.info('Init called with args:', args)
        const result = this.instance.Init(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('Init called  promise result:', result)
                return res
            })
        }
        log.info('Init called result:', result)
        return result
    }
    getResPath(...args: any[]) {
        log.info('getResPath called with args:', args)
        const result = this.instance.getResPath(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getResPath called  promise result:', result)
                return res
            })
        }
        log.info('getResPath called result:', result)
        return result
    }
    isExist(...args: any[]) {
        log.info('isExist called with args:', args)
        const result = this.instance.isExist(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('isExist called  promise result:', result)
                return res
            })
        }
        log.info('isExist called result:', result)
        return result
    }
    startDownload(...args: any[]) {
        log.info('startDownload called with args:', args)
        const result = this.instance.startDownload(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('startDownload called  promise result:', result)
                return res
            })
        }
        log.info('startDownload called result:', result)
        return result
    }
};
export const getNodeIKernelVasSystemUpdateService = (engine: any): any => {
    return class extends NodeIKernelVasSystemUpdateService {
        
    }
}