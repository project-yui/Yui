
/// <reference types="node" />


/**
 * native层
 */
declare namespace NTNativeWrapper {
  class NTBaseClass {
    isNull(): boolean
  }
  namespace CrossProcessExports2 {
    const useWrapper: (idx: number) => typeof CrossProcessExports
  }
  namespace CrossProcessExports {
    const NodeIGlobalAdapter: typeof import("./adapters/NodeIGlobalAdapter").NodeIGlobalAdapter
    const NodeIKernelLoginService: typeof import("./services/NodeIKernelLoginService").NodeIKernelLoginService
    const NodeIQQNTWrapperEngine: typeof NTNativeWrapper.NodeIQQNTWrapperEngine
    const NodeQQNTWrapperUtil: NTNativeWrapper.NodeQQNTWrapperUtil
    const NodeIQQNTWrapperSession: typeof NTNativeWrapper.NodeIQQNTWrapperSession
    const NodeIQQNTStartupSessionWrapper: typeof NTNativeWrapper.NodeIQQNTStartupSessionWrapper
    const NodeIKernelUnitedConfigService: typeof import("./services/NodeIKernelUnitedConfigService").NodeIKernelUnitedConfigService
    const NodeIDependsAdapter: typeof import("./adapters/NodeIDependsAdapter").NodeIDependsAdapter
    const NodeIDispatcherAdapter: typeof import("./adapters/NodeIDispatcherAdapter").NodeIDispatcherAdapter
  }
  interface CrossProcessExportsInterface {
    NodeIGlobalAdapter: typeof import("./adapters/NodeIGlobalAdapter").NodeIGlobalAdapter
    NodeIKernelLoginService: typeof import("./services/NodeIKernelLoginService").NodeIKernelLoginService
    NodeIQQNTWrapperEngine: typeof NTNativeWrapper.NodeIQQNTWrapperEngine
    NodeIQQNTWrapperSession: typeof NTNativeWrapper.NodeIQQNTWrapperSession
    NodeQQNTWrapperUtil: typeof NTNativeWrapper.NodeQQNTWrapperUtil
    NodeIQQNTStartupSessionWrapper: typeof NTNativeWrapper.NodeIQQNTStartupSessionWrapper
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

  interface SSOFilter {
    ssoRetCode: number
    trpcRetCode: number
    trpcFuncCode: number
    errorMsg: string
    pbBuffer: string
    rpcMap: {
      entries: () => void
      next: () => void
    }
  }
  class NodeIQQNTWrapperEngine {
    constructor()
    get(): typeof NodeIQQNTWrapperEngine
    getDeviceInfo(): any
    getECDHService(): import('./services/NodeIKernelECDHService').NodeIKernelECDHService
    initWithDeskTopConfig(config: NodeIQQNTWrapperEngineType.Init, adapter: import("./adapters/NodeIGlobalAdapter").NodeIGlobalAdapter): boolean
    initWithMobileConfig(config: NodeIQQNTWrapperEngineType.Init, adapter: import("./adapters/NodeIGlobalAdapter").NodeIGlobalAdapter): boolean
    onSendSSOReply(a: number, a2: number, a3: number, a4: number, a5: SSOFilter): void
  }

  // #endregion

  class NodeIOPSafePwdEdit {
    constructor();
    /**
     * 
     * @param p 不知道什么参数 hWndParent
     */
    init(p: number): void
    addOPSafePwdEditListener(listener: NodeIOPSafePwdEditListener): void;
    get(): typeof NodeIOPSafePwdEdit
  }

  interface NodeIOPSafePwdEditListenerConstructorOptions {
    onPwdCtrlKeyEvent: () => void
  }
  class NodeIOPSafePwdEditListener {
    constructor(options: NodeIOPSafePwdEditListenerConstructorOptions);
  }

