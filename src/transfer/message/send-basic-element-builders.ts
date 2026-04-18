import * as fs from "fs"
import { NTReceiveMessageType, NTSendMessageType } from "../../ntqq/message/interfaces"
import { getFileType } from "../../ntqq/common/fs-api"
import { BotMessage } from "../../onebot/contracts/message"

export const buildTextSendElement = (
  msg: BotMessage.SendElement,
): NTSendMessageType.MsgElement | undefined => {
  if (!msg.data.text) {
    return undefined
  }
  return {
    elementType: 1,
    elementId: "",
    textElement: {
      content: msg.data.text,
      atType: 0,
      atUid: "",
      atTinyId: "",
      atNtUid: "",
    },
  }
}

export const buildMentionSendElement = (
  msg: BotMessage.SendElement,
): NTSendMessageType.MsgElement | undefined => {
  if (!msg.data.at) {
    return undefined
  }
  return {
    elementType: 1,
    elementId: "",
    textElement: {
      content: `@${msg.data.at.isAll ? '全体成员' : msg.data.at.name}`,
      atType: msg.data.at.isAll ? 1 : 2,
      atUid: `${msg.data.at.isAll ? 'all' : msg.data.at.uid}`,
      atTinyId: "",
      atNtUid: `${msg.data.at.isAll ? 'all' : msg.data.at.uid}`,
    },
  }
}

export const buildReplySendElement = (
  msg: BotMessage.SendElement,
): NTSendMessageType.MsgElement | undefined => {
  if (!msg.data.reply) {
    return undefined
  }
  return {
    elementType: 7,
    elementId: "",
    replyElement: {
      replayMsgId: `${msg.data.reply.msgId}`,
      replayMsgSeq: `${msg.data.reply.msgSeq}`,
      sourceMsgText: `${msg.data.reply.text}`,
      senderUid: `${msg.data.reply.uid}`,
      senderUidStr: `${msg.data.reply.uid}`,
      replyMsgClientSeq: "",
      replyMsgTime: "",
      replyMsgRevokeType: 0,
      sourceMsgTextElems: [],
      sourceMsgIsIncPic: false,
      sourceMsgExpired: false,
    },
  }
}

export const buildFileSendElement = (
  msg: BotMessage.SendElement,
): NTSendMessageType.MsgElement | undefined => {
  if (!msg.data.file) {
    return undefined
  }
  const file = msg.data.file
  const stat = fs.statSync(file.path)
  getFileType(file.path)
  return {
    elementType: 3,
    elementId: "",
    fileElement: {
      fileMd5: '',
      fileName: file.name,
      filePath: file.path,
      fileSize: `${stat.size}`,
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
      folderId: undefined,
    },
    extBufForUI: '',
  }
}

export const buildTextInnerSendElement = (
  msg: BotMessage.SendElement,
  eleId: number,
): NTReceiveMessageType.NTMessageElementType | undefined => {
  if (!msg.data.text) {
    return undefined
  }
  return {
    elementType: 1,
    elementId: `${eleId}`,
    extBufForUI: "0x",
    textElement: {
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
    },
  }
}

export const buildMentionInnerSendElement = (
  msg: BotMessage.SendElement,
  eleId: number,
): NTReceiveMessageType.NTMessageElementType | undefined => {
  if (!msg.data.at) {
    return undefined
  }
  return {
    elementType: 1,
    elementId: `${eleId}`,
    extBufForUI: "0x",
    textElement: {
      content: `@${msg.data.at.isAll ? '全体成员' : msg.data.at.name}`,
      atType: msg.data.at.isAll ? 1 : 2,
      atUid: msg.data.at.isAll ? 'all' : `${msg.data.at.uin}`,
      atTinyId: "",
      atNtUid: `${msg.data.at.isAll ? 'all' : msg.data.at.uid}`,
      subElementType: 0,
      atChannelId: '0',
      linkInfo: null,
      atRoleId: '0',
      atRoleColor: 0,
      atRoleName: '',
      needNotify: 0,
    },
  }
}

export const buildReplyInnerSendElement = (
  msg: BotMessage.SendElement,
  eleId: number,
): NTReceiveMessageType.NTMessageElementType | undefined => {
  if (!msg.data.reply) {
    return undefined
  }
  return {
    elementType: 7,
    elementId: `${eleId}`,
    extBufForUI: "0x",
    replyElement: {
      replayMsgId: `${msg.data.reply.msgId}`,
      replayMsgSeq: `${msg.data.reply.msgSeq}`,
      sourceMsgText: `${msg.data.reply.text}`,
      senderUid: `${msg.data.reply.uin}`,
      senderUidStr: `${msg.data.reply.uid}`,
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
    },
  }
}
