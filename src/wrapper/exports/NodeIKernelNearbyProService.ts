import { useLogger } from "../../common/log";

const log = useLogger('Wrapper/NodeIKernelNearbyProService')
export class NodeIKernelNearbyProService {
    protected static singleton?: any = undefined
    protected instance: any
    constructor(instance: any) {
        log.info('constructor called')
        this.instance = instance
    }
    addKernelNearbyProListener(...args: any[]) {
        log.info('addKernelNearbyProListener called with args:', args)
        const result = this.instance.addKernelNearbyProListener(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('addKernelNearbyProListener called  promise result:', result)
                return res
            })
        }
        log.info('addKernelNearbyProListener called result:', result)
        return result
    }
    fetchNearbyProUserInfo(...args: any[]) {
        log.info('fetchNearbyProUserInfo called with args:', args)
        const result = this.instance.fetchNearbyProUserInfo(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('fetchNearbyProUserInfo called  promise result:', result)
                return res
            })
        }
        log.info('fetchNearbyProUserInfo called result:', result)
        return result
    }
    getNearbyAllContactsUnreadCnt(...args: any[]) {
        log.info('getNearbyAllContactsUnreadCnt called with args:', args)
        const result = this.instance.getNearbyAllContactsUnreadCnt(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getNearbyAllContactsUnreadCnt called  promise result:', result)
                return res
            })
        }
        log.info('getNearbyAllContactsUnreadCnt called result:', result)
        return result
    }
    removeKernelNearbyProListener(...args: any[]) {
        log.info('removeKernelNearbyProListener called with args:', args)
        const result = this.instance.removeKernelNearbyProListener(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('removeKernelNearbyProListener called  promise result:', result)
                return res
            })
        }
        log.info('removeKernelNearbyProListener called result:', result)
        return result
    }
    setCommonExtInfo(...args: any[]) {
        log.info('setCommonExtInfo called with args:', args)
        const result = this.instance.setCommonExtInfo(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setCommonExtInfo called  promise result:', result)
                return res
            })
        }
        log.info('setCommonExtInfo called result:', result)
        return result
    }
};
export const getNodeIKernelNearbyProService = (engine: any): any => {
    return class extends NodeIKernelNearbyProService {
        
    }
}