import { useLogger } from "../../common/log";

const log = useLogger('Wrapper/NodeISpan')
export class NodeISpan {
    protected static singleton?: any = undefined
    protected instance: any
    constructor(instance: any) {
        log.info('constructor called')
        this.instance = instance
    }
    addLog(...args: any[]) {
        log.info('addLog called with args:', args)
        const result = this.instance.addLog(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('addLog called  promise result:', result)
                return res
            })
        }
        log.info('addLog called result:', result)
        return result
    }
    addSubSpan(...args: any[]) {
        log.info('addSubSpan called with args:', args)
        const result = this.instance.addSubSpan(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('addSubSpan called  promise result:', result)
                return res
            })
        }
        log.info('addSubSpan called result:', result)
        return result
    }
    end(...args: any[]) {
        log.info('end called with args:', args)
        const result = this.instance.end(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('end called  promise result:', result)
                return res
            })
        }
        log.info('end called result:', result)
        return result
    }
    getTraceID(...args: any[]) {
        log.info('getTraceID called with args:', args)
        const result = this.instance.getTraceID(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getTraceID called  promise result:', result)
                return res
            })
        }
        log.info('getTraceID called result:', result)
        return result
    }
    setFailedInfo(...args: any[]) {
        log.info('setFailedInfo called with args:', args)
        const result = this.instance.setFailedInfo(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setFailedInfo called  promise result:', result)
                return res
            })
        }
        log.info('setFailedInfo called result:', result)
        return result
    }
    setMethodName(...args: any[]) {
        log.info('setMethodName called with args:', args)
        const result = this.instance.setMethodName(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setMethodName called  promise result:', result)
                return res
            })
        }
        log.info('setMethodName called result:', result)
        return result
    }
};
export const getNodeISpan = (engine: any): any => {
    return class extends NodeISpan {
        
    }
}