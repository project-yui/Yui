import { useLogger } from "../../common/log";

const log = useLogger('Wrapper/NodeIOPSafePwdEdit')
export class NodeIOPSafePwdEdit {
    protected static singleton?: any = undefined
    protected instance: any
    constructor(instance: any) {
        log.info('constructor called')
        this.instance = instance
    }
    ClearAllInput(...args: any[]) {
        log.info('ClearAllInput called with args:', args)
        const result = this.instance.ClearAllInput(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('ClearAllInput called  promise result:', result)
                return res
            })
        }
        log.info('ClearAllInput called result:', result)
        return result
    }
    GetBufPwdHashOne(...args: any[]) {
        log.info('GetBufPwdHashOne called with args:', args)
        const result = this.instance.GetBufPwdHashOne(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('GetBufPwdHashOne called  promise result:', result)
                return res
            })
        }
        log.info('GetBufPwdHashOne called result:', result)
        return result
    }
    IsSupportSafeEdit(...args: any[]) {
        log.info('IsSupportSafeEdit called with args:', args)
        const result = this.instance.IsSupportSafeEdit(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('IsSupportSafeEdit called  promise result:', result)
                return res
            })
        }
        log.info('IsSupportSafeEdit called result:', result)
        return result
    }
    LoadPwdSafeEdit(...args: any[]) {
        log.info('LoadPwdSafeEdit called with args:', args)
        const result = this.instance.LoadPwdSafeEdit(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('LoadPwdSafeEdit called  promise result:', result)
                return res
            })
        }
        log.info('LoadPwdSafeEdit called result:', result)
        return result
    }
    SetFocus(...args: any[]) {
        log.info('SetFocus called with args:', args)
        const result = this.instance.SetFocus(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('SetFocus called  promise result:', result)
                return res
            })
        }
        log.info('SetFocus called result:', result)
        return result
    }
    SetInputPos(...args: any[]) {
        log.info('SetInputPos called with args:', args)
        const result = this.instance.SetInputPos(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('SetInputPos called  promise result:', result)
                return res
            })
        }
        log.info('SetInputPos called result:', result)
        return result
    }
    Softkeyborad(...args: any[]) {
        log.info('Softkeyborad called with args:', args)
        const result = this.instance.Softkeyborad(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('Softkeyborad called  promise result:', result)
                return res
            })
        }
        log.info('Softkeyborad called result:', result)
        return result
    }
    UnLoadPwdSafeEdit(...args: any[]) {
        log.info('UnLoadPwdSafeEdit called with args:', args)
        const result = this.instance.UnLoadPwdSafeEdit(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('UnLoadPwdSafeEdit called  promise result:', result)
                return res
            })
        }
        log.info('UnLoadPwdSafeEdit called result:', result)
        return result
    }
    addOPSafePwdEditListener(...args: any[]) {
        log.info('addOPSafePwdEditListener called with args:', args)
        const result = this.instance.addOPSafePwdEditListener(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('addOPSafePwdEditListener called  promise result:', result)
                return res
            })
        }
        log.info('addOPSafePwdEditListener called result:', result)
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
    removeOPSafePwdEditListener(...args: any[]) {
        log.info('removeOPSafePwdEditListener called with args:', args)
        const result = this.instance.removeOPSafePwdEditListener(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('removeOPSafePwdEditListener called  promise result:', result)
                return res
            })
        }
        log.info('removeOPSafePwdEditListener called result:', result)
        return result
    }
};
export const getNodeIOPSafePwdEdit = (engine: any): any => {
    return class extends NodeIOPSafePwdEdit {
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