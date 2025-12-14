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
        return this.instance.addKernelRecentContactListener(...args)
    }
    addRecentContact(...args: any[]) {
        log.info('addRecentContact called with args:', args)
        return this.instance.addRecentContact(...args)
    }
    cleanAllModule(...args: any[]) {
        log.info('cleanAllModule called with args:', args)
        return this.instance.cleanAllModule(...args)
    }
    clearMsgUnreadCount(...args: any[]) {
        log.info('clearMsgUnreadCount called with args:', args)
        return this.instance.clearMsgUnreadCount(...args)
    }
    clearRecentContacts(...args: any[]) {
        log.info('clearRecentContacts called with args:', args)
        return this.instance.clearRecentContacts(...args)
    }
    clearRecentContactsByChatType(...args: any[]) {
        log.info('clearRecentContactsByChatType called with args:', args)
        return this.instance.clearRecentContactsByChatType(...args)
    }
    deleteRecentContacts(...args: any[]) {
        log.info('deleteRecentContacts called with args:', args)
        return this.instance.deleteRecentContacts(...args)
    }
    deleteRecentContactsVer2(...args: any[]) {
        log.info('deleteRecentContactsVer2 called with args:', args)
        return this.instance.deleteRecentContactsVer2(...args)
    }
    enterOrExitMsgList(...args: any[]) {
        log.info('enterOrExitMsgList called with args:', args)
        return this.instance.enterOrExitMsgList(...args)
    }
    fetchAndSubscribeABatchOfRecentContact(...args: any[]) {
        log.info('fetchAndSubscribeABatchOfRecentContact called with args:', args)
        return this.instance.fetchAndSubscribeABatchOfRecentContact(...args)
    }
    getContacts(...args: any[]) {
        log.info('getContacts called with args:', args)
        return this.instance.getContacts(...args)
    }
    getMsgUnreadCount(...args: any[]) {
        log.info('getMsgUnreadCount called with args:', args)
        return this.instance.getMsgUnreadCount(...args)
    }
    getRecentContactInfos(...args: any[]) {
        log.info('getRecentContactInfos called with args:', args)
        return this.instance.getRecentContactInfos(...args)
    }
    getRecentContactList(...args: any[]) {
        log.info('getRecentContactList called with args:', args)
        return this.instance.getRecentContactList(...args)
    }
    getRecentContactListSnapShot(...args: any[]) {
        log.info('getRecentContactListSnapShot called with args:', args)
        return this.instance.getRecentContactListSnapShot(...args)
    }
    getRecentContactListSync(...args: any[]) {
        log.info('getRecentContactListSync called with args:', args)
        return this.instance.getRecentContactListSync(...args)
    }
    getRecentContactListSyncLimit(...args: any[]) {
        log.info('getRecentContactListSyncLimit called with args:', args)
        return this.instance.getRecentContactListSyncLimit(...args)
    }
    getServiceAssistantRecentContactInfos(...args: any[]) {
        log.info('getServiceAssistantRecentContactInfos called with args:', args)
        return this.instance.getServiceAssistantRecentContactInfos(...args)
    }
    getUnreadDetailsInfos(...args: any[]) {
        log.info('getUnreadDetailsInfos called with args:', args)
        return this.instance.getUnreadDetailsInfos(...args)
    }
    jumpToSpecifyRecentContact(...args: any[]) {
        log.info('jumpToSpecifyRecentContact called with args:', args)
        return this.instance.jumpToSpecifyRecentContact(...args)
    }
    jumpToSpecifyRecentContactVer2(...args: any[]) {
        log.info('jumpToSpecifyRecentContactVer2 called with args:', args)
        return this.instance.jumpToSpecifyRecentContactVer2(...args)
    }
    manageContactMergeWindow(...args: any[]) {
        log.info('manageContactMergeWindow called with args:', args)
        return this.instance.manageContactMergeWindow(...args)
    }
    removeKernelRecentContactListener(...args: any[]) {
        log.info('removeKernelRecentContactListener called with args:', args)
        return this.instance.removeKernelRecentContactListener(...args)
    }
    setAllGameMsgRead(...args: any[]) {
        log.info('setAllGameMsgRead called with args:', args)
        return this.instance.setAllGameMsgRead(...args)
    }
    setContactListTop(...args: any[]) {
        log.info('setContactListTop called with args:', args)
        return this.instance.setContactListTop(...args)
    }
    setThirdPartyBusinessInfos(...args: any[]) {
        log.info('setThirdPartyBusinessInfos called with args:', args)
        return this.instance.setThirdPartyBusinessInfos(...args)
    }
    upInsertModule(...args: any[]) {
        log.info('upInsertModule called with args:', args)
        return this.instance.upInsertModule(...args)
    }
    updateGameMsgConfigs(...args: any[]) {
        log.info('updateGameMsgConfigs called with args:', args)
        return this.instance.updateGameMsgConfigs(...args)
    }
    updateRecentContactExtBufForUI(...args: any[]) {
        log.info('updateRecentContactExtBufForUI called with args:', args)
        return this.instance.updateRecentContactExtBufForUI(...args)
    }
    upsertRecentContactManually(...args: any[]) {
        log.info('upsertRecentContactManually called with args:', args)
        return this.instance.upsertRecentContactManually(...args)
    }
};
export const getNodeIKernelRecentContactService = (engine: any): any => {
    return class extends NodeIKernelRecentContactService {
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