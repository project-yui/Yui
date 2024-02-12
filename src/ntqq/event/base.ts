import { useConfig } from "../../common/config"
import { useLogger } from "../../common/log"
import { IpcDownInfo, IpcUpInfo } from "../../store/interfaces"
import { CallbackInfo } from "../interfaces"

const log = useLogger('Base')
const { timeout } = useConfig()
/**
 * <callbackId, CallbackInfo>
 */
const callbackMap: Record<string, CallbackInfo> = {}

/**
 * 模拟渲染进程向主进程发送请求
 * 
 * 超时reject
 * 
 * @deprecated
 * @param channel 通道
 * @param reqInfo 请求信息
 * @param reqData 请求数据
 * @returns 结果
 */
export const sendEvent = <ReqType = any, RespType = any>(channel: `IPC_UP_${number}`, reqInfo: IpcUpInfo, reqData: [string, ReqType, any]) => {
  log.info('sendEvent')
  return new Promise<{ info: IpcDownInfo, data: RespType }>((resolve, reject) => {
    const t = setTimeout(() => {
      log.info('log timeout')
      reject('sendEvent timeout')
    }, timeout)
    if (reqInfo.callbackId) {
      callbackMap[reqInfo.callbackId] = {
        resolve,
        reject,
        timeout: t,
      }
      log.info('getIpcMainSend')
      throw new Error('deprecated')
    }
    else {
      reject()
    }

  })

}
