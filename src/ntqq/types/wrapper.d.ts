
/// <reference types="node" />


/**
 * native层
 */
declare namespace NTNativeWrapper {
  
  namespace CrossProcessExports {
    const NodeIGlobalAdapter: typeof NTNativeWrapper.NodeIGlobalAdapter
    const NodeIKernelLoginService: typeof NTNativeWrapper.NodeIKernelLoginService
    const NodeIQQNTWrapperEngine: typeof NTNativeWrapper.NodeIQQNTWrapperEngine
    const NodeQQNTWrapperUtil: typeof NTNativeWrapper.NodeQQNTWrapperUtil
    const NodeIQQNTWrapperSession: typeof NTNativeWrapper.NodeIQQNTWrapperSession
    const NodeIKernelMsgListener: typeof NTNativeWrapper.NodeIKernelMsgListener
    const NodeIKernelUnitedConfigService: typeof NTNativeWrapper.NodeIKernelUnitedConfigService
    const NodeIDependsAdapter: typeof NTNativeWrapper.NodeIDependsAdapter
    const NodeIDispatcherAdapter: typeof NTNativeWrapper.NodeIDispatcherAdapter
    const NodeIKernelSessionListener: typeof NTNativeWrapper.NodeIKernelSessionListener
    const NodeIKernelBuddyListener: typeof NTNativeWrapper.NodeIKernelBuddyListener
    const NodeIKernelLoginListener: typeof NTNativeWrapper.NodeIKernelLoginListener
    const NodeIKernelProfileListener: typeof NTNativeWrapper.NodeIKernelProfileListener
  }
  interface CrossProcessExportsInterface {
    NodeIGlobalAdapter: typeof NTNativeWrapper.NodeIGlobalAdapter
    NodeIKernelLoginService: typeof NTNativeWrapper.NodeIKernelLoginService
    NodeIQQNTWrapperEngine: typeof NTNativeWrapper.NodeIQQNTWrapperEngine
    NodeQQNTWrapperUtil: typeof NTNativeWrapper.NodeQQNTWrapperUtil
  }
  interface DeviceInfo {
    guid: `${string}-${string}-${string}-${string}-${string}`
    /**
     * 构建版本
     * 
     * 形如：
     * 
     * 9.9.7-21357
     */
    buildVer: string,
    /**
     * ???
     */
    localId: 2052,
    /**
     * 计算机用户名
     */
    devName: string,
    /**
     * 计算机类别
     * 
     * Windows_NT/Linux
     */
    devType: string,
    vendorName: '',
    /**
     * 操作系统版本
     * 
     * Windows 10 Pro
     */
    osVer: string,
    /**
     * win32 / linux
     */
    vendorOsName: string,
    /**
     * 静音
     */
    setMute: boolean,
    vendorType: 0
  }
  interface NodeIDependsAdapterConstructorOptions {
    onMSFStatusChange: () => void
    onMSFSsoError: () => void
    getGroupCode: () => void
  }
  class NodeIDependsAdapter {
    constructor(options: NodeIDependsAdapterConstructorOptions)
  }
  interface NodeIDispatcherAdapterConstructorOptions {
    dispatchRequest: () => void
    dispatchCall: () => void
    dispatchCallWithJson: () => void
  }
  class NodeIDispatcherAdapter {
    constructor(options: NodeIDispatcherAdapterConstructorOptions)
  }

  interface NodeIGlobalAdapterConstructorOptions {
    onLog?: () => void
    onGetSrvCalTime?: () => void
    onShowErrUITips?: () => void
    fixPicImgType?: () => Promise<void>
    getAppSetting?: () => void
    onInstallFinished?: () => Promise<void>
    onUpdateGeneralFlag?: () => void
    onGetOfflineMsg?: () => void
  }
  class NodeIGlobalAdapter {
    constructor(options: NodeIGlobalAdapterConstructorOptions)

  }

  interface NodeIKernelAvatarListenerConstructorOptions {
    onAvatarChanged: () => void
    onGroupAvatarChanged: () => void
    onGroupPortraitChanged: () => void
    onAvatarChangedForUin: () => void
  }
  class NodeIKernelAvatarListener {
    constructor(options: NodeIKernelAvatarListenerConstructorOptions)
  }
  class NodeIKernelAvatarService {
    addAvatarListener(listener: NodeIKernelAvatarListener): number
  }

