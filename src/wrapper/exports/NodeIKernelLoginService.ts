import { useLogger } from "../../common/log";
const log = useLogger('Wrapper/NodeIKernelLoginService')
export class NodeIKernelLoginService {
    protected static singleton?: any = undefined
    protected instance: any
    constructor(instance: any) {
        log.info('constructor called')
        this.instance = instance
    }
    startPolling(...args: any[]) {
        log.info('startPolling called with args:', args)
        return this.instance.startPolling(...args)
    }
    setRemerberPwd(...args: any[]) {
        log.info('setRemerberPwd called with args:', args)
        return this.instance.setRemerberPwd(...args)
    }
    setLoginMiscData(...args: any[]) {
        log.info('setLoginMiscData called with args:', args)
        return this.instance.setLoginMiscData(...args)
    }
    setAutoLogin(...args: any[]) {
        log.info('setAutoLogin called with args:', args)
        return this.instance.setAutoLogin(...args)
    }
    resetLoginInfo(...args: any[]) {
        log.info('resetLoginInfo called with args:', args)
        return this.instance.resetLoginInfo(...args)
    }
    removeKernelLoginListener(...args: any[]) {
        log.info('removeKernelLoginListener called with args:', args)
        return this.instance.removeKernelLoginListener(...args)
    }
    registerUnitedConfigPushGroupList(...args: any[]) {
        log.info('registerUnitedConfigPushGroupList called with args:', args)
        return this.instance.registerUnitedConfigPushGroupList(...args)
    }
    quickLoginWithUin(...args: any[]) {
        log.info('quickLoginWithUin called with args:', args)
        return this.instance.quickLoginWithUin(...args)
    }
    passwordLogin(...args: any[]) {
        log.info('passwordLogin called with args:', args)
        const result = this.instance.passwordLogin(...args)
        if (result instanceof Promise) {
            return result.then((res: any) => {
                log.info('passwordLogin result:', res)
                return res
            })
        }
        log.info('passwordLogin result:', result)
        return result
    }
    loginUnusualDevice(...args: any[]) {
        log.info('loginUnusualDevice called with args:', args)
        return this.instance.loginUnusualDevice(...args)
    }
    loadNoLoginUnitedConfig(...args: any[]) {
        log.info('loadNoLoginUnitedConfig called with args:', args)
        return this.instance.loadNoLoginUnitedConfig(...args)
    }
    isHasLoginInfo(...args: any[]) {
        log.info('isHasLoginInfo called with args:', args)
        return this.instance.isHasLoginInfo(...args)
    }
    initConfig(...args: any[]) {
        log.info('initConfig called with args:', args)
        return this.instance.initConfig(...args)
    }
    getQRCodePicture(...args: any[]) {
        log.info('getQRCodePicture called with args:', args)
        return this.instance.getQRCodePicture(...args)
    }
    getMsfStatus(...args: any[]) {
        log.info('getMsfStatus called with args:', args)
        return this.instance.getMsfStatus(...args)
    }
    getMachineGuid(...args: any[]) {
        log.info('getMachineGuid called with args:', args)
        return this.instance.getMachineGuid(...args)
    }
    getLoginMiscData(...args: any[]) {
        log.info('getLoginMiscData called with args:', args)
        return this.instance.getLoginMiscData(...args)
    }
    getLoginList(...args: any[]) {
        log.info('getLoginList called with args:', args)
        return this.instance.getLoginList(...args)
    }
    destroy(...args: any[]) {
        log.info('destroy called with args:', args)
        return this.instance.destroy(...args)
    }
    deleteLoginInfo(...args: any[]) {
        log.info('deleteLoginInfo called with args:', args)
        return this.instance.deleteLoginInfo(...args)
    }
    connect(...args: any[]) {
        log.info('connect called with args:', args)
        return this.instance.connect(...args)
    }
    cancel(...args: any[]) {
        log.info('cancel called with args:', args)
        return this.instance.cancel(...args)
    }
    addKernelLoginListener(...args: any[]) {
        log.info('addKernelLoginListener called with args:', args)
        const listener = args[0]
        return this.instance.addKernelLoginListener(new Proxy(listener, {
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
        }))
    }
    abortPolling(...args: any[]) {
        log.info('abortPolling called with args:', args)
        return this.instance.abortPolling(...args)
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