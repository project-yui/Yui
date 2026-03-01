import { useLogger } from "../../common/log";

const log = useLogger('Wrapper/NodeIKernelFileBridgeHostService')
export class NodeIKernelFileBridgeHostService {
    protected static singleton?: any = undefined
    protected instance: any
    constructor(instance: any) {
        log.info('constructor called')
        this.instance = instance
    }
    addKernelFileBridgeHostListener(...args: any[]) {
        log.info('addKernelFileBridgeHostListener called with args:', args)
        const result = this.instance.addKernelFileBridgeHostListener(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('addKernelFileBridgeHostListener called  promise result:', result)
                return res
            })
        }
        log.info('addKernelFileBridgeHostListener called result:', result)
        return result
    }
    disconnect(...args: any[]) {
        log.info('disconnect called with args:', args)
        const result = this.instance.disconnect(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('disconnect called  promise result:', result)
                return res
            })
        }
        log.info('disconnect called result:', result)
        return result
    }
    isLocalPasswordSet(...args: any[]) {
        log.info('isLocalPasswordSet called with args:', args)
        const result = this.instance.isLocalPasswordSet(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('isLocalPasswordSet called  promise result:', result)
                return res
            })
        }
        log.info('isLocalPasswordSet called result:', result)
        return result
    }
    isTransferingFile(...args: any[]) {
        log.info('isTransferingFile called with args:', args)
        const result = this.instance.isTransferingFile(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('isTransferingFile called  promise result:', result)
                return res
            })
        }
        log.info('isTransferingFile called result:', result)
        return result
    }
    removeKernelFileBridgeHostListener(...args: any[]) {
        log.info('removeKernelFileBridgeHostListener called with args:', args)
        const result = this.instance.removeKernelFileBridgeHostListener(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('removeKernelFileBridgeHostListener called  promise result:', result)
                return res
            })
        }
        log.info('removeKernelFileBridgeHostListener called result:', result)
        return result
    }
    resetLocalPassword(...args: any[]) {
        log.info('resetLocalPassword called with args:', args)
        const result = this.instance.resetLocalPassword(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('resetLocalPassword called  promise result:', result)
                return res
            })
        }
        log.info('resetLocalPassword called result:', result)
        return result
    }
    setLocalPassword(...args: any[]) {
        log.info('setLocalPassword called with args:', args)
        const result = this.instance.setLocalPassword(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setLocalPassword called  promise result:', result)
                return res
            })
        }
        log.info('setLocalPassword called result:', result)
        return result
    }
};
export const getNodeIKernelFileBridgeHostService = (engine: any): any => {
    return class extends NodeIKernelFileBridgeHostService {
        
    }
}