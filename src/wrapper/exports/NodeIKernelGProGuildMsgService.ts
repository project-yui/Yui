import { useLogger } from "../../common/log";

const log = useLogger('Wrapper/NodeIKernelGProGuildMsgService')
export class NodeIKernelGProGuildMsgService {
    protected static singleton?: any = undefined
    protected instance: any
    constructor(instance: any) {
        log.info('constructor called')
        this.instance = instance
    }
    addKernelGProGuildMsgListener(...args: any[]) {
        log.info('addKernelGProGuildMsgListener called with args:', args)
        const result = this.instance.addKernelGProGuildMsgListener(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('addKernelGProGuildMsgListener called  promise result:', result)
                return res
            })
        }
        log.info('addKernelGProGuildMsgListener called result:', result)
        return result
    }
    addOrUpdateGuildToMsgList(...args: any[]) {
        log.info('addOrUpdateGuildToMsgList called with args:', args)
        const result = this.instance.addOrUpdateGuildToMsgList(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('addOrUpdateGuildToMsgList called  promise result:', result)
                return res
            })
        }
        log.info('addOrUpdateGuildToMsgList called result:', result)
        return result
    }
    clearGuildReadSceneV2(...args: any[]) {
        log.info('clearGuildReadSceneV2 called with args:', args)
        const result = this.instance.clearGuildReadSceneV2(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('clearGuildReadSceneV2 called  promise result:', result)
                return res
            })
        }
        log.info('clearGuildReadSceneV2 called result:', result)
        return result
    }
    deleteGuildFeedDraft(...args: any[]) {
        log.info('deleteGuildFeedDraft called with args:', args)
        const result = this.instance.deleteGuildFeedDraft(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('deleteGuildFeedDraft called  promise result:', result)
                return res
            })
        }
        log.info('deleteGuildFeedDraft called result:', result)
        return result
    }
    deleteMsg(...args: any[]) {
        log.info('deleteMsg called with args:', args)
        const result = this.instance.deleteMsg(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('deleteMsg called  promise result:', result)
                return res
            })
        }
        log.info('deleteMsg called result:', result)
        return result
    }
    deleteRecallMsg(...args: any[]) {
        log.info('deleteRecallMsg called with args:', args)
        const result = this.instance.deleteRecallMsg(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('deleteRecallMsg called  promise result:', result)
                return res
            })
        }
        log.info('deleteRecallMsg called result:', result)
        return result
    }
    deleteRecallMsgForLocal(...args: any[]) {
        log.info('deleteRecallMsgForLocal called with args:', args)
        const result = this.instance.deleteRecallMsgForLocal(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('deleteRecallMsgForLocal called  promise result:', result)
                return res
            })
        }
        log.info('deleteRecallMsgForLocal called result:', result)
        return result
    }
    enableFilterMsgAbstractNotify(...args: any[]) {
        log.info('enableFilterMsgAbstractNotify called with args:', args)
        const result = this.instance.enableFilterMsgAbstractNotify(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('enableFilterMsgAbstractNotify called  promise result:', result)
                return res
            })
        }
        log.info('enableFilterMsgAbstractNotify called result:', result)
        return result
    }
    forceShowGuildHelperNode(...args: any[]) {
        log.info('forceShowGuildHelperNode called with args:', args)
        const result = this.instance.forceShowGuildHelperNode(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('forceShowGuildHelperNode called  promise result:', result)
                return res
            })
        }
        log.info('forceShowGuildHelperNode called result:', result)
        return result
    }
    getAllDirectSessionUnreadCntInfo(...args: any[]) {
        log.info('getAllDirectSessionUnreadCntInfo called with args:', args)
        const result = this.instance.getAllDirectSessionUnreadCntInfo(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getAllDirectSessionUnreadCntInfo called  promise result:', result)
                return res
            })
        }
        log.info('getAllDirectSessionUnreadCntInfo called result:', result)
        return result
    }
    getAllGuildUnreadCntInfo(...args: any[]) {
        log.info('getAllGuildUnreadCntInfo called with args:', args)
        const result = this.instance.getAllGuildUnreadCntInfo(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getAllGuildUnreadCntInfo called  promise result:', result)
                return res
            })
        }
        log.info('getAllGuildUnreadCntInfo called result:', result)
        return result
    }
    getChannelEventFlow(...args: any[]) {
        log.info('getChannelEventFlow called with args:', args)
        const result = this.instance.getChannelEventFlow(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getChannelEventFlow called  promise result:', result)
                return res
            })
        }
        log.info('getChannelEventFlow called result:', result)
        return result
    }
    getFirstUnreadCommonMsg(...args: any[]) {
        log.info('getFirstUnreadCommonMsg called with args:', args)
        const result = this.instance.getFirstUnreadCommonMsg(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getFirstUnreadCommonMsg called  promise result:', result)
                return res
            })
        }
        log.info('getFirstUnreadCommonMsg called result:', result)
        return result
    }
    getGlobalRedPointSwitch(...args: any[]) {
        log.info('getGlobalRedPointSwitch called with args:', args)
        const result = this.instance.getGlobalRedPointSwitch(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getGlobalRedPointSwitch called  promise result:', result)
                return res
            })
        }
        log.info('getGlobalRedPointSwitch called result:', result)
        return result
    }
    getGuildFeedDraft(...args: any[]) {
        log.info('getGuildFeedDraft called with args:', args)
        const result = this.instance.getGuildFeedDraft(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getGuildFeedDraft called  promise result:', result)
                return res
            })
        }
        log.info('getGuildFeedDraft called result:', result)
        return result
    }
    getGuildHelperNotifySwitch(...args: any[]) {
        log.info('getGuildHelperNotifySwitch called with args:', args)
        const result = this.instance.getGuildHelperNotifySwitch(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getGuildHelperNotifySwitch called  promise result:', result)
                return res
            })
        }
        log.info('getGuildHelperNotifySwitch called result:', result)
        return result
    }
    getGuildInteractiveNotification(...args: any[]) {
        log.info('getGuildInteractiveNotification called with args:', args)
        const result = this.instance.getGuildInteractiveNotification(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getGuildInteractiveNotification called  promise result:', result)
                return res
            })
        }
        log.info('getGuildInteractiveNotification called result:', result)
        return result
    }
    getGuildUnreadCntInfo(...args: any[]) {
        log.info('getGuildUnreadCntInfo called with args:', args)
        const result = this.instance.getGuildUnreadCntInfo(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getGuildUnreadCntInfo called  promise result:', result)
                return res
            })
        }
        log.info('getGuildUnreadCntInfo called result:', result)
        return result
    }
    getGuildUnreadCntTabInfo(...args: any[]) {
        log.info('getGuildUnreadCntTabInfo called with args:', args)
        const result = this.instance.getGuildUnreadCntTabInfo(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getGuildUnreadCntTabInfo called  promise result:', result)
                return res
            })
        }
        log.info('getGuildUnreadCntTabInfo called result:', result)
        return result
    }
    getMsgAbstracts(...args: any[]) {
        log.info('getMsgAbstracts called with args:', args)
        const result = this.instance.getMsgAbstracts(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getMsgAbstracts called  promise result:', result)
                return res
            })
        }
        log.info('getMsgAbstracts called result:', result)
        return result
    }
    getNavigateInfo(...args: any[]) {
        log.info('getNavigateInfo called with args:', args)
        const result = this.instance.getNavigateInfo(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getNavigateInfo called  promise result:', result)
                return res
            })
        }
        log.info('getNavigateInfo called result:', result)
        return result
    }
    getSrvNewFeedUnreadCount(...args: any[]) {
        log.info('getSrvNewFeedUnreadCount called with args:', args)
        const result = this.instance.getSrvNewFeedUnreadCount(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getSrvNewFeedUnreadCount called  promise result:', result)
                return res
            })
        }
        log.info('getSrvNewFeedUnreadCount called result:', result)
        return result
    }
    getUnreadCntInfo(...args: any[]) {
        log.info('getUnreadCntInfo called with args:', args)
        const result = this.instance.getUnreadCntInfo(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getUnreadCntInfo called  promise result:', result)
                return res
            })
        }
        log.info('getUnreadCntInfo called result:', result)
        return result
    }
    recallGProMsg(...args: any[]) {
        log.info('recallGProMsg called with args:', args)
        const result = this.instance.recallGProMsg(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('recallGProMsg called  promise result:', result)
                return res
            })
        }
        log.info('recallGProMsg called result:', result)
        return result
    }
    removeKernelGProGuildMsgListener(...args: any[]) {
        log.info('removeKernelGProGuildMsgListener called with args:', args)
        const result = this.instance.removeKernelGProGuildMsgListener(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('removeKernelGProGuildMsgListener called  promise result:', result)
                return res
            })
        }
        log.info('removeKernelGProGuildMsgListener called result:', result)
        return result
    }
    setCurOnScreenMsg(...args: any[]) {
        log.info('setCurOnScreenMsg called with args:', args)
        const result = this.instance.setCurOnScreenMsg(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setCurOnScreenMsg called  promise result:', result)
                return res
            })
        }
        log.info('setCurOnScreenMsg called result:', result)
        return result
    }
    setFocusSession(...args: any[]) {
        log.info('setFocusSession called with args:', args)
        const result = this.instance.setFocusSession(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setFocusSession called  promise result:', result)
                return res
            })
        }
        log.info('setFocusSession called result:', result)
        return result
    }
    setGProAllDirectMsgRead(...args: any[]) {
        log.info('setGProAllDirectMsgRead called with args:', args)
        const result = this.instance.setGProAllDirectMsgRead(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setGProAllDirectMsgRead called  promise result:', result)
                return res
            })
        }
        log.info('setGProAllDirectMsgRead called result:', result)
        return result
    }
    setGProAllGuildMsgRead(...args: any[]) {
        log.info('setGProAllGuildMsgRead called with args:', args)
        const result = this.instance.setGProAllGuildMsgRead(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setGProAllGuildMsgRead called  promise result:', result)
                return res
            })
        }
        log.info('setGProAllGuildMsgRead called result:', result)
        return result
    }
    setGProGuildMsgRead(...args: any[]) {
        log.info('setGProGuildMsgRead called with args:', args)
        const result = this.instance.setGProGuildMsgRead(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setGProGuildMsgRead called  promise result:', result)
                return res
            })
        }
        log.info('setGProGuildMsgRead called result:', result)
        return result
    }
    setGProGuildTabRead(...args: any[]) {
        log.info('setGProGuildTabRead called with args:', args)
        const result = this.instance.setGProGuildTabRead(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setGProGuildTabRead called  promise result:', result)
                return res
            })
        }
        log.info('setGProGuildTabRead called result:', result)
        return result
    }
    setGProLocalMsgRead(...args: any[]) {
        log.info('setGProLocalMsgRead called with args:', args)
        const result = this.instance.setGProLocalMsgRead(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setGProLocalMsgRead called  promise result:', result)
                return res
            })
        }
        log.info('setGProLocalMsgRead called result:', result)
        return result
    }
    setGProMsgRead(...args: any[]) {
        log.info('setGProMsgRead called with args:', args)
        const result = this.instance.setGProMsgRead(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setGProMsgRead called  promise result:', result)
                return res
            })
        }
        log.info('setGProMsgRead called result:', result)
        return result
    }
    setGuildFeedDraft(...args: any[]) {
        log.info('setGuildFeedDraft called with args:', args)
        const result = this.instance.setGuildFeedDraft(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setGuildFeedDraft called  promise result:', result)
                return res
            })
        }
        log.info('setGuildFeedDraft called result:', result)
        return result
    }
    setGuildGroupMarkUnreadFlag(...args: any[]) {
        log.info('setGuildGroupMarkUnreadFlag called with args:', args)
        const result = this.instance.setGuildGroupMarkUnreadFlag(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setGuildGroupMarkUnreadFlag called  promise result:', result)
                return res
            })
        }
        log.info('setGuildGroupMarkUnreadFlag called result:', result)
        return result
    }
    setGuildHelperNotifySwitch(...args: any[]) {
        log.info('setGuildHelperNotifySwitch called with args:', args)
        const result = this.instance.setGuildHelperNotifySwitch(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setGuildHelperNotifySwitch called  promise result:', result)
                return res
            })
        }
        log.info('setGuildHelperNotifySwitch called result:', result)
        return result
    }
    setVisibleGuildCntInfo(...args: any[]) {
        log.info('setVisibleGuildCntInfo called with args:', args)
        const result = this.instance.setVisibleGuildCntInfo(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setVisibleGuildCntInfo called  promise result:', result)
                return res
            })
        }
        log.info('setVisibleGuildCntInfo called result:', result)
        return result
    }
    setYaoGuangSwitch(...args: any[]) {
        log.info('setYaoGuangSwitch called with args:', args)
        const result = this.instance.setYaoGuangSwitch(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setYaoGuangSwitch called  promise result:', result)
                return res
            })
        }
        log.info('setYaoGuangSwitch called result:', result)
        return result
    }
};
export const getNodeIKernelGProGuildMsgService = (engine: any): any => {
    return class extends NodeIKernelGProGuildMsgService {
        
    }
}