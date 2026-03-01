import { useLogger } from "../../common/log";

const log = useLogger('Wrapper/NodeIKernelTianShuService')
export class NodeIKernelTianShuService {
    protected static singleton?: any = undefined
    protected instance: any
    constructor(instance: any) {
        log.info('constructor called')
        this.instance = instance
    }
    addKernelTianShuListener(...args: any[]) {
        log.info('addKernelTianShuListener called with args:', args)
        const result = this.instance.addKernelTianShuListener(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('addKernelTianShuListener called  promise result:', result)
                return res
            })
        }
        log.info('addKernelTianShuListener called result:', result)
        return result
    }
    removeKernelTianShuListener(...args: any[]) {
        log.info('removeKernelTianShuListener called with args:', args)
        const result = this.instance.removeKernelTianShuListener(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('removeKernelTianShuListener called  promise result:', result)
                return res
            })
        }
        log.info('removeKernelTianShuListener called result:', result)
        return result
    }
    reportTianShuNumeralRed(...args: any[]) {
        log.info('reportTianShuNumeralRed called with args:', args)
        const result = this.instance.reportTianShuNumeralRed(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('reportTianShuNumeralRed called  promise result:', result)
                return res
            })
        }
        log.info('reportTianShuNumeralRed called result:', result)
        return result
    }
    requesTianShuNumeralRed(...args: any[]) {
        log.info('requesTianShuNumeralRed called with args:', args)
        const result = this.instance.requesTianShuNumeralRed(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('requesTianShuNumeralRed called  promise result:', result)
                return res
            })
        }
        log.info('requesTianShuNumeralRed called result:', result)
        return result
    }
};
export const getNodeIKernelTianShuService = (engine: any): any => {
    return class extends NodeIKernelTianShuService {
        
    }
}