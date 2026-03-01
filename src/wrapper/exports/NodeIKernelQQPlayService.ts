import { useLogger } from "../../common/log";

const log = useLogger('Wrapper/NodeIKernelQQPlayService')
export class NodeIKernelQQPlayService {
    protected static singleton?: any = undefined
    protected instance: any
    constructor(instance: any) {
        log.info('constructor called')
        this.instance = instance
    }
    addKernelQQPlayListener(...args: any[]) {
        log.info('addKernelQQPlayListener called with args:', args)
        const result = this.instance.addKernelQQPlayListener(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('addKernelQQPlayListener called  promise result:', result)
                return res
            })
        }
        log.info('addKernelQQPlayListener called result:', result)
        return result
    }
    createLnkShortcut(...args: any[]) {
        log.info('createLnkShortcut called with args:', args)
        const result = this.instance.createLnkShortcut(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('createLnkShortcut called  promise result:', result)
                return res
            })
        }
        log.info('createLnkShortcut called result:', result)
        return result
    }
    getDesktopPath(...args: any[]) {
        log.info('getDesktopPath called with args:', args)
        const result = this.instance.getDesktopPath(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getDesktopPath called  promise result:', result)
                return res
            })
        }
        log.info('getDesktopPath called result:', result)
        return result
    }
    getSimulatorProcStatus(...args: any[]) {
        log.info('getSimulatorProcStatus called with args:', args)
        const result = this.instance.getSimulatorProcStatus(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getSimulatorProcStatus called  promise result:', result)
                return res
            })
        }
        log.info('getSimulatorProcStatus called result:', result)
        return result
    }
    getSystemRegValue(...args: any[]) {
        log.info('getSystemRegValue called with args:', args)
        const result = this.instance.getSystemRegValue(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getSystemRegValue called  promise result:', result)
                return res
            })
        }
        log.info('getSystemRegValue called result:', result)
        return result
    }
    init(...args: any[]) {
        log.info('init called with args:', args)
        const result = this.instance.init(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('init called  promise result:', result)
                return res
            })
        }
        log.info('init called result:', result)
        return result
    }
    sendMsg2Simulator(...args: any[]) {
        log.info('sendMsg2Simulator called with args:', args)
        const result = this.instance.sendMsg2Simulator(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('sendMsg2Simulator called  promise result:', result)
                return res
            })
        }
        log.info('sendMsg2Simulator called result:', result)
        return result
    }
    setForegroundWindow(...args: any[]) {
        log.info('setForegroundWindow called with args:', args)
        const result = this.instance.setForegroundWindow(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setForegroundWindow called  promise result:', result)
                return res
            })
        }
        log.info('setForegroundWindow called result:', result)
        return result
    }
    setSystemRegValue(...args: any[]) {
        log.info('setSystemRegValue called with args:', args)
        const result = this.instance.setSystemRegValue(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setSystemRegValue called  promise result:', result)
                return res
            })
        }
        log.info('setSystemRegValue called result:', result)
        return result
    }
    startSimulator(...args: any[]) {
        log.info('startSimulator called with args:', args)
        const result = this.instance.startSimulator(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('startSimulator called  promise result:', result)
                return res
            })
        }
        log.info('startSimulator called result:', result)
        return result
    }
    uninit(...args: any[]) {
        log.info('uninit called with args:', args)
        const result = this.instance.uninit(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('uninit called  promise result:', result)
                return res
            })
        }
        log.info('uninit called result:', result)
        return result
    }
};
export const getNodeIKernelQQPlayService = (engine: any): any => {
    return class extends NodeIKernelQQPlayService {
        
    }
}