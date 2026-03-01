import { useLogger } from "../../common/log";

const log = useLogger('Wrapper/NodeIKernelLiteBusinessService')
export class NodeIKernelLiteBusinessService {
    protected static singleton?: any = undefined
    protected instance: any
    constructor(instance: any) {
        log.info('constructor called')
        this.instance = instance
    }
    addListener(...args: any[]) {
        log.info('addListener called with args:', args)
        const result = this.instance.addListener(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('addListener called  promise result:', result)
                return res
            })
        }
        log.info('addListener called result:', result)
        return result
    }
    clearLiteActionForTesting(...args: any[]) {
        log.info('clearLiteActionForTesting called with args:', args)
        const result = this.instance.clearLiteActionForTesting(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('clearLiteActionForTesting called  promise result:', result)
                return res
            })
        }
        log.info('clearLiteActionForTesting called result:', result)
        return result
    }
    clearLiteBusiness(...args: any[]) {
        log.info('clearLiteBusiness called with args:', args)
        const result = this.instance.clearLiteBusiness(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('clearLiteBusiness called  promise result:', result)
                return res
            })
        }
        log.info('clearLiteBusiness called result:', result)
        return result
    }
    clickLiteAction(...args: any[]) {
        log.info('clickLiteAction called with args:', args)
        const result = this.instance.clickLiteAction(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('clickLiteAction called  promise result:', result)
                return res
            })
        }
        log.info('clickLiteAction called result:', result)
        return result
    }
    exposeLiteAction(...args: any[]) {
        log.info('exposeLiteAction called with args:', args)
        const result = this.instance.exposeLiteAction(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('exposeLiteAction called  promise result:', result)
                return res
            })
        }
        log.info('exposeLiteAction called result:', result)
        return result
    }
    generateLiteActionForTesting(...args: any[]) {
        log.info('generateLiteActionForTesting called with args:', args)
        const result = this.instance.generateLiteActionForTesting(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('generateLiteActionForTesting called  promise result:', result)
                return res
            })
        }
        log.info('generateLiteActionForTesting called result:', result)
        return result
    }
    getLiteBusiness(...args: any[]) {
        log.info('getLiteBusiness called with args:', args)
        const result = this.instance.getLiteBusiness(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getLiteBusiness called  promise result:', result)
                return res
            })
        }
        log.info('getLiteBusiness called result:', result)
        return result
    }
    getRevealTofuAuthority(...args: any[]) {
        log.info('getRevealTofuAuthority called with args:', args)
        const result = this.instance.getRevealTofuAuthority(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getRevealTofuAuthority called  promise result:', result)
                return res
            })
        }
        log.info('getRevealTofuAuthority called result:', result)
        return result
    }
    insertRevealSuc(...args: any[]) {
        log.info('insertRevealSuc called with args:', args)
        const result = this.instance.insertRevealSuc(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('insertRevealSuc called  promise result:', result)
                return res
            })
        }
        log.info('insertRevealSuc called result:', result)
        return result
    }
    recentRevealExposure(...args: any[]) {
        log.info('recentRevealExposure called with args:', args)
        const result = this.instance.recentRevealExposure(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('recentRevealExposure called  promise result:', result)
                return res
            })
        }
        log.info('recentRevealExposure called result:', result)
        return result
    }
    removeListener(...args: any[]) {
        log.info('removeListener called with args:', args)
        const result = this.instance.removeListener(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('removeListener called  promise result:', result)
                return res
            })
        }
        log.info('removeListener called result:', result)
        return result
    }
};
export const getNodeIKernelLiteBusinessService = (engine: any): any => {
    return class extends NodeIKernelLiteBusinessService {
        
    }
}