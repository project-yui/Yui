import { useLogger } from "../../common/log";

const log = useLogger('Wrapper/NodeIKernelHandOffService')
export class NodeIKernelHandOffService {
    protected static singleton?: any = undefined
    protected instance: any
    constructor(instance: any) {
        log.info('constructor called')
        this.instance = instance
    }
    addKernelHandOffListener(...args: any[]) {
        log.info('addKernelHandOffListener called with args:', args)
        const result = this.instance.addKernelHandOffListener(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('addKernelHandOffListener called  promise result:', result)
                return res
            })
        }
        log.info('addKernelHandOffListener called result:', result)
        return result
    }
    changeHandOffActivities(...args: any[]) {
        log.info('changeHandOffActivities called with args:', args)
        const result = this.instance.changeHandOffActivities(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('changeHandOffActivities called  promise result:', result)
                return res
            })
        }
        log.info('changeHandOffActivities called result:', result)
        return result
    }
    getHandOffActivities(...args: any[]) {
        log.info('getHandOffActivities called with args:', args)
        const result = this.instance.getHandOffActivities(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getHandOffActivities called  promise result:', result)
                return res
            })
        }
        log.info('getHandOffActivities called result:', result)
        return result
    }
    removeKernelHandOffListener(...args: any[]) {
        log.info('removeKernelHandOffListener called with args:', args)
        const result = this.instance.removeKernelHandOffListener(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('removeKernelHandOffListener called  promise result:', result)
                return res
            })
        }
        log.info('removeKernelHandOffListener called result:', result)
        return result
    }
    reportData(...args: any[]) {
        log.info('reportData called with args:', args)
        const result = this.instance.reportData(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('reportData called  promise result:', result)
                return res
            })
        }
        log.info('reportData called result:', result)
        return result
    }
    sendCapsulePanelActivities(...args: any[]) {
        log.info('sendCapsulePanelActivities called with args:', args)
        const result = this.instance.sendCapsulePanelActivities(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('sendCapsulePanelActivities called  promise result:', result)
                return res
            })
        }
        log.info('sendCapsulePanelActivities called result:', result)
        return result
    }
};
export const getNodeIKernelHandOffService = (engine: any): any => {
    return class extends NodeIKernelHandOffService {
        
    }
}