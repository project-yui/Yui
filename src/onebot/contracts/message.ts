import { BotActionParams } from "./actions"

export declare namespace BotMessage {
  /**
   * 发送消息
   *
   * bot -> framework
   */
  export interface SendMsg extends BotActionParams {
    detailType: 'private' | 'group'
    groupId?: number
    user_id?: string
    message: SendElement[]
  }

  /**
   * 撤回消息
   */
  export interface DeleteMsg extends BotActionParams {
    detailType: 'private' | 'group'
    groupId?: number
    userId?: `u_${string}`
    messageId: `${number}`[]
  }

  /**
   * 消息基础类型
   *
   * bot -> framework
   */
  export interface SendElement {
    type: 'text' | 'mention' | 'mention_all' | 'image' | 'vioce' | 'audio' | 'video' | 'file' | 'location' | 'reply' | 'multiforward'
    data: {
      text?: string
      pic?: BotMessageSendElements.PicElement
      file?: BotMessageSendElements.FileElement
      file_id?: string
      at?: BotMessageSendElements.AtElement
      reply?: BotMessageSendElements.ReplyElement
      forwardData?: BotMessageSendElements.ForwardElement
    }
  }

  /**
   * 消息基础类型
   *
   * framework -> bot
   */
  export interface ReceiveElement {
    type: 'text' | 'mention' | 'mention_all' | 'image' | 'vioce' | 'audio' | 'video' | 'file' | 'location' | 'reply' | 'multiforward'
    data: {
      text?: string
      pic?: BotMessageReceiveElements.PicElement
      fileId?: string
      at?: BotMessageReceiveElements.AtElement
      reply?: BotMessageReceiveElements.ReplyElement
      forwardList?: SendElement[][] | `${number}`[]
    }
  }
}

export declare namespace BotMessageSendElements {
  interface ForwardElement {
    fromType: 'group' | 'friend'
    groupId?: number
    senderId?: `${number}`
    items: ForwardItem[]
  }

  interface ForwardItem {
    msgId?: `${number}`
    senderUin: number
    senderUid: `u_${string}`
    msgTime: number
    senderMemberName: string
    elements: BotMessage.SendElement[]
  }

  interface ReplyElement {
    msgId: `${number}`
    msgSeq: `${number}`
    text: string
    uid: `u_${string}`
    uin: `${number}`
  }

  interface AtElement {
    isAll: boolean
    uin: number
    uid: `u_${string}`
    name?: string
  }

  interface PicElement {
    type: 'simple' | 'emoji'
    width: number
    height: number
    size: number
    md5?: string
    url?: string
    path: string
    pbElem?: Uint8Array
  }

  interface FileElement {
    name: string
    path: string
  }

  export interface Location {
    latitude: number
    longitude: number
    title: string
    content: string
  }

  export interface Reply {
    message_id: string
    user_id: string
  }
}

export declare namespace BotMessageReceiveElements {
  interface ReplyElement {
    srcMsgId: `${number}`
    msgSeq: `${number}`
    text: string
    senderUin: `${number}`
    senderUid: `u_${string}`
  }

  interface AtElement {
    isAll: boolean
    uid: `u_${string}` | 'all'
    uin: number
    name?: string
  }

  interface PicElement {
    type: 'simple' | 'emoji'
    width: number
    height: number
    size: number
    md5: string
    uuid: `${number}`
    url: string | null
    path: string
  }

  export interface Location {
    latitude: number
    longitude: number
    title: string
    content: string
  }

  export interface Reply {
    message_id: string
    user_id: string
  }
}
