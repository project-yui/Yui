import { BotMessage } from "../common/message"

/**
 * 事件数据
 */
export interface EventDataType<T> {
  time: number
  self: BotUserInfo
  /**
   * 事件类型
   */
  type: 'meta' | 'message' | 'notice' | 'request'
  /**
   * 事件详细类型
   */
  detailType: string
  /**
   * 事件子类型（详细类型的下一级类型）
   */
  subType: string
  data: T
}

/**
 * 机器人信息
 */
export interface BotUserInfo { 
  id: number
  uid: `u_${string}`
}

/**
 * 框架回给对面ws的
 */
export interface MessageData {
  messageId: string
  messageSeq: string
  groupId: number
  groupName: string

  /**
   * 发送者uid
   */
  senderUid: `u_${string}`

  /**
   * 发送者QQ
   */
  senderId: number
  senderMemberName: string

  /**
   * 消息的发送时间
   */
  time: number

  /**
   * 消息元素
   */
  elements: BotMessage.ReceiveElement[]

  /**
   * 被引用的消息
   */
  records: MessageData[]
}

/**
 * 撤回消息
 * 
 * 回给对面ws的
 */
export interface RecallMessageData {
  messageId: string
  messageSeq: string
  groupId: number
  senderUid: string
  senderId: number
  senderMemberName: string

  /**
   * 撤回消息的时间
   */
  time: number
}