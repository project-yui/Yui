import EventEmitter from "events"
import { useLogger } from "../../common/log"

const dispatcher = new EventEmitter()

const log = useLogger('Dispatcher')

/**
 * 
 * @returns 调度器
 */
export const useNTDispatcher = () => dispatcher

/**
 * 获取一个监听代理
 * @param name 监听类型名
 * @returns 监听代理
 */
export const useListenerProxy = (name: string) => {
    const handler = {
        get(obj: any, prop: string) {
            return (...args: any[]) => {
                log.info(`${name}/${prop}`, ...args)
                dispatcher.emit(`${name}/${prop}`, ...args)
            }
        },
    };
    
    const p = new Proxy({}, handler);
    return p
}