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
        return this.instance.addKernelHandOffListener(...args)
    }
    changeHandOffActivities(...args: any[]) {
        log.info('changeHandOffActivities called with args:', args)
        return this.instance.changeHandOffActivities(...args)
    }
    deleteRecentHandOffActivities(...args: any[]) {
        log.info('deleteRecentHandOffActivities called with args:', args)
        return this.instance.deleteRecentHandOffActivities(...args)
    }
    getHandOffActivities(...args: any[]) {
        log.info('getHandOffActivities called with args:', args)
        return this.instance.getHandOffActivities(...args)
    }
    getRecentHandOffActivities(...args: any[]) {
        log.info('getRecentHandOffActivities called with args:', args)
        return this.instance.getRecentHandOffActivities(...args)
    }
    removeKernelHandOffListener(...args: any[]) {
        log.info('removeKernelHandOffListener called with args:', args)
        return this.instance.removeKernelHandOffListener(...args)
    }
    reportData(...args: any[]) {
        log.info('reportData called with args:', args)
        return this.instance.reportData(...args)
    }
    sendCapsulePanelActivities(...args: any[]) {
        log.info('sendCapsulePanelActivities called with args:', args)
        return this.instance.sendCapsulePanelActivities(...args)
    }
};
export const getNodeIKernelHandOffService = (engine: any): any => {
    return class extends NodeIKernelHandOffService {
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