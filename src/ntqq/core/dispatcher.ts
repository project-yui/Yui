import { useLogger } from "../../common/log"
import { CustomError } from "../../common/error/custom-error"
import { requireCurrentNTRuntime } from "./runtime-store"

const log = useLogger('Dispatcher')

const requireCurrentDispatcher = () => {
  const runtime = requireCurrentNTRuntime()
  const uin = runtime.info.uin
  const dispatcher = runtime.dispatcher
  if (!dispatcher) {
    log.error('dispatcher does not exist for current uin:', uin)
    throw new CustomError(500, `dispatcher of ${uin} does not exists.`)
  }
  return {
    uin,
    dispatcher,
  }
}

/**
 * 
 * @returns 调度器
 */
export const getCurrentNTDispatcher = () => {
  const { uin, dispatcher } = requireCurrentDispatcher()
  log.info('current dispatcher uin:', uin)
  return dispatcher
}

export const emitCurrentNTDispatcherEvent = (eventFullName: `${string}/${string}`, ...args: any[]) => {
  getCurrentNTDispatcher().emit(eventFullName, ...args)
}

/**
 * 获取一个监听代理
 * @param name 监听类型名
 * @returns 监听代理
 */
export const createNTListenerProxy = (name: string) => {
  log.info('createNTListenerProxy:', name)
  const handler = {
    get(_obj: unknown, prop: string) {
      return (...args: any[]) => {
        const eventFullName = `${name}/${prop}` as `${string}/${string}`
        log.debug(eventFullName, JSON.stringify(args))
        emitCurrentNTDispatcherEvent(eventFullName, ...args)
      }
    },
    set() {
      return true
    },
  }

  return new Proxy({}, handler)
}

export { requireCurrentDispatcher }
