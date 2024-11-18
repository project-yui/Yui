
interface NTMsgPeer {
  /**
   * 1 - 好友
   * 
   * 2 - 群
   * 
   */
  chatType: number

  /**
   * 群 - 群号
   * 好友 - 好友的UID
   * 频道 - ？
   */
  peerUid?: `${number}` | `u_${string}` | ''
  guildId?: string
}

/**
 * 向NTTQQ发送消息
 * 
 * 框架 <-> NTQQ
 */
export declare namespace NTSendMessageType {

  /**
   * 发送消息
   * 
   * 框架 -> NTQQ
   */
  export interface SendRequest {
    msgId: `${number}`
    peer: NTMsgPeer
    msgElements: MsgElement[]
    msgAttributeInfos: Map<string, any>
  }

  /**
   * 发送消息的结果
   * 
   * NTQQ -> 框架
   */
  export interface SendResponse {
    msgId: `${number}`
    /**
     * 发送失败会出现4096
     */
    subMsgType: number
  }

  /**
   * 发送转发消息
   * 
   * 框架 -> NTQQ
   */
  export interface SendForwardRequest {
    msgInfos: ForwardMsgItem[]
    srcContact: NTMsgPeer
    dstContact: NTMsgPeer
    commentElements: [],
    msgAttributeInfos: Map<string, any>
  }

  /**
   * 转发消息的内容
   */
  export interface ForwardMsgItem {
    /**
     * 转发内容中特定消息的msgId
     */
    msgId: `${number}`
    /**
     * 展示名
     * 
     * 群昵称 / {QQ昵称}
     */
    senderShowName: string
  }

  /**
   * 发送消息的结果
   * 
   * NTQQ -> 框架
   */
  export interface SendNTResponse {
    result: number
    errMsg: string
  }

  /**
   * 消息类型
   * 
   * 框架 -> NTQQ
   */
  export interface MsgElement {
    /**
     * 消息元素类型
     * 
     * 1 - 纯文本&@ textElement
     * 
     * 2 - 图片 picElement
     * 
     * 3 - 文件 fileElement
     * 
     * 6 - 表情 faceElement
     * 
     * 7 - 引用回复 replyElement
     * 
     * 11 - 商城表情 marketFaceElement
     * 
     */
    elementType: 1 | 2 | 3 | 6 | 7 | 11
    elementId: string

    /**
     * 1 - 纯文本元素
     */
    textElement?: TextElement

    /**
     * 2 - 图片元素
     */
    picElement?: PicElement

    /**
     * 3 - 文件元素
     */
    fileElement?: FileElement

    /**
     * 引用回复元素
     */
    replyElement?: ReplyElement

    /**
     * 图片元素的额外参数
     */
    extBufForUI?: string
  }

  /**
   * 纯文本
   */
  interface TextElement {
    /**
     * 普通消息 - 字符串
     * 
     * At人员 - @xxx
     */
    content: string
    /**
     * 0 - 没有At
     * 
     * 1 - At全体成员
     * 
     * 2 - At群成员
     * 
     */
    atType: number
    /**
     * At成员 - 具体uid
     * 
     * At全体成员 - all
     * 
     */
    atUid: string
    atTinyId: string
    /**
     * At成员 - 具体uid
     * 
     * At全体成员 - all
     * 
     */
    atNtUid: string
  }

  /**
   * 引用回复
   */
  interface ReplyElement {
    replayMsgId: `${number}`
    replayMsgSeq: `${number}`
    /**
     * 引用消息的内容
     * 
     * 如果时图片，内容是图片的路径
     */
    sourceMsgText: string
    senderUid: `u_${string}`
    senderUidStr: `u_${string}`
    replyMsgClientSeq: string
    replyMsgTime: string
    replyMsgRevokeType: number
    sourceMsgTextElems: [],
    /**
     * 包含图片？
     * 
     * 实际测试：包含图片也是false
     */
    sourceMsgIsIncPic: boolean,
    sourceMsgExpired: boolean,
  }

