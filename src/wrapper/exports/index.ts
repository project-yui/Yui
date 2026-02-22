import { useLogger } from "../../common/log"
import { getNodeIGlobalAdapter } from "./NodeIGlobalAdapter"
import { getNodeIKernelLoginService } from "./NodeIKernelLoginService"
import { getNodeIQQNTStartupSessionWrapper } from "./NodeIQQNTStartupSessionWrapper"
import { getNodeIQQNTWrapperEngine } from "./NodeIQQNTWrapperEngine"
import { getNodeIQQNTWrapperSession } from "./NodeIQQNTWrapperSession"

const wrapperInstance = (instance: any) => {
    const log = useLogger('WrapperExports')
    log.info('wrapperInstance called with instance:', instance)
    return new Proxy(instance, {
        construct(target, args) {
            log.info(`WrapperExports/${String(target.name)} constructor called with args:`, args)
            return new target(...args)
        },
        get(target, prop, receiver) {
            log.info(`WrapperExports/${String(prop)} get called`)
            const value = target[prop]
            log.info(`WrapperExports/${String(prop)} value:`, value)
            return value
        },
        set(target, prop, value, receiver) {
            log.info(`WrapperExports/${String(prop)} set called with value:`, value)
            target[prop] = value
            return true
        },
        apply(target, thisArg, argumentsList) {
            log.info(`WrapperExports/${String(target.name)} apply called with arguments:`, argumentsList)
            return target.apply(thisArg, argumentsList)
        },
    })
}

const wrapperClass = (clazz: any) => {
    const log = useLogger('WrapperExports')
    return class extends clazz {
            static get() {
                log.info('get called')
                const instance = clazz.get()
                if (!this.singleton) {
                    this.singleton = wrapperInstance(instance)
                }
                return this.singleton
            }
        }
}
export const getWrapperExports = (wrapper: NTNativeWrapper.CrossProcessExportsInterface): any => {
    // TODO: 这里可以做一些方法的包装和修改
    return {
        NodeIGlobalAdapter: getNodeIGlobalAdapter(wrapper.NodeIGlobalAdapter),
        NodeIKernelLoginService: getNodeIKernelLoginService(wrapper.NodeIKernelLoginService),
        NodeIQQNTWrapperEngine: getNodeIQQNTWrapperEngine(wrapper.NodeIQQNTWrapperEngine),
        NodeIQQNTWrapperSession: getNodeIQQNTWrapperSession(wrapper.NodeIQQNTWrapperSession),
        NodeQQNTWrapperUtil: wrapper.NodeQQNTWrapperUtil,
        NodeIQQNTStartupSessionWrapper: getNodeIQQNTStartupSessionWrapper(wrapper.NodeIQQNTStartupSessionWrapper),
    }
}