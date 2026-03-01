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
        const result = this.instance.accept(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('accept called  promise result:', result)
                return res
            })
        }
        log.info('accept called result:', result)
        return result
    }
    addKernelRemotingListener(...args: any[]) {
        log.info('addKernelRemotingListener called with args:', args)
        const result = this.instance.addKernelRemotingListener(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('addKernelRemotingListener called  promise result:', result)
                return res
            })
        }
        log.info('addKernelRemotingListener called result:', result)
        return result
    }
    removeKernelRemotingListener(...args: any[]) {
        log.info('removeKernelRemotingListener called with args:', args)
        const result = this.instance.removeKernelRemotingListener(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('removeKernelRemotingListener called  promise result:', result)
                return res
            })
        }
        log.info('removeKernelRemotingListener called result:', result)
        return result
    }
    setPenetrateBuffer(...args: any[]) {
        log.info('setPenetrateBuffer called with args:', args)
        const result = this.instance.setPenetrateBuffer(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setPenetrateBuffer called  promise result:', result)
                return res
            })
        }
        log.info('setPenetrateBuffer called result:', result)
        return result
    }
    startRemotingClient(...args: any[]) {
        log.info('startRemotingClient called with args:', args)
        const result = this.instance.startRemotingClient(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('startRemotingClient called  promise result:', result)
                return res
            })
        }
        log.info('startRemotingClient called result:', result)
        return result
    }
    startRemotingInvite(...args: any[]) {
        log.info('startRemotingInvite called with args:', args)
        const result = this.instance.startRemotingInvite(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('startRemotingInvite called  promise result:', result)
                return res
            })
        }
        log.info('startRemotingInvite called result:', result)
        return result
    }
    stopRemoting(...args: any[]) {
        log.info('stopRemoting called with args:', args)
        const result = this.instance.stopRemoting(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('stopRemoting called  promise result:', result)
                return res
            })
        }
        log.info('stopRemoting called result:', result)
        return result
    }
};
export const getNodeIKernelRemotingService = (engine: any): any => {
    return class extends NodeIKernelRemotingService {
        
    }
}