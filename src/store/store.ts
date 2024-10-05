import { AsyncLocalStorage } from "node:async_hooks"
import { useLogger } from "../common/log"
import { useNTDispatcher } from "../ntqq/core/dispatcher"
import { BotActionParams } from "../onebot/actions/interfaces"

const log = useLogger('Store')

const ActionMap: Record<string, (p: any) => Promise<any>> = {}

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
const registerActionHandle = <T extends BotActionParams>(name: string, handle: (p: T) => Promise<any>) => {
  if (ActionMap[name]) {
    log.warn('Action: %s已经被注册，将覆盖旧的处理函数', name)
  }
  ActionMap[name] = handle
}

/**
 * NT事件监听器类型
 */
export type NTEventListenerHandle = (...payload: any[]) => void

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
  const dispatcher = useNTDispatcher()
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
  const dispatcher = useNTDispatcher()
  dispatcher.removeListener(eventFullName, listener)
}

export const useStore = () => {
  return {
  
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