import { useLogger } from "../../common/log";

const log = useLogger('Wrapper/NodeIKernelYellowFaceService')
export class NodeIKernelYellowFaceService {
    protected static singleton?: any = undefined
    protected instance: any
    constructor(instance: any) {
        log.info('constructor called')
        this.instance = instance
    }
    addListener(...args: any[]) {
        log.info('addListener called with args:', args)
        const result = this.instance.addListener(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('addListener called  promise result:', result)
                return res
            })
        }
        log.info('addListener called result:', result)
        return result
    }
    getConfigFilePath(...args: any[]) {
        log.info('getConfigFilePath called with args:', args)
        const result = this.instance.getConfigFilePath(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getConfigFilePath called  promise result:', result)
                return res
            })
        }
        log.info('getConfigFilePath called result:', result)
        return result
    }
    getLanguage(...args: any[]) {
        log.info('getLanguage called with args:', args)
        const result = this.instance.getLanguage(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getLanguage called  promise result:', result)
                return res
            })
        }
        log.info('getLanguage called result:', result)
        return result
    }
    removeListener(...args: any[]) {
        log.info('removeListener called with args:', args)
        const result = this.instance.removeListener(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('removeListener called  promise result:', result)
                return res
            })
        }
        log.info('removeListener called result:', result)
        return result
    }
    update(...args: any[]) {
        log.info('update called with args:', args)
        const result = this.instance.update(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('update called  promise result:', result)
                return res
            })
        }
        log.info('update called result:', result)
        return result
    }
};
export const getNodeIKernelYellowFaceService = (engine: any): any => {
    return class extends NodeIKernelYellowFaceService {
        
    }
}