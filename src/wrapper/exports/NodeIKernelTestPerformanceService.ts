import { useLogger } from "../../common/log";

const log = useLogger('Wrapper/NodeIKernelTestPerformanceService')
export class NodeIKernelTestPerformanceService {
    protected static singleton?: any = undefined
    protected instance: any
    constructor(instance: any) {
        log.info('constructor called')
        this.instance = instance
    }
    execSql(...args: any[]) {
        log.info('execSql called with args:', args)
        const result = this.instance.execSql(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('execSql called  promise result:', result)
                return res
            })
        }
        log.info('execSql called result:', result)
        return result
    }
    insertMsg(...args: any[]) {
        log.info('insertMsg called with args:', args)
        const result = this.instance.insertMsg(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('insertMsg called  promise result:', result)
                return res
            })
        }
        log.info('insertMsg called result:', result)
        return result
    }
};
export const getNodeIKernelTestPerformanceService = (engine: any): any => {
    return class extends NodeIKernelTestPerformanceService {
        
    }
}