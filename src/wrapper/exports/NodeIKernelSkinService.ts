import { useLogger } from "../../common/log";

const log = useLogger('Wrapper/NodeIKernelSkinService')
export class NodeIKernelSkinService {
    protected static singleton?: any = undefined
    protected instance: any
    constructor(instance: any) {
        log.info('constructor called')
        this.instance = instance
    }
    addKernelSkinListener(...args: any[]) {
        log.info('addKernelSkinListener called with args:', args)
        const result = this.instance.addKernelSkinListener(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('addKernelSkinListener called  promise result:', result)
                return res
            })
        }
        log.info('addKernelSkinListener called result:', result)
        return result
    }
    getRecommendAIOColor(...args: any[]) {
        log.info('getRecommendAIOColor called with args:', args)
        const result = this.instance.getRecommendAIOColor(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getRecommendAIOColor called  promise result:', result)
                return res
            })
        }
        log.info('getRecommendAIOColor called result:', result)
        return result
    }
    getRecommendBubbleColor(...args: any[]) {
        log.info('getRecommendBubbleColor called with args:', args)
        const result = this.instance.getRecommendBubbleColor(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getRecommendBubbleColor called  promise result:', result)
                return res
            })
        }
        log.info('getRecommendBubbleColor called result:', result)
        return result
    }
    getSystemThemeList(...args: any[]) {
        log.info('getSystemThemeList called with args:', args)
        const result = this.instance.getSystemThemeList(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getSystemThemeList called  promise result:', result)
                return res
            })
        }
        log.info('getSystemThemeList called result:', result)
        return result
    }
    getSystemThemePackageList(...args: any[]) {
        log.info('getSystemThemePackageList called with args:', args)
        const result = this.instance.getSystemThemePackageList(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getSystemThemePackageList called  promise result:', result)
                return res
            })
        }
        log.info('getSystemThemePackageList called result:', result)
        return result
    }
    getTemplateThemeList(...args: any[]) {
        log.info('getTemplateThemeList called with args:', args)
        const result = this.instance.getTemplateThemeList(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getTemplateThemeList called  promise result:', result)
                return res
            })
        }
        log.info('getTemplateThemeList called result:', result)
        return result
    }
    getThemeHistory(...args: any[]) {
        log.info('getThemeHistory called with args:', args)
        const result = this.instance.getThemeHistory(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getThemeHistory called  promise result:', result)
                return res
            })
        }
        log.info('getThemeHistory called result:', result)
        return result
    }
    getThemeInfo(...args: any[]) {
        log.info('getThemeInfo called with args:', args)
        const result = this.instance.getThemeInfo(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getThemeInfo called  promise result:', result)
                return res
            })
        }
        log.info('getThemeInfo called result:', result)
        return result
    }
    getThemeInfoFromImage(...args: any[]) {
        log.info('getThemeInfoFromImage called with args:', args)
        const result = this.instance.getThemeInfoFromImage(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getThemeInfoFromImage called  promise result:', result)
                return res
            })
        }
        log.info('getThemeInfoFromImage called result:', result)
        return result
    }
    previewTheme(...args: any[]) {
        log.info('previewTheme called with args:', args)
        const result = this.instance.previewTheme(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('previewTheme called  promise result:', result)
                return res
            })
        }
        log.info('previewTheme called result:', result)
        return result
    }
    removeKernelSkinListener(...args: any[]) {
        log.info('removeKernelSkinListener called with args:', args)
        const result = this.instance.removeKernelSkinListener(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('removeKernelSkinListener called  promise result:', result)
                return res
            })
        }
        log.info('removeKernelSkinListener called result:', result)
        return result
    }
    setTemplateCustomPrimaryColor(...args: any[]) {
        log.info('setTemplateCustomPrimaryColor called with args:', args)
        const result = this.instance.setTemplateCustomPrimaryColor(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setTemplateCustomPrimaryColor called  promise result:', result)
                return res
            })
        }
        log.info('setTemplateCustomPrimaryColor called result:', result)
        return result
    }
    setThemeInfo(...args: any[]) {
        log.info('setThemeInfo called with args:', args)
        const result = this.instance.setThemeInfo(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setThemeInfo called  promise result:', result)
                return res
            })
        }
        log.info('setThemeInfo called result:', result)
        return result
    }
    uploadImage(...args: any[]) {
        log.info('uploadImage called with args:', args)
        const result = this.instance.uploadImage(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('uploadImage called  promise result:', result)
                return res
            })
        }
        log.info('uploadImage called result:', result)
        return result
    }
};
export const getNodeIKernelSkinService = (engine: any): any => {
    return class extends NodeIKernelSkinService {
        
    }
}