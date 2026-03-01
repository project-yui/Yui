import { useLogger } from "../../common/log";

const log = useLogger('Wrapper/NodeIKernelRecentContactService')
export class NodeIKernelRecentContactService {
    protected static singleton?: any = undefined
    protected instance: any
    constructor(instance: any) {
        log.info('constructor called')
        this.instance = instance
    }
    addKernelRecentContactListener(...args: any[]) {
        log.info('addKernelRecentContactListener called with args:', args)
        const result = this.instance.addKernelRecentContactListener(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('addKernelRecentContactListener called  promise result:', result)
                return res
            })
        }
        log.info('addKernelRecentContactListener called result:', result)
        return result
    }
    addRecentContact(...args: any[]) {
        log.info('addRecentContact called with args:', args)
        const result = this.instance.addRecentContact(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('addRecentContact called  promise result:', result)
                return res
            })
        }
        log.info('addRecentContact called result:', result)
        return result
    }
    cleanAllModule(...args: any[]) {
        log.info('cleanAllModule called with args:', args)
        const result = this.instance.cleanAllModule(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('cleanAllModule called  promise result:', result)
                return res
            })
        }
        log.info('cleanAllModule called result:', result)
        return result
    }
    clearMsgUnreadCount(...args: any[]) {
        log.info('clearMsgUnreadCount called with args:', args)
        const result = this.instance.clearMsgUnreadCount(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('clearMsgUnreadCount called  promise result:', result)
                return res
            })
        }
        log.info('clearMsgUnreadCount called result:', result)
        return result
    }
    clearRecentContacts(...args: any[]) {
        log.info('clearRecentContacts called with args:', args)
        const result = this.instance.clearRecentContacts(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('clearRecentContacts called  promise result:', result)
                return res
            })
        }
        log.info('clearRecentContacts called result:', result)
        return result
    }
    clearRecentContactsByChatType(...args: any[]) {
        log.info('clearRecentContactsByChatType called with args:', args)
        const result = this.instance.clearRecentContactsByChatType(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('clearRecentContactsByChatType called  promise result:', result)
                return res
            })
        }
        log.info('clearRecentContactsByChatType called result:', result)
        return result
    }
    deleteRecentContacts(...args: any[]) {
        log.info('deleteRecentContacts called with args:', args)
        const result = this.instance.deleteRecentContacts(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('deleteRecentContacts called  promise result:', result)
                return res
            })
        }
        log.info('deleteRecentContacts called result:', result)
        return result
    }
    deleteRecentContactsVer2(...args: any[]) {
        log.info('deleteRecentContactsVer2 called with args:', args)
        const result = this.instance.deleteRecentContactsVer2(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('deleteRecentContactsVer2 called  promise result:', result)
                return res
            })
        }
        log.info('deleteRecentContactsVer2 called result:', result)
        return result
    }
    enterOrExitMsgList(...args: any[]) {
        log.info('enterOrExitMsgList called with args:', args)
        const result = this.instance.enterOrExitMsgList(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('enterOrExitMsgList called  promise result:', result)
                return res
            })
        }
        log.info('enterOrExitMsgList called result:', result)
        return result
    }
    fetchAndSubscribeABatchOfRecentContact(...args: any[]) {
        log.info('fetchAndSubscribeABatchOfRecentContact called with args:', args)
        const result = this.instance.fetchAndSubscribeABatchOfRecentContact(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('fetchAndSubscribeABatchOfRecentContact called  promise result:', result)
                return res
            })
        }
        log.info('fetchAndSubscribeABatchOfRecentContact called result:', result)
        return result
    }
    getContacts(...args: any[]) {
        log.info('getContacts called with args:', args)
        const result = this.instance.getContacts(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getContacts called  promise result:', result)
                return res
            })
        }
        log.info('getContacts called result:', result)
        return result
    }
    getMsgUnreadCount(...args: any[]) {
        log.info('getMsgUnreadCount called with args:', args)
        const result = this.instance.getMsgUnreadCount(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getMsgUnreadCount called  promise result:', result)
                return res
            })
        }
        log.info('getMsgUnreadCount called result:', result)
        return result
    }
    getRecentContactInfos(...args: any[]) {
        log.info('getRecentContactInfos called with args:', args)
        const result = this.instance.getRecentContactInfos(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getRecentContactInfos called  promise result:', result)
                return res
            })
        }
        log.info('getRecentContactInfos called result:', result)
        return result
    }
    getRecentContactList(...args: any[]) {
        log.info('getRecentContactList called with args:', args)
        const result = this.instance.getRecentContactList(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getRecentContactList called  promise result:', result)
                return res
            })
        }
        log.info('getRecentContactList called result:', result)
        return result
    }
    getRecentContactListSnapShot(...args: any[]) {
        log.info('getRecentContactListSnapShot called with args:', args)
        const result = this.instance.getRecentContactListSnapShot(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getRecentContactListSnapShot called  promise result:', result)
                return res
            })
        }
        log.info('getRecentContactListSnapShot called result:', result)
        return result
    }
    getRecentContactListSync(...args: any[]) {
        log.info('getRecentContactListSync called with args:', args)
        const result = this.instance.getRecentContactListSync(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getRecentContactListSync called  promise result:', result)
                return res
            })
        }
        log.info('getRecentContactListSync called result:', result)
        return result
    }
    getRecentContactListSyncLimit(...args: any[]) {
        log.info('getRecentContactListSyncLimit called with args:', args)
        const result = this.instance.getRecentContactListSyncLimit(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getRecentContactListSyncLimit called  promise result:', result)
                return res
            })
        }
        log.info('getRecentContactListSyncLimit called result:', result)
        return result
    }
    getServiceAssistantRecentContactInfos(...args: any[]) {
        log.info('getServiceAssistantRecentContactInfos called with args:', args)
        const result = this.instance.getServiceAssistantRecentContactInfos(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getServiceAssistantRecentContactInfos called  promise result:', result)
                return res
            })
        }
        log.info('getServiceAssistantRecentContactInfos called result:', result)
        return result
    }
    getUnreadDetailsInfos(...args: any[]) {
        log.info('getUnreadDetailsInfos called with args:', args)
        const result = this.instance.getUnreadDetailsInfos(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getUnreadDetailsInfos called  promise result:', result)
                return res
            })
        }
        log.info('getUnreadDetailsInfos called result:', result)
        return result
    }
    jumpToSpecifyRecentContact(...args: any[]) {
        log.info('jumpToSpecifyRecentContact called with args:', args)
        const result = this.instance.jumpToSpecifyRecentContact(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('jumpToSpecifyRecentContact called  promise result:', result)
                return res
            })
        }
        log.info('jumpToSpecifyRecentContact called result:', result)
        return result
    }
    jumpToSpecifyRecentContactVer2(...args: any[]) {
        log.info('jumpToSpecifyRecentContactVer2 called with args:', args)
        const result = this.instance.jumpToSpecifyRecentContactVer2(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('jumpToSpecifyRecentContactVer2 called  promise result:', result)
                return res
            })
        }
        log.info('jumpToSpecifyRecentContactVer2 called result:', result)
        return result
    }
    manageContactMergeWindow(...args: any[]) {
        log.info('manageContactMergeWindow called with args:', args)
        const result = this.instance.manageContactMergeWindow(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('manageContactMergeWindow called  promise result:', result)
                return res
            })
        }
        log.info('manageContactMergeWindow called result:', result)
        return result
    }
    removeKernelRecentContactListener(...args: any[]) {
        log.info('removeKernelRecentContactListener called with args:', args)
        const result = this.instance.removeKernelRecentContactListener(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('removeKernelRecentContactListener called  promise result:', result)
                return res
            })
        }
        log.info('removeKernelRecentContactListener called result:', result)
        return result
    }
    setAllGameMsgRead(...args: any[]) {
        log.info('setAllGameMsgRead called with args:', args)
        const result = this.instance.setAllGameMsgRead(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setAllGameMsgRead called  promise result:', result)
                return res
            })
        }
        log.info('setAllGameMsgRead called result:', result)
        return result
    }
    setContactListTop(...args: any[]) {
        log.info('setContactListTop called with args:', args)
        const result = this.instance.setContactListTop(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setContactListTop called  promise result:', result)
                return res
            })
        }
        log.info('setContactListTop called result:', result)
        return result
    }
    setThirdPartyBusinessInfos(...args: any[]) {
        log.info('setThirdPartyBusinessInfos called with args:', args)
        const result = this.instance.setThirdPartyBusinessInfos(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setThirdPartyBusinessInfos called  promise result:', result)
                return res
            })
        }
        log.info('setThirdPartyBusinessInfos called result:', result)
        return result
    }
    upInsertModule(...args: any[]) {
        log.info('upInsertModule called with args:', args)
        const result = this.instance.upInsertModule(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('upInsertModule called  promise result:', result)
                return res
            })
        }
        log.info('upInsertModule called result:', result)
        return result
    }
    updateGameMsgConfigs(...args: any[]) {
        log.info('updateGameMsgConfigs called with args:', args)
        const result = this.instance.updateGameMsgConfigs(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('updateGameMsgConfigs called  promise result:', result)
                return res
            })
        }
        log.info('updateGameMsgConfigs called result:', result)
        return result
    }
    updateRecentContactExtBufForUI(...args: any[]) {
        log.info('updateRecentContactExtBufForUI called with args:', args)
        const result = this.instance.updateRecentContactExtBufForUI(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('updateRecentContactExtBufForUI called  promise result:', result)
                return res
            })
        }
        log.info('updateRecentContactExtBufForUI called result:', result)
        return result
    }
    upsertRecentContactManually(...args: any[]) {
        log.info('upsertRecentContactManually called with args:', args)
        const result = this.instance.upsertRecentContactManually(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('upsertRecentContactManually called  promise result:', result)
                return res
            })
        }
        log.info('upsertRecentContactManually called result:', result)
        return result
    }
};
export const getNodeIKernelRecentContactService = (engine: any): any => {
    return class extends NodeIKernelRecentContactService {
        
    }
}