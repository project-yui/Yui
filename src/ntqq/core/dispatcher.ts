import EventEmitter from "events"
import { useLogger } from "../../common/log"

const dispatcher = new EventEmitter()

const log = useLogger('Dispatcher')

/**
 * 
 * @returns 调度器
 */
export const useNTDispatcher = () => dispatcher

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