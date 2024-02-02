import { randomUUID } from "crypto"
import { sendEvent } from "../event/base"
import { IpcUpInfo } from "../../store/interfaces"
import { ImageSizeInfo } from "./fsapi"

/**
 * 调用NT自带的FsApi获取md5
 * 
 * @param path 文件路径
 * @returns MD5
 */
export const getFileMd5 = async (path: string) => {
  const uuid = randomUUID()
  const reqInfo: IpcUpInfo = {
    type: 'request',
    callbackId: uuid,
    eventName: 'ns-FsApi-2'
  }
  const reqData: [string, string, any] = [
    'getFileMd5',
    path,
    null,
  ]
  const sendResult = await sendEvent<string, string>('IPC_UP_2', reqInfo, reqData)
  return sendResult.data
}

/**
 * 调用NT自带的FsApi获取图片信息
 * 
 * @param path 文件路径
 * @returns MD5
 */
export const getImageSize = async (path: string) => {
  const uuid = randomUUID()
  const reqInfo: IpcUpInfo = {
    type: 'request',
    callbackId: uuid,
    eventName: 'ns-FsApi-2'
  }
  const reqData: [string, string, any] = [
    'getImageSizeFromPath',
    path,
    null,
  ]
  const sendResult = await sendEvent<string, ImageSizeInfo>('IPC_UP_2', reqInfo, reqData)
  return sendResult.data
}