import { useLogger } from "../common/log"
import { BotActionParams } from "../onebot/actions/interfaces"
import { BotActionResponse } from "../onebot/actions/interfaces"
import { IpcDownInfo, IpcUpInfo } from "./interfaces"

const log = useLogger('Store')

/**
 * 渲染进程 -> 主进程
 * <channel, function>
 */
const ipcUpMap: Record<string, (event: Electron.IpcMainEvent, info: IpcUpInfo, ...args: any[]) => void> = {}

type IpcDownHandleType = (info: IpcDownInfo, data: any) => void
/**
 * 主进程 -> 渲染进程
 * <channel, function>
 */
const ipcDownMap: Record<string, IpcDownHandleType> = {}

/**
 * GUI通过通道发送消息给electron
 * Electron收到消息触发listener
 * 
 * 因此，可以跳过GUI直接触发特定channel的listener
 * 
 * @param channel 通道
 * @param listener 监听器
 */
const addIpcMainSend = (channel: string, listener: (event: Electron.IpcMainEvent, ...args: any[]) => void) => {
  if (ipcUpMap[channel]) {
    log.warn(`通道[${channel}]重复添加`)
  }
  ipcUpMap[channel] = listener
}

/**
 * 获取指定通道的触发方法
 * 
 * @param channel 通道
 * @returns 触发方法
 */
const getIpcMainSend = (channel: string) => {
  return ipcUpMap[channel]
}

/**
 * 注册通道监听器（唯一）
 * 
 * 主进程 -> 渲染进程
 * 
 * @param channel 通道
 * @param listener 监听器
 */
const registerIpcDownHandle = (channel: string, listener: IpcDownHandleType) => {
  ipcDownMap[channel] = listener
}

/**
 * 获取通道的监听器
 * @param channel 通道
 * @returns 监听器
 */
const getIpcDownHandle = (channel: string) => {
  // receive
  return ipcDownMap[channel]
}

const ActionMap: Record<string, (p: any) => Promise<BotActionResponse>> = {}

/**
 * 获取动作处理函数
 * @param action 动作名称
 * @returns 处理函数
 */
const getActionHandle = (action: string) => {
  return ActionMap[action]
}

/**
 * 注册动作处理函数
 * @param name 动作名称
 * @param handle 动作处理函数
 */
const registerActionHandle = <T extends BotActionParams>(name: string, handle: (p: T) => Promise<BotActionResponse>) => {
  if (ActionMap[name]) {
    log.warn('Action: %s已经被注册，将覆盖旧的处理函数', name)
  }
  ActionMap[name] = handle
}

/**
 * NT事件监听器类型
 */
export type NTEventListenerHandle = (payload: any) => void
/**
 * eventName_cmdName
 */
type EventFullNameType = `IPC_DOWN_${number}_ns-${string}_${string}`
/**
 * NT事件监听
 */
interface NTEventListener {
  /**
   * always: 一直调用
   * once: 调用一次后不再调用
   */
  type: 'always' | 'once'
  handle: NTEventListenerHandle
}
const eventListenerListMap: Record<EventFullNameType, NTEventListener[]> = {}

/**
 * 获取事件的监听器
 * @param eventFullName 事件名称 格式: `${channel}_${eventName}_${cmdName}`
 * @returns 监听函数列表
 */
const getEventListenerList = (eventFullName: EventFullNameType): NTEventListener[] | undefined => {
  const listenerList = eventListenerListMap[eventFullName]
  if (!listenerList) return undefined
  const ret = [...listenerList]
  // 把一次性的监听排除掉
  eventListenerListMap[eventFullName] = listenerList.filter(e => e.type === 'always')
  return ret
}

/**
 * 添加事件的监听器
 * @param eventFullName 事件名称
 * @param type 事件类型 always长期 | once一次性
 * @param listener 事件监听器
 */
const registerEventListener = (eventFullName: EventFullNameType, type: 'always' | 'once', listener: NTEventListenerHandle) => {
  let listenerList = eventListenerListMap[eventFullName]
  if (!listenerList) {
    listenerList = []
    eventListenerListMap[eventFullName] = listenerList
  }
  listenerList.push({
    type,
    handle: listener,
  })
  return {
    remove: () => removeEventListener(eventFullName, listener)
  }
}

/**
 * 移除事件的监听器
 * 
 * @param eventFullName 事件名称
 * @param type 事件类型 always长期 | once一次性
 * @param listener 事件监听器
 */
const removeEventListener = (eventFullName: EventFullNameType, listener: NTEventListenerHandle) => {
  let listenerList = eventListenerListMap[eventFullName]
  if (!listenerList) {
    return
  }
  eventListenerListMap[eventFullName] = listenerList.filter(e => e.handle !== listener)
}

export const useStore = () => {
  return {
    addIpcMainSend,
    getIpcMainSend,
    
    registerIpcDownHandle,
    getIpcDownHandle,
    
    registerActionHandle,
    getActionHandle,

    getEventListenerList,
    registerEventListener,
    removeEventListener,
  }
}