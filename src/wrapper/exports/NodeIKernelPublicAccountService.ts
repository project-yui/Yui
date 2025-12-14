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
        return this.instance.addListener(...args)
    }
    follow(...args: any[]) {
        log.info('follow called with args:', args)
        return this.instance.follow(...args)
    }
    getFollowList(...args: any[]) {
        log.info('getFollowList called with args:', args)
        return this.instance.getFollowList(...args)
    }
    removeListener(...args: any[]) {
        log.info('removeListener called with args:', args)
        return this.instance.removeListener(...args)
    }
    unfollow(...args: any[]) {
        log.info('unfollow called with args:', args)
        return this.instance.unfollow(...args)
    }
    getPublicAccountService(...args: any[]) {
        log.info('getPublicAccountService called with args:', args)
        return this.instance.getPublicAccountService(...args)
    }
};
export const getNodeIKernelPublicAccountService = (engine: any): any => {
    return class extends NodeIKernelPublicAccountService {
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