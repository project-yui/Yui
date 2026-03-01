import { useLogger } from "../../common/log";

const log = useLogger('Wrapper/NodeIKernelSettingService')
export class NodeIKernelSettingService {
    protected static singleton?: any = undefined
    protected instance: any
    constructor(instance: any) {
        log.info('constructor called')
        this.instance = instance
    }
    addKernelSettingListener(...args: any[]) {
        log.info('addKernelSettingListener called with args:', args)
        const result = this.instance.addKernelSettingListener(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('addKernelSettingListener called  promise result:', result)
                return res
            })
        }
        log.info('addKernelSettingListener called result:', result)
        return result
    }
    clearCache(...args: any[]) {
        log.info('clearCache called with args:', args)
        const result = this.instance.clearCache(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('clearCache called  promise result:', result)
                return res
            })
        }
        log.info('clearCache called result:', result)
        return result
    }
    destroyAccount(...args: any[]) {
        log.info('destroyAccount called with args:', args)
        const result = this.instance.destroyAccount(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('destroyAccount called  promise result:', result)
                return res
            })
        }
        log.info('destroyAccount called result:', result)
        return result
    }
    getAutoLoginSwitch(...args: any[]) {
        log.info('getAutoLoginSwitch called with args:', args)
        const result = this.instance.getAutoLoginSwitch(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getAutoLoginSwitch called  promise result:', result)
                return res
            })
        }
        log.info('getAutoLoginSwitch called result:', result)
        return result
    }
    getNeedConfirmSwitch(...args: any[]) {
        log.info('getNeedConfirmSwitch called with args:', args)
        const result = this.instance.getNeedConfirmSwitch(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getNeedConfirmSwitch called  promise result:', result)
                return res
            })
        }
        log.info('getNeedConfirmSwitch called result:', result)
        return result
    }
    getPrivacySetting(...args: any[]) {
        log.info('getPrivacySetting called with args:', args)
        const result = this.instance.getPrivacySetting(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getPrivacySetting called  promise result:', result)
                return res
            })
        }
        log.info('getPrivacySetting called result:', result)
        return result
    }
    getQQBrowserSwitchFromQldQQ(...args: any[]) {
        log.info('getQQBrowserSwitchFromQldQQ called with args:', args)
        const result = this.instance.getQQBrowserSwitchFromQldQQ(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getQQBrowserSwitchFromQldQQ called  promise result:', result)
                return res
            })
        }
        log.info('getQQBrowserSwitchFromQldQQ called result:', result)
        return result
    }
    getSelfStartSwitch(...args: any[]) {
        log.info('getSelfStartSwitch called with args:', args)
        const result = this.instance.getSelfStartSwitch(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getSelfStartSwitch called  promise result:', result)
                return res
            })
        }
        log.info('getSelfStartSwitch called result:', result)
        return result
    }
    getSettingForBuffer(...args: any[]) {
        log.info('getSettingForBuffer called with args:', args)
        const result = this.instance.getSettingForBuffer(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getSettingForBuffer called  promise result:', result)
                return res
            })
        }
        log.info('getSettingForBuffer called result:', result)
        return result
    }
    getSettingForNum(...args: any[]) {
        log.info('getSettingForNum called with args:', args)
        const result = this.instance.getSettingForNum(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getSettingForNum called  promise result:', result)
                return res
            })
        }
        log.info('getSettingForNum called result:', result)
        return result
    }
    getSettingForStr(...args: any[]) {
        log.info('getSettingForStr called with args:', args)
        const result = this.instance.getSettingForStr(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getSettingForStr called  promise result:', result)
                return res
            })
        }
        log.info('getSettingForStr called result:', result)
        return result
    }
    isQQBrowserInstall(...args: any[]) {
        log.info('isQQBrowserInstall called with args:', args)
        const result = this.instance.isQQBrowserInstall(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('isQQBrowserInstall called  promise result:', result)
                return res
            })
        }
        log.info('isQQBrowserInstall called result:', result)
        return result
    }
    modifyAccount(...args: any[]) {
        log.info('modifyAccount called with args:', args)
        const result = this.instance.modifyAccount(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('modifyAccount called  promise result:', result)
                return res
            })
        }
        log.info('modifyAccount called result:', result)
        return result
    }
    openUrlInIM(...args: any[]) {
        log.info('openUrlInIM called with args:', args)
        const result = this.instance.openUrlInIM(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('openUrlInIM called  promise result:', result)
                return res
            })
        }
        log.info('openUrlInIM called result:', result)
        return result
    }
    openUrlWithQQBrowser(...args: any[]) {
        log.info('openUrlWithQQBrowser called with args:', args)
        const result = this.instance.openUrlWithQQBrowser(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('openUrlWithQQBrowser called  promise result:', result)
                return res
            })
        }
        log.info('openUrlWithQQBrowser called result:', result)
        return result
    }
    removeKernelSettingListener(...args: any[]) {
        log.info('removeKernelSettingListener called with args:', args)
        const result = this.instance.removeKernelSettingListener(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('removeKernelSettingListener called  promise result:', result)
                return res
            })
        }
        log.info('removeKernelSettingListener called result:', result)
        return result
    }
    scanCache(...args: any[]) {
        log.info('scanCache called with args:', args)
        const result = this.instance.scanCache(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('scanCache called  promise result:', result)
                return res
            })
        }
        log.info('scanCache called result:', result)
        return result
    }
    setAutoLoginSwitch(...args: any[]) {
        log.info('setAutoLoginSwitch called with args:', args)
        const result = this.instance.setAutoLoginSwitch(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setAutoLoginSwitch called  promise result:', result)
                return res
            })
        }
        log.info('setAutoLoginSwitch called result:', result)
        return result
    }
    setNeedConfirmSwitch(...args: any[]) {
        log.info('setNeedConfirmSwitch called with args:', args)
        const result = this.instance.setNeedConfirmSwitch(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setNeedConfirmSwitch called  promise result:', result)
                return res
            })
        }
        log.info('setNeedConfirmSwitch called result:', result)
        return result
    }
    setPrivacySetting(...args: any[]) {
        log.info('setPrivacySetting called with args:', args)
        const result = this.instance.setPrivacySetting(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setPrivacySetting called  promise result:', result)
                return res
            })
        }
        log.info('setPrivacySetting called result:', result)
        return result
    }
    setSelfStartSwitch(...args: any[]) {
        log.info('setSelfStartSwitch called with args:', args)
        const result = this.instance.setSelfStartSwitch(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setSelfStartSwitch called  promise result:', result)
                return res
            })
        }
        log.info('setSelfStartSwitch called result:', result)
        return result
    }
    setSettingForBuffer(...args: any[]) {
        log.info('setSettingForBuffer called with args:', args)
        const result = this.instance.setSettingForBuffer(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setSettingForBuffer called  promise result:', result)
                return res
            })
        }
        log.info('setSettingForBuffer called result:', result)
        return result
    }
    setSettingForNum(...args: any[]) {
        log.info('setSettingForNum called with args:', args)
        const result = this.instance.setSettingForNum(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setSettingForNum called  promise result:', result)
                return res
            })
        }
        log.info('setSettingForNum called result:', result)
        return result
    }
    setSettingForStr(...args: any[]) {
        log.info('setSettingForStr called with args:', args)
        const result = this.instance.setSettingForStr(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setSettingForStr called  promise result:', result)
                return res
            })
        }
        log.info('setSettingForStr called result:', result)
        return result
    }
    verifyNewAccount(...args: any[]) {
        log.info('verifyNewAccount called with args:', args)
        const result = this.instance.verifyNewAccount(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('verifyNewAccount called  promise result:', result)
                return res
            })
        }
        log.info('verifyNewAccount called result:', result)
        return result
    }
};
export const getNodeIKernelSettingService = (engine: any): any => {
    return class extends NodeIKernelSettingService {
        
    }
}