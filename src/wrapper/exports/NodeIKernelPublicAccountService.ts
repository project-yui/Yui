import { useLogger } from "../../common/log";

const log = useLogger('Wrapper/NodeIKernelPublicAccountService')
export class NodeIKernelPublicAccountService {
    protected static singleton?: any = undefined
    protected instance: any
    constructor(instance: any) {
        log.info('constructor called')
        this.instance = instance
    }
    addListener(...args: any[]) {
        log.info('addListener called with args:', args)
        const result = this.instance.addListener(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('addListener called  promise result:', result)
                return res
            })
        }
        log.info('addListener called result:', result)
        return result
    }
    follow(...args: any[]) {
        log.info('follow called with args:', args)
        const result = this.instance.follow(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('follow called  promise result:', result)
                return res
            })
        }
        log.info('follow called result:', result)
        return result
    }
    getFollowList(...args: any[]) {
        log.info('getFollowList called with args:', args)
        const result = this.instance.getFollowList(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getFollowList called  promise result:', result)
                return res
            })
        }
        log.info('getFollowList called result:', result)
        return result
    }
    removeListener(...args: any[]) {
        log.info('removeListener called with args:', args)
        const result = this.instance.removeListener(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('removeListener called  promise result:', result)
                return res
            })
        }
        log.info('removeListener called result:', result)
        return result
    }
    unfollow(...args: any[]) {
        log.info('unfollow called with args:', args)
        const result = this.instance.unfollow(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('unfollow called  promise result:', result)
                return res
            })
        }
        log.info('unfollow called result:', result)
        return result
    }
};
export const getNodeIKernelPublicAccountService = (engine: any): any => {
    return class extends NodeIKernelPublicAccountService {
        
    }
}