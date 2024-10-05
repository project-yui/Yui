import EventEmitter from "events"
import { useLogger } from "../../common/log"
import { useAsyncStore } from "../../store/async-store"

const dispatcher: Record<string, EventEmitter> = {}

const log = useLogger('Dispatcher')

/**
 * 
 * @returns 调度器
 */
export const useNTDispatcher = () => {
    const asyncStore = useAsyncStore()
    const s = asyncStore.getStore()
    log.info('useNTDispatcher async store:', s)
    const id = s?.get('id')
    if (!id)
    {
        throw new Error('id error')
    }
    if (!dispatcher[id])
    {
        dispatcher[id] = new EventEmitter()
    }
    return dispatcher[id]
}

/**
 * 获取一个监听代理
 * @param name 监听类型名
 * @returns 监听代理
 */
export const useListenerProxy = (name: string) => {
    const asyncStore = useAsyncStore()
    const s = asyncStore.getStore()
    log.info('useListenerProxy async store:', name, s)
    const handler = {
        get(obj: any, prop: string) {
            const id = s?.get('id')
            if (!id)
            {
                throw new Error('id error')
            }
            return (...args: any[]) => {
                const asyncStore = useAsyncStore()
                if (!s) {
                    throw  new Error('Async store error!')
                }
                asyncStore.run(s, () => {
                    const s = asyncStore.getStore()
                    log.info('useListenerProxy call async store:', s)
                    s?.set('id', id)
                    log.info(`${name}/${prop}`, ...args)
                    dispatcher[id].emit(`${name}/${prop}`, ...args)
                })
            }
        },
    };
    
    const p = new Proxy({}, handler);
    return p
}