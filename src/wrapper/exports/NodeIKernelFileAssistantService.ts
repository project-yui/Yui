import { useLogger } from "../../common/log";

const log = useLogger('Wrapper/NodeIKernelFileAssistantService')
export class NodeIKernelFileAssistantService {
    protected static singleton?: any = undefined
    protected instance: any
    constructor(instance: any) {
        log.info('constructor called')
        this.instance = instance
    }
    addKernelFileAssistantListener(...args: any[]) {
        log.info('addKernelFileAssistantListener called with args:', args)
        const result = this.instance.addKernelFileAssistantListener(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('addKernelFileAssistantListener called  promise result:', result)
                return res
            })
        }
        log.info('addKernelFileAssistantListener called result:', result)
        return result
    }
    cancelAllFileActionBySession(...args: any[]) {
        log.info('cancelAllFileActionBySession called with args:', args)
        const result = this.instance.cancelAllFileActionBySession(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('cancelAllFileActionBySession called  promise result:', result)
                return res
            })
        }
        log.info('cancelAllFileActionBySession called result:', result)
        return result
    }
    cancelFileAction(...args: any[]) {
        log.info('cancelFileAction called with args:', args)
        const result = this.instance.cancelFileAction(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('cancelFileAction called  promise result:', result)
                return res
            })
        }
        log.info('cancelFileAction called result:', result)
        return result
    }
    cancelSearchFile(...args: any[]) {
        log.info('cancelSearchFile called with args:', args)
        const result = this.instance.cancelSearchFile(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('cancelSearchFile called  promise result:', result)
                return res
            })
        }
        log.info('cancelSearchFile called result:', result)
        return result
    }
    deleteFile(...args: any[]) {
        log.info('deleteFile called with args:', args)
        const result = this.instance.deleteFile(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('deleteFile called  promise result:', result)
                return res
            })
        }
        log.info('deleteFile called result:', result)
        return result
    }
    downloadAllFileBySession(...args: any[]) {
        log.info('downloadAllFileBySession called with args:', args)
        const result = this.instance.downloadAllFileBySession(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('downloadAllFileBySession called  promise result:', result)
                return res
            })
        }
        log.info('downloadAllFileBySession called result:', result)
        return result
    }
    downloadFile(...args: any[]) {
        log.info('downloadFile called with args:', args)
        const result = this.instance.downloadFile(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('downloadFile called  promise result:', result)
                return res
            })
        }
        log.info('downloadFile called result:', result)
        return result
    }
    forwardFile(...args: any[]) {
        log.info('forwardFile called with args:', args)
        const result = this.instance.forwardFile(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('forwardFile called  promise result:', result)
                return res
            })
        }
        log.info('forwardFile called result:', result)
        return result
    }
    getFileAssistantList(...args: any[]) {
        log.info('getFileAssistantList called with args:', args)
        const result = this.instance.getFileAssistantList(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getFileAssistantList called  promise result:', result)
                return res
            })
        }
        log.info('getFileAssistantList called result:', result)
        return result
    }
    getFileSessionList(...args: any[]) {
        log.info('getFileSessionList called with args:', args)
        const result = this.instance.getFileSessionList(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getFileSessionList called  promise result:', result)
                return res
            })
        }
        log.info('getFileSessionList called result:', result)
        return result
    }
    getMoreFileAssistantList(...args: any[]) {
        log.info('getMoreFileAssistantList called with args:', args)
        const result = this.instance.getMoreFileAssistantList(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getMoreFileAssistantList called  promise result:', result)
                return res
            })
        }
        log.info('getMoreFileAssistantList called result:', result)
        return result
    }
    modifyFileInfo(...args: any[]) {
        log.info('modifyFileInfo called with args:', args)
        const result = this.instance.modifyFileInfo(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('modifyFileInfo called  promise result:', result)
                return res
            })
        }
        log.info('modifyFileInfo called result:', result)
        return result
    }
    removeKernelFileAssistantListener(...args: any[]) {
        log.info('removeKernelFileAssistantListener called with args:', args)
        const result = this.instance.removeKernelFileAssistantListener(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('removeKernelFileAssistantListener called  promise result:', result)
                return res
            })
        }
        log.info('removeKernelFileAssistantListener called result:', result)
        return result
    }
    resetSearchFileSortType(...args: any[]) {
        log.info('resetSearchFileSortType called with args:', args)
        const result = this.instance.resetSearchFileSortType(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('resetSearchFileSortType called  promise result:', result)
                return res
            })
        }
        log.info('resetSearchFileSortType called result:', result)
        return result
    }
    retryFileAction(...args: any[]) {
        log.info('retryFileAction called with args:', args)
        const result = this.instance.retryFileAction(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('retryFileAction called  promise result:', result)
                return res
            })
        }
        log.info('retryFileAction called result:', result)
        return result
    }
    saveAs(...args: any[]) {
        log.info('saveAs called with args:', args)
        const result = this.instance.saveAs(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('saveAs called  promise result:', result)
                return res
            })
        }
        log.info('saveAs called result:', result)
        return result
    }
    saveAsWithRename(...args: any[]) {
        log.info('saveAsWithRename called with args:', args)
        const result = this.instance.saveAsWithRename(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('saveAsWithRename called  promise result:', result)
                return res
            })
        }
        log.info('saveAsWithRename called result:', result)
        return result
    }
    searchFile(...args: any[]) {
        log.info('searchFile called with args:', args)
        const result = this.instance.searchFile(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('searchFile called  promise result:', result)
                return res
            })
        }
        log.info('searchFile called result:', result)
        return result
    }
    searchMoreFile(...args: any[]) {
        log.info('searchMoreFile called with args:', args)
        const result = this.instance.searchMoreFile(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('searchMoreFile called  promise result:', result)
                return res
            })
        }
        log.info('searchMoreFile called result:', result)
        return result
    }
};
export const getNodeIKernelFileAssistantService = (engine: any): any => {
    return class extends NodeIKernelFileAssistantService {
        
    }
}