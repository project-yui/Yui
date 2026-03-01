import { useLogger } from "../../common/log";

const log = useLogger('Wrapper/NodeIKernelAvatarService')
export class NodeIKernelAvatarService {
    protected static singleton?: any = undefined
    protected instance: any
    constructor(instance: any) {
        log.info('constructor called')
        this.instance = instance
    }
    addAvatarListener(...args: any[]) {
        log.info('addAvatarListener called with args:', args)
        const result = this.instance.addAvatarListener(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('addAvatarListener called  promise result:', result)
                return res
            })
        }
        log.info('addAvatarListener called result:', result)
        return result
    }
    forceDownloadAvatar(...args: any[]) {
        log.info('forceDownloadAvatar called with args:', args)
        const result = this.instance.forceDownloadAvatar(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('forceDownloadAvatar called  promise result:', result)
                return res
            })
        }
        log.info('forceDownloadAvatar called result:', result)
        return result
    }
    forceDownloadAvatarByUin(...args: any[]) {
        log.info('forceDownloadAvatarByUin called with args:', args)
        const result = this.instance.forceDownloadAvatarByUin(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('forceDownloadAvatarByUin called  promise result:', result)
                return res
            })
        }
        log.info('forceDownloadAvatarByUin called result:', result)
        return result
    }
    forceDownloadGroupAvatar(...args: any[]) {
        log.info('forceDownloadGroupAvatar called with args:', args)
        const result = this.instance.forceDownloadGroupAvatar(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('forceDownloadGroupAvatar called  promise result:', result)
                return res
            })
        }
        log.info('forceDownloadGroupAvatar called result:', result)
        return result
    }
    forceDownloadGroupPortrait(...args: any[]) {
        log.info('forceDownloadGroupPortrait called with args:', args)
        const result = this.instance.forceDownloadGroupPortrait(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('forceDownloadGroupPortrait called  promise result:', result)
                return res
            })
        }
        log.info('forceDownloadGroupPortrait called result:', result)
        return result
    }
    getAvatarPath(...args: any[]) {
        log.info('getAvatarPath called with args:', args)
        const result = this.instance.getAvatarPath(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getAvatarPath called  promise result:', result)
                return res
            })
        }
        log.info('getAvatarPath called result:', result)
        return result
    }
    getAvatarPathByUin(...args: any[]) {
        log.info('getAvatarPathByUin called with args:', args)
        const result = this.instance.getAvatarPathByUin(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getAvatarPathByUin called  promise result:', result)
                return res
            })
        }
        log.info('getAvatarPathByUin called result:', result)
        return result
    }
    getAvatarPaths(...args: any[]) {
        log.info('getAvatarPaths called with args:', args)
        const result = this.instance.getAvatarPaths(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getAvatarPaths called  promise result:', result)
                return res
            })
        }
        log.info('getAvatarPaths called result:', result)
        return result
    }
    getConfGroupAvatarPath(...args: any[]) {
        log.info('getConfGroupAvatarPath called with args:', args)
        const result = this.instance.getConfGroupAvatarPath(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getConfGroupAvatarPath called  promise result:', result)
                return res
            })
        }
        log.info('getConfGroupAvatarPath called result:', result)
        return result
    }
    getConfGroupAvatarPaths(...args: any[]) {
        log.info('getConfGroupAvatarPaths called with args:', args)
        const result = this.instance.getConfGroupAvatarPaths(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getConfGroupAvatarPaths called  promise result:', result)
                return res
            })
        }
        log.info('getConfGroupAvatarPaths called result:', result)
        return result
    }
    getGroupAvatarPath(...args: any[]) {
        log.info('getGroupAvatarPath called with args:', args)
        const result = this.instance.getGroupAvatarPath(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getGroupAvatarPath called  promise result:', result)
                return res
            })
        }
        log.info('getGroupAvatarPath called result:', result)
        return result
    }
    getGroupAvatarPaths(...args: any[]) {
        log.info('getGroupAvatarPaths called with args:', args)
        const result = this.instance.getGroupAvatarPaths(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getGroupAvatarPaths called  promise result:', result)
                return res
            })
        }
        log.info('getGroupAvatarPaths called result:', result)
        return result
    }
    getGroupPortraitPath(...args: any[]) {
        log.info('getGroupPortraitPath called with args:', args)
        const result = this.instance.getGroupPortraitPath(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getGroupPortraitPath called  promise result:', result)
                return res
            })
        }
        log.info('getGroupPortraitPath called result:', result)
        return result
    }
    removeAvatarListener(...args: any[]) {
        log.info('removeAvatarListener called with args:', args)
        const result = this.instance.removeAvatarListener(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('removeAvatarListener called  promise result:', result)
                return res
            })
        }
        log.info('removeAvatarListener called result:', result)
        return result
    }
};
export const getNodeIKernelAvatarService = (engine: any): any => {
    return class extends NodeIKernelAvatarService {
        
    }
}