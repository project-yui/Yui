import { ImageInfo } from "../../common/interface/file"

export const normalizeUploadImageUrl = (url?: string) => {
  if (!url) {
    return url
  }
  if (!url.startsWith('https://gchat.qpic.cn')) {
    return `/external-download?url=${encodeURIComponent(url)}`
  }
  return url.replace('https://gchat.qpic.cn', '')
}

export const buildGuildImageFileName = (info: ImageInfo) => `${info.md5}.${info.ext}`

export const buildGuildInnerImageFileName = (info: ImageInfo) => `${info.md5}.jpg`

