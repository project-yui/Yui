import EventEmitter from "events"
import { useLogger } from "../../common/log"
import { useNTUserStore } from "../store/user"
import { CustomError } from "../../server/error/custom-error"


const log = useLogger('Dispatcher')

/**
 * 
 * @returns 调度器
 */
export const useNTDispatcher = () => {
    const { getCurrentAccountData, requireCurrentUin } = useNTUserStore()
    const uin = requireCurrentUin()
    log.info('useNTDispatcher current uin:', uin)
    const dispatcher = getCurrentAccountData().dispatcher
    return dispatcher
}

/**
 * 获取一个监听代理
 * @param name 监听类型名
 * @returns 监听代理
 */
export const useListenerProxy = (name: string) => {
    log.info('useListenerProxy:', name)
    const handler = {
        get(obj: any, prop: string) {
            log.info(`${name}/${prop}`, 'handle get', obj, prop, name)
            const { requireCurrentUin } = useNTUserStore()
            const uin = requireCurrentUin()
            return (...args: any[]) => {
                log.debug(`${name}/${prop}`, JSON.stringify(args))
                const { getCurrentAccountData } = useNTUserStore()
                const dispatcher = getCurrentAccountData().dispatcher
                if (!dispatcher){
                    log.error(`${name}/${prop}`, `dispatcher of ${uin} does not exists.`)
                    throw new CustomError(500, `dispatcher of ${uin} does not exists.`)
                }
                dispatcher.emit(`${name}/${prop}`, ...args)
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
