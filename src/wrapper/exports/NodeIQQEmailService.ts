import { useLogger } from "../../common/log";

const log = useLogger('Wrapper/NodeIQQEmailService')
export class NodeIQQEmailService {
    protected static singleton?: any = undefined
    protected instance: any
    constructor(instance: any) {
        log.info('constructor called')
        this.instance = instance
    }
    addKernelShareListener(...args: any[]) {
        log.info('addKernelShareListener called with args:', args)
        const result = this.instance.addKernelShareListener(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('addKernelShareListener called  promise result:', result)
                return res
            })
        }
        log.info('addKernelShareListener called result:', result)
        return result
    }
    deleteEmail(...args: any[]) {
        log.info('deleteEmail called with args:', args)
        const result = this.instance.deleteEmail(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('deleteEmail called  promise result:', result)
                return res
            })
        }
        log.info('deleteEmail called result:', result)
        return result
    }
    getEmailInfo(...args: any[]) {
        log.info('getEmailInfo called with args:', args)
        const result = this.instance.getEmailInfo(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getEmailInfo called  promise result:', result)
                return res
            })
        }
        log.info('getEmailInfo called result:', result)
        return result
    }
    markEmailNotified(...args: any[]) {
        log.info('markEmailNotified called with args:', args)
        const result = this.instance.markEmailNotified(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('markEmailNotified called  promise result:', result)
                return res
            })
        }
        log.info('markEmailNotified called result:', result)
        return result
    }
    removeKernelShareListener(...args: any[]) {
        log.info('removeKernelShareListener called with args:', args)
        const result = this.instance.removeKernelShareListener(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('removeKernelShareListener called  promise result:', result)
                return res
            })
        }
        log.info('removeKernelShareListener called result:', result)
        return result
    }
};
export const getNodeIQQEmailService = (engine: any): any => {
    return class extends NodeIQQEmailService {
        
    }
}