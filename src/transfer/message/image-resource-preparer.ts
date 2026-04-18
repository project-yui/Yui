import * as fs from "fs"
import { downloadFile, getImageInfo } from "../../common/file"
import { ImageInfo } from "../../common/interface/file"
import { getRichMediaFilePathForGuild } from "../../ntqq/common/nt-api"
import { copyFile } from "../../ntqq/common/fs-api"
import { BotMessage } from "../../onebot/contracts/message"
import { CustomError } from "../../common/error/custom-error"

type SendPicElement = NonNullable<BotMessage.SendElement["data"]["pic"]>

interface PrepareSendImageResourceOptions {
  url?: string
}

const resolveSendImageLocalPath = async (
  src: SendPicElement,
  resolvedUrl?: string,
) => {
  if (src.path && fs.existsSync(src.path)) {
    return src.path
  }
  if (!resolvedUrl) {
    throw new CustomError(500, `File does not exists! ${src.path}`)
  }
  return downloadFile(resolvedUrl)
}

const resolvePreparedSendImagePath = (
  sourcePath: string,
  info: ImageInfo,
  fileNameBuilder: (info: ImageInfo) => string,
) => {
  const realPath = getRichMediaFilePathForGuild(info.md5, fileNameBuilder(info))
  const copied = copyFile(sourcePath, realPath)
  return copied ? realPath : sourcePath
}

export const prepareSendImageResource = async (
  src: SendPicElement,
  fileNameBuilder: (info: ImageInfo) => string,
  options: PrepareSendImageResourceOptions = {},
) => {
  const sourceUrl = options.url ?? src.url
  const localPath = await resolveSendImageLocalPath(src, sourceUrl)

  const info = await getImageInfo(localPath)
  if (!info) {
    throw new CustomError(500, 'Failed to get information of image')
  }

  const sourcePath = resolvePreparedSendImagePath(localPath, info, fileNameBuilder)

  return {
    info,
    sourcePath,
    sourceUrl,
  }
}
