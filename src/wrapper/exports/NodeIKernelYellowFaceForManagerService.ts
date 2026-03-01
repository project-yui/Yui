import { useLogger } from "../../common/log";

const log = useLogger('Wrapper/NodeIKernelYellowFaceForManagerService')
export class NodeIKernelYellowFaceForManagerService {
    protected static singleton?: any = undefined
    protected instance: any
    constructor(instance: any) {
        log.info('constructor called')
        this.instance = instance
    }
    download(...args: any[]) {
        log.info('download called with args:', args)
        const result = this.instance.download(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('download called  promise result:', result)
                return res
            })
        }
        log.info('download called result:', result)
        return result
    }
    setHistory(...args: any[]) {
        log.info('setHistory called with args:', args)
        const result = this.instance.setHistory(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setHistory called  promise result:', result)
                return res
            })
        }
        log.info('setHistory called result:', result)
        return result
    }
};
export const getNodeIKernelYellowFaceForManagerService = (engine: any): any => {
    return class extends NodeIKernelYellowFaceForManagerService {
        
    }
}