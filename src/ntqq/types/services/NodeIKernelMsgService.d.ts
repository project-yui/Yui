
interface CommonFileInfo {
    /**
     * 与上传前提供的一致
     */
    fileModelId: `${number}`
    msgId: `${number}`
    elemId: `${number}`
    uuid: `/${string}-${string}-${string}-${string}-${string}` | ''
    subId: string
    fileName: string
    fileSize: `${number}`
    msgTime: `${number}`
    peerUid: `${number}`
    /**
     * 2 - 群组
     */
    chatType: 2
    md5: string
    md510m: string
    sha: string
    sha3: string
    parent: null
    favId: null
    /**
     * 102 - ?
     */
    bizType: number | null
}
interface RichMediaUploadResult {
    /**
     * 与上传前提供的一致
     */
    fileModelId: `${number}`
    msgElementId: `${number}`
    msgId: `${number}`
    fileId: `/${string}-${string}-${string}-${string}-${string}` | ''
    fileProgress: `${number}`
    fileSpeed: `${number}`
    /**
     * 0 - ok
     * 
     * 2006028 - 非群成员
     */
    fileErrCode: `${number}`
    fileErrMsg: string
    fileDownType: 1
    thumbSize: number
    /**
     * 文件路径
     * 
     * 还是上传前的路径
     */
    filePath: string
    /**
     * 文件大小
     */
    totalSize: `${number}`
    trasferStatus: 4
    step: 0
    commonFileInfo: CommonFileInfo
    fileSrvErrCode: `${number}`
    clientMsg: string
    /**
     * 102 - ?
     */
    businessId: number
}
interface NodeIKernelMsgListenerConstructorOptions {
    onRecvMsg: () => void
    onFileMsgCome: () => void
    onRecvOnlineFileMsg: () => void
    onSysMsgNotification: () => void
    onRecvSysMsg: () => void
    onRecvS2CMsg: () => void
    onLineDev: () => void
    onKickedOffLine: () => void
    onMsgSettingUpdate: () => void
    onAddSendMsg: () => void
    onMsgRecall: () => void
    onSendMsgError: () => void
    onRecvMsgSvrRspTransInfo: () => void
    onMsgInfoListUpdate: () => void
    onMsgInfoListAdd: () => void
    onMsgSecurityNotify: () => void
    onMsgDelete: () => void
    onMsgEventListUpdate: () => void
    onCustomWithdrawConfigUpdate: () => void
    onChannelFreqLimitInfoUpdate: () => void
    onUnreadCntUpdate: () => void
    onUnreadCntAfterFirstView: () => void
    onContactUnreadCntUpdate: () => void
    onMsgAbstractUpdate: () => void
    onDraftUpdate: () => void
    onRichMediaUploadComplete: (info: RichMediaUploadResult) => void
    onRichMediaDownloadComplete: () => void
    onRichMediaProgerssUpdate: () => void
    onGroupFileInfoUpdate: () => void
    onSearchGroupFileInfoUpdate: () => void
    onGroupTransferInfoUpdate: () => void
    onGroupFileInfoAdd: () => void
    onGroupTransferInfoAdd: () => void
    onEmojiDownloadComplete: () => void
    onEmojiResourceUpdate: () => void
    onNtMsgSyncStart: () => void
    onNtFirstViewMsgSyncEnd: () => void
    onNtMsgSyncEnd: () => void
    onBroadcastHelperDownloadComplete: () => void
    onBroadcastHelperProgerssUpdate: () => void
    onInputStatusPush: () => void
    onImportOldDbProgressUpdate: () => void
    onMsgQRCodeStatusChanged: () => void
    onlineStatusSmallIconDownloadPush: () => void
    onFirstViewGroupGuildMapping: () => void
    onlineStatusBigIconDownloadPush: () => void
    onFirstViewDirectMsgUpdate: () => void
    onFeedEventUpdate: () => void
    onGuildInteractiveUpdate: () => void
    onGuildNotificationAbstractUpdate: () => void
    onReadFeedEventUpdate: () => void
    onTempChatInfoUpdate: () => void
    onUserOnlineStatusChanged: () => void
    onHitEmojiKeywordResult: () => void
    onHitRelatedEmojiResult: () => void
    onHitCsRelatedEmojiResult: () => void
    onUserTabStatusChanged: () => void
    onMsgBoxChanged: () => void
    onLogLevelChanged: () => void
    onUserChannelTabStatusChanged: () => void
    onGroupGuildUpdate: () => void
    onGrabPasswordRedBag: () => void
    onRedTouchChanged: () => void
    onRecvUDCFlag: () => void
    onRecvGroupGuildFlag: () => void
    onUserSecQualityChanged: () => void
}
export class NodeIKernelMsgListener {
    constructor(options: NodeIKernelMsgListenerConstructorOptions);
}
export default class NodeIKernelMsgService {
    addKernelMsgListener(listener: NodeIKernelMsgListener): number
    addSendMSg(...args: any[]): any
    downloadRichMedia(info: NodeIKernelMsgServiceType.DownloadRichMediaReq): any
    fetchStatusMgrInfo(): Promise<NodeIKernelMsgServiceType.FetchStatusMgrInfoResp>
    getAllGuildUnreadCntInfo(): Promise<NodeIKernelMsgServiceType.GuildUnreadCntInfoResp>
    getDraft(peer: PeerInfo): Promise<NodeIKernelMsgServiceType.DraftResp>
    getEmojiResourcePath(a: number): Promise<NodeIKernelMsgServiceType.ResourcePathResp>
    getFileThumbSavePathForSend(thumbSize: number, needCreate: boolean): string
    getMsgsByMsgId(peer: PeerInfo, msgId: `${number}`[]): Promise<any>
    getMsgsIncludeSelf(peer: PeerInfo, startMsgId: `${number}`, cnt: number, queryOrder: boolean): Promise<NodeIKernelMsgServiceType.MsgListResult>
    getOnlineStatusSmallIconBasePath(): Promise<NodeIKernelMsgServiceType.BasePathResp>
    getRichMediaFilePathForGuild(fileInfo: NodeIKernelMsgServiceType.GetRichMediaFilePathForGuildReq): string
    getSingleMsg(peer: PeerInfo, msgSeq: `${number}`): Promise<any>
    getSourceOfReplyMsg(peer: PeerInfo, msgId: `${number}`, sourceMsgSeq: `${number}`): Promise<NodeIKernelMsgServiceType.MsgListResult>
    /**
     * 合转发并消息
     * 
     * @param forwardList 转发消息列表
     * @param peer 目标对象
     * @param comments 附带评论
     * @param attributes 属性
     */
    multiForwardMsgWithComment(forwardList: any[], fromPeer: PeerInfo, toPeer: PeerInfo, comments: any[], attributes: Map<any, any>): Promise<SimpleResult>

