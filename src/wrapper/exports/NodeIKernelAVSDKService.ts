import { useLogger } from "../../common/log";

const log = useLogger('Wrapper/NodeIKernelAVSDKService')
export class NodeIKernelAVSDKService {
    protected static singleton?: any = undefined
    protected instance: any
    constructor(instance: any) {
        log.info('constructor called')
        this.instance = instance
    }
    addKernelAVSDKListener(...args: any[]) {
        log.info('addKernelAVSDKListener called with args:', args)
        const result = this.instance.addKernelAVSDKListener(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('addKernelAVSDKListener called  promise result:', result)
                return res
            })
        }
        log.info('addKernelAVSDKListener called result:', result)
        return result
    }
    allowAlbumNotify(...args: any[]) {
        log.info('allowAlbumNotify called with args:', args)
        const result = this.instance.allowAlbumNotify(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('allowAlbumNotify called  promise result:', result)
                return res
            })
        }
        log.info('allowAlbumNotify called result:', result)
        return result
    }
    checkDependencies(...args: any[]) {
        log.info('checkDependencies called with args:', args)
        const result = this.instance.checkDependencies(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('checkDependencies called  promise result:', result)
                return res
            })
        }
        log.info('checkDependencies called result:', result)
        return result
    }
    removeKernelAVSDKListener(...args: any[]) {
        log.info('removeKernelAVSDKListener called with args:', args)
        const result = this.instance.removeKernelAVSDKListener(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('removeKernelAVSDKListener called  promise result:', result)
                return res
            })
        }
        log.info('removeKernelAVSDKListener called result:', result)
        return result
    }
    sendGroupVideoJsonBuffer(...args: any[]) {
        log.info('sendGroupVideoJsonBuffer called with args:', args)
        const result = this.instance.sendGroupVideoJsonBuffer(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('sendGroupVideoJsonBuffer called  promise result:', result)
                return res
            })
        }
        log.info('sendGroupVideoJsonBuffer called result:', result)
        return result
    }
    setActionFromAVSDK(...args: any[]) {
        log.info('setActionFromAVSDK called with args:', args)
        const result = this.instance.setActionFromAVSDK(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setActionFromAVSDK called  promise result:', result)
                return res
            })
        }
        log.info('setActionFromAVSDK called result:', result)
        return result
    }
    startGroupVideoCmdRequestFromAVSDK(...args: any[]) {
        log.info('startGroupVideoCmdRequestFromAVSDK called with args:', args)
        const result = this.instance.startGroupVideoCmdRequestFromAVSDK(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('startGroupVideoCmdRequestFromAVSDK called  promise result:', result)
                return res
            })
        }
        log.info('startGroupVideoCmdRequestFromAVSDK called result:', result)
        return result
    }
};
export const getNodeIKernelAVSDKService = (engine: any): any => {
    return class extends NodeIKernelAVSDKService {
        
    }
}