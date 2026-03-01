import { useLogger } from "../../common/log";

const log = useLogger('Wrapper/NodeIQQGProWrapperSession')
export class NodeIQQGProWrapperSession {
    protected static singleton?: any = undefined
    protected instance: any
    constructor(instance: any) {
        log.info('constructor called')
        this.instance = instance
    }
    getDirectSessionService(...args: any[]) {
        log.info('getDirectSessionService called with args:', args)
        const result = this.instance.getDirectSessionService(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getDirectSessionService called  promise result:', result)
                return res
            })
        }
        log.info('getDirectSessionService called result:', result)
        return result
    }
    getFeedChannelService(...args: any[]) {
        log.info('getFeedChannelService called with args:', args)
        const result = this.instance.getFeedChannelService(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getFeedChannelService called  promise result:', result)
                return res
            })
        }
        log.info('getFeedChannelService called result:', result)
        return result
    }
    getGProGuildMsgService(...args: any[]) {
        log.info('getGProGuildMsgService called with args:', args)
        const result = this.instance.getGProGuildMsgService(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getGProGuildMsgService called  promise result:', result)
                return res
            })
        }
        log.info('getGProGuildMsgService called result:', result)
        return result
    }
    getGuildFileTransferService(...args: any[]) {
        log.info('getGuildFileTransferService called with args:', args)
        const result = this.instance.getGuildFileTransferService(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getGuildFileTransferService called  promise result:', result)
                return res
            })
        }
        log.info('getGuildFileTransferService called result:', result)
        return result
    }
    getGuildService(...args: any[]) {
        log.info('getGuildService called with args:', args)
        const result = this.instance.getGuildService(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getGuildService called  promise result:', result)
                return res
            })
        }
        log.info('getGuildService called result:', result)
        return result
    }
    getSessionId(...args: any[]) {
        log.info('getSessionId called with args:', args)
        const result = this.instance.getSessionId(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getSessionId called  promise result:', result)
                return res
            })
        }
        log.info('getSessionId called result:', result)
        return result
    }
    init(...args: any[]) {
        log.info('init called with args:', args)
        const result = this.instance.init(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('init called  promise result:', result)
                return res
            })
        }
        log.info('init called result:', result)
        return result
    }
};
export const getNodeIQQGProWrapperSession = (engine: any): any => {
    return class extends NodeIQQGProWrapperSession {
        
        static getGProWrapperSession(...args: any[]) {
            log.info('getGProWrapperSession called with args:', args)
            const result = engine.getGProWrapperSession(...args)
            log.info('getGProWrapperSession called result:', result)
            return result
        }
    }
}