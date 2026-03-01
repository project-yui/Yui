import { useLogger } from "../../common/log";

const log = useLogger('Wrapper/NodeIKernelUnifySearchService')
export class NodeIKernelUnifySearchService {
    protected static singleton?: any = undefined
    protected instance: any
    constructor(instance: any) {
        log.info('constructor called')
        this.instance = instance
    }
    checkAIAuth(...args: any[]) {
        log.info('checkAIAuth called with args:', args)
        const result = this.instance.checkAIAuth(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('checkAIAuth called  promise result:', result)
                return res
            })
        }
        log.info('checkAIAuth called result:', result)
        return result
    }
    getNetResultTabs(...args: any[]) {
        log.info('getNetResultTabs called with args:', args)
        const result = this.instance.getNetResultTabs(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getNetResultTabs called  promise result:', result)
                return res
            })
        }
        log.info('getNetResultTabs called result:', result)
        return result
    }
    getNetSugWords(...args: any[]) {
        log.info('getNetSugWords called with args:', args)
        const result = this.instance.getNetSugWords(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getNetSugWords called  promise result:', result)
                return res
            })
        }
        log.info('getNetSugWords called result:', result)
        return result
    }
    getSearchAppendingInfo(...args: any[]) {
        log.info('getSearchAppendingInfo called with args:', args)
        const result = this.instance.getSearchAppendingInfo(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getSearchAppendingInfo called  promise result:', result)
                return res
            })
        }
        log.info('getSearchAppendingInfo called result:', result)
        return result
    }
    getSearchBoxSugWords(...args: any[]) {
        log.info('getSearchBoxSugWords called with args:', args)
        const result = this.instance.getSearchBoxSugWords(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getSearchBoxSugWords called  promise result:', result)
                return res
            })
        }
        log.info('getSearchBoxSugWords called result:', result)
        return result
    }
    search(...args: any[]) {
        log.info('search called with args:', args)
        const result = this.instance.search(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('search called  promise result:', result)
                return res
            })
        }
        log.info('search called result:', result)
        return result
    }
    unifySearch(...args: any[]) {
        log.info('unifySearch called with args:', args)
        const result = this.instance.unifySearch(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('unifySearch called  promise result:', result)
                return res
            })
        }
        log.info('unifySearch called result:', result)
        return result
    }
    unifySearchDiscovery(...args: any[]) {
        log.info('unifySearchDiscovery called with args:', args)
        const result = this.instance.unifySearchDiscovery(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('unifySearchDiscovery called  promise result:', result)
                return res
            })
        }
        log.info('unifySearchDiscovery called result:', result)
        return result
    }
    unifySearchDiscoveryInCache(...args: any[]) {
        log.info('unifySearchDiscoveryInCache called with args:', args)
        const result = this.instance.unifySearchDiscoveryInCache(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('unifySearchDiscoveryInCache called  promise result:', result)
                return res
            })
        }
        log.info('unifySearchDiscoveryInCache called result:', result)
        return result
    }
    wxSearchReport(...args: any[]) {
        log.info('wxSearchReport called with args:', args)
        const result = this.instance.wxSearchReport(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('wxSearchReport called  promise result:', result)
                return res
            })
        }
        log.info('wxSearchReport called result:', result)
        return result
    }
};
export const getNodeIKernelUnifySearchService = (engine: any): any => {
    return class extends NodeIKernelUnifySearchService {
        
    }
}