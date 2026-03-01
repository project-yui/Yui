import { useLogger } from "../../common/log";

const log = useLogger('Wrapper/NodeIKernelECDHService')
export class NodeIKernelECDHService {
    protected static singleton?: any = undefined
    protected instance: any
    constructor(instance: any) {
        log.info('constructor called')
        this.instance = instance
    }
    init(...args: any[]) {
        log.info('init called with args:', args)
        const result = this.instance.init(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('init called  promise result:', result)
                return res
            })
        }
        log.info('init called result:', result)
        return result
    }
    sendOIDBRequest(...args: any[]) {
        log.info('sendOIDBRequest called with args:', args)
        const result = this.instance.sendOIDBRequest(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('sendOIDBRequest called  promise result:', result)
                return res
            })
        }
        log.info('sendOIDBRequest called result:', result)
        return result
    }
    sendSSORequest(...args: any[]) {
        log.info('sendSSORequest called with args:', args)
        const result = this.instance.sendSSORequest(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('sendSSORequest called  promise result:', result)
                return res
            })
        }
        log.info('sendSSORequest called result:', result)
        return result
    }
    setGuid(...args: any[]) {
        log.info('setGuid called with args:', args)
        const result = this.instance.setGuid(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setGuid called  promise result:', result)
                return res
            })
        }
        log.info('setGuid called result:', result)
        return result
    }
    setIsDebug(...args: any[]) {
        log.info('setIsDebug called with args:', args)
        const result = this.instance.setIsDebug(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setIsDebug called  promise result:', result)
                return res
            })
        }
        log.info('setIsDebug called result:', result)
        return result
    }
};
export const getNodeIKernelECDHService = (engine: any): any => {
    return class extends NodeIKernelECDHService {
        
    }
}