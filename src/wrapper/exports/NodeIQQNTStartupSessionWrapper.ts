import { useLogger } from "../../common/log";

const log = useLogger('Wrapper/NodeIQQNTStartupSessionWrapper')
export class NodeIQQNTStartupSessionWrapper {
    protected static singleton?: any = undefined
    protected instance: any
    constructor(instance: any) {
        log.info('constructor called')
        this.instance = instance
    }
    getSessionIdList(...args: any[]) {
        log.info('getSessionIdList called with args:', args)
        const result = this.instance.getSessionIdList(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getSessionIdList called  promise result:', result)
                return res
            })
        }
        log.info('getSessionIdList called result:', result)
        return result
    }
    start(...args: any[]) {
        log.info('start called with args:', args)
        const result = this.instance.start(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('start called  promise result:', result)
                return res
            })
        }
        log.info('start called result:', result)
        return result
    }
    stop(...args: any[]) {
        log.info('stop called with args:', args)
        const result = this.instance.stop(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('stop called  promise result:', result)
                return res
            })
        }
        log.info('stop called result:', result)
        return result
    }
};
export const getNodeIQQNTStartupSessionWrapper = (engine: any): any => {
    return class extends NodeIQQNTStartupSessionWrapper {
        static create(...args: any[]) {
            log.info('create called with args:', args)
            const result = engine.create(...args)
            if (!this.singleton) {
                this.singleton = new this(result)
            }
            log.info('create called result:', this.singleton)
            return this.singleton
        }
        static createWithModuleList(...args: any[]) {
            log.info('createWithModuleList called with args:', args)
            const result = engine.createWithModuleList(...args)
            log.info('createWithModuleList called result:', result)
            return result
        }
    }
}