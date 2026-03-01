import { useLogger } from "../../common/log";

const log = useLogger('Wrapper/NodeIQQNTWrapperEngine')
export class NodeIQQNTWrapperEngine {
    protected static singleton?: any = undefined
    protected instance: any
    constructor(instance: any) {
        log.info('constructor called')
        this.instance = instance
    }
    ClearMoblieQQAccountData(...args: any[]) {
        log.info('ClearMoblieQQAccountData called with args:', args)
        const result = this.instance.ClearMoblieQQAccountData(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('ClearMoblieQQAccountData called  promise result:', result)
                return res
            })
        }
        log.info('ClearMoblieQQAccountData called result:', result)
        return result
    }
    destroy(...args: any[]) {
        log.info('destroy called with args:', args)
        const result = this.instance.destroy(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('destroy called  promise result:', result)
                return res
            })
        }
        log.info('destroy called result:', result)
        return result
    }
    getDeviceInfo(...args: any[]) {
        log.info('getDeviceInfo called with args:', args)
        const result = this.instance.getDeviceInfo(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getDeviceInfo called  promise result:', result)
                return res
            })
        }
        log.info('getDeviceInfo called result:', result)
        return result
    }
    getECDHService(...args: any[]) {
        log.info('getECDHService called with args:', args)
        const result = this.instance.getECDHService(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getECDHService called  promise result:', result)
                return res
            })
        }
        log.info('getECDHService called result:', result)
        return result
    }
    getThirdPartySigService(...args: any[]) {
        log.info('getThirdPartySigService called with args:', args)
        const result = this.instance.getThirdPartySigService(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getThirdPartySigService called  promise result:', result)
                return res
            })
        }
        log.info('getThirdPartySigService called result:', result)
        return result
    }
    initLog(...args: any[]) {
        log.info('initLog called with args:', args)
        const result = this.instance.initLog(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('initLog called  promise result:', result)
                return res
            })
        }
        log.info('initLog called result:', result)
        return result
    }
    initWithDeskTopConfig(...args: any[]) {
        log.info('initWithDeskTopConfig called with args:', args)
        const result = this.instance.initWithDeskTopConfig(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('initWithDeskTopConfig called  promise result:', result)
                return res
            })
        }
        log.info('initWithDeskTopConfig called result:', result)
        return result
    }
    initWithMobileConfig(...args: any[]) {
        log.info('initWithMobileConfig called with args:', args)
        const result = this.instance.initWithMobileConfig(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('initWithMobileConfig called  promise result:', result)
                return res
            })
        }
        log.info('initWithMobileConfig called result:', result)
        return result
    }
    onSendSSOReply(...args: any[]) {
        log.info('onSendSSOReply called with args:', args)
        const result = this.instance.onSendSSOReply(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('onSendSSOReply called  promise result:', result)
                return res
            })
        }
        log.info('onSendSSOReply called result:', result)
        return result
    }
    readyToShow(...args: any[]) {
        log.info('readyToShow called with args:', args)
        const result = this.instance.readyToShow(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('readyToShow called  promise result:', result)
                return res
            })
        }
        log.info('readyToShow called result:', result)
        return result
    }
    setLogLevel(...args: any[]) {
        log.info('setLogLevel called with args:', args)
        const result = this.instance.setLogLevel(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setLogLevel called  promise result:', result)
                return res
            })
        }
        log.info('setLogLevel called result:', result)
        return result
    }
};
export const getNodeIQQNTWrapperEngine = (engine: any): any => {
    return class extends NodeIQQNTWrapperEngine {
        static get() {
            log.info('get called')
            const instance = engine.get()
            if (!this.singleton) {
                this.singleton = new this(instance)
            }
            return this.singleton
        }
    }
}