  interface NodeIKernelAVSDKListenerConstructorOptions {
    onActionToAVSDK: () => void
    OnInviteActionToAVSDK: () => void
    OnGroupVideoActionToAVSDK: () => void
    OnGroupVideoServerPushToAVSDK: () => void
    OnGroupVideoMemNumPushInfo: () => void
    onGroupAudioMemNumChange: () => void
    onGroupVideoInviteMemberUpdate: () => void
    onRecvGroupVideoJsonBufferRsp: () => void
  }
  class NodeIKernelAVSDKListener {
    constructor(options: NodeIKernelAVSDKListenerConstructorOptions)
  }
  class NodeIKernelAVSDKService {
    addKernelAVSDKListener(listener: NodeIKernelAVSDKListener): void
  }

  interface NodeIKernelBuddyListenerConstructorOptions {
    onBuddyListChange: () => void
    onBuddyInfoChange: () => void
    onBuddyDetailInfoChange: () => void
    onNickUpdated: () => void
    onBuddyRemarkUpdated: () => void
    onAvatarUrlUpdated: () => void
    onBuddyReqChange: () => void
    onBuddyReqUnreadCntChange: () => void
    onCheckBuddySettingResult: () => void
    onAddBuddyNeedVerify: () => void
    onSmartInfos: () => void
    onSpacePermissionInfos: () => void
    onDoubtBuddyReqChange: () => void
    onDoubtBuddyReqUnreadNumChange: () => void
    onBlockChanged: () => void
    onAddMeSettingChanged: () => void
    onDelBatchBuddyInfos: () => void
  }
  class NodeIKernelBuddyListener {
    constructor(options: NodeIKernelBuddyListenerConstructorOptions)
  }
  class NodeIKernelBuddyService {
    addKernelBuddyListener(listener: NodeIKernelBuddyListener): number
  }

  interface NodeIKernelCollectionListenerConstructorOptions {
    onDownloadCollectionFileStart: () => void
    onDownloadCollectionFileProgress: () => void
    onDownloadCollectionFileComplete: () => void
    onEditCollectionItemSuccess: () => void
    onCreateNewCollectionItemSuccess: () => void
  }
  class NodeIKernelCollectionListener {
    constructor(options: NodeIKernelCollectionListenerConstructorOptions)
  }
  class NodeIKernelCollectionService {
    addKernelCollectionListener(listener: NodeIKernelCollectionListener): void
  }

  interface NodeIKernelFileAssistantListenerConstructorOptions {
    onSessionListChanged: () => void
    onSessionChanged: () => void
    onFileListChanged: () => void
    onFileSearch: () => void
    onFileStatusChanged: () => void
  }
  class NodeIKernelFileAssistantListener {
    constructor()
  }
  class NodeIKernelFileAssistantService {
    addKernelFileAssistantListener(listener: NodeIKernelFileAssistantListener): number
  }

  interface NodeIKernelGroupListenerConstructorOptions {
    onGroupListUpdate: () => void
    onGroupExtListUpdate: () => void
    onGroupSingleScreenNotifies: () => void
    onGroupNotifiesUpdated: () => void
    onGroupNotifiesUnreadCountUpdated: () => void
    onGroupDetailInfoChange: () => void
    onGroupAllInfoChange: () => void
    onGroupsMsgMaskResult: () => void
    onGroupConfMemberChange: () => void
    onGroupBulletinChange: () => void
    onGetGroupBulletinListResult: () => void
    onMemberListChange: () => void
    onMemberInfoChange: () => void
    onSearchMemberChange: () => void
    onGroupBulletinRichMediaDownloadComplete: () => void
    onGroupBulletinRichMediaProgressUpdate: () => void
    onGroupStatisticInfoChange: () => void
    onJoinGroupNotify: () => void
    onShutUpMemberListChanged: () => void
    onGroupBulletinRemindNotify: () => void
    onGroupFirstBulletinNotify: () => void
    onJoinGroupNoVerifyFlag: () => void
    onGroupArkInviteStateResult: () => void
  }
  class NodeIKernelGroupListener {
    constructor(options: NodeIKernelGroupListenerConstructorOptions)
  }
  class NodeIKernelGroupService {
    addKernelGroupListener(listener: NodeIKernelGroupListener): number
  }

