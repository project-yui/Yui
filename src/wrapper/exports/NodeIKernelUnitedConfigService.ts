import { useLogger } from "../../common/log";
const log = useLogger('Wrapper/NodeIKernelUnitedConfigService')
export class NodeIKernelUnitedConfigService {
    protected static singleton?: any = undefined
    protected instance: any
    constructor(instance: any) {
        log.info('constructor called')
        this.instance = instance
    }
    addKernelUnitedConfigListener(...args: any[]) {
        log.info('addKernelUnitedConfigListener called with args:', args)
        return this.instance.addKernelUnitedConfigListener(...args)
    }
    fetchUnitedCommendConfig(...args: any[]) {
        log.info('fetchUnitedCommendConfig called with args:', args)
        return this.instance.fetchUnitedCommendConfig(...args)
    }
    fetchUnitedSwitchConfig(...args: any[]) {
        log.info('fetchUnitedSwitchConfig called with args:', args)
        return this.instance.fetchUnitedSwitchConfig(...args)
    }
    isUnitedConfigSwitchOn(...args: any[]) {
        log.info('isUnitedConfigSwitchOn called with args:', args)
        return this.instance.isUnitedConfigSwitchOn(...args)
    }
    loadUnitedConfig(...args: any[]) {
        log.info('loadUnitedConfig called with args:', args)
        return this.instance.loadUnitedConfig(...args)
    }
    registerUnitedConfigPushGroupList(...args: any[]) {
        log.info('registerUnitedConfigPushGroupList called with args:', JSON.stringify(args))
        return this.instance.registerUnitedConfigPushGroupList(...args)
    }
    removeKernelUnitedConfigListener(...args: any[]) {
        log.info('removeKernelUnitedConfigListener called with args:', args)
        return this.instance.removeKernelUnitedConfigListener(...args)
    }
};
export const getNodeIKernelUnitedConfigService = (engine: any): any => {
    return class extends NodeIKernelUnitedConfigService {
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