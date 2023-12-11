import { useConfig } from "../../common/config"
import { useLogger } from "../../common/log"
import { IpcDownInfo, IpcUpInfo } from "../../store/interfaces"
import { useStore } from "../../store/store"
import { NTCmdDataType } from "./interfaces"
import { CallbackInfo } from "../interfaces"

const { registerIpcDownHandle, getIpcMainSend, getEventListenerList } = useStore()
const log = useLogger('Base')
const { timeout } = useConfig()
/**
 * <callbackId, CallbackInfo>
 */
const callbackMap: Record<string, CallbackInfo> = {}

/**
 * 模拟渲染进程向主进程发送请求
 * 超时reject
 * 
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
      reject('timeout')
    }, timeout)
    if (reqInfo.callbackId) {
      callbackMap[reqInfo.callbackId] = {
        resolve,
        reject,
        timeout: t,
      }
      log.info('getIpcMainSend')
      const send = getIpcMainSend(channel)
      send({} as any, reqInfo, reqData)
    }
    else {
      reject()
    }

  })

}

export const initBaseEvent = () => {
  // 目前似乎就5个
  Array.from({ length: 5 }).map((_, i) => registerIpcDownHandle(`IPC_DOWN_${i + 1}`, (info, data) => {
    if (info.type == 'response') {
      // 响应数据给渲染层
      const { callbackId } = info
      if (!callbackId || !callbackMap[callbackId]) {
        // log.info('没有找到回调方法！')
        return
      }
      const h = callbackMap[callbackId]
      clearTimeout(h.timeout)
      delete callbackMap[callbackId]
      if (info.promiseStatue !== 'full') {
        h.reject({ info, data })
      }
      else {
        h.resolve({ info, data })
      }
    }
    else {
      // 向渲染层发送请求
      const { callbackId } = info
      if (!callbackId) {
        // 推送订阅信息，不携带回调ID
        const cmdList = data as NTCmdDataType[]
        for (const cmd of cmdList) {
          if (cmd.cmdType === 'event') {
            const listenerList = getEventListenerList(`IPC_DOWN_${i + 1}_${info.eventName}_${cmd.cmdName}`)
            if (listenerList) {
              for (const listener of listenerList) {
                listener.handle(cmd.payload)
              }
            }
          }
          else {
            log.warn('不支持的订阅类型: %s', cmd.cmdType)
          }
        }
      }
      else {
        // 向渲染层发送请求，会产生响应。但是理论上不会需要处理
      }

    }
  }))

}