  class NodeIKernelMsgService {
    addKernelMsgListener(listener: NodeIKernelMsgListener): number
    fetchStatusMgrInfo(): Promise<NodeIKernelMsgServiceType.FetchStatusMgrInfoResp>
    getAllGuildUnreadCntInfo(): Promise<NodeIKernelMsgServiceType.GuildUnreadCntInfoResp>
    getOnlineStatusSmallIconBasePath(): Promise<NodeIKernelMsgServiceType.BasePathResp>
    getEmojiResourcePath(a: number): Promise<NodeIKernelMsgServiceType.ResourcePathResp>
    getRichMediaFilePathForGuild(fileInfo: NodeIKernelMsgServiceType.GetRichMediaFilePathForGuildReq): string
    getSingleMsg(peer: PeerInfo, msgSeq: `${number}`): Promise<any>
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
  class NodeIKernelMSFService {
    getMsfStatus(): number
  }

  interface NodeIKernelMsgBackupListenerConstructorOptions {
    onGetRequestMsgBackup: () => void
    onGetRequestMsgRestore: () => void
    onStateChange: () => void
    onRecvChatCount: () => void
    onTransferProgess: () => void
    onTransferSpeed: () => void
    onDisconnection: () => void
  }
  class NodeIKernelMsgBackupListener {
    constructor(options: NodeIKernelMsgBackupListenerConstructorOptions)
  }
  class NodeIKernelMsgBackupService {
    addKernelMsgBackupListener(listener: NodeIKernelMsgBackupListener): void
  }
  class NodeIKernelNodeMiscService {
    getGetFullScreenInfo(): NodeIKernelNodeMiscServiceType.GetFullScreenInfoResp
    getMiniAppPath(): string
    isMiniAppExist(): boolean
    /**
     * 发送日志
     * 
     * @param level 等级，猜的
     * @param module 模块
     * @param log 日志内容
     */
    sendLog(level: number, module: string, log: string): void
    setMiniAppVersion(ver: string): void
    /**
     * 注册系统协议
     * 
     * win + R -> tencent://xxx
     * 
     * @param schemes 协议
     */
    registerSchemes(schemes: string): boolean
    /**
     * 重新发送消息
     * 
     * @param peer 消息所属对象 群/好友
     * @param msgId 消息ID
     */
    resendMsg(peer: PeerInfo, msgId: `${number}`): Promise<SimpleResult>
    addKernelNodeMiscListener(listener: NodeIKernelNodeMiscListener): void
  }

  interface NodeIKernelOnlineStatusListenerConstructorOptions {
    onRecvOnlineStatusPraisePush: () => void
    onRecvLikeStatusResultAfterGetAggregation: () => void
  }
  class NodeIKernelOnlineStatusListener {
    constructor(options: NodeIKernelOnlineStatusListenerConstructorOptions)
  }
  class NodeIKernelOnlineStatusService {
    addKernelOnlineStatusListener(listener: NodeIKernelOnlineStatusListener): number
  }

  interface NodeIKernelProfileLikeListenerConstructorOptions {
    onProfileLikeScidResourceInfo: () => void
  }
  class NodeIKernelProfileLikeListener {
    constructor(options: NodeIKernelProfileLikeListenerConstructorOptions)
  }
  class NodeIKernelProfileLikeService {
    addKernelProfileLikeListener(listener: NodeIKernelProfileLikeListener): number
    setBuddyProfileLike(like: NodeIKernelProfileLikeServiceType.LikeReq): Promise<NodeIKernelProfileLikeServiceType.LikeResp>
  }

