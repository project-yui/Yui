import { BotMessage } from "../common/message"

/**
 * 事件数据
 */
export interface EventDataType<T> {
  id?: string
  time: number
  self: BotUserInfo
  /**
   * 事件类型
   */
  type: 'meta' | 'message' | 'notice' | 'request'
  /**
   * 事件详细类型
   */
  detail_type: string
  /**
   * 事件子类型（详细类型的下一级类型）
   */
  sub_type: string
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
 * 回给对面ws的
 */
export interface MessageData {
  message_id: string
  message_seq: string
  group_id: number

  /**
   * 发送者uid
   */
  sender_uid: `u_${string}`

  /**
   * 发送者QQ
   */
  sender_id: number
  sender_member_name: string

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
  message_id: string
  message_seq: string
  group_id: number
  sender_uid: string
  sender_id: number
  sender_member_name: string

  /**
   * 撤回消息的时间
   */
  time: number
}