import { useLogger } from "../../common/log";

const log = useLogger('Wrapper/NodeIKernelGuildService')
export class NodeIKernelGuildService {
    protected static singleton?: any = undefined
    protected instance: any
    constructor(instance: any) {
        log.info('constructor called')
        this.instance = instance
    }
    CancelDownloadBroadcastHelper(...args: any[]) {
        log.info('CancelDownloadBroadcastHelper called with args:', args)
        const result = this.instance.CancelDownloadBroadcastHelper(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('CancelDownloadBroadcastHelper called  promise result:', result)
                return res
            })
        }
        log.info('CancelDownloadBroadcastHelper called result:', result)
        return result
    }
    DownloadBroadcastHelper(...args: any[]) {
        log.info('DownloadBroadcastHelper called with args:', args)
        const result = this.instance.DownloadBroadcastHelper(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('DownloadBroadcastHelper called  promise result:', result)
                return res
            })
        }
        log.info('DownloadBroadcastHelper called result:', result)
        return result
    }
    GetMemberInfoByOpenId(...args: any[]) {
        log.info('GetMemberInfoByOpenId called with args:', args)
        const result = this.instance.GetMemberInfoByOpenId(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('GetMemberInfoByOpenId called  promise result:', result)
                return res
            })
        }
        log.info('GetMemberInfoByOpenId called result:', result)
        return result
    }
    InstallBroadcastHelper(...args: any[]) {
        log.info('InstallBroadcastHelper called with args:', args)
        const result = this.instance.InstallBroadcastHelper(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('InstallBroadcastHelper called  promise result:', result)
                return res
            })
        }
        log.info('InstallBroadcastHelper called result:', result)
        return result
    }
    LoadGuildUserProfileInfo(...args: any[]) {
        log.info('LoadGuildUserProfileInfo called with args:', args)
        const result = this.instance.LoadGuildUserProfileInfo(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('LoadGuildUserProfileInfo called  promise result:', result)
                return res
            })
        }
        log.info('LoadGuildUserProfileInfo called result:', result)
        return result
    }
    activeBroadcast(...args: any[]) {
        log.info('activeBroadcast called with args:', args)
        const result = this.instance.activeBroadcast(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('activeBroadcast called  promise result:', result)
                return res
            })
        }
        log.info('activeBroadcast called result:', result)
        return result
    }
    addGuild(...args: any[]) {
        log.info('addGuild called with args:', args)
        const result = this.instance.addGuild(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('addGuild called  promise result:', result)
                return res
            })
        }
        log.info('addGuild called result:', result)
        return result
    }
    addGuildWithOption(...args: any[]) {
        log.info('addGuildWithOption called with args:', args)
        const result = this.instance.addGuildWithOption(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('addGuildWithOption called  promise result:', result)
                return res
            })
        }
        log.info('addGuildWithOption called result:', result)
        return result
    }
    addGuilds(...args: any[]) {
        log.info('addGuilds called with args:', args)
        const result = this.instance.addGuilds(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('addGuilds called  promise result:', result)
                return res
            })
        }
        log.info('addGuilds called result:', result)
        return result
    }
    addGuildsForGrowth(...args: any[]) {
        log.info('addGuildsForGrowth called with args:', args)
        const result = this.instance.addGuildsForGrowth(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('addGuildsForGrowth called  promise result:', result)
                return res
            })
        }
        log.info('addGuildsForGrowth called result:', result)
        return result
    }
    addKernelGuildListener(...args: any[]) {
        log.info('addKernelGuildListener called with args:', args)
        const result = this.instance.addKernelGuildListener(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('addKernelGuildListener called  promise result:', result)
                return res
            })
        }
        log.info('addKernelGuildListener called result:', result)
        return result
    }
    addRecentVisitGuildsListSync(...args: any[]) {
        log.info('addRecentVisitGuildsListSync called with args:', args)
        const result = this.instance.addRecentVisitGuildsListSync(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('addRecentVisitGuildsListSync called  promise result:', result)
                return res
            })
        }
        log.info('addRecentVisitGuildsListSync called result:', result)
        return result
    }
    addSpeakOrderByUser(...args: any[]) {
        log.info('addSpeakOrderByUser called with args:', args)
        const result = this.instance.addSpeakOrderByUser(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('addSpeakOrderByUser called  promise result:', result)
                return res
            })
        }
        log.info('addSpeakOrderByUser called result:', result)
        return result
    }
    anchorEnterRoom(...args: any[]) {
        log.info('anchorEnterRoom called with args:', args)
        const result = this.instance.anchorEnterRoom(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('anchorEnterRoom called  promise result:', result)
                return res
            })
        }
        log.info('anchorEnterRoom called result:', result)
        return result
    }
    anchorLeaveRoom(...args: any[]) {
        log.info('anchorLeaveRoom called with args:', args)
        const result = this.instance.anchorLeaveRoom(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('anchorLeaveRoom called  promise result:', result)
                return res
            })
        }
        log.info('anchorLeaveRoom called result:', result)
        return result
    }
    appAuthorization(...args: any[]) {
        log.info('appAuthorization called with args:', args)
        const result = this.instance.appAuthorization(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('appAuthorization called  promise result:', result)
                return res
            })
        }
        log.info('appAuthorization called result:', result)
        return result
    }
    applyToVisitGuildGroup(...args: any[]) {
        log.info('applyToVisitGuildGroup called with args:', args)
        const result = this.instance.applyToVisitGuildGroup(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('applyToVisitGuildGroup called  promise result:', result)
                return res
            })
        }
        log.info('applyToVisitGuildGroup called result:', result)
        return result
    }
    audienceEnterRoom(...args: any[]) {
        log.info('audienceEnterRoom called with args:', args)
        const result = this.instance.audienceEnterRoom(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('audienceEnterRoom called  promise result:', result)
                return res
            })
        }
        log.info('audienceEnterRoom called result:', result)
        return result
    }
    audienceLeaveRoom(...args: any[]) {
        log.info('audienceLeaveRoom called with args:', args)
        const result = this.instance.audienceLeaveRoom(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('audienceLeaveRoom called  promise result:', result)
                return res
            })
        }
        log.info('audienceLeaveRoom called result:', result)
        return result
    }
    authScreenShared(...args: any[]) {
        log.info('authScreenShared called with args:', args)
        const result = this.instance.authScreenShared(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('authScreenShared called  promise result:', result)
                return res
            })
        }
        log.info('authScreenShared called result:', result)
        return result
    }
    batchDeleteAISearchSession(...args: any[]) {
        log.info('batchDeleteAISearchSession called with args:', args)
        const result = this.instance.batchDeleteAISearchSession(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('batchDeleteAISearchSession called  promise result:', result)
                return res
            })
        }
        log.info('batchDeleteAISearchSession called result:', result)
        return result
    }
    batchFetchAudioChannelSimpleUserList(...args: any[]) {
        log.info('batchFetchAudioChannelSimpleUserList called with args:', args)
        const result = this.instance.batchFetchAudioChannelSimpleUserList(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('batchFetchAudioChannelSimpleUserList called  promise result:', result)
                return res
            })
        }
        log.info('batchFetchAudioChannelSimpleUserList called result:', result)
        return result
    }
    batchGetAudioBotStatus(...args: any[]) {
        log.info('batchGetAudioBotStatus called with args:', args)
        const result = this.instance.batchGetAudioBotStatus(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('batchGetAudioBotStatus called  promise result:', result)
                return res
            })
        }
        log.info('batchGetAudioBotStatus called result:', result)
        return result
    }
    batchGetGuildLabelInfo(...args: any[]) {
        log.info('batchGetGuildLabelInfo called with args:', args)
        const result = this.instance.batchGetGuildLabelInfo(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('batchGetGuildLabelInfo called  promise result:', result)
                return res
            })
        }
        log.info('batchGetGuildLabelInfo called result:', result)
        return result
    }
    batchGetItemDetail(...args: any[]) {
        log.info('batchGetItemDetail called with args:', args)
        const result = this.instance.batchGetItemDetail(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('batchGetItemDetail called  promise result:', result)
                return res
            })
        }
        log.info('batchGetItemDetail called result:', result)
        return result
    }
    batchSetCategoryFolded(...args: any[]) {
        log.info('batchSetCategoryFolded called with args:', args)
        const result = this.instance.batchSetCategoryFolded(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('batchSetCategoryFolded called  promise result:', result)
                return res
            })
        }
        log.info('batchSetCategoryFolded called result:', result)
        return result
    }
    batchSetGuildInfoBoolField(...args: any[]) {
        log.info('batchSetGuildInfoBoolField called with args:', args)
        const result = this.instance.batchSetGuildInfoBoolField(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('batchSetGuildInfoBoolField called  promise result:', result)
                return res
            })
        }
        log.info('batchSetGuildInfoBoolField called result:', result)
        return result
    }
    batchSetGuildInfoIntField(...args: any[]) {
        log.info('batchSetGuildInfoIntField called with args:', args)
        const result = this.instance.batchSetGuildInfoIntField(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('batchSetGuildInfoIntField called  promise result:', result)
                return res
            })
        }
        log.info('batchSetGuildInfoIntField called result:', result)
        return result
    }
    batchUpdateChannelsMsgNotifyType(...args: any[]) {
        log.info('batchUpdateChannelsMsgNotifyType called with args:', args)
        const result = this.instance.batchUpdateChannelsMsgNotifyType(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('batchUpdateChannelsMsgNotifyType called  promise result:', result)
                return res
            })
        }
        log.info('batchUpdateChannelsMsgNotifyType called result:', result)
        return result
    }
    beforehandGetGuildSpeakPermission(...args: any[]) {
        log.info('beforehandGetGuildSpeakPermission called with args:', args)
        const result = this.instance.beforehandGetGuildSpeakPermission(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('beforehandGetGuildSpeakPermission called  promise result:', result)
                return res
            })
        }
        log.info('beforehandGetGuildSpeakPermission called result:', result)
        return result
    }
    bindAppRole(...args: any[]) {
        log.info('bindAppRole called with args:', args)
        const result = this.instance.bindAppRole(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('bindAppRole called  promise result:', result)
                return res
            })
        }
        log.info('bindAppRole called result:', result)
        return result
    }
    cancelChannelTopMsg(...args: any[]) {
        log.info('cancelChannelTopMsg called with args:', args)
        const result = this.instance.cancelChannelTopMsg(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('cancelChannelTopMsg called  promise result:', result)
                return res
            })
        }
        log.info('cancelChannelTopMsg called result:', result)
        return result
    }
    cancelSpeakOrderByAdmin(...args: any[]) {
        log.info('cancelSpeakOrderByAdmin called with args:', args)
        const result = this.instance.cancelSpeakOrderByAdmin(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('cancelSpeakOrderByAdmin called  promise result:', result)
                return res
            })
        }
        log.info('cancelSpeakOrderByAdmin called result:', result)
        return result
    }
    cancelUserHandUpForAdmin(...args: any[]) {
        log.info('cancelUserHandUpForAdmin called with args:', args)
        const result = this.instance.cancelUserHandUpForAdmin(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('cancelUserHandUpForAdmin called  promise result:', result)
                return res
            })
        }
        log.info('cancelUserHandUpForAdmin called result:', result)
        return result
    }
    changeChannelCategoryNameWithId(...args: any[]) {
        log.info('changeChannelCategoryNameWithId called with args:', args)
        const result = this.instance.changeChannelCategoryNameWithId(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('changeChannelCategoryNameWithId called  promise result:', result)
                return res
            })
        }
        log.info('changeChannelCategoryNameWithId called result:', result)
        return result
    }
    changeGuildAllowSearch(...args: any[]) {
        log.info('changeGuildAllowSearch called with args:', args)
        const result = this.instance.changeGuildAllowSearch(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('changeGuildAllowSearch called  promise result:', result)
                return res
            })
        }
        log.info('changeGuildAllowSearch called result:', result)
        return result
    }
    checkAVState(...args: any[]) {
        log.info('checkAVState called with args:', args)
        const result = this.instance.checkAVState(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('checkAVState called  promise result:', result)
                return res
            })
        }
        log.info('checkAVState called result:', result)
        return result
    }
    checkAndEncryptText(...args: any[]) {
        log.info('checkAndEncryptText called with args:', args)
        const result = this.instance.checkAndEncryptText(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('checkAndEncryptText called  promise result:', result)
                return res
            })
        }
        log.info('checkAndEncryptText called result:', result)
        return result
    }
    checkFeedAbstractInfo(...args: any[]) {
        log.info('checkFeedAbstractInfo called with args:', args)
        const result = this.instance.checkFeedAbstractInfo(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('checkFeedAbstractInfo called  promise result:', result)
                return res
            })
        }
        log.info('checkFeedAbstractInfo called result:', result)
        return result
    }
    checkIsStrangerNewMember(...args: any[]) {
        log.info('checkIsStrangerNewMember called with args:', args)
        const result = this.instance.checkIsStrangerNewMember(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('checkIsStrangerNewMember called  promise result:', result)
                return res
            })
        }
        log.info('checkIsStrangerNewMember called result:', result)
        return result
    }
    checkLobbyAppAuthStatus(...args: any[]) {
        log.info('checkLobbyAppAuthStatus called with args:', args)
        const result = this.instance.checkLobbyAppAuthStatus(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('checkLobbyAppAuthStatus called  promise result:', result)
                return res
            })
        }
        log.info('checkLobbyAppAuthStatus called result:', result)
        return result
    }
    checkPreventAddiction(...args: any[]) {
        log.info('checkPreventAddiction called with args:', args)
        const result = this.instance.checkPreventAddiction(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('checkPreventAddiction called  promise result:', result)
                return res
            })
        }
        log.info('checkPreventAddiction called result:', result)
        return result
    }
    checkUserBannedSpeakInChannel(...args: any[]) {
        log.info('checkUserBannedSpeakInChannel called with args:', args)
        const result = this.instance.checkUserBannedSpeakInChannel(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('checkUserBannedSpeakInChannel called  promise result:', result)
                return res
            })
        }
        log.info('checkUserBannedSpeakInChannel called result:', result)
        return result
    }
    checkUserFreeGiftInfo(...args: any[]) {
        log.info('checkUserFreeGiftInfo called with args:', args)
        const result = this.instance.checkUserFreeGiftInfo(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('checkUserFreeGiftInfo called  promise result:', result)
                return res
            })
        }
        log.info('checkUserFreeGiftInfo called result:', result)
        return result
    }
    clearGuildRelatedData(...args: any[]) {
        log.info('clearGuildRelatedData called with args:', args)
        const result = this.instance.clearGuildRelatedData(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('clearGuildRelatedData called  promise result:', result)
                return res
            })
        }
        log.info('clearGuildRelatedData called result:', result)
        return result
    }
    clearLiveBroadcastRecord(...args: any[]) {
        log.info('clearLiveBroadcastRecord called with args:', args)
        const result = this.instance.clearLiveBroadcastRecord(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('clearLiveBroadcastRecord called  promise result:', result)
                return res
            })
        }
        log.info('clearLiveBroadcastRecord called result:', result)
        return result
    }
    closeAVLobbyApp(...args: any[]) {
        log.info('closeAVLobbyApp called with args:', args)
        const result = this.instance.closeAVLobbyApp(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('closeAVLobbyApp called  promise result:', result)
                return res
            })
        }
        log.info('closeAVLobbyApp called result:', result)
        return result
    }
    closeChannelActivitySwitch(...args: any[]) {
        log.info('closeChannelActivitySwitch called with args:', args)
        const result = this.instance.closeChannelActivitySwitch(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('closeChannelActivitySwitch called  promise result:', result)
                return res
            })
        }
        log.info('closeChannelActivitySwitch called result:', result)
        return result
    }
    closeChannelTopMsg(...args: any[]) {
        log.info('closeChannelTopMsg called with args:', args)
        const result = this.instance.closeChannelTopMsg(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('closeChannelTopMsg called  promise result:', result)
                return res
            })
        }
        log.info('closeChannelTopMsg called result:', result)
        return result
    }
    convertGuildAndThirdIds(...args: any[]) {
        log.info('convertGuildAndThirdIds called with args:', args)
        const result = this.instance.convertGuildAndThirdIds(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('convertGuildAndThirdIds called  promise result:', result)
                return res
            })
        }
        log.info('convertGuildAndThirdIds called result:', result)
        return result
    }
    convertToGuildInviteInfo(...args: any[]) {
        log.info('convertToGuildInviteInfo called with args:', args)
        const result = this.instance.convertToGuildInviteInfo(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('convertToGuildInviteInfo called  promise result:', result)
                return res
            })
        }
        log.info('convertToGuildInviteInfo called result:', result)
        return result
    }
    createChannelCategoryWithId(...args: any[]) {
        log.info('createChannelCategoryWithId called with args:', args)
        const result = this.instance.createChannelCategoryWithId(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('createChannelCategoryWithId called  promise result:', result)
                return res
            })
        }
        log.info('createChannelCategoryWithId called result:', result)
        return result
    }
    createChannelWithId(...args: any[]) {
        log.info('createChannelWithId called with args:', args)
        const result = this.instance.createChannelWithId(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('createChannelWithId called  promise result:', result)
                return res
            })
        }
        log.info('createChannelWithId called result:', result)
        return result
    }
    createDirectMsgSession(...args: any[]) {
        log.info('createDirectMsgSession called with args:', args)
        const result = this.instance.createDirectMsgSession(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('createDirectMsgSession called  promise result:', result)
                return res
            })
        }
        log.info('createDirectMsgSession called result:', result)
        return result
    }
    createGuild(...args: any[]) {
        log.info('createGuild called with args:', args)
        const result = this.instance.createGuild(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('createGuild called  promise result:', result)
                return res
            })
        }
        log.info('createGuild called result:', result)
        return result
    }
    createLinkChannelWithId(...args: any[]) {
        log.info('createLinkChannelWithId called with args:', args)
        const result = this.instance.createLinkChannelWithId(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('createLinkChannelWithId called  promise result:', result)
                return res
            })
        }
        log.info('createLinkChannelWithId called result:', result)
        return result
    }
    createRole(...args: any[]) {
        log.info('createRole called with args:', args)
        const result = this.instance.createRole(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('createRole called  promise result:', result)
                return res
            })
        }
        log.info('createRole called result:', result)
        return result
    }
    createSchedule(...args: any[]) {
        log.info('createSchedule called with args:', args)
        const result = this.instance.createSchedule(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('createSchedule called  promise result:', result)
                return res
            })
        }
        log.info('createSchedule called result:', result)
        return result
    }
    createScheduleLimitQuery(...args: any[]) {
        log.info('createScheduleLimitQuery called with args:', args)
        const result = this.instance.createScheduleLimitQuery(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('createScheduleLimitQuery called  promise result:', result)
                return res
            })
        }
        log.info('createScheduleLimitQuery called result:', result)
        return result
    }
    createScheduleV2(...args: any[]) {
        log.info('createScheduleV2 called with args:', args)
        const result = this.instance.createScheduleV2(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('createScheduleV2 called  promise result:', result)
                return res
            })
        }
        log.info('createScheduleV2 called result:', result)
        return result
    }
    customChannelMsgNotifyType(...args: any[]) {
        log.info('customChannelMsgNotifyType called with args:', args)
        const result = this.instance.customChannelMsgNotifyType(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('customChannelMsgNotifyType called  promise result:', result)
                return res
            })
        }
        log.info('customChannelMsgNotifyType called result:', result)
        return result
    }
    dealHandUpRequestForAdmin(...args: any[]) {
        log.info('dealHandUpRequestForAdmin called with args:', args)
        const result = this.instance.dealHandUpRequestForAdmin(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('dealHandUpRequestForAdmin called  promise result:', result)
                return res
            })
        }
        log.info('dealHandUpRequestForAdmin called result:', result)
        return result
    }
    dealNotice(...args: any[]) {
        log.info('dealNotice called with args:', args)
        const result = this.instance.dealNotice(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('dealNotice called  promise result:', result)
                return res
            })
        }
        log.info('dealNotice called result:', result)
        return result
    }
    decodeGProLiveRoomInfo(...args: any[]) {
        log.info('decodeGProLiveRoomInfo called with args:', args)
        const result = this.instance.decodeGProLiveRoomInfo(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('decodeGProLiveRoomInfo called  promise result:', result)
                return res
            })
        }
        log.info('decodeGProLiveRoomInfo called result:', result)
        return result
    }
    decodeGuildGroupInfo(...args: any[]) {
        log.info('decodeGuildGroupInfo called with args:', args)
        const result = this.instance.decodeGuildGroupInfo(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('decodeGuildGroupInfo called  promise result:', result)
                return res
            })
        }
        log.info('decodeGuildGroupInfo called result:', result)
        return result
    }
    decodeInviteJumpInfo(...args: any[]) {
        log.info('decodeInviteJumpInfo called with args:', args)
        const result = this.instance.decodeInviteJumpInfo(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('decodeInviteJumpInfo called  promise result:', result)
                return res
            })
        }
        log.info('decodeInviteJumpInfo called result:', result)
        return result
    }
    decodeMVPFeedsRspPb(...args: any[]) {
        log.info('decodeMVPFeedsRspPb called with args:', args)
        const result = this.instance.decodeMVPFeedsRspPb(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('decodeMVPFeedsRspPb called  promise result:', result)
                return res
            })
        }
        log.info('decodeMVPFeedsRspPb called result:', result)
        return result
    }
    decodeScheduleInfo(...args: any[]) {
        log.info('decodeScheduleInfo called with args:', args)
        const result = this.instance.decodeScheduleInfo(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('decodeScheduleInfo called  promise result:', result)
                return res
            })
        }
        log.info('decodeScheduleInfo called result:', result)
        return result
    }
    deleteAISearchSession(...args: any[]) {
        log.info('deleteAISearchSession called with args:', args)
        const result = this.instance.deleteAISearchSession(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('deleteAISearchSession called  promise result:', result)
                return res
            })
        }
        log.info('deleteAISearchSession called result:', result)
        return result
    }
    deleteFeed(...args: any[]) {
        log.info('deleteFeed called with args:', args)
        const result = this.instance.deleteFeed(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('deleteFeed called  promise result:', result)
                return res
            })
        }
        log.info('deleteFeed called result:', result)
        return result
    }
    deleteGuildEssence(...args: any[]) {
        log.info('deleteGuildEssence called with args:', args)
        const result = this.instance.deleteGuildEssence(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('deleteGuildEssence called  promise result:', result)
                return res
            })
        }
        log.info('deleteGuildEssence called result:', result)
        return result
    }
    deleteGuildGlobalBanner(...args: any[]) {
        log.info('deleteGuildGlobalBanner called with args:', args)
        const result = this.instance.deleteGuildGlobalBanner(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('deleteGuildGlobalBanner called  promise result:', result)
                return res
            })
        }
        log.info('deleteGuildGlobalBanner called result:', result)
        return result
    }
    deleteRole(...args: any[]) {
        log.info('deleteRole called with args:', args)
        const result = this.instance.deleteRole(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('deleteRole called  promise result:', result)
                return res
            })
        }
        log.info('deleteRole called result:', result)
        return result
    }
    deleteSystemNoticeMessage(...args: any[]) {
        log.info('deleteSystemNoticeMessage called with args:', args)
        const result = this.instance.deleteSystemNoticeMessage(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('deleteSystemNoticeMessage called  promise result:', result)
                return res
            })
        }
        log.info('deleteSystemNoticeMessage called result:', result)
        return result
    }
    destroyGuild(...args: any[]) {
        log.info('destroyGuild called with args:', args)
        const result = this.instance.destroyGuild(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('destroyGuild called  promise result:', result)
                return res
            })
        }
        log.info('destroyGuild called result:', result)
        return result
    }
    doGuildCheckin(...args: any[]) {
        log.info('doGuildCheckin called with args:', args)
        const result = this.instance.doGuildCheckin(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('doGuildCheckin called  promise result:', result)
                return res
            })
        }
        log.info('doGuildCheckin called result:', result)
        return result
    }
    doPreferForFeed(...args: any[]) {
        log.info('doPreferForFeed called with args:', args)
        const result = this.instance.doPreferForFeed(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('doPreferForFeed called  promise result:', result)
                return res
            })
        }
        log.info('doPreferForFeed called result:', result)
        return result
    }
    doRealNameAuth(...args: any[]) {
        log.info('doRealNameAuth called with args:', args)
        const result = this.instance.doRealNameAuth(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('doRealNameAuth called  promise result:', result)
                return res
            })
        }
        log.info('doRealNameAuth called result:', result)
        return result
    }
    domainResolveByLocalDns(...args: any[]) {
        log.info('domainResolveByLocalDns called with args:', args)
        const result = this.instance.domainResolveByLocalDns(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('domainResolveByLocalDns called  promise result:', result)
                return res
            })
        }
        log.info('domainResolveByLocalDns called result:', result)
        return result
    }
    editSchedule(...args: any[]) {
        log.info('editSchedule called with args:', args)
        const result = this.instance.editSchedule(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('editSchedule called  promise result:', result)
                return res
            })
        }
        log.info('editSchedule called result:', result)
        return result
    }
    editScheduleV2(...args: any[]) {
        log.info('editScheduleV2 called with args:', args)
        const result = this.instance.editScheduleV2(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('editScheduleV2 called  promise result:', result)
                return res
            })
        }
        log.info('editScheduleV2 called result:', result)
        return result
    }
    endPush(...args: any[]) {
        log.info('endPush called with args:', args)
        const result = this.instance.endPush(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('endPush called  promise result:', result)
                return res
            })
        }
        log.info('endPush called result:', result)
        return result
    }
    enterAudioChannel(...args: any[]) {
        log.info('enterAudioChannel called with args:', args)
        const result = this.instance.enterAudioChannel(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('enterAudioChannel called  promise result:', result)
                return res
            })
        }
        log.info('enterAudioChannel called result:', result)
        return result
    }
    enterAudioLiveChannel(...args: any[]) {
        log.info('enterAudioLiveChannel called with args:', args)
        const result = this.instance.enterAudioLiveChannel(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('enterAudioLiveChannel called  promise result:', result)
                return res
            })
        }
        log.info('enterAudioLiveChannel called result:', result)
        return result
    }
    enterGuildGroupAIO(...args: any[]) {
        log.info('enterGuildGroupAIO called with args:', args)
        const result = this.instance.enterGuildGroupAIO(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('enterGuildGroupAIO called  promise result:', result)
                return res
            })
        }
        log.info('enterGuildGroupAIO called result:', result)
        return result
    }
    enterLiveChannel(...args: any[]) {
        log.info('enterLiveChannel called with args:', args)
        const result = this.instance.enterLiveChannel(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('enterLiveChannel called  promise result:', result)
                return res
            })
        }
        log.info('enterLiveChannel called result:', result)
        return result
    }
    exitAudioChannel(...args: any[]) {
        log.info('exitAudioChannel called with args:', args)
        const result = this.instance.exitAudioChannel(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('exitAudioChannel called  promise result:', result)
                return res
            })
        }
        log.info('exitAudioChannel called result:', result)
        return result
    }
    exitAudioLiveChannel(...args: any[]) {
        log.info('exitAudioLiveChannel called with args:', args)
        const result = this.instance.exitAudioLiveChannel(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('exitAudioLiveChannel called  promise result:', result)
                return res
            })
        }
        log.info('exitAudioLiveChannel called result:', result)
        return result
    }
    exitLiveChannel(...args: any[]) {
        log.info('exitLiveChannel called with args:', args)
        const result = this.instance.exitLiveChannel(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('exitLiveChannel called  promise result:', result)
                return res
            })
        }
        log.info('exitLiveChannel called result:', result)
        return result
    }
    exposeGuildFloatingLayer(...args: any[]) {
        log.info('exposeGuildFloatingLayer called with args:', args)
        const result = this.instance.exposeGuildFloatingLayer(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('exposeGuildFloatingLayer called  promise result:', result)
                return res
            })
        }
        log.info('exposeGuildFloatingLayer called result:', result)
        return result
    }
    exposeGuildTaskCard(...args: any[]) {
        log.info('exposeGuildTaskCard called with args:', args)
        const result = this.instance.exposeGuildTaskCard(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('exposeGuildTaskCard called  promise result:', result)
                return res
            })
        }
        log.info('exposeGuildTaskCard called result:', result)
        return result
    }
    exposeRecommends(...args: any[]) {
        log.info('exposeRecommends called with args:', args)
        const result = this.instance.exposeRecommends(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('exposeRecommends called  promise result:', result)
                return res
            })
        }
        log.info('exposeRecommends called result:', result)
        return result
    }
    fetchActiveChannelByChannelType(...args: any[]) {
        log.info('fetchActiveChannelByChannelType called with args:', args)
        const result = this.instance.fetchActiveChannelByChannelType(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('fetchActiveChannelByChannelType called  promise result:', result)
                return res
            })
        }
        log.info('fetchActiveChannelByChannelType called result:', result)
        return result
    }
    fetchActiveChannels(...args: any[]) {
        log.info('fetchActiveChannels called with args:', args)
        const result = this.instance.fetchActiveChannels(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('fetchActiveChannels called  promise result:', result)
                return res
            })
        }
        log.info('fetchActiveChannels called result:', result)
        return result
    }
    fetchAddGuildInfo(...args: any[]) {
        log.info('fetchAddGuildInfo called with args:', args)
        const result = this.instance.fetchAddGuildInfo(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('fetchAddGuildInfo called  promise result:', result)
                return res
            })
        }
        log.info('fetchAddGuildInfo called result:', result)
        return result
    }
    fetchAddGuildOption(...args: any[]) {
        log.info('fetchAddGuildOption called with args:', args)
        const result = this.instance.fetchAddGuildOption(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('fetchAddGuildOption called  promise result:', result)
                return res
            })
        }
        log.info('fetchAddGuildOption called result:', result)
        return result
    }
    fetchAnchorPreparePage(...args: any[]) {
        log.info('fetchAnchorPreparePage called with args:', args)
        const result = this.instance.fetchAnchorPreparePage(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('fetchAnchorPreparePage called  promise result:', result)
                return res
            })
        }
        log.info('fetchAnchorPreparePage called result:', result)
        return result
    }
    fetchAppInfos(...args: any[]) {
        log.info('fetchAppInfos called with args:', args)
        const result = this.instance.fetchAppInfos(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('fetchAppInfos called  promise result:', result)
                return res
            })
        }
        log.info('fetchAppInfos called result:', result)
        return result
    }
    fetchAudioChannelUserList(...args: any[]) {
        log.info('fetchAudioChannelUserList called with args:', args)
        const result = this.instance.fetchAudioChannelUserList(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('fetchAudioChannelUserList called  promise result:', result)
                return res
            })
        }
        log.info('fetchAudioChannelUserList called result:', result)
        return result
    }
    fetchAudioLiveChannelBlockUserState(...args: any[]) {
        log.info('fetchAudioLiveChannelBlockUserState called with args:', args)
        const result = this.instance.fetchAudioLiveChannelBlockUserState(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('fetchAudioLiveChannelBlockUserState called  promise result:', result)
                return res
            })
        }
        log.info('fetchAudioLiveChannelBlockUserState called result:', result)
        return result
    }
    fetchAudioLiveChannelGroupList(...args: any[]) {
        log.info('fetchAudioLiveChannelGroupList called with args:', args)
        const result = this.instance.fetchAudioLiveChannelGroupList(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('fetchAudioLiveChannelGroupList called  promise result:', result)
                return res
            })
        }
        log.info('fetchAudioLiveChannelGroupList called result:', result)
        return result
    }
    fetchAudioLiveChannelUserList(...args: any[]) {
        log.info('fetchAudioLiveChannelUserList called with args:', args)
        const result = this.instance.fetchAudioLiveChannelUserList(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('fetchAudioLiveChannelUserList called  promise result:', result)
                return res
            })
        }
        log.info('fetchAudioLiveChannelUserList called result:', result)
        return result
    }
    fetchBatchBotGetCommand(...args: any[]) {
        log.info('fetchBatchBotGetCommand called with args:', args)
        const result = this.instance.fetchBatchBotGetCommand(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('fetchBatchBotGetCommand called  promise result:', result)
                return res
            })
        }
        log.info('fetchBatchBotGetCommand called result:', result)
        return result
    }
    fetchCategoryAdminInfoList(...args: any[]) {
        log.info('fetchCategoryAdminInfoList called with args:', args)
        const result = this.instance.fetchCategoryAdminInfoList(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('fetchCategoryAdminInfoList called  promise result:', result)
                return res
            })
        }
        log.info('fetchCategoryAdminInfoList called result:', result)
        return result
    }
    fetchChannelAdminInfoList(...args: any[]) {
        log.info('fetchChannelAdminInfoList called with args:', args)
        const result = this.instance.fetchChannelAdminInfoList(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('fetchChannelAdminInfoList called  promise result:', result)
                return res
            })
        }
        log.info('fetchChannelAdminInfoList called result:', result)
        return result
    }
    fetchChannelAuthControlMemberList(...args: any[]) {
        log.info('fetchChannelAuthControlMemberList called with args:', args)
        const result = this.instance.fetchChannelAuthControlMemberList(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('fetchChannelAuthControlMemberList called  promise result:', result)
                return res
            })
        }
        log.info('fetchChannelAuthControlMemberList called result:', result)
        return result
    }
    fetchChannelAuthControlRoleList(...args: any[]) {
        log.info('fetchChannelAuthControlRoleList called with args:', args)
        const result = this.instance.fetchChannelAuthControlRoleList(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('fetchChannelAuthControlRoleList called  promise result:', result)
                return res
            })
        }
        log.info('fetchChannelAuthControlRoleList called result:', result)
        return result
    }
    fetchChannelAuthControlUnableMemberList(...args: any[]) {
        log.info('fetchChannelAuthControlUnableMemberList called with args:', args)
        const result = this.instance.fetchChannelAuthControlUnableMemberList(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('fetchChannelAuthControlUnableMemberList called  promise result:', result)
                return res
            })
        }
        log.info('fetchChannelAuthControlUnableMemberList called result:', result)
        return result
    }
    fetchChannelAuthInfo(...args: any[]) {
        log.info('fetchChannelAuthInfo called with args:', args)
        const result = this.instance.fetchChannelAuthInfo(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('fetchChannelAuthInfo called  promise result:', result)
                return res
            })
        }
        log.info('fetchChannelAuthInfo called result:', result)
        return result
    }
    fetchChannelInfo(...args: any[]) {
        log.info('fetchChannelInfo called with args:', args)
        const result = this.instance.fetchChannelInfo(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('fetchChannelInfo called  promise result:', result)
                return res
            })
        }
        log.info('fetchChannelInfo called result:', result)
        return result
    }
    fetchChannelInfoWithCategory(...args: any[]) {
        log.info('fetchChannelInfoWithCategory called with args:', args)
        const result = this.instance.fetchChannelInfoWithCategory(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('fetchChannelInfoWithCategory called  promise result:', result)
                return res
            })
        }
        log.info('fetchChannelInfoWithCategory called result:', result)
        return result
    }
    fetchChannelInfoWithUnreadStatus(...args: any[]) {
        log.info('fetchChannelInfoWithUnreadStatus called with args:', args)
        const result = this.instance.fetchChannelInfoWithUnreadStatus(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('fetchChannelInfoWithUnreadStatus called  promise result:', result)
                return res
            })
        }
        log.info('fetchChannelInfoWithUnreadStatus called result:', result)
        return result
    }
    fetchChannelInvisibleMemberList(...args: any[]) {
        log.info('fetchChannelInvisibleMemberList called with args:', args)
        const result = this.instance.fetchChannelInvisibleMemberList(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('fetchChannelInvisibleMemberList called  promise result:', result)
                return res
            })
        }
        log.info('fetchChannelInvisibleMemberList called result:', result)
        return result
    }
    fetchChannelInvisibleRoleList(...args: any[]) {
        log.info('fetchChannelInvisibleRoleList called with args:', args)
        const result = this.instance.fetchChannelInvisibleRoleList(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('fetchChannelInvisibleRoleList called  promise result:', result)
                return res
            })
        }
        log.info('fetchChannelInvisibleRoleList called result:', result)
        return result
    }
    fetchChannelList(...args: any[]) {
        log.info('fetchChannelList called with args:', args)
        const result = this.instance.fetchChannelList(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('fetchChannelList called  promise result:', result)
                return res
            })
        }
        log.info('fetchChannelList called result:', result)
        return result
    }
    fetchChannelListState(...args: any[]) {
        log.info('fetchChannelListState called with args:', args)
        const result = this.instance.fetchChannelListState(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('fetchChannelListState called  promise result:', result)
                return res
            })
        }
        log.info('fetchChannelListState called result:', result)
        return result
    }
    fetchChannelLiveableMemberList(...args: any[]) {
        log.info('fetchChannelLiveableMemberList called with args:', args)
        const result = this.instance.fetchChannelLiveableMemberList(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('fetchChannelLiveableMemberList called  promise result:', result)
                return res
            })
        }
        log.info('fetchChannelLiveableMemberList called result:', result)
        return result
    }
    fetchChannelLiveableRoleList(...args: any[]) {
        log.info('fetchChannelLiveableRoleList called with args:', args)
        const result = this.instance.fetchChannelLiveableRoleList(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('fetchChannelLiveableRoleList called  promise result:', result)
                return res
            })
        }
        log.info('fetchChannelLiveableRoleList called result:', result)
        return result
    }
    fetchChannelSpeakableMemberList(...args: any[]) {
        log.info('fetchChannelSpeakableMemberList called with args:', args)
        const result = this.instance.fetchChannelSpeakableMemberList(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('fetchChannelSpeakableMemberList called  promise result:', result)
                return res
            })
        }
        log.info('fetchChannelSpeakableMemberList called result:', result)
        return result
    }
    fetchChannelSpeakableRoleList(...args: any[]) {
        log.info('fetchChannelSpeakableRoleList called with args:', args)
        const result = this.instance.fetchChannelSpeakableRoleList(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('fetchChannelSpeakableRoleList called  promise result:', result)
                return res
            })
        }
        log.info('fetchChannelSpeakableRoleList called result:', result)
        return result
    }
    fetchChannelUnlivableMemberList(...args: any[]) {
        log.info('fetchChannelUnlivableMemberList called with args:', args)
        const result = this.instance.fetchChannelUnlivableMemberList(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('fetchChannelUnlivableMemberList called  promise result:', result)
                return res
            })
        }
        log.info('fetchChannelUnlivableMemberList called result:', result)
        return result
    }
    fetchChannelUnlivableRoleList(...args: any[]) {
        log.info('fetchChannelUnlivableRoleList called with args:', args)
        const result = this.instance.fetchChannelUnlivableRoleList(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('fetchChannelUnlivableRoleList called  promise result:', result)
                return res
            })
        }
        log.info('fetchChannelUnlivableRoleList called result:', result)
        return result
    }
    fetchChannelUnspeakableMemberList(...args: any[]) {
        log.info('fetchChannelUnspeakableMemberList called with args:', args)
        const result = this.instance.fetchChannelUnspeakableMemberList(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('fetchChannelUnspeakableMemberList called  promise result:', result)
                return res
            })
        }
        log.info('fetchChannelUnspeakableMemberList called result:', result)
        return result
    }
    fetchChannelUnspeakableRoleList(...args: any[]) {
        log.info('fetchChannelUnspeakableRoleList called with args:', args)
        const result = this.instance.fetchChannelUnspeakableRoleList(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('fetchChannelUnspeakableRoleList called  promise result:', result)
                return res
            })
        }
        log.info('fetchChannelUnspeakableRoleList called result:', result)
        return result
    }
    fetchChannelUserPermission(...args: any[]) {
        log.info('fetchChannelUserPermission called with args:', args)
        const result = this.instance.fetchChannelUserPermission(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('fetchChannelUserPermission called  promise result:', result)
                return res
            })
        }
        log.info('fetchChannelUserPermission called result:', result)
        return result
    }
    fetchChannelVisibleAllMemberList(...args: any[]) {
        log.info('fetchChannelVisibleAllMemberList called with args:', args)
        const result = this.instance.fetchChannelVisibleAllMemberList(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('fetchChannelVisibleAllMemberList called  promise result:', result)
                return res
            })
        }
        log.info('fetchChannelVisibleAllMemberList called result:', result)
        return result
    }
    fetchChannelVisibleMemberList(...args: any[]) {
        log.info('fetchChannelVisibleMemberList called with args:', args)
        const result = this.instance.fetchChannelVisibleMemberList(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('fetchChannelVisibleMemberList called  promise result:', result)
                return res
            })
        }
        log.info('fetchChannelVisibleMemberList called result:', result)
        return result
    }
    fetchChannelVisibleRoleList(...args: any[]) {
        log.info('fetchChannelVisibleRoleList called with args:', args)
        const result = this.instance.fetchChannelVisibleRoleList(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('fetchChannelVisibleRoleList called  promise result:', result)
                return res
            })
        }
        log.info('fetchChannelVisibleRoleList called result:', result)
        return result
    }
    fetchChannelVisibleRoleListWithoutLevelRole(...args: any[]) {
        log.info('fetchChannelVisibleRoleListWithoutLevelRole called with args:', args)
        const result = this.instance.fetchChannelVisibleRoleListWithoutLevelRole(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('fetchChannelVisibleRoleListWithoutLevelRole called  promise result:', result)
                return res
            })
        }
        log.info('fetchChannelVisibleRoleListWithoutLevelRole called result:', result)
        return result
    }
    fetchComments(...args: any[]) {
        log.info('fetchComments called with args:', args)
        const result = this.instance.fetchComments(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('fetchComments called  promise result:', result)
                return res
            })
        }
        log.info('fetchComments called result:', result)
        return result
    }
    fetchCurrentLiveRoomInfo(...args: any[]) {
        log.info('fetchCurrentLiveRoomInfo called with args:', args)
        const result = this.instance.fetchCurrentLiveRoomInfo(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('fetchCurrentLiveRoomInfo called  promise result:', result)
                return res
            })
        }
        log.info('fetchCurrentLiveRoomInfo called result:', result)
        return result
    }
    fetchDirectMsgBlack(...args: any[]) {
        log.info('fetchDirectMsgBlack called with args:', args)
        const result = this.instance.fetchDirectMsgBlack(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('fetchDirectMsgBlack called  promise result:', result)
                return res
            })
        }
        log.info('fetchDirectMsgBlack called result:', result)
        return result
    }
    fetchDirectMsgStatus(...args: any[]) {
        log.info('fetchDirectMsgStatus called with args:', args)
        const result = this.instance.fetchDirectMsgStatus(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('fetchDirectMsgStatus called  promise result:', result)
                return res
            })
        }
        log.info('fetchDirectMsgStatus called result:', result)
        return result
    }
    fetchEndPageMessage(...args: any[]) {
        log.info('fetchEndPageMessage called with args:', args)
        const result = this.instance.fetchEndPageMessage(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('fetchEndPageMessage called  promise result:', result)
                return res
            })
        }
        log.info('fetchEndPageMessage called result:', result)
        return result
    }
    fetchFeedCommentsNotifySwitch(...args: any[]) {
        log.info('fetchFeedCommentsNotifySwitch called with args:', args)
        const result = this.instance.fetchFeedCommentsNotifySwitch(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('fetchFeedCommentsNotifySwitch called  promise result:', result)
                return res
            })
        }
        log.info('fetchFeedCommentsNotifySwitch called result:', result)
        return result
    }
    fetchGlobalPrivacySwitch(...args: any[]) {
        log.info('fetchGlobalPrivacySwitch called with args:', args)
        const result = this.instance.fetchGlobalPrivacySwitch(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('fetchGlobalPrivacySwitch called  promise result:', result)
                return res
            })
        }
        log.info('fetchGlobalPrivacySwitch called result:', result)
        return result
    }
    fetchGuestGuild(...args: any[]) {
        log.info('fetchGuestGuild called with args:', args)
        const result = this.instance.fetchGuestGuild(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('fetchGuestGuild called  promise result:', result)
                return res
            })
        }
        log.info('fetchGuestGuild called result:', result)
        return result
    }
    fetchGuestGuildInfoForBlackJudge(...args: any[]) {
        log.info('fetchGuestGuildInfoForBlackJudge called with args:', args)
        const result = this.instance.fetchGuestGuildInfoForBlackJudge(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('fetchGuestGuildInfoForBlackJudge called  promise result:', result)
                return res
            })
        }
        log.info('fetchGuestGuildInfoForBlackJudge called result:', result)
        return result
    }
    fetchGuestGuildInfoWithChannelList(...args: any[]) {
        log.info('fetchGuestGuildInfoWithChannelList called with args:', args)
        const result = this.instance.fetchGuestGuildInfoWithChannelList(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('fetchGuestGuildInfoWithChannelList called  promise result:', result)
                return res
            })
        }
        log.info('fetchGuestGuildInfoWithChannelList called result:', result)
        return result
    }
    fetchGuildActiveLiveChannelNum(...args: any[]) {
        log.info('fetchGuildActiveLiveChannelNum called with args:', args)
        const result = this.instance.fetchGuildActiveLiveChannelNum(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('fetchGuildActiveLiveChannelNum called  promise result:', result)
                return res
            })
        }
        log.info('fetchGuildActiveLiveChannelNum called result:', result)
        return result
    }
    fetchGuildActiveValue(...args: any[]) {
        log.info('fetchGuildActiveValue called with args:', args)
        const result = this.instance.fetchGuildActiveValue(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('fetchGuildActiveValue called  promise result:', result)
                return res
            })
        }
        log.info('fetchGuildActiveValue called result:', result)
        return result
    }
    fetchGuildBlackList(...args: any[]) {
        log.info('fetchGuildBlackList called with args:', args)
        const result = this.instance.fetchGuildBlackList(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('fetchGuildBlackList called  promise result:', result)
                return res
            })
        }
        log.info('fetchGuildBlackList called result:', result)
        return result
    }
    fetchGuildBottomTabExp(...args: any[]) {
        log.info('fetchGuildBottomTabExp called with args:', args)
        const result = this.instance.fetchGuildBottomTabExp(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('fetchGuildBottomTabExp called  promise result:', result)
                return res
            })
        }
        log.info('fetchGuildBottomTabExp called result:', result)
        return result
    }
    fetchGuildBoundGroupsWithGroupCodes(...args: any[]) {
        log.info('fetchGuildBoundGroupsWithGroupCodes called with args:', args)
        const result = this.instance.fetchGuildBoundGroupsWithGroupCodes(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('fetchGuildBoundGroupsWithGroupCodes called  promise result:', result)
                return res
            })
        }
        log.info('fetchGuildBoundGroupsWithGroupCodes called result:', result)
        return result
    }
    fetchGuildInfo(...args: any[]) {
        log.info('fetchGuildInfo called with args:', args)
        const result = this.instance.fetchGuildInfo(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('fetchGuildInfo called  promise result:', result)
                return res
            })
        }
        log.info('fetchGuildInfo called result:', result)
        return result
    }
    fetchGuildInfoAndMemberList(...args: any[]) {
        log.info('fetchGuildInfoAndMemberList called with args:', args)
        const result = this.instance.fetchGuildInfoAndMemberList(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('fetchGuildInfoAndMemberList called  promise result:', result)
                return res
            })
        }
        log.info('fetchGuildInfoAndMemberList called result:', result)
        return result
    }
    fetchGuildInfoByAppIdentity(...args: any[]) {
        log.info('fetchGuildInfoByAppIdentity called with args:', args)
        const result = this.instance.fetchGuildInfoByAppIdentity(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('fetchGuildInfoByAppIdentity called  promise result:', result)
                return res
            })
        }
        log.info('fetchGuildInfoByAppIdentity called result:', result)
        return result
    }
    fetchGuildSearchSwitch(...args: any[]) {
        log.info('fetchGuildSearchSwitch called with args:', args)
        const result = this.instance.fetchGuildSearchSwitch(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('fetchGuildSearchSwitch called  promise result:', result)
                return res
            })
        }
        log.info('fetchGuildSearchSwitch called result:', result)
        return result
    }
    fetchGuildSpeakableMemberList(...args: any[]) {
        log.info('fetchGuildSpeakableMemberList called with args:', args)
        const result = this.instance.fetchGuildSpeakableMemberList(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('fetchGuildSpeakableMemberList called  promise result:', result)
                return res
            })
        }
        log.info('fetchGuildSpeakableMemberList called result:', result)
        return result
    }
    fetchGuildSpeakableRoleList(...args: any[]) {
        log.info('fetchGuildSpeakableRoleList called with args:', args)
        const result = this.instance.fetchGuildSpeakableRoleList(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('fetchGuildSpeakableRoleList called  promise result:', result)
                return res
            })
        }
        log.info('fetchGuildSpeakableRoleList called result:', result)
        return result
    }
    fetchGuildSpeakableRule(...args: any[]) {
        log.info('fetchGuildSpeakableRule called with args:', args)
        const result = this.instance.fetchGuildSpeakableRule(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('fetchGuildSpeakableRule called  promise result:', result)
                return res
            })
        }
        log.info('fetchGuildSpeakableRule called result:', result)
        return result
    }
    fetchGuildSpeakableThreshold(...args: any[]) {
        log.info('fetchGuildSpeakableThreshold called with args:', args)
        const result = this.instance.fetchGuildSpeakableThreshold(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('fetchGuildSpeakableThreshold called  promise result:', result)
                return res
            })
        }
        log.info('fetchGuildSpeakableThreshold called result:', result)
        return result
    }
    fetchGuildTaskCards(...args: any[]) {
        log.info('fetchGuildTaskCards called with args:', args)
        const result = this.instance.fetchGuildTaskCards(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('fetchGuildTaskCards called  promise result:', result)
                return res
            })
        }
        log.info('fetchGuildTaskCards called result:', result)
        return result
    }
    fetchGuildWithChannels(...args: any[]) {
        log.info('fetchGuildWithChannels called with args:', args)
        const result = this.instance.fetchGuildWithChannels(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('fetchGuildWithChannels called  promise result:', result)
                return res
            })
        }
        log.info('fetchGuildWithChannels called result:', result)
        return result
    }
    fetchHandUpMemberList(...args: any[]) {
        log.info('fetchHandUpMemberList called with args:', args)
        const result = this.instance.fetchHandUpMemberList(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('fetchHandUpMemberList called  promise result:', result)
                return res
            })
        }
        log.info('fetchHandUpMemberList called result:', result)
        return result
    }
    fetchInviteInfo(...args: any[]) {
        log.info('fetchInviteInfo called with args:', args)
        const result = this.instance.fetchInviteInfo(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('fetchInviteInfo called  promise result:', result)
                return res
            })
        }
        log.info('fetchInviteInfo called result:', result)
        return result
    }
    fetchInviteInfo_0x10b4(...args: any[]) {
        log.info('fetchInviteInfo_0x10b4 called with args:', args)
        const result = this.instance.fetchInviteInfo_0x10b4(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('fetchInviteInfo_0x10b4 called  promise result:', result)
                return res
            })
        }
        log.info('fetchInviteInfo_0x10b4 called result:', result)
        return result
    }
    fetchIsLiveChannelOpen(...args: any[]) {
        log.info('fetchIsLiveChannelOpen called with args:', args)
        const result = this.instance.fetchIsLiveChannelOpen(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('fetchIsLiveChannelOpen called  promise result:', result)
                return res
            })
        }
        log.info('fetchIsLiveChannelOpen called result:', result)
        return result
    }
    fetchIsStartBroadcastVisible(...args: any[]) {
        log.info('fetchIsStartBroadcastVisible called with args:', args)
        const result = this.instance.fetchIsStartBroadcastVisible(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('fetchIsStartBroadcastVisible called  promise result:', result)
                return res
            })
        }
        log.info('fetchIsStartBroadcastVisible called result:', result)
        return result
    }
    fetchIsVoiceChannelOpen(...args: any[]) {
        log.info('fetchIsVoiceChannelOpen called with args:', args)
        const result = this.instance.fetchIsVoiceChannelOpen(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('fetchIsVoiceChannelOpen called  promise result:', result)
                return res
            })
        }
        log.info('fetchIsVoiceChannelOpen called result:', result)
        return result
    }
    fetchJoinGuildOption(...args: any[]) {
        log.info('fetchJoinGuildOption called with args:', args)
        const result = this.instance.fetchJoinGuildOption(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('fetchJoinGuildOption called  promise result:', result)
                return res
            })
        }
        log.info('fetchJoinGuildOption called result:', result)
        return result
    }
    fetchJubaoMsgResId(...args: any[]) {
        log.info('fetchJubaoMsgResId called with args:', args)
        const result = this.instance.fetchJubaoMsgResId(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('fetchJubaoMsgResId called  promise result:', result)
                return res
            })
        }
        log.info('fetchJubaoMsgResId called result:', result)
        return result
    }
    fetchJubaoMsgsResId(...args: any[]) {
        log.info('fetchJubaoMsgsResId called with args:', args)
        const result = this.instance.fetchJubaoMsgsResId(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('fetchJubaoMsgsResId called  promise result:', result)
                return res
            })
        }
        log.info('fetchJubaoMsgsResId called result:', result)
        return result
    }
    fetchLatestComments(...args: any[]) {
        log.info('fetchLatestComments called with args:', args)
        const result = this.instance.fetchLatestComments(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('fetchLatestComments called  promise result:', result)
                return res
            })
        }
        log.info('fetchLatestComments called result:', result)
        return result
    }
    fetchLevelRolePermissions(...args: any[]) {
        log.info('fetchLevelRolePermissions called with args:', args)
        const result = this.instance.fetchLevelRolePermissions(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('fetchLevelRolePermissions called  promise result:', result)
                return res
            })
        }
        log.info('fetchLevelRolePermissions called result:', result)
        return result
    }
    fetchLiveBroadcastStatistics(...args: any[]) {
        log.info('fetchLiveBroadcastStatistics called with args:', args)
        const result = this.instance.fetchLiveBroadcastStatistics(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('fetchLiveBroadcastStatistics called  promise result:', result)
                return res
            })
        }
        log.info('fetchLiveBroadcastStatistics called result:', result)
        return result
    }
    fetchLiveChannelAnchorList(...args: any[]) {
        log.info('fetchLiveChannelAnchorList called with args:', args)
        const result = this.instance.fetchLiveChannelAnchorList(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('fetchLiveChannelAnchorList called  promise result:', result)
                return res
            })
        }
        log.info('fetchLiveChannelAnchorList called result:', result)
        return result
    }
    fetchLiveChannelBannedUserList(...args: any[]) {
        log.info('fetchLiveChannelBannedUserList called with args:', args)
        const result = this.instance.fetchLiveChannelBannedUserList(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('fetchLiveChannelBannedUserList called  promise result:', result)
                return res
            })
        }
        log.info('fetchLiveChannelBannedUserList called result:', result)
        return result
    }
    fetchLivePushRtmpURL(...args: any[]) {
        log.info('fetchLivePushRtmpURL called with args:', args)
        const result = this.instance.fetchLivePushRtmpURL(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('fetchLivePushRtmpURL called  promise result:', result)
                return res
            })
        }
        log.info('fetchLivePushRtmpURL called result:', result)
        return result
    }
    fetchLiveRoomInfo(...args: any[]) {
        log.info('fetchLiveRoomInfo called with args:', args)
        const result = this.instance.fetchLiveRoomInfo(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('fetchLiveRoomInfo called  promise result:', result)
                return res
            })
        }
        log.info('fetchLiveRoomInfo called result:', result)
        return result
    }
    fetchLiveSecurityTips(...args: any[]) {
        log.info('fetchLiveSecurityTips called with args:', args)
        const result = this.instance.fetchLiveSecurityTips(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('fetchLiveSecurityTips called  promise result:', result)
                return res
            })
        }
        log.info('fetchLiveSecurityTips called result:', result)
        return result
    }
    fetchMVPFeedsFromServer(...args: any[]) {
        log.info('fetchMVPFeedsFromServer called with args:', args)
        const result = this.instance.fetchMVPFeedsFromServer(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('fetchMVPFeedsFromServer called  promise result:', result)
                return res
            })
        }
        log.info('fetchMVPFeedsFromServer called result:', result)
        return result
    }
    fetchMainFrameLiveCard(...args: any[]) {
        log.info('fetchMainFrameLiveCard called with args:', args)
        const result = this.instance.fetchMainFrameLiveCard(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('fetchMainFrameLiveCard called  promise result:', result)
                return res
            })
        }
        log.info('fetchMainFrameLiveCard called result:', result)
        return result
    }
    fetchMemberListForFeed(...args: any[]) {
        log.info('fetchMemberListForFeed called with args:', args)
        const result = this.instance.fetchMemberListForFeed(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('fetchMemberListForFeed called  promise result:', result)
                return res
            })
        }
        log.info('fetchMemberListForFeed called result:', result)
        return result
    }
    fetchMemberListForGuildGroup(...args: any[]) {
        log.info('fetchMemberListForGuildGroup called with args:', args)
        const result = this.instance.fetchMemberListForGuildGroup(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('fetchMemberListForGuildGroup called  promise result:', result)
                return res
            })
        }
        log.info('fetchMemberListForGuildGroup called result:', result)
        return result
    }
    fetchMemberListWithRole(...args: any[]) {
        log.info('fetchMemberListWithRole called with args:', args)
        const result = this.instance.fetchMemberListWithRole(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('fetchMemberListWithRole called  promise result:', result)
                return res
            })
        }
        log.info('fetchMemberListWithRole called result:', result)
        return result
    }
    fetchMemberListWithRoleCookie(...args: any[]) {
        log.info('fetchMemberListWithRoleCookie called with args:', args)
        const result = this.instance.fetchMemberListWithRoleCookie(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('fetchMemberListWithRoleCookie called  promise result:', result)
                return res
            })
        }
        log.info('fetchMemberListWithRoleCookie called result:', result)
        return result
    }
    fetchMemberRoles(...args: any[]) {
        log.info('fetchMemberRoles called with args:', args)
        const result = this.instance.fetchMemberRoles(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('fetchMemberRoles called  promise result:', result)
                return res
            })
        }
        log.info('fetchMemberRoles called result:', result)
        return result
    }
    fetchMyCreateGuilds(...args: any[]) {
        log.info('fetchMyCreateGuilds called with args:', args)
        const result = this.instance.fetchMyCreateGuilds(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('fetchMyCreateGuilds called  promise result:', result)
                return res
            })
        }
        log.info('fetchMyCreateGuilds called result:', result)
        return result
    }
    fetchNewestNotice(...args: any[]) {
        log.info('fetchNewestNotice called with args:', args)
        const result = this.instance.fetchNewestNotice(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('fetchNewestNotice called  promise result:', result)
                return res
            })
        }
        log.info('fetchNewestNotice called result:', result)
        return result
    }
    fetchNonRoleMembers(...args: any[]) {
        log.info('fetchNonRoleMembers called with args:', args)
        const result = this.instance.fetchNonRoleMembers(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('fetchNonRoleMembers called  promise result:', result)
                return res
            })
        }
        log.info('fetchNonRoleMembers called result:', result)
        return result
    }
    fetchOnlineUsers(...args: any[]) {
        log.info('fetchOnlineUsers called with args:', args)
        const result = this.instance.fetchOnlineUsers(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('fetchOnlineUsers called  promise result:', result)
                return res
            })
        }
        log.info('fetchOnlineUsers called result:', result)
        return result
    }
    fetchOtherChannelUserPermission(...args: any[]) {
        log.info('fetchOtherChannelUserPermission called with args:', args)
        const result = this.instance.fetchOtherChannelUserPermission(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('fetchOtherChannelUserPermission called  promise result:', result)
                return res
            })
        }
        log.info('fetchOtherChannelUserPermission called result:', result)
        return result
    }
    fetchProfileAddFriendField(...args: any[]) {
        log.info('fetchProfileAddFriendField called with args:', args)
        const result = this.instance.fetchProfileAddFriendField(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('fetchProfileAddFriendField called  promise result:', result)
                return res
            })
        }
        log.info('fetchProfileAddFriendField called result:', result)
        return result
    }
    fetchPskey(...args: any[]) {
        log.info('fetchPskey called with args:', args)
        const result = this.instance.fetchPskey(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('fetchPskey called  promise result:', result)
                return res
            })
        }
        log.info('fetchPskey called result:', result)
        return result
    }
    fetchQQNickAndAvatar(...args: any[]) {
        log.info('fetchQQNickAndAvatar called with args:', args)
        const result = this.instance.fetchQQNickAndAvatar(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('fetchQQNickAndAvatar called  promise result:', result)
                return res
            })
        }
        log.info('fetchQQNickAndAvatar called result:', result)
        return result
    }
    fetchRecommendChannel(...args: any[]) {
        log.info('fetchRecommendChannel called with args:', args)
        const result = this.instance.fetchRecommendChannel(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('fetchRecommendChannel called  promise result:', result)
                return res
            })
        }
        log.info('fetchRecommendChannel called result:', result)
        return result
    }
    fetchRecommendEssenceInfo(...args: any[]) {
        log.info('fetchRecommendEssenceInfo called with args:', args)
        const result = this.instance.fetchRecommendEssenceInfo(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('fetchRecommendEssenceInfo called  promise result:', result)
                return res
            })
        }
        log.info('fetchRecommendEssenceInfo called result:', result)
        return result
    }
    fetchRemainAtSetInfo(...args: any[]) {
        log.info('fetchRemainAtSetInfo called with args:', args)
        const result = this.instance.fetchRemainAtSetInfo(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('fetchRemainAtSetInfo called  promise result:', result)
                return res
            })
        }
        log.info('fetchRemainAtSetInfo called result:', result)
        return result
    }
    fetchRetentionGuildList(...args: any[]) {
        log.info('fetchRetentionGuildList called with args:', args)
        const result = this.instance.fetchRetentionGuildList(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('fetchRetentionGuildList called  promise result:', result)
                return res
            })
        }
        log.info('fetchRetentionGuildList called result:', result)
        return result
    }
    fetchRole(...args: any[]) {
        log.info('fetchRole called with args:', args)
        const result = this.instance.fetchRole(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('fetchRole called  promise result:', result)
                return res
            })
        }
        log.info('fetchRole called result:', result)
        return result
    }
    fetchRoleListWithFilter(...args: any[]) {
        log.info('fetchRoleListWithFilter called with args:', args)
        const result = this.instance.fetchRoleListWithFilter(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('fetchRoleListWithFilter called  promise result:', result)
                return res
            })
        }
        log.info('fetchRoleListWithFilter called result:', result)
        return result
    }
    fetchRoleListWithPermission(...args: any[]) {
        log.info('fetchRoleListWithPermission called with args:', args)
        const result = this.instance.fetchRoleListWithPermission(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('fetchRoleListWithPermission called  promise result:', result)
                return res
            })
        }
        log.info('fetchRoleListWithPermission called result:', result)
        return result
    }
    fetchRoleListWithoutLevelRoleWithFilter(...args: any[]) {
        log.info('fetchRoleListWithoutLevelRoleWithFilter called with args:', args)
        const result = this.instance.fetchRoleListWithoutLevelRoleWithFilter(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('fetchRoleListWithoutLevelRoleWithFilter called  promise result:', result)
                return res
            })
        }
        log.info('fetchRoleListWithoutLevelRoleWithFilter called result:', result)
        return result
    }
    fetchRoleMembers(...args: any[]) {
        log.info('fetchRoleMembers called with args:', args)
        const result = this.instance.fetchRoleMembers(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('fetchRoleMembers called  promise result:', result)
                return res
            })
        }
        log.info('fetchRoleMembers called result:', result)
        return result
    }
    fetchRoleWithPermission(...args: any[]) {
        log.info('fetchRoleWithPermission called with args:', args)
        const result = this.instance.fetchRoleWithPermission(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('fetchRoleWithPermission called  promise result:', result)
                return res
            })
        }
        log.info('fetchRoleWithPermission called result:', result)
        return result
    }
    fetchShareButtonReq(...args: any[]) {
        log.info('fetchShareButtonReq called with args:', args)
        const result = this.instance.fetchShareButtonReq(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('fetchShareButtonReq called  promise result:', result)
                return res
            })
        }
        log.info('fetchShareButtonReq called result:', result)
        return result
    }
    fetchShareInfo0x10c3(...args: any[]) {
        log.info('fetchShareInfo0x10c3 called with args:', args)
        const result = this.instance.fetchShareInfo0x10c3(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('fetchShareInfo0x10c3 called  promise result:', result)
                return res
            })
        }
        log.info('fetchShareInfo0x10c3 called result:', result)
        return result
    }
    fetchShareUrlReq(...args: any[]) {
        log.info('fetchShareUrlReq called with args:', args)
        const result = this.instance.fetchShareUrlReq(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('fetchShareUrlReq called  promise result:', result)
                return res
            })
        }
        log.info('fetchShareUrlReq called result:', result)
        return result
    }
    fetchSpecifiedTypeChannelOpenState(...args: any[]) {
        log.info('fetchSpecifiedTypeChannelOpenState called with args:', args)
        const result = this.instance.fetchSpecifiedTypeChannelOpenState(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('fetchSpecifiedTypeChannelOpenState called  promise result:', result)
                return res
            })
        }
        log.info('fetchSpecifiedTypeChannelOpenState called result:', result)
        return result
    }
    fetchSpecifiedTypeChannelsOpenState(...args: any[]) {
        log.info('fetchSpecifiedTypeChannelsOpenState called with args:', args)
        const result = this.instance.fetchSpecifiedTypeChannelsOpenState(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('fetchSpecifiedTypeChannelsOpenState called  promise result:', result)
                return res
            })
        }
        log.info('fetchSpecifiedTypeChannelsOpenState called result:', result)
        return result
    }
    fetchSubscribeUserGuide(...args: any[]) {
        log.info('fetchSubscribeUserGuide called with args:', args)
        const result = this.instance.fetchSubscribeUserGuide(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('fetchSubscribeUserGuide called  promise result:', result)
                return res
            })
        }
        log.info('fetchSubscribeUserGuide called result:', result)
        return result
    }
    fetchUserInfo(...args: any[]) {
        log.info('fetchUserInfo called with args:', args)
        const result = this.instance.fetchUserInfo(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('fetchUserInfo called  promise result:', result)
                return res
            })
        }
        log.info('fetchUserInfo called result:', result)
        return result
    }
    fetchUserJoinedGuildListV2(...args: any[]) {
        log.info('fetchUserJoinedGuildListV2 called with args:', args)
        const result = this.instance.fetchUserJoinedGuildListV2(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('fetchUserJoinedGuildListV2 called  promise result:', result)
                return res
            })
        }
        log.info('fetchUserJoinedGuildListV2 called result:', result)
        return result
    }
    fetchUserList(...args: any[]) {
        log.info('fetchUserList called with args:', args)
        const result = this.instance.fetchUserList(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('fetchUserList called  promise result:', result)
                return res
            })
        }
        log.info('fetchUserList called result:', result)
        return result
    }
    fetchVersionNews(...args: any[]) {
        log.info('fetchVersionNews called with args:', args)
        const result = this.instance.fetchVersionNews(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('fetchVersionNews called  promise result:', result)
                return res
            })
        }
        log.info('fetchVersionNews called result:', result)
        return result
    }
    fetchVisibleMemberListByTinyId(...args: any[]) {
        log.info('fetchVisibleMemberListByTinyId called with args:', args)
        const result = this.instance.fetchVisibleMemberListByTinyId(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('fetchVisibleMemberListByTinyId called  promise result:', result)
                return res
            })
        }
        log.info('fetchVisibleMemberListByTinyId called result:', result)
        return result
    }
    fetchXWordInfo(...args: any[]) {
        log.info('fetchXWordInfo called with args:', args)
        const result = this.instance.fetchXWordInfo(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('fetchXWordInfo called  promise result:', result)
                return res
            })
        }
        log.info('fetchXWordInfo called result:', result)
        return result
    }
    forwardArkMessage(...args: any[]) {
        log.info('forwardArkMessage called with args:', args)
        const result = this.instance.forwardArkMessage(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('forwardArkMessage called  promise result:', result)
                return res
            })
        }
        log.info('forwardArkMessage called result:', result)
        return result
    }
    getAISearchRecommendWords(...args: any[]) {
        log.info('getAISearchRecommendWords called with args:', args)
        const result = this.instance.getAISearchRecommendWords(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getAISearchRecommendWords called  promise result:', result)
                return res
            })
        }
        log.info('getAISearchRecommendWords called result:', result)
        return result
    }
    getAISearchSessionList(...args: any[]) {
        log.info('getAISearchSessionList called with args:', args)
        const result = this.instance.getAISearchSessionList(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getAISearchSessionList called  promise result:', result)
                return res
            })
        }
        log.info('getAISearchSessionList called result:', result)
        return result
    }
    getAISearchSessionMsgList(...args: any[]) {
        log.info('getAISearchSessionMsgList called with args:', args)
        const result = this.instance.getAISearchSessionMsgList(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getAISearchSessionMsgList called  promise result:', result)
                return res
            })
        }
        log.info('getAISearchSessionMsgList called result:', result)
        return result
    }
    getAISearchShareURL(...args: any[]) {
        log.info('getAISearchShareURL called with args:', args)
        const result = this.instance.getAISearchShareURL(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getAISearchShareURL called  promise result:', result)
                return res
            })
        }
        log.info('getAISearchShareURL called result:', result)
        return result
    }
    getAVChannelUserCnts(...args: any[]) {
        log.info('getAVChannelUserCnts called with args:', args)
        const result = this.instance.getAVChannelUserCnts(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getAVChannelUserCnts called  promise result:', result)
                return res
            })
        }
        log.info('getAVChannelUserCnts called result:', result)
        return result
    }
    getActiveLiveAudioChannelNum(...args: any[]) {
        log.info('getActiveLiveAudioChannelNum called with args:', args)
        const result = this.instance.getActiveLiveAudioChannelNum(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getActiveLiveAudioChannelNum called  promise result:', result)
                return res
            })
        }
        log.info('getActiveLiveAudioChannelNum called result:', result)
        return result
    }
    getActiveLiveAudioChannelNumV2(...args: any[]) {
        log.info('getActiveLiveAudioChannelNumV2 called with args:', args)
        const result = this.instance.getActiveLiveAudioChannelNumV2(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getActiveLiveAudioChannelNumV2 called  promise result:', result)
                return res
            })
        }
        log.info('getActiveLiveAudioChannelNumV2 called result:', result)
        return result
    }
    getAllGuildSearchAIInfo(...args: any[]) {
        log.info('getAllGuildSearchAIInfo called with args:', args)
        const result = this.instance.getAllGuildSearchAIInfo(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getAllGuildSearchAIInfo called  promise result:', result)
                return res
            })
        }
        log.info('getAllGuildSearchAIInfo called result:', result)
        return result
    }
    getAlreadyEnteredChannel(...args: any[]) {
        log.info('getAlreadyEnteredChannel called with args:', args)
        const result = this.instance.getAlreadyEnteredChannel(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getAlreadyEnteredChannel called  promise result:', result)
                return res
            })
        }
        log.info('getAlreadyEnteredChannel called result:', result)
        return result
    }
    getAppAuthorizationInfo(...args: any[]) {
        log.info('getAppAuthorizationInfo called with args:', args)
        const result = this.instance.getAppAuthorizationInfo(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getAppAuthorizationInfo called  promise result:', result)
                return res
            })
        }
        log.info('getAppAuthorizationInfo called result:', result)
        return result
    }
    getAppChannelPreInfo(...args: any[]) {
        log.info('getAppChannelPreInfo called with args:', args)
        const result = this.instance.getAppChannelPreInfo(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getAppChannelPreInfo called  promise result:', result)
                return res
            })
        }
        log.info('getAppChannelPreInfo called result:', result)
        return result
    }
    getAppChannelPreInfos(...args: any[]) {
        log.info('getAppChannelPreInfos called with args:', args)
        const result = this.instance.getAppChannelPreInfos(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getAppChannelPreInfos called  promise result:', result)
                return res
            })
        }
        log.info('getAppChannelPreInfos called result:', result)
        return result
    }
    getAppInfos(...args: any[]) {
        log.info('getAppInfos called with args:', args)
        const result = this.instance.getAppInfos(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getAppInfos called  promise result:', result)
                return res
            })
        }
        log.info('getAppInfos called result:', result)
        return result
    }
    getAppRoleList(...args: any[]) {
        log.info('getAppRoleList called with args:', args)
        const result = this.instance.getAppRoleList(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getAppRoleList called  promise result:', result)
                return res
            })
        }
        log.info('getAppRoleList called result:', result)
        return result
    }
    getAssociativeWords(...args: any[]) {
        log.info('getAssociativeWords called with args:', args)
        const result = this.instance.getAssociativeWords(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getAssociativeWords called  promise result:', result)
                return res
            })
        }
        log.info('getAssociativeWords called result:', result)
        return result
    }
    getAtMemberList(...args: any[]) {
        log.info('getAtMemberList called with args:', args)
        const result = this.instance.getAtMemberList(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getAtMemberList called  promise result:', result)
                return res
            })
        }
        log.info('getAtMemberList called result:', result)
        return result
    }
    getBanners(...args: any[]) {
        log.info('getBanners called with args:', args)
        const result = this.instance.getBanners(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getBanners called  promise result:', result)
                return res
            })
        }
        log.info('getBanners called result:', result)
        return result
    }
    getBindClientService(...args: any[]) {
        log.info('getBindClientService called with args:', args)
        const result = this.instance.getBindClientService(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getBindClientService called  promise result:', result)
                return res
            })
        }
        log.info('getBindClientService called result:', result)
        return result
    }
    getBindingGroupInfos(...args: any[]) {
        log.info('getBindingGroupInfos called with args:', args)
        const result = this.instance.getBindingGroupInfos(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getBindingGroupInfos called  promise result:', result)
                return res
            })
        }
        log.info('getBindingGroupInfos called result:', result)
        return result
    }
    getBlockRecGuilds(...args: any[]) {
        log.info('getBlockRecGuilds called with args:', args)
        const result = this.instance.getBlockRecGuilds(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getBlockRecGuilds called  promise result:', result)
                return res
            })
        }
        log.info('getBlockRecGuilds called result:', result)
        return result
    }
    getCategoryChannelIdList(...args: any[]) {
        log.info('getCategoryChannelIdList called with args:', args)
        const result = this.instance.getCategoryChannelIdList(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getCategoryChannelIdList called  promise result:', result)
                return res
            })
        }
        log.info('getCategoryChannelIdList called result:', result)
        return result
    }
    getCategoryChannelIdListByCategoryType(...args: any[]) {
        log.info('getCategoryChannelIdListByCategoryType called with args:', args)
        const result = this.instance.getCategoryChannelIdListByCategoryType(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getCategoryChannelIdListByCategoryType called  promise result:', result)
                return res
            })
        }
        log.info('getCategoryChannelIdListByCategoryType called result:', result)
        return result
    }
    getCategoryChannelIdListExcludeCategoryType(...args: any[]) {
        log.info('getCategoryChannelIdListExcludeCategoryType called with args:', args)
        const result = this.instance.getCategoryChannelIdListExcludeCategoryType(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getCategoryChannelIdListExcludeCategoryType called  promise result:', result)
                return res
            })
        }
        log.info('getCategoryChannelIdListExcludeCategoryType called result:', result)
        return result
    }
    getCategoryChannelInfoList(...args: any[]) {
        log.info('getCategoryChannelInfoList called with args:', args)
        const result = this.instance.getCategoryChannelInfoList(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getCategoryChannelInfoList called  promise result:', result)
                return res
            })
        }
        log.info('getCategoryChannelInfoList called result:', result)
        return result
    }
    getCategoryChannelInfoListByCategoryType(...args: any[]) {
        log.info('getCategoryChannelInfoListByCategoryType called with args:', args)
        const result = this.instance.getCategoryChannelInfoListByCategoryType(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getCategoryChannelInfoListByCategoryType called  promise result:', result)
                return res
            })
        }
        log.info('getCategoryChannelInfoListByCategoryType called result:', result)
        return result
    }
    getCategoryChannelInfoListByFilter(...args: any[]) {
        log.info('getCategoryChannelInfoListByFilter called with args:', args)
        const result = this.instance.getCategoryChannelInfoListByFilter(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getCategoryChannelInfoListByFilter called  promise result:', result)
                return res
            })
        }
        log.info('getCategoryChannelInfoListByFilter called result:', result)
        return result
    }
    getCategoryChannelInfoListV2(...args: any[]) {
        log.info('getCategoryChannelInfoListV2 called with args:', args)
        const result = this.instance.getCategoryChannelInfoListV2(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getCategoryChannelInfoListV2 called  promise result:', result)
                return res
            })
        }
        log.info('getCategoryChannelInfoListV2 called result:', result)
        return result
    }
    getCategoryGuilds(...args: any[]) {
        log.info('getCategoryGuilds called with args:', args)
        const result = this.instance.getCategoryGuilds(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getCategoryGuilds called  promise result:', result)
                return res
            })
        }
        log.info('getCategoryGuilds called result:', result)
        return result
    }
    getCategoryPageGuilds(...args: any[]) {
        log.info('getCategoryPageGuilds called with args:', args)
        const result = this.instance.getCategoryPageGuilds(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getCategoryPageGuilds called  promise result:', result)
                return res
            })
        }
        log.info('getCategoryPageGuilds called result:', result)
        return result
    }
    getCategoryPermission(...args: any[]) {
        log.info('getCategoryPermission called with args:', args)
        const result = this.instance.getCategoryPermission(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getCategoryPermission called  promise result:', result)
                return res
            })
        }
        log.info('getCategoryPermission called result:', result)
        return result
    }
    getCategoryTabContent(...args: any[]) {
        log.info('getCategoryTabContent called with args:', args)
        const result = this.instance.getCategoryTabContent(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getCategoryTabContent called  promise result:', result)
                return res
            })
        }
        log.info('getCategoryTabContent called result:', result)
        return result
    }
    getChannelActivity(...args: any[]) {
        log.info('getChannelActivity called with args:', args)
        const result = this.instance.getChannelActivity(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getChannelActivity called  promise result:', result)
                return res
            })
        }
        log.info('getChannelActivity called result:', result)
        return result
    }
    getChannelHeartbeat(...args: any[]) {
        log.info('getChannelHeartbeat called with args:', args)
        const result = this.instance.getChannelHeartbeat(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getChannelHeartbeat called  promise result:', result)
                return res
            })
        }
        log.info('getChannelHeartbeat called result:', result)
        return result
    }
    getChannelIdsWithGuildIdsFromCache(...args: any[]) {
        log.info('getChannelIdsWithGuildIdsFromCache called with args:', args)
        const result = this.instance.getChannelIdsWithGuildIdsFromCache(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getChannelIdsWithGuildIdsFromCache called  promise result:', result)
                return res
            })
        }
        log.info('getChannelIdsWithGuildIdsFromCache called result:', result)
        return result
    }
    getChannelInfo(...args: any[]) {
        log.info('getChannelInfo called with args:', args)
        const result = this.instance.getChannelInfo(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getChannelInfo called  promise result:', result)
                return res
            })
        }
        log.info('getChannelInfo called result:', result)
        return result
    }
    getChannelPermission(...args: any[]) {
        log.info('getChannelPermission called with args:', args)
        const result = this.instance.getChannelPermission(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getChannelPermission called  promise result:', result)
                return res
            })
        }
        log.info('getChannelPermission called result:', result)
        return result
    }
    getChannelTopMsgFlashState(...args: any[]) {
        log.info('getChannelTopMsgFlashState called with args:', args)
        const result = this.instance.getChannelTopMsgFlashState(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getChannelTopMsgFlashState called  promise result:', result)
                return res
            })
        }
        log.info('getChannelTopMsgFlashState called result:', result)
        return result
    }
    getChannelTopMsgState(...args: any[]) {
        log.info('getChannelTopMsgState called with args:', args)
        const result = this.instance.getChannelTopMsgState(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getChannelTopMsgState called  promise result:', result)
                return res
            })
        }
        log.info('getChannelTopMsgState called result:', result)
        return result
    }
    getChannelUserPermission(...args: any[]) {
        log.info('getChannelUserPermission called with args:', args)
        const result = this.instance.getChannelUserPermission(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getChannelUserPermission called  promise result:', result)
                return res
            })
        }
        log.info('getChannelUserPermission called result:', result)
        return result
    }
    getConfigTabContent(...args: any[]) {
        log.info('getConfigTabContent called with args:', args)
        const result = this.instance.getConfigTabContent(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getConfigTabContent called  promise result:', result)
                return res
            })
        }
        log.info('getConfigTabContent called result:', result)
        return result
    }
    getCurrPlaySong(...args: any[]) {
        log.info('getCurrPlaySong called with args:', args)
        const result = this.instance.getCurrPlaySong(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getCurrPlaySong called  promise result:', result)
                return res
            })
        }
        log.info('getCurrPlaySong called result:', result)
        return result
    }
    getDiscoverAudioVideoInfos(...args: any[]) {
        log.info('getDiscoverAudioVideoInfos called with args:', args)
        const result = this.instance.getDiscoverAudioVideoInfos(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getDiscoverAudioVideoInfos called  promise result:', result)
                return res
            })
        }
        log.info('getDiscoverAudioVideoInfos called result:', result)
        return result
    }
    getDynamicGuildInfo(...args: any[]) {
        log.info('getDynamicGuildInfo called with args:', args)
        const result = this.instance.getDynamicGuildInfo(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getDynamicGuildInfo called  promise result:', result)
                return res
            })
        }
        log.info('getDynamicGuildInfo called result:', result)
        return result
    }
    getEffectGuildIdsFromCache(...args: any[]) {
        log.info('getEffectGuildIdsFromCache called with args:', args)
        const result = this.instance.getEffectGuildIdsFromCache(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getEffectGuildIdsFromCache called  promise result:', result)
                return res
            })
        }
        log.info('getEffectGuildIdsFromCache called result:', result)
        return result
    }
    getFaceAuthInfo(...args: any[]) {
        log.info('getFaceAuthInfo called with args:', args)
        const result = this.instance.getFaceAuthInfo(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getFaceAuthInfo called  promise result:', result)
                return res
            })
        }
        log.info('getFaceAuthInfo called result:', result)
        return result
    }
    getFriendsInGuild(...args: any[]) {
        log.info('getFriendsInGuild called with args:', args)
        const result = this.instance.getFriendsInGuild(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getFriendsInGuild called  promise result:', result)
                return res
            })
        }
        log.info('getFriendsInGuild called result:', result)
        return result
    }
    getFriendsRecommend(...args: any[]) {
        log.info('getFriendsRecommend called with args:', args)
        const result = this.instance.getFriendsRecommend(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getFriendsRecommend called  promise result:', result)
                return res
            })
        }
        log.info('getFriendsRecommend called result:', result)
        return result
    }
    getGCGameByGuildID(...args: any[]) {
        log.info('getGCGameByGuildID called with args:', args)
        const result = this.instance.getGCGameByGuildID(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getGCGameByGuildID called  promise result:', result)
                return res
            })
        }
        log.info('getGCGameByGuildID called result:', result)
        return result
    }
    getGroupGuildListFromCache(...args: any[]) {
        log.info('getGroupGuildListFromCache called with args:', args)
        const result = this.instance.getGroupGuildListFromCache(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getGroupGuildListFromCache called  promise result:', result)
                return res
            })
        }
        log.info('getGroupGuildListFromCache called result:', result)
        return result
    }
    getGuidePageInfo(...args: any[]) {
        log.info('getGuidePageInfo called with args:', args)
        const result = this.instance.getGuidePageInfo(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getGuidePageInfo called  promise result:', result)
                return res
            })
        }
        log.info('getGuidePageInfo called result:', result)
        return result
    }
    getGuildAndChannelListFromCache(...args: any[]) {
        log.info('getGuildAndChannelListFromCache called with args:', args)
        const result = this.instance.getGuildAndChannelListFromCache(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getGuildAndChannelListFromCache called  promise result:', result)
                return res
            })
        }
        log.info('getGuildAndChannelListFromCache called result:', result)
        return result
    }
    getGuildBindableGroups(...args: any[]) {
        log.info('getGuildBindableGroups called with args:', args)
        const result = this.instance.getGuildBindableGroups(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getGuildBindableGroups called  promise result:', result)
                return res
            })
        }
        log.info('getGuildBindableGroups called result:', result)
        return result
    }
    getGuildBindingInfo(...args: any[]) {
        log.info('getGuildBindingInfo called with args:', args)
        const result = this.instance.getGuildBindingInfo(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getGuildBindingInfo called  promise result:', result)
                return res
            })
        }
        log.info('getGuildBindingInfo called result:', result)
        return result
    }
    getGuildBoundGroupsFirstPage(...args: any[]) {
        log.info('getGuildBoundGroupsFirstPage called with args:', args)
        const result = this.instance.getGuildBoundGroupsFirstPage(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getGuildBoundGroupsFirstPage called  promise result:', result)
                return res
            })
        }
        log.info('getGuildBoundGroupsFirstPage called result:', result)
        return result
    }
    getGuildChannelInfos(...args: any[]) {
        log.info('getGuildChannelInfos called with args:', args)
        const result = this.instance.getGuildChannelInfos(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getGuildChannelInfos called  promise result:', result)
                return res
            })
        }
        log.info('getGuildChannelInfos called result:', result)
        return result
    }
    getGuildCheckinInfo(...args: any[]) {
        log.info('getGuildCheckinInfo called with args:', args)
        const result = this.instance.getGuildCheckinInfo(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getGuildCheckinInfo called  promise result:', result)
                return res
            })
        }
        log.info('getGuildCheckinInfo called result:', result)
        return result
    }
    getGuildCreatorTasks(...args: any[]) {
        log.info('getGuildCreatorTasks called with args:', args)
        const result = this.instance.getGuildCreatorTasks(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getGuildCreatorTasks called  promise result:', result)
                return res
            })
        }
        log.info('getGuildCreatorTasks called result:', result)
        return result
    }
    getGuildEssenceTabStatus(...args: any[]) {
        log.info('getGuildEssenceTabStatus called with args:', args)
        const result = this.instance.getGuildEssenceTabStatus(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getGuildEssenceTabStatus called  promise result:', result)
                return res
            })
        }
        log.info('getGuildEssenceTabStatus called result:', result)
        return result
    }
    getGuildFeedExperiment(...args: any[]) {
        log.info('getGuildFeedExperiment called with args:', args)
        const result = this.instance.getGuildFeedExperiment(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getGuildFeedExperiment called  promise result:', result)
                return res
            })
        }
        log.info('getGuildFeedExperiment called result:', result)
        return result
    }
    getGuildFeedsValidCalendar(...args: any[]) {
        log.info('getGuildFeedsValidCalendar called with args:', args)
        const result = this.instance.getGuildFeedsValidCalendar(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getGuildFeedsValidCalendar called  promise result:', result)
                return res
            })
        }
        log.info('getGuildFeedsValidCalendar called result:', result)
        return result
    }
    getGuildFloatingLayer(...args: any[]) {
        log.info('getGuildFloatingLayer called with args:', args)
        const result = this.instance.getGuildFloatingLayer(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getGuildFloatingLayer called  promise result:', result)
                return res
            })
        }
        log.info('getGuildFloatingLayer called result:', result)
        return result
    }
    getGuildGlobalBanner(...args: any[]) {
        log.info('getGuildGlobalBanner called with args:', args)
        const result = this.instance.getGuildGlobalBanner(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getGuildGlobalBanner called  promise result:', result)
                return res
            })
        }
        log.info('getGuildGlobalBanner called result:', result)
        return result
    }
    getGuildGroupIds(...args: any[]) {
        log.info('getGuildGroupIds called with args:', args)
        const result = this.instance.getGuildGroupIds(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getGuildGroupIds called  promise result:', result)
                return res
            })
        }
        log.info('getGuildGroupIds called result:', result)
        return result
    }
    getGuildGroups(...args: any[]) {
        log.info('getGuildGroups called with args:', args)
        const result = this.instance.getGuildGroups(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getGuildGroups called  promise result:', result)
                return res
            })
        }
        log.info('getGuildGroups called result:', result)
        return result
    }
    getGuildHomeCategories(...args: any[]) {
        log.info('getGuildHomeCategories called with args:', args)
        const result = this.instance.getGuildHomeCategories(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getGuildHomeCategories called  promise result:', result)
                return res
            })
        }
        log.info('getGuildHomeCategories called result:', result)
        return result
    }
    getGuildHomeSections(...args: any[]) {
        log.info('getGuildHomeSections called with args:', args)
        const result = this.instance.getGuildHomeSections(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getGuildHomeSections called  promise result:', result)
                return res
            })
        }
        log.info('getGuildHomeSections called result:', result)
        return result
    }
    getGuildInfoFromCache(...args: any[]) {
        log.info('getGuildInfoFromCache called with args:', args)
        const result = this.instance.getGuildInfoFromCache(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getGuildInfoFromCache called  promise result:', result)
                return res
            })
        }
        log.info('getGuildInfoFromCache called result:', result)
        return result
    }
    getGuildLableInfo(...args: any[]) {
        log.info('getGuildLableInfo called with args:', args)
        const result = this.instance.getGuildLableInfo(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getGuildLableInfo called  promise result:', result)
                return res
            })
        }
        log.info('getGuildLableInfo called result:', result)
        return result
    }
    getGuildListFromCache(...args: any[]) {
        log.info('getGuildListFromCache called with args:', args)
        const result = this.instance.getGuildListFromCache(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getGuildListFromCache called  promise result:', result)
                return res
            })
        }
        log.info('getGuildListFromCache called result:', result)
        return result
    }
    getGuildMainFrameHeaderInfo(...args: any[]) {
        log.info('getGuildMainFrameHeaderInfo called with args:', args)
        const result = this.instance.getGuildMainFrameHeaderInfo(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getGuildMainFrameHeaderInfo called  promise result:', result)
                return res
            })
        }
        log.info('getGuildMainFrameHeaderInfo called result:', result)
        return result
    }
    getGuildMemberNum(...args: any[]) {
        log.info('getGuildMemberNum called with args:', args)
        const result = this.instance.getGuildMemberNum(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getGuildMemberNum called  promise result:', result)
                return res
            })
        }
        log.info('getGuildMemberNum called result:', result)
        return result
    }
    getGuildModeSwitchLimit(...args: any[]) {
        log.info('getGuildModeSwitchLimit called with args:', args)
        const result = this.instance.getGuildModeSwitchLimit(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getGuildModeSwitchLimit called  promise result:', result)
                return res
            })
        }
        log.info('getGuildModeSwitchLimit called result:', result)
        return result
    }
    getGuildNum(...args: any[]) {
        log.info('getGuildNum called with args:', args)
        const result = this.instance.getGuildNum(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getGuildNum called  promise result:', result)
                return res
            })
        }
        log.info('getGuildNum called result:', result)
        return result
    }
    getGuildPermission(...args: any[]) {
        log.info('getGuildPermission called with args:', args)
        const result = this.instance.getGuildPermission(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getGuildPermission called  promise result:', result)
                return res
            })
        }
        log.info('getGuildPermission called result:', result)
        return result
    }
    getGuildRecommend(...args: any[]) {
        log.info('getGuildRecommend called with args:', args)
        const result = this.instance.getGuildRecommend(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getGuildRecommend called  promise result:', result)
                return res
            })
        }
        log.info('getGuildRecommend called result:', result)
        return result
    }
    getGuildRoleLimit(...args: any[]) {
        log.info('getGuildRoleLimit called with args:', args)
        const result = this.instance.getGuildRoleLimit(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getGuildRoleLimit called  promise result:', result)
                return res
            })
        }
        log.info('getGuildRoleLimit called result:', result)
        return result
    }
    getGuildShowWeakNotify(...args: any[]) {
        log.info('getGuildShowWeakNotify called with args:', args)
        const result = this.instance.getGuildShowWeakNotify(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getGuildShowWeakNotify called  promise result:', result)
                return res
            })
        }
        log.info('getGuildShowWeakNotify called result:', result)
        return result
    }
    getGuildSpeakPermission(...args: any[]) {
        log.info('getGuildSpeakPermission called with args:', args)
        const result = this.instance.getGuildSpeakPermission(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getGuildSpeakPermission called  promise result:', result)
                return res
            })
        }
        log.info('getGuildSpeakPermission called result:', result)
        return result
    }
    getGuildUserAvatarPendantUrl(...args: any[]) {
        log.info('getGuildUserAvatarPendantUrl called with args:', args)
        const result = this.instance.getGuildUserAvatarPendantUrl(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getGuildUserAvatarPendantUrl called  promise result:', result)
                return res
            })
        }
        log.info('getGuildUserAvatarPendantUrl called result:', result)
        return result
    }
    getGuildUserAvatarPendantUrls(...args: any[]) {
        log.info('getGuildUserAvatarPendantUrls called with args:', args)
        const result = this.instance.getGuildUserAvatarPendantUrls(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getGuildUserAvatarPendantUrls called  promise result:', result)
                return res
            })
        }
        log.info('getGuildUserAvatarPendantUrls called result:', result)
        return result
    }
    getGuildUserAvatarUrl(...args: any[]) {
        log.info('getGuildUserAvatarUrl called with args:', args)
        const result = this.instance.getGuildUserAvatarUrl(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getGuildUserAvatarUrl called  promise result:', result)
                return res
            })
        }
        log.info('getGuildUserAvatarUrl called result:', result)
        return result
    }
    getGuildUserAvatarUrls(...args: any[]) {
        log.info('getGuildUserAvatarUrls called with args:', args)
        const result = this.instance.getGuildUserAvatarUrls(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getGuildUserAvatarUrls called  promise result:', result)
                return res
            })
        }
        log.info('getGuildUserAvatarUrls called result:', result)
        return result
    }
    getGuildUserBannedStatus(...args: any[]) {
        log.info('getGuildUserBannedStatus called with args:', args)
        const result = this.instance.getGuildUserBannedStatus(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getGuildUserBannedStatus called  promise result:', result)
                return res
            })
        }
        log.info('getGuildUserBannedStatus called result:', result)
        return result
    }
    getGuildUserChannelCategoryAdminList(...args: any[]) {
        log.info('getGuildUserChannelCategoryAdminList called with args:', args)
        const result = this.instance.getGuildUserChannelCategoryAdminList(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getGuildUserChannelCategoryAdminList called  promise result:', result)
                return res
            })
        }
        log.info('getGuildUserChannelCategoryAdminList called result:', result)
        return result
    }
    getGuildUserChannelCategoryAdminLists(...args: any[]) {
        log.info('getGuildUserChannelCategoryAdminLists called with args:', args)
        const result = this.instance.getGuildUserChannelCategoryAdminLists(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getGuildUserChannelCategoryAdminLists called  promise result:', result)
                return res
            })
        }
        log.info('getGuildUserChannelCategoryAdminLists called result:', result)
        return result
    }
    getGuildUserClientIdentities(...args: any[]) {
        log.info('getGuildUserClientIdentities called with args:', args)
        const result = this.instance.getGuildUserClientIdentities(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getGuildUserClientIdentities called  promise result:', result)
                return res
            })
        }
        log.info('getGuildUserClientIdentities called result:', result)
        return result
    }
    getGuildUserClientIdentity(...args: any[]) {
        log.info('getGuildUserClientIdentity called with args:', args)
        const result = this.instance.getGuildUserClientIdentity(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getGuildUserClientIdentity called  promise result:', result)
                return res
            })
        }
        log.info('getGuildUserClientIdentity called result:', result)
        return result
    }
    getGuildUserDisplayName(...args: any[]) {
        log.info('getGuildUserDisplayName called with args:', args)
        const result = this.instance.getGuildUserDisplayName(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getGuildUserDisplayName called  promise result:', result)
                return res
            })
        }
        log.info('getGuildUserDisplayName called result:', result)
        return result
    }
    getGuildUserDisplayNames(...args: any[]) {
        log.info('getGuildUserDisplayNames called with args:', args)
        const result = this.instance.getGuildUserDisplayNames(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getGuildUserDisplayNames called  promise result:', result)
                return res
            })
        }
        log.info('getGuildUserDisplayNames called result:', result)
        return result
    }
    getGuildUserLevelRoleId(...args: any[]) {
        log.info('getGuildUserLevelRoleId called with args:', args)
        const result = this.instance.getGuildUserLevelRoleId(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getGuildUserLevelRoleId called  promise result:', result)
                return res
            })
        }
        log.info('getGuildUserLevelRoleId called result:', result)
        return result
    }
    getGuildUserMedal(...args: any[]) {
        log.info('getGuildUserMedal called with args:', args)
        const result = this.instance.getGuildUserMedal(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getGuildUserMedal called  promise result:', result)
                return res
            })
        }
        log.info('getGuildUserMedal called result:', result)
        return result
    }
    getGuildUserMedals(...args: any[]) {
        log.info('getGuildUserMedals called with args:', args)
        const result = this.instance.getGuildUserMedals(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getGuildUserMedals called  promise result:', result)
                return res
            })
        }
        log.info('getGuildUserMedals called result:', result)
        return result
    }
    getGuildUserMemberName(...args: any[]) {
        log.info('getGuildUserMemberName called with args:', args)
        const result = this.instance.getGuildUserMemberName(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getGuildUserMemberName called  promise result:', result)
                return res
            })
        }
        log.info('getGuildUserMemberName called result:', result)
        return result
    }
    getGuildUserMemberNames(...args: any[]) {
        log.info('getGuildUserMemberNames called with args:', args)
        const result = this.instance.getGuildUserMemberNames(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getGuildUserMemberNames called  promise result:', result)
                return res
            })
        }
        log.info('getGuildUserMemberNames called result:', result)
        return result
    }
    getGuildUserNickname(...args: any[]) {
        log.info('getGuildUserNickname called with args:', args)
        const result = this.instance.getGuildUserNickname(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getGuildUserNickname called  promise result:', result)
                return res
            })
        }
        log.info('getGuildUserNickname called result:', result)
        return result
    }
    getGuildUserNicknames(...args: any[]) {
        log.info('getGuildUserNicknames called with args:', args)
        const result = this.instance.getGuildUserNicknames(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getGuildUserNicknames called  promise result:', result)
                return res
            })
        }
        log.info('getGuildUserNicknames called result:', result)
        return result
    }
    getGuildUserTopRoleId(...args: any[]) {
        log.info('getGuildUserTopRoleId called with args:', args)
        const result = this.instance.getGuildUserTopRoleId(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getGuildUserTopRoleId called  promise result:', result)
                return res
            })
        }
        log.info('getGuildUserTopRoleId called result:', result)
        return result
    }
    getGuildVerifyShareInfo(...args: any[]) {
        log.info('getGuildVerifyShareInfo called with args:', args)
        const result = this.instance.getGuildVerifyShareInfo(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getGuildVerifyShareInfo called  promise result:', result)
                return res
            })
        }
        log.info('getGuildVerifyShareInfo called result:', result)
        return result
    }
    getGuildVisitorVisiblePermission(...args: any[]) {
        log.info('getGuildVisitorVisiblePermission called with args:', args)
        const result = this.instance.getGuildVisitorVisiblePermission(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getGuildVisitorVisiblePermission called  promise result:', result)
                return res
            })
        }
        log.info('getGuildVisitorVisiblePermission called result:', result)
        return result
    }
    getGuildsInContact(...args: any[]) {
        log.info('getGuildsInContact called with args:', args)
        const result = this.instance.getGuildsInContact(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getGuildsInContact called  promise result:', result)
                return res
            })
        }
        log.info('getGuildsInContact called result:', result)
        return result
    }
    getHotEventContent(...args: any[]) {
        log.info('getHotEventContent called with args:', args)
        const result = this.instance.getHotEventContent(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getHotEventContent called  promise result:', result)
                return res
            })
        }
        log.info('getHotEventContent called result:', result)
        return result
    }
    getHotEventListContent(...args: any[]) {
        log.info('getHotEventListContent called with args:', args)
        const result = this.instance.getHotEventListContent(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getHotEventListContent called  promise result:', result)
                return res
            })
        }
        log.info('getHotEventListContent called result:', result)
        return result
    }
    getHotLive(...args: any[]) {
        log.info('getHotLive called with args:', args)
        const result = this.instance.getHotLive(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getHotLive called  promise result:', result)
                return res
            })
        }
        log.info('getHotLive called result:', result)
        return result
    }
    getHotSearchWords(...args: any[]) {
        log.info('getHotSearchWords called with args:', args)
        const result = this.instance.getHotSearchWords(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getHotSearchWords called  promise result:', result)
                return res
            })
        }
        log.info('getHotSearchWords called result:', result)
        return result
    }
    getJumpToCategory(...args: any[]) {
        log.info('getJumpToCategory called with args:', args)
        const result = this.instance.getJumpToCategory(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getJumpToCategory called  promise result:', result)
                return res
            })
        }
        log.info('getJumpToCategory called result:', result)
        return result
    }
    getLabelGuilds(...args: any[]) {
        log.info('getLabelGuilds called with args:', args)
        const result = this.instance.getLabelGuilds(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getLabelGuilds called  promise result:', result)
                return res
            })
        }
        log.info('getLabelGuilds called result:', result)
        return result
    }
    getLiveAudioPollingCtx(...args: any[]) {
        log.info('getLiveAudioPollingCtx called with args:', args)
        const result = this.instance.getLiveAudioPollingCtx(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getLiveAudioPollingCtx called  promise result:', result)
                return res
            })
        }
        log.info('getLiveAudioPollingCtx called result:', result)
        return result
    }
    getLiveAudioPollingCtxV2(...args: any[]) {
        log.info('getLiveAudioPollingCtxV2 called with args:', args)
        const result = this.instance.getLiveAudioPollingCtxV2(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getLiveAudioPollingCtxV2 called  promise result:', result)
                return res
            })
        }
        log.info('getLiveAudioPollingCtxV2 called result:', result)
        return result
    }
    getMemberLevelRoleInfo(...args: any[]) {
        log.info('getMemberLevelRoleInfo called with args:', args)
        const result = this.instance.getMemberLevelRoleInfo(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getMemberLevelRoleInfo called  promise result:', result)
                return res
            })
        }
        log.info('getMemberLevelRoleInfo called result:', result)
        return result
    }
    getMemberTopRoleInfo(...args: any[]) {
        log.info('getMemberTopRoleInfo called with args:', args)
        const result = this.instance.getMemberTopRoleInfo(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getMemberTopRoleInfo called  promise result:', result)
                return res
            })
        }
        log.info('getMemberTopRoleInfo called result:', result)
        return result
    }
    getMiniCategoryInfoFromCache(...args: any[]) {
        log.info('getMiniCategoryInfoFromCache called with args:', args)
        const result = this.instance.getMiniCategoryInfoFromCache(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getMiniCategoryInfoFromCache called  promise result:', result)
                return res
            })
        }
        log.info('getMiniCategoryInfoFromCache called result:', result)
        return result
    }
    getMoreNoticeList(...args: any[]) {
        log.info('getMoreNoticeList called with args:', args)
        const result = this.instance.getMoreNoticeList(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getMoreNoticeList called  promise result:', result)
                return res
            })
        }
        log.info('getMoreNoticeList called result:', result)
        return result
    }
    getMsgNotifyMap(...args: any[]) {
        log.info('getMsgNotifyMap called with args:', args)
        const result = this.instance.getMsgNotifyMap(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getMsgNotifyMap called  promise result:', result)
                return res
            })
        }
        log.info('getMsgNotifyMap called result:', result)
        return result
    }
    getMyTabContent(...args: any[]) {
        log.info('getMyTabContent called with args:', args)
        const result = this.instance.getMyTabContent(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getMyTabContent called  promise result:', result)
                return res
            })
        }
        log.info('getMyTabContent called result:', result)
        return result
    }
    getNavigation(...args: any[]) {
        log.info('getNavigation called with args:', args)
        const result = this.instance.getNavigation(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getNavigation called  promise result:', result)
                return res
            })
        }
        log.info('getNavigation called result:', result)
        return result
    }
    getNavigationStatus(...args: any[]) {
        log.info('getNavigationStatus called with args:', args)
        const result = this.instance.getNavigationStatus(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getNavigationStatus called  promise result:', result)
                return res
            })
        }
        log.info('getNavigationStatus called result:', result)
        return result
    }
    getOnlineMemberInfo(...args: any[]) {
        log.info('getOnlineMemberInfo called with args:', args)
        const result = this.instance.getOnlineMemberInfo(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getOnlineMemberInfo called  promise result:', result)
                return res
            })
        }
        log.info('getOnlineMemberInfo called result:', result)
        return result
    }
    getOpenShareInfo(...args: any[]) {
        log.info('getOpenShareInfo called with args:', args)
        const result = this.instance.getOpenShareInfo(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getOpenShareInfo called  promise result:', result)
                return res
            })
        }
        log.info('getOpenShareInfo called result:', result)
        return result
    }
    getPermissionChangeFilter(...args: any[]) {
        log.info('getPermissionChangeFilter called with args:', args)
        const result = this.instance.getPermissionChangeFilter(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getPermissionChangeFilter called  promise result:', result)
                return res
            })
        }
        log.info('getPermissionChangeFilter called result:', result)
        return result
    }
    getPersonalSignatureTemplate(...args: any[]) {
        log.info('getPersonalSignatureTemplate called with args:', args)
        const result = this.instance.getPersonalSignatureTemplate(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getPersonalSignatureTemplate called  promise result:', result)
                return res
            })
        }
        log.info('getPersonalSignatureTemplate called result:', result)
        return result
    }
    getPollingCtx(...args: any[]) {
        log.info('getPollingCtx called with args:', args)
        const result = this.instance.getPollingCtx(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getPollingCtx called  promise result:', result)
                return res
            })
        }
        log.info('getPollingCtx called result:', result)
        return result
    }
    getPollingCtxs(...args: any[]) {
        log.info('getPollingCtxs called with args:', args)
        const result = this.instance.getPollingCtxs(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getPollingCtxs called  promise result:', result)
                return res
            })
        }
        log.info('getPollingCtxs called result:', result)
        return result
    }
    getPopupInfo(...args: any[]) {
        log.info('getPopupInfo called with args:', args)
        const result = this.instance.getPopupInfo(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getPopupInfo called  promise result:', result)
                return res
            })
        }
        log.info('getPopupInfo called result:', result)
        return result
    }
    getPreviewNavigation(...args: any[]) {
        log.info('getPreviewNavigation called with args:', args)
        const result = this.instance.getPreviewNavigation(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getPreviewNavigation called  promise result:', result)
                return res
            })
        }
        log.info('getPreviewNavigation called result:', result)
        return result
    }
    getProfileSwitch(...args: any[]) {
        log.info('getProfileSwitch called with args:', args)
        const result = this.instance.getProfileSwitch(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getProfileSwitch called  promise result:', result)
                return res
            })
        }
        log.info('getProfileSwitch called result:', result)
        return result
    }
    getQQMsgListChannel(...args: any[]) {
        log.info('getQQMsgListChannel called with args:', args)
        const result = this.instance.getQQMsgListChannel(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getQQMsgListChannel called  promise result:', result)
                return res
            })
        }
        log.info('getQQMsgListChannel called result:', result)
        return result
    }
    getQQMsgListChannels(...args: any[]) {
        log.info('getQQMsgListChannels called with args:', args)
        const result = this.instance.getQQMsgListChannels(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getQQMsgListChannels called  promise result:', result)
                return res
            })
        }
        log.info('getQQMsgListChannels called result:', result)
        return result
    }
    getQQMsgListGuilds(...args: any[]) {
        log.info('getQQMsgListGuilds called with args:', args)
        const result = this.instance.getQQMsgListGuilds(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getQQMsgListGuilds called  promise result:', result)
                return res
            })
        }
        log.info('getQQMsgListGuilds called result:', result)
        return result
    }
    getRecentVisitChannelList(...args: any[]) {
        log.info('getRecentVisitChannelList called with args:', args)
        const result = this.instance.getRecentVisitChannelList(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getRecentVisitChannelList called  promise result:', result)
                return res
            })
        }
        log.info('getRecentVisitChannelList called result:', result)
        return result
    }
    getRecentVisitGuildInfosListSync(...args: any[]) {
        log.info('getRecentVisitGuildInfosListSync called with args:', args)
        const result = this.instance.getRecentVisitGuildInfosListSync(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getRecentVisitGuildInfosListSync called  promise result:', result)
                return res
            })
        }
        log.info('getRecentVisitGuildInfosListSync called result:', result)
        return result
    }
    getRecommendForIntro(...args: any[]) {
        log.info('getRecommendForIntro called with args:', args)
        const result = this.instance.getRecommendForIntro(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getRecommendForIntro called  promise result:', result)
                return res
            })
        }
        log.info('getRecommendForIntro called result:', result)
        return result
    }
    getRecommendGuildInfoFromCacheAsync(...args: any[]) {
        log.info('getRecommendGuildInfoFromCacheAsync called with args:', args)
        const result = this.instance.getRecommendGuildInfoFromCacheAsync(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getRecommendGuildInfoFromCacheAsync called  promise result:', result)
                return res
            })
        }
        log.info('getRecommendGuildInfoFromCacheAsync called result:', result)
        return result
    }
    getRecommendQuickJoin(...args: any[]) {
        log.info('getRecommendQuickJoin called with args:', args)
        const result = this.instance.getRecommendQuickJoin(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getRecommendQuickJoin called  promise result:', result)
                return res
            })
        }
        log.info('getRecommendQuickJoin called result:', result)
        return result
    }
    getRecommendTabContent(...args: any[]) {
        log.info('getRecommendTabContent called with args:', args)
        const result = this.instance.getRecommendTabContent(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getRecommendTabContent called  promise result:', result)
                return res
            })
        }
        log.info('getRecommendTabContent called result:', result)
        return result
    }
    getRecommendTagList(...args: any[]) {
        log.info('getRecommendTagList called with args:', args)
        const result = this.instance.getRecommendTagList(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getRecommendTagList called  promise result:', result)
                return res
            })
        }
        log.info('getRecommendTagList called result:', result)
        return result
    }
    getRiskMemberRedPoint(...args: any[]) {
        log.info('getRiskMemberRedPoint called with args:', args)
        const result = this.instance.getRiskMemberRedPoint(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getRiskMemberRedPoint called  promise result:', result)
                return res
            })
        }
        log.info('getRiskMemberRedPoint called result:', result)
        return result
    }
    getRoleInfo(...args: any[]) {
        log.info('getRoleInfo called with args:', args)
        const result = this.instance.getRoleInfo(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getRoleInfo called  promise result:', result)
                return res
            })
        }
        log.info('getRoleInfo called result:', result)
        return result
    }
    getRolePermission(...args: any[]) {
        log.info('getRolePermission called with args:', args)
        const result = this.instance.getRolePermission(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getRolePermission called  promise result:', result)
                return res
            })
        }
        log.info('getRolePermission called result:', result)
        return result
    }
    getRtmpPushUrl(...args: any[]) {
        log.info('getRtmpPushUrl called with args:', args)
        const result = this.instance.getRtmpPushUrl(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getRtmpPushUrl called  promise result:', result)
                return res
            })
        }
        log.info('getRtmpPushUrl called result:', result)
        return result
    }
    getScheduleDetail(...args: any[]) {
        log.info('getScheduleDetail called with args:', args)
        const result = this.instance.getScheduleDetail(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getScheduleDetail called  promise result:', result)
                return res
            })
        }
        log.info('getScheduleDetail called result:', result)
        return result
    }
    getScheduleList(...args: any[]) {
        log.info('getScheduleList called with args:', args)
        const result = this.instance.getScheduleList(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getScheduleList called  promise result:', result)
                return res
            })
        }
        log.info('getScheduleList called result:', result)
        return result
    }
    getScheduleListNew(...args: any[]) {
        log.info('getScheduleListNew called with args:', args)
        const result = this.instance.getScheduleListNew(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getScheduleListNew called  promise result:', result)
                return res
            })
        }
        log.info('getScheduleListNew called result:', result)
        return result
    }
    getScheduleUsers(...args: any[]) {
        log.info('getScheduleUsers called with args:', args)
        const result = this.instance.getScheduleUsers(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getScheduleUsers called  promise result:', result)
                return res
            })
        }
        log.info('getScheduleUsers called result:', result)
        return result
    }
    getSchedulesStatus(...args: any[]) {
        log.info('getSchedulesStatus called with args:', args)
        const result = this.instance.getSchedulesStatus(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getSchedulesStatus called  promise result:', result)
                return res
            })
        }
        log.info('getSchedulesStatus called result:', result)
        return result
    }
    getSelectChannelIDs(...args: any[]) {
        log.info('getSelectChannelIDs called with args:', args)
        const result = this.instance.getSelectChannelIDs(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getSelectChannelIDs called  promise result:', result)
                return res
            })
        }
        log.info('getSelectChannelIDs called result:', result)
        return result
    }
    getSelfLiveChannelBanStatus(...args: any[]) {
        log.info('getSelfLiveChannelBanStatus called with args:', args)
        const result = this.instance.getSelfLiveChannelBanStatus(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getSelfLiveChannelBanStatus called  promise result:', result)
                return res
            })
        }
        log.info('getSelfLiveChannelBanStatus called result:', result)
        return result
    }
    getShareButtonFromCache(...args: any[]) {
        log.info('getShareButtonFromCache called with args:', args)
        const result = this.instance.getShareButtonFromCache(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getShareButtonFromCache called  promise result:', result)
                return res
            })
        }
        log.info('getShareButtonFromCache called result:', result)
        return result
    }
    getSimpleProfile(...args: any[]) {
        log.info('getSimpleProfile called with args:', args)
        const result = this.instance.getSimpleProfile(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getSimpleProfile called  promise result:', result)
                return res
            })
        }
        log.info('getSimpleProfile called result:', result)
        return result
    }
    getSimpleProfileAsync(...args: any[]) {
        log.info('getSimpleProfileAsync called with args:', args)
        const result = this.instance.getSimpleProfileAsync(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getSimpleProfileAsync called  promise result:', result)
                return res
            })
        }
        log.info('getSimpleProfileAsync called result:', result)
        return result
    }
    getSortedGuildIdsFromCache(...args: any[]) {
        log.info('getSortedGuildIdsFromCache called with args:', args)
        const result = this.instance.getSortedGuildIdsFromCache(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getSortedGuildIdsFromCache called  promise result:', result)
                return res
            })
        }
        log.info('getSortedGuildIdsFromCache called result:', result)
        return result
    }
    getSortedGuildsFromCache(...args: any[]) {
        log.info('getSortedGuildsFromCache called with args:', args)
        const result = this.instance.getSortedGuildsFromCache(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getSortedGuildsFromCache called  promise result:', result)
                return res
            })
        }
        log.info('getSortedGuildsFromCache called result:', result)
        return result
    }
    getSpecificTypeChannelList(...args: any[]) {
        log.info('getSpecificTypeChannelList called with args:', args)
        const result = this.instance.getSpecificTypeChannelList(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getSpecificTypeChannelList called  promise result:', result)
                return res
            })
        }
        log.info('getSpecificTypeChannelList called result:', result)
        return result
    }
    getToppedGuildIdsFromCache(...args: any[]) {
        log.info('getToppedGuildIdsFromCache called with args:', args)
        const result = this.instance.getToppedGuildIdsFromCache(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getToppedGuildIdsFromCache called  promise result:', result)
                return res
            })
        }
        log.info('getToppedGuildIdsFromCache called result:', result)
        return result
    }
    getUIData(...args: any[]) {
        log.info('getUIData called with args:', args)
        const result = this.instance.getUIData(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getUIData called  promise result:', result)
                return res
            })
        }
        log.info('getUIData called result:', result)
        return result
    }
    getUnBindClientService(...args: any[]) {
        log.info('getUnBindClientService called with args:', args)
        const result = this.instance.getUnBindClientService(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getUnBindClientService called  promise result:', result)
                return res
            })
        }
        log.info('getUnBindClientService called result:', result)
        return result
    }
    getUnBindClientServiceV2(...args: any[]) {
        log.info('getUnBindClientServiceV2 called with args:', args)
        const result = this.instance.getUnBindClientServiceV2(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getUnBindClientServiceV2 called  promise result:', result)
                return res
            })
        }
        log.info('getUnBindClientServiceV2 called result:', result)
        return result
    }
    getUserList(...args: any[]) {
        log.info('getUserList called with args:', args)
        const result = this.instance.getUserList(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getUserList called  promise result:', result)
                return res
            })
        }
        log.info('getUserList called result:', result)
        return result
    }
    getUserLiveInfo(...args: any[]) {
        log.info('getUserLiveInfo called with args:', args)
        const result = this.instance.getUserLiveInfo(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getUserLiveInfo called  promise result:', result)
                return res
            })
        }
        log.info('getUserLiveInfo called result:', result)
        return result
    }
    hasJoinChannelRole(...args: any[]) {
        log.info('hasJoinChannelRole called with args:', args)
        const result = this.instance.hasJoinChannelRole(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('hasJoinChannelRole called  promise result:', result)
                return res
            })
        }
        log.info('hasJoinChannelRole called result:', result)
        return result
    }
    implantChatWindow(...args: any[]) {
        log.info('implantChatWindow called with args:', args)
        const result = this.instance.implantChatWindow(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('implantChatWindow called  promise result:', result)
                return res
            })
        }
        log.info('implantChatWindow called result:', result)
        return result
    }
    initGetNoticeList(...args: any[]) {
        log.info('initGetNoticeList called with args:', args)
        const result = this.instance.initGetNoticeList(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('initGetNoticeList called  promise result:', result)
                return res
            })
        }
        log.info('initGetNoticeList called result:', result)
        return result
    }
    interruptAISearchSession(...args: any[]) {
        log.info('interruptAISearchSession called with args:', args)
        const result = this.instance.interruptAISearchSession(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('interruptAISearchSession called  promise result:', result)
                return res
            })
        }
        log.info('interruptAISearchSession called result:', result)
        return result
    }
    inviteJoinSingleGuild(...args: any[]) {
        log.info('inviteJoinSingleGuild called with args:', args)
        const result = this.instance.inviteJoinSingleGuild(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('inviteJoinSingleGuild called  promise result:', result)
                return res
            })
        }
        log.info('inviteJoinSingleGuild called result:', result)
        return result
    }
    inviteUserHandUpForAdmin(...args: any[]) {
        log.info('inviteUserHandUpForAdmin called with args:', args)
        const result = this.instance.inviteUserHandUpForAdmin(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('inviteUserHandUpForAdmin called  promise result:', result)
                return res
            })
        }
        log.info('inviteUserHandUpForAdmin called result:', result)
        return result
    }
    inviteUserQueueForAdmin(...args: any[]) {
        log.info('inviteUserQueueForAdmin called with args:', args)
        const result = this.instance.inviteUserQueueForAdmin(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('inviteUserQueueForAdmin called  promise result:', result)
                return res
            })
        }
        log.info('inviteUserQueueForAdmin called result:', result)
        return result
    }
    isGuildMember(...args: any[]) {
        log.info('isGuildMember called with args:', args)
        const result = this.instance.isGuildMember(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('isGuildMember called  promise result:', result)
                return res
            })
        }
        log.info('isGuildMember called result:', result)
        return result
    }
    isQQMsgListChannel(...args: any[]) {
        log.info('isQQMsgListChannel called with args:', args)
        const result = this.instance.isQQMsgListChannel(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('isQQMsgListChannel called  promise result:', result)
                return res
            })
        }
        log.info('isQQMsgListChannel called result:', result)
        return result
    }
    isQQMsgListGuild(...args: any[]) {
        log.info('isQQMsgListGuild called with args:', args)
        const result = this.instance.isQQMsgListGuild(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('isQQMsgListGuild called  promise result:', result)
                return res
            })
        }
        log.info('isQQMsgListGuild called result:', result)
        return result
    }
    isQQMsgListReady(...args: any[]) {
        log.info('isQQMsgListReady called with args:', args)
        const result = this.instance.isQQMsgListReady(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('isQQMsgListReady called  promise result:', result)
                return res
            })
        }
        log.info('isQQMsgListReady called result:', result)
        return result
    }
    joinChannelByGuildTask(...args: any[]) {
        log.info('joinChannelByGuildTask called with args:', args)
        const result = this.instance.joinChannelByGuildTask(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('joinChannelByGuildTask called  promise result:', result)
                return res
            })
        }
        log.info('joinChannelByGuildTask called result:', result)
        return result
    }
    kickAudioChannelUsers(...args: any[]) {
        log.info('kickAudioChannelUsers called with args:', args)
        const result = this.instance.kickAudioChannelUsers(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('kickAudioChannelUsers called  promise result:', result)
                return res
            })
        }
        log.info('kickAudioChannelUsers called result:', result)
        return result
    }
    kickGuildUser(...args: any[]) {
        log.info('kickGuildUser called with args:', args)
        const result = this.instance.kickGuildUser(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('kickGuildUser called  promise result:', result)
                return res
            })
        }
        log.info('kickGuildUser called result:', result)
        return result
    }
    loadAllMemberList(...args: any[]) {
        log.info('loadAllMemberList called with args:', args)
        const result = this.instance.loadAllMemberList(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('loadAllMemberList called  promise result:', result)
                return res
            })
        }
        log.info('loadAllMemberList called result:', result)
        return result
    }
    loadGuildAndChannels(...args: any[]) {
        log.info('loadGuildAndChannels called with args:', args)
        const result = this.instance.loadGuildAndChannels(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('loadGuildAndChannels called  promise result:', result)
                return res
            })
        }
        log.info('loadGuildAndChannels called result:', result)
        return result
    }
    loadMemberListByIndex(...args: any[]) {
        log.info('loadMemberListByIndex called with args:', args)
        const result = this.instance.loadMemberListByIndex(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('loadMemberListByIndex called  promise result:', result)
                return res
            })
        }
        log.info('loadMemberListByIndex called result:', result)
        return result
    }
    loadMemberRoles(...args: any[]) {
        log.info('loadMemberRoles called with args:', args)
        const result = this.instance.loadMemberRoles(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('loadMemberRoles called  promise result:', result)
                return res
            })
        }
        log.info('loadMemberRoles called result:', result)
        return result
    }
    loadNextPageMemberList(...args: any[]) {
        log.info('loadNextPageMemberList called with args:', args)
        const result = this.instance.loadNextPageMemberList(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('loadNextPageMemberList called  promise result:', result)
                return res
            })
        }
        log.info('loadNextPageMemberList called result:', result)
        return result
    }
    loadPartRoleMemberList(...args: any[]) {
        log.info('loadPartRoleMemberList called with args:', args)
        const result = this.instance.loadPartRoleMemberList(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('loadPartRoleMemberList called  promise result:', result)
                return res
            })
        }
        log.info('loadPartRoleMemberList called result:', result)
        return result
    }
    loadUserInfo(...args: any[]) {
        log.info('loadUserInfo called with args:', args)
        const result = this.instance.loadUserInfo(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('loadUserInfo called  promise result:', result)
                return res
            })
        }
        log.info('loadUserInfo called result:', result)
        return result
    }
    loadUserList(...args: any[]) {
        log.info('loadUserList called with args:', args)
        const result = this.instance.loadUserList(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('loadUserList called  promise result:', result)
                return res
            })
        }
        log.info('loadUserList called result:', result)
        return result
    }
    loginLive(...args: any[]) {
        log.info('loginLive called with args:', args)
        const result = this.instance.loginLive(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('loginLive called  promise result:', result)
                return res
            })
        }
        log.info('loginLive called result:', result)
        return result
    }
    loginLiveSvr(...args: any[]) {
        log.info('loginLiveSvr called with args:', args)
        const result = this.instance.loginLiveSvr(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('loginLiveSvr called  promise result:', result)
                return res
            })
        }
        log.info('loginLiveSvr called result:', result)
        return result
    }
    makeAISearchShareImageAddHiddenLabel(...args: any[]) {
        log.info('makeAISearchShareImageAddHiddenLabel called with args:', args)
        const result = this.instance.makeAISearchShareImageAddHiddenLabel(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('makeAISearchShareImageAddHiddenLabel called  promise result:', result)
                return res
            })
        }
        log.info('makeAISearchShareImageAddHiddenLabel called result:', result)
        return result
    }
    modifyChannelInfo(...args: any[]) {
        log.info('modifyChannelInfo called with args:', args)
        const result = this.instance.modifyChannelInfo(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('modifyChannelInfo called  promise result:', result)
                return res
            })
        }
        log.info('modifyChannelInfo called result:', result)
        return result
    }
    modifyScheduleInviteStatus(...args: any[]) {
        log.info('modifyScheduleInviteStatus called with args:', args)
        const result = this.instance.modifyScheduleInviteStatus(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('modifyScheduleInviteStatus called  promise result:', result)
                return res
            })
        }
        log.info('modifyScheduleInviteStatus called result:', result)
        return result
    }
    modifyScheduleInviteStatusV2(...args: any[]) {
        log.info('modifyScheduleInviteStatusV2 called with args:', args)
        const result = this.instance.modifyScheduleInviteStatusV2(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('modifyScheduleInviteStatusV2 called  promise result:', result)
                return res
            })
        }
        log.info('modifyScheduleInviteStatusV2 called result:', result)
        return result
    }
    onServerPushMsg(...args: any[]) {
        log.info('onServerPushMsg called with args:', args)
        const result = this.instance.onServerPushMsg(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('onServerPushMsg called  promise result:', result)
                return res
            })
        }
        log.info('onServerPushMsg called result:', result)
        return result
    }
    openAVLobbyApp(...args: any[]) {
        log.info('openAVLobbyApp called with args:', args)
        const result = this.instance.openAVLobbyApp(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('openAVLobbyApp called  promise result:', result)
                return res
            })
        }
        log.info('openAVLobbyApp called result:', result)
        return result
    }
    pinGuildGroupInRecentContact(...args: any[]) {
        log.info('pinGuildGroupInRecentContact called with args:', args)
        const result = this.instance.pinGuildGroupInRecentContact(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('pinGuildGroupInRecentContact called  promise result:', result)
                return res
            })
        }
        log.info('pinGuildGroupInRecentContact called result:', result)
        return result
    }
    popChatWindow(...args: any[]) {
        log.info('popChatWindow called with args:', args)
        const result = this.instance.popChatWindow(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('popChatWindow called  promise result:', result)
                return res
            })
        }
        log.info('popChatWindow called result:', result)
        return result
    }
    prepareLiveBroadcast(...args: any[]) {
        log.info('prepareLiveBroadcast called with args:', args)
        const result = this.instance.prepareLiveBroadcast(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('prepareLiveBroadcast called  promise result:', result)
                return res
            })
        }
        log.info('prepareLiveBroadcast called result:', result)
        return result
    }
    queryAVState(...args: any[]) {
        log.info('queryAVState called with args:', args)
        const result = this.instance.queryAVState(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('queryAVState called  promise result:', result)
                return res
            })
        }
        log.info('queryAVState called result:', result)
        return result
    }
    queryApplyAddGuildStatus(...args: any[]) {
        log.info('queryApplyAddGuildStatus called with args:', args)
        const result = this.instance.queryApplyAddGuildStatus(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('queryApplyAddGuildStatus called  promise result:', result)
                return res
            })
        }
        log.info('queryApplyAddGuildStatus called result:', result)
        return result
    }
    queryChannelOnlineMemberList(...args: any[]) {
        log.info('queryChannelOnlineMemberList called with args:', args)
        const result = this.instance.queryChannelOnlineMemberList(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('queryChannelOnlineMemberList called  promise result:', result)
                return res
            })
        }
        log.info('queryChannelOnlineMemberList called result:', result)
        return result
    }
    queryGuildEssence(...args: any[]) {
        log.info('queryGuildEssence called with args:', args)
        const result = this.instance.queryGuildEssence(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('queryGuildEssence called  promise result:', result)
                return res
            })
        }
        log.info('queryGuildEssence called result:', result)
        return result
    }
    queryGuildVisitor(...args: any[]) {
        log.info('queryGuildVisitor called with args:', args)
        const result = this.instance.queryGuildVisitor(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('queryGuildVisitor called  promise result:', result)
                return res
            })
        }
        log.info('queryGuildVisitor called result:', result)
        return result
    }
    queryLiveBroadcastRecord(...args: any[]) {
        log.info('queryLiveBroadcastRecord called with args:', args)
        const result = this.instance.queryLiveBroadcastRecord(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('queryLiveBroadcastRecord called  promise result:', result)
                return res
            })
        }
        log.info('queryLiveBroadcastRecord called result:', result)
        return result
    }
    queryPauseLiveBroadcast(...args: any[]) {
        log.info('queryPauseLiveBroadcast called with args:', args)
        const result = this.instance.queryPauseLiveBroadcast(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('queryPauseLiveBroadcast called  promise result:', result)
                return res
            })
        }
        log.info('queryPauseLiveBroadcast called result:', result)
        return result
    }
    queryRealNameAuthStatus(...args: any[]) {
        log.info('queryRealNameAuthStatus called with args:', args)
        const result = this.instance.queryRealNameAuthStatus(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('queryRealNameAuthStatus called  promise result:', result)
                return res
            })
        }
        log.info('queryRealNameAuthStatus called result:', result)
        return result
    }
    queryTinyIdByLiveUID(...args: any[]) {
        log.info('queryTinyIdByLiveUID called with args:', args)
        const result = this.instance.queryTinyIdByLiveUID(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('queryTinyIdByLiveUID called  promise result:', result)
                return res
            })
        }
        log.info('queryTinyIdByLiveUID called result:', result)
        return result
    }
    refreshAppChannelPreInfos(...args: any[]) {
        log.info('refreshAppChannelPreInfos called with args:', args)
        const result = this.instance.refreshAppChannelPreInfos(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('refreshAppChannelPreInfos called  promise result:', result)
                return res
            })
        }
        log.info('refreshAppChannelPreInfos called result:', result)
        return result
    }
    refreshChannelInfo(...args: any[]) {
        log.info('refreshChannelInfo called with args:', args)
        const result = this.instance.refreshChannelInfo(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('refreshChannelInfo called  promise result:', result)
                return res
            })
        }
        log.info('refreshChannelInfo called result:', result)
        return result
    }
    refreshGuildInfo(...args: any[]) {
        log.info('refreshGuildInfo called with args:', args)
        const result = this.instance.refreshGuildInfo(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('refreshGuildInfo called  promise result:', result)
                return res
            })
        }
        log.info('refreshGuildInfo called result:', result)
        return result
    }
    refreshGuildInfoOnly(...args: any[]) {
        log.info('refreshGuildInfoOnly called with args:', args)
        const result = this.instance.refreshGuildInfoOnly(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('refreshGuildInfoOnly called  promise result:', result)
                return res
            })
        }
        log.info('refreshGuildInfoOnly called result:', result)
        return result
    }
    refreshGuildList(...args: any[]) {
        log.info('refreshGuildList called with args:', args)
        const result = this.instance.refreshGuildList(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('refreshGuildList called  promise result:', result)
                return res
            })
        }
        log.info('refreshGuildList called result:', result)
        return result
    }
    refreshGuildUserProfileInfo(...args: any[]) {
        log.info('refreshGuildUserProfileInfo called with args:', args)
        const result = this.instance.refreshGuildUserProfileInfo(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('refreshGuildUserProfileInfo called  promise result:', result)
                return res
            })
        }
        log.info('refreshGuildUserProfileInfo called result:', result)
        return result
    }
    refreshPollingData(...args: any[]) {
        log.info('refreshPollingData called with args:', args)
        const result = this.instance.refreshPollingData(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('refreshPollingData called  promise result:', result)
                return res
            })
        }
        log.info('refreshPollingData called result:', result)
        return result
    }
    removeBanBeforeBroadcast(...args: any[]) {
        log.info('removeBanBeforeBroadcast called with args:', args)
        const result = this.instance.removeBanBeforeBroadcast(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('removeBanBeforeBroadcast called  promise result:', result)
                return res
            })
        }
        log.info('removeBanBeforeBroadcast called result:', result)
        return result
    }
    removeChannel(...args: any[]) {
        log.info('removeChannel called with args:', args)
        const result = this.instance.removeChannel(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('removeChannel called  promise result:', result)
                return res
            })
        }
        log.info('removeChannel called result:', result)
        return result
    }
    removeChannelCategoryWithId(...args: any[]) {
        log.info('removeChannelCategoryWithId called with args:', args)
        const result = this.instance.removeChannelCategoryWithId(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('removeChannelCategoryWithId called  promise result:', result)
                return res
            })
        }
        log.info('removeChannelCategoryWithId called result:', result)
        return result
    }
    removeGuild(...args: any[]) {
        log.info('removeGuild called with args:', args)
        const result = this.instance.removeGuild(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('removeGuild called  promise result:', result)
                return res
            })
        }
        log.info('removeGuild called result:', result)
        return result
    }
    removeGuildGlobalBanner(...args: any[]) {
        log.info('removeGuildGlobalBanner called with args:', args)
        const result = this.instance.removeGuildGlobalBanner(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('removeGuildGlobalBanner called  promise result:', result)
                return res
            })
        }
        log.info('removeGuildGlobalBanner called result:', result)
        return result
    }
    removeGuildTaskCard(...args: any[]) {
        log.info('removeGuildTaskCard called with args:', args)
        const result = this.instance.removeGuildTaskCard(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('removeGuildTaskCard called  promise result:', result)
                return res
            })
        }
        log.info('removeGuildTaskCard called result:', result)
        return result
    }
    removeKernelGuildListener(...args: any[]) {
        log.info('removeKernelGuildListener called with args:', args)
        const result = this.instance.removeKernelGuildListener(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('removeKernelGuildListener called  promise result:', result)
                return res
            })
        }
        log.info('removeKernelGuildListener called result:', result)
        return result
    }
    removeMemberFromGuildBlackList(...args: any[]) {
        log.info('removeMemberFromGuildBlackList called with args:', args)
        const result = this.instance.removeMemberFromGuildBlackList(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('removeMemberFromGuildBlackList called  promise result:', result)
                return res
            })
        }
        log.info('removeMemberFromGuildBlackList called result:', result)
        return result
    }
    removeRiskMembers(...args: any[]) {
        log.info('removeRiskMembers called with args:', args)
        const result = this.instance.removeRiskMembers(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('removeRiskMembers called  promise result:', result)
                return res
            })
        }
        log.info('removeRiskMembers called result:', result)
        return result
    }
    removeSpeakOrderByUser(...args: any[]) {
        log.info('removeSpeakOrderByUser called with args:', args)
        const result = this.instance.removeSpeakOrderByUser(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('removeSpeakOrderByUser called  promise result:', result)
                return res
            })
        }
        log.info('removeSpeakOrderByUser called result:', result)
        return result
    }
    reportAISearchRecommendWords(...args: any[]) {
        log.info('reportAISearchRecommendWords called with args:', args)
        const result = this.instance.reportAISearchRecommendWords(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('reportAISearchRecommendWords called  promise result:', result)
                return res
            })
        }
        log.info('reportAISearchRecommendWords called result:', result)
        return result
    }
    reportAVState(...args: any[]) {
        log.info('reportAVState called with args:', args)
        const result = this.instance.reportAVState(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('reportAVState called  promise result:', result)
                return res
            })
        }
        log.info('reportAVState called result:', result)
        return result
    }
    reportCurrentGuild(...args: any[]) {
        log.info('reportCurrentGuild called with args:', args)
        const result = this.instance.reportCurrentGuild(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('reportCurrentGuild called  promise result:', result)
                return res
            })
        }
        log.info('reportCurrentGuild called result:', result)
        return result
    }
    reportFeedShareData(...args: any[]) {
        log.info('reportFeedShareData called with args:', args)
        const result = this.instance.reportFeedShareData(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('reportFeedShareData called  promise result:', result)
                return res
            })
        }
        log.info('reportFeedShareData called result:', result)
        return result
    }
    reportFeedback(...args: any[]) {
        log.info('reportFeedback called with args:', args)
        const result = this.instance.reportFeedback(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('reportFeedback called  promise result:', result)
                return res
            })
        }
        log.info('reportFeedback called result:', result)
        return result
    }
    reportInteractiveLikesInGroup(...args: any[]) {
        log.info('reportInteractiveLikesInGroup called with args:', args)
        const result = this.instance.reportInteractiveLikesInGroup(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('reportInteractiveLikesInGroup called  promise result:', result)
                return res
            })
        }
        log.info('reportInteractiveLikesInGroup called result:', result)
        return result
    }
    reportJoinRecommendGuild(...args: any[]) {
        log.info('reportJoinRecommendGuild called with args:', args)
        const result = this.instance.reportJoinRecommendGuild(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('reportJoinRecommendGuild called  promise result:', result)
                return res
            })
        }
        log.info('reportJoinRecommendGuild called result:', result)
        return result
    }
    reportPreventAddictionInstructions(...args: any[]) {
        log.info('reportPreventAddictionInstructions called with args:', args)
        const result = this.instance.reportPreventAddictionInstructions(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('reportPreventAddictionInstructions called  promise result:', result)
                return res
            })
        }
        log.info('reportPreventAddictionInstructions called result:', result)
        return result
    }
    reportShareAtta(...args: any[]) {
        log.info('reportShareAtta called with args:', args)
        const result = this.instance.reportShareAtta(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('reportShareAtta called  promise result:', result)
                return res
            })
        }
        log.info('reportShareAtta called result:', result)
        return result
    }
    reportShareInfo(...args: any[]) {
        log.info('reportShareInfo called with args:', args)
        const result = this.instance.reportShareInfo(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('reportShareInfo called  promise result:', result)
                return res
            })
        }
        log.info('reportShareInfo called result:', result)
        return result
    }
    reportUserViewGuild(...args: any[]) {
        log.info('reportUserViewGuild called with args:', args)
        const result = this.instance.reportUserViewGuild(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('reportUserViewGuild called  promise result:', result)
                return res
            })
        }
        log.info('reportUserViewGuild called result:', result)
        return result
    }
    requestBeginBroadcast(...args: any[]) {
        log.info('requestBeginBroadcast called with args:', args)
        const result = this.instance.requestBeginBroadcast(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('requestBeginBroadcast called  promise result:', result)
                return res
            })
        }
        log.info('requestBeginBroadcast called result:', result)
        return result
    }
    requestPubAccountMsgCount(...args: any[]) {
        log.info('requestPubAccountMsgCount called with args:', args)
        const result = this.instance.requestPubAccountMsgCount(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('requestPubAccountMsgCount called  promise result:', result)
                return res
            })
        }
        log.info('requestPubAccountMsgCount called result:', result)
        return result
    }
    riskMemberList(...args: any[]) {
        log.info('riskMemberList called with args:', args)
        const result = this.instance.riskMemberList(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('riskMemberList called  promise result:', result)
                return res
            })
        }
        log.info('riskMemberList called result:', result)
        return result
    }
    saveCustomApplication(...args: any[]) {
        log.info('saveCustomApplication called with args:', args)
        const result = this.instance.saveCustomApplication(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('saveCustomApplication called  promise result:', result)
                return res
            })
        }
        log.info('saveCustomApplication called result:', result)
        return result
    }
    saveGuidNavigation(...args: any[]) {
        log.info('saveGuidNavigation called with args:', args)
        const result = this.instance.saveGuidNavigation(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('saveGuidNavigation called  promise result:', result)
                return res
            })
        }
        log.info('saveGuidNavigation called result:', result)
        return result
    }
    searchBlackUserFromServer(...args: any[]) {
        log.info('searchBlackUserFromServer called with args:', args)
        const result = this.instance.searchBlackUserFromServer(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('searchBlackUserFromServer called  promise result:', result)
                return res
            })
        }
        log.info('searchBlackUserFromServer called result:', result)
        return result
    }
    searchChannelContent(...args: any[]) {
        log.info('searchChannelContent called with args:', args)
        const result = this.instance.searchChannelContent(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('searchChannelContent called  promise result:', result)
                return res
            })
        }
        log.info('searchChannelContent called result:', result)
        return result
    }
    searchGuild(...args: any[]) {
        log.info('searchGuild called with args:', args)
        const result = this.instance.searchGuild(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('searchGuild called  promise result:', result)
                return res
            })
        }
        log.info('searchGuild called result:', result)
        return result
    }
    searchGuildContent(...args: any[]) {
        log.info('searchGuildContent called with args:', args)
        const result = this.instance.searchGuildContent(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('searchGuildContent called  promise result:', result)
                return res
            })
        }
        log.info('searchGuildContent called result:', result)
        return result
    }
    searchGuildFeeds(...args: any[]) {
        log.info('searchGuildFeeds called with args:', args)
        const result = this.instance.searchGuildFeeds(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('searchGuildFeeds called  promise result:', result)
                return res
            })
        }
        log.info('searchGuildFeeds called result:', result)
        return result
    }
    searchGuildMembersBySourceId(...args: any[]) {
        log.info('searchGuildMembersBySourceId called with args:', args)
        const result = this.instance.searchGuildMembersBySourceId(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('searchGuildMembersBySourceId called  promise result:', result)
                return res
            })
        }
        log.info('searchGuildMembersBySourceId called result:', result)
        return result
    }
    searchMsgSeqsFromServer(...args: any[]) {
        log.info('searchMsgSeqsFromServer called with args:', args)
        const result = this.instance.searchMsgSeqsFromServer(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('searchMsgSeqsFromServer called  promise result:', result)
                return res
            })
        }
        log.info('searchMsgSeqsFromServer called result:', result)
        return result
    }
    searchUnion(...args: any[]) {
        log.info('searchUnion called with args:', args)
        const result = this.instance.searchUnion(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('searchUnion called  promise result:', result)
                return res
            })
        }
        log.info('searchUnion called result:', result)
        return result
    }
    sendArkMessage(...args: any[]) {
        log.info('sendArkMessage called with args:', args)
        const result = this.instance.sendArkMessage(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('sendArkMessage called  promise result:', result)
                return res
            })
        }
        log.info('sendArkMessage called result:', result)
        return result
    }
    sendAudioOrLiveNotice(...args: any[]) {
        log.info('sendAudioOrLiveNotice called with args:', args)
        const result = this.instance.sendAudioOrLiveNotice(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('sendAudioOrLiveNotice called  promise result:', result)
                return res
            })
        }
        log.info('sendAudioOrLiveNotice called result:', result)
        return result
    }
    sendChannelHeartbeat(...args: any[]) {
        log.info('sendChannelHeartbeat called with args:', args)
        const result = this.instance.sendChannelHeartbeat(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('sendChannelHeartbeat called  promise result:', result)
                return res
            })
        }
        log.info('sendChannelHeartbeat called result:', result)
        return result
    }
    sendDirectMsgReadReport(...args: any[]) {
        log.info('sendDirectMsgReadReport called with args:', args)
        const result = this.instance.sendDirectMsgReadReport(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('sendDirectMsgReadReport called  promise result:', result)
                return res
            })
        }
        log.info('sendDirectMsgReadReport called result:', result)
        return result
    }
    sendOperationSaveMsg(...args: any[]) {
        log.info('sendOperationSaveMsg called with args:', args)
        const result = this.instance.sendOperationSaveMsg(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('sendOperationSaveMsg called  promise result:', result)
                return res
            })
        }
        log.info('sendOperationSaveMsg called result:', result)
        return result
    }
    sendScheduleArkMessage(...args: any[]) {
        log.info('sendScheduleArkMessage called with args:', args)
        const result = this.instance.sendScheduleArkMessage(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('sendScheduleArkMessage called  promise result:', result)
                return res
            })
        }
        log.info('sendScheduleArkMessage called result:', result)
        return result
    }
    setAISearchMsgFeedbackStatus(...args: any[]) {
        log.info('setAISearchMsgFeedbackStatus called with args:', args)
        const result = this.instance.setAISearchMsgFeedbackStatus(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setAISearchMsgFeedbackStatus called  promise result:', result)
                return res
            })
        }
        log.info('setAISearchMsgFeedbackStatus called result:', result)
        return result
    }
    setAVChannelInviteSpeakSwitch(...args: any[]) {
        log.info('setAVChannelInviteSpeakSwitch called with args:', args)
        const result = this.instance.setAVChannelInviteSpeakSwitch(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setAVChannelInviteSpeakSwitch called  promise result:', result)
                return res
            })
        }
        log.info('setAVChannelInviteSpeakSwitch called result:', result)
        return result
    }
    setAVChannelSpeakMode(...args: any[]) {
        log.info('setAVChannelSpeakMode called with args:', args)
        const result = this.instance.setAVChannelSpeakMode(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setAVChannelSpeakMode called  promise result:', result)
                return res
            })
        }
        log.info('setAVChannelSpeakMode called result:', result)
        return result
    }
    setAVChannelSpeakOrder(...args: any[]) {
        log.info('setAVChannelSpeakOrder called with args:', args)
        const result = this.instance.setAVChannelSpeakOrder(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setAVChannelSpeakOrder called  promise result:', result)
                return res
            })
        }
        log.info('setAVChannelSpeakOrder called result:', result)
        return result
    }
    setAddGuildOption(...args: any[]) {
        log.info('setAddGuildOption called with args:', args)
        const result = this.instance.setAddGuildOption(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setAddGuildOption called  promise result:', result)
                return res
            })
        }
        log.info('setAddGuildOption called result:', result)
        return result
    }
    setAnchorRoomInfo(...args: any[]) {
        log.info('setAnchorRoomInfo called with args:', args)
        const result = this.instance.setAnchorRoomInfo(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setAnchorRoomInfo called  promise result:', result)
                return res
            })
        }
        log.info('setAnchorRoomInfo called result:', result)
        return result
    }
    setCategoryFolded(...args: any[]) {
        log.info('setCategoryFolded called with args:', args)
        const result = this.instance.setCategoryFolded(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setCategoryFolded called  promise result:', result)
                return res
            })
        }
        log.info('setCategoryFolded called result:', result)
        return result
    }
    setChannelAuthControl(...args: any[]) {
        log.info('setChannelAuthControl called with args:', args)
        const result = this.instance.setChannelAuthControl(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setChannelAuthControl called  promise result:', result)
                return res
            })
        }
        log.info('setChannelAuthControl called result:', result)
        return result
    }
    setChannelAuthControlMemberList(...args: any[]) {
        log.info('setChannelAuthControlMemberList called with args:', args)
        const result = this.instance.setChannelAuthControlMemberList(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setChannelAuthControlMemberList called  promise result:', result)
                return res
            })
        }
        log.info('setChannelAuthControlMemberList called result:', result)
        return result
    }
    setChannelAuthControlRoleList(...args: any[]) {
        log.info('setChannelAuthControlRoleList called with args:', args)
        const result = this.instance.setChannelAuthControlRoleList(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setChannelAuthControlRoleList called  promise result:', result)
                return res
            })
        }
        log.info('setChannelAuthControlRoleList called result:', result)
        return result
    }
    setChannelAuthInfo(...args: any[]) {
        log.info('setChannelAuthInfo called with args:', args)
        const result = this.instance.setChannelAuthInfo(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setChannelAuthInfo called  promise result:', result)
                return res
            })
        }
        log.info('setChannelAuthInfo called result:', result)
        return result
    }
    setChannelBannedSpeak(...args: any[]) {
        log.info('setChannelBannedSpeak called with args:', args)
        const result = this.instance.setChannelBannedSpeak(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setChannelBannedSpeak called  promise result:', result)
                return res
            })
        }
        log.info('setChannelBannedSpeak called result:', result)
        return result
    }
    setChannelCategoryInfoWithId(...args: any[]) {
        log.info('setChannelCategoryInfoWithId called with args:', args)
        const result = this.instance.setChannelCategoryInfoWithId(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setChannelCategoryInfoWithId called  promise result:', result)
                return res
            })
        }
        log.info('setChannelCategoryInfoWithId called result:', result)
        return result
    }
    setChannelCategoryOrder(...args: any[]) {
        log.info('setChannelCategoryOrder called with args:', args)
        const result = this.instance.setChannelCategoryOrder(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setChannelCategoryOrder called  promise result:', result)
                return res
            })
        }
        log.info('setChannelCategoryOrder called result:', result)
        return result
    }
    setChannelCategoryOrderWithId(...args: any[]) {
        log.info('setChannelCategoryOrderWithId called with args:', args)
        const result = this.instance.setChannelCategoryOrderWithId(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setChannelCategoryOrderWithId called  promise result:', result)
                return res
            })
        }
        log.info('setChannelCategoryOrderWithId called result:', result)
        return result
    }
    setChannelCategoryWithId(...args: any[]) {
        log.info('setChannelCategoryWithId called with args:', args)
        const result = this.instance.setChannelCategoryWithId(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setChannelCategoryWithId called  promise result:', result)
                return res
            })
        }
        log.info('setChannelCategoryWithId called result:', result)
        return result
    }
    setChannelHeartBeatScene(...args: any[]) {
        log.info('setChannelHeartBeatScene called with args:', args)
        const result = this.instance.setChannelHeartBeatScene(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setChannelHeartBeatScene called  promise result:', result)
                return res
            })
        }
        log.info('setChannelHeartBeatScene called result:', result)
        return result
    }
    setChannelHeartbeat(...args: any[]) {
        log.info('setChannelHeartbeat called with args:', args)
        const result = this.instance.setChannelHeartbeat(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setChannelHeartbeat called  promise result:', result)
                return res
            })
        }
        log.info('setChannelHeartbeat called result:', result)
        return result
    }
    setChannelLiveable(...args: any[]) {
        log.info('setChannelLiveable called with args:', args)
        const result = this.instance.setChannelLiveable(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setChannelLiveable called  promise result:', result)
                return res
            })
        }
        log.info('setChannelLiveable called result:', result)
        return result
    }
    setChannelLiveableMemberList(...args: any[]) {
        log.info('setChannelLiveableMemberList called with args:', args)
        const result = this.instance.setChannelLiveableMemberList(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setChannelLiveableMemberList called  promise result:', result)
                return res
            })
        }
        log.info('setChannelLiveableMemberList called result:', result)
        return result
    }
    setChannelLiveableRoleList(...args: any[]) {
        log.info('setChannelLiveableRoleList called with args:', args)
        const result = this.instance.setChannelLiveableRoleList(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setChannelLiveableRoleList called  promise result:', result)
                return res
            })
        }
        log.info('setChannelLiveableRoleList called result:', result)
        return result
    }
    setChannelName(...args: any[]) {
        log.info('setChannelName called with args:', args)
        const result = this.instance.setChannelName(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setChannelName called  promise result:', result)
                return res
            })
        }
        log.info('setChannelName called result:', result)
        return result
    }
    setChannelSlowMode(...args: any[]) {
        log.info('setChannelSlowMode called with args:', args)
        const result = this.instance.setChannelSlowMode(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setChannelSlowMode called  promise result:', result)
                return res
            })
        }
        log.info('setChannelSlowMode called result:', result)
        return result
    }
    setChannelSpeakable(...args: any[]) {
        log.info('setChannelSpeakable called with args:', args)
        const result = this.instance.setChannelSpeakable(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setChannelSpeakable called  promise result:', result)
                return res
            })
        }
        log.info('setChannelSpeakable called result:', result)
        return result
    }
    setChannelSpeakableMemberList(...args: any[]) {
        log.info('setChannelSpeakableMemberList called with args:', args)
        const result = this.instance.setChannelSpeakableMemberList(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setChannelSpeakableMemberList called  promise result:', result)
                return res
            })
        }
        log.info('setChannelSpeakableMemberList called result:', result)
        return result
    }
    setChannelSpeakableRoleList(...args: any[]) {
        log.info('setChannelSpeakableRoleList called with args:', args)
        const result = this.instance.setChannelSpeakableRoleList(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setChannelSpeakableRoleList called  promise result:', result)
                return res
            })
        }
        log.info('setChannelSpeakableRoleList called result:', result)
        return result
    }
    setChannelSpeakerPerm(...args: any[]) {
        log.info('setChannelSpeakerPerm called with args:', args)
        const result = this.instance.setChannelSpeakerPerm(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setChannelSpeakerPerm called  promise result:', result)
                return res
            })
        }
        log.info('setChannelSpeakerPerm called result:', result)
        return result
    }
    setChannelTopMsg(...args: any[]) {
        log.info('setChannelTopMsg called with args:', args)
        const result = this.instance.setChannelTopMsg(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setChannelTopMsg called  promise result:', result)
                return res
            })
        }
        log.info('setChannelTopMsg called result:', result)
        return result
    }
    setChannelUserNumLimit(...args: any[]) {
        log.info('setChannelUserNumLimit called with args:', args)
        const result = this.instance.setChannelUserNumLimit(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setChannelUserNumLimit called  promise result:', result)
                return res
            })
        }
        log.info('setChannelUserNumLimit called result:', result)
        return result
    }
    setChannelVisible(...args: any[]) {
        log.info('setChannelVisible called with args:', args)
        const result = this.instance.setChannelVisible(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setChannelVisible called  promise result:', result)
                return res
            })
        }
        log.info('setChannelVisible called result:', result)
        return result
    }
    setChannelVisibleMemberList(...args: any[]) {
        log.info('setChannelVisibleMemberList called with args:', args)
        const result = this.instance.setChannelVisibleMemberList(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setChannelVisibleMemberList called  promise result:', result)
                return res
            })
        }
        log.info('setChannelVisibleMemberList called result:', result)
        return result
    }
    setChannelVisibleRoleList(...args: any[]) {
        log.info('setChannelVisibleRoleList called with args:', args)
        const result = this.instance.setChannelVisibleRoleList(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setChannelVisibleRoleList called  promise result:', result)
                return res
            })
        }
        log.info('setChannelVisibleRoleList called result:', result)
        return result
    }
    setClientShowConfig(...args: any[]) {
        log.info('setClientShowConfig called with args:', args)
        const result = this.instance.setClientShowConfig(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setClientShowConfig called  promise result:', result)
                return res
            })
        }
        log.info('setClientShowConfig called result:', result)
        return result
    }
    setDirectMsgBlack(...args: any[]) {
        log.info('setDirectMsgBlack called with args:', args)
        const result = this.instance.setDirectMsgBlack(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setDirectMsgBlack called  promise result:', result)
                return res
            })
        }
        log.info('setDirectMsgBlack called result:', result)
        return result
    }
    setDirectMsgNotify(...args: any[]) {
        log.info('setDirectMsgNotify called with args:', args)
        const result = this.instance.setDirectMsgNotify(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setDirectMsgNotify called  promise result:', result)
                return res
            })
        }
        log.info('setDirectMsgNotify called result:', result)
        return result
    }
    setDirectMsgNotifyForGuild(...args: any[]) {
        log.info('setDirectMsgNotifyForGuild called with args:', args)
        const result = this.instance.setDirectMsgNotifyForGuild(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setDirectMsgNotifyForGuild called  promise result:', result)
                return res
            })
        }
        log.info('setDirectMsgNotifyForGuild called result:', result)
        return result
    }
    setDirectMsgStatus(...args: any[]) {
        log.info('setDirectMsgStatus called with args:', args)
        const result = this.instance.setDirectMsgStatus(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setDirectMsgStatus called  promise result:', result)
                return res
            })
        }
        log.info('setDirectMsgStatus called result:', result)
        return result
    }
    setEnteredChannelState(...args: any[]) {
        log.info('setEnteredChannelState called with args:', args)
        const result = this.instance.setEnteredChannelState(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setEnteredChannelState called  promise result:', result)
                return res
            })
        }
        log.info('setEnteredChannelState called result:', result)
        return result
    }
    setFeedCommentsNotifySwitch(...args: any[]) {
        log.info('setFeedCommentsNotifySwitch called with args:', args)
        const result = this.instance.setFeedCommentsNotifySwitch(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setFeedCommentsNotifySwitch called  promise result:', result)
                return res
            })
        }
        log.info('setFeedCommentsNotifySwitch called result:', result)
        return result
    }
    setGender(...args: any[]) {
        log.info('setGender called with args:', args)
        const result = this.instance.setGender(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setGender called  promise result:', result)
                return res
            })
        }
        log.info('setGender called result:', result)
        return result
    }
    setGlobalPrivacySwitch(...args: any[]) {
        log.info('setGlobalPrivacySwitch called with args:', args)
        const result = this.instance.setGlobalPrivacySwitch(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setGlobalPrivacySwitch called  promise result:', result)
                return res
            })
        }
        log.info('setGlobalPrivacySwitch called result:', result)
        return result
    }
    setGuildAdmin(...args: any[]) {
        log.info('setGuildAdmin called with args:', args)
        const result = this.instance.setGuildAdmin(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setGuildAdmin called  promise result:', result)
                return res
            })
        }
        log.info('setGuildAdmin called result:', result)
        return result
    }
    setGuildAuditInfo(...args: any[]) {
        log.info('setGuildAuditInfo called with args:', args)
        const result = this.instance.setGuildAuditInfo(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setGuildAuditInfo called  promise result:', result)
                return res
            })
        }
        log.info('setGuildAuditInfo called result:', result)
        return result
    }
    setGuildBoundGroups(...args: any[]) {
        log.info('setGuildBoundGroups called with args:', args)
        const result = this.instance.setGuildBoundGroups(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setGuildBoundGroups called  promise result:', result)
                return res
            })
        }
        log.info('setGuildBoundGroups called result:', result)
        return result
    }
    setGuildCommonUnNotifyFlag(...args: any[]) {
        log.info('setGuildCommonUnNotifyFlag called with args:', args)
        const result = this.instance.setGuildCommonUnNotifyFlag(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setGuildCommonUnNotifyFlag called  promise result:', result)
                return res
            })
        }
        log.info('setGuildCommonUnNotifyFlag called result:', result)
        return result
    }
    setGuildCoverFontColorId(...args: any[]) {
        log.info('setGuildCoverFontColorId called with args:', args)
        const result = this.instance.setGuildCoverFontColorId(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setGuildCoverFontColorId called  promise result:', result)
                return res
            })
        }
        log.info('setGuildCoverFontColorId called result:', result)
        return result
    }
    setGuildCreatorTaskSkipStatus(...args: any[]) {
        log.info('setGuildCreatorTaskSkipStatus called with args:', args)
        const result = this.instance.setGuildCreatorTaskSkipStatus(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setGuildCreatorTaskSkipStatus called  promise result:', result)
                return res
            })
        }
        log.info('setGuildCreatorTaskSkipStatus called result:', result)
        return result
    }
    setGuildFeedExperiment(...args: any[]) {
        log.info('setGuildFeedExperiment called with args:', args)
        const result = this.instance.setGuildFeedExperiment(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setGuildFeedExperiment called  promise result:', result)
                return res
            })
        }
        log.info('setGuildFeedExperiment called result:', result)
        return result
    }
    setGuildGlobalBanner(...args: any[]) {
        log.info('setGuildGlobalBanner called with args:', args)
        const result = this.instance.setGuildGlobalBanner(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setGuildGlobalBanner called  promise result:', result)
                return res
            })
        }
        log.info('setGuildGlobalBanner called result:', result)
        return result
    }
    setGuildGlobalPermission(...args: any[]) {
        log.info('setGuildGlobalPermission called with args:', args)
        const result = this.instance.setGuildGlobalPermission(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setGuildGlobalPermission called  promise result:', result)
                return res
            })
        }
        log.info('setGuildGlobalPermission called result:', result)
        return result
    }
    setGuildGroupMemberList(...args: any[]) {
        log.info('setGuildGroupMemberList called with args:', args)
        const result = this.instance.setGuildGroupMemberList(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setGuildGroupMemberList called  promise result:', result)
                return res
            })
        }
        log.info('setGuildGroupMemberList called result:', result)
        return result
    }
    setGuildHeader(...args: any[]) {
        log.info('setGuildHeader called with args:', args)
        const result = this.instance.setGuildHeader(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setGuildHeader called  promise result:', result)
                return res
            })
        }
        log.info('setGuildHeader called result:', result)
        return result
    }
    setGuildListSort(...args: any[]) {
        log.info('setGuildListSort called with args:', args)
        const result = this.instance.setGuildListSort(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setGuildListSort called  promise result:', result)
                return res
            })
        }
        log.info('setGuildListSort called result:', result)
        return result
    }
    setGuildListTop(...args: any[]) {
        log.info('setGuildListTop called with args:', args)
        const result = this.instance.setGuildListTop(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setGuildListTop called  promise result:', result)
                return res
            })
        }
        log.info('setGuildListTop called result:', result)
        return result
    }
    setGuildMemberName(...args: any[]) {
        log.info('setGuildMemberName called with args:', args)
        const result = this.instance.setGuildMemberName(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setGuildMemberName called  promise result:', result)
                return res
            })
        }
        log.info('setGuildMemberName called result:', result)
        return result
    }
    setGuildName(...args: any[]) {
        log.info('setGuildName called with args:', args)
        const result = this.instance.setGuildName(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setGuildName called  promise result:', result)
                return res
            })
        }
        log.info('setGuildName called result:', result)
        return result
    }
    setGuildNeedRealNameForVisitor(...args: any[]) {
        log.info('setGuildNeedRealNameForVisitor called with args:', args)
        const result = this.instance.setGuildNeedRealNameForVisitor(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setGuildNeedRealNameForVisitor called  promise result:', result)
                return res
            })
        }
        log.info('setGuildNeedRealNameForVisitor called result:', result)
        return result
    }
    setGuildNumSearchSwitch(...args: any[]) {
        log.info('setGuildNumSearchSwitch called with args:', args)
        const result = this.instance.setGuildNumSearchSwitch(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setGuildNumSearchSwitch called  promise result:', result)
                return res
            })
        }
        log.info('setGuildNumSearchSwitch called result:', result)
        return result
    }
    setGuildProfile(...args: any[]) {
        log.info('setGuildProfile called with args:', args)
        const result = this.instance.setGuildProfile(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setGuildProfile called  promise result:', result)
                return res
            })
        }
        log.info('setGuildProfile called result:', result)
        return result
    }
    setGuildQRCodePeriod(...args: any[]) {
        log.info('setGuildQRCodePeriod called with args:', args)
        const result = this.instance.setGuildQRCodePeriod(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setGuildQRCodePeriod called  promise result:', result)
                return res
            })
        }
        log.info('setGuildQRCodePeriod called result:', result)
        return result
    }
    setGuildQRCodeSwitch(...args: any[]) {
        log.info('setGuildQRCodeSwitch called with args:', args)
        const result = this.instance.setGuildQRCodeSwitch(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setGuildQRCodeSwitch called  promise result:', result)
                return res
            })
        }
        log.info('setGuildQRCodeSwitch called result:', result)
        return result
    }
    setGuildRulesDirect(...args: any[]) {
        log.info('setGuildRulesDirect called with args:', args)
        const result = this.instance.setGuildRulesDirect(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setGuildRulesDirect called  promise result:', result)
                return res
            })
        }
        log.info('setGuildRulesDirect called result:', result)
        return result
    }
    setGuildShutUp(...args: any[]) {
        log.info('setGuildShutUp called with args:', args)
        const result = this.instance.setGuildShutUp(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setGuildShutUp called  promise result:', result)
                return res
            })
        }
        log.info('setGuildShutUp called result:', result)
        return result
    }
    setGuildSpeakableMemberList(...args: any[]) {
        log.info('setGuildSpeakableMemberList called with args:', args)
        const result = this.instance.setGuildSpeakableMemberList(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setGuildSpeakableMemberList called  promise result:', result)
                return res
            })
        }
        log.info('setGuildSpeakableMemberList called result:', result)
        return result
    }
    setGuildSpeakableRoleList(...args: any[]) {
        log.info('setGuildSpeakableRoleList called with args:', args)
        const result = this.instance.setGuildSpeakableRoleList(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setGuildSpeakableRoleList called  promise result:', result)
                return res
            })
        }
        log.info('setGuildSpeakableRoleList called result:', result)
        return result
    }
    setGuildSpeakableRule(...args: any[]) {
        log.info('setGuildSpeakableRule called with args:', args)
        const result = this.instance.setGuildSpeakableRule(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setGuildSpeakableRule called  promise result:', result)
                return res
            })
        }
        log.info('setGuildSpeakableRule called result:', result)
        return result
    }
    setGuildSpeakableThreshold(...args: any[]) {
        log.info('setGuildSpeakableThreshold called with args:', args)
        const result = this.instance.setGuildSpeakableThreshold(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setGuildSpeakableThreshold called  promise result:', result)
                return res
            })
        }
        log.info('setGuildSpeakableThreshold called result:', result)
        return result
    }
    setGuildUnNotifyFlag(...args: any[]) {
        log.info('setGuildUnNotifyFlag called with args:', args)
        const result = this.instance.setGuildUnNotifyFlag(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setGuildUnNotifyFlag called  promise result:', result)
                return res
            })
        }
        log.info('setGuildUnNotifyFlag called result:', result)
        return result
    }
    setGuildVisibilityForVisitor(...args: any[]) {
        log.info('setGuildVisibilityForVisitor called with args:', args)
        const result = this.instance.setGuildVisibilityForVisitor(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setGuildVisibilityForVisitor called  promise result:', result)
                return res
            })
        }
        log.info('setGuildVisibilityForVisitor called result:', result)
        return result
    }
    setGuildWeakNotifyDisplay(...args: any[]) {
        log.info('setGuildWeakNotifyDisplay called with args:', args)
        const result = this.instance.setGuildWeakNotifyDisplay(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setGuildWeakNotifyDisplay called  promise result:', result)
                return res
            })
        }
        log.info('setGuildWeakNotifyDisplay called result:', result)
        return result
    }
    setHeader(...args: any[]) {
        log.info('setHeader called with args:', args)
        const result = this.instance.setHeader(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setHeader called  promise result:', result)
                return res
            })
        }
        log.info('setHeader called result:', result)
        return result
    }
    setJoinGuildOption(...args: any[]) {
        log.info('setJoinGuildOption called with args:', args)
        const result = this.instance.setJoinGuildOption(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setJoinGuildOption called  promise result:', result)
                return res
            })
        }
        log.info('setJoinGuildOption called result:', result)
        return result
    }
    setJumpToCategory(...args: any[]) {
        log.info('setJumpToCategory called with args:', args)
        const result = this.instance.setJumpToCategory(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setJumpToCategory called  promise result:', result)
                return res
            })
        }
        log.info('setJumpToCategory called result:', result)
        return result
    }
    setListenTogetherPlayOpt(...args: any[]) {
        log.info('setListenTogetherPlayOpt called with args:', args)
        const result = this.instance.setListenTogetherPlayOpt(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setListenTogetherPlayOpt called  promise result:', result)
                return res
            })
        }
        log.info('setListenTogetherPlayOpt called result:', result)
        return result
    }
    setListenTogetherPlayVolumeByAdmin(...args: any[]) {
        log.info('setListenTogetherPlayVolumeByAdmin called with args:', args)
        const result = this.instance.setListenTogetherPlayVolumeByAdmin(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setListenTogetherPlayVolumeByAdmin called  promise result:', result)
                return res
            })
        }
        log.info('setListenTogetherPlayVolumeByAdmin called result:', result)
        return result
    }
    setLiveChannelAnchorList(...args: any[]) {
        log.info('setLiveChannelAnchorList called with args:', args)
        const result = this.instance.setLiveChannelAnchorList(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setLiveChannelAnchorList called  promise result:', result)
                return res
            })
        }
        log.info('setLiveChannelAnchorList called result:', result)
        return result
    }
    setLiveChannelBannedUser(...args: any[]) {
        log.info('setLiveChannelBannedUser called with args:', args)
        const result = this.instance.setLiveChannelBannedUser(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setLiveChannelBannedUser called  promise result:', result)
                return res
            })
        }
        log.info('setLiveChannelBannedUser called result:', result)
        return result
    }
    setLocation(...args: any[]) {
        log.info('setLocation called with args:', args)
        const result = this.instance.setLocation(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setLocation called  promise result:', result)
                return res
            })
        }
        log.info('setLocation called result:', result)
        return result
    }
    setMemberRoles(...args: any[]) {
        log.info('setMemberRoles called with args:', args)
        const result = this.instance.setMemberRoles(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setMemberRoles called  promise result:', result)
                return res
            })
        }
        log.info('setMemberRoles called result:', result)
        return result
    }
    setMemberShutUp(...args: any[]) {
        log.info('setMemberShutUp called with args:', args)
        const result = this.instance.setMemberShutUp(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setMemberShutUp called  promise result:', result)
                return res
            })
        }
        log.info('setMemberShutUp called result:', result)
        return result
    }
    setMyBirthday(...args: any[]) {
        log.info('setMyBirthday called with args:', args)
        const result = this.instance.setMyBirthday(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setMyBirthday called  promise result:', result)
                return res
            })
        }
        log.info('setMyBirthday called result:', result)
        return result
    }
    setMyGuildCommonSwitch(...args: any[]) {
        log.info('setMyGuildCommonSwitch called with args:', args)
        const result = this.instance.setMyGuildCommonSwitch(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setMyGuildCommonSwitch called  promise result:', result)
                return res
            })
        }
        log.info('setMyGuildCommonSwitch called result:', result)
        return result
    }
    setMyPersonalSignature(...args: any[]) {
        log.info('setMyPersonalSignature called with args:', args)
        const result = this.instance.setMyPersonalSignature(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setMyPersonalSignature called  promise result:', result)
                return res
            })
        }
        log.info('setMyPersonalSignature called result:', result)
        return result
    }
    setMyProfileShowTypeSwitch(...args: any[]) {
        log.info('setMyProfileShowTypeSwitch called with args:', args)
        const result = this.instance.setMyProfileShowTypeSwitch(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setMyProfileShowTypeSwitch called  promise result:', result)
                return res
            })
        }
        log.info('setMyProfileShowTypeSwitch called result:', result)
        return result
    }
    setMyVoiceNetworkQuality(...args: any[]) {
        log.info('setMyVoiceNetworkQuality called with args:', args)
        const result = this.instance.setMyVoiceNetworkQuality(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setMyVoiceNetworkQuality called  promise result:', result)
                return res
            })
        }
        log.info('setMyVoiceNetworkQuality called result:', result)
        return result
    }
    setMyVoiceSysMicStatus(...args: any[]) {
        log.info('setMyVoiceSysMicStatus called with args:', args)
        const result = this.instance.setMyVoiceSysMicStatus(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setMyVoiceSysMicStatus called  promise result:', result)
                return res
            })
        }
        log.info('setMyVoiceSysMicStatus called result:', result)
        return result
    }
    setNickName(...args: any[]) {
        log.info('setNickName called with args:', args)
        const result = this.instance.setNickName(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setNickName called  promise result:', result)
                return res
            })
        }
        log.info('setNickName called result:', result)
        return result
    }
    setOnLogin(...args: any[]) {
        log.info('setOnLogin called with args:', args)
        const result = this.instance.setOnLogin(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setOnLogin called  promise result:', result)
                return res
            })
        }
        log.info('setOnLogin called result:', result)
        return result
    }
    setPerformanceEnable(...args: any[]) {
        log.info('setPerformanceEnable called with args:', args)
        const result = this.instance.setPerformanceEnable(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setPerformanceEnable called  promise result:', result)
                return res
            })
        }
        log.info('setPerformanceEnable called result:', result)
        return result
    }
    setProfileRedPointSwitch(...args: any[]) {
        log.info('setProfileRedPointSwitch called with args:', args)
        const result = this.instance.setProfileRedPointSwitch(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setProfileRedPointSwitch called  promise result:', result)
                return res
            })
        }
        log.info('setProfileRedPointSwitch called result:', result)
        return result
    }
    setProfileSwitch(...args: any[]) {
        log.info('setProfileSwitch called with args:', args)
        const result = this.instance.setProfileSwitch(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setProfileSwitch called  promise result:', result)
                return res
            })
        }
        log.info('setProfileSwitch called result:', result)
        return result
    }
    setQQMsgListChannel(...args: any[]) {
        log.info('setQQMsgListChannel called with args:', args)
        const result = this.instance.setQQMsgListChannel(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setQQMsgListChannel called  promise result:', result)
                return res
            })
        }
        log.info('setQQMsgListChannel called result:', result)
        return result
    }
    setQQMsgListGuild(...args: any[]) {
        log.info('setQQMsgListGuild called with args:', args)
        const result = this.instance.setQQMsgListGuild(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setQQMsgListGuild called  promise result:', result)
                return res
            })
        }
        log.info('setQQMsgListGuild called result:', result)
        return result
    }
    setRoleChannels(...args: any[]) {
        log.info('setRoleChannels called with args:', args)
        const result = this.instance.setRoleChannels(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setRoleChannels called  promise result:', result)
                return res
            })
        }
        log.info('setRoleChannels called result:', result)
        return result
    }
    setRoleInfo(...args: any[]) {
        log.info('setRoleInfo called with args:', args)
        const result = this.instance.setRoleInfo(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setRoleInfo called  promise result:', result)
                return res
            })
        }
        log.info('setRoleInfo called result:', result)
        return result
    }
    setRoleMembers(...args: any[]) {
        log.info('setRoleMembers called with args:', args)
        const result = this.instance.setRoleMembers(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setRoleMembers called  promise result:', result)
                return res
            })
        }
        log.info('setRoleMembers called result:', result)
        return result
    }
    setRoleOrder(...args: any[]) {
        log.info('setRoleOrder called with args:', args)
        const result = this.instance.setRoleOrder(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setRoleOrder called  promise result:', result)
                return res
            })
        }
        log.info('setRoleOrder called result:', result)
        return result
    }
    setScreenSharedInGuild(...args: any[]) {
        log.info('setScreenSharedInGuild called with args:', args)
        const result = this.instance.setScreenSharedInGuild(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setScreenSharedInGuild called  promise result:', result)
                return res
            })
        }
        log.info('setScreenSharedInGuild called result:', result)
        return result
    }
    setSearchSwitch(...args: any[]) {
        log.info('setSearchSwitch called with args:', args)
        const result = this.instance.setSearchSwitch(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setSearchSwitch called  promise result:', result)
                return res
            })
        }
        log.info('setSearchSwitch called result:', result)
        return result
    }
    setSelfTinyId(...args: any[]) {
        log.info('setSelfTinyId called with args:', args)
        const result = this.instance.setSelfTinyId(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setSelfTinyId called  promise result:', result)
                return res
            })
        }
        log.info('setSelfTinyId called result:', result)
        return result
    }
    setShowArchive(...args: any[]) {
        log.info('setShowArchive called with args:', args)
        const result = this.instance.setShowArchive(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setShowArchive called  promise result:', result)
                return res
            })
        }
        log.info('setShowArchive called result:', result)
        return result
    }
    setShowPresence(...args: any[]) {
        log.info('setShowPresence called with args:', args)
        const result = this.instance.setShowPresence(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setShowPresence called  promise result:', result)
                return res
            })
        }
        log.info('setShowPresence called result:', result)
        return result
    }
    setTopicSquareEntranceSwitch(...args: any[]) {
        log.info('setTopicSquareEntranceSwitch called with args:', args)
        const result = this.instance.setTopicSquareEntranceSwitch(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setTopicSquareEntranceSwitch called  promise result:', result)
                return res
            })
        }
        log.info('setTopicSquareEntranceSwitch called result:', result)
        return result
    }
    setUIData(...args: any[]) {
        log.info('setUIData called with args:', args)
        const result = this.instance.setUIData(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setUIData called  promise result:', result)
                return res
            })
        }
        log.info('setUIData called result:', result)
        return result
    }
    setUserLiveInfo(...args: any[]) {
        log.info('setUserLiveInfo called with args:', args)
        const result = this.instance.setUserLiveInfo(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setUserLiveInfo called  promise result:', result)
                return res
            })
        }
        log.info('setUserLiveInfo called result:', result)
        return result
    }
    setUserMuteSeatInGuild(...args: any[]) {
        log.info('setUserMuteSeatInGuild called with args:', args)
        const result = this.instance.setUserMuteSeatInGuild(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setUserMuteSeatInGuild called  promise result:', result)
                return res
            })
        }
        log.info('setUserMuteSeatInGuild called result:', result)
        return result
    }
    setUserPermissionInGuild(...args: any[]) {
        log.info('setUserPermissionInGuild called with args:', args)
        const result = this.instance.setUserPermissionInGuild(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setUserPermissionInGuild called  promise result:', result)
                return res
            })
        }
        log.info('setUserPermissionInGuild called result:', result)
        return result
    }
    setUserScreenSharedInGuild(...args: any[]) {
        log.info('setUserScreenSharedInGuild called with args:', args)
        const result = this.instance.setUserScreenSharedInGuild(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setUserScreenSharedInGuild called  promise result:', result)
                return res
            })
        }
        log.info('setUserScreenSharedInGuild called result:', result)
        return result
    }
    setUserType(...args: any[]) {
        log.info('setUserType called with args:', args)
        const result = this.instance.setUserType(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setUserType called  promise result:', result)
                return res
            })
        }
        log.info('setUserType called result:', result)
        return result
    }
    setUserTypeWithUserConfigure(...args: any[]) {
        log.info('setUserTypeWithUserConfigure called with args:', args)
        const result = this.instance.setUserTypeWithUserConfigure(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setUserTypeWithUserConfigure called  promise result:', result)
                return res
            })
        }
        log.info('setUserTypeWithUserConfigure called result:', result)
        return result
    }
    setUserVoicelessToMe(...args: any[]) {
        log.info('setUserVoicelessToMe called with args:', args)
        const result = this.instance.setUserVoicelessToMe(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setUserVoicelessToMe called  promise result:', result)
                return res
            })
        }
        log.info('setUserVoicelessToMe called result:', result)
        return result
    }
    setWindowFliter(...args: any[]) {
        log.info('setWindowFliter called with args:', args)
        const result = this.instance.setWindowFliter(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setWindowFliter called  promise result:', result)
                return res
            })
        }
        log.info('setWindowFliter called result:', result)
        return result
    }
    startAnchorBroadcast(...args: any[]) {
        log.info('startAnchorBroadcast called with args:', args)
        const result = this.instance.startAnchorBroadcast(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('startAnchorBroadcast called  promise result:', result)
                return res
            })
        }
        log.info('startAnchorBroadcast called result:', result)
        return result
    }
    startHeartbeat(...args: any[]) {
        log.info('startHeartbeat called with args:', args)
        const result = this.instance.startHeartbeat(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('startHeartbeat called  promise result:', result)
                return res
            })
        }
        log.info('startHeartbeat called result:', result)
        return result
    }
    startLiveBroadcast(...args: any[]) {
        log.info('startLiveBroadcast called with args:', args)
        const result = this.instance.startLiveBroadcast(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('startLiveBroadcast called  promise result:', result)
                return res
            })
        }
        log.info('startLiveBroadcast called result:', result)
        return result
    }
    startPollingForDiscoverState(...args: any[]) {
        log.info('startPollingForDiscoverState called with args:', args)
        const result = this.instance.startPollingForDiscoverState(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('startPollingForDiscoverState called  promise result:', result)
                return res
            })
        }
        log.info('startPollingForDiscoverState called result:', result)
        return result
    }
    startPush(...args: any[]) {
        log.info('startPush called with args:', args)
        const result = this.instance.startPush(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('startPush called  promise result:', result)
                return res
            })
        }
        log.info('startPush called result:', result)
        return result
    }
    stopPollingForDiscoverState(...args: any[]) {
        log.info('stopPollingForDiscoverState called with args:', args)
        const result = this.instance.stopPollingForDiscoverState(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('stopPollingForDiscoverState called  promise result:', result)
                return res
            })
        }
        log.info('stopPollingForDiscoverState called result:', result)
        return result
    }
    subscribePolling(...args: any[]) {
        log.info('subscribePolling called with args:', args)
        const result = this.instance.subscribePolling(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('subscribePolling called  promise result:', result)
                return res
            })
        }
        log.info('subscribePolling called result:', result)
        return result
    }
    subscribePollingChannels(...args: any[]) {
        log.info('subscribePollingChannels called with args:', args)
        const result = this.instance.subscribePollingChannels(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('subscribePollingChannels called  promise result:', result)
                return res
            })
        }
        log.info('subscribePollingChannels called result:', result)
        return result
    }
    subscribePollingSchedule(...args: any[]) {
        log.info('subscribePollingSchedule called with args:', args)
        const result = this.instance.subscribePollingSchedule(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('subscribePollingSchedule called  promise result:', result)
                return res
            })
        }
        log.info('subscribePollingSchedule called result:', result)
        return result
    }
    superAdminBanUser(...args: any[]) {
        log.info('superAdminBanUser called with args:', args)
        const result = this.instance.superAdminBanUser(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('superAdminBanUser called  promise result:', result)
                return res
            })
        }
        log.info('superAdminBanUser called result:', result)
        return result
    }
    superAdminUnListFeed(...args: any[]) {
        log.info('superAdminUnListFeed called with args:', args)
        const result = this.instance.superAdminUnListFeed(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('superAdminUnListFeed called  promise result:', result)
                return res
            })
        }
        log.info('superAdminUnListFeed called result:', result)
        return result
    }
    switchAVLobbyApp(...args: any[]) {
        log.info('switchAVLobbyApp called with args:', args)
        const result = this.instance.switchAVLobbyApp(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('switchAVLobbyApp called  promise result:', result)
                return res
            })
        }
        log.info('switchAVLobbyApp called result:', result)
        return result
    }
    terminateLiveBroadcast(...args: any[]) {
        log.info('terminateLiveBroadcast called with args:', args)
        const result = this.instance.terminateLiveBroadcast(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('terminateLiveBroadcast called  promise result:', result)
                return res
            })
        }
        log.info('terminateLiveBroadcast called result:', result)
        return result
    }
    terminateLiveStream(...args: any[]) {
        log.info('terminateLiveStream called with args:', args)
        const result = this.instance.terminateLiveStream(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('terminateLiveStream called  promise result:', result)
                return res
            })
        }
        log.info('terminateLiveStream called result:', result)
        return result
    }
    topSpeakOrderByAdmin(...args: any[]) {
        log.info('topSpeakOrderByAdmin called with args:', args)
        const result = this.instance.topSpeakOrderByAdmin(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('topSpeakOrderByAdmin called  promise result:', result)
                return res
            })
        }
        log.info('topSpeakOrderByAdmin called result:', result)
        return result
    }
    transThirdPlatformURL(...args: any[]) {
        log.info('transThirdPlatformURL called with args:', args)
        const result = this.instance.transThirdPlatformURL(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('transThirdPlatformURL called  promise result:', result)
                return res
            })
        }
        log.info('transThirdPlatformURL called result:', result)
        return result
    }
    transThirdVideoURL(...args: any[]) {
        log.info('transThirdVideoURL called with args:', args)
        const result = this.instance.transThirdVideoURL(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('transThirdVideoURL called  promise result:', result)
                return res
            })
        }
        log.info('transThirdVideoURL called result:', result)
        return result
    }
    transferGuildOwner(...args: any[]) {
        log.info('transferGuildOwner called with args:', args)
        const result = this.instance.transferGuildOwner(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('transferGuildOwner called  promise result:', result)
                return res
            })
        }
        log.info('transferGuildOwner called result:', result)
        return result
    }
    tryUnmuteMicrophone(...args: any[]) {
        log.info('tryUnmuteMicrophone called with args:', args)
        const result = this.instance.tryUnmuteMicrophone(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('tryUnmuteMicrophone called  promise result:', result)
                return res
            })
        }
        log.info('tryUnmuteMicrophone called result:', result)
        return result
    }
    ubSubscribePollingChannels(...args: any[]) {
        log.info('ubSubscribePollingChannels called with args:', args)
        const result = this.instance.ubSubscribePollingChannels(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('ubSubscribePollingChannels called  promise result:', result)
                return res
            })
        }
        log.info('ubSubscribePollingChannels called result:', result)
        return result
    }
    unSubscribePollingChannelsByPollType(...args: any[]) {
        log.info('unSubscribePollingChannelsByPollType called with args:', args)
        const result = this.instance.unSubscribePollingChannelsByPollType(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('unSubscribePollingChannelsByPollType called  promise result:', result)
                return res
            })
        }
        log.info('unSubscribePollingChannelsByPollType called result:', result)
        return result
    }
    unsubscribePolling(...args: any[]) {
        log.info('unsubscribePolling called with args:', args)
        const result = this.instance.unsubscribePolling(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('unsubscribePolling called  promise result:', result)
                return res
            })
        }
        log.info('unsubscribePolling called result:', result)
        return result
    }
    updateAudioLiveChannelTheme(...args: any[]) {
        log.info('updateAudioLiveChannelTheme called with args:', args)
        const result = this.instance.updateAudioLiveChannelTheme(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('updateAudioLiveChannelTheme called  promise result:', result)
                return res
            })
        }
        log.info('updateAudioLiveChannelTheme called result:', result)
        return result
    }
    updateForumChannelSortMode(...args: any[]) {
        log.info('updateForumChannelSortMode called with args:', args)
        const result = this.instance.updateForumChannelSortMode(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('updateForumChannelSortMode called  promise result:', result)
                return res
            })
        }
        log.info('updateForumChannelSortMode called result:', result)
        return result
    }
    updateGuildEssence(...args: any[]) {
        log.info('updateGuildEssence called with args:', args)
        const result = this.instance.updateGuildEssence(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('updateGuildEssence called  promise result:', result)
                return res
            })
        }
        log.info('updateGuildEssence called result:', result)
        return result
    }
    updateGuildTaskCardProgress(...args: any[]) {
        log.info('updateGuildTaskCardProgress called with args:', args)
        const result = this.instance.updateGuildTaskCardProgress(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('updateGuildTaskCardProgress called  promise result:', result)
                return res
            })
        }
        log.info('updateGuildTaskCardProgress called result:', result)
        return result
    }
    updateGuildVisitor(...args: any[]) {
        log.info('updateGuildVisitor called with args:', args)
        const result = this.instance.updateGuildVisitor(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('updateGuildVisitor called  promise result:', result)
                return res
            })
        }
        log.info('updateGuildVisitor called result:', result)
        return result
    }
    upgradeGroupFeed(...args: any[]) {
        log.info('upgradeGroupFeed called with args:', args)
        const result = this.instance.upgradeGroupFeed(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('upgradeGroupFeed called  promise result:', result)
                return res
            })
        }
        log.info('upgradeGroupFeed called result:', result)
        return result
    }
    userDealSpeakInvitation(...args: any[]) {
        log.info('userDealSpeakInvitation called with args:', args)
        const result = this.instance.userDealSpeakInvitation(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('userDealSpeakInvitation called  promise result:', result)
                return res
            })
        }
        log.info('userDealSpeakInvitation called result:', result)
        return result
    }
    userHandUp(...args: any[]) {
        log.info('userHandUp called with args:', args)
        const result = this.instance.userHandUp(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('userHandUp called  promise result:', result)
                return res
            })
        }
        log.info('userHandUp called result:', result)
        return result
    }
    userOnlineReport(...args: any[]) {
        log.info('userOnlineReport called with args:', args)
        const result = this.instance.userOnlineReport(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('userOnlineReport called  promise result:', result)
                return res
            })
        }
        log.info('userOnlineReport called result:', result)
        return result
    }
    userShareScreen(...args: any[]) {
        log.info('userShareScreen called with args:', args)
        const result = this.instance.userShareScreen(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('userShareScreen called  promise result:', result)
                return res
            })
        }
        log.info('userShareScreen called result:', result)
        return result
    }
    voiceChannelAuth_0x10b6(...args: any[]) {
        log.info('voiceChannelAuth_0x10b6 called with args:', args)
        const result = this.instance.voiceChannelAuth_0x10b6(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('voiceChannelAuth_0x10b6 called  promise result:', result)
                return res
            })
        }
        log.info('voiceChannelAuth_0x10b6 called result:', result)
        return result
    }
    voiceSmobaGameCreateRoom(...args: any[]) {
        log.info('voiceSmobaGameCreateRoom called with args:', args)
        const result = this.instance.voiceSmobaGameCreateRoom(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('voiceSmobaGameCreateRoom called  promise result:', result)
                return res
            })
        }
        log.info('voiceSmobaGameCreateRoom called result:', result)
        return result
    }
    voiceSmobaGameDissmissRoom(...args: any[]) {
        log.info('voiceSmobaGameDissmissRoom called with args:', args)
        const result = this.instance.voiceSmobaGameDissmissRoom(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('voiceSmobaGameDissmissRoom called  promise result:', result)
                return res
            })
        }
        log.info('voiceSmobaGameDissmissRoom called result:', result)
        return result
    }
    voiceSmobaGameEnterRoom(...args: any[]) {
        log.info('voiceSmobaGameEnterRoom called with args:', args)
        const result = this.instance.voiceSmobaGameEnterRoom(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('voiceSmobaGameEnterRoom called  promise result:', result)
                return res
            })
        }
        log.info('voiceSmobaGameEnterRoom called result:', result)
        return result
    }
    voiceSmobaGameKickOutRoom(...args: any[]) {
        log.info('voiceSmobaGameKickOutRoom called with args:', args)
        const result = this.instance.voiceSmobaGameKickOutRoom(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('voiceSmobaGameKickOutRoom called  promise result:', result)
                return res
            })
        }
        log.info('voiceSmobaGameKickOutRoom called result:', result)
        return result
    }
    voiceSmobaGameQuitRoom(...args: any[]) {
        log.info('voiceSmobaGameQuitRoom called with args:', args)
        const result = this.instance.voiceSmobaGameQuitRoom(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('voiceSmobaGameQuitRoom called  promise result:', result)
                return res
            })
        }
        log.info('voiceSmobaGameQuitRoom called result:', result)
        return result
    }
};
export const getNodeIKernelGuildService = (engine: any): any => {
    return class extends NodeIKernelGuildService {
        
        static decodeGProGetCategoryPageGuildsRsp(...args: any[]) {
            log.info('decodeGProGetCategoryPageGuildsRsp called with args:', args)
            const result = engine.decodeGProGetCategoryPageGuildsRsp(...args)
            log.info('decodeGProGetCategoryPageGuildsRsp called result:', result)
            return result
        }
        static decodeGProGetCategoryTabContentRsp(...args: any[]) {
            log.info('decodeGProGetCategoryTabContentRsp called with args:', args)
            const result = engine.decodeGProGetCategoryTabContentRsp(...args)
            log.info('decodeGProGetCategoryTabContentRsp called result:', result)
            return result
        }
        static decodeGProGetConfigTabContentRsp(...args: any[]) {
            log.info('decodeGProGetConfigTabContentRsp called with args:', args)
            const result = engine.decodeGProGetConfigTabContentRsp(...args)
            log.info('decodeGProGetConfigTabContentRsp called result:', result)
            return result
        }
        static decodeGProGetMyTabContentRsp(...args: any[]) {
            log.info('decodeGProGetMyTabContentRsp called with args:', args)
            const result = engine.decodeGProGetMyTabContentRsp(...args)
            log.info('decodeGProGetMyTabContentRsp called result:', result)
            return result
        }
        static decodeGProGetRecommendTabContentRsp(...args: any[]) {
            log.info('decodeGProGetRecommendTabContentRsp called with args:', args)
            const result = engine.decodeGProGetRecommendTabContentRsp(...args)
            log.info('decodeGProGetRecommendTabContentRsp called result:', result)
            return result
        }
        static decodeGProGuildAdvFeedPos(...args: any[]) {
            log.info('decodeGProGuildAdvFeedPos called with args:', args)
            const result = engine.decodeGProGuildAdvFeedPos(...args)
            log.info('decodeGProGuildAdvFeedPos called result:', result)
            return result
        }
        static decodeGProGuilds(...args: any[]) {
            log.info('decodeGProGuilds called with args:', args)
            const result = engine.decodeGProGuilds(...args)
            log.info('decodeGProGuilds called result:', result)
            return result
        }
        static decodeGProNavigationTabs(...args: any[]) {
            log.info('decodeGProNavigationTabs called with args:', args)
            const result = engine.decodeGProNavigationTabs(...args)
            log.info('decodeGProNavigationTabs called result:', result)
            return result
        }
        static decodeGProSysPromptDigest(...args: any[]) {
            log.info('decodeGProSysPromptDigest called with args:', args)
            const result = engine.decodeGProSysPromptDigest(...args)
            log.info('decodeGProSysPromptDigest called result:', result)
            return result
        }
        static encodeGProGuilds(...args: any[]) {
            log.info('encodeGProGuilds called with args:', args)
            const result = engine.encodeGProGuilds(...args)
            log.info('encodeGProGuilds called result:', result)
            return result
        }
        static encodeGProNavigationTabs(...args: any[]) {
            log.info('encodeGProNavigationTabs called with args:', args)
            const result = engine.encodeGProNavigationTabs(...args)
            log.info('encodeGProNavigationTabs called result:', result)
            return result
        }
        static encodeShareAttaData(...args: any[]) {
            log.info('encodeShareAttaData called with args:', args)
            const result = engine.encodeShareAttaData(...args)
            log.info('encodeShareAttaData called result:', result)
            return result
        }
        static fastDecodeMVPFeedsRspPb(...args: any[]) {
            log.info('fastDecodeMVPFeedsRspPb called with args:', args)
            const result = engine.fastDecodeMVPFeedsRspPb(...args)
            log.info('fastDecodeMVPFeedsRspPb called result:', result)
            return result
        }
        static getFullAvatarPendantUrl(...args: any[]) {
            log.info('getFullAvatarPendantUrl called with args:', args)
            const result = engine.getFullAvatarPendantUrl(...args)
            log.info('getFullAvatarPendantUrl called result:', result)
            return result
        }
        static getFullAvatarUrl(...args: any[]) {
            log.info('getFullAvatarUrl called with args:', args)
            const result = engine.getFullAvatarUrl(...args)
            log.info('getFullAvatarUrl called result:', result)
            return result
        }
        static lz4DecompressBuf(...args: any[]) {
            log.info('lz4DecompressBuf called with args:', args)
            const result = engine.lz4DecompressBuf(...args)
            log.info('lz4DecompressBuf called result:', result)
            return result
        }
        static preloadInitJni(...args: any[]) {
            log.info('preloadInitJni called with args:', args)
            const result = engine.preloadInitJni(...args)
            log.info('preloadInitJni called result:', result)
            return result
        }
        static setSdkLoggerLevel(...args: any[]) {
            log.info('setSdkLoggerLevel called with args:', args)
            const result = engine.setSdkLoggerLevel(...args)
            log.info('setSdkLoggerLevel called result:', result)
            return result
        }
    }
}