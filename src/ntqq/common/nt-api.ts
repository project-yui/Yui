import { getNTMsgService } from "../core/core"

/**
 * 调用NT自带的NtApi获取存储路径
 * 
 * @param md5 文件md5
 * @param md5 文件名
 * @returns 存储路径
 */
export const getRichMediaFilePathForGuild = (md5: string, fileName: string) => {
  const msgService = getNTMsgService()
  return msgService.getRichMediaFilePathForGuild({
    md5HexStr: md5,
    fileName: fileName,
    elementType: 2,
    elementSubType: 0,
    thumbSize: 0,
    needCreate: true,
    downloadType: 1,
    file_uuid: ''
  })
}
