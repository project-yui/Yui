import { useLogger } from "../../common/log";

const log = useLogger('Wrapper/NodeIKernelLoginService')
export class NodeIKernelLoginService {
    protected static singleton?: any = undefined
    protected instance: any
    constructor(instance: any) {
        log.info('constructor called')
        this.instance = instance
    }
    abortPolling(...args: any[]) {
        log.info('abortPolling called with args:', args)
        const result = this.instance.abortPolling(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('abortPolling called  promise result:', result)
                return res
            })
        }
        log.info('abortPolling called result:', result)
        return result
    }
    addKernelLoginListener(...args: any[]) {
        const listener = new Proxy(args[0], {
            get(target, p, recv) {
                return function (...args: any[]) {
                    log.info(`NodeIKernelLoginService/${String(p)} call start`, args)
                    const ignore: string[] = [
                        // 'onLoginConnecting',
                        // 'onLoginConnected',
                        // 'onQRCodeLoginSucceed', // 触发Login -> init,start
                        // 'onLoginState',
                    ]
                    if (ignore.includes(String(p))) {
                        log.info(`NodeIKernelLoginService/${String(p)} call ignored.`, args)
                        return
                    }
                    const result = target[p](...args)
                    log.info(`NodeIKernelLoginService/${String(p)} call end`, args)
                    return result
                }
            }
        })
        log.info('addKernelLoginListener called with args:', args)
        const result = this.instance.addKernelLoginListener(listener)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('addKernelLoginListener called  promise result:', result)
                return res
            })
        }
        log.info('addKernelLoginListener called result:', result)
        return result
    }
    cancel(...args: any[]) {
        log.info('cancel called with args:', args)
        const result = this.instance.cancel(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('cancel called  promise result:', result)
                return res
            })
        }
        log.info('cancel called result:', result)
        return result
    }
    connect(...args: any[]) {
        log.info('connect called with args:', args)
        const result = this.instance.connect(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('connect called  promise result:', result)
                return res
            })
        }
        log.info('connect called result:', result)
        return result
    }
    deleteLoginInfo(...args: any[]) {
        log.info('deleteLoginInfo called with args:', args)
        const result = this.instance.deleteLoginInfo(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('deleteLoginInfo called  promise result:', result)
                return res
            })
        }
        log.info('deleteLoginInfo called result:', result)
        return result
    }
    destroy(...args: any[]) {
        log.info('destroy called with args:', args)
        const result = this.instance.destroy(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('destroy called  promise result:', result)
                return res
            })
        }
        log.info('destroy called result:', result)
        return result
    }
    getLoginList(...args: any[]) {
        log.info('getLoginList called with args:', args)
        const result = this.instance.getLoginList(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getLoginList called  promise result:', result)
                return res
            })
        }
        log.info('getLoginList called result:', result)
        return result
    }
    getLoginMiscData(...args: any[]) {
        log.info('getLoginMiscData called with args:', args)
        const result = this.instance.getLoginMiscData(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getLoginMiscData called  promise result:', result)
                return res
            })
        }
        log.info('getLoginMiscData called result:', result)
        return result
    }
    getMachineGuid(...args: any[]) {
        log.info('getMachineGuid called with args:', args)
        const result = this.instance.getMachineGuid(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getMachineGuid called  promise result:', result)
                return res
            })
        }
        log.info('getMachineGuid called result:', result)
        return result
    }
    getMsfStatus(...args: any[]) {
        log.info('getMsfStatus called with args:', args)
        const result = this.instance.getMsfStatus(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getMsfStatus called  promise result:', result)
                return res
            })
        }
        log.info('getMsfStatus called result:', result)
        return result
    }
    getQRCodePicture(...args: any[]) {
        log.info('getQRCodePicture called with args:', args)
        const result = this.instance.getQRCodePicture(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getQRCodePicture called  promise result:', result)
                return res
            })
        }
        log.info('getQRCodePicture called result:', result)
        return result
    }
    initConfig(...args: any[]) {
        log.info('initConfig called with args:', args)
        const result = this.instance.initConfig(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('initConfig called  promise result:', result)
                return res
            })
        }
        log.info('initConfig called result:', result)
        return result
    }
    isHasLoginInfo(...args: any[]) {
        log.info('isHasLoginInfo called with args:', args)
        const result = this.instance.isHasLoginInfo(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('isHasLoginInfo called  promise result:', result)
                return res
            })
        }
        log.info('isHasLoginInfo called result:', result)
        return result
    }
    loadNoLoginUnitedConfig(...args: any[]) {
        log.info('loadNoLoginUnitedConfig called with args:', args)
        const result = this.instance.loadNoLoginUnitedConfig(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('loadNoLoginUnitedConfig called  promise result:', result)
                return res
            })
        }
        log.info('loadNoLoginUnitedConfig called result:', result)
        return result
    }
    loginUnusualDevice(...args: any[]) {
        log.info('loginUnusualDevice called with args:', args)
        const result = this.instance.loginUnusualDevice(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('loginUnusualDevice called  promise result:', result)
                return res
            })
        }
        log.info('loginUnusualDevice called result:', result)
        return result
    }
    passwordLogin(...args: any[]) {
        log.info('passwordLogin called with args:', args)
        const result = this.instance.passwordLogin(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('passwordLogin called  promise result:', result)
                return res
            })
        }
        log.info('passwordLogin called result:', result)
        return result
    }
    quickLoginWithUin(...args: any[]) {
        log.info('quickLoginWithUin called with args:', args)
        const result = this.instance.quickLoginWithUin(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('quickLoginWithUin called  promise result:', result)
                return res
            })
        }
        log.info('quickLoginWithUin called result:', result)
        return result
    }
    registerUnitedConfigPushGroupList(...args: any[]) {
        log.info('registerUnitedConfigPushGroupList called with args:', args)
        const result = this.instance.registerUnitedConfigPushGroupList(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('registerUnitedConfigPushGroupList called  promise result:', result)
                return res
            })
        }
        log.info('registerUnitedConfigPushGroupList called result:', result)
        return result
    }
    removeKernelLoginListener(...args: any[]) {
        log.info('removeKernelLoginListener called with args:', args)
        const result = this.instance.removeKernelLoginListener(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('removeKernelLoginListener called  promise result:', result)
                return res
            })
        }
        log.info('removeKernelLoginListener called result:', result)
        return result
    }
    resetLoginInfo(...args: any[]) {
        log.info('resetLoginInfo called with args:', args)
        const result = this.instance.resetLoginInfo(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('resetLoginInfo called  promise result:', result)
                return res
            })
        }
        log.info('resetLoginInfo called result:', result)
        return result
    }
    setAutoLogin(...args: any[]) {
        log.info('setAutoLogin called with args:', args)
        const result = this.instance.setAutoLogin(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setAutoLogin called  promise result:', result)
                return res
            })
        }
        log.info('setAutoLogin called result:', result)
        return result
    }
    setLoginMiscData(...args: any[]) {
        log.info('setLoginMiscData called with args:', args)
        const result = this.instance.setLoginMiscData(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setLoginMiscData called  promise result:', result)
                return res
            })
        }
        log.info('setLoginMiscData called result:', result)
        return result
    }
    setRemerberPwd(...args: any[]) {
        log.info('setRemerberPwd called with args:', args)
        const result = this.instance.setRemerberPwd(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setRemerberPwd called  promise result:', result)
                return res
            })
        }
        log.info('setRemerberPwd called result:', result)
        return result
    }
    startPolling(...args: any[]) {
        log.info('startPolling called with args:', args)
        const result = this.instance.startPolling(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('startPolling called  promise result:', result)
                return res
            })
        }
        log.info('startPolling called result:', result)
        return result
    }
};
export const getNodeIKernelLoginService = (engine: any): any => {
    return class extends NodeIKernelLoginService {
        static get() {
            log.info('get called')
            const instance = engine.get()
            if (!this.singleton) {
                this.singleton = new this(instance)
            }
            return this.singleton
        }
    }
}