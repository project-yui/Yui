import { useLogger } from "../../common/log";

const log = useLogger('Wrapper/NodeIKernelThirdPartySigService')
export class NodeIKernelThirdPartySigService {
    protected static singleton?: any = undefined
    protected instance: any
    constructor(instance: any) {
        log.info('constructor called')
        this.instance = instance
    }
    addOnSigChangeListener(...args: any[]) {
        log.info('addOnSigChangeListener called with args:', args)
        const result = this.instance.addOnSigChangeListener(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('addOnSigChangeListener called  promise result:', result)
                return res
            })
        }
        log.info('addOnSigChangeListener called result:', result)
        return result
    }
    delThirdPartySigByUin(...args: any[]) {
        log.info('delThirdPartySigByUin called with args:', args)
        const result = this.instance.delThirdPartySigByUin(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('delThirdPartySigByUin called  promise result:', result)
                return res
            })
        }
        log.info('delThirdPartySigByUin called result:', result)
        return result
    }
    getOpenIDByUin(...args: any[]) {
        log.info('getOpenIDByUin called with args:', args)
        const result = this.instance.getOpenIDByUin(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getOpenIDByUin called  promise result:', result)
                return res
            })
        }
        log.info('getOpenIDByUin called result:', result)
        return result
    }
    getPT4tokenByUin(...args: any[]) {
        log.info('getPT4tokenByUin called with args:', args)
        const result = this.instance.getPT4tokenByUin(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getPT4tokenByUin called  promise result:', result)
                return res
            })
        }
        log.info('getPT4tokenByUin called result:', result)
        return result
    }
    getThirdPartySigByUin(...args: any[]) {
        log.info('getThirdPartySigByUin called with args:', args)
        const result = this.instance.getThirdPartySigByUin(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getThirdPartySigByUin called  promise result:', result)
                return res
            })
        }
        log.info('getThirdPartySigByUin called result:', result)
        return result
    }
    initConfig(...args: any[]) {
        log.info('initConfig called with args:', args)
        const result = this.instance.initConfig(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('initConfig called  promise result:', result)
                return res
            })
        }
        log.info('initConfig called result:', result)
        return result
    }
    removeSigChangeListener(...args: any[]) {
        log.info('removeSigChangeListener called with args:', args)
        const result = this.instance.removeSigChangeListener(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('removeSigChangeListener called  promise result:', result)
                return res
            })
        }
        log.info('removeSigChangeListener called result:', result)
        return result
    }
};
export const getNodeIKernelThirdPartySigService = (engine: any): any => {
    return class extends NodeIKernelThirdPartySigService {
        
    }
}