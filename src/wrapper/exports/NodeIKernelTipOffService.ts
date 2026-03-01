import { useLogger } from "../../common/log";

const log = useLogger('Wrapper/NodeIKernelTipOffService')
export class NodeIKernelTipOffService {
    protected static singleton?: any = undefined
    protected instance: any
    constructor(instance: any) {
        log.info('constructor called')
        this.instance = instance
    }
    addKernelTipOffListener(...args: any[]) {
        log.info('addKernelTipOffListener called with args:', args)
        const result = this.instance.addKernelTipOffListener(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('addKernelTipOffListener called  promise result:', result)
                return res
            })
        }
        log.info('addKernelTipOffListener called result:', result)
        return result
    }
    encodeUinAesInfo(...args: any[]) {
        log.info('encodeUinAesInfo called with args:', args)
        const result = this.instance.encodeUinAesInfo(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('encodeUinAesInfo called  promise result:', result)
                return res
            })
        }
        log.info('encodeUinAesInfo called result:', result)
        return result
    }
    getPskey(...args: any[]) {
        log.info('getPskey called with args:', args)
        const result = this.instance.getPskey(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getPskey called  promise result:', result)
                return res
            })
        }
        log.info('getPskey called result:', result)
        return result
    }
    removeKernelTipOffListener(...args: any[]) {
        log.info('removeKernelTipOffListener called with args:', args)
        const result = this.instance.removeKernelTipOffListener(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('removeKernelTipOffListener called  promise result:', result)
                return res
            })
        }
        log.info('removeKernelTipOffListener called result:', result)
        return result
    }
    tipOffMsgs(...args: any[]) {
        log.info('tipOffMsgs called with args:', args)
        const result = this.instance.tipOffMsgs(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('tipOffMsgs called  promise result:', result)
                return res
            })
        }
        log.info('tipOffMsgs called result:', result)
        return result
    }
    tipOffSendJsData(...args: any[]) {
        log.info('tipOffSendJsData called with args:', args)
        const result = this.instance.tipOffSendJsData(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('tipOffSendJsData called  promise result:', result)
                return res
            })
        }
        log.info('tipOffSendJsData called result:', result)
        return result
    }
};
export const getNodeIKernelTipOffService = (engine: any): any => {
    return class extends NodeIKernelTipOffService {
        
    }
}