import { useLogger } from "../../common/log";

const log = useLogger('Wrapper/NodeIShareToWechatService')
export class NodeIShareToWechatService {
    protected static singleton?: any = undefined
    protected instance: any
    constructor(instance: any) {
        log.info('constructor called')
        this.instance = instance
    }
    addKernelShareListener(...args: any[]) {
        log.info('addKernelShareListener called with args:', args)
        const result = this.instance.addKernelShareListener(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('addKernelShareListener called  promise result:', result)
                return res
            })
        }
        log.info('addKernelShareListener called result:', result)
        return result
    }
    isCanShareToWechat(...args: any[]) {
        log.info('isCanShareToWechat called with args:', args)
        const result = this.instance.isCanShareToWechat(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('isCanShareToWechat called  promise result:', result)
                return res
            })
        }
        log.info('isCanShareToWechat called result:', result)
        return result
    }
    removeKernelShareListener(...args: any[]) {
        log.info('removeKernelShareListener called with args:', args)
        const result = this.instance.removeKernelShareListener(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('removeKernelShareListener called  promise result:', result)
                return res
            })
        }
        log.info('removeKernelShareListener called result:', result)
        return result
    }
    shareMsgToWechat(...args: any[]) {
        log.info('shareMsgToWechat called with args:', args)
        const result = this.instance.shareMsgToWechat(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('shareMsgToWechat called  promise result:', result)
                return res
            })
        }
        log.info('shareMsgToWechat called result:', result)
        return result
    }
};
export const getNodeIShareToWechatService = (engine: any): any => {
    return class extends NodeIShareToWechatService {
        
    }
}