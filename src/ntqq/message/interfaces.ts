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
    msgId: string
    peer: MsgPeer
    msgElements: MsgElement[]
    msgAttributeInfos: Map<string, any>
  }

  /**
   * 发送消息的结果
   * 
   * NTQQ -> 框架
   */
  export interface SendResponse {
  }

  export interface MsgElement {
    /**
     * 消息元素类型
     * 
     * 1 - 纯文本&@ textElement
     * 
     * 2 - 图片 picElement
     * 
     * 6 - 表情 faceElement
     * 
     * 7 - 引用回复 replyElement
     * 
     * 11 - 商城表情 marketFaceElement
     * 
     */
    elementType: 1 | 2 | 6 | 7 | 11
    elementId: string
    textElement?: TextElement
    replyElement?: ReplyElement
  }

  interface MsgPeer {
    /**
     * 1 - ?
     * 
     * 2 - 发送给群
     * 
     */
    chatType: number
    peerUid: string
    guildId: string
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

}

/**
 * 从NTTQQ接收消息
 * 
 * NTQQ -> 框架
 */
export declare namespace NTReceiveMessageType {
  /**
   * 消息事件的payload
   * 
   * NTQQ -> 框架
   * 
   */
  export interface NTMessagePayloadType {
    msgList: NTMessageItemType[]
  }

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
     * 2 - 群聊消息
     * 
     */
    chatType: 1 | 2
    msgType: 2
    subMsgType: 1
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
    records: []
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
     * 11 - 商城表情 marketFaceElement
     * 
     */
    elementType: 1 | 2 | 5 | 6 | 7 | 11
    elementId: `${number}`
    extBufForUI: "0x"
    textElement: NTReceiveMessageType.TextElementType
    faceElement: null
    marketFaceElement: null
    replyElement: NTReceiveMessageType.ReplyElementType

    /**
     * 图片元素
     */
    picElement: NTReceiveMessageType.PicElementType
    pttElement: null
    videoElement: null
    grayTipElement: null
    arkElement: null
    fileElement: null
    liveGiftElement: null
    markdownElement: null
    structLongMsgElement: null
    multiForwardMsgElement: null
    giphyElement: null
    walletElement: null
    inlineKeyboardElement: null
    textGiftElement: null
    calendarElement: null
    yoloGameResultElement: null
    avRecordElement: null
    structMsgElement: null
    faceBubbleElement: null
    shareLocationElement: null
    tofuRecordElement: null
  }



  /**
   * 纯文本消息元素
   */
  export interface TextElementType {
    content: string
    /**
     * 0 - 没有@
     * 1 - @ 全体成员
     * 2 - 有@
     */
    atType: 0 | 2
    atUid: `${number}`
    atTinyId: `${number}`
    /**
     * NT QQ中的uid
     */
    atNtUid: string
    subElementType: 0
    atChannelId: `${number}`
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
    picSubType: 0
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
    originImageMd5: string,
    originImageUrl: string,
    import_rich_media_context: null,
    isFlashPic: boolean
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