  interface NodeIKernelNodeMiscListenerConstructorOptions {
    onLoginFinish: () => void
    onMainWindowAction: () => void
    onQQCloseThenHideUi: () => void
    onQQCloseThenCloseUi: () => void
    onQQCloseThenExit: () => void
    onQQChangeSendKeyButton: () => void
    onQQScreenShotComplete: () => void
    onQQScreenRecordingComplete: () => void
    onQQScreenShotCompleteNT: () => void
    onQQScreenRecordingCompleteNT: () => void
    onQQScreenOCRBegin: () => void
    onQQScreenOCRComplete: () => void
    onQQScreenOCRPublicComplete: () => void
    onQQScreenShotToolReport: () => void
    onQQScreenAgentConnected: () => void
    onQQScreenAgentDisConnected: () => void
    onQQScreenCheckRecordInInCatalina: () => void
    onQQScreenRegisterShortCut: () => void
    onQQScreenCheckVersionAvailableFail: () => void
    onQQScreenLongCaptureEvent: () => void
    onQQShowMainPanel: () => void
    onGetRelaunchParams: () => void
    onGetJumpGuild: () => void
    oncheckIfHaveAvailableSidecarDevice: () => void
    onGetDataFromSidecar: () => void
    onScreenShotToolReportNT: () => void
    onRecvMiniAppMsg: () => void
    onMiniAppConnected: () => void
    onMiniAppDisconnected: () => void
    onMiniAppDownloadComplete: () => void
    onMininAppDownloadProgress: () => void
  }
  class NodeIKernelNodeMiscListener {
    constructor(options: NodeIKernelNodeMiscListenerConstructorOptions)
  }

  interface NodeIKernelProfileListenerConstructorOptions {
    onProfileSimpleChanged: () => void
    onProfileDetailInfoChanged: () => void
    onStatusUpdate: () => void
    onSelfStatusChanged: () => void
  }
  class NodeIKernelProfileListener {
    constructor(options: NodeIKernelProfileListenerConstructorOptions)
  }
  class NodeIKernelProfileService {
    addKernelProfileListener(listener: NodeIKernelProfileListener): number
    getUserSimpleInfo(a: boolean, uid: `u_${string}`[]): Promise<NodeIKernelProfileServiceType.UserSimpleInfoResp>
    getUserDetailInfo(uid: `u_${string}`): Promise<SimpleResult>
  }

  interface NodeIKernelQiDianListenerConstructorOptions {
    onSideBarConfigNotify: () => void
  }
  class NodeIKernelQiDianListener {
    constructor(options: NodeIKernelQiDianListenerConstructorOptions)
  }
  class NodeIKernelQiDianService {
    addKernelQiDianListener(listener: NodeIKernelQiDianListener): number
  }

  interface NodeIKernelQQPlayListenerConstructorOptions {
    onMojoCallback: () => void
  }
  class NodeIKernelQQPlayListener {
    constructor(options: NodeIKernelQQPlayListenerConstructorOptions)
  }
  class NodeIKernelQQPlayService {
    addKernelQQPlayListener(listener: NodeIKernelQQPlayListener): void
    uninit(): void
  }

  interface NodeIKernelRecentContactListenerConstructorOptions {
    onRecentContactListChanged: () => void
    onRecentContactListChangedVer2: () => void
    onGuildDisplayRecentContactListChanged: () => void
    onRecentContactNotification: () => void
    onMsgUnreadCountUpdate: () => void
    onDeletedContactsNotify: () => void
  }
  class NodeIKernelRecentContactListener {

  }
  class NodeIKernelRecentContactService {
    addKernelRecentContactListener(listener: NodeIKernelRecentContactListener): number
    fetchAndSubscribeABatchOfRecentContact(recentContactReq: NodeIKernelRecentContactServiceType.FetchAndSubscribeReq): Promise<NodeIKernelRecentContactServiceType.FetchAndSubscribeResp>
  }

  interface NodeIKernelRemotingListenerConstructorOptions {
    onPenetrateBuffer: () => void
    onReceiveControlRequest: () => void
    onReceiveControlInvite: () => void
    onPeerAccept: () => void
    onConnected: () => void
    onDisConnected: () => void
  }
  class NodeIKernelRemotingListener {
    constructor(options: NodeIKernelRemotingListenerConstructorOptions)
  }
  class NodeIKernelRemotingService {
    addKernelRemotingListener(listener: NodeIKernelRemotingListener): void
  }

  class NodeIKernelRobotService {
    getRobotUinRange(cfg: NodeIKernelRobotServiceType.GetRobotUinRangeReq): Promise<NodeIKernelRobotServiceType.GetRobotUinRangeResp>
  }

