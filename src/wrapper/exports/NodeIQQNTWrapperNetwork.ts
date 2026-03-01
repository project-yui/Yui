import { useLogger } from "../../common/log";

const log = useLogger('Wrapper/NodeIQQNTWrapperNetwork')
export class NodeIQQNTWrapperNetwork {
    protected static singleton?: any = undefined
    protected instance: any
    constructor(instance: any) {
        log.info('constructor called')
        this.instance = instance
    }
    addNetworkServiceListener(...args: any[]) {
        log.info('addNetworkServiceListener called with args:', args)
        const result = this.instance.addNetworkServiceListener(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('addNetworkServiceListener called  promise result:', result)
                return res
            })
        }
        log.info('addNetworkServiceListener called result:', result)
        return result
    }
    getNetworkStatus(...args: any[]) {
        log.info('getNetworkStatus called with args:', args)
        const result = this.instance.getNetworkStatus(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getNetworkStatus called  promise result:', result)
                return res
            })
        }
        log.info('getNetworkStatus called result:', result)
        return result
    }
    removedNetworkServiceListener(...args: any[]) {
        log.info('removedNetworkServiceListener called with args:', args)
        const result = this.instance.removedNetworkServiceListener(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('removedNetworkServiceListener called  promise result:', result)
                return res
            })
        }
        log.info('removedNetworkServiceListener called result:', result)
        return result
    }
    startGetNetworkStatus(...args: any[]) {
        log.info('startGetNetworkStatus called with args:', args)
        const result = this.instance.startGetNetworkStatus(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('startGetNetworkStatus called  promise result:', result)
                return res
            })
        }
        log.info('startGetNetworkStatus called result:', result)
        return result
    }
    stopGetNetworkStatus(...args: any[]) {
        log.info('stopGetNetworkStatus called with args:', args)
        const result = this.instance.stopGetNetworkStatus(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('stopGetNetworkStatus called  promise result:', result)
                return res
            })
        }
        log.info('stopGetNetworkStatus called result:', result)
        return result
    }
};
export const getNodeIQQNTWrapperNetwork = (engine: any): any => {
    return class extends NodeIQQNTWrapperNetwork {
        
        static openNetworkService(...args: any[]) {
            log.info('openNetworkService called with args:', args)
            const result = engine.openNetworkService(...args)
            log.info('openNetworkService called result:', result)
            return result
        }
    }
}