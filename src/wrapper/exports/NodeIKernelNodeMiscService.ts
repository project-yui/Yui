import { useLogger } from "../../common/log";

const log = useLogger('Wrapper/NodeIKernelNodeMiscService')
export class NodeIKernelNodeMiscService {
    protected static singleton?: any = undefined
    protected instance: any
    constructor(instance: any) {
        log.info('constructor called')
        this.instance = instance
    }
    adaptMiniAppShareInfo(...args: any[]) {
        log.info('adaptMiniAppShareInfo called with args:', args)
        const result = this.instance.adaptMiniAppShareInfo(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('adaptMiniAppShareInfo called  promise result:', result)
                return res
            })
        }
        log.info('adaptMiniAppShareInfo called result:', result)
        return result
    }
    addBind(...args: any[]) {
        log.info('addBind called with args:', args)
        const result = this.instance.addBind(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('addBind called  promise result:', result)
                return res
            })
        }
        log.info('addBind called result:', result)
        return result
    }
    addKernelNodeMiscListener(...args: any[]) {
        log.info('addKernelNodeMiscListener called with args:', args)
        const result = this.instance.addKernelNodeMiscListener(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('addKernelNodeMiscListener called  promise result:', result)
                return res
            })
        }
        log.info('addKernelNodeMiscListener called result:', result)
        return result
    }
    addLogUploadConfig(...args: any[]) {
        log.info('addLogUploadConfig called with args:', args)
        const result = this.instance.addLogUploadConfig(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('addLogUploadConfig called  promise result:', result)
                return res
            })
        }
        log.info('addLogUploadConfig called result:', result)
        return result
    }
    applyAddToMyApps(...args: any[]) {
        log.info('applyAddToMyApps called with args:', args)
        const result = this.instance.applyAddToMyApps(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('applyAddToMyApps called  promise result:', result)
                return res
            })
        }
        log.info('applyAddToMyApps called result:', result)
        return result
    }
    callLongCaptureExit(...args: any[]) {
        log.info('callLongCaptureExit called with args:', args)
        const result = this.instance.callLongCaptureExit(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('callLongCaptureExit called  promise result:', result)
                return res
            })
        }
        log.info('callLongCaptureExit called result:', result)
        return result
    }
    cancelDownloadMiniApp(...args: any[]) {
        log.info('cancelDownloadMiniApp called with args:', args)
        const result = this.instance.cancelDownloadMiniApp(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('cancelDownloadMiniApp called  promise result:', result)
                return res
            })
        }
        log.info('cancelDownloadMiniApp called result:', result)
        return result
    }
    cancelDownloadMiniGame(...args: any[]) {
        log.info('cancelDownloadMiniGame called with args:', args)
        const result = this.instance.cancelDownloadMiniGame(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('cancelDownloadMiniGame called  promise result:', result)
                return res
            })
        }
        log.info('cancelDownloadMiniGame called result:', result)
        return result
    }
    cancelOCRImage(...args: any[]) {
        log.info('cancelOCRImage called with args:', args)
        const result = this.instance.cancelOCRImage(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('cancelOCRImage called  promise result:', result)
                return res
            })
        }
        log.info('cancelOCRImage called result:', result)
        return result
    }
    changeSendKey(...args: any[]) {
        log.info('changeSendKey called with args:', args)
        const result = this.instance.changeSendKey(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('changeSendKey called  promise result:', result)
                return res
            })
        }
        log.info('changeSendKey called result:', result)
        return result
    }
    checkIfHaveAvailableSidecarDevice(...args: any[]) {
        log.info('checkIfHaveAvailableSidecarDevice called with args:', args)
        const result = this.instance.checkIfHaveAvailableSidecarDevice(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('checkIfHaveAvailableSidecarDevice called  promise result:', result)
                return res
            })
        }
        log.info('checkIfHaveAvailableSidecarDevice called result:', result)
        return result
    }
    checkIsSupportAutoDetect(...args: any[]) {
        log.info('checkIsSupportAutoDetect called with args:', args)
        const result = this.instance.checkIsSupportAutoDetect(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('checkIsSupportAutoDetect called  promise result:', result)
                return res
            })
        }
        log.info('checkIsSupportAutoDetect called result:', result)
        return result
    }
    cleanWindowsInfo(...args: any[]) {
        log.info('cleanWindowsInfo called with args:', args)
        const result = this.instance.cleanWindowsInfo(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('cleanWindowsInfo called  promise result:', result)
                return res
            })
        }
        log.info('cleanWindowsInfo called result:', result)
        return result
    }
    clearQzoneUnreadCount(...args: any[]) {
        log.info('clearQzoneUnreadCount called with args:', args)
        const result = this.instance.clearQzoneUnreadCount(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('clearQzoneUnreadCount called  promise result:', result)
                return res
            })
        }
        log.info('clearQzoneUnreadCount called result:', result)
        return result
    }
    clearQzoneUnreadCountWithRedDot(...args: any[]) {
        log.info('clearQzoneUnreadCountWithRedDot called with args:', args)
        const result = this.instance.clearQzoneUnreadCountWithRedDot(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('clearQzoneUnreadCountWithRedDot called  promise result:', result)
                return res
            })
        }
        log.info('clearQzoneUnreadCountWithRedDot called result:', result)
        return result
    }
    closeWXMiniApp(...args: any[]) {
        log.info('closeWXMiniApp called with args:', args)
        const result = this.instance.closeWXMiniApp(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('closeWXMiniApp called  promise result:', result)
                return res
            })
        }
        log.info('closeWXMiniApp called result:', result)
        return result
    }
    delAutoRun(...args: any[]) {
        log.info('delAutoRun called with args:', args)
        const result = this.instance.delAutoRun(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('delAutoRun called  promise result:', result)
                return res
            })
        }
        log.info('delAutoRun called result:', result)
        return result
    }
    delBind(...args: any[]) {
        log.info('delBind called with args:', args)
        const result = this.instance.delBind(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('delBind called  promise result:', result)
                return res
            })
        }
        log.info('delBind called result:', result)
        return result
    }
    deleteShareFile(...args: any[]) {
        log.info('deleteShareFile called with args:', args)
        const result = this.instance.deleteShareFile(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('deleteShareFile called  promise result:', result)
                return res
            })
        }
        log.info('deleteShareFile called result:', result)
        return result
    }
    dispatchWmpfEvent(...args: any[]) {
        log.info('dispatchWmpfEvent called with args:', args)
        const result = this.instance.dispatchWmpfEvent(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('dispatchWmpfEvent called  promise result:', result)
                return res
            })
        }
        log.info('dispatchWmpfEvent called result:', result)
        return result
    }
    doAction(...args: any[]) {
        log.info('doAction called with args:', args)
        const result = this.instance.doAction(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('doAction called  promise result:', result)
                return res
            })
        }
        log.info('doAction called result:', result)
        return result
    }
    doPostAction(...args: any[]) {
        log.info('doPostAction called with args:', args)
        const result = this.instance.doPostAction(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('doPostAction called  promise result:', result)
                return res
            })
        }
        log.info('doPostAction called result:', result)
        return result
    }
    downloadMiniApp(...args: any[]) {
        log.info('downloadMiniApp called with args:', args)
        const result = this.instance.downloadMiniApp(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('downloadMiniApp called  promise result:', result)
                return res
            })
        }
        log.info('downloadMiniApp called result:', result)
        return result
    }
    downloadMiniGame(...args: any[]) {
        log.info('downloadMiniGame called with args:', args)
        const result = this.instance.downloadMiniGame(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('downloadMiniGame called  promise result:', result)
                return res
            })
        }
        log.info('downloadMiniGame called result:', result)
        return result
    }
    encodeAES(...args: any[]) {
        log.info('encodeAES called with args:', args)
        const result = this.instance.encodeAES(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('encodeAES called  promise result:', result)
                return res
            })
        }
        log.info('encodeAES called result:', result)
        return result
    }
    endScreenCapture(...args: any[]) {
        log.info('endScreenCapture called with args:', args)
        const result = this.instance.endScreenCapture(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('endScreenCapture called  promise result:', result)
                return res
            })
        }
        log.info('endScreenCapture called result:', result)
        return result
    }
    flashWindowInTaskbar(...args: any[]) {
        log.info('flashWindowInTaskbar called with args:', args)
        const result = this.instance.flashWindowInTaskbar(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('flashWindowInTaskbar called  promise result:', result)
                return res
            })
        }
        log.info('flashWindowInTaskbar called result:', result)
        return result
    }
    getAmsSDKInfo(...args: any[]) {
        log.info('getAmsSDKInfo called with args:', args)
        const result = this.instance.getAmsSDKInfo(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getAmsSDKInfo called  promise result:', result)
                return res
            })
        }
        log.info('getAmsSDKInfo called result:', result)
        return result
    }
    getAppInfoById(...args: any[]) {
        log.info('getAppInfoById called with args:', args)
        const result = this.instance.getAppInfoById(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getAppInfoById called  promise result:', result)
                return res
            })
        }
        log.info('getAppInfoById called result:', result)
        return result
    }
    getAppInfoByLink(...args: any[]) {
        log.info('getAppInfoByLink called with args:', args)
        const result = this.instance.getAppInfoByLink(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getAppInfoByLink called  promise result:', result)
                return res
            })
        }
        log.info('getAppInfoByLink called result:', result)
        return result
    }
    getConcernWeather(...args: any[]) {
        log.info('getConcernWeather called with args:', args)
        const result = this.instance.getConcernWeather(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getConcernWeather called  promise result:', result)
                return res
            })
        }
        log.info('getConcernWeather called result:', result)
        return result
    }
    getCurWindowInfo(...args: any[]) {
        log.info('getCurWindowInfo called with args:', args)
        const result = this.instance.getCurWindowInfo(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getCurWindowInfo called  promise result:', result)
                return res
            })
        }
        log.info('getCurWindowInfo called result:', result)
        return result
    }
    getCurWindowInfoExceptList(...args: any[]) {
        log.info('getCurWindowInfoExceptList called with args:', args)
        const result = this.instance.getCurWindowInfoExceptList(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getCurWindowInfoExceptList called  promise result:', result)
                return res
            })
        }
        log.info('getCurWindowInfoExceptList called result:', result)
        return result
    }
    getDeviceInfo(...args: any[]) {
        log.info('getDeviceInfo called with args:', args)
        const result = this.instance.getDeviceInfo(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getDeviceInfo called  promise result:', result)
                return res
            })
        }
        log.info('getDeviceInfo called result:', result)
        return result
    }
    getDisplayInfo(...args: any[]) {
        log.info('getDisplayInfo called with args:', args)
        const result = this.instance.getDisplayInfo(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getDisplayInfo called  promise result:', result)
                return res
            })
        }
        log.info('getDisplayInfo called result:', result)
        return result
    }
    getGetFullScreenInfo(...args: any[]) {
        log.info('getGetFullScreenInfo called with args:', args)
        const result = this.instance.getGetFullScreenInfo(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getGetFullScreenInfo called  promise result:', result)
                return res
            })
        }
        log.info('getGetFullScreenInfo called result:', result)
        return result
    }
    getGroupMemberOpenID(...args: any[]) {
        log.info('getGroupMemberOpenID called with args:', args)
        const result = this.instance.getGroupMemberOpenID(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getGroupMemberOpenID called  promise result:', result)
                return res
            })
        }
        log.info('getGroupMemberOpenID called result:', result)
        return result
    }
    getGroupOpenID(...args: any[]) {
        log.info('getGroupOpenID called with args:', args)
        const result = this.instance.getGroupOpenID(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getGroupOpenID called  promise result:', result)
                return res
            })
        }
        log.info('getGroupOpenID called result:', result)
        return result
    }
    getMiniAppPath(...args: any[]) {
        log.info('getMiniAppPath called with args:', args)
        const result = this.instance.getMiniAppPath(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getMiniAppPath called  promise result:', result)
                return res
            })
        }
        log.info('getMiniAppPath called result:', result)
        return result
    }
    getMiniGamePath(...args: any[]) {
        log.info('getMiniGamePath called with args:', args)
        const result = this.instance.getMiniGamePath(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getMiniGamePath called  promise result:', result)
                return res
            })
        }
        log.info('getMiniGamePath called result:', result)
        return result
    }
    getMiniGameV2EngineConfig(...args: any[]) {
        log.info('getMiniGameV2EngineConfig called with args:', args)
        const result = this.instance.getMiniGameV2EngineConfig(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getMiniGameV2EngineConfig called  promise result:', result)
                return res
            })
        }
        log.info('getMiniGameV2EngineConfig called result:', result)
        return result
    }
    getMyAppList(...args: any[]) {
        log.info('getMyAppList called with args:', args)
        const result = this.instance.getMyAppList(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getMyAppList called  promise result:', result)
                return res
            })
        }
        log.info('getMyAppList called result:', result)
        return result
    }
    getNodeAndQQIPCVersions(...args: any[]) {
        log.info('getNodeAndQQIPCVersions called with args:', args)
        const result = this.instance.getNodeAndQQIPCVersions(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getNodeAndQQIPCVersions called  promise result:', result)
                return res
            })
        }
        log.info('getNodeAndQQIPCVersions called result:', result)
        return result
    }
    getOpenAuth(...args: any[]) {
        log.info('getOpenAuth called with args:', args)
        const result = this.instance.getOpenAuth(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getOpenAuth called  promise result:', result)
                return res
            })
        }
        log.info('getOpenAuth called result:', result)
        return result
    }
    getOpenAuthDelegateCode(...args: any[]) {
        log.info('getOpenAuthDelegateCode called with args:', args)
        const result = this.instance.getOpenAuthDelegateCode(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getOpenAuthDelegateCode called  promise result:', result)
                return res
            })
        }
        log.info('getOpenAuthDelegateCode called result:', result)
        return result
    }
    getQQlevelInfo(...args: any[]) {
        log.info('getQQlevelInfo called with args:', args)
        const result = this.instance.getQQlevelInfo(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getQQlevelInfo called  promise result:', result)
                return res
            })
        }
        log.info('getQQlevelInfo called result:', result)
        return result
    }
    getQimei36(...args: any[]) {
        log.info('getQimei36 called with args:', args)
        const result = this.instance.getQimei36(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getQimei36 called  promise result:', result)
                return res
            })
        }
        log.info('getQimei36 called result:', result)
        return result
    }
    getQimei36WithNewSdk(...args: any[]) {
        log.info('getQimei36WithNewSdk called with args:', args)
        const result = this.instance.getQimei36WithNewSdk(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getQimei36WithNewSdk called  promise result:', result)
                return res
            })
        }
        log.info('getQimei36WithNewSdk called result:', result)
        return result
    }
    getQzoneUnreadCount(...args: any[]) {
        log.info('getQzoneUnreadCount called with args:', args)
        const result = this.instance.getQzoneUnreadCount(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getQzoneUnreadCount called  promise result:', result)
                return res
            })
        }
        log.info('getQzoneUnreadCount called result:', result)
        return result
    }
    getRelationUinToOpenID(...args: any[]) {
        log.info('getRelationUinToOpenID called with args:', args)
        const result = this.instance.getRelationUinToOpenID(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getRelationUinToOpenID called  promise result:', result)
                return res
            })
        }
        log.info('getRelationUinToOpenID called result:', result)
        return result
    }
    getRelaunchParams(...args: any[]) {
        log.info('getRelaunchParams called with args:', args)
        const result = this.instance.getRelaunchParams(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getRelaunchParams called  promise result:', result)
                return res
            })
        }
        log.info('getRelaunchParams called result:', result)
        return result
    }
    getSendKey(...args: any[]) {
        log.info('getSendKey called with args:', args)
        const result = this.instance.getSendKey(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getSendKey called  promise result:', result)
                return res
            })
        }
        log.info('getSendKey called result:', result)
        return result
    }
    getUserDataDir(...args: any[]) {
        log.info('getUserDataDir called with args:', args)
        const result = this.instance.getUserDataDir(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getUserDataDir called  promise result:', result)
                return res
            })
        }
        log.info('getUserDataDir called result:', result)
        return result
    }
    getWindowsInfo(...args: any[]) {
        log.info('getWindowsInfo called with args:', args)
        const result = this.instance.getWindowsInfo(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getWindowsInfo called  promise result:', result)
                return res
            })
        }
        log.info('getWindowsInfo called result:', result)
        return result
    }
    getWindowsMenuInstallStatus(...args: any[]) {
        log.info('getWindowsMenuInstallStatus called with args:', args)
        const result = this.instance.getWindowsMenuInstallStatus(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getWindowsMenuInstallStatus called  promise result:', result)
                return res
            })
        }
        log.info('getWindowsMenuInstallStatus called result:', result)
        return result
    }
    initAmsSDK(...args: any[]) {
        log.info('initAmsSDK called with args:', args)
        const result = this.instance.initAmsSDK(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('initAmsSDK called  promise result:', result)
                return res
            })
        }
        log.info('initAmsSDK called result:', result)
        return result
    }
    initScreenShotPlugin(...args: any[]) {
        log.info('initScreenShotPlugin called with args:', args)
        const result = this.instance.initScreenShotPlugin(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('initScreenShotPlugin called  promise result:', result)
                return res
            })
        }
        log.info('initScreenShotPlugin called result:', result)
        return result
    }
    initWXMiniAppSDK(...args: any[]) {
        log.info('initWXMiniAppSDK called with args:', args)
        const result = this.instance.initWXMiniAppSDK(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('initWXMiniAppSDK called  promise result:', result)
                return res
            })
        }
        log.info('initWXMiniAppSDK called result:', result)
        return result
    }
    installApp(...args: any[]) {
        log.info('installApp called with args:', args)
        const result = this.instance.installApp(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('installApp called  promise result:', result)
                return res
            })
        }
        log.info('installApp called result:', result)
        return result
    }
    isAppInstalled(...args: any[]) {
        log.info('isAppInstalled called with args:', args)
        const result = this.instance.isAppInstalled(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('isAppInstalled called  promise result:', result)
                return res
            })
        }
        log.info('isAppInstalled called result:', result)
        return result
    }
    isDwmCompositionEnabled(...args: any[]) {
        log.info('isDwmCompositionEnabled called with args:', args)
        const result = this.instance.isDwmCompositionEnabled(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('isDwmCompositionEnabled called  promise result:', result)
                return res
            })
        }
        log.info('isDwmCompositionEnabled called result:', result)
        return result
    }
    isMiniAppAlreadyExist(...args: any[]) {
        log.info('isMiniAppAlreadyExist called with args:', args)
        const result = this.instance.isMiniAppAlreadyExist(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('isMiniAppAlreadyExist called  promise result:', result)
                return res
            })
        }
        log.info('isMiniAppAlreadyExist called result:', result)
        return result
    }
    isMiniAppExist(...args: any[]) {
        log.info('isMiniAppExist called with args:', args)
        const result = this.instance.isMiniAppExist(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('isMiniAppExist called  promise result:', result)
                return res
            })
        }
        log.info('isMiniAppExist called result:', result)
        return result
    }
    isMiniGameAlreadyExist(...args: any[]) {
        log.info('isMiniGameAlreadyExist called with args:', args)
        const result = this.instance.isMiniGameAlreadyExist(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('isMiniGameAlreadyExist called  promise result:', result)
                return res
            })
        }
        log.info('isMiniGameAlreadyExist called result:', result)
        return result
    }
    isMiniGameExist(...args: any[]) {
        log.info('isMiniGameExist called with args:', args)
        const result = this.instance.isMiniGameExist(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('isMiniGameExist called  promise result:', result)
                return res
            })
        }
        log.info('isMiniGameExist called result:', result)
        return result
    }
    isOldQQRunning(...args: any[]) {
        log.info('isOldQQRunning called with args:', args)
        const result = this.instance.isOldQQRunning(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('isOldQQRunning called  promise result:', result)
                return res
            })
        }
        log.info('isOldQQRunning called result:', result)
        return result
    }
    isScreenCaptureOrRecording(...args: any[]) {
        log.info('isScreenCaptureOrRecording called with args:', args)
        const result = this.instance.isScreenCaptureOrRecording(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('isScreenCaptureOrRecording called  promise result:', result)
                return res
            })
        }
        log.info('isScreenCaptureOrRecording called result:', result)
        return result
    }
    isWeixinFastLoginSupported(...args: any[]) {
        log.info('isWeixinFastLoginSupported called with args:', args)
        const result = this.instance.isWeixinFastLoginSupported(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('isWeixinFastLoginSupported called  promise result:', result)
                return res
            })
        }
        log.info('isWeixinFastLoginSupported called result:', result)
        return result
    }
    judgeTimingRequest(...args: any[]) {
        log.info('judgeTimingRequest called with args:', args)
        const result = this.instance.judgeTimingRequest(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('judgeTimingRequest called  promise result:', result)
                return res
            })
        }
        log.info('judgeTimingRequest called result:', result)
        return result
    }
    listenMouseMoveOnDisplays(...args: any[]) {
        log.info('listenMouseMoveOnDisplays called with args:', args)
        const result = this.instance.listenMouseMoveOnDisplays(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('listenMouseMoveOnDisplays called  promise result:', result)
                return res
            })
        }
        log.info('listenMouseMoveOnDisplays called result:', result)
        return result
    }
    listenWindowEvents(...args: any[]) {
        log.info('listenWindowEvents called with args:', args)
        const result = this.instance.listenWindowEvents(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('listenWindowEvents called  promise result:', result)
                return res
            })
        }
        log.info('listenWindowEvents called result:', result)
        return result
    }
    loginWXMiniApp(...args: any[]) {
        log.info('loginWXMiniApp called with args:', args)
        const result = this.instance.loginWXMiniApp(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('loginWXMiniApp called  promise result:', result)
                return res
            })
        }
        log.info('loginWXMiniApp called result:', result)
        return result
    }
    logoutWXMiniApp(...args: any[]) {
        log.info('logoutWXMiniApp called with args:', args)
        const result = this.instance.logoutWXMiniApp(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('logoutWXMiniApp called  promise result:', result)
                return res
            })
        }
        log.info('logoutWXMiniApp called result:', result)
        return result
    }
    mainWindowInitComplete(...args: any[]) {
        log.info('mainWindowInitComplete called with args:', args)
        const result = this.instance.mainWindowInitComplete(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('mainWindowInitComplete called  promise result:', result)
                return res
            })
        }
        log.info('mainWindowInitComplete called result:', result)
        return result
    }
    notifyGuildHasHiddenDock(...args: any[]) {
        log.info('notifyGuildHasHiddenDock called with args:', args)
        const result = this.instance.notifyGuildHasHiddenDock(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('notifyGuildHasHiddenDock called  promise result:', result)
                return res
            })
        }
        log.info('notifyGuildHasHiddenDock called result:', result)
        return result
    }
    openFileAndDirSelectDlg(...args: any[]) {
        log.info('openFileAndDirSelectDlg called with args:', args)
        const result = this.instance.openFileAndDirSelectDlg(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('openFileAndDirSelectDlg called  promise result:', result)
                return res
            })
        }
        log.info('openFileAndDirSelectDlg called result:', result)
        return result
    }
    openIDToUin(...args: any[]) {
        log.info('openIDToUin called with args:', args)
        const result = this.instance.openIDToUin(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('openIDToUin called  promise result:', result)
                return res
            })
        }
        log.info('openIDToUin called result:', result)
        return result
    }
    openPictureUsingQQ(...args: any[]) {
        log.info('openPictureUsingQQ called with args:', args)
        const result = this.instance.openPictureUsingQQ(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('openPictureUsingQQ called  promise result:', result)
                return res
            })
        }
        log.info('openPictureUsingQQ called result:', result)
        return result
    }
    openSidecarMenu(...args: any[]) {
        log.info('openSidecarMenu called with args:', args)
        const result = this.instance.openSidecarMenu(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('openSidecarMenu called  promise result:', result)
                return res
            })
        }
        log.info('openSidecarMenu called result:', result)
        return result
    }
    prefetch(...args: any[]) {
        log.info('prefetch called with args:', args)
        const result = this.instance.prefetch(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('prefetch called  promise result:', result)
                return res
            })
        }
        log.info('prefetch called result:', result)
        return result
    }
    qqConnectBatchShare(...args: any[]) {
        log.info('qqConnectBatchShare called with args:', args)
        const result = this.instance.qqConnectBatchShare(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('qqConnectBatchShare called  promise result:', result)
                return res
            })
        }
        log.info('qqConnectBatchShare called result:', result)
        return result
    }
    qqConnectShare(...args: any[]) {
        log.info('qqConnectShare called with args:', args)
        const result = this.instance.qqConnectShare(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('qqConnectShare called  promise result:', result)
                return res
            })
        }
        log.info('qqConnectShare called result:', result)
        return result
    }
    qqConnectShareCheck(...args: any[]) {
        log.info('qqConnectShareCheck called with args:', args)
        const result = this.instance.qqConnectShareCheck(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('qqConnectShareCheck called  promise result:', result)
                return res
            })
        }
        log.info('qqConnectShareCheck called result:', result)
        return result
    }
    queryAutoRun(...args: any[]) {
        log.info('queryAutoRun called with args:', args)
        const result = this.instance.queryAutoRun(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('queryAutoRun called  promise result:', result)
                return res
            })
        }
        log.info('queryAutoRun called result:', result)
        return result
    }
    registerSchemes(...args: any[]) {
        log.info('registerSchemes called with args:', args)
        const result = this.instance.registerSchemes(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('registerSchemes called  promise result:', result)
                return res
            })
        }
        log.info('registerSchemes called result:', result)
        return result
    }
    registerScreenCaptureShortcutWithKeycode(...args: any[]) {
        log.info('registerScreenCaptureShortcutWithKeycode called with args:', args)
        const result = this.instance.registerScreenCaptureShortcutWithKeycode(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('registerScreenCaptureShortcutWithKeycode called  promise result:', result)
                return res
            })
        }
        log.info('registerScreenCaptureShortcutWithKeycode called result:', result)
        return result
    }
    registerScreenRecordShortcutWithKeycode(...args: any[]) {
        log.info('registerScreenRecordShortcutWithKeycode called with args:', args)
        const result = this.instance.registerScreenRecordShortcutWithKeycode(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('registerScreenRecordShortcutWithKeycode called  promise result:', result)
                return res
            })
        }
        log.info('registerScreenRecordShortcutWithKeycode called result:', result)
        return result
    }
    registerServiceMenu(...args: any[]) {
        log.info('registerServiceMenu called with args:', args)
        const result = this.instance.registerServiceMenu(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('registerServiceMenu called  promise result:', result)
                return res
            })
        }
        log.info('registerServiceMenu called result:', result)
        return result
    }
    removeKernelNodeMiscListener(...args: any[]) {
        log.info('removeKernelNodeMiscListener called with args:', args)
        const result = this.instance.removeKernelNodeMiscListener(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('removeKernelNodeMiscListener called  promise result:', result)
                return res
            })
        }
        log.info('removeKernelNodeMiscListener called result:', result)
        return result
    }
    removeQuarantineAttribute(...args: any[]) {
        log.info('removeQuarantineAttribute called with args:', args)
        const result = this.instance.removeQuarantineAttribute(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('removeQuarantineAttribute called  promise result:', result)
                return res
            })
        }
        log.info('removeQuarantineAttribute called result:', result)
        return result
    }
    reportExecuteRequest(...args: any[]) {
        log.info('reportExecuteRequest called with args:', args)
        const result = this.instance.reportExecuteRequest(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('reportExecuteRequest called  promise result:', result)
                return res
            })
        }
        log.info('reportExecuteRequest called result:', result)
        return result
    }
    scanQBar(...args: any[]) {
        log.info('scanQBar called with args:', args)
        const result = this.instance.scanQBar(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('scanQBar called  promise result:', result)
                return res
            })
        }
        log.info('scanQBar called result:', result)
        return result
    }
    sendLog(...args: any[]) {
        log.warn('sendLog ignored with args:', args)
        return;
        // log.info('sendLog called with args:', args)
        // const result = this.instance.sendLog(...args)
        // if (result instanceof Promise) {
        //     return result.then((res) => {
        //         log.info('sendLog called  promise result:', result)
        //         return res
        //     })
        // }
        // log.info('sendLog called result:', result)
        // return result
    }
    sendMessageResponseToWX(...args: any[]) {
        log.info('sendMessageResponseToWX called with args:', args)
        const result = this.instance.sendMessageResponseToWX(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('sendMessageResponseToWX called  promise result:', result)
                return res
            })
        }
        log.info('sendMessageResponseToWX called result:', result)
        return result
    }
    sendMiniAppMsg(...args: any[]) {
        log.info('sendMiniAppMsg called with args:', args)
        const result = this.instance.sendMiniAppMsg(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('sendMiniAppMsg called  promise result:', result)
                return res
            })
        }
        log.info('sendMiniAppMsg called result:', result)
        return result
    }
    sendRequestToApiGateway(...args: any[]) {
        log.info('sendRequestToApiGateway called with args:', args)
        const result = this.instance.sendRequestToApiGateway(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('sendRequestToApiGateway called  promise result:', result)
                return res
            })
        }
        log.info('sendRequestToApiGateway called result:', result)
        return result
    }
    sendWXCustomMenuClickedAction(...args: any[]) {
        log.info('sendWXCustomMenuClickedAction called with args:', args)
        const result = this.instance.sendWXCustomMenuClickedAction(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('sendWXCustomMenuClickedAction called  promise result:', result)
                return res
            })
        }
        log.info('sendWXCustomMenuClickedAction called result:', result)
        return result
    }
    setAutoRun(...args: any[]) {
        log.info('setAutoRun called with args:', args)
        const result = this.instance.setAutoRun(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setAutoRun called  promise result:', result)
                return res
            })
        }
        log.info('setAutoRun called result:', result)
        return result
    }
    setBackgroudWindowLevel(...args: any[]) {
        log.info('setBackgroudWindowLevel called with args:', args)
        const result = this.instance.setBackgroudWindowLevel(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setBackgroudWindowLevel called  promise result:', result)
                return res
            })
        }
        log.info('setBackgroudWindowLevel called result:', result)
        return result
    }
    setMiniAppVersion(...args: any[]) {
        log.info('setMiniAppVersion called with args:', args)
        const result = this.instance.setMiniAppVersion(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setMiniAppVersion called  promise result:', result)
                return res
            })
        }
        log.info('setMiniAppVersion called result:', result)
        return result
    }
    setMiniGameVersion(...args: any[]) {
        log.info('setMiniGameVersion called with args:', args)
        const result = this.instance.setMiniGameVersion(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setMiniGameVersion called  promise result:', result)
                return res
            })
        }
        log.info('setMiniGameVersion called result:', result)
        return result
    }
    setScreenShotSetting(...args: any[]) {
        log.info('setScreenShotSetting called with args:', args)
        const result = this.instance.setScreenShotSetting(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setScreenShotSetting called  promise result:', result)
                return res
            })
        }
        log.info('setScreenShotSetting called result:', result)
        return result
    }
    setVulkanEnable(...args: any[]) {
        log.info('setVulkanEnable called with args:', args)
        const result = this.instance.setVulkanEnable(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setVulkanEnable called  promise result:', result)
                return res
            })
        }
        log.info('setVulkanEnable called result:', result)
        return result
    }
    setWXCustomMenuConfig(...args: any[]) {
        log.info('setWXCustomMenuConfig called with args:', args)
        const result = this.instance.setWXCustomMenuConfig(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setWXCustomMenuConfig called  promise result:', result)
                return res
            })
        }
        log.info('setWXCustomMenuConfig called result:', result)
        return result
    }
    setWindowLayerNT(...args: any[]) {
        log.info('setWindowLayerNT called with args:', args)
        const result = this.instance.setWindowLayerNT(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setWindowLayerNT called  promise result:', result)
                return res
            })
        }
        log.info('setWindowLayerNT called result:', result)
        return result
    }
    setWindowLevelNT(...args: any[]) {
        log.info('setWindowLevelNT called with args:', args)
        const result = this.instance.setWindowLevelNT(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setWindowLevelNT called  promise result:', result)
                return res
            })
        }
        log.info('setWindowLevelNT called result:', result)
        return result
    }
    setWindowPos(...args: any[]) {
        log.info('setWindowPos called with args:', args)
        const result = this.instance.setWindowPos(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setWindowPos called  promise result:', result)
                return res
            })
        }
        log.info('setWindowPos called result:', result)
        return result
    }
    setWindowsMenuInstallStatus(...args: any[]) {
        log.info('setWindowsMenuInstallStatus called with args:', args)
        const result = this.instance.setWindowsMenuInstallStatus(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setWindowsMenuInstallStatus called  promise result:', result)
                return res
            })
        }
        log.info('setWindowsMenuInstallStatus called result:', result)
        return result
    }
    startNewApp(...args: any[]) {
        log.info('startNewApp called with args:', args)
        const result = this.instance.startNewApp(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('startNewApp called  promise result:', result)
                return res
            })
        }
        log.info('startNewApp called result:', result)
        return result
    }
    startNewAppInstance(...args: any[]) {
        log.info('startNewAppInstance called with args:', args)
        const result = this.instance.startNewAppInstance(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('startNewAppInstance called  promise result:', result)
                return res
            })
        }
        log.info('startNewAppInstance called result:', result)
        return result
    }
    startNewMiniApp(...args: any[]) {
        log.info('startNewMiniApp called with args:', args)
        const result = this.instance.startNewMiniApp(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('startNewMiniApp called  promise result:', result)
                return res
            })
        }
        log.info('startNewMiniApp called result:', result)
        return result
    }
    startScreenCapture(...args: any[]) {
        log.info('startScreenCapture called with args:', args)
        const result = this.instance.startScreenCapture(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('startScreenCapture called  promise result:', result)
                return res
            })
        }
        log.info('startScreenCapture called result:', result)
        return result
    }
    startScreenCaptureDetect(...args: any[]) {
        log.info('startScreenCaptureDetect called with args:', args)
        const result = this.instance.startScreenCaptureDetect(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('startScreenCaptureDetect called  promise result:', result)
                return res
            })
        }
        log.info('startScreenCaptureDetect called result:', result)
        return result
    }
    startScreenCaptureDetectByBuf(...args: any[]) {
        log.info('startScreenCaptureDetectByBuf called with args:', args)
        const result = this.instance.startScreenCaptureDetectByBuf(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('startScreenCaptureDetectByBuf called  promise result:', result)
                return res
            })
        }
        log.info('startScreenCaptureDetectByBuf called result:', result)
        return result
    }
    startScreenCaptureLong(...args: any[]) {
        log.info('startScreenCaptureLong called with args:', args)
        const result = this.instance.startScreenCaptureLong(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('startScreenCaptureLong called  promise result:', result)
                return res
            })
        }
        log.info('startScreenCaptureLong called result:', result)
        return result
    }
    startScreenShotInstance(...args: any[]) {
        log.info('startScreenShotInstance called with args:', args)
        const result = this.instance.startScreenShotInstance(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('startScreenShotInstance called  promise result:', result)
                return res
            })
        }
        log.info('startScreenShotInstance called result:', result)
        return result
    }
    startSession(...args: any[]) {
        log.info('startSession called with args:', args)
        const result = this.instance.startSession(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('startSession called  promise result:', result)
                return res
            })
        }
        log.info('startSession called result:', result)
        return result
    }
    startWXMiniApp(...args: any[]) {
        log.info('startWXMiniApp called with args:', args)
        const result = this.instance.startWXMiniApp(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('startWXMiniApp called  promise result:', result)
                return res
            })
        }
        log.info('startWXMiniApp called result:', result)
        return result
    }
    stopFlashWindow(...args: any[]) {
        log.info('stopFlashWindow called with args:', args)
        const result = this.instance.stopFlashWindow(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('stopFlashWindow called  promise result:', result)
                return res
            })
        }
        log.info('stopFlashWindow called result:', result)
        return result
    }
    toWindowID(...args: any[]) {
        log.info('toWindowID called with args:', args)
        const result = this.instance.toWindowID(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('toWindowID called  promise result:', result)
                return res
            })
        }
        log.info('toWindowID called result:', result)
        return result
    }
    uinQueryThirdPartBind(...args: any[]) {
        log.info('uinQueryThirdPartBind called with args:', args)
        const result = this.instance.uinQueryThirdPartBind(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('uinQueryThirdPartBind called  promise result:', result)
                return res
            })
        }
        log.info('uinQueryThirdPartBind called result:', result)
        return result
    }
    unlistenMouseMoveOnDisplays(...args: any[]) {
        log.info('unlistenMouseMoveOnDisplays called with args:', args)
        const result = this.instance.unlistenMouseMoveOnDisplays(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('unlistenMouseMoveOnDisplays called  promise result:', result)
                return res
            })
        }
        log.info('unlistenMouseMoveOnDisplays called result:', result)
        return result
    }
    unlistenWindowEvents(...args: any[]) {
        log.info('unlistenWindowEvents called with args:', args)
        const result = this.instance.unlistenWindowEvents(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('unlistenWindowEvents called  promise result:', result)
                return res
            })
        }
        log.info('unlistenWindowEvents called result:', result)
        return result
    }
    unregisterHotkey(...args: any[]) {
        log.info('unregisterHotkey called with args:', args)
        const result = this.instance.unregisterHotkey(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('unregisterHotkey called  promise result:', result)
                return res
            })
        }
        log.info('unregisterHotkey called result:', result)
        return result
    }
    verifyCaptchaTicket(...args: any[]) {
        log.info('verifyCaptchaTicket called with args:', args)
        const result = this.instance.verifyCaptchaTicket(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('verifyCaptchaTicket called  promise result:', result)
                return res
            })
        }
        log.info('verifyCaptchaTicket called result:', result)
        return result
    }
    wantParseClipboard(...args: any[]) {
        log.info('wantParseClipboard called with args:', args)
        const result = this.instance.wantParseClipboard(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('wantParseClipboard called  promise result:', result)
                return res
            })
        }
        log.info('wantParseClipboard called result:', result)
        return result
    }
    wantParseMultiClipboard(...args: any[]) {
        log.info('wantParseMultiClipboard called with args:', args)
        const result = this.instance.wantParseMultiClipboard(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('wantParseMultiClipboard called  promise result:', result)
                return res
            })
        }
        log.info('wantParseMultiClipboard called result:', result)
        return result
    }
    wantScreenOCR(...args: any[]) {
        log.info('wantScreenOCR called with args:', args)
        const result = this.instance.wantScreenOCR(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('wantScreenOCR called  promise result:', result)
                return res
            })
        }
        log.info('wantScreenOCR called result:', result)
        return result
    }
    wantScreenRecording(...args: any[]) {
        log.info('wantScreenRecording called with args:', args)
        const result = this.instance.wantScreenRecording(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('wantScreenRecording called  promise result:', result)
                return res
            })
        }
        log.info('wantScreenRecording called result:', result)
        return result
    }
    wantScreenRecordingNT(...args: any[]) {
        log.info('wantScreenRecordingNT called with args:', args)
        const result = this.instance.wantScreenRecordingNT(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('wantScreenRecordingNT called  promise result:', result)
                return res
            })
        }
        log.info('wantScreenRecordingNT called result:', result)
        return result
    }
    wantScreenShot(...args: any[]) {
        log.info('wantScreenShot called with args:', args)
        const result = this.instance.wantScreenShot(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('wantScreenShot called  promise result:', result)
                return res
            })
        }
        log.info('wantScreenShot called result:', result)
        return result
    }
    wantScreenShotNT(...args: any[]) {
        log.info('wantScreenShotNT called with args:', args)
        const result = this.instance.wantScreenShotNT(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('wantScreenShotNT called  promise result:', result)
                return res
            })
        }
        log.info('wantScreenShotNT called result:', result)
        return result
    }
    wantScreenShotWithLinuxX11Lib(...args: any[]) {
        log.info('wantScreenShotWithLinuxX11Lib called with args:', args)
        const result = this.instance.wantScreenShotWithLinuxX11Lib(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('wantScreenShotWithLinuxX11Lib called  promise result:', result)
                return res
            })
        }
        log.info('wantScreenShotWithLinuxX11Lib called result:', result)
        return result
    }
    wantWinScreenOCR(...args: any[]) {
        log.info('wantWinScreenOCR called with args:', args)
        const result = this.instance.wantWinScreenOCR(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('wantWinScreenOCR called  promise result:', result)
                return res
            })
        }
        log.info('wantWinScreenOCR called result:', result)
        return result
    }
    writeBitmapToClipboard(...args: any[]) {
        log.info('writeBitmapToClipboard called with args:', args)
        const result = this.instance.writeBitmapToClipboard(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('writeBitmapToClipboard called  promise result:', result)
                return res
            })
        }
        log.info('writeBitmapToClipboard called result:', result)
        return result
    }
    writeClipboard(...args: any[]) {
        log.info('writeClipboard called with args:', args)
        const result = this.instance.writeClipboard(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('writeClipboard called  promise result:', result)
                return res
            })
        }
        log.info('writeClipboard called result:', result)
        return result
    }
    writeMultiClipboard(...args: any[]) {
        log.info('writeMultiClipboard called with args:', args)
        const result = this.instance.writeMultiClipboard(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('writeMultiClipboard called  promise result:', result)
                return res
            })
        }
        log.info('writeMultiClipboard called result:', result)
        return result
    }
    writeVersionToRegistry(...args: any[]) {
        log.info('writeVersionToRegistry called with args:', args)
        const result = this.instance.writeVersionToRegistry(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('writeVersionToRegistry called  promise result:', result)
                return res
            })
        }
        log.info('writeVersionToRegistry called result:', result)
        return result
    }
};
export const getNodeIKernelNodeMiscService = (engine: any): any => {
    return class extends NodeIKernelNodeMiscService {
        
    }
}