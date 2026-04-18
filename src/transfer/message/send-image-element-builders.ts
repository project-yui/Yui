import { NTReceiveMessageType, NTSendMessageType } from "../../ntqq/message/interfaces"
import { BotMessage } from "../../onebot/contracts/message"
import { prepareSendImageResource } from "./image-resource-preparer"
import {
  buildGuildImageFileName,
  buildGuildInnerImageFileName,
  normalizeUploadImageUrl,
} from "./image-resource-utils"

const buildRandomFileUuid = (): `${number}` => {
  return `${Math.floor(Math.random() * 10e10)}`
}

export const buildImageSendElement = async (
  msg: BotMessage.SendElement,
): Promise<NTSendMessageType.MsgElement | undefined> => {
  if (!msg.data.pic) {
    return undefined
  }
  const { info, sourcePath } = await prepareSendImageResource(
    msg.data.pic,
    buildGuildImageFileName,
  )
  return {
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
      sourcePath,
      thumbPath: undefined,
      picType: info.ext == 'gif' ? 2000 : 1000,
      fileUuid: "",
      fileSubId: "",
      thumbFileSize: 0,
      summary: "",
    },
    extBufForUI: '',
  }
}

export const buildImageInnerSendElement = async (
  msg: BotMessage.SendElement,
  eleId: number,
): Promise<NTReceiveMessageType.NTMessageElementType | undefined> => {
  if (!msg.data.pic) {
    return undefined
  }
  const prepared = await prepareSendImageResource(
    msg.data.pic,
    buildGuildInnerImageFileName,
    {
      url: normalizeUploadImageUrl(msg.data.pic.url),
    },
  )
  const info = prepared.info
  return {
    elementType: 2,
    elementId: `${eleId}`,
    extBufForUI: "0x",
    picElement: {
      md5HexStr: info.md5,
      picWidth: info.width,
      picHeight: info.height,
      fileName: `{${info.md5}}.jpg`,
      fileSize: `${info.size}`,
      original: true,
      picSubType: 0,
      sourcePath: prepared.sourcePath,
      thumbPath: {},
      picType: 1001,
      fileUuid: buildRandomFileUuid(),
      fileSubId: "",
      thumbFileSize: 0,
      summary: "",
      emojiFrom: null,
      emojiWebUrl: null,
      emojiAd: {
        url: '',
        desc: '',
      },
      emojiMall: {
        packageId: 0,
        emojiId: 0,
      },
      emojiZplan: {
        actionId: 0,
        actionName: '',
        actionType: 0,
        playerNumber: 0,
        peerUid: '1',
        bytesReserveInfo: '',
      },
      originImageMd5: info.md5,
      originImageUrl: prepared.sourceUrl ?? '',
      import_rich_media_context: null,
      isFlashPic: false,
      transferStatus: 1,
      progress: 100,
      invalidState: 0,
      fileBizId: null,
      downloadIndex: null,
    },
  }
}
