import EventEmitter from "events"
import { useLogger } from "../../common/log"
import { useAsyncStore } from "../../store/async-store"
import { useNTUserStore } from "../store/user"
import { CustomError } from "../../server/error/custom-error"


const log = useLogger('Dispatcher')

/**
 * 
 * @returns 调度器
 */
export const useNTDispatcher = () => {
    const asyncStore = useAsyncStore()
    const s = asyncStore.getStore()
    log.info('useNTDispatcher async store:', s)
    const uin: number = s?.get('uin')
    if (!uin)
    {
        throw new CustomError(500, 'uin error')
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
            log.info('handle get', obj, prop)
            const uin: number = s?.get('uin')
            if (!uin)
            {
                throw new CustomError(500, 'id error')
            }
            return (...args: any[]) => {
                log.debug('get async store')
                const asyncStore = useAsyncStore()
                if (!s) {
                    log.error('Async store error!')
                    throw  new CustomError(500, 'Async store error!')
                }
                asyncStore.run(s, () => {
                    log.debug(name, 'useListenerProxy call')
                    const s = asyncStore.getStore()
                    log.debug(name, 'useListenerProxy call async store:', s)
                    s?.set('uin', uin)
                    log.debug(`${name}/${prop}`, ...args)
                    log.debug(`${name}/${prop}`, JSON.stringify(args, null, 4))
                    const { getCurrentAccountData } = useNTUserStore()
                    const dispatcher = getCurrentAccountData().dispatcher
                    if (!dispatcher){
                        log.error(`dispatcher of ${uin} does not exists.`)
                        throw new CustomError(500, `dispatcher of ${uin} does not exists.`)
                    }
                    dispatcher.emit(`${name}/${prop}`, ...args)
                })
            }
        },
        set(obj: any, prop: string, nv: any, rec: any) {
            log.info('handle set', obj, prop)
            return true;
        },
    };
    
    const p = new Proxy({}, handler);
    return p
}