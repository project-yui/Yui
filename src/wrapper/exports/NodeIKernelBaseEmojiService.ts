import { useLogger } from "../../common/log";

const log = useLogger('Wrapper/NodeIKernelBaseEmojiService')
export class NodeIKernelBaseEmojiService {
    protected static singleton?: any = undefined
    protected instance: any
    constructor(instance: any) {
        log.info('constructor called')
        this.instance = instance
    }
    addKernelBaseEmojiListener(...args: any[]) {
        log.info('addKernelBaseEmojiListener called with args:', args)
        const result = this.instance.addKernelBaseEmojiListener(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('addKernelBaseEmojiListener called  promise result:', result)
                return res
            })
        }
        log.info('addKernelBaseEmojiListener called result:', result)
        return result
    }
    delAllBaseEmojiResource(...args: any[]) {
        log.info('delAllBaseEmojiResource called with args:', args)
        const result = this.instance.delAllBaseEmojiResource(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('delAllBaseEmojiResource called  promise result:', result)
                return res
            })
        }
        log.info('delAllBaseEmojiResource called result:', result)
        return result
    }
    downloadBaseEmojiById(...args: any[]) {
        log.info('downloadBaseEmojiById called with args:', args)
        const result = this.instance.downloadBaseEmojiById(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('downloadBaseEmojiById called  promise result:', result)
                return res
            })
        }
        log.info('downloadBaseEmojiById called result:', result)
        return result
    }
    downloadBaseEmojiByIdWithUrl(...args: any[]) {
        log.info('downloadBaseEmojiByIdWithUrl called with args:', args)
        const result = this.instance.downloadBaseEmojiByIdWithUrl(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('downloadBaseEmojiByIdWithUrl called  promise result:', result)
                return res
            })
        }
        log.info('downloadBaseEmojiByIdWithUrl called result:', result)
        return result
    }
    fetchFullSysEmojis(...args: any[]) {
        log.info('fetchFullSysEmojis called with args:', args)
        const result = this.instance.fetchFullSysEmojis(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('fetchFullSysEmojis called  promise result:', result)
                return res
            })
        }
        log.info('fetchFullSysEmojis called result:', result)
        return result
    }
    getBaseEmojiPathByIds(...args: any[]) {
        log.info('getBaseEmojiPathByIds called with args:', args)
        const result = this.instance.getBaseEmojiPathByIds(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getBaseEmojiPathByIds called  promise result:', result)
                return res
            })
        }
        log.info('getBaseEmojiPathByIds called result:', result)
        return result
    }
    isBaseEmojiPathExist(...args: any[]) {
        log.info('isBaseEmojiPathExist called with args:', args)
        const result = this.instance.isBaseEmojiPathExist(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('isBaseEmojiPathExist called  promise result:', result)
                return res
            })
        }
        log.info('isBaseEmojiPathExist called result:', result)
        return result
    }
    removeKernelBaseEmojiListener(...args: any[]) {
        log.info('removeKernelBaseEmojiListener called with args:', args)
        const result = this.instance.removeKernelBaseEmojiListener(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('removeKernelBaseEmojiListener called  promise result:', result)
                return res
            })
        }
        log.info('removeKernelBaseEmojiListener called result:', result)
        return result
    }
};
export const getNodeIKernelBaseEmojiService = (engine: any): any => {
    return class extends NodeIKernelBaseEmojiService {
        
    }
}