    /**
     * 撤回指定消息
     * 
     * @param peer 操作对象
     * @param ids 要撤回的消息id
     */
    recallMsg(peer: PeerInfo, ids: `${number}`[]): Promise<SimpleResult>

    registerSysMsgNotification(...args: any[]): Promise<any>

    /**
     * 发送消息
     * 
     * 结果在监听器里面回调
     * @param msgId 消息Id 0
     * @param peer 发送目标
     * @param msg 发送的消息内容
     * @param attributes 属性
     */
    sendMsg(msgId: `${number}`, peer: PeerInfo, msg: any[], attributes: Map<any, any>): Promise<SimpleResult>
    IsExistOldDb(): boolean
}

declare namespace NodeIKernelMsgServiceType {
    interface DownloadRichMediaReq {
        /**
         * 群号
         */
        peerUid: string
        /**
         * 2 - 群聊
         */
        chatType: number
        /**
         * 消息ID
         */
        msgId: `${number}`
        /**
         * 元素ID
         */
        elementId: `${number}`
        /**
         * 2
         */
        downloadType: number
        /**
         * 0
         */
        thumbSize: number
        /**
         * 保存路径
         */
        filePath: string
        /**
         * '0'
         */
        fileModelId: `${number}`
        /**
         * 0
         */
        downSourceType: number
        /**
         * 1
         */
        triggerType: number
    }
    interface FetchStatusMgrInfoResp extends SimpleResult {
        content: string
    }
    interface ResourcePathResp extends SimpleResult {
        resourcePath: string
    }
    interface GetRichMediaFilePathForGuildReq {
        md5HexStr: string
        fileName: string
        elementType: number,
        elementSubType: number,
        thumbSize: number,
        needCreate: boolean,
        downloadType: number,
        file_uuid: ''
    }
    interface BasePathResp extends SimpleResult {
        content: string
    }
    interface GuildUnreadCntInfoResp extends SimpleResult {
        unreadCntInfos: GuildUnreadCntInfo[]
    }
    interface GuildUnreadCntInfo {
        show_unread_cnt: UnreadCnt
        all_unread_cnt: UnreadCnt
        atme_unread_cnt: UnreadCnt
        atall_unread_cnt: UnreadCnt
        peer: PeerInfo
        related_to_me_string: string
        related_to_me_cnt: number
        last_related_to_me_type: number
        related_to_me_string_time: `${number}`
        last_related_to_feed_type: number
        header_url: '0x'
    }
    interface UnreadCnt {
        type: number
        cnt: number
    }
    interface DraftResp {

    }
    interface MsgListResult {
        result: number
        errMsg: string
        msgList: import("../../message/interfaces").NTReceiveMessageType.NTMessageItemType[]
    }
}