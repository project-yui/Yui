import { useLogger } from "../../common/log";

const log = useLogger('Wrapper/NodeIKernelCollectionService')
export class NodeIKernelCollectionService {
    protected static singleton?: any = undefined
    protected instance: any
    constructor(instance: any) {
        log.info('constructor called')
        this.instance = instance
    }
    addKernelCollectionListener(...args: any[]) {
        log.info('addKernelCollectionListener called with args:', args)
        const result = this.instance.addKernelCollectionListener(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('addKernelCollectionListener called  promise result:', result)
                return res
            })
        }
        log.info('addKernelCollectionListener called result:', result)
        return result
    }
    addMsgToCollection(...args: any[]) {
        log.info('addMsgToCollection called with args:', args)
        const result = this.instance.addMsgToCollection(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('addMsgToCollection called  promise result:', result)
                return res
            })
        }
        log.info('addMsgToCollection called result:', result)
        return result
    }
    cancelDownloadCollectionFile(...args: any[]) {
        log.info('cancelDownloadCollectionFile called with args:', args)
        const result = this.instance.cancelDownloadCollectionFile(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('cancelDownloadCollectionFile called  promise result:', result)
                return res
            })
        }
        log.info('cancelDownloadCollectionFile called result:', result)
        return result
    }
    collectionArkShare(...args: any[]) {
        log.info('collectionArkShare called with args:', args)
        const result = this.instance.collectionArkShare(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('collectionArkShare called  promise result:', result)
                return res
            })
        }
        log.info('collectionArkShare called result:', result)
        return result
    }
    collectionFastUpload(...args: any[]) {
        log.info('collectionFastUpload called with args:', args)
        const result = this.instance.collectionFastUpload(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('collectionFastUpload called  promise result:', result)
                return res
            })
        }
        log.info('collectionFastUpload called result:', result)
        return result
    }
    collectionFileForward(...args: any[]) {
        log.info('collectionFileForward called with args:', args)
        const result = this.instance.collectionFileForward(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('collectionFileForward called  promise result:', result)
                return res
            })
        }
        log.info('collectionFileForward called result:', result)
        return result
    }
    createNewCollectionItem(...args: any[]) {
        log.info('createNewCollectionItem called with args:', args)
        const result = this.instance.createNewCollectionItem(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('createNewCollectionItem called  promise result:', result)
                return res
            })
        }
        log.info('createNewCollectionItem called result:', result)
        return result
    }
    deleteCollectionItemList(...args: any[]) {
        log.info('deleteCollectionItemList called with args:', args)
        const result = this.instance.deleteCollectionItemList(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('deleteCollectionItemList called  promise result:', result)
                return res
            })
        }
        log.info('deleteCollectionItemList called result:', result)
        return result
    }
    downloadCollectionFile(...args: any[]) {
        log.info('downloadCollectionFile called with args:', args)
        const result = this.instance.downloadCollectionFile(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('downloadCollectionFile called  promise result:', result)
                return res
            })
        }
        log.info('downloadCollectionFile called result:', result)
        return result
    }
    downloadCollectionFileThumbPic(...args: any[]) {
        log.info('downloadCollectionFileThumbPic called with args:', args)
        const result = this.instance.downloadCollectionFileThumbPic(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('downloadCollectionFileThumbPic called  promise result:', result)
                return res
            })
        }
        log.info('downloadCollectionFileThumbPic called result:', result)
        return result
    }
    downloadCollectionPic(...args: any[]) {
        log.info('downloadCollectionPic called with args:', args)
        const result = this.instance.downloadCollectionPic(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('downloadCollectionPic called  promise result:', result)
                return res
            })
        }
        log.info('downloadCollectionPic called result:', result)
        return result
    }
    editCollectionItem(...args: any[]) {
        log.info('editCollectionItem called with args:', args)
        const result = this.instance.editCollectionItem(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('editCollectionItem called  promise result:', result)
                return res
            })
        }
        log.info('editCollectionItem called result:', result)
        return result
    }
    editCollectionItemAfterFastUpload(...args: any[]) {
        log.info('editCollectionItemAfterFastUpload called with args:', args)
        const result = this.instance.editCollectionItemAfterFastUpload(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('editCollectionItemAfterFastUpload called  promise result:', result)
                return res
            })
        }
        log.info('editCollectionItemAfterFastUpload called result:', result)
        return result
    }
    getCollectionContent(...args: any[]) {
        log.info('getCollectionContent called with args:', args)
        const result = this.instance.getCollectionContent(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getCollectionContent called  promise result:', result)
                return res
            })
        }
        log.info('getCollectionContent called result:', result)
        return result
    }
    getCollectionCustomGroupList(...args: any[]) {
        log.info('getCollectionCustomGroupList called with args:', args)
        const result = this.instance.getCollectionCustomGroupList(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getCollectionCustomGroupList called  promise result:', result)
                return res
            })
        }
        log.info('getCollectionCustomGroupList called result:', result)
        return result
    }
    getCollectionItemList(...args: any[]) {
        log.info('getCollectionItemList called with args:', args)
        const result = this.instance.getCollectionItemList(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getCollectionItemList called  promise result:', result)
                return res
            })
        }
        log.info('getCollectionItemList called result:', result)
        return result
    }
    getCollectionUserInfo(...args: any[]) {
        log.info('getCollectionUserInfo called with args:', args)
        const result = this.instance.getCollectionUserInfo(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getCollectionUserInfo called  promise result:', result)
                return res
            })
        }
        log.info('getCollectionUserInfo called result:', result)
        return result
    }
    getEditPicInfoByPath(...args: any[]) {
        log.info('getEditPicInfoByPath called with args:', args)
        const result = this.instance.getEditPicInfoByPath(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getEditPicInfoByPath called  promise result:', result)
                return res
            })
        }
        log.info('getEditPicInfoByPath called result:', result)
        return result
    }
    removeKernelCollectionListener(...args: any[]) {
        log.info('removeKernelCollectionListener called with args:', args)
        const result = this.instance.removeKernelCollectionListener(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('removeKernelCollectionListener called  promise result:', result)
                return res
            })
        }
        log.info('removeKernelCollectionListener called result:', result)
        return result
    }
    searchCollectionItemList(...args: any[]) {
        log.info('searchCollectionItemList called with args:', args)
        const result = this.instance.searchCollectionItemList(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('searchCollectionItemList called  promise result:', result)
                return res
            })
        }
        log.info('searchCollectionItemList called result:', result)
        return result
    }
};
export const getNodeIKernelCollectionService = (engine: any): any => {
    return class extends NodeIKernelCollectionService {
        
    }
}