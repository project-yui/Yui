import { useLogger } from "../../common/log";
const log = useLogger('Wrapper/NodeIKernelMSFService')
export class NodeIKernelMSFService {
    protected static singleton?: any = undefined
    protected instance: any
    constructor(instance: any) {
        log.info('constructor called')
        this.instance = instance
    }
    testNetworkProxyConnection(...args: any[]) {
        log.info('testNetworkProxyConnection called with args:', args)
        return this.instance.testNetworkProxyConnection(...args)
    }
    setNetworkProxySaveDir(...args: any[]) {
        log.info('setNetworkProxySaveDir called with args:', args)
        return this.instance.setNetworkProxySaveDir(...args)
    }
    setNetworkProxy(...args: any[]) {
        log.info('setNetworkProxy called with args:', args)
        return this.instance.setNetworkProxy(...args)
    }
    sendMsfRequest(...args: any[]) {
        log.info('sendMsfRequest called with args:', args)
        return this.instance.sendMsfRequest(...args)
    }
    online(...args: any[]) {
        log.info('online called with args:', args)
        return this.instance.online(...args)
    }
    onMsfPushForTesting(...args: any[]) {
        log.info('onMsfPushForTesting called with args:', args)
        return this.instance.onMsfPushForTesting(...args)
    }
    offline(...args: any[]) {
        log.info('offline called with args:', args)
        return this.instance.offline(...args)
    }
    getServerTime(...args: any[]) {
        log.info('getServerTime called with args:', args)
        return this.instance.getServerTime(...args)
    }
    getNetworkProxy(...args: any[]) {
        log.info('getNetworkProxy called with args:', args)
        return this.instance.getNetworkProxy(...args)
    }
    getMsfStatus(...args: any[]) {
        log.info('getMsfStatus called with args:', args)
        return this.instance.getMsfStatus(...args)
    }
    getBrowserAndSetLocalProxy(...args: any[]) {
        log.info('getBrowserAndSetLocalProxy called with args:', args)
        return this.instance.getBrowserAndSetLocalProxy(...args)
    }
};
export const getNodeIKernelMSFService = (engine: any): any => {
    return NodeIKernelMSFService
}