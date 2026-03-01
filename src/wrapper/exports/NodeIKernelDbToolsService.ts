import { useLogger } from "../../common/log";

const log = useLogger('Wrapper/NodeIKernelDbToolsService')
export class NodeIKernelDbToolsService {
    protected static singleton?: any = undefined
    protected instance: any
    constructor(instance: any) {
        log.info('constructor called')
        this.instance = instance
    }
    backupDatabase(...args: any[]) {
        log.info('backupDatabase called with args:', args)
        const result = this.instance.backupDatabase(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('backupDatabase called  promise result:', result)
                return res
            })
        }
        log.info('backupDatabase called result:', result)
        return result
    }
    depositDatabase(...args: any[]) {
        log.info('depositDatabase called with args:', args)
        const result = this.instance.depositDatabase(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('depositDatabase called  promise result:', result)
                return res
            })
        }
        log.info('depositDatabase called result:', result)
        return result
    }
    retrieveDatabase(...args: any[]) {
        log.info('retrieveDatabase called with args:', args)
        const result = this.instance.retrieveDatabase(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('retrieveDatabase called  promise result:', result)
                return res
            })
        }
        log.info('retrieveDatabase called result:', result)
        return result
    }
};
export const getNodeIKernelDbToolsService = (engine: any): any => {
    return class extends NodeIKernelDbToolsService {
        
    }
}