import { useLogger } from "../../common/log";
const log = useLogger('Wrapper/NodeIKernelRemotingService')
export class NodeIKernelRemotingService {
    protected static singleton?: any = undefined
    protected instance: any
    constructor(instance: any) {
        log.info('constructor called')
        this.instance = instance
    }
    accept(...args: any[]) {
        log.info('accept called with args:', args)
        return this.instance.accept(...args)
    }
    addKernelRemotingListener(...args: any[]) {
        log.info('addKernelRemotingListener called with args:', args)
        return this.instance.addKernelRemotingListener(...args)
    }
    removeKernelRemotingListener(...args: any[]) {
        log.info('removeKernelRemotingListener called with args:', args)
        return this.instance.removeKernelRemotingListener(...args)
    }
    setPenetrateBuffer(...args: any[]) {
        log.info('setPenetrateBuffer called with args:', args)
        return this.instance.setPenetrateBuffer(...args)
    }
    startRemotingClient(...args: any[]) {
        log.info('startRemotingClient called with args:', args)
        return this.instance.startRemotingClient(...args)
    }
    startRemotingInvite(...args: any[]) {
        log.info('startRemotingInvite called with args:', args)
        return this.instance.startRemotingInvite(...args)
    }
    stopRemoting(...args: any[]) {
        log.info('stopRemoting called with args:', args)
        return this.instance.stopRemoting(...args)
    }
};
export const getNodeIKernelRemotingService = (engine: any): any => {
    return class extends NodeIKernelRemotingService {
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