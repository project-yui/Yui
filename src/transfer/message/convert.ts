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
export const convertBotMessage2NTMessage = (elems: BotMessage.SendElement[]): NTSendMessageType.MsgElement[] => {
  const result: NTSendMessageType.MsgElement[] = []
  for (const ele of elems) {
    const r = convertBotMessage2NTMessageSingle(ele)
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
export const convertBotMessage2NTMessageSingle = (msg: BotMessage.SendElement): NTSendMessageType.MsgElement | undefined => {

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
      // TODO: 图片
      {
        if (!msg.data.pic) break
        const pic: NTSendMessageType.MsgElement = {
          elementType: 2,
          elementId: "",
          extBufForUI: '',
          picElement: {
            md5HexStr: "f759efe0f975b7aa5ddc27386d71d4f1",
            picWidth: 625,
            picHeight: 608,
            fileName: "f759efe0f975b7aa5ddc27386d71d4f1.jpg",
            fileSize: "187249",
            original: true,
            picSubType: 0,
            sourcePath: "D:\\Users\\jiyec\\Documents\\Tencent Files\\335438501\\nt_qq\\nt_data\\Pic\\2024-01\\Ori\\f759efe0f975b7aa5ddc27386d71d4f1.jpg",
            picType: 1000,
            fileUuid: "",
            fileSubId: "",
            thumbFileSize: 0,
            summary: ""
          },
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