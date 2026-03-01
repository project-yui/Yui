import { useLogger } from "../../common/log";

const log = useLogger('Wrapper/NodeIKernelMsgService')
export class NodeIKernelMsgService {
    protected static singleton?: any = undefined
    protected instance: any
    constructor(instance: any) {
        log.info('constructor called')
        this.instance = instance
    }
    GetMsgSubType(...args: any[]) {
        log.info('GetMsgSubType called with args:', args)
        const result = this.instance.GetMsgSubType(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('GetMsgSubType called  promise result:', result)
                return res
            })
        }
        log.info('GetMsgSubType called result:', result)
        return result
    }
    IsC2CStyleChatType(...args: any[]) {
        log.info('IsC2CStyleChatType called with args:', args)
        const result = this.instance.IsC2CStyleChatType(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('IsC2CStyleChatType called  promise result:', result)
                return res
            })
        }
        log.info('IsC2CStyleChatType called result:', result)
        return result
    }
    IsExistOldDb(...args: any[]) {
        log.info('IsExistOldDb called with args:', args)
        const result = this.instance.IsExistOldDb(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('IsExistOldDb called  promise result:', result)
                return res
            })
        }
        log.info('IsExistOldDb called result:', result)
        return result
    }
    IsLocalJsonTipValid(...args: any[]) {
        log.info('IsLocalJsonTipValid called with args:', args)
        const result = this.instance.IsLocalJsonTipValid(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('IsLocalJsonTipValid called  promise result:', result)
                return res
            })
        }
        log.info('IsLocalJsonTipValid called result:', result)
        return result
    }
    IsTempChatType(...args: any[]) {
        log.info('IsTempChatType called with args:', args)
        const result = this.instance.IsTempChatType(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('IsTempChatType called  promise result:', result)
                return res
            })
        }
        log.info('IsTempChatType called result:', result)
        return result
    }
    JoinDragonGroupEmoji(...args: any[]) {
        log.info('JoinDragonGroupEmoji called with args:', args)
        const result = this.instance.JoinDragonGroupEmoji(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('JoinDragonGroupEmoji called  promise result:', result)
                return res
            })
        }
        log.info('JoinDragonGroupEmoji called result:', result)
        return result
    }
    addFavEmoji(...args: any[]) {
        log.info('addFavEmoji called with args:', args)
        const result = this.instance.addFavEmoji(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('addFavEmoji called  promise result:', result)
                return res
            })
        }
        log.info('addFavEmoji called result:', result)
        return result
    }
    addKernelMsgImportToolListener(...args: any[]) {
        log.info('addKernelMsgImportToolListener called with args:', args)
        const result = this.instance.addKernelMsgImportToolListener(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('addKernelMsgImportToolListener called  promise result:', result)
                return res
            })
        }
        log.info('addKernelMsgImportToolListener called result:', result)
        return result
    }
    addKernelMsgListener(...args: any[]) {
        log.info('addKernelMsgListener called with args:', args)
        const result = this.instance.addKernelMsgListener(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('addKernelMsgListener called  promise result:', result)
                return res
            })
        }
        log.info('addKernelMsgListener called result:', result)
        return result
    }
    addKernelTempChatSigListener(...args: any[]) {
        log.info('addKernelTempChatSigListener called with args:', args)
        const result = this.instance.addKernelTempChatSigListener(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('addKernelTempChatSigListener called  promise result:', result)
                return res
            })
        }
        log.info('addKernelTempChatSigListener called result:', result)
        return result
    }
    addLocalAVRecordMsg(...args: any[]) {
        log.info('addLocalAVRecordMsg called with args:', args)
        const result = this.instance.addLocalAVRecordMsg(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('addLocalAVRecordMsg called  promise result:', result)
                return res
            })
        }
        log.info('addLocalAVRecordMsg called result:', result)
        return result
    }
    addLocalGrayTipMsg(...args: any[]) {
        log.info('addLocalGrayTipMsg called with args:', args)
        const result = this.instance.addLocalGrayTipMsg(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('addLocalGrayTipMsg called  promise result:', result)
                return res
            })
        }
        log.info('addLocalGrayTipMsg called result:', result)
        return result
    }
    addLocalJsonGrayTipMsg(...args: any[]) {
        log.info('addLocalJsonGrayTipMsg called with args:', args)
        const result = this.instance.addLocalJsonGrayTipMsg(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('addLocalJsonGrayTipMsg called  promise result:', result)
                return res
            })
        }
        log.info('addLocalJsonGrayTipMsg called result:', result)
        return result
    }
    addLocalJsonGrayTipMsgExt(...args: any[]) {
        log.info('addLocalJsonGrayTipMsgExt called with args:', args)
        const result = this.instance.addLocalJsonGrayTipMsgExt(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('addLocalJsonGrayTipMsgExt called  promise result:', result)
                return res
            })
        }
        log.info('addLocalJsonGrayTipMsgExt called result:', result)
        return result
    }
    addLocalRecordMsg(...args: any[]) {
        log.info('addLocalRecordMsg called with args:', args)
        const result = this.instance.addLocalRecordMsg(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('addLocalRecordMsg called  promise result:', result)
                return res
            })
        }
        log.info('addLocalRecordMsg called result:', result)
        return result
    }
    addLocalRecordMsgWithExtInfos(...args: any[]) {
        log.info('addLocalRecordMsgWithExtInfos called with args:', args)
        const result = this.instance.addLocalRecordMsgWithExtInfos(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('addLocalRecordMsgWithExtInfos called  promise result:', result)
                return res
            })
        }
        log.info('addLocalRecordMsgWithExtInfos called result:', result)
        return result
    }
    addLocalTofuRecordMsg(...args: any[]) {
        log.info('addLocalTofuRecordMsg called with args:', args)
        const result = this.instance.addLocalTofuRecordMsg(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('addLocalTofuRecordMsg called  promise result:', result)
                return res
            })
        }
        log.info('addLocalTofuRecordMsg called result:', result)
        return result
    }
    addRecentUsedFace(...args: any[]) {
        log.info('addRecentUsedFace called with args:', args)
        const result = this.instance.addRecentUsedFace(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('addRecentUsedFace called  promise result:', result)
                return res
            })
        }
        log.info('addRecentUsedFace called result:', result)
        return result
    }
    addSendMsg(...args: any[]) {
        log.info('addSendMsg called with args:', args)
        const result = this.instance.addSendMsg(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('addSendMsg called  promise result:', result)
                return res
            })
        }
        log.info('addSendMsg called result:', result)
        return result
    }
    assembleMobileQQRichMediaFilePath(...args: any[]) {
        log.info('assembleMobileQQRichMediaFilePath called with args:', args)
        const result = this.instance.assembleMobileQQRichMediaFilePath(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('assembleMobileQQRichMediaFilePath called  promise result:', result)
                return res
            })
        }
        log.info('assembleMobileQQRichMediaFilePath called result:', result)
        return result
    }
    buildMultiForwardMsg(...args: any[]) {
        log.info('buildMultiForwardMsg called with args:', args)
        const result = this.instance.buildMultiForwardMsg(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('buildMultiForwardMsg called  promise result:', result)
                return res
            })
        }
        log.info('buildMultiForwardMsg called result:', result)
        return result
    }
    canImportOldDbMsg(...args: any[]) {
        log.info('canImportOldDbMsg called with args:', args)
        const result = this.instance.canImportOldDbMsg(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('canImportOldDbMsg called  promise result:', result)
                return res
            })
        }
        log.info('canImportOldDbMsg called result:', result)
        return result
    }
    canProcessDataMigration(...args: any[]) {
        log.info('canProcessDataMigration called with args:', args)
        const result = this.instance.canProcessDataMigration(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('canProcessDataMigration called  promise result:', result)
                return res
            })
        }
        log.info('canProcessDataMigration called result:', result)
        return result
    }
    cancelGetRichMediaElement(...args: any[]) {
        log.info('cancelGetRichMediaElement called with args:', args)
        const result = this.instance.cancelGetRichMediaElement(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('cancelGetRichMediaElement called  promise result:', result)
                return res
            })
        }
        log.info('cancelGetRichMediaElement called result:', result)
        return result
    }
    cancelImportMsgBackup(...args: any[]) {
        log.info('cancelImportMsgBackup called with args:', args)
        const result = this.instance.cancelImportMsgBackup(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('cancelImportMsgBackup called  promise result:', result)
                return res
            })
        }
        log.info('cancelImportMsgBackup called result:', result)
        return result
    }
    cancelSendMsg(...args: any[]) {
        log.info('cancelSendMsg called with args:', args)
        const result = this.instance.cancelSendMsg(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('cancelSendMsg called  promise result:', result)
                return res
            })
        }
        log.info('cancelSendMsg called result:', result)
        return result
    }
    checkMsgWithUrl(...args: any[]) {
        log.info('checkMsgWithUrl called with args:', args)
        const result = this.instance.checkMsgWithUrl(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('checkMsgWithUrl called  promise result:', result)
                return res
            })
        }
        log.info('checkMsgWithUrl called result:', result)
        return result
    }
    checkTabListStatus(...args: any[]) {
        log.info('checkTabListStatus called with args:', args)
        const result = this.instance.checkTabListStatus(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('checkTabListStatus called  promise result:', result)
                return res
            })
        }
        log.info('checkTabListStatus called result:', result)
        return result
    }
    clearMsgRecords(...args: any[]) {
        log.info('clearMsgRecords called with args:', args)
        const result = this.instance.clearMsgRecords(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('clearMsgRecords called  promise result:', result)
                return res
            })
        }
        log.info('clearMsgRecords called result:', result)
        return result
    }
    clickInlineKeyboardButton(...args: any[]) {
        log.info('clickInlineKeyboardButton called with args:', args)
        const result = this.instance.clickInlineKeyboardButton(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('clickInlineKeyboardButton called  promise result:', result)
                return res
            })
        }
        log.info('clickInlineKeyboardButton called result:', result)
        return result
    }
    clickTofuActionButton(...args: any[]) {
        log.info('clickTofuActionButton called with args:', args)
        const result = this.instance.clickTofuActionButton(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('clickTofuActionButton called  promise result:', result)
                return res
            })
        }
        log.info('clickTofuActionButton called result:', result)
        return result
    }
    copyFileWithDelExifInfo(...args: any[]) {
        log.info('copyFileWithDelExifInfo called with args:', args)
        const result = this.instance.copyFileWithDelExifInfo(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('copyFileWithDelExifInfo called  promise result:', result)
                return res
            })
        }
        log.info('copyFileWithDelExifInfo called result:', result)
        return result
    }
    createUidFromTinyId(...args: any[]) {
        log.info('createUidFromTinyId called with args:', args)
        const result = this.instance.createUidFromTinyId(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('createUidFromTinyId called  promise result:', result)
                return res
            })
        }
        log.info('createUidFromTinyId called result:', result)
        return result
    }
    dataMigrationGetDataAvaiableContactList(...args: any[]) {
        log.info('dataMigrationGetDataAvaiableContactList called with args:', args)
        const result = this.instance.dataMigrationGetDataAvaiableContactList(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('dataMigrationGetDataAvaiableContactList called  promise result:', result)
                return res
            })
        }
        log.info('dataMigrationGetDataAvaiableContactList called result:', result)
        return result
    }
    dataMigrationGetMsgList(...args: any[]) {
        log.info('dataMigrationGetMsgList called with args:', args)
        const result = this.instance.dataMigrationGetMsgList(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('dataMigrationGetMsgList called  promise result:', result)
                return res
            })
        }
        log.info('dataMigrationGetMsgList called result:', result)
        return result
    }
    dataMigrationGetResourceLocalDestinyPath(...args: any[]) {
        log.info('dataMigrationGetResourceLocalDestinyPath called with args:', args)
        const result = this.instance.dataMigrationGetResourceLocalDestinyPath(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('dataMigrationGetResourceLocalDestinyPath called  promise result:', result)
                return res
            })
        }
        log.info('dataMigrationGetResourceLocalDestinyPath called result:', result)
        return result
    }
    dataMigrationImportMsgPbRecord(...args: any[]) {
        log.info('dataMigrationImportMsgPbRecord called with args:', args)
        const result = this.instance.dataMigrationImportMsgPbRecord(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('dataMigrationImportMsgPbRecord called  promise result:', result)
                return res
            })
        }
        log.info('dataMigrationImportMsgPbRecord called result:', result)
        return result
    }
    dataMigrationSetIOSPathPrefix(...args: any[]) {
        log.info('dataMigrationSetIOSPathPrefix called with args:', args)
        const result = this.instance.dataMigrationSetIOSPathPrefix(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('dataMigrationSetIOSPathPrefix called  promise result:', result)
                return res
            })
        }
        log.info('dataMigrationSetIOSPathPrefix called result:', result)
        return result
    }
    dataMigrationStopOperation(...args: any[]) {
        log.info('dataMigrationStopOperation called with args:', args)
        const result = this.instance.dataMigrationStopOperation(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('dataMigrationStopOperation called  promise result:', result)
                return res
            })
        }
        log.info('dataMigrationStopOperation called result:', result)
        return result
    }
    delMarketEmojiTab(...args: any[]) {
        log.info('delMarketEmojiTab called with args:', args)
        const result = this.instance.delMarketEmojiTab(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('delMarketEmojiTab called  promise result:', result)
                return res
            })
        }
        log.info('delMarketEmojiTab called result:', result)
        return result
    }
    delRecentHiddenSession(...args: any[]) {
        log.info('delRecentHiddenSession called with args:', args)
        const result = this.instance.delRecentHiddenSession(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('delRecentHiddenSession called  promise result:', result)
                return res
            })
        }
        log.info('delRecentHiddenSession called result:', result)
        return result
    }
    deleteAllRoamMsgs(...args: any[]) {
        log.info('deleteAllRoamMsgs called with args:', args)
        const result = this.instance.deleteAllRoamMsgs(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('deleteAllRoamMsgs called  promise result:', result)
                return res
            })
        }
        log.info('deleteAllRoamMsgs called result:', result)
        return result
    }
    deleteDraft(...args: any[]) {
        log.info('deleteDraft called with args:', args)
        const result = this.instance.deleteDraft(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('deleteDraft called  promise result:', result)
                return res
            })
        }
        log.info('deleteDraft called result:', result)
        return result
    }
    deleteFavEmoji(...args: any[]) {
        log.info('deleteFavEmoji called with args:', args)
        const result = this.instance.deleteFavEmoji(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('deleteFavEmoji called  promise result:', result)
                return res
            })
        }
        log.info('deleteFavEmoji called result:', result)
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
    deleteReplyDraft(...args: any[]) {
        log.info('deleteReplyDraft called with args:', args)
        const result = this.instance.deleteReplyDraft(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('deleteReplyDraft called  promise result:', result)
                return res
            })
        }
        log.info('deleteReplyDraft called result:', result)
        return result
    }
    downloadEmojiPic(...args: any[]) {
        log.info('downloadEmojiPic called with args:', args)
        const result = this.instance.downloadEmojiPic(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('downloadEmojiPic called  promise result:', result)
                return res
            })
        }
        log.info('downloadEmojiPic called result:', result)
        return result
    }
    downloadOnlineStatusBigIconByUrl(...args: any[]) {
        log.info('downloadOnlineStatusBigIconByUrl called with args:', args)
        const result = this.instance.downloadOnlineStatusBigIconByUrl(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('downloadOnlineStatusBigIconByUrl called  promise result:', result)
                return res
            })
        }
        log.info('downloadOnlineStatusBigIconByUrl called result:', result)
        return result
    }
    downloadOnlineStatusCommonByUrl(...args: any[]) {
        log.info('downloadOnlineStatusCommonByUrl called with args:', args)
        const result = this.instance.downloadOnlineStatusCommonByUrl(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('downloadOnlineStatusCommonByUrl called  promise result:', result)
                return res
            })
        }
        log.info('downloadOnlineStatusCommonByUrl called result:', result)
        return result
    }
    downloadOnlineStatusSmallIconByUrl(...args: any[]) {
        log.info('downloadOnlineStatusSmallIconByUrl called with args:', args)
        const result = this.instance.downloadOnlineStatusSmallIconByUrl(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('downloadOnlineStatusSmallIconByUrl called  promise result:', result)
                return res
            })
        }
        log.info('downloadOnlineStatusSmallIconByUrl called result:', result)
        return result
    }
    downloadRichMedia(...args: any[]) {
        log.info('downloadRichMedia called with args:', args)
        const result = this.instance.downloadRichMedia(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('downloadRichMedia called  promise result:', result)
                return res
            })
        }
        log.info('downloadRichMedia called result:', result)
        return result
    }
    enterOrExitAio(...args: any[]) {
        log.info('enterOrExitAio called with args:', args)
        const result = this.instance.enterOrExitAio(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('enterOrExitAio called  promise result:', result)
                return res
            })
        }
        log.info('enterOrExitAio called result:', result)
        return result
    }
    feedBackReportForMsg(...args: any[]) {
        log.info('feedBackReportForMsg called with args:', args)
        const result = this.instance.feedBackReportForMsg(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('feedBackReportForMsg called  promise result:', result)
                return res
            })
        }
        log.info('feedBackReportForMsg called result:', result)
        return result
    }
    fetchBottomEmojiTableList(...args: any[]) {
        log.info('fetchBottomEmojiTableList called with args:', args)
        const result = this.instance.fetchBottomEmojiTableList(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('fetchBottomEmojiTableList called  promise result:', result)
                return res
            })
        }
        log.info('fetchBottomEmojiTableList called result:', result)
        return result
    }
    fetchFavEmojiList(...args: any[]) {
        log.info('fetchFavEmojiList called with args:', args)
        const result = this.instance.fetchFavEmojiList(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('fetchFavEmojiList called  promise result:', result)
                return res
            })
        }
        log.info('fetchFavEmojiList called result:', result)
        return result
    }
    fetchGetHitEmotionsByWord(...args: any[]) {
        log.info('fetchGetHitEmotionsByWord called with args:', args)
        const result = this.instance.fetchGetHitEmotionsByWord(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('fetchGetHitEmotionsByWord called  promise result:', result)
                return res
            })
        }
        log.info('fetchGetHitEmotionsByWord called result:', result)
        return result
    }
    fetchLongMsg(...args: any[]) {
        log.info('fetchLongMsg called with args:', args)
        const result = this.instance.fetchLongMsg(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('fetchLongMsg called  promise result:', result)
                return res
            })
        }
        log.info('fetchLongMsg called result:', result)
        return result
    }
    fetchLongMsgWithCb(...args: any[]) {
        log.info('fetchLongMsgWithCb called with args:', args)
        const result = this.instance.fetchLongMsgWithCb(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('fetchLongMsgWithCb called  promise result:', result)
                return res
            })
        }
        log.info('fetchLongMsgWithCb called result:', result)
        return result
    }
    fetchMarketEmoticonAioImage(...args: any[]) {
        log.info('fetchMarketEmoticonAioImage called with args:', args)
        const result = this.instance.fetchMarketEmoticonAioImage(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('fetchMarketEmoticonAioImage called  promise result:', result)
                return res
            })
        }
        log.info('fetchMarketEmoticonAioImage called result:', result)
        return result
    }
    fetchMarketEmoticonAuthDetail(...args: any[]) {
        log.info('fetchMarketEmoticonAuthDetail called with args:', args)
        const result = this.instance.fetchMarketEmoticonAuthDetail(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('fetchMarketEmoticonAuthDetail called  promise result:', result)
                return res
            })
        }
        log.info('fetchMarketEmoticonAuthDetail called result:', result)
        return result
    }
    fetchMarketEmoticonFaceImages(...args: any[]) {
        log.info('fetchMarketEmoticonFaceImages called with args:', args)
        const result = this.instance.fetchMarketEmoticonFaceImages(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('fetchMarketEmoticonFaceImages called  promise result:', result)
                return res
            })
        }
        log.info('fetchMarketEmoticonFaceImages called result:', result)
        return result
    }
    fetchMarketEmoticonList(...args: any[]) {
        log.info('fetchMarketEmoticonList called with args:', args)
        const result = this.instance.fetchMarketEmoticonList(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('fetchMarketEmoticonList called  promise result:', result)
                return res
            })
        }
        log.info('fetchMarketEmoticonList called result:', result)
        return result
    }
    fetchMarketEmoticonShowImage(...args: any[]) {
        log.info('fetchMarketEmoticonShowImage called with args:', args)
        const result = this.instance.fetchMarketEmoticonShowImage(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('fetchMarketEmoticonShowImage called  promise result:', result)
                return res
            })
        }
        log.info('fetchMarketEmoticonShowImage called result:', result)
        return result
    }
    fetchMarketEmotionJsonFile(...args: any[]) {
        log.info('fetchMarketEmotionJsonFile called with args:', args)
        const result = this.instance.fetchMarketEmotionJsonFile(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('fetchMarketEmotionJsonFile called  promise result:', result)
                return res
            })
        }
        log.info('fetchMarketEmotionJsonFile called result:', result)
        return result
    }
    fetchStatusMgrInfo(...args: any[]) {
        log.info('fetchStatusMgrInfo called with args:', args)
        const result = this.instance.fetchStatusMgrInfo(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('fetchStatusMgrInfo called  promise result:', result)
                return res
            })
        }
        log.info('fetchStatusMgrInfo called result:', result)
        return result
    }
    fetchStatusUnitedConfigInfo(...args: any[]) {
        log.info('fetchStatusUnitedConfigInfo called with args:', args)
        const result = this.instance.fetchStatusUnitedConfigInfo(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('fetchStatusUnitedConfigInfo called  promise result:', result)
                return res
            })
        }
        log.info('fetchStatusUnitedConfigInfo called result:', result)
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
    forwardMsg(...args: any[]) {
        log.info('forwardMsg called with args:', args)
        const result = this.instance.forwardMsg(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('forwardMsg called  promise result:', result)
                return res
            })
        }
        log.info('forwardMsg called result:', result)
        return result
    }
    forwardMsgWithComment(...args: any[]) {
        log.info('forwardMsgWithComment called with args:', args)
        const result = this.instance.forwardMsgWithComment(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('forwardMsgWithComment called  promise result:', result)
                return res
            })
        }
        log.info('forwardMsgWithComment called result:', result)
        return result
    }
    forwardRichMsgInVist(...args: any[]) {
        log.info('forwardRichMsgInVist called with args:', args)
        const result = this.instance.forwardRichMsgInVist(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('forwardRichMsgInVist called  promise result:', result)
                return res
            })
        }
        log.info('forwardRichMsgInVist called result:', result)
        return result
    }
    forwardSubMsgWithComment(...args: any[]) {
        log.info('forwardSubMsgWithComment called with args:', args)
        const result = this.instance.forwardSubMsgWithComment(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('forwardSubMsgWithComment called  promise result:', result)
                return res
            })
        }
        log.info('forwardSubMsgWithComment called result:', result)
        return result
    }
    generateMsgUniqueId(...args: any[]) {
        log.info('generateMsgUniqueId called with args:', args)
        const result = this.instance.generateMsgUniqueId(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('generateMsgUniqueId called  promise result:', result)
                return res
            })
        }
        log.info('generateMsgUniqueId called result:', result)
        return result
    }
    getABatchOfContactMsgBoxInfo(...args: any[]) {
        log.info('getABatchOfContactMsgBoxInfo called with args:', args)
        const result = this.instance.getABatchOfContactMsgBoxInfo(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getABatchOfContactMsgBoxInfo called  promise result:', result)
                return res
            })
        }
        log.info('getABatchOfContactMsgBoxInfo called result:', result)
        return result
    }
    getAioFirstViewLatestMsgs(...args: any[]) {
        log.info('getAioFirstViewLatestMsgs called with args:', args)
        const result = this.instance.getAioFirstViewLatestMsgs(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getAioFirstViewLatestMsgs called  promise result:', result)
                return res
            })
        }
        log.info('getAioFirstViewLatestMsgs called result:', result)
        return result
    }
    getAllOnlineFileMsgs(...args: any[]) {
        log.info('getAllOnlineFileMsgs called with args:', args)
        const result = this.instance.getAllOnlineFileMsgs(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getAllOnlineFileMsgs called  promise result:', result)
                return res
            })
        }
        log.info('getAllOnlineFileMsgs called result:', result)
        return result
    }
    getAnonymousInfo(...args: any[]) {
        log.info('getAnonymousInfo called with args:', args)
        const result = this.instance.getAnonymousInfo(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getAnonymousInfo called  promise result:', result)
                return res
            })
        }
        log.info('getAnonymousInfo called result:', result)
        return result
    }
    getArkMsgConfig(...args: any[]) {
        log.info('getArkMsgConfig called with args:', args)
        const result = this.instance.getArkMsgConfig(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getArkMsgConfig called  promise result:', result)
                return res
            })
        }
        log.info('getArkMsgConfig called result:', result)
        return result
    }
    getArkToMarkdownMsgTemplate(...args: any[]) {
        log.info('getArkToMarkdownMsgTemplate called with args:', args)
        const result = this.instance.getArkToMarkdownMsgTemplate(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getArkToMarkdownMsgTemplate called  promise result:', result)
                return res
            })
        }
        log.info('getArkToMarkdownMsgTemplate called result:', result)
        return result
    }
    getAutoReplyTextList(...args: any[]) {
        log.info('getAutoReplyTextList called with args:', args)
        const result = this.instance.getAutoReplyTextList(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getAutoReplyTextList called  promise result:', result)
                return res
            })
        }
        log.info('getAutoReplyTextList called result:', result)
        return result
    }
    getBookmarkData(...args: any[]) {
        log.info('getBookmarkData called with args:', args)
        const result = this.instance.getBookmarkData(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getBookmarkData called  promise result:', result)
                return res
            })
        }
        log.info('getBookmarkData called result:', result)
        return result
    }
    getContactUnreadCnt(...args: any[]) {
        log.info('getContactUnreadCnt called with args:', args)
        const result = this.instance.getContactUnreadCnt(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getContactUnreadCnt called  promise result:', result)
                return res
            })
        }
        log.info('getContactUnreadCnt called result:', result)
        return result
    }
    getCurChatImportStatusByUin(...args: any[]) {
        log.info('getCurChatImportStatusByUin called with args:', args)
        const result = this.instance.getCurChatImportStatusByUin(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getCurChatImportStatusByUin called  promise result:', result)
                return res
            })
        }
        log.info('getCurChatImportStatusByUin called result:', result)
        return result
    }
    getCurHiddenSession(...args: any[]) {
        log.info('getCurHiddenSession called with args:', args)
        const result = this.instance.getCurHiddenSession(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getCurHiddenSession called  promise result:', result)
                return res
            })
        }
        log.info('getCurHiddenSession called result:', result)
        return result
    }
    getDataImportUserLevel(...args: any[]) {
        log.info('getDataImportUserLevel called with args:', args)
        const result = this.instance.getDataImportUserLevel(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getDataImportUserLevel called  promise result:', result)
                return res
            })
        }
        log.info('getDataImportUserLevel called result:', result)
        return result
    }
    getDraft(...args: any[]) {
        log.info('getDraft called with args:', args)
        const result = this.instance.getDraft(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getDraft called  promise result:', result)
                return res
            })
        }
        log.info('getDraft called result:', result)
        return result
    }
    getEmojiResourcePath(...args: any[]) {
        log.info('getEmojiResourcePath called with args:', args)
        const result = this.instance.getEmojiResourcePath(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getEmojiResourcePath called  promise result:', result)
                return res
            })
        }
        log.info('getEmojiResourcePath called result:', result)
        return result
    }
    getFavMarketEmoticonInfo(...args: any[]) {
        log.info('getFavMarketEmoticonInfo called with args:', args)
        const result = this.instance.getFavMarketEmoticonInfo(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getFavMarketEmoticonInfo called  promise result:', result)
                return res
            })
        }
        log.info('getFavMarketEmoticonInfo called result:', result)
        return result
    }
    getFileThumbSavePath(...args: any[]) {
        log.info('getFileThumbSavePath called with args:', args)
        const result = this.instance.getFileThumbSavePath(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getFileThumbSavePath called  promise result:', result)
                return res
            })
        }
        log.info('getFileThumbSavePath called result:', result)
        return result
    }
    getFileThumbSavePathForSend(...args: any[]) {
        log.info('getFileThumbSavePathForSend called with args:', args)
        const result = this.instance.getFileThumbSavePathForSend(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getFileThumbSavePathForSend called  promise result:', result)
                return res
            })
        }
        log.info('getFileThumbSavePathForSend called result:', result)
        return result
    }
    getFirstUnreadAtMsg(...args: any[]) {
        log.info('getFirstUnreadAtMsg called with args:', args)
        const result = this.instance.getFirstUnreadAtMsg(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getFirstUnreadAtMsg called  promise result:', result)
                return res
            })
        }
        log.info('getFirstUnreadAtMsg called result:', result)
        return result
    }
    getFirstUnreadAtallMsg(...args: any[]) {
        log.info('getFirstUnreadAtallMsg called with args:', args)
        const result = this.instance.getFirstUnreadAtallMsg(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getFirstUnreadAtallMsg called  promise result:', result)
                return res
            })
        }
        log.info('getFirstUnreadAtallMsg called result:', result)
        return result
    }
    getFirstUnreadAtmeMsg(...args: any[]) {
        log.info('getFirstUnreadAtmeMsg called with args:', args)
        const result = this.instance.getFirstUnreadAtmeMsg(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getFirstUnreadAtmeMsg called  promise result:', result)
                return res
            })
        }
        log.info('getFirstUnreadAtmeMsg called result:', result)
        return result
    }
    getFirstUnreadMsgSeq(...args: any[]) {
        log.info('getFirstUnreadMsgSeq called with args:', args)
        const result = this.instance.getFirstUnreadMsgSeq(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getFirstUnreadMsgSeq called  promise result:', result)
                return res
            })
        }
        log.info('getFirstUnreadMsgSeq called result:', result)
        return result
    }
    getGroupMsgStorageTime(...args: any[]) {
        log.info('getGroupMsgStorageTime called with args:', args)
        const result = this.instance.getGroupMsgStorageTime(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getGroupMsgStorageTime called  promise result:', result)
                return res
            })
        }
        log.info('getGroupMsgStorageTime called result:', result)
        return result
    }
    getHotPicHotWords(...args: any[]) {
        log.info('getHotPicHotWords called with args:', args)
        const result = this.instance.getHotPicHotWords(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getHotPicHotWords called  promise result:', result)
                return res
            })
        }
        log.info('getHotPicHotWords called result:', result)
        return result
    }
    getHotPicInfoListSearchString(...args: any[]) {
        log.info('getHotPicInfoListSearchString called with args:', args)
        const result = this.instance.getHotPicInfoListSearchString(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getHotPicInfoListSearchString called  promise result:', result)
                return res
            })
        }
        log.info('getHotPicInfoListSearchString called result:', result)
        return result
    }
    getHotPicJumpInfo(...args: any[]) {
        log.info('getHotPicJumpInfo called with args:', args)
        const result = this.instance.getHotPicJumpInfo(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getHotPicJumpInfo called  promise result:', result)
                return res
            })
        }
        log.info('getHotPicJumpInfo called result:', result)
        return result
    }
    getHotPicSearchResult(...args: any[]) {
        log.info('getHotPicSearchResult called with args:', args)
        const result = this.instance.getHotPicSearchResult(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getHotPicSearchResult called  promise result:', result)
                return res
            })
        }
        log.info('getHotPicSearchResult called result:', result)
        return result
    }
    getKeyWordRelatedEmoji(...args: any[]) {
        log.info('getKeyWordRelatedEmoji called with args:', args)
        const result = this.instance.getKeyWordRelatedEmoji(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getKeyWordRelatedEmoji called  promise result:', result)
                return res
            })
        }
        log.info('getKeyWordRelatedEmoji called result:', result)
        return result
    }
    getLastMessageList(...args: any[]) {
        log.info('getLastMessageList called with args:', args)
        const result = this.instance.getLastMessageList(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getLastMessageList called  promise result:', result)
                return res
            })
        }
        log.info('getLastMessageList called result:', result)
        return result
    }
    getLatestDbMsgs(...args: any[]) {
        log.info('getLatestDbMsgs called with args:', args)
        const result = this.instance.getLatestDbMsgs(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getLatestDbMsgs called  promise result:', result)
                return res
            })
        }
        log.info('getLatestDbMsgs called result:', result)
        return result
    }
    getMarketEmoticonEncryptKeys(...args: any[]) {
        log.info('getMarketEmoticonEncryptKeys called with args:', args)
        const result = this.instance.getMarketEmoticonEncryptKeys(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getMarketEmoticonEncryptKeys called  promise result:', result)
                return res
            })
        }
        log.info('getMarketEmoticonEncryptKeys called result:', result)
        return result
    }
    getMarketEmoticonPath(...args: any[]) {
        log.info('getMarketEmoticonPath called with args:', args)
        const result = this.instance.getMarketEmoticonPath(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getMarketEmoticonPath called  promise result:', result)
                return res
            })
        }
        log.info('getMarketEmoticonPath called result:', result)
        return result
    }
    getMarketEmoticonPathBySync(...args: any[]) {
        log.info('getMarketEmoticonPathBySync called with args:', args)
        const result = this.instance.getMarketEmoticonPathBySync(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getMarketEmoticonPathBySync called  promise result:', result)
                return res
            })
        }
        log.info('getMarketEmoticonPathBySync called result:', result)
        return result
    }
    getMiscData(...args: any[]) {
        log.info('getMiscData called with args:', args)
        const result = this.instance.getMiscData(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getMiscData called  promise result:', result)
                return res
            })
        }
        log.info('getMiscData called result:', result)
        return result
    }
    getMqqDataImportTableNames(...args: any[]) {
        log.info('getMqqDataImportTableNames called with args:', args)
        const result = this.instance.getMqqDataImportTableNames(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getMqqDataImportTableNames called  promise result:', result)
                return res
            })
        }
        log.info('getMqqDataImportTableNames called result:', result)
        return result
    }
    getMsgAbstract(...args: any[]) {
        log.info('getMsgAbstract called with args:', args)
        const result = this.instance.getMsgAbstract(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getMsgAbstract called  promise result:', result)
                return res
            })
        }
        log.info('getMsgAbstract called result:', result)
        return result
    }
    getMsgByClientSeqAndTime(...args: any[]) {
        log.info('getMsgByClientSeqAndTime called with args:', args)
        const result = this.instance.getMsgByClientSeqAndTime(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getMsgByClientSeqAndTime called  promise result:', result)
                return res
            })
        }
        log.info('getMsgByClientSeqAndTime called result:', result)
        return result
    }
    getMsgEmojiLikesList(...args: any[]) {
        log.info('getMsgEmojiLikesList called with args:', args)
        const result = this.instance.getMsgEmojiLikesList(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getMsgEmojiLikesList called  promise result:', result)
                return res
            })
        }
        log.info('getMsgEmojiLikesList called result:', result)
        return result
    }
    getMsgEventFlow(...args: any[]) {
        log.info('getMsgEventFlow called with args:', args)
        const result = this.instance.getMsgEventFlow(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getMsgEventFlow called  promise result:', result)
                return res
            })
        }
        log.info('getMsgEventFlow called result:', result)
        return result
    }
    getMsgQRCode(...args: any[]) {
        log.info('getMsgQRCode called with args:', args)
        const result = this.instance.getMsgQRCode(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getMsgQRCode called  promise result:', result)
                return res
            })
        }
        log.info('getMsgQRCode called result:', result)
        return result
    }
    getMsgSetting(...args: any[]) {
        log.info('getMsgSetting called with args:', args)
        const result = this.instance.getMsgSetting(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getMsgSetting called  promise result:', result)
                return res
            })
        }
        log.info('getMsgSetting called result:', result)
        return result
    }
    getMsgWithAbstractByFilterParam(...args: any[]) {
        log.info('getMsgWithAbstractByFilterParam called with args:', args)
        const result = this.instance.getMsgWithAbstractByFilterParam(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getMsgWithAbstractByFilterParam called  promise result:', result)
                return res
            })
        }
        log.info('getMsgWithAbstractByFilterParam called result:', result)
        return result
    }
    getMsgs(...args: any[]) {
        log.info('getMsgs called with args:', args)
        const result = this.instance.getMsgs(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getMsgs called  promise result:', result)
                return res
            })
        }
        log.info('getMsgs called result:', result)
        return result
    }
    getMsgsByMsgId(...args: any[]) {
        log.info('getMsgsByMsgId called with args:', args)
        const result = this.instance.getMsgsByMsgId(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getMsgsByMsgId called  promise result:', result)
                return res
            })
        }
        log.info('getMsgsByMsgId called result:', result)
        return result
    }
    getMsgsBySeqAndCount(...args: any[]) {
        log.info('getMsgsBySeqAndCount called with args:', args)
        const result = this.instance.getMsgsBySeqAndCount(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getMsgsBySeqAndCount called  promise result:', result)
                return res
            })
        }
        log.info('getMsgsBySeqAndCount called result:', result)
        return result
    }
    getMsgsByTypeFilter(...args: any[]) {
        log.info('getMsgsByTypeFilter called with args:', args)
        const result = this.instance.getMsgsByTypeFilter(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getMsgsByTypeFilter called  promise result:', result)
                return res
            })
        }
        log.info('getMsgsByTypeFilter called result:', result)
        return result
    }
    getMsgsByTypeFilters(...args: any[]) {
        log.info('getMsgsByTypeFilters called with args:', args)
        const result = this.instance.getMsgsByTypeFilters(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getMsgsByTypeFilters called  promise result:', result)
                return res
            })
        }
        log.info('getMsgsByTypeFilters called result:', result)
        return result
    }
    getMsgsExt(...args: any[]) {
        log.info('getMsgsExt called with args:', args)
        const result = this.instance.getMsgsExt(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getMsgsExt called  promise result:', result)
                return res
            })
        }
        log.info('getMsgsExt called result:', result)
        return result
    }
    getMsgsIncludeSelf(...args: any[]) {
        log.info('getMsgsIncludeSelf called with args:', args)
        const result = this.instance.getMsgsIncludeSelf(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getMsgsIncludeSelf called  promise result:', result)
                return res
            })
        }
        log.info('getMsgsIncludeSelf called result:', result)
        return result
    }
    getMsgsWithMsgTimeAndClientSeqForC2C(...args: any[]) {
        log.info('getMsgsWithMsgTimeAndClientSeqForC2C called with args:', args)
        const result = this.instance.getMsgsWithMsgTimeAndClientSeqForC2C(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getMsgsWithMsgTimeAndClientSeqForC2C called  promise result:', result)
                return res
            })
        }
        log.info('getMsgsWithMsgTimeAndClientSeqForC2C called result:', result)
        return result
    }
    getMsgsWithStatus(...args: any[]) {
        log.info('getMsgsWithStatus called with args:', args)
        const result = this.instance.getMsgsWithStatus(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getMsgsWithStatus called  promise result:', result)
                return res
            })
        }
        log.info('getMsgsWithStatus called result:', result)
        return result
    }
    getMultiMsg(...args: any[]) {
        log.info('getMultiMsg called with args:', args)
        const result = this.instance.getMultiMsg(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getMultiMsg called  promise result:', result)
                return res
            })
        }
        log.info('getMultiMsg called result:', result)
        return result
    }
    getNtMsgSyncContactUnreadState(...args: any[]) {
        log.info('getNtMsgSyncContactUnreadState called with args:', args)
        const result = this.instance.getNtMsgSyncContactUnreadState(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getNtMsgSyncContactUnreadState called  promise result:', result)
                return res
            })
        }
        log.info('getNtMsgSyncContactUnreadState called result:', result)
        return result
    }
    getOldMsgDbInfo(...args: any[]) {
        log.info('getOldMsgDbInfo called with args:', args)
        const result = this.instance.getOldMsgDbInfo(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getOldMsgDbInfo called  promise result:', result)
                return res
            })
        }
        log.info('getOldMsgDbInfo called result:', result)
        return result
    }
    getOldQQVer(...args: any[]) {
        log.info('getOldQQVer called with args:', args)
        const result = this.instance.getOldQQVer(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getOldQQVer called  promise result:', result)
                return res
            })
        }
        log.info('getOldQQVer called result:', result)
        return result
    }
    getOnLineDev(...args: any[]) {
        log.info('getOnLineDev called with args:', args)
        const result = this.instance.getOnLineDev(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getOnLineDev called  promise result:', result)
                return res
            })
        }
        log.info('getOnLineDev called result:', result)
        return result
    }
    getOnlineFileMsgs(...args: any[]) {
        log.info('getOnlineFileMsgs called with args:', args)
        const result = this.instance.getOnlineFileMsgs(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getOnlineFileMsgs called  promise result:', result)
                return res
            })
        }
        log.info('getOnlineFileMsgs called result:', result)
        return result
    }
    getOnlineStatusBigIconBasePath(...args: any[]) {
        log.info('getOnlineStatusBigIconBasePath called with args:', args)
        const result = this.instance.getOnlineStatusBigIconBasePath(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getOnlineStatusBigIconBasePath called  promise result:', result)
                return res
            })
        }
        log.info('getOnlineStatusBigIconBasePath called result:', result)
        return result
    }
    getOnlineStatusCommonFileNameByUrl(...args: any[]) {
        log.info('getOnlineStatusCommonFileNameByUrl called with args:', args)
        const result = this.instance.getOnlineStatusCommonFileNameByUrl(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getOnlineStatusCommonFileNameByUrl called  promise result:', result)
                return res
            })
        }
        log.info('getOnlineStatusCommonFileNameByUrl called result:', result)
        return result
    }
    getOnlineStatusCommonPath(...args: any[]) {
        log.info('getOnlineStatusCommonPath called with args:', args)
        const result = this.instance.getOnlineStatusCommonPath(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getOnlineStatusCommonPath called  promise result:', result)
                return res
            })
        }
        log.info('getOnlineStatusCommonPath called result:', result)
        return result
    }
    getOnlineStatusSmallIconBasePath(...args: any[]) {
        log.info('getOnlineStatusSmallIconBasePath called with args:', args)
        const result = this.instance.getOnlineStatusSmallIconBasePath(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getOnlineStatusSmallIconBasePath called  promise result:', result)
                return res
            })
        }
        log.info('getOnlineStatusSmallIconBasePath called result:', result)
        return result
    }
    getOnlineStatusSmallIconFileNameByUrl(...args: any[]) {
        log.info('getOnlineStatusSmallIconFileNameByUrl called with args:', args)
        const result = this.instance.getOnlineStatusSmallIconFileNameByUrl(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getOnlineStatusSmallIconFileNameByUrl called  promise result:', result)
                return res
            })
        }
        log.info('getOnlineStatusSmallIconFileNameByUrl called result:', result)
        return result
    }
    getRecallMsgsByMsgId(...args: any[]) {
        log.info('getRecallMsgsByMsgId called with args:', args)
        const result = this.instance.getRecallMsgsByMsgId(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getRecallMsgsByMsgId called  promise result:', result)
                return res
            })
        }
        log.info('getRecallMsgsByMsgId called result:', result)
        return result
    }
    getRecentEmojiList(...args: any[]) {
        log.info('getRecentEmojiList called with args:', args)
        const result = this.instance.getRecentEmojiList(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getRecentEmojiList called  promise result:', result)
                return res
            })
        }
        log.info('getRecentEmojiList called result:', result)
        return result
    }
    getRecentHiddenSesionList(...args: any[]) {
        log.info('getRecentHiddenSesionList called with args:', args)
        const result = this.instance.getRecentHiddenSesionList(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getRecentHiddenSesionList called  promise result:', result)
                return res
            })
        }
        log.info('getRecentHiddenSesionList called result:', result)
        return result
    }
    getRecentUseEmojiList(...args: any[]) {
        log.info('getRecentUseEmojiList called with args:', args)
        const result = this.instance.getRecentUseEmojiList(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getRecentUseEmojiList called  promise result:', result)
                return res
            })
        }
        log.info('getRecentUseEmojiList called result:', result)
        return result
    }
    getRecentUsedFaceList(...args: any[]) {
        log.info('getRecentUsedFaceList called with args:', args)
        const result = this.instance.getRecentUsedFaceList(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getRecentUsedFaceList called  promise result:', result)
                return res
            })
        }
        log.info('getRecentUsedFaceList called result:', result)
        return result
    }
    getReplyDraft(...args: any[]) {
        log.info('getReplyDraft called with args:', args)
        const result = this.instance.getReplyDraft(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getReplyDraft called  promise result:', result)
                return res
            })
        }
        log.info('getReplyDraft called result:', result)
        return result
    }
    getRichMediaElement(...args: any[]) {
        log.info('getRichMediaElement called with args:', args)
        const result = this.instance.getRichMediaElement(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getRichMediaElement called  promise result:', result)
                return res
            })
        }
        log.info('getRichMediaElement called result:', result)
        return result
    }
    getRichMediaFilePathForGuild(...args: any[]) {
        log.info('getRichMediaFilePathForGuild called with args:', args)
        const result = this.instance.getRichMediaFilePathForGuild(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getRichMediaFilePathForGuild called  promise result:', result)
                return res
            })
        }
        log.info('getRichMediaFilePathForGuild called result:', result)
        return result
    }
    getRichMediaFilePathForMobileQQSend(...args: any[]) {
        log.info('getRichMediaFilePathForMobileQQSend called with args:', args)
        const result = this.instance.getRichMediaFilePathForMobileQQSend(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getRichMediaFilePathForMobileQQSend called  promise result:', result)
                return res
            })
        }
        log.info('getRichMediaFilePathForMobileQQSend called result:', result)
        return result
    }
    getServiceAssistantSwitch(...args: any[]) {
        log.info('getServiceAssistantSwitch called with args:', args)
        const result = this.instance.getServiceAssistantSwitch(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getServiceAssistantSwitch called  promise result:', result)
                return res
            })
        }
        log.info('getServiceAssistantSwitch called result:', result)
        return result
    }
    getSingleMsg(...args: any[]) {
        log.info('getSingleMsg called with args:', args)
        const result = this.instance.getSingleMsg(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getSingleMsg called  promise result:', result)
                return res
            })
        }
        log.info('getSingleMsg called result:', result)
        return result
    }
    getSourceOfReplyMsg(...args: any[]) {
        log.info('getSourceOfReplyMsg called with args:', args)
        const result = this.instance.getSourceOfReplyMsg(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getSourceOfReplyMsg called  promise result:', result)
                return res
            })
        }
        log.info('getSourceOfReplyMsg called result:', result)
        return result
    }
    getSourceOfReplyMsgByClientSeqAndTime(...args: any[]) {
        log.info('getSourceOfReplyMsgByClientSeqAndTime called with args:', args)
        const result = this.instance.getSourceOfReplyMsgByClientSeqAndTime(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getSourceOfReplyMsgByClientSeqAndTime called  promise result:', result)
                return res
            })
        }
        log.info('getSourceOfReplyMsgByClientSeqAndTime called result:', result)
        return result
    }
    getSourceOfReplyMsgV2(...args: any[]) {
        log.info('getSourceOfReplyMsgV2 called with args:', args)
        const result = this.instance.getSourceOfReplyMsgV2(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getSourceOfReplyMsgV2 called  promise result:', result)
                return res
            })
        }
        log.info('getSourceOfReplyMsgV2 called result:', result)
        return result
    }
    getTempChatInfo(...args: any[]) {
        log.info('getTempChatInfo called with args:', args)
        const result = this.instance.getTempChatInfo(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getTempChatInfo called  promise result:', result)
                return res
            })
        }
        log.info('getTempChatInfo called result:', result)
        return result
    }
    grabRedBag(...args: any[]) {
        log.info('grabRedBag called with args:', args)
        const result = this.instance.grabRedBag(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('grabRedBag called  promise result:', result)
                return res
            })
        }
        log.info('grabRedBag called result:', result)
        return result
    }
    importCancel(...args: any[]) {
        log.info('importCancel called with args:', args)
        const result = this.instance.importCancel(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('importCancel called  promise result:', result)
                return res
            })
        }
        log.info('importCancel called result:', result)
        return result
    }
    importDataLineMsg(...args: any[]) {
        log.info('importDataLineMsg called with args:', args)
        const result = this.instance.importDataLineMsg(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('importDataLineMsg called  promise result:', result)
                return res
            })
        }
        log.info('importDataLineMsg called result:', result)
        return result
    }
    importEif(...args: any[]) {
        log.info('importEif called with args:', args)
        const result = this.instance.importEif(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('importEif called  promise result:', result)
                return res
            })
        }
        log.info('importEif called result:', result)
        return result
    }
    importMsgBackup(...args: any[]) {
        log.info('importMsgBackup called with args:', args)
        const result = this.instance.importMsgBackup(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('importMsgBackup called  promise result:', result)
                return res
            })
        }
        log.info('importMsgBackup called result:', result)
        return result
    }
    importOldDbMsg(...args: any[]) {
        log.info('importOldDbMsg called with args:', args)
        const result = this.instance.importOldDbMsg(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('importOldDbMsg called  promise result:', result)
                return res
            })
        }
        log.info('importOldDbMsg called result:', result)
        return result
    }
    importPictures(...args: any[]) {
        log.info('importPictures called with args:', args)
        const result = this.instance.importPictures(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('importPictures called  promise result:', result)
                return res
            })
        }
        log.info('importPictures called result:', result)
        return result
    }
    insertMsgToMsgBox(...args: any[]) {
        log.info('insertMsgToMsgBox called with args:', args)
        const result = this.instance.insertMsgToMsgBox(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('insertMsgToMsgBox called  promise result:', result)
                return res
            })
        }
        log.info('insertMsgToMsgBox called result:', result)
        return result
    }
    isHitEmojiKeyword(...args: any[]) {
        log.info('isHitEmojiKeyword called with args:', args)
        const result = this.instance.isHitEmojiKeyword(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('isHitEmojiKeyword called  promise result:', result)
                return res
            })
        }
        log.info('isHitEmojiKeyword called result:', result)
        return result
    }
    isMqqDataImportFinished(...args: any[]) {
        log.info('isMqqDataImportFinished called with args:', args)
        const result = this.instance.isMqqDataImportFinished(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('isMqqDataImportFinished called  promise result:', result)
                return res
            })
        }
        log.info('isMqqDataImportFinished called result:', result)
        return result
    }
    isMsgMatched(...args: any[]) {
        log.info('isMsgMatched called with args:', args)
        const result = this.instance.isMsgMatched(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('isMsgMatched called  promise result:', result)
                return res
            })
        }
        log.info('isMsgMatched called result:', result)
        return result
    }
    kickOffLine(...args: any[]) {
        log.info('kickOffLine called with args:', args)
        const result = this.instance.kickOffLine(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('kickOffLine called  promise result:', result)
                return res
            })
        }
        log.info('kickOffLine called result:', result)
        return result
    }
    likeOrDislikeReportForMsg(...args: any[]) {
        log.info('likeOrDislikeReportForMsg called with args:', args)
        const result = this.instance.likeOrDislikeReportForMsg(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('likeOrDislikeReportForMsg called  promise result:', result)
                return res
            })
        }
        log.info('likeOrDislikeReportForMsg called result:', result)
        return result
    }
    modifyBottomEmojiTableSwitchStatus(...args: any[]) {
        log.info('modifyBottomEmojiTableSwitchStatus called with args:', args)
        const result = this.instance.modifyBottomEmojiTableSwitchStatus(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('modifyBottomEmojiTableSwitchStatus called  promise result:', result)
                return res
            })
        }
        log.info('modifyBottomEmojiTableSwitchStatus called result:', result)
        return result
    }
    modifyFavEmojiDesc(...args: any[]) {
        log.info('modifyFavEmojiDesc called with args:', args)
        const result = this.instance.modifyFavEmojiDesc(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('modifyFavEmojiDesc called  promise result:', result)
                return res
            })
        }
        log.info('modifyFavEmojiDesc called result:', result)
        return result
    }
    moveBottomEmojiTable(...args: any[]) {
        log.info('moveBottomEmojiTable called with args:', args)
        const result = this.instance.moveBottomEmojiTable(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('moveBottomEmojiTable called  promise result:', result)
                return res
            })
        }
        log.info('moveBottomEmojiTable called result:', result)
        return result
    }
    multiForwardMsg(...args: any[]) {
        log.info('multiForwardMsg called with args:', args)
        const result = this.instance.multiForwardMsg(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('multiForwardMsg called  promise result:', result)
                return res
            })
        }
        log.info('multiForwardMsg called result:', result)
        return result
    }
    multiForwardMsgWithComment(...args: any[]) {
        log.info('multiForwardMsgWithComment called with args:', args)
        const result = this.instance.multiForwardMsgWithComment(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('multiForwardMsgWithComment called  promise result:', result)
                return res
            })
        }
        log.info('multiForwardMsgWithComment called result:', result)
        return result
    }
    orderEmoji(...args: any[]) {
        log.info('orderEmoji called with args:', args)
        const result = this.instance.orderEmoji(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('orderEmoji called  promise result:', result)
                return res
            })
        }
        log.info('orderEmoji called result:', result)
        return result
    }
    packRedBag(...args: any[]) {
        log.info('packRedBag called with args:', args)
        const result = this.instance.packRedBag(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('packRedBag called  promise result:', result)
                return res
            })
        }
        log.info('packRedBag called result:', result)
        return result
    }
    prepareTempChat(...args: any[]) {
        log.info('prepareTempChat called with args:', args)
        const result = this.instance.prepareTempChat(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('prepareTempChat called  promise result:', result)
                return res
            })
        }
        log.info('prepareTempChat called result:', result)
        return result
    }
    pullDetail(...args: any[]) {
        log.info('pullDetail called with args:', args)
        const result = this.instance.pullDetail(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('pullDetail called  promise result:', result)
                return res
            })
        }
        log.info('pullDetail called result:', result)
        return result
    }
    pullRedBagPasswordList(...args: any[]) {
        log.info('pullRedBagPasswordList called with args:', args)
        const result = this.instance.pullRedBagPasswordList(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('pullRedBagPasswordList called  promise result:', result)
                return res
            })
        }
        log.info('pullRedBagPasswordList called result:', result)
        return result
    }
    pullTransferDetail(...args: any[]) {
        log.info('pullTransferDetail called with args:', args)
        const result = this.instance.pullTransferDetail(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('pullTransferDetail called  promise result:', result)
                return res
            })
        }
        log.info('pullTransferDetail called result:', result)
        return result
    }
    queryArkInfo(...args: any[]) {
        log.info('queryArkInfo called with args:', args)
        const result = this.instance.queryArkInfo(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('queryArkInfo called  promise result:', result)
                return res
            })
        }
        log.info('queryArkInfo called result:', result)
        return result
    }
    queryCalendar(...args: any[]) {
        log.info('queryCalendar called with args:', args)
        const result = this.instance.queryCalendar(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('queryCalendar called  promise result:', result)
                return res
            })
        }
        log.info('queryCalendar called result:', result)
        return result
    }
    queryEmoticonMsgs(...args: any[]) {
        log.info('queryEmoticonMsgs called with args:', args)
        const result = this.instance.queryEmoticonMsgs(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('queryEmoticonMsgs called  promise result:', result)
                return res
            })
        }
        log.info('queryEmoticonMsgs called result:', result)
        return result
    }
    queryFavEmojiByDesc(...args: any[]) {
        log.info('queryFavEmojiByDesc called with args:', args)
        const result = this.instance.queryFavEmojiByDesc(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('queryFavEmojiByDesc called  promise result:', result)
                return res
            })
        }
        log.info('queryFavEmojiByDesc called result:', result)
        return result
    }
    queryFileDownloadList(...args: any[]) {
        log.info('queryFileDownloadList called with args:', args)
        const result = this.instance.queryFileDownloadList(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('queryFileDownloadList called  promise result:', result)
                return res
            })
        }
        log.info('queryFileDownloadList called result:', result)
        return result
    }
    queryFileMsgsDesktop(...args: any[]) {
        log.info('queryFileMsgsDesktop called with args:', args)
        const result = this.instance.queryFileMsgsDesktop(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('queryFileMsgsDesktop called  promise result:', result)
                return res
            })
        }
        log.info('queryFileMsgsDesktop called result:', result)
        return result
    }
    queryFirstMsgSeq(...args: any[]) {
        log.info('queryFirstMsgSeq called with args:', args)
        const result = this.instance.queryFirstMsgSeq(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('queryFirstMsgSeq called  promise result:', result)
                return res
            })
        }
        log.info('queryFirstMsgSeq called result:', result)
        return result
    }
    queryFirstRoamMsg(...args: any[]) {
        log.info('queryFirstRoamMsg called with args:', args)
        const result = this.instance.queryFirstRoamMsg(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('queryFirstRoamMsg called  promise result:', result)
                return res
            })
        }
        log.info('queryFirstRoamMsg called result:', result)
        return result
    }
    queryMoreFileDownloadList(...args: any[]) {
        log.info('queryMoreFileDownloadList called with args:', args)
        const result = this.instance.queryMoreFileDownloadList(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('queryMoreFileDownloadList called  promise result:', result)
                return res
            })
        }
        log.info('queryMoreFileDownloadList called result:', result)
        return result
    }
    queryMsgsAndAbstractsWithFilter(...args: any[]) {
        log.info('queryMsgsAndAbstractsWithFilter called with args:', args)
        const result = this.instance.queryMsgsAndAbstractsWithFilter(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('queryMsgsAndAbstractsWithFilter called  promise result:', result)
                return res
            })
        }
        log.info('queryMsgsAndAbstractsWithFilter called result:', result)
        return result
    }
    queryMsgsWithFilter(...args: any[]) {
        log.info('queryMsgsWithFilter called with args:', args)
        const result = this.instance.queryMsgsWithFilter(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('queryMsgsWithFilter called  promise result:', result)
                return res
            })
        }
        log.info('queryMsgsWithFilter called result:', result)
        return result
    }
    queryMsgsWithFilterEx(...args: any[]) {
        log.info('queryMsgsWithFilterEx called with args:', args)
        const result = this.instance.queryMsgsWithFilterEx(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('queryMsgsWithFilterEx called  promise result:', result)
                return res
            })
        }
        log.info('queryMsgsWithFilterEx called result:', result)
        return result
    }
    queryMsgsWithFilterVer2(...args: any[]) {
        log.info('queryMsgsWithFilterVer2 called with args:', args)
        const result = this.instance.queryMsgsWithFilterVer2(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('queryMsgsWithFilterVer2 called  promise result:', result)
                return res
            })
        }
        log.info('queryMsgsWithFilterVer2 called result:', result)
        return result
    }
    queryPicOrVideoMsgs(...args: any[]) {
        log.info('queryPicOrVideoMsgs called with args:', args)
        const result = this.instance.queryPicOrVideoMsgs(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('queryPicOrVideoMsgs called  promise result:', result)
                return res
            })
        }
        log.info('queryPicOrVideoMsgs called result:', result)
        return result
    }
    queryPicOrVideoMsgsDesktop(...args: any[]) {
        log.info('queryPicOrVideoMsgsDesktop called with args:', args)
        const result = this.instance.queryPicOrVideoMsgsDesktop(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('queryPicOrVideoMsgsDesktop called  promise result:', result)
                return res
            })
        }
        log.info('queryPicOrVideoMsgsDesktop called result:', result)
        return result
    }
    queryRoamCalendar(...args: any[]) {
        log.info('queryRoamCalendar called with args:', args)
        const result = this.instance.queryRoamCalendar(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('queryRoamCalendar called  promise result:', result)
                return res
            })
        }
        log.info('queryRoamCalendar called result:', result)
        return result
    }
    queryShortVideoMsgs(...args: any[]) {
        log.info('queryShortVideoMsgs called with args:', args)
        const result = this.instance.queryShortVideoMsgs(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('queryShortVideoMsgs called  promise result:', result)
                return res
            })
        }
        log.info('queryShortVideoMsgs called result:', result)
        return result
    }
    queryTroopEmoticonMsgs(...args: any[]) {
        log.info('queryTroopEmoticonMsgs called with args:', args)
        const result = this.instance.queryTroopEmoticonMsgs(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('queryTroopEmoticonMsgs called  promise result:', result)
                return res
            })
        }
        log.info('queryTroopEmoticonMsgs called result:', result)
        return result
    }
    queryUserSecQuality(...args: any[]) {
        log.info('queryUserSecQuality called with args:', args)
        const result = this.instance.queryUserSecQuality(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('queryUserSecQuality called  promise result:', result)
                return res
            })
        }
        log.info('queryUserSecQuality called result:', result)
        return result
    }
    recallMsg(...args: any[]) {
        log.info('recallMsg called with args:', args)
        const result = this.instance.recallMsg(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('recallMsg called  promise result:', result)
                return res
            })
        }
        log.info('recallMsg called result:', result)
        return result
    }
    recordEmoji(...args: any[]) {
        log.info('recordEmoji called with args:', args)
        const result = this.instance.recordEmoji(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('recordEmoji called  promise result:', result)
                return res
            })
        }
        log.info('recordEmoji called result:', result)
        return result
    }
    reeditRecallMsg(...args: any[]) {
        log.info('reeditRecallMsg called with args:', args)
        const result = this.instance.reeditRecallMsg(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('reeditRecallMsg called  promise result:', result)
                return res
            })
        }
        log.info('reeditRecallMsg called result:', result)
        return result
    }
    refuseGetRichMediaElement(...args: any[]) {
        log.info('refuseGetRichMediaElement called with args:', args)
        const result = this.instance.refuseGetRichMediaElement(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('refuseGetRichMediaElement called  promise result:', result)
                return res
            })
        }
        log.info('refuseGetRichMediaElement called result:', result)
        return result
    }
    refuseReceiveOnlineFileMsg(...args: any[]) {
        log.info('refuseReceiveOnlineFileMsg called with args:', args)
        const result = this.instance.refuseReceiveOnlineFileMsg(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('refuseReceiveOnlineFileMsg called  promise result:', result)
                return res
            })
        }
        log.info('refuseReceiveOnlineFileMsg called result:', result)
        return result
    }
    regenerateMsg(...args: any[]) {
        log.info('regenerateMsg called with args:', args)
        const result = this.instance.regenerateMsg(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('regenerateMsg called  promise result:', result)
                return res
            })
        }
        log.info('regenerateMsg called result:', result)
        return result
    }
    registerSysMsgNotification(...args: any[]) {
        log.info('registerSysMsgNotification called with args:', args)
        const result = this.instance.registerSysMsgNotification(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('registerSysMsgNotification called  promise result:', result)
                return res
            })
        }
        log.info('registerSysMsgNotification called result:', result)
        return result
    }
    removeKernelMsgListener(...args: any[]) {
        log.info('removeKernelMsgListener called with args:', args)
        const result = this.instance.removeKernelMsgListener(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('removeKernelMsgListener called  promise result:', result)
                return res
            })
        }
        log.info('removeKernelMsgListener called result:', result)
        return result
    }
    removeKernelTempChatSigListener(...args: any[]) {
        log.info('removeKernelTempChatSigListener called with args:', args)
        const result = this.instance.removeKernelTempChatSigListener(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('removeKernelTempChatSigListener called  promise result:', result)
                return res
            })
        }
        log.info('removeKernelTempChatSigListener called result:', result)
        return result
    }
    renameAnonyChatNick(...args: any[]) {
        log.info('renameAnonyChatNick called with args:', args)
        const result = this.instance.renameAnonyChatNick(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('renameAnonyChatNick called  promise result:', result)
                return res
            })
        }
        log.info('renameAnonyChatNick called result:', result)
        return result
    }
    replyMsgWithSourceMsgInfo(...args: any[]) {
        log.info('replyMsgWithSourceMsgInfo called with args:', args)
        const result = this.instance.replyMsgWithSourceMsgInfo(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('replyMsgWithSourceMsgInfo called  promise result:', result)
                return res
            })
        }
        log.info('replyMsgWithSourceMsgInfo called result:', result)
        return result
    }
    reqToOfflineSendMsg(...args: any[]) {
        log.info('reqToOfflineSendMsg called with args:', args)
        const result = this.instance.reqToOfflineSendMsg(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('reqToOfflineSendMsg called  promise result:', result)
                return res
            })
        }
        log.info('reqToOfflineSendMsg called result:', result)
        return result
    }
    requestTianshuAdv(...args: any[]) {
        log.info('requestTianshuAdv called with args:', args)
        const result = this.instance.requestTianshuAdv(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('requestTianshuAdv called  promise result:', result)
                return res
            })
        }
        log.info('requestTianshuAdv called result:', result)
        return result
    }
    resendMsg(...args: any[]) {
        log.info('resendMsg called with args:', args)
        const result = this.instance.resendMsg(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('resendMsg called  promise result:', result)
                return res
            })
        }
        log.info('resendMsg called result:', result)
        return result
    }
    selectPasswordRedBag(...args: any[]) {
        log.info('selectPasswordRedBag called with args:', args)
        const result = this.instance.selectPasswordRedBag(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('selectPasswordRedBag called  promise result:', result)
                return res
            })
        }
        log.info('selectPasswordRedBag called result:', result)
        return result
    }
    sendMsg(...args: any[]) {
        log.info('sendMsg called with args:', args)
        const result = this.instance.sendMsg(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('sendMsg called  promise result:', result)
                return res
            })
        }
        log.info('sendMsg called result:', result)
        return result
    }
    sendShowInputStatusReq(...args: any[]) {
        log.info('sendShowInputStatusReq called with args:', args)
        const result = this.instance.sendShowInputStatusReq(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('sendShowInputStatusReq called  promise result:', result)
                return res
            })
        }
        log.info('sendShowInputStatusReq called result:', result)
        return result
    }
    sendSsoCmdReqByContend(...args: any[]) {
        log.info('sendSsoCmdReqByContend called with args:', args)
        const result = this.instance.sendSsoCmdReqByContend(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('sendSsoCmdReqByContend called  promise result:', result)
                return res
            })
        }
        log.info('sendSsoCmdReqByContend called result:', result)
        return result
    }
    setAllC2CAndGroupMsgRead(...args: any[]) {
        log.info('setAllC2CAndGroupMsgRead called with args:', args)
        const result = this.instance.setAllC2CAndGroupMsgRead(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setAllC2CAndGroupMsgRead called  promise result:', result)
                return res
            })
        }
        log.info('setAllC2CAndGroupMsgRead called result:', result)
        return result
    }
    setAutoReplyTextList(...args: any[]) {
        log.info('setAutoReplyTextList called with args:', args)
        const result = this.instance.setAutoReplyTextList(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setAutoReplyTextList called  promise result:', result)
                return res
            })
        }
        log.info('setAutoReplyTextList called result:', result)
        return result
    }
    setBookmarkData(...args: any[]) {
        log.info('setBookmarkData called with args:', args)
        const result = this.instance.setBookmarkData(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setBookmarkData called  promise result:', result)
                return res
            })
        }
        log.info('setBookmarkData called result:', result)
        return result
    }
    setContactLocalTop(...args: any[]) {
        log.info('setContactLocalTop called with args:', args)
        const result = this.instance.setContactLocalTop(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setContactLocalTop called  promise result:', result)
                return res
            })
        }
        log.info('setContactLocalTop called result:', result)
        return result
    }
    setCurHiddenSession(...args: any[]) {
        log.info('setCurHiddenSession called with args:', args)
        const result = this.instance.setCurHiddenSession(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setCurHiddenSession called  promise result:', result)
                return res
            })
        }
        log.info('setCurHiddenSession called result:', result)
        return result
    }
    setCurOnScreenMsgForMsgEvent(...args: any[]) {
        log.info('setCurOnScreenMsgForMsgEvent called with args:', args)
        const result = this.instance.setCurOnScreenMsgForMsgEvent(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setCurOnScreenMsgForMsgEvent called  promise result:', result)
                return res
            })
        }
        log.info('setCurOnScreenMsgForMsgEvent called result:', result)
        return result
    }
    setDraft(...args: any[]) {
        log.info('setDraft called with args:', args)
        const result = this.instance.setDraft(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setDraft called  promise result:', result)
                return res
            })
        }
        log.info('setDraft called result:', result)
        return result
    }
    setFocusOnBase(...args: any[]) {
        log.info('setFocusOnBase called with args:', args)
        const result = this.instance.setFocusOnBase(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setFocusOnBase called  promise result:', result)
                return res
            })
        }
        log.info('setFocusOnBase called result:', result)
        return result
    }
    setIKernelPublicAccountAdapter(...args: any[]) {
        log.info('setIKernelPublicAccountAdapter called with args:', args)
        const result = this.instance.setIKernelPublicAccountAdapter(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setIKernelPublicAccountAdapter called  promise result:', result)
                return res
            })
        }
        log.info('setIKernelPublicAccountAdapter called result:', result)
        return result
    }
    setIsStopKernelFetchLongMsg(...args: any[]) {
        log.info('setIsStopKernelFetchLongMsg called with args:', args)
        const result = this.instance.setIsStopKernelFetchLongMsg(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setIsStopKernelFetchLongMsg called  promise result:', result)
                return res
            })
        }
        log.info('setIsStopKernelFetchLongMsg called result:', result)
        return result
    }
    setLocalMsgRead(...args: any[]) {
        log.info('setLocalMsgRead called with args:', args)
        const result = this.instance.setLocalMsgRead(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setLocalMsgRead called  promise result:', result)
                return res
            })
        }
        log.info('setLocalMsgRead called result:', result)
        return result
    }
    setMarkUnreadFlag(...args: any[]) {
        log.info('setMarkUnreadFlag called with args:', args)
        const result = this.instance.setMarkUnreadFlag(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setMarkUnreadFlag called  promise result:', result)
                return res
            })
        }
        log.info('setMarkUnreadFlag called result:', result)
        return result
    }
    setMiscData(...args: any[]) {
        log.info('setMiscData called with args:', args)
        const result = this.instance.setMiscData(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setMiscData called  promise result:', result)
                return res
            })
        }
        log.info('setMiscData called result:', result)
        return result
    }
    setMsgEmojiLikes(...args: any[]) {
        log.info('setMsgEmojiLikes called with args:', args)
        const result = this.instance.setMsgEmojiLikes(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setMsgEmojiLikes called  promise result:', result)
                return res
            })
        }
        log.info('setMsgEmojiLikes called result:', result)
        return result
    }
    setMsgEmojiLikesForRole(...args: any[]) {
        log.info('setMsgEmojiLikesForRole called with args:', args)
        const result = this.instance.setMsgEmojiLikesForRole(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setMsgEmojiLikesForRole called  promise result:', result)
                return res
            })
        }
        log.info('setMsgEmojiLikesForRole called result:', result)
        return result
    }
    setMsgRead(...args: any[]) {
        log.info('setMsgRead called with args:', args)
        const result = this.instance.setMsgRead(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setMsgRead called  promise result:', result)
                return res
            })
        }
        log.info('setMsgRead called result:', result)
        return result
    }
    setMsgReadAndReport(...args: any[]) {
        log.info('setMsgReadAndReport called with args:', args)
        const result = this.instance.setMsgReadAndReport(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setMsgReadAndReport called  promise result:', result)
                return res
            })
        }
        log.info('setMsgReadAndReport called result:', result)
        return result
    }
    setMsgReadByChatType(...args: any[]) {
        log.info('setMsgReadByChatType called with args:', args)
        const result = this.instance.setMsgReadByChatType(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setMsgReadByChatType called  promise result:', result)
                return res
            })
        }
        log.info('setMsgReadByChatType called result:', result)
        return result
    }
    setMsgRichInfoFlag(...args: any[]) {
        log.info('setMsgRichInfoFlag called with args:', args)
        const result = this.instance.setMsgRichInfoFlag(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setMsgRichInfoFlag called  promise result:', result)
                return res
            })
        }
        log.info('setMsgRichInfoFlag called result:', result)
        return result
    }
    setMsgSetting(...args: any[]) {
        log.info('setMsgSetting called with args:', args)
        const result = this.instance.setMsgSetting(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setMsgSetting called  promise result:', result)
                return res
            })
        }
        log.info('setMsgSetting called result:', result)
        return result
    }
    setPowerStatus(...args: any[]) {
        log.info('setPowerStatus called with args:', args)
        const result = this.instance.setPowerStatus(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setPowerStatus called  promise result:', result)
                return res
            })
        }
        log.info('setPowerStatus called result:', result)
        return result
    }
    setPttPlayedState(...args: any[]) {
        log.info('setPttPlayedState called with args:', args)
        const result = this.instance.setPttPlayedState(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setPttPlayedState called  promise result:', result)
                return res
            })
        }
        log.info('setPttPlayedState called result:', result)
        return result
    }
    setRecentHiddenSession(...args: any[]) {
        log.info('setRecentHiddenSession called with args:', args)
        const result = this.instance.setRecentHiddenSession(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setRecentHiddenSession called  promise result:', result)
                return res
            })
        }
        log.info('setRecentHiddenSession called result:', result)
        return result
    }
    setReplyDraft(...args: any[]) {
        log.info('setReplyDraft called with args:', args)
        const result = this.instance.setReplyDraft(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setReplyDraft called  promise result:', result)
                return res
            })
        }
        log.info('setReplyDraft called result:', result)
        return result
    }
    setServiceAssistantSwitch(...args: any[]) {
        log.info('setServiceAssistantSwitch called with args:', args)
        const result = this.instance.setServiceAssistantSwitch(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setServiceAssistantSwitch called  promise result:', result)
                return res
            })
        }
        log.info('setServiceAssistantSwitch called result:', result)
        return result
    }
    setSpecificMsgReadAndReport(...args: any[]) {
        log.info('setSpecificMsgReadAndReport called with args:', args)
        const result = this.instance.setSpecificMsgReadAndReport(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setSpecificMsgReadAndReport called  promise result:', result)
                return res
            })
        }
        log.info('setSpecificMsgReadAndReport called result:', result)
        return result
    }
    setStatus(...args: any[]) {
        log.info('setStatus called with args:', args)
        const result = this.instance.setStatus(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setStatus called  promise result:', result)
                return res
            })
        }
        log.info('setStatus called result:', result)
        return result
    }
    setSubscribeFolderUsingSmallRedPoint(...args: any[]) {
        log.info('setSubscribeFolderUsingSmallRedPoint called with args:', args)
        const result = this.instance.setSubscribeFolderUsingSmallRedPoint(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setSubscribeFolderUsingSmallRedPoint called  promise result:', result)
                return res
            })
        }
        log.info('setSubscribeFolderUsingSmallRedPoint called result:', result)
        return result
    }
    setToken(...args: any[]) {
        log.info('setToken called with args:', args)
        const result = this.instance.setToken(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setToken called  promise result:', result)
                return res
            })
        }
        log.info('setToken called result:', result)
        return result
    }
    setTokenForMqq(...args: any[]) {
        log.info('setTokenForMqq called with args:', args)
        const result = this.instance.setTokenForMqq(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setTokenForMqq called  promise result:', result)
                return res
            })
        }
        log.info('setTokenForMqq called result:', result)
        return result
    }
    startMsgSync(...args: any[]) {
        log.info('startMsgSync called with args:', args)
        const result = this.instance.startMsgSync(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('startMsgSync called  promise result:', result)
                return res
            })
        }
        log.info('startMsgSync called result:', result)
        return result
    }
    stopGenerateMsg(...args: any[]) {
        log.info('stopGenerateMsg called with args:', args)
        const result = this.instance.stopGenerateMsg(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('stopGenerateMsg called  promise result:', result)
                return res
            })
        }
        log.info('stopGenerateMsg called result:', result)
        return result
    }
    stopImportOldDbMsg(...args: any[]) {
        log.info('stopImportOldDbMsg called with args:', args)
        const result = this.instance.stopImportOldDbMsg(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('stopImportOldDbMsg called  promise result:', result)
                return res
            })
        }
        log.info('stopImportOldDbMsg called result:', result)
        return result
    }
    stopImportOldDbMsgAndroid(...args: any[]) {
        log.info('stopImportOldDbMsgAndroid called with args:', args)
        const result = this.instance.stopImportOldDbMsgAndroid(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('stopImportOldDbMsgAndroid called  promise result:', result)
                return res
            })
        }
        log.info('stopImportOldDbMsgAndroid called result:', result)
        return result
    }
    switchAnonymousChat(...args: any[]) {
        log.info('switchAnonymousChat called with args:', args)
        const result = this.instance.switchAnonymousChat(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('switchAnonymousChat called  promise result:', result)
                return res
            })
        }
        log.info('switchAnonymousChat called result:', result)
        return result
    }
    switchBackGround(...args: any[]) {
        log.info('switchBackGround called with args:', args)
        const result = this.instance.switchBackGround(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('switchBackGround called  promise result:', result)
                return res
            })
        }
        log.info('switchBackGround called result:', result)
        return result
    }
    switchBackGroundForMqq(...args: any[]) {
        log.info('switchBackGroundForMqq called with args:', args)
        const result = this.instance.switchBackGroundForMqq(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('switchBackGroundForMqq called  promise result:', result)
                return res
            })
        }
        log.info('switchBackGroundForMqq called result:', result)
        return result
    }
    switchForeGround(...args: any[]) {
        log.info('switchForeGround called with args:', args)
        const result = this.instance.switchForeGround(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('switchForeGround called  promise result:', result)
                return res
            })
        }
        log.info('switchForeGround called result:', result)
        return result
    }
    switchForeGroundForMqq(...args: any[]) {
        log.info('switchForeGroundForMqq called with args:', args)
        const result = this.instance.switchForeGroundForMqq(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('switchForeGroundForMqq called  promise result:', result)
                return res
            })
        }
        log.info('switchForeGroundForMqq called result:', result)
        return result
    }
    switchToOfflineGetRichMediaElement(...args: any[]) {
        log.info('switchToOfflineGetRichMediaElement called with args:', args)
        const result = this.instance.switchToOfflineGetRichMediaElement(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('switchToOfflineGetRichMediaElement called  promise result:', result)
                return res
            })
        }
        log.info('switchToOfflineGetRichMediaElement called result:', result)
        return result
    }
    switchToOfflineSendMsg(...args: any[]) {
        log.info('switchToOfflineSendMsg called with args:', args)
        const result = this.instance.switchToOfflineSendMsg(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('switchToOfflineSendMsg called  promise result:', result)
                return res
            })
        }
        log.info('switchToOfflineSendMsg called result:', result)
        return result
    }
    tianshuMultiReport(...args: any[]) {
        log.info('tianshuMultiReport called with args:', args)
        const result = this.instance.tianshuMultiReport(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('tianshuMultiReport called  promise result:', result)
                return res
            })
        }
        log.info('tianshuMultiReport called result:', result)
        return result
    }
    tianshuReport(...args: any[]) {
        log.info('tianshuReport called with args:', args)
        const result = this.instance.tianshuReport(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('tianshuReport called  promise result:', result)
                return res
            })
        }
        log.info('tianshuReport called result:', result)
        return result
    }
    translatePtt2Text(...args: any[]) {
        log.info('translatePtt2Text called with args:', args)
        const result = this.instance.translatePtt2Text(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('translatePtt2Text called  promise result:', result)
                return res
            })
        }
        log.info('translatePtt2Text called result:', result)
        return result
    }
    translatePtt2TextAiVoice(...args: any[]) {
        log.info('translatePtt2TextAiVoice called with args:', args)
        const result = this.instance.translatePtt2TextAiVoice(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('translatePtt2TextAiVoice called  promise result:', result)
                return res
            })
        }
        log.info('translatePtt2TextAiVoice called result:', result)
        return result
    }
    unregisterSysMsgNotification(...args: any[]) {
        log.info('unregisterSysMsgNotification called with args:', args)
        const result = this.instance.unregisterSysMsgNotification(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('unregisterSysMsgNotification called  promise result:', result)
                return res
            })
        }
        log.info('unregisterSysMsgNotification called result:', result)
        return result
    }
    updateAnonymousInfo(...args: any[]) {
        log.info('updateAnonymousInfo called with args:', args)
        const result = this.instance.updateAnonymousInfo(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('updateAnonymousInfo called  promise result:', result)
                return res
            })
        }
        log.info('updateAnonymousInfo called result:', result)
        return result
    }
    updateElementExtBufForUI(...args: any[]) {
        log.info('updateElementExtBufForUI called with args:', args)
        const result = this.instance.updateElementExtBufForUI(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('updateElementExtBufForUI called  promise result:', result)
                return res
            })
        }
        log.info('updateElementExtBufForUI called result:', result)
        return result
    }
    updateMsgRecordExtPbBufForUI(...args: any[]) {
        log.info('updateMsgRecordExtPbBufForUI called with args:', args)
        const result = this.instance.updateMsgRecordExtPbBufForUI(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('updateMsgRecordExtPbBufForUI called  promise result:', result)
                return res
            })
        }
        log.info('updateMsgRecordExtPbBufForUI called result:', result)
        return result
    }
    updatePublicAccountInfo(...args: any[]) {
        log.info('updatePublicAccountInfo called with args:', args)
        const result = this.instance.updatePublicAccountInfo(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('updatePublicAccountInfo called  promise result:', result)
                return res
            })
        }
        log.info('updatePublicAccountInfo called result:', result)
        return result
    }
};
export const getNodeIKernelMsgService = (engine: any): any => {
    return class extends NodeIKernelMsgService {
        
    }
}