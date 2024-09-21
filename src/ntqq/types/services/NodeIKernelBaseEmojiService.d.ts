interface FetchFullSysEmojisReq {
    /**
     * 2
     */
    pullMoment: number
    /**
     * 7
     */
    pullType: number
    /**
     * false
     */
    refresh: boolean
    /**
     * true
     */
    fetchAdvaceSource: boolean
    /**
     * true
     */
    fetchBaseSource: boolean
    /**
     * 40
     */
    thresholdValue: number
}
interface FetchFullSysEmojisResp {
    result: number
    errMsg: string
    rsp: {
        /**
         * 普通表情 - 手机第一栏
         */
        normalPanelResult: FetchFullSysEmojisInfo
        /**
         * 特殊动画表情 - 手机第二栏
         */
        superPanelResult: FetchFullSysEmojisInfo
        /**
         * 手动添加收藏的表情
         */
        redHeartPanelResult: FetchFullSysEmojisInfo
        otherPanelResult: FetchFullSysEmojisInfo
    }
}
interface FetchFullSysEmojisInfo {
    SysEmojiGroupList: EmojiGroupInfo[]
    downloadInfo: EmojiDownloadInfo
}
interface EmojiDownloadInfo {
    baseResDownloadUrl: string
    advancedResDownloadUrl: string
}
interface EmojiGroupInfo {
    groupName: string
    SysEmojiList: EmojiItemInfo[]
}
interface EmojiItemInfo {
    emojiId: string
    describe: string
    qzoneCode: `${number}`
    qcid: number
    /**
     * 0 - 普通QQ表情
     * 1 - 大图动画表情
     * 2 - 篮球
     * 3 - 活动表情
     * 4 - 原生emoji
     */
    emojiType: 4
    aniStickerPackId: number
    aniStickerId: number
    downloadInfo: EmojiDownloadInfo
    associateWords: string[]
    isHide: false
    startTime: `${number}`
    endTime: `${number}`
    animationWidth: number
    animationHeigh: number
}
interface EmojiIdTypeItem {
    emojiId: string
    type: number
}
interface EmojiPathItem {
    emojiId: string
    type: number
    apngDirPath: string
    pngDirPath: string
    lottiDirPath: string
}
interface IsBaseEmojiPathExistResp {
    result: number
    errMsg: string
    /**
     * 已存在的不会出现
     */
    info: Map<string, boolean>
}
interface EmojiDownloadReq {
    emojiId: string
    qzoneCode: string
    groupName: undefined | string
    panelCategory: undefined | number
}
interface EmojiDownloadResp {
    result: number
    errMsg: string
    rsp: {
        emojiId: string
        describe: string
        qzoneCode: string
        qcid: 0
        emojiType: 0
        aniStickerPackId: 0
        aniStickerId: 0
        downloadInfo: {
            baseResDownloadUrl: string
            advancedResDownloadUrl: string
        }
        associateWords: []
        isHide: false
        startTime: '0'
        endTime: '0'
        animationWidth: 0
        animationHeigh: 0
    }
    info: {
        emojiId: ''
        type: 0
        apngDirPath: string
        pngDirPath: string
        lottiDirPath: string
    }
}
export class NodeIKernelBaseEmojiService {
    downloadBaseEmojiById(req: EmojiDownloadReq): Promise<EmojiDownloadResp>
    fetchFullSysEmojis(arg: FetchFullSysEmojisReq): Promise<FetchFullSysEmojisResp>
    getBaseEmojiPathByIds(list: EmojiIdTypeItem[]): Map<string, EmojiPathItem>
    isBaseEmojiPathExist(list: string[]): Promise<IsBaseEmojiPathExistResp>
}