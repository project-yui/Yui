import { useLogger } from "../../common/log";

const log = useLogger('Wrapper/NodeIKernelBuddyService')
export class NodeIKernelBuddyService {
    protected static singleton?: any = undefined
    protected instance: any
    constructor(instance: any) {
        log.info('constructor called')
        this.instance = instance
    }
    SetSpecialCare(...args: any[]) {
        log.info('SetSpecialCare called with args:', args)
        const result = this.instance.SetSpecialCare(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('SetSpecialCare called  promise result:', result)
                return res
            })
        }
        log.info('SetSpecialCare called result:', result)
        return result
    }
    addCategory(...args: any[]) {
        log.info('addCategory called with args:', args)
        const result = this.instance.addCategory(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('addCategory called  promise result:', result)
                return res
            })
        }
        log.info('addCategory called result:', result)
        return result
    }
    addCategoryV2(...args: any[]) {
        log.info('addCategoryV2 called with args:', args)
        const result = this.instance.addCategoryV2(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('addCategoryV2 called  promise result:', result)
                return res
            })
        }
        log.info('addCategoryV2 called result:', result)
        return result
    }
    addKernelBuddyListener(...args: any[]) {
        log.info('addKernelBuddyListener called with args:', args)
        const result = this.instance.addKernelBuddyListener(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('addKernelBuddyListener called  promise result:', result)
                return res
            })
        }
        log.info('addKernelBuddyListener called result:', result)
        return result
    }
    approvalDoubtBuddyReq(...args: any[]) {
        log.info('approvalDoubtBuddyReq called with args:', args)
        const result = this.instance.approvalDoubtBuddyReq(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('approvalDoubtBuddyReq called  promise result:', result)
                return res
            })
        }
        log.info('approvalDoubtBuddyReq called result:', result)
        return result
    }
    approvalFriendRequest(...args: any[]) {
        log.info('approvalFriendRequest called with args:', args)
        const result = this.instance.approvalFriendRequest(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('approvalFriendRequest called  promise result:', result)
                return res
            })
        }
        log.info('approvalFriendRequest called result:', result)
        return result
    }
    areBuddies(...args: any[]) {
        log.info('areBuddies called with args:', args)
        const result = this.instance.areBuddies(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('areBuddies called  promise result:', result)
                return res
            })
        }
        log.info('areBuddies called result:', result)
        return result
    }
    checkIsBuddyAsync(...args: any[]) {
        log.info('checkIsBuddyAsync called with args:', args)
        const result = this.instance.checkIsBuddyAsync(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('checkIsBuddyAsync called  promise result:', result)
                return res
            })
        }
        log.info('checkIsBuddyAsync called result:', result)
        return result
    }
    clearAddFriendBlockedList(...args: any[]) {
        log.info('clearAddFriendBlockedList called with args:', args)
        const result = this.instance.clearAddFriendBlockedList(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('clearAddFriendBlockedList called  promise result:', result)
                return res
            })
        }
        log.info('clearAddFriendBlockedList called result:', result)
        return result
    }
    clearBuddyReqUnreadCnt(...args: any[]) {
        log.info('clearBuddyReqUnreadCnt called with args:', args)
        const result = this.instance.clearBuddyReqUnreadCnt(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('clearBuddyReqUnreadCnt called  promise result:', result)
                return res
            })
        }
        log.info('clearBuddyReqUnreadCnt called result:', result)
        return result
    }
    delAllDoubtBuddyReq(...args: any[]) {
        log.info('delAllDoubtBuddyReq called with args:', args)
        const result = this.instance.delAllDoubtBuddyReq(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('delAllDoubtBuddyReq called  promise result:', result)
                return res
            })
        }
        log.info('delAllDoubtBuddyReq called result:', result)
        return result
    }
    delBatchBuddy(...args: any[]) {
        log.info('delBatchBuddy called with args:', args)
        const result = this.instance.delBatchBuddy(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('delBatchBuddy called  promise result:', result)
                return res
            })
        }
        log.info('delBatchBuddy called result:', result)
        return result
    }
    delBuddy(...args: any[]) {
        log.info('delBuddy called with args:', args)
        const result = this.instance.delBuddy(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('delBuddy called  promise result:', result)
                return res
            })
        }
        log.info('delBuddy called result:', result)
        return result
    }
    delBuddyReq(...args: any[]) {
        log.info('delBuddyReq called with args:', args)
        const result = this.instance.delBuddyReq(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('delBuddyReq called  promise result:', result)
                return res
            })
        }
        log.info('delBuddyReq called result:', result)
        return result
    }
    delCategory(...args: any[]) {
        log.info('delCategory called with args:', args)
        const result = this.instance.delCategory(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('delCategory called  promise result:', result)
                return res
            })
        }
        log.info('delCategory called result:', result)
        return result
    }
    delDoubtBuddyReq(...args: any[]) {
        log.info('delDoubtBuddyReq called with args:', args)
        const result = this.instance.delDoubtBuddyReq(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('delDoubtBuddyReq called  promise result:', result)
                return res
            })
        }
        log.info('delDoubtBuddyReq called result:', result)
        return result
    }
    getAddFriendBlockedList(...args: any[]) {
        log.info('getAddFriendBlockedList called with args:', args)
        const result = this.instance.getAddFriendBlockedList(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getAddFriendBlockedList called  promise result:', result)
                return res
            })
        }
        log.info('getAddFriendBlockedList called result:', result)
        return result
    }
    getAddFriendBlockedRedPoint(...args: any[]) {
        log.info('getAddFriendBlockedRedPoint called with args:', args)
        const result = this.instance.getAddFriendBlockedRedPoint(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getAddFriendBlockedRedPoint called  promise result:', result)
                return res
            })
        }
        log.info('getAddFriendBlockedRedPoint called result:', result)
        return result
    }
    getAddMeSetting(...args: any[]) {
        log.info('getAddMeSetting called with args:', args)
        const result = this.instance.getAddMeSetting(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getAddMeSetting called  promise result:', result)
                return res
            })
        }
        log.info('getAddMeSetting called result:', result)
        return result
    }
    getAllBuddyCount(...args: any[]) {
        log.info('getAllBuddyCount called with args:', args)
        const result = this.instance.getAllBuddyCount(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getAllBuddyCount called  promise result:', result)
                return res
            })
        }
        log.info('getAllBuddyCount called result:', result)
        return result
    }
    getBuddyList(...args: any[]) {
        log.info('getBuddyList called with args:', args)
        const result = this.instance.getBuddyList(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getBuddyList called  promise result:', result)
                return res
            })
        }
        log.info('getBuddyList called result:', result)
        return result
    }
    getBuddyListFromCache(...args: any[]) {
        log.info('getBuddyListFromCache called with args:', args)
        const result = this.instance.getBuddyListFromCache(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getBuddyListFromCache called  promise result:', result)
                return res
            })
        }
        log.info('getBuddyListFromCache called result:', result)
        return result
    }
    getBuddyListV2(...args: any[]) {
        log.info('getBuddyListV2 called with args:', args)
        const result = this.instance.getBuddyListV2(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getBuddyListV2 called  promise result:', result)
                return res
            })
        }
        log.info('getBuddyListV2 called result:', result)
        return result
    }
    getBuddyNick(...args: any[]) {
        log.info('getBuddyNick called with args:', args)
        const result = this.instance.getBuddyNick(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getBuddyNick called  promise result:', result)
                return res
            })
        }
        log.info('getBuddyNick called result:', result)
        return result
    }
    getBuddyRecommendContactArkJson(...args: any[]) {
        log.info('getBuddyRecommendContactArkJson called with args:', args)
        const result = this.instance.getBuddyRecommendContactArkJson(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getBuddyRecommendContactArkJson called  promise result:', result)
                return res
            })
        }
        log.info('getBuddyRecommendContactArkJson called result:', result)
        return result
    }
    getBuddyRemark(...args: any[]) {
        log.info('getBuddyRemark called with args:', args)
        const result = this.instance.getBuddyRemark(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getBuddyRemark called  promise result:', result)
                return res
            })
        }
        log.info('getBuddyRemark called result:', result)
        return result
    }
    getBuddyReq(...args: any[]) {
        log.info('getBuddyReq called with args:', args)
        const result = this.instance.getBuddyReq(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getBuddyReq called  promise result:', result)
                return res
            })
        }
        log.info('getBuddyReq called result:', result)
        return result
    }
    getBuddyReqUnreadCnt(...args: any[]) {
        log.info('getBuddyReqUnreadCnt called with args:', args)
        const result = this.instance.getBuddyReqUnreadCnt(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getBuddyReqUnreadCnt called  promise result:', result)
                return res
            })
        }
        log.info('getBuddyReqUnreadCnt called result:', result)
        return result
    }
    getCategoryById(...args: any[]) {
        log.info('getCategoryById called with args:', args)
        const result = this.instance.getCategoryById(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getCategoryById called  promise result:', result)
                return res
            })
        }
        log.info('getCategoryById called result:', result)
        return result
    }
    getCategoryNameWithUid(...args: any[]) {
        log.info('getCategoryNameWithUid called with args:', args)
        const result = this.instance.getCategoryNameWithUid(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getCategoryNameWithUid called  promise result:', result)
                return res
            })
        }
        log.info('getCategoryNameWithUid called result:', result)
        return result
    }
    getDoubtBuddyReq(...args: any[]) {
        log.info('getDoubtBuddyReq called with args:', args)
        const result = this.instance.getDoubtBuddyReq(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getDoubtBuddyReq called  promise result:', result)
                return res
            })
        }
        log.info('getDoubtBuddyReq called result:', result)
        return result
    }
    getDoubtBuddyUnreadNum(...args: any[]) {
        log.info('getDoubtBuddyUnreadNum called with args:', args)
        const result = this.instance.getDoubtBuddyUnreadNum(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getDoubtBuddyUnreadNum called  promise result:', result)
                return res
            })
        }
        log.info('getDoubtBuddyUnreadNum called result:', result)
        return result
    }
    getSmartInfos(...args: any[]) {
        log.info('getSmartInfos called with args:', args)
        const result = this.instance.getSmartInfos(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getSmartInfos called  promise result:', result)
                return res
            })
        }
        log.info('getSmartInfos called result:', result)
        return result
    }
    getTargetBuddySetting(...args: any[]) {
        log.info('getTargetBuddySetting called with args:', args)
        const result = this.instance.getTargetBuddySetting(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getTargetBuddySetting called  promise result:', result)
                return res
            })
        }
        log.info('getTargetBuddySetting called result:', result)
        return result
    }
    getTargetBuddySettingByType(...args: any[]) {
        log.info('getTargetBuddySettingByType called with args:', args)
        const result = this.instance.getTargetBuddySettingByType(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getTargetBuddySettingByType called  promise result:', result)
                return res
            })
        }
        log.info('getTargetBuddySettingByType called result:', result)
        return result
    }
    hasBuddyList(...args: any[]) {
        log.info('hasBuddyList called with args:', args)
        const result = this.instance.hasBuddyList(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('hasBuddyList called  promise result:', result)
                return res
            })
        }
        log.info('hasBuddyList called result:', result)
        return result
    }
    isBlocked(...args: any[]) {
        log.info('isBlocked called with args:', args)
        const result = this.instance.isBlocked(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('isBlocked called  promise result:', result)
                return res
            })
        }
        log.info('isBlocked called result:', result)
        return result
    }
    isBuddy(...args: any[]) {
        log.info('isBuddy called with args:', args)
        const result = this.instance.isBuddy(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('isBuddy called  promise result:', result)
                return res
            })
        }
        log.info('isBuddy called result:', result)
        return result
    }
    isNewBuddylistVersion(...args: any[]) {
        log.info('isNewBuddylistVersion called with args:', args)
        const result = this.instance.isNewBuddylistVersion(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('isNewBuddylistVersion called  promise result:', result)
                return res
            })
        }
        log.info('isNewBuddylistVersion called result:', result)
        return result
    }
    modifyAddMeSetting(...args: any[]) {
        log.info('modifyAddMeSetting called with args:', args)
        const result = this.instance.modifyAddMeSetting(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('modifyAddMeSetting called  promise result:', result)
                return res
            })
        }
        log.info('modifyAddMeSetting called result:', result)
        return result
    }
    pullCategory(...args: any[]) {
        log.info('pullCategory called with args:', args)
        const result = this.instance.pullCategory(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('pullCategory called  promise result:', result)
                return res
            })
        }
        log.info('pullCategory called result:', result)
        return result
    }
    removeKernelBuddyListener(...args: any[]) {
        log.info('removeKernelBuddyListener called with args:', args)
        const result = this.instance.removeKernelBuddyListener(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('removeKernelBuddyListener called  promise result:', result)
                return res
            })
        }
        log.info('removeKernelBuddyListener called result:', result)
        return result
    }
    renameCategory(...args: any[]) {
        log.info('renameCategory called with args:', args)
        const result = this.instance.renameCategory(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('renameCategory called  promise result:', result)
                return res
            })
        }
        log.info('renameCategory called result:', result)
        return result
    }
    reportAddFriendBlocked(...args: any[]) {
        log.info('reportAddFriendBlocked called with args:', args)
        const result = this.instance.reportAddFriendBlocked(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('reportAddFriendBlocked called  promise result:', result)
                return res
            })
        }
        log.info('reportAddFriendBlocked called result:', result)
        return result
    }
    reportDoubtBuddyReqUnread(...args: any[]) {
        log.info('reportDoubtBuddyReqUnread called with args:', args)
        const result = this.instance.reportDoubtBuddyReqUnread(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('reportDoubtBuddyReqUnread called  promise result:', result)
                return res
            })
        }
        log.info('reportDoubtBuddyReqUnread called result:', result)
        return result
    }
    reqToAddFriends(...args: any[]) {
        log.info('reqToAddFriends called with args:', args)
        const result = this.instance.reqToAddFriends(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('reqToAddFriends called  promise result:', result)
                return res
            })
        }
        log.info('reqToAddFriends called result:', result)
        return result
    }
    resortCategory(...args: any[]) {
        log.info('resortCategory called with args:', args)
        const result = this.instance.resortCategory(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('resortCategory called  promise result:', result)
                return res
            })
        }
        log.info('resortCategory called result:', result)
        return result
    }
    setBatchBuddyCategory(...args: any[]) {
        log.info('setBatchBuddyCategory called with args:', args)
        const result = this.instance.setBatchBuddyCategory(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setBatchBuddyCategory called  promise result:', result)
                return res
            })
        }
        log.info('setBatchBuddyCategory called result:', result)
        return result
    }
    setBlock(...args: any[]) {
        log.info('setBlock called with args:', args)
        const result = this.instance.setBlock(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setBlock called  promise result:', result)
                return res
            })
        }
        log.info('setBlock called result:', result)
        return result
    }
    setBuddyCategory(...args: any[]) {
        log.info('setBuddyCategory called with args:', args)
        const result = this.instance.setBuddyCategory(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setBuddyCategory called  promise result:', result)
                return res
            })
        }
        log.info('setBuddyCategory called result:', result)
        return result
    }
    setBuddyRemark(...args: any[]) {
        log.info('setBuddyRemark called with args:', args)
        const result = this.instance.setBuddyRemark(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setBuddyRemark called  promise result:', result)
                return res
            })
        }
        log.info('setBuddyRemark called result:', result)
        return result
    }
    setMsgNotify(...args: any[]) {
        log.info('setMsgNotify called with args:', args)
        const result = this.instance.setMsgNotify(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setMsgNotify called  promise result:', result)
                return res
            })
        }
        log.info('setMsgNotify called result:', result)
        return result
    }
    setSpacePermission(...args: any[]) {
        log.info('setSpacePermission called with args:', args)
        const result = this.instance.setSpacePermission(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setSpacePermission called  promise result:', result)
                return res
            })
        }
        log.info('setSpacePermission called result:', result)
        return result
    }
    setTop(...args: any[]) {
        log.info('setTop called with args:', args)
        const result = this.instance.setTop(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setTop called  promise result:', result)
                return res
            })
        }
        log.info('setTop called result:', result)
        return result
    }
    setWXMsgNotify(...args: any[]) {
        log.info('setWXMsgNotify called with args:', args)
        const result = this.instance.setWXMsgNotify(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setWXMsgNotify called  promise result:', result)
                return res
            })
        }
        log.info('setWXMsgNotify called result:', result)
        return result
    }
};
export const getNodeIKernelBuddyService = (engine: any): any => {
    return class extends NodeIKernelBuddyService {
        
    }
}