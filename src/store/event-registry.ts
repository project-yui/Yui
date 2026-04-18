import { getCurrentNTDispatcher } from "../ntqq/core/dispatcher"

/**
 * NT事件监听器类型
 */
export type NTEventListenerHandle = (...payload: any[]) => void

/**
 * Service/action
 */
export type EventFullNameType = `${string}/${string}`

/**
 * 添加事件的监听器
 * @param eventFullName 事件名称
 * @param type 事件类型 always长期 | once一次性
 * @param listener 事件监听器
 */
export const registerEventListener = (eventFullName: EventFullNameType, type: 'always' | 'once', listener: NTEventListenerHandle) => {
  const dispatcher = getCurrentNTDispatcher()
  if (type === 'once') {
    dispatcher.once(eventFullName, listener)
  }
  else if (type === 'always') {
    dispatcher.on(eventFullName, listener)
  }
  return {
    remove: () => dispatcher.removeListener(eventFullName, listener)
  }
}

/**
 * 移除事件的监听器
 */
export const removeEventListener = (eventFullName: EventFullNameType, listener: NTEventListenerHandle) => {
  const dispatcher = getCurrentNTDispatcher()
  dispatcher.removeListener(eventFullName, listener)
}
