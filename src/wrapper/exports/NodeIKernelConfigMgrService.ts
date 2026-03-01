import { useLogger } from "../../common/log";

const log = useLogger('Wrapper/NodeIKernelConfigMgrService')
export class NodeIKernelConfigMgrService {
    protected static singleton?: any = undefined
    protected instance: any
    constructor(instance: any) {
        log.info('constructor called')
        this.instance = instance
    }
    addKernelConfigMgrListener(...args: any[]) {
        log.info('addKernelConfigMgrListener called with args:', args)
        const result = this.instance.addKernelConfigMgrListener(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('addKernelConfigMgrListener called  promise result:', result)
                return res
            })
        }
        log.info('addKernelConfigMgrListener called result:', result)
        return result
    }
    getConfigMgrInfo(...args: any[]) {
        log.info('getConfigMgrInfo called with args:', args)
        const result = this.instance.getConfigMgrInfo(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getConfigMgrInfo called  promise result:', result)
                return res
            })
        }
        log.info('getConfigMgrInfo called result:', result)
        return result
    }
    getConfigMgrInfoTaskId(...args: any[]) {
        log.info('getConfigMgrInfoTaskId called with args:', args)
        const result = this.instance.getConfigMgrInfoTaskId(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getConfigMgrInfoTaskId called  promise result:', result)
                return res
            })
        }
        log.info('getConfigMgrInfoTaskId called result:', result)
        return result
    }
    getVoiceChannelMaxPeopleCount(...args: any[]) {
        log.info('getVoiceChannelMaxPeopleCount called with args:', args)
        const result = this.instance.getVoiceChannelMaxPeopleCount(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getVoiceChannelMaxPeopleCount called  promise result:', result)
                return res
            })
        }
        log.info('getVoiceChannelMaxPeopleCount called result:', result)
        return result
    }
    loadSideBarConfig(...args: any[]) {
        log.info('loadSideBarConfig called with args:', args)
        const result = this.instance.loadSideBarConfig(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('loadSideBarConfig called  promise result:', result)
                return res
            })
        }
        log.info('loadSideBarConfig called result:', result)
        return result
    }
    removeKernelConfigMgrListener(...args: any[]) {
        log.info('removeKernelConfigMgrListener called with args:', args)
        const result = this.instance.removeKernelConfigMgrListener(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('removeKernelConfigMgrListener called  promise result:', result)
                return res
            })
        }
        log.info('removeKernelConfigMgrListener called result:', result)
        return result
    }
    saveSideBarConfig(...args: any[]) {
        log.info('saveSideBarConfig called with args:', args)
        const result = this.instance.saveSideBarConfig(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('saveSideBarConfig called  promise result:', result)
                return res
            })
        }
        log.info('saveSideBarConfig called result:', result)
        return result
    }
    updateConfigMgrInfoTaskId(...args: any[]) {
        log.info('updateConfigMgrInfoTaskId called with args:', args)
        const result = this.instance.updateConfigMgrInfoTaskId(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('updateConfigMgrInfoTaskId called  promise result:', result)
                return res
            })
        }
        log.info('updateConfigMgrInfoTaskId called result:', result)
        return result
    }
};
export const getNodeIKernelConfigMgrService = (engine: any): any => {
    return class extends NodeIKernelConfigMgrService {
        
    }
}