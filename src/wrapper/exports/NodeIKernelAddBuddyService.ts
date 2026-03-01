import { useLogger } from "../../common/log";

const log = useLogger('Wrapper/NodeIKernelAddBuddyService')
export class NodeIKernelAddBuddyService {
    protected static singleton?: any = undefined
    protected instance: any
    constructor(instance: any) {
        log.info('constructor called')
        this.instance = instance
    }
    addBuddy(...args: any[]) {
        log.info('addBuddy called with args:', args)
        const result = this.instance.addBuddy(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('addBuddy called  promise result:', result)
                return res
            })
        }
        log.info('addBuddy called result:', result)
        return result
    }
    getAddBuddyRequestTag(...args: any[]) {
        log.info('getAddBuddyRequestTag called with args:', args)
        const result = this.instance.getAddBuddyRequestTag(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getAddBuddyRequestTag called  promise result:', result)
                return res
            })
        }
        log.info('getAddBuddyRequestTag called result:', result)
        return result
    }
    getBuddySetting(...args: any[]) {
        log.info('getBuddySetting called with args:', args)
        const result = this.instance.getBuddySetting(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getBuddySetting called  promise result:', result)
                return res
            })
        }
        log.info('getBuddySetting called result:', result)
        return result
    }
    getSmartInfo(...args: any[]) {
        log.info('getSmartInfo called with args:', args)
        const result = this.instance.getSmartInfo(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getSmartInfo called  promise result:', result)
                return res
            })
        }
        log.info('getSmartInfo called result:', result)
        return result
    }
    queryUinSafetyFlag(...args: any[]) {
        log.info('queryUinSafetyFlag called with args:', args)
        const result = this.instance.queryUinSafetyFlag(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('queryUinSafetyFlag called  promise result:', result)
                return res
            })
        }
        log.info('queryUinSafetyFlag called result:', result)
        return result
    }
    requestInfoByAccount(...args: any[]) {
        log.info('requestInfoByAccount called with args:', args)
        const result = this.instance.requestInfoByAccount(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('requestInfoByAccount called  promise result:', result)
                return res
            })
        }
        log.info('requestInfoByAccount called result:', result)
        return result
    }
};
export const getNodeIKernelAddBuddyService = (engine: any): any => {
    return class extends NodeIKernelAddBuddyService {
        
    }
}