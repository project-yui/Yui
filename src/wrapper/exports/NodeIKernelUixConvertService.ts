import { useLogger } from "../../common/log";

const log = useLogger('Wrapper/NodeIKernelUixConvertService')
export class NodeIKernelUixConvertService {
    protected static singleton?: any = undefined
    protected instance: any
    constructor(instance: any) {
        log.info('constructor called')
        this.instance = instance
    }
    getUid(...args: any[]) {
        log.info('getUid called with args:', args)
        const result = this.instance.getUid(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getUid called  promise result:', result)
                return res
            })
        }
        log.info('getUid called result:', result)
        return result
    }
    getUin(...args: any[]) {
        log.info('getUin called with args:', args)
        const result = this.instance.getUin(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getUin called  promise result:', result)
                return res
            })
        }
        log.info('getUin called result:', result)
        return result
    }
};
export const getNodeIKernelUixConvertService = (engine: any): any => {
    return class extends NodeIKernelUixConvertService {
        
    }
}