  /**
   * 图片元素
   */
  interface PicElement {
    md5HexStr: string
    picWidth: number
    picHeight: number
    fileName: string
    fileSize: `${number}`
    original: boolean

    /**
     * 图片类型
     * 
     * 0 - 普通图片
     * 
     * 1 - 表情
     */
    picSubType: 0 | 1
    sourcePath: string
    thumbPath: string | undefined
    picType: 1000 | 1001 | 2000
    fileUuid: ''
    fileSubId: ''
    thumbFileSize: 0
    summary: string
  }

  /**
   * 文件元素
   */
  interface FileElement {
    fileMd5: '',
    /**
     * 文件名
     */
    fileName: string
    /**
     * 文件路径
     */
    filePath: string
    /**
     * 文件大小
     */
    fileSize: `${number}`,
    /**
     * 高度
     */
    picHeight: number
    /**
     * 宽度
     */
    picWidth: number
    picThumbPath: Map<string, string>
    file10MMd5: '',
    fileSha: '',
    fileSha3: '',
    fileUuid: '',
    fileSubId: '',
    fileBizId: undefined,
    /**
     * 缩略图大小
     */
    thumbFileSize: number
    folderId: undefined
  }

}

/**
 * 从NTTQQ接收消息
 * 
 * NTQQ -> 框架
 */
export declare namespace NTReceiveMessageType {
  /**
   * 每一条消息的信息
   * 
   * NTQQ -> 框架
   * 
   */
  export interface NTMessageItemType {
    msgId: `${number}`
    msgRandom: `${number}`
    msgSeq: `${number}`
    cntSeq: `${number}`
    /**
     * 1 - 好友消息
     * 
     * 2 - 群聊消息
     * 
     * 4 - 频道
     * 
     */
    chatType: 1 | 2 | 4
    /**
     * 2 - 普通消息 ?
     * 
     * 5 - 提示消息 撤回消息/戳一戳 ?
     */
    msgType: 2 | 5
    /**
     * 1 - 普通消息出现?
     * 
     * 4 - ?
     * 
     * 12 - 戳一戳出现
     */
    subMsgType: 1 | 4 | 12
    sendType: 0
    senderUid: `u_${string}`
    /**
     * 群号
     */
    peerUid: `${number}`
    channelId: string
    guildId: string
    guildCode: `${number}`
    fromUid: `${number}`
    fromAppid: `${number}`
    msgTime: `${number}`
    msgMeta: "0x"
    sendStatus: 2
    sendRemarkName: string
    /**
     * 用户的群昵称
     */
    sendMemberName: string
    /**
     * 用户QQ昵称
     */
    sendNickName: string
    guildName: string
    channelName: string
    /**
     * 消息元素
     * 
     * 一条消息会由一个至多个消息元素组成
     */
    elements: NTMessageElementType[]
    /**
     * 引用回复会用到
     */
    records: NTMessageItemType[]
    emojiLikesList: []
    commentCnt: `${number}`
    directMsgFlag: 0
    directMsgMembers: []
    peerName: string
    freqLimitInfo: null
    editable: boolean
    avatarMeta: string
    avatarPendant: string
    feedId: string
    roleId: `${number}`
    timeStamp: `${number}`
    clientIdentityInfo: null
    isImportMsg: boolean
    atType: number
    roleType: number
    fromChannelRoleInfo: {
      roleId: "0"
      name: ""
      color: 0
    }
    fromGuildRoleInfo: {
      roleId: "0"
      name: ""
      color: 0
    }
    levelRoleInfo: {
      roleId: "0"
      name: ""
      color: 0
    }
    recallTime: `${number}`
    isOnlineMsg: boolean
    generalFlags: "0x"
    clientSeq: `${number}`
    fileGroupSize: null
    foldingInfo: null
    multiTransInfo: null
    senderUin: `${number}`
    peerUin: `${number}`
    msgAttrs: {}
    anonymousExtInfo: null
    nameType: number
    avatarFlag: number
    extInfoForUI: null
    personalMedal: null
    categoryManage: number
  }

