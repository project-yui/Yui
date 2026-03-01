import { useLogger } from "../../common/log";

const log = useLogger('Wrapper/NodeIKernelQiDianService')
export class NodeIKernelQiDianService {
    protected static singleton?: any = undefined
    protected instance: any
    constructor(instance: any) {
        log.info('constructor called')
        this.instance = instance
    }
    addKernelQiDianListener(...args: any[]) {
        log.info('addKernelQiDianListener called with args:', args)
        const result = this.instance.addKernelQiDianListener(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('addKernelQiDianListener called  promise result:', result)
                return res
            })
        }
        log.info('addKernelQiDianListener called result:', result)
        return result
    }
    removeKernelQiDianListener(...args: any[]) {
        log.info('removeKernelQiDianListener called with args:', args)
        const result = this.instance.removeKernelQiDianListener(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('removeKernelQiDianListener called  promise result:', result)
                return res
            })
        }
        log.info('removeKernelQiDianListener called result:', result)
        return result
    }
    requestExtUinForRemoteControl(...args: any[]) {
        log.info('requestExtUinForRemoteControl called with args:', args)
        const result = this.instance.requestExtUinForRemoteControl(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('requestExtUinForRemoteControl called  promise result:', result)
                return res
            })
        }
        log.info('requestExtUinForRemoteControl called result:', result)
        return result
    }
    requestMainUinForRemoteControl(...args: any[]) {
        log.info('requestMainUinForRemoteControl called with args:', args)
        const result = this.instance.requestMainUinForRemoteControl(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('requestMainUinForRemoteControl called  promise result:', result)
                return res
            })
        }
        log.info('requestMainUinForRemoteControl called result:', result)
        return result
    }
    requestNaviConfig(...args: any[]) {
        log.info('requestNaviConfig called with args:', args)
        const result = this.instance.requestNaviConfig(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('requestNaviConfig called  promise result:', result)
                return res
            })
        }
        log.info('requestNaviConfig called result:', result)
        return result
    }
    requestQidianUidFromUin(...args: any[]) {
        log.info('requestQidianUidFromUin called with args:', args)
        const result = this.instance.requestQidianUidFromUin(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('requestQidianUidFromUin called  promise result:', result)
                return res
            })
        }
        log.info('requestQidianUidFromUin called result:', result)
        return result
    }
    requestWpaCorpInfo(...args: any[]) {
        log.info('requestWpaCorpInfo called with args:', args)
        const result = this.instance.requestWpaCorpInfo(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('requestWpaCorpInfo called  promise result:', result)
                return res
            })
        }
        log.info('requestWpaCorpInfo called result:', result)
        return result
    }
    requestWpaSigT(...args: any[]) {
        log.info('requestWpaSigT called with args:', args)
        const result = this.instance.requestWpaSigT(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('requestWpaSigT called  promise result:', result)
                return res
            })
        }
        log.info('requestWpaSigT called result:', result)
        return result
    }
    requestWpaUserInfo(...args: any[]) {
        log.info('requestWpaUserInfo called with args:', args)
        const result = this.instance.requestWpaUserInfo(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('requestWpaUserInfo called  promise result:', result)
                return res
            })
        }
        log.info('requestWpaUserInfo called result:', result)
        return result
    }
};
export const getNodeIKernelQiDianService = (engine: any): any => {
    return class extends NodeIKernelQiDianService {
        
    }
}