  interface NodeIKernelSearchListenerConstructorOptions {
    onSearchResult: () => void
    onSearchGroupResult: () => void
    onSearchLocalInfoResult: () => void
    onSearchBuddyChatInfoResult: () => void
    onSearchGroupChatInfoResult: () => void
    onSearchChatsKeywordsResult: () => void
    onSearchMsgKeywordsResult: () => void
    onSearchFileKeywordsResult: () => void
    onSearchCacheResult: () => void
  }
  class NodeIKernelSearchListener {
    constructor(options: NodeIKernelSearchListenerConstructorOptions)
  }
  class NodeIKernelSearchService {
    addKernelSearchListener(listener: NodeIKernelSearchListener): number
  }

  interface NodeIKernelSettingListenerConstructorOptions {
    onPrivacySettingChanged: () => void
    onVerifyInfoChange: () => void
    onNumSettingChanged: () => void
    onStrSettingChanged: () => void
    onBufferSettingChanged: () => void
    onCleanCacheProgressChanged: () => void
  }
  class NodeIKernelSettingListener {
    constructor(options: NodeIKernelSettingListenerConstructorOptions)
  }
  class NodeIKernelSettingService {
    addKernelSettingListener(listener: NodeIKernelSettingListener): number
    getAutoLoginSwitch(): Promise<any>
    getNeedConfirmSwitch(): Promise<any>
    getSettingForNum(settings: number[]): Promise<NodeIKernelSettingServiceType.GetSettingResp>
    getSettingForStr(settings: number[]): Promise<NodeIKernelSettingServiceType.GetSettingResp>
    setAutoLoginSwitch(on: boolean): Promise<SimpleResult>
  }

  interface NodeIKernelSkinListenerConstructorOptions {
    onThemeInfoChange: () => void
    onCustomThemeInfoChange: () => void
  }
  class NodeIKernelSkinListener {
    constructor(options: NodeIKernelSkinListenerConstructorOptions)
  }
  class NodeIKernelSkinService {
    addKernelSkinListener(listener: NodeIKernelSkinListener): number
  }

  interface NodeIKernelStorageCleanListenerConstructorOptions {
    onCleanCacheProgressChanged: () => void
    onScanCacheProgressChanged: () => void
    onCleanCacheStorageChanged: () => void
    onFinishScan: () => void
    onChatCleanDone: () => void
  }
  class NodeIKernelStorageCleanListener {
    constructor(options: NodeIKernelStorageCleanListenerConstructorOptions)
  }
  class NodeIKernelStorageCleanService {
    addKernelStorageCleanListener(listener: NodeIKernelStorageCleanListener): number
  }

  class NodeIQQNTWrapperEngine {
    constructor()
    initWithDeskTopConfig(config: NodeIQQNTWrapperEngineType.Init, adapter: NodeIGlobalAdapter): boolean
  }

  class NodeIKernelLoginService {
    constructor()
    addKernelLoginListener(listener: NodeIKernelLoginListener): void
    connect(): boolean
    destroy(): void
    getMsfStatus(): number
    getLoginList(): Promise<NodeIKernelLoginServiceType.LoginInfoListResp>
    getLoginMiscData(name: string): Promise<NodeIKernelLoginServiceType.GetLoginMiscDataResp>
    /**
     * 获取登录二维码
     * 
     * 响应数据在监听器里面触发
     */
    getQRCodePicture(): void
    initConfig(config: NodeIKernelLoginServiceType.LoginInitConfig): void
    passwordLogin(login: NodeIKernelLoginServiceType.PasswordLoginReq): Promise<NodeIKernelLoginServiceType.PasswordLoginResp>
    quickLoginWithUin(uin: `${number}`): Promise<NodeIKernelLoginServiceType.QuickLoginResp>
    setLoginMiscData(name: string, value: string): Promise<NodeIKernelLoginServiceType.SetLoginMiscDataResp>
  }
  
