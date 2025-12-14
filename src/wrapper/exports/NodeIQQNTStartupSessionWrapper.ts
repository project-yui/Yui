import { useLogger } from "../../common/log";

export const getNodeIQQNTStartupSessionWrapper = (engine: any): any => {
    const log = useLogger('Wrapper/NodeIQQNTStartupSessionWrapper')
    return class {
        private static singleton?: any = undefined
        private instance: any
        constructor(...args: any[]) {
            log.info('constructor called', args)
            this.instance = args[0]
        }
        start(...args: any[]) {
            log.info('start called with args:', args)
            return this.instance.start(...args)
        }
        stop(...args: any[]) {
            log.info('stop called with args:', args)
            return this.instance.stop(...args)
        }
        getSessionIdList(...args: any[]) {
            log.info('getSessionIdList called with args:', args)
            const result = this.instance.getSessionIdList(...args)
            log.info('getSessionIdList result:', result)
            return result
        }
        static create(...args: any[]) {
            log.info('create called with args:', args)
            const instance = engine.create(...args)
            if (!this.singleton) {
                this.singleton = new this(instance)
            }
            return this.singleton
        }
        static get() {
            log.info('get called')
            const instance = engine.get()
            if (!this.singleton) {
                this.singleton = new this(instance)
            }
            return this.singleton
        }
    };
}