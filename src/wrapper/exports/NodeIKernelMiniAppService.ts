import { useLogger } from "../../common/log";

const log = useLogger('Wrapper/NodeIKernelMiniAppService')
export class NodeIKernelMiniAppService {
    protected static singleton?: any = undefined
    protected instance: any
    constructor(instance: any) {
        log.info('constructor called')
        this.instance = instance
    }
    addKernelMiniAppListener(...args: any[]) {
        log.info('addKernelMiniAppListener called with args:', args)
        const result = this.instance.addKernelMiniAppListener(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('addKernelMiniAppListener called  promise result:', result)
                return res
            })
        }
        log.info('addKernelMiniAppListener called result:', result)
        return result
    }
    removeKernelMiniAppListener(...args: any[]) {
        log.info('removeKernelMiniAppListener called with args:', args)
        const result = this.instance.removeKernelMiniAppListener(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('removeKernelMiniAppListener called  promise result:', result)
                return res
            })
        }
        log.info('removeKernelMiniAppListener called result:', result)
        return result
    }
};
export const getNodeIKernelMiniAppService = (engine: any): any => {
    return class extends NodeIKernelMiniAppService {
        
    }
}