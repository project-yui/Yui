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
        return this.instance.addAvatarListener(...args)
    }
    forceDownloadAvatar(...args: any[]) {
        log.info('forceDownloadAvatar called with args:', args)
        return this.instance.forceDownloadAvatar(...args)
    }
    forceDownloadAvatarByUin(...args: any[]) {
        log.info('forceDownloadAvatarByUin called with args:', args)
        return this.instance.forceDownloadAvatarByUin(...args)
    }
    forceDownloadGroupAvatar(...args: any[]) {
        log.info('forceDownloadGroupAvatar called with args:', args)
        return this.instance.forceDownloadGroupAvatar(...args)
    }
    forceDownloadGroupPortrait(...args: any[]) {
        log.info('forceDownloadGroupPortrait called with args:', args)
        return this.instance.forceDownloadGroupPortrait(...args)
    }
    getAvatarPath(...args: any[]) {
        log.info('getAvatarPath called with args:', args)
        return this.instance.getAvatarPath(...args)
    }
    getAvatarPathByUin(...args: any[]) {
        log.info('getAvatarPathByUin called with args:', args)
        return this.instance.getAvatarPathByUin(...args)
    }
    getAvatarPaths(...args: any[]) {
        log.info('getAvatarPaths called with args:', args)
        return this.instance.getAvatarPaths(...args)
    }
    getConfGroupAvatarPath(...args: any[]) {
        log.info('getConfGroupAvatarPath called with args:', args)
        return this.instance.getConfGroupAvatarPath(...args)
    }
    getConfGroupAvatarPaths(...args: any[]) {
        log.info('getConfGroupAvatarPaths called with args:', args)
        return this.instance.getConfGroupAvatarPaths(...args)
    }
    getGroupAvatarPath(...args: any[]) {
        log.info('getGroupAvatarPath called with args:', args)
        return this.instance.getGroupAvatarPath(...args)
    }
    getGroupAvatarPaths(...args: any[]) {
        log.info('getGroupAvatarPaths called with args:', args)
        return this.instance.getGroupAvatarPaths(...args)
    }
    getGroupPortraitPath(...args: any[]) {
        log.info('getGroupPortraitPath called with args:', args)
        return this.instance.getGroupPortraitPath(...args)
    }
    removeAvatarListener(...args: any[]) {
        log.info('removeAvatarListener called with args:', args)
        return this.instance.removeAvatarListener(...args)
    }
};
export const getNodeIKernelAvatarService = (engine: any): any => {
    return class extends NodeIKernelAvatarService {
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