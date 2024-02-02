import { getImageInfo } from "../../common/file";
import { NTReceiveMessageType } from "../../ntqq/message/interfaces";
import { NTSendMessageType } from "../../ntqq/message/interfaces";
import { BotMessage } from "../../onebot/common/message";

/**
 * NTQQ的消息转bot消息
 * 
 * @param elems 来自NTQQ的消息
 * @returns 给bot的消息
 */
export const convertNTMessage2BotMessage = (elems: NTReceiveMessageType.NTMessageElementType[]): BotMessage.ReceiveElement[] => {
  const result: BotMessage.ReceiveElement[] = []
  for (const ele of elems) {
    switch (ele.elementType) {
      case 1:
        // 纯文本
        {
          const text: BotMessage.ReceiveElement = {
            type: 'text',
            data: {
              text: ele.textElement.content
            }
          }
          // TODO: 对@的处理
          result.push(text)
        }
        break;
      case 2:
        // 图片
        {
          const p = ele.picElement
          const pic: BotMessage.ReceiveElement = {
            type: 'image',
            data: {
              pic: {
                type: p.picSubType === 0 ? 'simple' : 'emoji',
                width: p.picWidth,
                height: p.picHeight,
                size: parseInt(p.fileSize),
                md5: p.md5HexStr,
                uuid: p.fileUuid,
                url: p.originImageUrl,
                path: p.sourcePath,
              }
            }
          }
          result.push(pic)
        }
        break;
      case 5:
        // 视频
        break;
      case 6:
        // 表情
        break;
      case 7:
        // 引用回复
        {
          const reply: BotMessage.ReceiveElement = {
            type: 'reply',
            data: {
              reply: {
                msgId: ele.replyElement.replayMsgId,
                msgSeq: ele.replyElement.replayMsgSeq,
                text: ele.replyElement.sourceMsgText,
                uid: ele.replyElement.senderUidStr,
              }
            }
          }
          result.push(reply)
        }
        break;
      case 11:
        // 商城表情
        break;
    
      default:
        break;
    }
  }
  return result
}

/**
 * bot消息转NTQQ的消息
 * 
 * @param elems 来自bot的消息
 * @returns 给NTQQ的消息
 */
export const convertBotMessage2NTMessage = async (elems: BotMessage.SendElement[]): Promise<NTSendMessageType.MsgElement[]> => {
  const result: NTSendMessageType.MsgElement[] = []
  for (const ele of elems) {
    const r = await convertBotMessage2NTMessageSingle(ele)
    if (r !== undefined) {
      result.push(r)
    }
  }
  return result
}

/**
 * bot消息转NTQQ的消息
 * 
 * @param msg 来自bot的消息
 * @returns 给NTQQ的消息
 */
export const convertBotMessage2NTMessageSingle = async (msg: BotMessage.SendElement): Promise<NTSendMessageType.MsgElement | undefined> => {

  switch (msg.type) {
    case 'text':
      // 纯文本
      {
        if (!msg.data.text) break
        const text: NTSendMessageType.MsgElement = {
          elementType: 1,
          elementId: "",
          textElement: {
            content: msg.data.text,
            atType: 0,
            atUid: "",
            atTinyId: "",
            atNtUid: ""
          }
        }
        // TODO: 对@的处理
        return text
      }
      break;
    case 'mention':
      // At
      {
        if (!msg.data.at) break
        const text: NTSendMessageType.MsgElement = {
          elementType: 1,
          elementId: "",
          textElement: {
            content: `@${msg.data.at.isAll ? '全体成员' : msg.data.at.name}`,
            atType: msg.data.at.isAll ? 1 : 2,
            atUid: `${msg.data.at.isAll ? 'all' : msg.data.at.uid}`,
            atTinyId: "",
            atNtUid: `${msg.data.at.isAll ? 'all' : msg.data.at.uid}`,
          }
        }
        // TODO: 对@的处理
        return text
      }
      break;
    case 'image':
      {
        if (!msg.data.pic) break
        // 获取图片基本信息
        const src = msg.data.pic
        const info = src.md5 ? {
          width: src.width,
          height: src.height,
          md5: src.md5,
          size: src.size,
        } : await getImageInfo(src.path)
        if (!info) return undefined

        const pic: NTSendMessageType.MsgElement = {
          elementType: 2,
          elementId: "",
          picElement: {
            md5HexStr: info.md5,
            picWidth: info.width,
            picHeight: info.height,
            fileName: `${info.md5}.jpg`,
            fileSize: `${info.size}`,
            original: true,
            picSubType: src.type === 'simple' ? 0 : 1,
            sourcePath: src.path,
            thumbPath: undefined,
            picType: 1000,
            fileUuid: "",
            fileSubId: "",
            thumbFileSize: 0,
            summary: ""
          },
          extBufForUI: '',
        }
        return pic
      }
      break;
    case 'video':
      // 视频
      break;
    // case '':
    //   // 表情
    //   break;
    case 'reply':
      // TODO:引用回复
      {
        if (!msg.data.reply) break
        const reply: NTSendMessageType.MsgElement = {
          elementType: 7,
          elementId: "",
          replyElement: {
            replayMsgId: `${msg.data.reply.msgId}`,
            replayMsgSeq:  `${msg.data.reply.msgSeq}`,
            sourceMsgText:  `${msg.data.reply.text}`,
            senderUid:  `${msg.data.reply.uid}`,
            senderUidStr:  `${msg.data.reply.uid}`,
            replyMsgClientSeq: "",
            replyMsgTime: "",
            replyMsgRevokeType: 0,
            sourceMsgTextElems: [],
            sourceMsgIsIncPic: false,
            sourceMsgExpired: false,
          }
        }
        return reply
      }
      break;
    // case 'marketFace':
    //   // 商城表情
    //   break;
  
    default:
      break;
  }

}