import { BotMessage } from "../common/interfaces"

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
 * 对给对面ws的
 */
export interface MessageData {
  message_id: string
  message_seq: string
  group_id: number
  sender_uid: string
  sender_id: number
  sender_member_name: string
  elements: BotMessage.BotMsgBase[]
}