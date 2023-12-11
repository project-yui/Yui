import { BotActionParams } from "../actions/interfaces"

export declare namespace BotMessage {

  /**
   * 发送消息
   */
  export interface SendMsg extends BotActionParams {
    detail_type: 'private' | 'group'
    group_id?: string
    user_id?: string
    message: BotMsgBase[]
  }

  /**
   * 撤回消息
   */
  export interface DeleteMsg {
    message_id: string
  }

  /**
   * 消息基础类型
   */
  export interface BotMsgBase {
    type: 'text' | 'mention' | 'mention_all' | 'image' | 'vioce' | 'audio' | 'video' | 'file' | 'location' | 'reply'
    data: {
      /**
       * 纯文本的内容
       */
      text?: string
      /**
       * 图像等的文件ID
       * 
       * 待定
       */
      file_id?: string
      /**
       * At时的对象ID
       * 
       * 待定
       * 
       * 注意区分 [全体成员] 与 [群成员]
       */
      at?: AtElement
      /**
       * 引用回复的信息
       */
      reply?: ReplyElement
    }
  }

  interface ReplyElement {
    /**
     * 消息ID
     */
    msgId: `${number}`
    /**
     * 消息序列
     */
    msgSeq: `${number}`
    /**
     * 源消息的文字内容
     */
    text: string
    /**
     * 源消息发送者的id
     */
    uid: `u_${string}`
  }

  interface AtElement {
    /**
     * 是否是全体成员
     */
    isAll: boolean
    /**
     * 用户ID
     * 
     * 
     */
    uid: string
    name?: string
  }

  /**
   * 位置消息
   */
  export interface Location {
    latitude: number
    longitude: number
    title: string
    content: string
  }

  /**
   * 引用回复消息
   */
  export interface Reply {
    message_id: string
    user_id: string
  }
}

export interface UserDetailInfoType {
  info: {
    /**
     * 唯一标识
     */
    uid: `u_${string}`
    qid: string
    /**
     * QQ号
     */
    uin: string
    /**
     * QQ昵称
     */
    nick: string
    remark: string
    longNick: string
    avatarUrl: string
    birthday_year: number
    birthday_month: number
    birthday_day: number
    /**
     * 2 - 女
     */
    sex: number
    regTime: number
  }
}

/**
 * 当前账户信息
 */
export interface CurrentAccountInfo {
  /**
   * qq号
   */
  account: string
  mainAccount: string
  /**
   * qq号
   */
  uin: string
  uid: `u_${string}`
  nickName: string
  gender: number
  age: number
  faceUrl: string
  a2: string
  d2: string
  d2key: string
}