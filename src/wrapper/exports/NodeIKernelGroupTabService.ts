import { useLogger } from "../../common/log";

const log = useLogger('Wrapper/NodeIKernelGroupTabService')
export class NodeIKernelGroupTabService {
    protected static singleton?: any = undefined
    protected instance: any
    constructor(instance: any) {
        log.info('constructor called')
        this.instance = instance
    }
    addListener(...args: any[]) {
        log.info('addListener called with args:', args)
        const result = this.instance.addListener(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('addListener called  promise result:', result)
                return res
            })
        }
        log.info('addListener called result:', result)
        return result
    }
    getGroupTab(...args: any[]) {
        log.info('getGroupTab called with args:', args)
        const result = this.instance.getGroupTab(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getGroupTab called  promise result:', result)
                return res
            })
        }
        log.info('getGroupTab called result:', result)
        return result
    }
    removeListener(...args: any[]) {
        log.info('removeListener called with args:', args)
        const result = this.instance.removeListener(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('removeListener called  promise result:', result)
                return res
            })
        }
        log.info('removeListener called result:', result)
        return result
    }
};
export const getNodeIKernelGroupTabService = (engine: any): any => {
    return class extends NodeIKernelGroupTabService {
        
    }
}