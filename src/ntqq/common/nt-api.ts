import { randomUUID } from "crypto"
import { IpcUpInfo } from "../../store/interfaces"
import { PathInfo } from "./ntapi"
import { sendEvent } from "../event/base"

/**
 * 调用NT自带的NtApi获取存储路径
 * 
 * @param md5 文件md5
 * @param md5 文件名
 * @returns 存储路径
 */
export const getRichMediaFilePathForGuild = async (md5: string, fileName: string) => {
  const uuid = randomUUID()
  const reqInfo: IpcUpInfo = {
    type: 'request',
    callbackId: uuid,
    eventName: 'ns-ntApi-2'
  }
  const reqData: [string, PathInfo, any] = [
    'nodeIKernelMsgService/getRichMediaFilePathForGuild',
    {
      path_info: {
        md5HexStr: md5,
        fileName: fileName,
        elementType: 2,
        elementSubType: 0,
        thumbSize: 0,
        needCreate: true,
        downloadType: 1,
        file_uuid: ''
      }
    },
    undefined,
  ]
  const sendResult = await sendEvent<PathInfo, string>('IPC_UP_2', reqInfo, reqData)
  return sendResult.data
}