import { useLogger } from "../../common/log";

const log = useLogger('Wrapper/NodeIKernelEmojiService')
export class NodeIKernelEmojiService {
    protected static singleton?: any = undefined
    protected instance: any
    constructor(instance: any) {
        log.info('constructor called')
        this.instance = instance
    }
    checkImage(...args: any[]) {
        log.info('checkImage called with args:', args)
        const result = this.instance.checkImage(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('checkImage called  promise result:', result)
                return res
            })
        }
        log.info('checkImage called result:', result)
        return result
    }
    getAIGCEmojiList(...args: any[]) {
        log.info('getAIGCEmojiList called with args:', args)
        const result = this.instance.getAIGCEmojiList(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getAIGCEmojiList called  promise result:', result)
                return res
            })
        }
        log.info('getAIGCEmojiList called result:', result)
        return result
    }
};
export const getNodeIKernelEmojiService = (engine: any): any => {
    return class extends NodeIKernelEmojiService {
        
    }
}