  class NodeIO3MiscService {
    reportAmgomWeather(a: string, b: string, c: string[]): void
    get(): typeof NodeIO3MiscService
  }
  class NodeIQQNTStartupSessionWrapper {
    static create(): NodeIQQNTStartupSessionWrapper
    start(): void
    stop(): void
    getSessionIdList(): Map<string, string>
  }
  class NodeIQQNTWrapperSession {
    init(config: NodeIQQNTWrapperSessionType.Init, depends: import("./adapters/NodeIDependsAdapter").NodeIDependsAdapter, dispatcher: import("./adapters/NodeIDispatcherAdapter").NodeIDispatcherAdapter, sessionListener: import("./services/NodeIKernelUixConvertService").NodeIKernelSessionListener): void
    getAvatarService(): import("./services/NodeIKernelAvatarService").NodeIKernelAvatarService
    getAVSDKService(): import("./services/NodeIKernelAVSDKService").NodeIKernelAVSDKService
    getBaseEmojiService(): import('./services/NodeIKernelBaseEmojiService').NodeIKernelBaseEmojiService
    getBuddyService(): import("./services/NodeIKernelBuddyService").NodeIKernelBuddyService
    getCollectionService(): import("./services/NodeIKernelCollectionService").NodeIKernelCollectionService
    getFileAssistantService(): import("./services/NodeIKernelFileAssistantService").NodeIKernelFileAssistantService
    getGroupService(): import("./services/NodeIKernelGroupService").NodeIKernelGroupService
    getMSFService(): import("./services/NodeIKernelMSFService").default
    getMsgBackupService(): import("./services/NodeIKernelMsgBackupService").default
    getMsgService(): import("./services/NodeIKernelMsgService").default
    getNodeMiscService(): import("./services/NodeIKernelNodeMiscService").default
    static getNTWrapperSession(id: string): NodeIQQNTWrapperSession
    getOnlineStatusService(): import("./services/NodeIKernelOnlineStatusService").default
    getProfileLikeService(): import("./services/NodeIKernelProfileLikeService").NodeIKernelProfileLikeService
    getProfileService(): import("./services/NodeIKernelProfileService").NodeIKernelProfileService
    getPublicAccountService(): import("./services/NodeIKernelPublicAccountService").NodeIKernelPublicAccountService
    getQiDianService(): import("./services/NodeIKernelQiDianService").NodeIKernelQiDianService
    getQQPlayService(): import("./services/NodeIKernelQQPlayService").NodeIKernelQQPlayService
    getRecentContactService(): import("./services/NodeIKernelRecentContactService").NodeIKernelRecentContactService
    getRemotingService(): import("./services/NodeIKernelRemotingService").NodeIKernelRemotingService
    getRichMediaService(): import("./services/NodeIKernelRichMediaService").NodeIKernelRichMediaService
    getRobotService(): import("./services/NodeIKernelRobotService").NodeIKernelRobotService
    getSearchService(): import("./services/NodeIKernelSearchService").NodeIKernelSearchService
    getSettingService(): import("./services/NodeIKernelSettingService").NodeIKernelSettingService
    getSkinService(): import("./services/NodeIKernelSkinService").NodeIKernelSkinService
    getStorageCleanService(): import("./services/NodeIKernelStorageCleanService").NodeIKernelStorageCleanService
    getUixConvertService(): import("./services/NodeIKernelUixConvertService").NodeIKernelUixConvertService
    getUnitedConfigService(): import("./services/NodeIKernelUnitedConfigService").NodeIKernelUnitedConfigService
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
    qua: `V1_WIN_NQ_${string}_GW_B` | `V1_LNX_NQ_${string}_GW_B` | `V1_AND_SQ_${string}_YYB_D`
    global_path_config: {
      desktopGlobalPath?: string
      mobileGlobalDBPath?: string
      mobileGlobalDataPath?: string
      mobileGlobalTempPath?: string
      base_path_prefix?: string
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
    externalVersion: boolean
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

declare namespace NodeIKernelStorageCleanServiceType {
  interface AddNewDownloadOrUploadFileReq {
    msgId: `${number}`
    forwardSubMsgId: `${number}`
    peerUid: string
    chatType: number
    fileTime: string
    fileName: string
    fileSize: string
    filePath: string
    wildFile: boolean
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
interface SimpleResult<T = any> {
  /**
   * 0 - 成功
   */
  result: number
  errMsg: string
  data?: T
}

interface PeerInfo {
  /**
   * 1 - 好友
   * 
   * 2 - 群聊消息
   * 
   * 4 - 频道
   * 
   */
  chatType: number,
  /**
   * 群号或者用户id
   */
  peerUid?: `${number}` | `u_${string}` | '',
  guildId?: string
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
    // sysPath: string
    // userPath: string
    // gproDBName: string
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
     * 5 - Linux
     */
    platform: 3 | 5
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
      platform: 3 | 5,
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
    deviceType: 3
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
  export = NTNativeWrapper.CrossProcessExports2
}
