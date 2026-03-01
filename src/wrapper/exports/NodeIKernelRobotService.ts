import { useLogger } from "../../common/log";

const log = useLogger('Wrapper/NodeIKernelRobotService')
export class NodeIKernelRobotService {
    protected static singleton?: any = undefined
    protected instance: any
    constructor(instance: any) {
        log.info('constructor called')
        this.instance = instance
    }
    FetchGroupRobotInfo(...args: any[]) {
        log.info('FetchGroupRobotInfo called with args:', args)
        const result = this.instance.FetchGroupRobotInfo(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('FetchGroupRobotInfo called  promise result:', result)
                return res
            })
        }
        log.info('FetchGroupRobotInfo called result:', result)
        return result
    }
    FetchSubcribeMsgTemplateStatus(...args: any[]) {
        log.info('FetchSubcribeMsgTemplateStatus called with args:', args)
        const result = this.instance.FetchSubcribeMsgTemplateStatus(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('FetchSubcribeMsgTemplateStatus called  promise result:', result)
                return res
            })
        }
        log.info('FetchSubcribeMsgTemplateStatus called result:', result)
        return result
    }
    FetchSubscribeMsgTemplate(...args: any[]) {
        log.info('FetchSubscribeMsgTemplate called with args:', args)
        const result = this.instance.FetchSubscribeMsgTemplate(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('FetchSubscribeMsgTemplate called  promise result:', result)
                return res
            })
        }
        log.info('FetchSubscribeMsgTemplate called result:', result)
        return result
    }
    SubscribeMsgTemplateSet(...args: any[]) {
        log.info('SubscribeMsgTemplateSet called with args:', args)
        const result = this.instance.SubscribeMsgTemplateSet(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('SubscribeMsgTemplateSet called  promise result:', result)
                return res
            })
        }
        log.info('SubscribeMsgTemplateSet called result:', result)
        return result
    }
    addFriend(...args: any[]) {
        log.info('addFriend called with args:', args)
        const result = this.instance.addFriend(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('addFriend called  promise result:', result)
                return res
            })
        }
        log.info('addFriend called result:', result)
        return result
    }
    addGuildRobot(...args: any[]) {
        log.info('addGuildRobot called with args:', args)
        const result = this.instance.addGuildRobot(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('addGuildRobot called  promise result:', result)
                return res
            })
        }
        log.info('addGuildRobot called result:', result)
        return result
    }
    addKernelRobotListener(...args: any[]) {
        log.info('addKernelRobotListener called with args:', args)
        const result = this.instance.addKernelRobotListener(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('addKernelRobotListener called  promise result:', result)
                return res
            })
        }
        log.info('addKernelRobotListener called result:', result)
        return result
    }
    aiGenAvatar(...args: any[]) {
        log.info('aiGenAvatar called with args:', args)
        const result = this.instance.aiGenAvatar(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('aiGenAvatar called  promise result:', result)
                return res
            })
        }
        log.info('aiGenAvatar called result:', result)
        return result
    }
    aiGenBotInfo(...args: any[]) {
        log.info('aiGenBotInfo called with args:', args)
        const result = this.instance.aiGenBotInfo(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('aiGenBotInfo called  promise result:', result)
                return res
            })
        }
        log.info('aiGenBotInfo called result:', result)
        return result
    }
    backFlowRobotCoreInfos(...args: any[]) {
        log.info('backFlowRobotCoreInfos called with args:', args)
        const result = this.instance.backFlowRobotCoreInfos(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('backFlowRobotCoreInfos called  promise result:', result)
                return res
            })
        }
        log.info('backFlowRobotCoreInfos called result:', result)
        return result
    }
    batchFetchRobotCoreInfos(...args: any[]) {
        log.info('batchFetchRobotCoreInfos called with args:', args)
        const result = this.instance.batchFetchRobotCoreInfos(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('batchFetchRobotCoreInfos called  promise result:', result)
                return res
            })
        }
        log.info('batchFetchRobotCoreInfos called result:', result)
        return result
    }
    batchGetBotsMenu(...args: any[]) {
        log.info('batchGetBotsMenu called with args:', args)
        const result = this.instance.batchGetBotsMenu(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('batchGetBotsMenu called  promise result:', result)
                return res
            })
        }
        log.info('batchGetBotsMenu called result:', result)
        return result
    }
    changeMyBot(...args: any[]) {
        log.info('changeMyBot called with args:', args)
        const result = this.instance.changeMyBot(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('changeMyBot called  promise result:', result)
                return res
            })
        }
        log.info('changeMyBot called result:', result)
        return result
    }
    checkMyBotNum(...args: any[]) {
        log.info('checkMyBotNum called with args:', args)
        const result = this.instance.checkMyBotNum(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('checkMyBotNum called  promise result:', result)
                return res
            })
        }
        log.info('checkMyBotNum called result:', result)
        return result
    }
    commandCallback(...args: any[]) {
        log.info('commandCallback called with args:', args)
        const result = this.instance.commandCallback(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('commandCallback called  promise result:', result)
                return res
            })
        }
        log.info('commandCallback called result:', result)
        return result
    }
    downMicGuildRobot(...args: any[]) {
        log.info('downMicGuildRobot called with args:', args)
        const result = this.instance.downMicGuildRobot(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('downMicGuildRobot called  promise result:', result)
                return res
            })
        }
        log.info('downMicGuildRobot called result:', result)
        return result
    }
    editMyRobotSetting(...args: any[]) {
        log.info('editMyRobotSetting called with args:', args)
        const result = this.instance.editMyRobotSetting(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('editMyRobotSetting called  promise result:', result)
                return res
            })
        }
        log.info('editMyRobotSetting called result:', result)
        return result
    }
    fetchAddRobotGroupList(...args: any[]) {
        log.info('fetchAddRobotGroupList called with args:', args)
        const result = this.instance.fetchAddRobotGroupList(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('fetchAddRobotGroupList called  promise result:', result)
                return res
            })
        }
        log.info('fetchAddRobotGroupList called result:', result)
        return result
    }
    fetchAiGenTemplateInfo(...args: any[]) {
        log.info('fetchAiGenTemplateInfo called with args:', args)
        const result = this.instance.fetchAiGenTemplateInfo(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('fetchAiGenTemplateInfo called  promise result:', result)
                return res
            })
        }
        log.info('fetchAiGenTemplateInfo called result:', result)
        return result
    }
    fetchAllRobots(...args: any[]) {
        log.info('fetchAllRobots called with args:', args)
        const result = this.instance.fetchAllRobots(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('fetchAllRobots called  promise result:', result)
                return res
            })
        }
        log.info('fetchAllRobots called result:', result)
        return result
    }
    fetchGroupRobotProfile(...args: any[]) {
        log.info('fetchGroupRobotProfile called with args:', args)
        const result = this.instance.fetchGroupRobotProfile(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('fetchGroupRobotProfile called  promise result:', result)
                return res
            })
        }
        log.info('fetchGroupRobotProfile called result:', result)
        return result
    }
    fetchGroupRobotProfileWithReq(...args: any[]) {
        log.info('fetchGroupRobotProfileWithReq called with args:', args)
        const result = this.instance.fetchGroupRobotProfileWithReq(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('fetchGroupRobotProfileWithReq called  promise result:', result)
                return res
            })
        }
        log.info('fetchGroupRobotProfileWithReq called result:', result)
        return result
    }
    fetchGroupRobotStoreCategoryList(...args: any[]) {
        log.info('fetchGroupRobotStoreCategoryList called with args:', args)
        const result = this.instance.fetchGroupRobotStoreCategoryList(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('fetchGroupRobotStoreCategoryList called  promise result:', result)
                return res
            })
        }
        log.info('fetchGroupRobotStoreCategoryList called result:', result)
        return result
    }
    fetchGroupRobotStoreDiscovery(...args: any[]) {
        log.info('fetchGroupRobotStoreDiscovery called with args:', args)
        const result = this.instance.fetchGroupRobotStoreDiscovery(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('fetchGroupRobotStoreDiscovery called  promise result:', result)
                return res
            })
        }
        log.info('fetchGroupRobotStoreDiscovery called result:', result)
        return result
    }
    fetchGuildRobotDirectMsgSetting(...args: any[]) {
        log.info('fetchGuildRobotDirectMsgSetting called with args:', args)
        const result = this.instance.fetchGuildRobotDirectMsgSetting(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('fetchGuildRobotDirectMsgSetting called  promise result:', result)
                return res
            })
        }
        log.info('fetchGuildRobotDirectMsgSetting called result:', result)
        return result
    }
    fetchGuildRobotInfo(...args: any[]) {
        log.info('fetchGuildRobotInfo called with args:', args)
        const result = this.instance.fetchGuildRobotInfo(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('fetchGuildRobotInfo called  promise result:', result)
                return res
            })
        }
        log.info('fetchGuildRobotInfo called result:', result)
        return result
    }
    fetchGuildRobotPermission(...args: any[]) {
        log.info('fetchGuildRobotPermission called with args:', args)
        const result = this.instance.fetchGuildRobotPermission(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('fetchGuildRobotPermission called  promise result:', result)
                return res
            })
        }
        log.info('fetchGuildRobotPermission called result:', result)
        return result
    }
    fetchGuildRobotPlusPanel(...args: any[]) {
        log.info('fetchGuildRobotPlusPanel called with args:', args)
        const result = this.instance.fetchGuildRobotPlusPanel(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('fetchGuildRobotPlusPanel called  promise result:', result)
                return res
            })
        }
        log.info('fetchGuildRobotPlusPanel called result:', result)
        return result
    }
    fetchListRobot(...args: any[]) {
        log.info('fetchListRobot called with args:', args)
        const result = this.instance.fetchListRobot(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('fetchListRobot called  promise result:', result)
                return res
            })
        }
        log.info('fetchListRobot called result:', result)
        return result
    }
    fetchMobileRobotRecommendCards(...args: any[]) {
        log.info('fetchMobileRobotRecommendCards called with args:', args)
        const result = this.instance.fetchMobileRobotRecommendCards(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('fetchMobileRobotRecommendCards called  promise result:', result)
                return res
            })
        }
        log.info('fetchMobileRobotRecommendCards called result:', result)
        return result
    }
    fetchMyRobotLists(...args: any[]) {
        log.info('fetchMyRobotLists called with args:', args)
        const result = this.instance.fetchMyRobotLists(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('fetchMyRobotLists called  promise result:', result)
                return res
            })
        }
        log.info('fetchMyRobotLists called result:', result)
        return result
    }
    fetchRecentUsedRobots(...args: any[]) {
        log.info('fetchRecentUsedRobots called with args:', args)
        const result = this.instance.fetchRecentUsedRobots(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('fetchRecentUsedRobots called  promise result:', result)
                return res
            })
        }
        log.info('fetchRecentUsedRobots called result:', result)
        return result
    }
    fetchRecommendRobotCard(...args: any[]) {
        log.info('fetchRecommendRobotCard called with args:', args)
        const result = this.instance.fetchRecommendRobotCard(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('fetchRecommendRobotCard called  promise result:', result)
                return res
            })
        }
        log.info('fetchRecommendRobotCard called result:', result)
        return result
    }
    fetchRobotCommonGuild(...args: any[]) {
        log.info('fetchRobotCommonGuild called with args:', args)
        const result = this.instance.fetchRobotCommonGuild(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('fetchRobotCommonGuild called  promise result:', result)
                return res
            })
        }
        log.info('fetchRobotCommonGuild called result:', result)
        return result
    }
    fetchRobotFeatureWithReq(...args: any[]) {
        log.info('fetchRobotFeatureWithReq called with args:', args)
        const result = this.instance.fetchRobotFeatureWithReq(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('fetchRobotFeatureWithReq called  promise result:', result)
                return res
            })
        }
        log.info('fetchRobotFeatureWithReq called result:', result)
        return result
    }
    fetchRobotShareLimit(...args: any[]) {
        log.info('fetchRobotShareLimit called with args:', args)
        const result = this.instance.fetchRobotShareLimit(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('fetchRobotShareLimit called  promise result:', result)
                return res
            })
        }
        log.info('fetchRobotShareLimit called result:', result)
        return result
    }
    fetchRobotStoryHalfViewData(...args: any[]) {
        log.info('fetchRobotStoryHalfViewData called with args:', args)
        const result = this.instance.fetchRobotStoryHalfViewData(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('fetchRobotStoryHalfViewData called  promise result:', result)
                return res
            })
        }
        log.info('fetchRobotStoryHalfViewData called result:', result)
        return result
    }
    fetchShareArkInfo(...args: any[]) {
        log.info('fetchShareArkInfo called with args:', args)
        const result = this.instance.fetchShareArkInfo(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('fetchShareArkInfo called  promise result:', result)
                return res
            })
        }
        log.info('fetchShareArkInfo called result:', result)
        return result
    }
    fetchShareInfo(...args: any[]) {
        log.info('fetchShareInfo called with args:', args)
        const result = this.instance.fetchShareInfo(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('fetchShareInfo called  promise result:', result)
                return res
            })
        }
        log.info('fetchShareInfo called result:', result)
        return result
    }
    fetchUgcSetting(...args: any[]) {
        log.info('fetchUgcSetting called with args:', args)
        const result = this.instance.fetchUgcSetting(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('fetchUgcSetting called  promise result:', result)
                return res
            })
        }
        log.info('fetchUgcSetting called result:', result)
        return result
    }
    getAllRobotFriendsCountFromCache(...args: any[]) {
        log.info('getAllRobotFriendsCountFromCache called with args:', args)
        const result = this.instance.getAllRobotFriendsCountFromCache(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getAllRobotFriendsCountFromCache called  promise result:', result)
                return res
            })
        }
        log.info('getAllRobotFriendsCountFromCache called result:', result)
        return result
    }
    getAllRobotFriendsFromCache(...args: any[]) {
        log.info('getAllRobotFriendsFromCache called with args:', args)
        const result = this.instance.getAllRobotFriendsFromCache(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getAllRobotFriendsFromCache called  promise result:', result)
                return res
            })
        }
        log.info('getAllRobotFriendsFromCache called result:', result)
        return result
    }
    getAudioLiveRobotStatus(...args: any[]) {
        log.info('getAudioLiveRobotStatus called with args:', args)
        const result = this.instance.getAudioLiveRobotStatus(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getAudioLiveRobotStatus called  promise result:', result)
                return res
            })
        }
        log.info('getAudioLiveRobotStatus called result:', result)
        return result
    }
    getGroupRobotProfile(...args: any[]) {
        log.info('getGroupRobotProfile called with args:', args)
        const result = this.instance.getGroupRobotProfile(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getGroupRobotProfile called  promise result:', result)
                return res
            })
        }
        log.info('getGroupRobotProfile called result:', result)
        return result
    }
    getGuildRobotCardRecommend(...args: any[]) {
        log.info('getGuildRobotCardRecommend called with args:', args)
        const result = this.instance.getGuildRobotCardRecommend(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getGuildRobotCardRecommend called  promise result:', result)
                return res
            })
        }
        log.info('getGuildRobotCardRecommend called result:', result)
        return result
    }
    getGuildRobotInlineSearch(...args: any[]) {
        log.info('getGuildRobotInlineSearch called with args:', args)
        const result = this.instance.getGuildRobotInlineSearch(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getGuildRobotInlineSearch called  promise result:', result)
                return res
            })
        }
        log.info('getGuildRobotInlineSearch called result:', result)
        return result
    }
    getGuildRobotList(...args: any[]) {
        log.info('getGuildRobotList called with args:', args)
        const result = this.instance.getGuildRobotList(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getGuildRobotList called  promise result:', result)
                return res
            })
        }
        log.info('getGuildRobotList called result:', result)
        return result
    }
    getRobotFriendsFromCacheWithUin(...args: any[]) {
        log.info('getRobotFriendsFromCacheWithUin called with args:', args)
        const result = this.instance.getRobotFriendsFromCacheWithUin(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getRobotFriendsFromCacheWithUin called  promise result:', result)
                return res
            })
        }
        log.info('getRobotFriendsFromCacheWithUin called result:', result)
        return result
    }
    getRobotFunctions(...args: any[]) {
        log.info('getRobotFunctions called with args:', args)
        const result = this.instance.getRobotFunctions(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getRobotFunctions called  promise result:', result)
                return res
            })
        }
        log.info('getRobotFunctions called result:', result)
        return result
    }
    getRobotUinRange(...args: any[]) {
        log.info('getRobotUinRange called with args:', args)
        const result = this.instance.getRobotUinRange(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getRobotUinRange called  promise result:', result)
                return res
            })
        }
        log.info('getRobotUinRange called result:', result)
        return result
    }
    queryGuildGlobalRobotSubscription(...args: any[]) {
        log.info('queryGuildGlobalRobotSubscription called with args:', args)
        const result = this.instance.queryGuildGlobalRobotSubscription(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('queryGuildGlobalRobotSubscription called  promise result:', result)
                return res
            })
        }
        log.info('queryGuildGlobalRobotSubscription called result:', result)
        return result
    }
    removeAllRecommendCache(...args: any[]) {
        log.info('removeAllRecommendCache called with args:', args)
        const result = this.instance.removeAllRecommendCache(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('removeAllRecommendCache called  promise result:', result)
                return res
            })
        }
        log.info('removeAllRecommendCache called result:', result)
        return result
    }
    removeFriend(...args: any[]) {
        log.info('removeFriend called with args:', args)
        const result = this.instance.removeFriend(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('removeFriend called  promise result:', result)
                return res
            })
        }
        log.info('removeFriend called result:', result)
        return result
    }
    removeKernelRobotListener(...args: any[]) {
        log.info('removeKernelRobotListener called with args:', args)
        const result = this.instance.removeKernelRobotListener(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('removeKernelRobotListener called  promise result:', result)
                return res
            })
        }
        log.info('removeKernelRobotListener called result:', result)
        return result
    }
    reportRobotStoryActionData(...args: any[]) {
        log.info('reportRobotStoryActionData called with args:', args)
        const result = this.instance.reportRobotStoryActionData(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('reportRobotStoryActionData called  promise result:', result)
                return res
            })
        }
        log.info('reportRobotStoryActionData called result:', result)
        return result
    }
    resetConversation(...args: any[]) {
        log.info('resetConversation called with args:', args)
        const result = this.instance.resetConversation(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('resetConversation called  promise result:', result)
                return res
            })
        }
        log.info('resetConversation called result:', result)
        return result
    }
    robotAuth(...args: any[]) {
        log.info('robotAuth called with args:', args)
        const result = this.instance.robotAuth(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('robotAuth called  promise result:', result)
                return res
            })
        }
        log.info('robotAuth called result:', result)
        return result
    }
    sendCommonRobotToGuild(...args: any[]) {
        log.info('sendCommonRobotToGuild called with args:', args)
        const result = this.instance.sendCommonRobotToGuild(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('sendCommonRobotToGuild called  promise result:', result)
                return res
            })
        }
        log.info('sendCommonRobotToGuild called result:', result)
        return result
    }
    sendGroupRobotStoreSearch(...args: any[]) {
        log.info('sendGroupRobotStoreSearch called with args:', args)
        const result = this.instance.sendGroupRobotStoreSearch(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('sendGroupRobotStoreSearch called  promise result:', result)
                return res
            })
        }
        log.info('sendGroupRobotStoreSearch called result:', result)
        return result
    }
    setAddRobotToGroup(...args: any[]) {
        log.info('setAddRobotToGroup called with args:', args)
        const result = this.instance.setAddRobotToGroup(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setAddRobotToGroup called  promise result:', result)
                return res
            })
        }
        log.info('setAddRobotToGroup called result:', result)
        return result
    }
    setGuildRobotDirectMsgSetting(...args: any[]) {
        log.info('setGuildRobotDirectMsgSetting called with args:', args)
        const result = this.instance.setGuildRobotDirectMsgSetting(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setGuildRobotDirectMsgSetting called  promise result:', result)
                return res
            })
        }
        log.info('setGuildRobotDirectMsgSetting called result:', result)
        return result
    }
    setGuildRobotPermission(...args: any[]) {
        log.info('setGuildRobotPermission called with args:', args)
        const result = this.instance.setGuildRobotPermission(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setGuildRobotPermission called  promise result:', result)
                return res
            })
        }
        log.info('setGuildRobotPermission called result:', result)
        return result
    }
    setRemoveRobotFromGroup(...args: any[]) {
        log.info('setRemoveRobotFromGroup called with args:', args)
        const result = this.instance.setRemoveRobotFromGroup(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setRemoveRobotFromGroup called  promise result:', result)
                return res
            })
        }
        log.info('setRemoveRobotFromGroup called result:', result)
        return result
    }
    setRobotMessagePush(...args: any[]) {
        log.info('setRobotMessagePush called with args:', args)
        const result = this.instance.setRobotMessagePush(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setRobotMessagePush called  promise result:', result)
                return res
            })
        }
        log.info('setRobotMessagePush called result:', result)
        return result
    }
    setRobotStoryEnter(...args: any[]) {
        log.info('setRobotStoryEnter called with args:', args)
        const result = this.instance.setRobotStoryEnter(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setRobotStoryEnter called  promise result:', result)
                return res
            })
        }
        log.info('setRobotStoryEnter called result:', result)
        return result
    }
    setRobotTTsConfig(...args: any[]) {
        log.info('setRobotTTsConfig called with args:', args)
        const result = this.instance.setRobotTTsConfig(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setRobotTTsConfig called  promise result:', result)
                return res
            })
        }
        log.info('setRobotTTsConfig called result:', result)
        return result
    }
    subscribeGuildGlobalRobot(...args: any[]) {
        log.info('subscribeGuildGlobalRobot called with args:', args)
        const result = this.instance.subscribeGuildGlobalRobot(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('subscribeGuildGlobalRobot called  promise result:', result)
                return res
            })
        }
        log.info('subscribeGuildGlobalRobot called result:', result)
        return result
    }
    upMicGuildRobot(...args: any[]) {
        log.info('upMicGuildRobot called with args:', args)
        const result = this.instance.upMicGuildRobot(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('upMicGuildRobot called  promise result:', result)
                return res
            })
        }
        log.info('upMicGuildRobot called result:', result)
        return result
    }
    updateGroupRobotProfile(...args: any[]) {
        log.info('updateGroupRobotProfile called with args:', args)
        const result = this.instance.updateGroupRobotProfile(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('updateGroupRobotProfile called  promise result:', result)
                return res
            })
        }
        log.info('updateGroupRobotProfile called result:', result)
        return result
    }
};
export const getNodeIKernelRobotService = (engine: any): any => {
    return class extends NodeIKernelRobotService {
        
    }
}