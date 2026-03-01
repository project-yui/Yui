import { useLogger } from "../../common/log";

const log = useLogger('Wrapper/NodeIKernelWiFiPhotoHostService')
export class NodeIKernelWiFiPhotoHostService {
    protected static singleton?: any = undefined
    protected instance: any
    constructor(instance: any) {
        log.info('constructor called')
        this.instance = instance
    }
    acceptRequest(...args: any[]) {
        log.info('acceptRequest called with args:', args)
        const result = this.instance.acceptRequest(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('acceptRequest called  promise result:', result)
                return res
            })
        }
        log.info('acceptRequest called result:', result)
        return result
    }
    addKernelWiFiPhotoHostListener(...args: any[]) {
        log.info('addKernelWiFiPhotoHostListener called with args:', args)
        const result = this.instance.addKernelWiFiPhotoHostListener(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('addKernelWiFiPhotoHostListener called  promise result:', result)
                return res
            })
        }
        log.info('addKernelWiFiPhotoHostListener called result:', result)
        return result
    }
    checkIfInFilebridge(...args: any[]) {
        log.info('checkIfInFilebridge called with args:', args)
        const result = this.instance.checkIfInFilebridge(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('checkIfInFilebridge called  promise result:', result)
                return res
            })
        }
        log.info('checkIfInFilebridge called result:', result)
        return result
    }
    checkIfPendingRequest(...args: any[]) {
        log.info('checkIfPendingRequest called with args:', args)
        const result = this.instance.checkIfPendingRequest(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('checkIfPendingRequest called  promise result:', result)
                return res
            })
        }
        log.info('checkIfPendingRequest called result:', result)
        return result
    }
    disconnect(...args: any[]) {
        log.info('disconnect called with args:', args)
        const result = this.instance.disconnect(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('disconnect called  promise result:', result)
                return res
            })
        }
        log.info('disconnect called result:', result)
        return result
    }
    precheckIfDeviceSupportWiFiPhotoRequest(...args: any[]) {
        log.info('precheckIfDeviceSupportWiFiPhotoRequest called with args:', args)
        const result = this.instance.precheckIfDeviceSupportWiFiPhotoRequest(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('precheckIfDeviceSupportWiFiPhotoRequest called  promise result:', result)
                return res
            })
        }
        log.info('precheckIfDeviceSupportWiFiPhotoRequest called result:', result)
        return result
    }
    rejectRequest(...args: any[]) {
        log.info('rejectRequest called with args:', args)
        const result = this.instance.rejectRequest(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('rejectRequest called  promise result:', result)
                return res
            })
        }
        log.info('rejectRequest called result:', result)
        return result
    }
    removeKernelWiFiPhotoHostListener(...args: any[]) {
        log.info('removeKernelWiFiPhotoHostListener called with args:', args)
        const result = this.instance.removeKernelWiFiPhotoHostListener(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('removeKernelWiFiPhotoHostListener called  promise result:', result)
                return res
            })
        }
        log.info('removeKernelWiFiPhotoHostListener called result:', result)
        return result
    }
    requestVisitLocalAlbum(...args: any[]) {
        log.info('requestVisitLocalAlbum called with args:', args)
        const result = this.instance.requestVisitLocalAlbum(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('requestVisitLocalAlbum called  promise result:', result)
                return res
            })
        }
        log.info('requestVisitLocalAlbum called result:', result)
        return result
    }
    setAlbumAccessDelegate(...args: any[]) {
        log.info('setAlbumAccessDelegate called with args:', args)
        const result = this.instance.setAlbumAccessDelegate(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setAlbumAccessDelegate called  promise result:', result)
                return res
            })
        }
        log.info('setAlbumAccessDelegate called result:', result)
        return result
    }
};
export const getNodeIKernelWiFiPhotoHostService = (engine: any): any => {
    return class extends NodeIKernelWiFiPhotoHostService {
        
    }
}