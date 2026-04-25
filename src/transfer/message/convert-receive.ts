import { getConfig } from "../../store/config";
import { NTReceiveMessageType } from "../../ntqq/message/interfaces";
import { BotMessage } from "../../onebot/contracts/message";
import { BotMessageData } from "../../onebot/contracts/event";

/**
 * 对NT消息元素进行转换，生成Bot消息元素
 */
export class NTMessageConverter {
  private peer: PeerInfo
  private msgId: `${number}`
  private msg: NTReceiveMessageType.NTMessageItemType
  constructor(msg: NTReceiveMessageType.NTMessageItemType) {
    this.peer = {
      chatType: msg.chatType,
      peerUid: msg.peerUid,
      guildId: ''
    }
    this.msgId = msg.msgId
    this.msg = msg
  }
  private buildReceiveImageUrl(element: NTReceiveMessageType.NTMessageElementType) {
    const p = element.picElement
    if (!p?.originImageUrl) {
      return p?.originImageUrl ?? null
    }
    let url = p.originImageUrl
    if (url.startsWith('/gchatpic_new')) {
      return `https://gchat.qpic.cn${url}`
    }
    if (url.startsWith('/download')) {
      const cfg = getConfig()
      /**
       * downloadType:
       * 1 - 缩略图
       * 2 - 原图, 表情包
       */
      let downloadType = 1
      if (p.sourcePath.includes('/Emoji/')) {
        downloadType = 2
      } else if (p.sourcePath.includes('/Thumb/')) {
        downloadType = 1
      } else if (p.sourcePath.includes('/Ori/')) {
        downloadType = 2
      }
      return `http://${cfg.yui.http.host}:${cfg.yui.http.port}/downloadRichMedia?file_model_id=0&down_source_type=0&trigger_type=1&msg_id=${this.msgId}&chat_type=${this.peer.chatType}&peer_uid=${this.peer.peerUid}&element_id=${element.elementId}&thumb_size=0&download_type=${downloadType}&file_path=${encodeURIComponent(p.sourcePath)}`
    }
    return url ?? null
  }
  private convertElement(ele: NTReceiveMessageType.NTMessageElementType): BotMessage.ReceiveElement | undefined {
    switch (ele.elementType) {
      case 1:
        if (ele.textElement) {
          const cur = ele.textElement
          if (cur.atType === 2) {
            return {
              type: 'mention',
              data: {
                at: {
                  isAll: false,
                  uid: cur.atNtUid as `u_${string}`,
                  uin: parseInt(cur.atTinyId),
                  name: cur.content,
                }
              }
            }
          }
          if (cur.atType === 1) {
            return {
              type: 'mention',
              data: {
                at: {
                  isAll: true,
                  uid: 'all',
                  uin: 0,
                  name: cur.content,
                }
              }
            }
          }
          return {
            type: 'text',
            data: {
              text: ele.textElement.content
            }
          }
        }
        break
      case 2:
        if (ele.picElement) {
          const p = ele.picElement
          return {
            type: 'image',
            data: {
              pic: {
                type: p.picSubType === 0 ? 'simple' : 'emoji',
                width: p.picWidth,
                height: p.picHeight,
                size: parseInt(p.fileSize),
                md5: p.md5HexStr,
                uuid: p.fileUuid,
                url: this.buildReceiveImageUrl(ele),
                path: p.sourcePath,
              }
            }
          }
        }
        break
      case 7:
        if (ele.replyElement) {
          return {
            type: 'reply',
            data: {
              reply: {
                srcMsgId: ele.replyElement.sourceMsgIdInRecords,
                msgSeq: ele.replyElement.replayMsgSeq,
                text: ele.replyElement.sourceMsgText,
                senderUin: ele.replyElement.senderUid,
                senderUid: ele.replyElement.senderUidStr,
              }
            }
          }
        }
        break
      default:
        return undefined
        break
    }
  }
  private convertRecord(ele: NTReceiveMessageType.NTMessageItemType): BotMessageData {
    const ret: BotMessageData = {
      messageId: ele.msgId,
      messageSeq: ele.msgSeq,
      groupId: 0,
      groupName: '',
      senderId: parseInt(ele.senderUin),
      senderUid: ele.senderUid,
      senderMemberName: ele.sendMemberName,
      time: parseInt(ele.msgTime),
      elements: ele.elements.map(e => this.convertElement(e)).filter((e): e is BotMessage.ReceiveElement => e !== undefined),
      records: [],
    }
    // 引用消息的图片msgId是根消息的msgId
    ret.records = ele.records.map(e => this.convertRecord(e))
    return ret
  }
  public convert(): BotMessageData {
    const ret: BotMessageData = {
      messageId: this.msg.msgId,
      messageSeq: this.msg.msgSeq,
      groupId: 0,
      groupName: '',
      senderId: parseInt(this.msg.senderUin),
      senderUid: this.msg.senderUid,
      senderMemberName: this.msg.sendMemberName,
      time: parseInt(this.msg.msgTime),
      elements: this.msg.elements.map(ele => this.convertElement(ele)).filter((ele): ele is BotMessage.ReceiveElement => ele !== undefined),
      records: [],
    }
    // 引用消息的图片msgId是根消息的msgId
    ret.records = this.msg.records.map(e => this.convertRecord(e))
    switch (this.peer.chatType) {
      case 2:
        ret.groupId = parseInt(this.msg.peerUid)
        if ('groupName' in ret) {
          ret.groupName = this.msg.peerName
        }
    }
    return ret
  }
}