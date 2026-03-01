import { useLogger } from "../../common/log";

const log = useLogger('Wrapper/NodeIKernelLockService')
export class NodeIKernelLockService {
    protected static singleton?: any = undefined
    protected instance: any
    constructor(instance: any) {
        log.info('constructor called')
        this.instance = instance
    }
    addKernelLockListener(...args: any[]) {
        log.info('addKernelLockListener called with args:', args)
        const result = this.instance.addKernelLockListener(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('addKernelLockListener called  promise result:', result)
                return res
            })
        }
        log.info('addKernelLockListener called result:', result)
        return result
    }
    lockDesktopQQ(...args: any[]) {
        log.info('lockDesktopQQ called with args:', args)
        const result = this.instance.lockDesktopQQ(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('lockDesktopQQ called  promise result:', result)
                return res
            })
        }
        log.info('lockDesktopQQ called result:', result)
        return result
    }
    removeKernelLockListener(...args: any[]) {
        log.info('removeKernelLockListener called with args:', args)
        const result = this.instance.removeKernelLockListener(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('removeKernelLockListener called  promise result:', result)
                return res
            })
        }
        log.info('removeKernelLockListener called result:', result)
        return result
    }
    unlockDesktopQQToMobile(...args: any[]) {
        log.info('unlockDesktopQQToMobile called with args:', args)
        const result = this.instance.unlockDesktopQQToMobile(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('unlockDesktopQQToMobile called  promise result:', result)
                return res
            })
        }
        log.info('unlockDesktopQQToMobile called result:', result)
        return result
    }
};
export const getNodeIKernelLockService = (engine: any): any => {
    return class extends NodeIKernelLockService {
        
    }
}