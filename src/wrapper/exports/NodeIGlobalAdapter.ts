import { useLogger } from "../../common/log";

export const getNodeIGlobalAdapter = (engine: any): any => {
    const log = useLogger('Wrapper/NodeIGlobalAdapter')
    return class {
        private static singleton?: any = undefined
        private instance: any
        constructor(...args: any[]) {
            log.info('constructor called', args)
            this.instance = args[0]
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