  interface NodeIKernelLoginListenerConstructorOptions {
    onLoginConnected: () => void
    onLoginDisConnected: () => void
    onLoginConnecting: () => void
    onQRCodeGetPicture: () => void
    onQRCodeLoginPollingStarted: () => void
    /**
     * 用户扫描了二维码
     * 
     * @returns 
     */
    onQRCodeSessionUserScaned: () => void
    onLoginState: () => void
    onQRCodeLoginSucceed: (info: NodeIKernelLoginListenerType.UserInfo) => void
    onQRCodeSessionFailed: () => void
    onLoginFailed: () => void
    onLogoutSucceed: () => void
    onLogoutFailed: () => void
    onUserLoggedIn: () => void
    onQRCodeSessionQuickLoginFailed: () => void
    onPasswordLoginFailed: () => void
    OnConfirmUnusualDeviceFailed: () => void
    onQQLoginNumLimited: () => void
  }
  class NodeIKernelLoginListener {
    constructor(options: NodeIKernelLoginListenerConstructorOptions);
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
    onRichMediaUploadComplete: () => void
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
  class NodeIKernelMsgListener {
    constructor(options: NodeIKernelMsgListenerConstructorOptions);
  }

  interface NodeIKernelSessionListenerConstructorOptions {
    onNTSessionCreate: () => void
    onGProSessionCreate: () => void
    onSessionInitComplete: (a: number, uid: `u_${string}`) => void
    onOpentelemetryInit: (result: {is_init: boolean, is_report: boolean}) => void
    onUserOnlineResult: () => void
    onGetSelfTinyId: () => void
  }
  class NodeIKernelSessionListener {
    constructor(options: NodeIKernelSessionListenerConstructorOptions)
  }

  interface NodeIKernelUnitedConfigListenerConstructorOptions {
    onUnitedConfigUpdate: () => void
  }
  class NodeIKernelUnitedConfigListener {
    constructor(options: NodeIKernelUnitedConfigListenerConstructorOptions)
  }
  class NodeIKernelUnitedConfigService {
    addKernelUnitedConfigListener(listener: NodeIKernelUnitedConfigListener): void
    /**
     * 拉取配置
     * 
     * 在监听器里面回调
     * @param ids 拉取的配置id
     */
    fetchUnitedCommendConfig(ids: `${string}`[]): void
    loadUnitedConfig(id: string): Promise<NodeIKernelUnitedConfigServiceType.UnitedConfigResp>
    isUnitedConfigSwitchOn(id: string): Promise<NodeIKernelUnitedConfigServiceType.IsUnitedConfigSwitchOnResp>
    registerUnitedConfigPushGroupList(list: string[]): void
  }

  class NodeIOPSafePwdEdit {
    constructor();
    /**
     * 
     * @param p 不知道什么参数 hWndParent
     */
    init(p: number): void
    addOPSafePwdEditListener(listener: NodeIOPSafePwdEditListener): void;
  }

  interface NodeIOPSafePwdEditListenerConstructorOptions {
    onPwdCtrlKeyEvent: () => void
  }
  class NodeIOPSafePwdEditListener {
    constructor(options: NodeIOPSafePwdEditListenerConstructorOptions);
  }

  class NodeIO3MiscService {
    reportAmgomWeather(a: string, b: string, c: string[]): void
  }

  class NodeIQQNTWrapperSession {
    init(config: NodeIQQNTWrapperSessionType.Init, depends: NodeIDependsAdapter, dispatcher: NodeIDispatcherAdapter, sessionListener: NodeIKernelSessionListener): void
    startNT(): string
    getAvatarService(): NodeIKernelAvatarService
    getAVSDKService(): NodeIKernelAVSDKService
    getBuddyService(): NodeIKernelBuddyService
    getCollectionService(): NodeIKernelCollectionService
    getFileAssistantService(): NodeIKernelFileAssistantService
    getGroupService(): NodeIKernelGroupService
    getMSFService(): NodeIKernelMSFService
    getMsgBackupService(): NodeIKernelMsgBackupService
    getMsgService(): NodeIKernelMsgService
    getNodeMiscService(): NodeIKernelNodeMiscService
    getOnlineStatusService(): NodeIKernelOnlineStatusService
    getProfileLikeService(): NodeIKernelProfileLikeService
    getProfileService(): NodeIKernelProfileService
    getQiDianService(): NodeIKernelQiDianService
    getQQPlayService(): NodeIKernelQQPlayService
    getRecentContactService(): NodeIKernelRecentContactService
    getRemotingService(): NodeIKernelRemotingService
    getRobotService(): NodeIKernelRobotService
    getSearchService(): NodeIKernelSearchService
    getSettingService(): NodeIKernelSettingService
    getSkinService(): NodeIKernelSkinService
    getStorageCleanService(): NodeIKernelStorageCleanService
    getUnitedConfigService(): NodeIKernelUnitedConfigService
    offLine(info: NodeIQQNTWrapperSessionType.OfflineReq): Promise<SimpleResult>
  }
  

