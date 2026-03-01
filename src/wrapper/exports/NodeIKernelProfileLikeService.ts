import { useLogger } from "../../common/log";

const log = useLogger('Wrapper/NodeIKernelProfileLikeService')
export class NodeIKernelProfileLikeService {
    protected static singleton?: any = undefined
    protected instance: any
    constructor(instance: any) {
        log.info('constructor called')
        this.instance = instance
    }
    addKernelProfileLikeListener(...args: any[]) {
        log.info('addKernelProfileLikeListener called with args:', args)
        const result = this.instance.addKernelProfileLikeListener(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('addKernelProfileLikeListener called  promise result:', result)
                return res
            })
        }
        log.info('addKernelProfileLikeListener called result:', result)
        return result
    }
    getBuddyProfileLike(...args: any[]) {
        log.info('getBuddyProfileLike called with args:', args)
        const result = this.instance.getBuddyProfileLike(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getBuddyProfileLike called  promise result:', result)
                return res
            })
        }
        log.info('getBuddyProfileLike called result:', result)
        return result
    }
    getProfileLikeScidResourceInfo(...args: any[]) {
        log.info('getProfileLikeScidResourceInfo called with args:', args)
        const result = this.instance.getProfileLikeScidResourceInfo(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getProfileLikeScidResourceInfo called  promise result:', result)
                return res
            })
        }
        log.info('getProfileLikeScidResourceInfo called result:', result)
        return result
    }
    removeKernelProfileLikeListener(...args: any[]) {
        log.info('removeKernelProfileLikeListener called with args:', args)
        const result = this.instance.removeKernelProfileLikeListener(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('removeKernelProfileLikeListener called  promise result:', result)
                return res
            })
        }
        log.info('removeKernelProfileLikeListener called result:', result)
        return result
    }
    setBuddyProfileLike(...args: any[]) {
        log.info('setBuddyProfileLike called with args:', args)
        const result = this.instance.setBuddyProfileLike(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setBuddyProfileLike called  promise result:', result)
                return res
            })
        }
        log.info('setBuddyProfileLike called result:', result)
        return result
    }
};
export const getNodeIKernelProfileLikeService = (engine: any): any => {
    return class extends NodeIKernelProfileLikeService {
        
    }
}