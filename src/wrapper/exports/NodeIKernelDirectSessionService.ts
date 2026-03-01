import { useLogger } from "../../common/log";

const log = useLogger('Wrapper/NodeIKernelDirectSessionService')
export class NodeIKernelDirectSessionService {
    protected static singleton?: any = undefined
    protected instance: any
    constructor(instance: any) {
        log.info('constructor called')
        this.instance = instance
    }
    addKernelDirectSessionListener(...args: any[]) {
        log.info('addKernelDirectSessionListener called with args:', args)
        const result = this.instance.addKernelDirectSessionListener(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('addKernelDirectSessionListener called  promise result:', result)
                return res
            })
        }
        log.info('addKernelDirectSessionListener called result:', result)
        return result
    }
    deleteDirectMsgRecordsAndDirectSession(...args: any[]) {
        log.info('deleteDirectMsgRecordsAndDirectSession called with args:', args)
        const result = this.instance.deleteDirectMsgRecordsAndDirectSession(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('deleteDirectMsgRecordsAndDirectSession called  promise result:', result)
                return res
            })
        }
        log.info('deleteDirectMsgRecordsAndDirectSession called result:', result)
        return result
    }
    fetchDirectSessionList(...args: any[]) {
        log.info('fetchDirectSessionList called with args:', args)
        const result = this.instance.fetchDirectSessionList(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('fetchDirectSessionList called  promise result:', result)
                return res
            })
        }
        log.info('fetchDirectSessionList called result:', result)
        return result
    }
    getDirectSessionList(...args: any[]) {
        log.info('getDirectSessionList called with args:', args)
        const result = this.instance.getDirectSessionList(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getDirectSessionList called  promise result:', result)
                return res
            })
        }
        log.info('getDirectSessionList called result:', result)
        return result
    }
    getDirectSwitchStatus(...args: any[]) {
        log.info('getDirectSwitchStatus called with args:', args)
        const result = this.instance.getDirectSwitchStatus(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getDirectSwitchStatus called  promise result:', result)
                return res
            })
        }
        log.info('getDirectSwitchStatus called result:', result)
        return result
    }
    removeDirectSession(...args: any[]) {
        log.info('removeDirectSession called with args:', args)
        const result = this.instance.removeDirectSession(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('removeDirectSession called  promise result:', result)
                return res
            })
        }
        log.info('removeDirectSession called result:', result)
        return result
    }
    removeKernelDirectSessionListener(...args: any[]) {
        log.info('removeKernelDirectSessionListener called with args:', args)
        const result = this.instance.removeKernelDirectSessionListener(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('removeKernelDirectSessionListener called  promise result:', result)
                return res
            })
        }
        log.info('removeKernelDirectSessionListener called result:', result)
        return result
    }
};
export const getNodeIKernelDirectSessionService = (engine: any): any => {
    return class extends NodeIKernelDirectSessionService {
        
    }
}