import fs from "fs";
import { downloadFile, getImageInfo } from "../../common/file";
import { NTReceiveMessageType } from "../../ntqq/message/interfaces";
import { NTSendMessageType } from "../../ntqq/message/interfaces";
import { BotMessage } from "../../onebot/common/message";
import { useLogger } from "../../common/log";
import { getRichMediaFilePathForGuild } from "../../ntqq/common/nt-api";
import { copyFile, getFileType } from "../../ntqq/common/fs-api";
import { useNTCore } from "../../ntqq/core/core";
import { useStore } from "../../store/store";
import { getGroupMemberInfoByUid } from "../../onebot/common/group";

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
          if (ele.textElement) {
            const cur = ele.textElement
            if (cur.atType === 2) {
              // at 特定成员
              const mention: BotMessage.ReceiveElement = {
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
              result.push(mention)
              continue
            }else if (cur.atType === 1) {
              // at 所有
              const mention: BotMessage.ReceiveElement = {
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
              result.push(mention)
              continue
            }
            const text: BotMessage.ReceiveElement = {
              type: 'text',
              data: {
                text: ele.textElement.content
              }
            }
            // TODO: 对@的处理
            result.push(text)
          }
        }
        break;
      case 2:
        // 图片
        {
          const p = ele.picElement
          if (p) {
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
          if (ele.replyElement) {
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
          ext: 'jpg',
        } : undefined
        if (src.path == null || !fs.existsSync(src.path)) {
          // 文件路径有问题，检查是否有网络地址
          if (!src.url) throw new Error(`File does not exists! ${src.path}`)
          log.info(`开始从网络地址下载图片：${src.url}`)
          src.path = await downloadFile(src.url)
        }
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
        const realPath = getRichMediaFilePathForGuild(info.md5, `${info.md5}.${info.ext}`)
        log.info('real path:', realPath)
        // copy
        const ret = copyFile(src.path, realPath)
        // rm temp
        if (ret) {
          // 删除图片
          // fs.rmSync(src.path)
          src.path = realPath
        }
        if (!info) return undefined

        const pic: NTSendMessageType.MsgElement = {
          elementType: 2,
          elementId: "",
          picElement: {
            md5HexStr: info.md5,
            picWidth: info.width,
            picHeight: info.height,
            fileName: `${info.md5}.${info.ext}`,
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
    case 'file':
      // 文件
      {
        log.info('element type: file')
        if (!msg.data.file) break

        const v = msg.data.file
        // getFileSize
        const stat = fs.statSync(v.path)
        const size = stat.size
        // getFileType
        const fileType = getFileType(v.path)

        // if (fileType?.ext === 'mp4'){
        //   // generateThumb --- NodeIKernelMsgService/getFileThumbSavePathForSend(750, true)
        //   const { getWrapperSession } = useNTCore()
        //   const msgService = getWrapperSession().getMsgService()
        //   const thumbPath = msgService.getFileThumbSavePathForSend(750, true)
        //   // 获取视频大小
        //   // NodeIKernelNodeMiscService/getVideoSize -> onVideoSizeChanged
        //   const miscService = getWrapperSession().getNodeMiscService()
        // }

        const pic: NTSendMessageType.MsgElement = {
          elementType: 3,
          elementId: "",
          fileElement: {
            fileMd5: '',
            fileName: v.name,
            filePath: v.path,
            fileSize: `${size}`,
            picHeight: 0,
            picWidth: 0,
            picThumbPath: new Map(),
            file10MMd5: '',
            fileSha: '',
            fileSha3: '',
            fileUuid: '',
            fileSubId: '',
            fileBizId: undefined,
            thumbFileSize: 750,
            folderId: undefined
          },
          extBufForUI: '',
        }
        return pic
      }
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

/**
 * bot消息转NTQQ的消息
 * 
 * @param elems 来自bot的消息
 * @returns 给NTQQ的消息
 */
export const convertBotMessage2NTInnerMessage = async (elems: BotMessage.SendElement[]): Promise<NTReceiveMessageType.NTMessageElementType[]> => {
  const result: NTReceiveMessageType.NTMessageElementType[] = []
  log.info('convert inner msg')
  let eleId = Math.floor(Math.random() * 10e15)
  for (const ele of elems) {
    const r = await convertBotMessage2NTInnerMessageSingle(ele, eleId++)
    if (r !== undefined) {
      result.push(r)
    }
  }
  return result
}

const uploadFile = (peerInfo: any, fileInfo: any) => {
  return new Promise((resolve, reject) => {

    const { getWrapperSession } = useNTCore()
    const session = getWrapperSession()
    log.info('onlyUploadFile:', peerInfo, fileInfo)

    const { registerEventListener } = useStore()
    let listener: undefined | { remove: () => void } = undefined
    listener = registerEventListener('KernelMsgListener/onRichMediaUploadComplete', 'always', (info: NTNativeWrapper.RichMediaUploadResult) => {
        // 同时上传，可能会识别错误，需要判定一下
        log.info('upload result:', info)
        if (info.fileModelId === fileInfo.fileModelId)
        {
            listener?.remove()
            resolve(true)
        }
    })
    session.getRichMediaService().onlyUploadFile(peerInfo, [fileInfo])
    
  })
}
/**
 * bot消息转NTQQ的消息
 * 
 * @param msg 来自bot的消息
 * @returns 给NTQQ的消息
 */
export const convertBotMessage2NTInnerMessageSingle = async (msg: BotMessage.SendElement, eleId: number): Promise<NTReceiveMessageType.NTMessageElementType | undefined> => {

  const result: NTReceiveMessageType.NTMessageElementType = {
    elementType: 1,
    elementId: `${eleId}`,
    extBufForUI: "0x"
  }
  switch (msg.type) {
    case 'text':
      // 纯文本
      {
        if (!msg.data.text) break
        result.textElement = {
            content: msg.data.text,
            atType: 0,
            atUid: "0",
            atTinyId: "0",
            atNtUid: "",
            subElementType: 0,
            atChannelId: '0',
            linkInfo: null,
            atRoleId: '0',
            atRoleColor: 0,
            atRoleName: '',
            needNotify: 0,
          }
      }
      break;
    case 'mention':
      // At
      {
        if (!msg.data.at) break
        result.elementType = 1
        result.textElement = {
            content: `@${msg.data.at.isAll ? '全体成员' : msg.data.at.name}`,
            atType: msg.data.at.isAll ? 1 : 2,
            atUid: msg.data.at.isAll ? 'all' : msg.data.at.uin,
            atTinyId: "",
            atNtUid: `${msg.data.at.isAll ? 'all' : msg.data.at.uid}`,
            subElementType: 0,
            atChannelId: '0',
            linkInfo: null,
            atRoleId: '0',
            atRoleColor: 0,
            atRoleName: '',
            needNotify: 0,
          }
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
        }
        if (src.url){
          log.info('url:', src.url)
          if (!src.url.startsWith('https://gchat.qpic.cn')) {
            src.url = `/external-download?url=${encodeURIComponent(src.url)}`
          }
          else
          {
            src.url = src.url.replace('https://gchat.qpic.cn', '')
          }
          log.info('url:', src.url)
        }
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
        const realPath = getRichMediaFilePathForGuild(info.md5, `${info.md5}.jpg`)
        log.info('real path:', realPath)
        // copy
        const ret = copyFile(src.path, realPath)
        // rm temp
        if (ret) {
          // 删除图片
          // fs.rmSync(src.path)
          src.path = realPath
        }
        // const peerInfo: any = {
        //   chatType: 2,
        //   peerUid: '933286835',
        //   guildId: ''
        // }
        // const fileInfo = {
        //   fileName: `{${info.md5}}.jpg`,
        //   filePath: src.path,
        //   fileModelId: `${Math.floor(Math.random() * 10e9)}` as `${number}`
        // }
        // await uploadFile(peerInfo, fileInfo)
        if (!info) return undefined
        result.elementType = 2
        result.picElement = {
            md5HexStr: info.md5,
            picWidth: info.width,
            picHeight: info.height,
            fileName: `{${info.md5}}.jpg`,
            fileSize: `${info.size}`,
            original: true,
            picSubType: 0,
            sourcePath: src.path,
            thumbPath: {},
            picType: 1001,
            fileUuid: `${Math.floor(Math.random() * 10e10)}`,
            fileSubId: "",
            thumbFileSize: 0,
            summary: "",
            emojiFrom: null,
            emojiWebUrl: null,
            emojiAd:{
              url: '',
              desc: '',
            },
            emojiMall:{
              packageId: 0,
              emojiId: 0,
            },
            emojiZplan:{
              actionId: 0,
              actionName: '',
              actionType: 0,
              playerNumber: 0,
              peerUid: '1',
              bytesReserveInfo: ''
            },
            originImageMd5: info.md5,
        
            /**
             * 图片网络地址
             * 
             * 没有host, https://gchat.qpic.cn/
             * 
             * /gchatpic_new/发送者QQ/群号-uuid-MD5/0
             */
            originImageUrl: src.url ?? '',
            import_rich_media_context: null,
            isFlashPic: false,
            transferStatus: 1,
            progress: 100,
            invalidState: 0,
            fileBizId: null,
            downloadIndex: null,
          }
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
        result.elementType = 7
        result.replyElement = {
            replayMsgId: `${msg.data.reply.msgId}`,
            replayMsgSeq:  `${msg.data.reply.msgSeq}`,
            sourceMsgText:  `${msg.data.reply.text}`,
            senderUid:  `${msg.data.reply.uin}`,
            senderUidStr:  `${msg.data.reply.uid}`,
            replyMsgClientSeq: "0",
            replyMsgTime: `${Date.now()}`,
            replyMsgRevokeType: 0,
            sourceMsgTextElems: [],
            sourceMsgIsIncPic: false,
            sourceMsgExpired: false,
            replayMsgRootSeq: '0',
            replayMsgRootMsgId: '1',
            replayMsgRootCommentCnt: '0',
            sourceMsgIdInRecords: '1',
            anonymousNickName: null,
            originalMsgState: null,
          }
        }
      break;
    // case 'marketFace':
    //   // 商城表情
    //   break;
  
    default:
      return undefined
      break;
  }
  return result
}