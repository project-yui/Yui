import EventEmitter from "events"
import { useLogger } from "../../common/log"
import { useAsyncStore } from "../../store/async-store"
import { useNTUserStore } from "../store/user"


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
    const { getCurrentAccountData } = useNTUserStore()
    const dispatcher = getCurrentAccountData().dispatcher
    return dispatcher
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
                    log.info(name, 'useListenerProxy call async store:', s)
                    s?.set('id', id)
                    log.info(`${name}/${prop}`, ...args)
                    const { getCurrentAccountData } = useNTUserStore()
                    const dispatcher = getCurrentAccountData().dispatcher
                    if (!dispatcher){
                        throw new Error(`dispatcher of ${id} does not exists.`)
                    }
                    dispatcher.emit(`${name}/${prop}`, ...args)
                })
            }
        },
    };
    
    const p = new Proxy({}, handler);
    return p
}