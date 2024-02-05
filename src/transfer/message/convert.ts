import fs from "fs";
import { downloadFile, getImageInfo } from "../../common/file";
import { NTReceiveMessageType } from "../../ntqq/message/interfaces";
import { NTSendMessageType } from "../../ntqq/message/interfaces";
import { BotMessage } from "../../onebot/common/message";
import { useLogger } from "../../common/log";
import { getRichMediaFilePathForGuild } from "../../ntqq/common/nt-api";
import { copyFile, getFileType } from "../../ntqq/common/fs-api";

const log = useLogger('Convert')

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
                url: `https://gchat.qpic.cn${p.originImageUrl}`,
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
        log.info('element type: image')
        if (!msg.data.pic) break
        // 获取图片基本信息
        const src = msg.data.pic
        let info = src.md5 ? {
          width: src.width,
          height: src.height,
          md5: src.md5,
          size: src.size,
        } : undefined
        if (src.path == null || !fs.existsSync(src.path)) {
          // 文件路径有问题，检查是否有网络地址
          if (!src.url) throw new Error(`File does not exists! ${src.path}`)
          log.info(`开始从网络地址下载图片：${src.url}`)
          src.path = await downloadFile(src.url)
          log.info('获取图片信息')
          info = await getImageInfo(src.path)
          if (!info) {
            log.info('图片信息获取失败')
            throw new Error('Failed to get information of image')
            // return undefined
          }
          log.info('src path:', src.path)
          // const fileType = await getFileType(src.path)
          // log.info('file type:', fileType)
          // get real storage path
          const realPath = await getRichMediaFilePathForGuild(info.md5, `${info.md5}.jpg`)
          log.info('real path:', realPath)
          // copy
          const ret = await copyFile(src.path, realPath)
          // rm temp
          if (ret) {
            // 删除图片
            fs.rmSync(src.path)
            src.path = realPath
          }
        }
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
            picSubType: 0,
            sourcePath: src.path,
            thumbPath: undefined,
            picType: 1001,
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