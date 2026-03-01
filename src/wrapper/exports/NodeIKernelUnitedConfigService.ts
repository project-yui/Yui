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
        const result = this.instance.addKernelUnitedConfigListener(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('addKernelUnitedConfigListener called  promise result:', result)
                return res
            })
        }
        log.info('addKernelUnitedConfigListener called result:', result)
        return result
    }
    fetchUnitedCommendConfig(...args: any[]) {
        log.info('fetchUnitedCommendConfig called with args:', args)
        const result = this.instance.fetchUnitedCommendConfig(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('fetchUnitedCommendConfig called  promise result:', result)
                return res
            })
        }
        log.info('fetchUnitedCommendConfig called result:', result)
        return result
    }
    fetchUnitedSwitchConfig(...args: any[]) {
        log.info('fetchUnitedSwitchConfig called with args:', args)
        const result = this.instance.fetchUnitedSwitchConfig(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('fetchUnitedSwitchConfig called  promise result:', result)
                return res
            })
        }
        log.info('fetchUnitedSwitchConfig called result:', result)
        return result
    }
    isUnitedConfigSwitchOn(...args: any[]) {
        log.info('isUnitedConfigSwitchOn called with args:', args)
        const result = this.instance.isUnitedConfigSwitchOn(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('isUnitedConfigSwitchOn called  promise result:', result)
                return res
            })
        }
        log.info('isUnitedConfigSwitchOn called result:', result)
        return result
    }
    loadUnitedConfig(...args: any[]) {
        log.info('loadUnitedConfig called with args:', args)
        const result = this.instance.loadUnitedConfig(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('loadUnitedConfig called  promise result:', result)
                return res
            })
        }
        log.info('loadUnitedConfig called result:', result)
        return result
    }
    registerUnitedConfigPushGroupList(...args: any[]) {
        log.info('registerUnitedConfigPushGroupList called with args:', args)
        const result = this.instance.registerUnitedConfigPushGroupList(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('registerUnitedConfigPushGroupList called  promise result:', result)
                return res
            })
        }
        log.info('registerUnitedConfigPushGroupList called result:', result)
        return result
    }
    removeKernelUnitedConfigListener(...args: any[]) {
        log.info('removeKernelUnitedConfigListener called with args:', args)
        const result = this.instance.removeKernelUnitedConfigListener(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('removeKernelUnitedConfigListener called  promise result:', result)
                return res
            })
        }
        log.info('removeKernelUnitedConfigListener called result:', result)
        return result
    }
};
export const getNodeIKernelUnitedConfigService = (engine: any): any => {
    return class extends NodeIKernelUnitedConfigService {
        
    }
}