  class NodeQQNTWrapperUtil {
    constructor()
    emptyWorkingSet(a: number): void
    getNTUserDataInfoConfig(): string
    copyFile(from: string, to: string): boolean
  }
}
/**
 * NodeIQQNTWrapperEngine的参数定义
 */
declare namespace NodeIQQNTWrapperEngineType {
  interface Init {
    base_path_prefix: string

    /**
     * 3 - Windows
     */
    platform_type: number
    app_type: number

    /**
     * 形如：9.9.7-21357
     */
    app_version: string

    /**
     * Windows 10 Pro
     */
    os_version: string
    use_xlog: boolean
    /**
     * 形如：V1_WIN_NQ_9.9.7_21357_GW_B
     */
    qua: `V1_WIN_NQ_${string}_GW_B` | `V1_LNX_NQ_${string}_GW_B`
    global_path_config: {
      desktopGlobalPath: string
    }
    thumb_config: ThumbConfig
  }
  interface ThumbConfig {
    maxSide: number
    minSide: number
    longLimit: number
    density: number
  }
}
declare namespace NodeIDependsAdapterType {

}
declare namespace NodeIKernelLoginListenerType {
  interface UserInfo {
    /**
     * QQ号
     */
    account: `${number}`
    mainAccount: ''
    /**
     * QQ号
     */
    uin: `${number}`
    /**
     * 用户uid
     */
    uid: `u_${string}`
    /**
     * 昵称，实际空
     */
    nickName: ''
    gender: 0
    /**
     * 年龄，实际0
     */
    age: 0
    faceUrl: ''
  }
}
declare namespace NodeIKernelLoginServiceType {
  interface LoginInitConfig {
    machineId: string
    appid: string
    platVer: string
    commonPath: string
    /**
     * 形如：
     * 9.9.7-21357
     */
    clientVer: string
    /**
     * 计算机用户名
     */
    hostName: string
  }
  interface PasswordLoginReq {
    /**
     * QQ号码
     */
    uin: `${number}`,
    /**
     * 密码的MD5
     */
    passwordMd5: string,
    step: number,
    newDeviceLoginSig: string,
    proofWaterSig: string,
    proofWaterRand: string,
    proofWaterSid: string,
  }
  interface PasswordLoginResp {
    result: `${number}`,
    loginErrorInfo: {
      step: number,
      errMsg: string,
      proofWaterUrl: string,
      newDevicePullQrCodeSig: '0x',
      jumpUrl: string,
      jumpWord: string,
      tipsTitle: string,
      tipsContent: string,
    }
  }
  interface LoginInfoListResp {
    result: number
    LocalLoginInfoList: LocalLoginInfo[]
  }
  interface QuickLoginResp {
    /**
     * 0 - 成功
     */
    result: `${number}`,
    loginErrorInfo: {
      step: number,
      errMsg: string,
      proofWaterUrl: string
      newDevicePullQrCodeSig: '0x',
      jumpUrl: string
      jumpWord: string
      tipsTitle: string
      tipsContent: string
    }
  }
  interface GetLoginMiscDataResp {
    result: number
    errMsg: string
    value: string
  }
  interface SetLoginMiscDataResp {
    result: number
    errMsg: string
  }
  interface LocalLoginInfo {
    /**
     * QQ号
     */
    uin: `${number}`
    /**
     * 用户ID
     */
    uid: `u_${string}`
    /**
     * 昵称
     */
    nickName: string
    faceUrl: string
    facePath: string
    loginType: 1 | 2
    /**
     * 是否快速登录
     */
    isQuickLogin: boolean
    /**
     * 是否自动登录
     */
    isAutoLogin: boolean
  }
}

/**
 * 简单响应体
 * 
 * ```js
 * {
 *   result: 0,
 *   errMsg: ''
 * }
 * ```
 */
interface SimpleResult {
  /**
   * 0 - 成功
   */
  result: number
  errMsg: string
}

interface PeerInfo {
  chatType: number,
  peerUid: `${number}` | `u_${string}`,
  guildId: string
}
declare namespace NodeIKernelMsgServiceType {
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
}

declare namespace NodeIKernelNodeMiscServiceType {
  interface GetFullScreenInfoResp {
    in_full_screen: boolean
    is_self: boolean
  }
}

declare namespace NodeIKernelProfileLikeServiceType {
  interface LikeReq {
    friendUid: `u_${string}`,
    sourceId: 71,
    doLikeCount: number,
    doLikeTollCount: 0
  }
  interface LikeResp extends SimpleResult{
    succCounts: number
  }
}

declare namespace NodeIKernelProfileServiceType {
  interface UserSimpleInfoResp {
    result: number
    errMsg: string
  }
}

declare namespace NodeIKernelRecentContactServiceType {
  interface FetchAndSubscribeReq {
    listType: number
    fetchOld: boolean
    count: number
    anchorPointContact: {
      contactId: string
      sortField: string
      pos: number
    }
  }
  interface FetchAndSubscribeResp {
    /**
     * 0 - 成功
     */
    result: number
    errMsg: string
  }
}
declare namespace NodeIKernelRobotServiceType {
  interface GetRobotUinRangeReq {
    justFetchMsgConfig: `${number}`,
    type: number,
    version: number,
    aioKeywordVersion: number
  }
  interface GetRobotUinRangeResp {
    /**
     * 0 - 成功
     */
    result: number
    errMsg: string
    response: {
      version: number,
      robotUinRanges: RobotUinRange[]
    }
  }
  interface RobotUinRange {
    minUin: `${number}`
    maxUin: `${number}`
  }
}
declare namespace NodeIKernelSettingServiceType {
  interface GetSettingResp {
    /**
     * 0 - 成功
     */
    result: number
    errMsg: string
  }
}
declare namespace NodeIKernelUnitedConfigServiceType {
  interface UnitedConfigResp {
    /**
     * 0 - 成功
     */
    result: number
    errMsg: string
    configData: {
      group: `${number}`
      content: string
      isSwitchOn: boolean
      code: number
      isCdn: boolean
      resourcePath: null | string
    }
  }
  interface IsUnitedConfigSwitchOnResp {
    /**
     * 0 - 成功
     */
    result: number
    errMsg: string
    isSwitchOn: boolean
  }
}

declare namespace NodeIQQNTWrapperSessionType {
  interface Init {
    selfUin: `${number}`
    selfUid: `u_${string}`
    desktopPathConfig: {
      account_path: string
    }
    /**
     * 客户端版本
     * 
     * 形如：
     * 9.9.7-21357
     */
    clientVer: string
    a2: string
    d2: string
    d2Key: string
    machineId: string
    /**
     * 3 - Windows
     */
    platform: 3
    /**
     * Widnows 版本
     */
    platVer: string
    /**
     * 
     */
    appid: `${number}`
    rdeliveryConfig: {
      appKey: '',
      systemId: 0,
      appId: '',
      logicEnvironment: '',
      platform: 3,
      language: '',
      sdkVersion: '',
      userId: '',
      appVersion: '',
      osVersion: '',
      bundleId: '',
      serverUrl: '',
      fixedAfterHitKeys: [ '' ]
    }
    /**
     * 默认下载路径
     */
    defaultFileDownloadPath: string
    deviceInfo: NTNativeWrapper.DeviceInfo
    /**
     * 示例：
     * 
     * {"appearance":{"isSplitViewMode":true},"msg":{}}
     */
    deviceConfig: string
  }
  interface OfflineReq {
    deviceInfo: {
      /**
       * 每次启动都不一样
       */
      guid: `${string}-${string}-${string}-${string}-${string}`,
      /**
       * 构建版本
       * 
       * 形如：9.9.7-21357
       */
      buildVer: string,
      /**
       * 形如：2052
       * 
       * 不知道是否与版本有关
       */
      localId: number,
      /**
       * 计算机用户名
       */
      devName: string,
      /**
       * 系统类型
       * 
       * Windows_NT
       */
      devType: 'Windows_NT',
      vendorName: string,
      /**
       * 系统版本
       */
      osVer: string,
      /**
       * 形如：win32
       */
      vendorOsName: string,
      /**
       * 静音
       */
      setMute: boolean,
      vendorType: 0
    }
  }
}


declare module 'ntwrapper' {
  export = NTNativeWrapper.CrossProcessExports
}