  /**
   * 消息元素数据
   */
  export interface NTMessageElementType {
    /**
     * 消息元素类型
     * 
     * 1 - 纯文本&@ textElement
     * 
     * 2 - 图片 picElement
     * 
     * 5 - 视频 videoElement
     * 
     * 6 - 表情 faceElement
     * 
     * 7 - 引用回复 replyElement
     * 
     * 8 - 提示消息 [撤回]
     * 
     * 10 - ArkElement
     * 
     * 11 - 商城表情 marketFaceElement
     * 
     * 16 - 转发消息 multiForwardMsgElement
     * 
     */
    elementType: 1 | 2 | 5 | 6 | 7 | 8 | 10 | 11 | 16
    elementId: `${number}`
    extBufForUI: "0x"
    textElement?: NTReceiveMessageType.TextElementType
    faceElement?: null
    marketFaceElement?: null
    replyElement?: NTReceiveMessageType.ReplyElementType

    /**
     * 图片元素
     */
    picElement?: NTReceiveMessageType.PicElementType
    pttElement?: null
    videoElement?: null
    grayTipElement?: NTReceiveMessageType.GrayTipElementType
    arkElement?: NTReceiveMessageType.ArkElement
    fileElement?: null
    liveGiftElement?: null
    markdownElement?: null
    structLongMsgElement?: null
    multiForwardMsgElement?: NTReceiveMessageType.MultiForwardMsgElement
    giphyElement?: null
    walletElement?: null
    inlineKeyboardElement?: null
    textGiftElement?: null
    calendarElement?: null
    yoloGameResultElement?: null
    avRecordElement?: null
    structMsgElement?: null
    faceBubbleElement?: null
    shareLocationElement?: null
    tofuRecordElement?: null
  }

  /**
   * 纯文本消息元素
   */
  export interface TextElementType {
    content: string
    /**
     * 0 - 没有@
     * 
     * 1 - @ 全体成员
     * 
     * 2 - @ 特定成员
     */
    atType: 0 | 1 | 2
    atUid: `${number}` | 'all' | ''
    atTinyId: `${number}` | ''
    /**
     * NT QQ中的uid
     */
    atNtUid: `u_${string}` | 'all' | ''
    subElementType: 0
    atChannelId: `${number}` | ''
    linkInfo: null
    atRoleId: `${number}`
    atRoleColor: 0
    atRoleName: string
    needNotify: 0
  }

  /**
   * 视频消息元素
   */
  export interface VideoElementType {
    filePath: string
    fileName: string
    videoMd5: string
    thumbMd5: string
    fileTime: number
    thumbSize: number
    /**
     * 2 - mp4
     */
    fileFormat: number
    fileSize: `${number}`
    thumbWidth: number
    thumbHeight: number
    busiType: 0
    subBusiType: 0
    thumbPath: {}
    transferStatus: 0
    progress: 0
    invalidState: 0
    fileUuid: string
    fileSubId: ""
    fileBizId: null
    originVideoMd5: string
    import_rich_media_context: null
    sourceVideoCodecFormat: 0
  }

  /**
   * 图片消息元素
   */
  export interface PicElementType {
    /**
     * 0 - 普通图片
     * 
     * 1 - 表情图片
     */
    picSubType: 0 | 1
    fileName: `{${string}}.${string}`
    fileSize: `${number}`
    picWidth: number
    picHeight: number
    original: boolean
    md5HexStr: string
    sourcePath: string
    thumbPath: {}
    transferStatus: number
    progress: number
    picType: number
    invalidState: number
    fileUuid: `${number}`
    fileSubId: string
    thumbFileSize: number
    fileBizId:null
    downloadIndex:null
    summary: string
    emojiFrom: null
    emojiWebUrl: null
    emojiAd:{
      url: string
      desc: string
    }
    emojiMall:{
      packageId: number
      emojiId: number
    },
    emojiZplan:{
      actionId: 0,
      actionName: string,
      actionType: 0,
      playerNumber: 0,
      peerUid: `${number}`
      bytesReserveInfo: string
    },
    originImageMd5: string

