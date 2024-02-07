import { useLogger } from "../common/log"
import { useNTDispatcher } from "../ntqq/core/dispatcher"
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
 * 事件分发
 */
const dispatcher = useNTDispatcher()
/**
 * Service/action
 */
type EventFullNameType = `${string}/${string}`

/**
 * 添加事件的监听器
 * @param eventFullName 事件名称
 * @param type 事件类型 always长期 | once一次性
 * @param listener 事件监听器
 */
const registerEventListener = (eventFullName: EventFullNameType, type: 'always' | 'once', listener: NTEventListenerHandle) => {
  if (type === 'once') {
    // 一次性监听
    dispatcher.once(eventFullName, listener);
  }
  else if (type === 'always') {
    // 持续性监听
    dispatcher.on(eventFullName, listener)
  }
  return {
    /**
     * 移除监听器
     * @returns 
     */
    remove: () => dispatcher.removeListener(eventFullName, listener)
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
  dispatcher.removeListener(eventFullName, listener)
}

export const useStore = () => {
  return {
    /**
     * GUI通过通道发送消息给electron
     * Electron收到消息触发listener
     * 
     * 因此，可以跳过GUI直接触发特定channel的listener
     * 
     * @param channel 通道
     * @param listener 监听器
     */
    addIpcMainSend,
    /**
     * 获取指定通道的触发方法
     * 
     * @param channel 通道
     * @returns 触发方法
     */
    getIpcMainSend,
  
    /**
     * 注册动作处理函数
     * @param name 动作名称
     * @param handle 动作处理函数
     */
    registerActionHandle,
    /**
     * 获取动作处理函数
     * @param action 动作名称
     * @returns 处理函数
     */
    getActionHandle,

    /**
     * 获取事件的监听器
     * 
     * @deprecated
     * @param eventFullName 事件名称 格式: `${channel}_${eventName}_${cmdName}`
     * @returns 监听函数列表
     */
    // getEventListenerList,
    /**
     * 添加事件的监听器
     * @param eventFullName 事件名称
     * @param type 事件类型 always长期 | once一次性
     * @param listener 事件监听器
     */
    registerEventListener,
    /**
     * 移除事件的监听器
     * 
     * @param eventFullName 事件名称
     * @param type 事件类型 always长期 | once一次性
     * @param listener 事件监听器
     */
    removeEventListener,
  }
}