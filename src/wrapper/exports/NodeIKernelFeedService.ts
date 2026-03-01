import { useLogger } from "../../common/log";

const log = useLogger('Wrapper/NodeIKernelFeedService')
export class NodeIKernelFeedService {
    protected static singleton?: any = undefined
    protected instance: any
    constructor(instance: any) {
        log.info('constructor called')
        this.instance = instance
    }
    SetFeedDislikes(...args: any[]) {
        log.info('SetFeedDislikes called with args:', args)
        const result = this.instance.SetFeedDislikes(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('SetFeedDislikes called  promise result:', result)
                return res
            })
        }
        log.info('SetFeedDislikes called result:', result)
        return result
    }
    addKernelFeedListener(...args: any[]) {
        log.info('addKernelFeedListener called with args:', args)
        const result = this.instance.addKernelFeedListener(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('addKernelFeedListener called  promise result:', result)
                return res
            })
        }
        log.info('addKernelFeedListener called result:', result)
        return result
    }
    alterFeed(...args: any[]) {
        log.info('alterFeed called with args:', args)
        const result = this.instance.alterFeed(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('alterFeed called  promise result:', result)
                return res
            })
        }
        log.info('alterFeed called result:', result)
        return result
    }
    appealFeed(...args: any[]) {
        log.info('appealFeed called with args:', args)
        const result = this.instance.appealFeed(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('appealFeed called  promise result:', result)
                return res
            })
        }
        log.info('appealFeed called result:', result)
        return result
    }
    batchGetFeedDetail(...args: any[]) {
        log.info('batchGetFeedDetail called with args:', args)
        const result = this.instance.batchGetFeedDetail(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('batchGetFeedDetail called  promise result:', result)
                return res
            })
        }
        log.info('batchGetFeedDetail called result:', result)
        return result
    }
    batchManageOperate(...args: any[]) {
        log.info('batchManageOperate called with args:', args)
        const result = this.instance.batchManageOperate(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('batchManageOperate called  promise result:', result)
                return res
            })
        }
        log.info('batchManageOperate called result:', result)
        return result
    }
    batchTransThirdPlatformURL(...args: any[]) {
        log.info('batchTransThirdPlatformURL called with args:', args)
        const result = this.instance.batchTransThirdPlatformURL(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('batchTransThirdPlatformURL called  promise result:', result)
                return res
            })
        }
        log.info('batchTransThirdPlatformURL called result:', result)
        return result
    }
    clearFeedsRecentViewHistory(...args: any[]) {
        log.info('clearFeedsRecentViewHistory called with args:', args)
        const result = this.instance.clearFeedsRecentViewHistory(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('clearFeedsRecentViewHistory called  promise result:', result)
                return res
            })
        }
        log.info('clearFeedsRecentViewHistory called result:', result)
        return result
    }
    createShare(...args: any[]) {
        log.info('createShare called with args:', args)
        const result = this.instance.createShare(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('createShare called  promise result:', result)
                return res
            })
        }
        log.info('createShare called result:', result)
        return result
    }
    decodeBusiData(...args: any[]) {
        log.info('decodeBusiData called with args:', args)
        const result = this.instance.decodeBusiData(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('decodeBusiData called  promise result:', result)
                return res
            })
        }
        log.info('decodeBusiData called result:', result)
        return result
    }
    decodeStFeed(...args: any[]) {
        log.info('decodeStFeed called with args:', args)
        const result = this.instance.decodeStFeed(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('decodeStFeed called  promise result:', result)
                return res
            })
        }
        log.info('decodeStFeed called result:', result)
        return result
    }
    delFeed(...args: any[]) {
        log.info('delFeed called with args:', args)
        const result = this.instance.delFeed(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('delFeed called  promise result:', result)
                return res
            })
        }
        log.info('delFeed called result:', result)
        return result
    }
    deleteFeedInteractNotice(...args: any[]) {
        log.info('deleteFeedInteractNotice called with args:', args)
        const result = this.instance.deleteFeedInteractNotice(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('deleteFeedInteractNotice called  promise result:', result)
                return res
            })
        }
        log.info('deleteFeedInteractNotice called result:', result)
        return result
    }
    doComment(...args: any[]) {
        log.info('doComment called with args:', args)
        const result = this.instance.doComment(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('doComment called  promise result:', result)
                return res
            })
        }
        log.info('doComment called result:', result)
        return result
    }
    doFeedPrefer(...args: any[]) {
        log.info('doFeedPrefer called with args:', args)
        const result = this.instance.doFeedPrefer(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('doFeedPrefer called  promise result:', result)
                return res
            })
        }
        log.info('doFeedPrefer called result:', result)
        return result
    }
    doLike(...args: any[]) {
        log.info('doLike called with args:', args)
        const result = this.instance.doLike(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('doLike called  promise result:', result)
                return res
            })
        }
        log.info('doLike called result:', result)
        return result
    }
    doReply(...args: any[]) {
        log.info('doReply called with args:', args)
        const result = this.instance.doReply(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('doReply called  promise result:', result)
                return res
            })
        }
        log.info('doReply called result:', result)
        return result
    }
    downloadFeedRichMedia(...args: any[]) {
        log.info('downloadFeedRichMedia called with args:', args)
        const result = this.instance.downloadFeedRichMedia(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('downloadFeedRichMedia called  promise result:', result)
                return res
            })
        }
        log.info('downloadFeedRichMedia called result:', result)
        return result
    }
    encodeGProGetGuildFeedsRsp(...args: any[]) {
        log.info('encodeGProGetGuildFeedsRsp called with args:', args)
        const result = this.instance.encodeGProGetGuildFeedsRsp(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('encodeGProGetGuildFeedsRsp called  promise result:', result)
                return res
            })
        }
        log.info('encodeGProGetGuildFeedsRsp called result:', result)
        return result
    }
    encodeGProStGetChannelFeedsRsp(...args: any[]) {
        log.info('encodeGProStGetChannelFeedsRsp called with args:', args)
        const result = this.instance.encodeGProStGetChannelFeedsRsp(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('encodeGProStGetChannelFeedsRsp called  promise result:', result)
                return res
            })
        }
        log.info('encodeGProStGetChannelFeedsRsp called result:', result)
        return result
    }
    encodeGProTopFeed(...args: any[]) {
        log.info('encodeGProTopFeed called with args:', args)
        const result = this.instance.encodeGProTopFeed(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('encodeGProTopFeed called  promise result:', result)
                return res
            })
        }
        log.info('encodeGProTopFeed called result:', result)
        return result
    }
    encodeStFeed(...args: any[]) {
        log.info('encodeStFeed called with args:', args)
        const result = this.instance.encodeStFeed(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('encodeStFeed called  promise result:', result)
                return res
            })
        }
        log.info('encodeStFeed called result:', result)
        return result
    }
    getAllFeedNotices(...args: any[]) {
        log.info('getAllFeedNotices called with args:', args)
        const result = this.instance.getAllFeedNotices(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getAllFeedNotices called  promise result:', result)
                return res
            })
        }
        log.info('getAllFeedNotices called result:', result)
        return result
    }
    getChannelDraft(...args: any[]) {
        log.info('getChannelDraft called with args:', args)
        const result = this.instance.getChannelDraft(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getChannelDraft called  promise result:', result)
                return res
            })
        }
        log.info('getChannelDraft called result:', result)
        return result
    }
    getChannelRecommendFeeds(...args: any[]) {
        log.info('getChannelRecommendFeeds called with args:', args)
        const result = this.instance.getChannelRecommendFeeds(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getChannelRecommendFeeds called  promise result:', result)
                return res
            })
        }
        log.info('getChannelRecommendFeeds called result:', result)
        return result
    }
    getChannelTimelineFeeds(...args: any[]) {
        log.info('getChannelTimelineFeeds called with args:', args)
        const result = this.instance.getChannelTimelineFeeds(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getChannelTimelineFeeds called  promise result:', result)
                return res
            })
        }
        log.info('getChannelTimelineFeeds called result:', result)
        return result
    }
    getDetailRecommendFeeds(...args: any[]) {
        log.info('getDetailRecommendFeeds called with args:', args)
        const result = this.instance.getDetailRecommendFeeds(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getDetailRecommendFeeds called  promise result:', result)
                return res
            })
        }
        log.info('getDetailRecommendFeeds called result:', result)
        return result
    }
    getDynamicPageRecommend(...args: any[]) {
        log.info('getDynamicPageRecommend called with args:', args)
        const result = this.instance.getDynamicPageRecommend(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getDynamicPageRecommend called  promise result:', result)
                return res
            })
        }
        log.info('getDynamicPageRecommend called result:', result)
        return result
    }
    getExternalComments(...args: any[]) {
        log.info('getExternalComments called with args:', args)
        const result = this.instance.getExternalComments(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getExternalComments called  promise result:', result)
                return res
            })
        }
        log.info('getExternalComments called result:', result)
        return result
    }
    getFeedComments(...args: any[]) {
        log.info('getFeedComments called with args:', args)
        const result = this.instance.getFeedComments(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getFeedComments called  promise result:', result)
                return res
            })
        }
        log.info('getFeedComments called result:', result)
        return result
    }
    getFeedCount(...args: any[]) {
        log.info('getFeedCount called with args:', args)
        const result = this.instance.getFeedCount(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getFeedCount called  promise result:', result)
                return res
            })
        }
        log.info('getFeedCount called result:', result)
        return result
    }
    getFeedDetail(...args: any[]) {
        log.info('getFeedDetail called with args:', args)
        const result = this.instance.getFeedDetail(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getFeedDetail called  promise result:', result)
                return res
            })
        }
        log.info('getFeedDetail called result:', result)
        return result
    }
    getFeedDetailWithHotComments(...args: any[]) {
        log.info('getFeedDetailWithHotComments called with args:', args)
        const result = this.instance.getFeedDetailWithHotComments(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getFeedDetailWithHotComments called  promise result:', result)
                return res
            })
        }
        log.info('getFeedDetailWithHotComments called result:', result)
        return result
    }
    getFeedLikeUserList(...args: any[]) {
        log.info('getFeedLikeUserList called with args:', args)
        const result = this.instance.getFeedLikeUserList(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getFeedLikeUserList called  promise result:', result)
                return res
            })
        }
        log.info('getFeedLikeUserList called result:', result)
        return result
    }
    getFeedNotices(...args: any[]) {
        log.info('getFeedNotices called with args:', args)
        const result = this.instance.getFeedNotices(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getFeedNotices called  promise result:', result)
                return res
            })
        }
        log.info('getFeedNotices called result:', result)
        return result
    }
    getFeedRichMediaFilePath(...args: any[]) {
        log.info('getFeedRichMediaFilePath called with args:', args)
        const result = this.instance.getFeedRichMediaFilePath(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getFeedRichMediaFilePath called  promise result:', result)
                return res
            })
        }
        log.info('getFeedRichMediaFilePath called result:', result)
        return result
    }
    getFeeds(...args: any[]) {
        log.info('getFeeds called with args:', args)
        const result = this.instance.getFeeds(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getFeeds called  promise result:', result)
                return res
            })
        }
        log.info('getFeeds called result:', result)
        return result
    }
    getFeedsByIndex(...args: any[]) {
        log.info('getFeedsByIndex called with args:', args)
        const result = this.instance.getFeedsByIndex(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getFeedsByIndex called  promise result:', result)
                return res
            })
        }
        log.info('getFeedsByIndex called result:', result)
        return result
    }
    getGuildEssenceFeeds(...args: any[]) {
        log.info('getGuildEssenceFeeds called with args:', args)
        const result = this.instance.getGuildEssenceFeeds(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getGuildEssenceFeeds called  promise result:', result)
                return res
            })
        }
        log.info('getGuildEssenceFeeds called result:', result)
        return result
    }
    getGuildFeeds(...args: any[]) {
        log.info('getGuildFeeds called with args:', args)
        const result = this.instance.getGuildFeeds(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getGuildFeeds called  promise result:', result)
                return res
            })
        }
        log.info('getGuildFeeds called result:', result)
        return result
    }
    getImmersiveFeeds(...args: any[]) {
        log.info('getImmersiveFeeds called with args:', args)
        const result = this.instance.getImmersiveFeeds(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getImmersiveFeeds called  promise result:', result)
                return res
            })
        }
        log.info('getImmersiveFeeds called result:', result)
        return result
    }
    getJoinedRecommendItems(...args: any[]) {
        log.info('getJoinedRecommendItems called with args:', args)
        const result = this.instance.getJoinedRecommendItems(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getJoinedRecommendItems called  promise result:', result)
                return res
            })
        }
        log.info('getJoinedRecommendItems called result:', result)
        return result
    }
    getLocalFeelJumpInfo(...args: any[]) {
        log.info('getLocalFeelJumpInfo called with args:', args)
        const result = this.instance.getLocalFeelJumpInfo(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getLocalFeelJumpInfo called  promise result:', result)
                return res
            })
        }
        log.info('getLocalFeelJumpInfo called result:', result)
        return result
    }
    getMultiChannelFeeds(...args: any[]) {
        log.info('getMultiChannelFeeds called with args:', args)
        const result = this.instance.getMultiChannelFeeds(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getMultiChannelFeeds called  promise result:', result)
                return res
            })
        }
        log.info('getMultiChannelFeeds called result:', result)
        return result
    }
    getMyJoinGuild(...args: any[]) {
        log.info('getMyJoinGuild called with args:', args)
        const result = this.instance.getMyJoinGuild(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getMyJoinGuild called  promise result:', result)
                return res
            })
        }
        log.info('getMyJoinGuild called result:', result)
        return result
    }
    getNextPageReplies(...args: any[]) {
        log.info('getNextPageReplies called with args:', args)
        const result = this.instance.getNextPageReplies(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getNextPageReplies called  promise result:', result)
                return res
            })
        }
        log.info('getNextPageReplies called result:', result)
        return result
    }
    getNotices(...args: any[]) {
        log.info('getNotices called with args:', args)
        const result = this.instance.getNotices(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getNotices called  promise result:', result)
                return res
            })
        }
        log.info('getNotices called result:', result)
        return result
    }
    getProfileFeeds(...args: any[]) {
        log.info('getProfileFeeds called with args:', args)
        const result = this.instance.getProfileFeeds(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getProfileFeeds called  promise result:', result)
                return res
            })
        }
        log.info('getProfileFeeds called result:', result)
        return result
    }
    getTopFeedConfig(...args: any[]) {
        log.info('getTopFeedConfig called with args:', args)
        const result = this.instance.getTopFeedConfig(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getTopFeedConfig called  promise result:', result)
                return res
            })
        }
        log.info('getTopFeedConfig called result:', result)
        return result
    }
    getTopFeeds(...args: any[]) {
        log.info('getTopFeeds called with args:', args)
        const result = this.instance.getTopFeeds(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getTopFeeds called  promise result:', result)
                return res
            })
        }
        log.info('getTopFeeds called result:', result)
        return result
    }
    getTopicFeeds(...args: any[]) {
        log.info('getTopicFeeds called with args:', args)
        const result = this.instance.getTopicFeeds(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getTopicFeeds called  promise result:', result)
                return res
            })
        }
        log.info('getTopicFeeds called result:', result)
        return result
    }
    getUserPageDigestContentList(...args: any[]) {
        log.info('getUserPageDigestContentList called with args:', args)
        const result = this.instance.getUserPageDigestContentList(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getUserPageDigestContentList called  promise result:', result)
                return res
            })
        }
        log.info('getUserPageDigestContentList called result:', result)
        return result
    }
    impeach(...args: any[]) {
        log.info('impeach called with args:', args)
        const result = this.instance.impeach(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('impeach called  promise result:', result)
                return res
            })
        }
        log.info('impeach called result:', result)
        return result
    }
    moveFeed(...args: any[]) {
        log.info('moveFeed called with args:', args)
        const result = this.instance.moveFeed(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('moveFeed called  promise result:', result)
                return res
            })
        }
        log.info('moveFeed called result:', result)
        return result
    }
    preloadGuildFeeds(...args: any[]) {
        log.info('preloadGuildFeeds called with args:', args)
        const result = this.instance.preloadGuildFeeds(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('preloadGuildFeeds called  promise result:', result)
                return res
            })
        }
        log.info('preloadGuildFeeds called result:', result)
        return result
    }
    publishFeed(...args: any[]) {
        log.info('publishFeed called with args:', args)
        const result = this.instance.publishFeed(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('publishFeed called  promise result:', result)
                return res
            })
        }
        log.info('publishFeed called result:', result)
        return result
    }
    pushEssenceFeed(...args: any[]) {
        log.info('pushEssenceFeed called with args:', args)
        const result = this.instance.pushEssenceFeed(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('pushEssenceFeed called  promise result:', result)
                return res
            })
        }
        log.info('pushEssenceFeed called result:', result)
        return result
    }
    removeKernelFeedListener(...args: any[]) {
        log.info('removeKernelFeedListener called with args:', args)
        const result = this.instance.removeKernelFeedListener(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('removeKernelFeedListener called  promise result:', result)
                return res
            })
        }
        log.info('removeKernelFeedListener called result:', result)
        return result
    }
    removeRecommendFeed(...args: any[]) {
        log.info('removeRecommendFeed called with args:', args)
        const result = this.instance.removeRecommendFeed(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('removeRecommendFeed called  promise result:', result)
                return res
            })
        }
        log.info('removeRecommendFeed called result:', result)
        return result
    }
    reportRecentViewFeed(...args: any[]) {
        log.info('reportRecentViewFeed called with args:', args)
        const result = this.instance.reportRecentViewFeed(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('reportRecentViewFeed called  promise result:', result)
                return res
            })
        }
        log.info('reportRecentViewFeed called result:', result)
        return result
    }
    saveFeedListViewContext(...args: any[]) {
        log.info('saveFeedListViewContext called with args:', args)
        const result = this.instance.saveFeedListViewContext(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('saveFeedListViewContext called  promise result:', result)
                return res
            })
        }
        log.info('saveFeedListViewContext called result:', result)
        return result
    }
    searchTopic(...args: any[]) {
        log.info('searchTopic called with args:', args)
        const result = this.instance.searchTopic(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('searchTopic called  promise result:', result)
                return res
            })
        }
        log.info('searchTopic called result:', result)
        return result
    }
    sendDataReport(...args: any[]) {
        log.info('sendDataReport called with args:', args)
        const result = this.instance.sendDataReport(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('sendDataReport called  promise result:', result)
                return res
            })
        }
        log.info('sendDataReport called result:', result)
        return result
    }
    setChannelDraft(...args: any[]) {
        log.info('setChannelDraft called with args:', args)
        const result = this.instance.setChannelDraft(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setChannelDraft called  promise result:', result)
                return res
            })
        }
        log.info('setChannelDraft called result:', result)
        return result
    }
    setTopComment(...args: any[]) {
        log.info('setTopComment called with args:', args)
        const result = this.instance.setTopComment(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setTopComment called  promise result:', result)
                return res
            })
        }
        log.info('setTopComment called result:', result)
        return result
    }
    topChannelFeed(...args: any[]) {
        log.info('topChannelFeed called with args:', args)
        const result = this.instance.topChannelFeed(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('topChannelFeed called  promise result:', result)
                return res
            })
        }
        log.info('topChannelFeed called result:', result)
        return result
    }
    topFeedAction(...args: any[]) {
        log.info('topFeedAction called with args:', args)
        const result = this.instance.topFeedAction(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('topFeedAction called  promise result:', result)
                return res
            })
        }
        log.info('topFeedAction called result:', result)
        return result
    }
    unDoDelFeed(...args: any[]) {
        log.info('unDoDelFeed called with args:', args)
        const result = this.instance.unDoDelFeed(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('unDoDelFeed called  promise result:', result)
                return res
            })
        }
        log.info('unDoDelFeed called result:', result)
        return result
    }
    updateFeedEssenceStatus(...args: any[]) {
        log.info('updateFeedEssenceStatus called with args:', args)
        const result = this.instance.updateFeedEssenceStatus(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('updateFeedEssenceStatus called  promise result:', result)
                return res
            })
        }
        log.info('updateFeedEssenceStatus called result:', result)
        return result
    }
    updateFeedInteractBlockedStatus(...args: any[]) {
        log.info('updateFeedInteractBlockedStatus called with args:', args)
        const result = this.instance.updateFeedInteractBlockedStatus(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('updateFeedInteractBlockedStatus called  promise result:', result)
                return res
            })
        }
        log.info('updateFeedInteractBlockedStatus called result:', result)
        return result
    }
};
export const getNodeIKernelFeedService = (engine: any): any => {
    return class extends NodeIKernelFeedService {
        
        static decodeGuildEssenceFeeds(...args: any[]) {
            log.info('decodeGuildEssenceFeeds called with args:', args)
            const result = engine.decodeGuildEssenceFeeds(...args)
            log.info('decodeGuildEssenceFeeds called result:', result)
            return result
        }
        static decodeGuildGProDivider(...args: any[]) {
            log.info('decodeGuildGProDivider called with args:', args)
            const result = engine.decodeGuildGProDivider(...args)
            log.info('decodeGuildGProDivider called result:', result)
            return result
        }
        static decodeRecommendCardPosAdvertise(...args: any[]) {
            log.info('decodeRecommendCardPosAdvertise called with args:', args)
            const result = engine.decodeRecommendCardPosAdvertise(...args)
            log.info('decodeRecommendCardPosAdvertise called result:', result)
            return result
        }
    }
}