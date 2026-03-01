import { useLogger } from "../../common/log";

const log = useLogger('Wrapper/NodeIKernelMSFService')
export class NodeIKernelMSFService {
    protected static singleton?: any = undefined
    protected instance: any
    constructor(instance: any) {
        log.info('constructor called')
        this.instance = instance
    }
    getBrowserAndSetLocalProxy(...args: any[]) {
        log.info('getBrowserAndSetLocalProxy called with args:', args)
        const result = this.instance.getBrowserAndSetLocalProxy(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getBrowserAndSetLocalProxy called  promise result:', result)
                return res
            })
        }
        log.info('getBrowserAndSetLocalProxy called result:', result)
        return result
    }
    getMsfStatus(...args: any[]) {
        log.info('getMsfStatus called with args:', args)
        const result = this.instance.getMsfStatus(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getMsfStatus called  promise result:', result)
                return res
            })
        }
        log.info('getMsfStatus called result:', result)
        return result
    }
    getNetworkProxy(...args: any[]) {
        log.info('getNetworkProxy called with args:', args)
        const result = this.instance.getNetworkProxy(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getNetworkProxy called  promise result:', result)
                return res
            })
        }
        log.info('getNetworkProxy called result:', result)
        return result
    }
    getServerTime(...args: any[]) {
        log.info('getServerTime called with args:', args)
        const result = this.instance.getServerTime(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getServerTime called  promise result:', result)
                return res
            })
        }
        log.info('getServerTime called result:', result)
        return result
    }
    offline(...args: any[]) {
        log.info('offline called with args:', args)
        const result = this.instance.offline(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('offline called  promise result:', result)
                return res
            })
        }
        log.info('offline called result:', result)
        return result
    }
    onMsfPushForTesting(...args: any[]) {
        log.info('onMsfPushForTesting called with args:', args)
        const result = this.instance.onMsfPushForTesting(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('onMsfPushForTesting called  promise result:', result)
                return res
            })
        }
        log.info('onMsfPushForTesting called result:', result)
        return result
    }
    online(...args: any[]) {
        log.info('online called with args:', args)
        const result = this.instance.online(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('online called  promise result:', result)
                return res
            })
        }
        log.info('online called result:', result)
        return result
    }
    sendMsfRequest(...args: any[]) {
        log.info('sendMsfRequest called with args:', args)
        const result = this.instance.sendMsfRequest(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('sendMsfRequest called  promise result:', result)
                return res
            })
        }
        log.info('sendMsfRequest called result:', result)
        return result
    }
    setNetworkProxy(...args: any[]) {
        log.info('setNetworkProxy called with args:', args)
        const result = this.instance.setNetworkProxy(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setNetworkProxy called  promise result:', result)
                return res
            })
        }
        log.info('setNetworkProxy called result:', result)
        return result
    }
    setNetworkProxySaveDir(...args: any[]) {
        log.info('setNetworkProxySaveDir called with args:', args)
        const result = this.instance.setNetworkProxySaveDir(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setNetworkProxySaveDir called  promise result:', result)
                return res
            })
        }
        log.info('setNetworkProxySaveDir called result:', result)
        return result
    }
    testNetworkProxyConnection(...args: any[]) {
        log.info('testNetworkProxyConnection called with args:', args)
        const result = this.instance.testNetworkProxyConnection(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('testNetworkProxyConnection called  promise result:', result)
                return res
            })
        }
        log.info('testNetworkProxyConnection called result:', result)
        return result
    }
};
export const getNodeIKernelMSFService = (engine: any): any => {
    return class extends NodeIKernelMSFService {
        
    }
}