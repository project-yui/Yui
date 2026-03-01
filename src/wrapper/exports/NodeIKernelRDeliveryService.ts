import { useLogger } from "../../common/log";

const log = useLogger('Wrapper/NodeIKernelRDeliveryService')
export class NodeIKernelRDeliveryService {
    protected static singleton?: any = undefined
    protected instance: any
    constructor(instance: any) {
        log.info('constructor called')
        this.instance = instance
    }
    addDataChangeListener(...args: any[]) {
        log.info('addDataChangeListener called with args:', args)
        const result = this.instance.addDataChangeListener(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('addDataChangeListener called  promise result:', result)
                return res
            })
        }
        log.info('addDataChangeListener called result:', result)
        return result
    }
    getRDeliveryDataByKey(...args: any[]) {
        log.info('getRDeliveryDataByKey called with args:', args)
        const result = this.instance.getRDeliveryDataByKey(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getRDeliveryDataByKey called  promise result:', result)
                return res
            })
        }
        log.info('getRDeliveryDataByKey called result:', result)
        return result
    }
    removeDataChangeListener(...args: any[]) {
        log.info('removeDataChangeListener called with args:', args)
        const result = this.instance.removeDataChangeListener(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('removeDataChangeListener called  promise result:', result)
                return res
            })
        }
        log.info('removeDataChangeListener called result:', result)
        return result
    }
    requestBatchRemoteDataByScene(...args: any[]) {
        log.info('requestBatchRemoteDataByScene called with args:', args)
        const result = this.instance.requestBatchRemoteDataByScene(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('requestBatchRemoteDataByScene called  promise result:', result)
                return res
            })
        }
        log.info('requestBatchRemoteDataByScene called result:', result)
        return result
    }
    requestFullRemoteData(...args: any[]) {
        log.info('requestFullRemoteData called with args:', args)
        const result = this.instance.requestFullRemoteData(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('requestFullRemoteData called  promise result:', result)
                return res
            })
        }
        log.info('requestFullRemoteData called result:', result)
        return result
    }
    requestSingleRemoteDataByKey(...args: any[]) {
        log.info('requestSingleRemoteDataByKey called with args:', args)
        const result = this.instance.requestSingleRemoteDataByKey(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('requestSingleRemoteDataByKey called  promise result:', result)
                return res
            })
        }
        log.info('requestSingleRemoteDataByKey called result:', result)
        return result
    }
};
export const getNodeIKernelRDeliveryService = (engine: any): any => {
    return class extends NodeIKernelRDeliveryService {
        
    }
}