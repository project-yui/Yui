import { useLogger } from "../../common/log";

export const getNodeIQQNTWrapperEngine = (engine: any): any => {
    const log = useLogger('Wrapper/NodeIQQNTWrapperEngine')
    return class {
        private static singleton?: any = undefined
        private instance: any
        constructor(...args: any[]) {
            log.info('constructor called', args)
            this.instance = args[0]
        }
        getDeviceInfo() {
            log.info('getDeviceInfo called')
            const info = this.instance.getDeviceInfo()
            return info
        }
        getECDHService() {
            log.info('getECDHService called')
            const service = this.instance.getECDHService()
            return service
        }
        initWithDeskTopConfig(...args: any[]) {
            log.info('initWithDeskTopConfig called with args:', args)
            return this.instance.initWithDeskTopConfig(...args)
        }
        initWithMobileConfig(...args: any[]) {
            log.info('initWithMobileConfig called with args:', args)
            return this.instance.initWithMobileConfig(...args)
        }
        onSendSSOReply(...args: any[]) {
            log.info('onSendSSOReply called with args:', args)
            return this.instance.onSendSSOReply(...args)
        }
        static get() {
            log.info('get called')
            const instance = engine.get()
            if (!this.singleton) {
                this.singleton = new this(instance)
            }
            return this.singleton
        }
    };
}