    /**
     * 图片网络地址
     * 
     * 没有host, https://gchat.qpic.cn/
     * 
     * /gchatpic_new/发送者QQ/群号-uuid-MD5/0
     * 
     * 从剪贴板获取的时候，是空的
     */
    originImageUrl: string | null
    import_rich_media_context: null,
    isFlashPic: boolean
  }

  /**
   * 提示消息元素
   */
  export interface GrayTipElementType {
    /**
     * 提示类型
     * 
     * 1 - 撤回提示
     * 
     * 17 - 戳一戳 出现
     */
    subElementType: 1 | 17
    revokeElement?: {
      operatorTinyId: `${number}`
    }
    jsonGrayTipElement: {
      busiId: `${number}`
      jsonStr: string
    }
  }
  /**
   * type: 6
   * 
   */
  export interface FaceElement {
    faceIndex: number
    faceText: string
    faceType: number
    packId: `${number}`
    stickerId: `${number}`
    sourceType: 1
    stickerType: 1
    resultId: string
    surpriseId: string
    randomType: 1
    imageType: null
    pokeType: null
    spokeSummary: null
    doubleHit: null
    vaspokeId: null
    vaspokeName: null
    vaspokeMinver: null
    pokeStrength: null
    msgType: null
    faceBubbleCount: null
    oldVersionStr: null
    pokeFlag: null
    chainCount: 0
  }

  /**
   * type: 10
   * 
   */
  export interface ArkElement {
    bytesData: ""
    linkInfo: null
    subElementType: null
  }

  /**
   * 转发消息
   * 
   * type: 16
   */
  export interface MultiForwardMsgElement {
    xmlContent: string
    resId: string
    fileName: string
  }
  /**
   * 商城表情消息元素
   */
  export interface MarketFaceElement {
    itemType: 6
    faceInfo: 1
    emojiPackageId: number
    subType: 3
    mediaType: 0
    imageWidth: number
    imageHeight: number
    faceName: string
    emojiId: string
    key: string
    param: null
    mobileParam: null
    sourceType: null
    startTime: null
    endTime: null
    emojiType: number
    hasIpProduct: null
    voiceItemHeightArr: null
    sourceName: null
    sourceJumpUrl: null
    sourceTypeName: null
    backColor: null
    volumeColor: null
    staticFacePath: string
    dynamicFacePath: string
    supportSize: {
                  width: number
                  height: number
                }[]
    apngSupportSize: null
  }

  /**
   * 引用回复消息元素
   */
  export interface ReplyElementType {
    replayMsgId: `${number}`
    replayMsgSeq: `${number}`
    replayMsgRootSeq: `${number}`
    replayMsgRootMsgId: `${number}`
    replayMsgRootCommentCnt: `${number}`
    sourceMsgIdInRecords: `${number}`
    sourceMsgText: string
    sourceMsgTextElems: ReplySourceMsgTextElemType[]
    /**
     * 被引用消息的发送者qq号
     */
    senderUid: `${number}`
    /**
     * 被引用消息的发送者用户id
     */
    senderUidStr: `u_${string}`
    replyMsgClientSeq: `${number}`
    replyMsgTime: `${number}`
    replyMsgRevokeType: 0
    sourceMsgIsIncPic: boolean
    sourceMsgExpired: boolean
    anonymousNickName: null
    originalMsgState: null
  }

  interface ReplySourceMsgTextElemType {
    replyAbsElemType: 1
    textElemContent: string
    faceElem: null
  }
}

/**
 * 消息添加
 * 
 * 消息发送之后，NTBackend会向NTUI层下发新发送的消息
 */
export interface AddMsgType {
  /**
   * 消息Id
   */
  msgId: `${number}`
  subMsgType: number
}

export namespace NTRecallMessage{
  export interface Request {
    peer: NTMsgPeer
    msgIds: `${number}`[]
  }
  export interface Response {
    result: number
    errMsg: string
  }
}