import { randomUUID } from "crypto"
import { FileType, ImageSizeInfo } from "./fsapi"
import { useNTCore } from "../core/core"
import { useLogger } from "../../common/log"

const log = useLogger('FsApi')

/**
 * 调用NT自带的FsApi获取md5
 * 
 * @param path 文件路径
 * @returns MD5
 */
export const getFileMd5 = async (path: string) => {
  const uuid = randomUUID()
  // const reqInfo: IpcUpInfo = {
  //   type: 'request',
  //   callbackId: uuid,
  //   eventName: 'ns-FsApi-2'
  // }
  // const reqData: [string, string, any] = [
  //   'getFileMd5',
  //   path,
  //   null,
  // ]
  // const sendResult = await sendEvent<string, string>('IPC_UP_2', reqInfo, reqData)
  // return sendResult.data
  return ''
}

/**
 * 获取文件类型
 * 
 * @param path 文件路径
 * @returns 文件类型
 */
export const getFileType = async (path: string) => {
  const uuid = randomUUID()
  // const reqInfo: IpcUpInfo = {
  //   type: 'request',
  //   callbackId: uuid,
  //   eventName: 'ns-FsApi-2'
  // }
  // const reqData: [string, string, any] = [
  //   'nodeIKernelMsgService/getRichMediaFilePathForGuild',
  //   path,
  //   undefined,
  // ]
  // const sendResult = await sendEvent<string, FileType>('IPC_UP_2', reqInfo, reqData)
  // return sendResult.data
  return ''
}

/**
 * 调用NT自带的FsApi获取图片信息
 * 
 * @param path 文件路径
 * @returns MD5
 */
export const getImageSizeFromPath = async (path: string) => {
  const uuid = randomUUID()
  // const reqInfo: IpcUpInfo = {
  //   type: 'request',
  //   callbackId: uuid,
  //   eventName: 'ns-FsApi-2'
  // }
  // const reqData: [string, string, any] = [
  //   'getImageSizeFromPath',
  //   path,
  //   null,
  // ]
  // const sendResult = await sendEvent<string, ImageSizeInfo>('IPC_UP_2', reqInfo, reqData)
  // return sendResult.data
  return ''
}

/**
 * 复制文件
 * 
 * @param from 来源路径
 * @param to 目标路径
 * @returns boolean
 */
export const copyFile = (from: string, to: string) => {
  const { getWrapperUtil } = useNTCore()
  const util = getWrapperUtil()
  const ret = util.copyFile(from, to)
  log.info('copyFile:', ret)
  return ret
  // const uuid = randomUUID()
  // const reqInfo: IpcUpInfo = {
  //   type: 'request',
  //   callbackId: uuid,
  //   eventName: 'ns-FsApi-2'
  // }
  // const reqData: [string, {
  //   fromPath: string
  //   toPath: string
  // }, any] = [
  //   'copyFile',
  //   {
  //     fromPath: from,
  //     toPath: to,
  //   },
  //   null,
  // ]
  // const sendResult = await sendEvent<{
  //   fromPath: string
  //   toPath: string
  // }, boolean>('IPC_UP_2', reqInfo, reqData)
  // return sendResult.data
}