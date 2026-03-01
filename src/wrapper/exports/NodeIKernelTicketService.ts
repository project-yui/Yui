import { useLogger } from "../../common/log";

const log = useLogger('Wrapper/NodeIKernelTicketService')
export class NodeIKernelTicketService {
    protected static singleton?: any = undefined
    protected instance: any
    constructor(instance: any) {
        log.info('constructor called')
        this.instance = instance
    }
    addKernelTicketListener(...args: any[]) {
        log.info('addKernelTicketListener called with args:', args)
        const result = this.instance.addKernelTicketListener(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('addKernelTicketListener called  promise result:', result)
                return res
            })
        }
        log.info('addKernelTicketListener called result:', result)
        return result
    }
    forceFetchClientKey(...args: any[]) {
        log.info('forceFetchClientKey called with args:', args)
        const result = this.instance.forceFetchClientKey(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('forceFetchClientKey called  promise result:', result)
                return res
            })
        }
        log.info('forceFetchClientKey called result:', result)
        return result
    }
    removeKernelTicketListener(...args: any[]) {
        log.info('removeKernelTicketListener called with args:', args)
        const result = this.instance.removeKernelTicketListener(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('removeKernelTicketListener called  promise result:', result)
                return res
            })
        }
        log.info('removeKernelTicketListener called result:', result)
        return result
    }
};
export const getNodeIKernelTicketService = (engine: any): any => {
    return class extends NodeIKernelTicketService {
        
    }
}