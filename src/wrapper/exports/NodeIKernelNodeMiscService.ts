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
        return this.instance.adaptMiniAppShareInfo(...args)
    }
    addBind(...args: any[]) {
        log.info('addBind called with args:', args)
        return this.instance.addBind(...args)
    }
    addKernelNodeMiscListener(...args: any[]) {
        log.info('addKernelNodeMiscListener called with args:', args)
        return this.instance.addKernelNodeMiscListener(...args)
    }
    addLogUploadConfig(...args: any[]) {
        log.info('addLogUploadConfig called with args:', args)
        return this.instance.addLogUploadConfig(...args)
    }
    applyAddToMyApps(...args: any[]) {
        log.info('applyAddToMyApps called with args:', args)
        return this.instance.applyAddToMyApps(...args)
    }
    callLongCaptureExit(...args: any[]) {
        log.info('callLongCaptureExit called with args:', args)
        return this.instance.callLongCaptureExit(...args)
    }
    cancelDownloadMiniApp(...args: any[]) {
        log.info('cancelDownloadMiniApp called with args:', args)
        return this.instance.cancelDownloadMiniApp(...args)
    }
    cancelDownloadMiniGame(...args: any[]) {
        log.info('cancelDownloadMiniGame called with args:', args)
        return this.instance.cancelDownloadMiniGame(...args)
    }
    cancelOCRImage(...args: any[]) {
        log.info('cancelOCRImage called with args:', args)
        return this.instance.cancelOCRImage(...args)
    }
    changeSendKey(...args: any[]) {
        log.info('changeSendKey called with args:', args)
        return this.instance.changeSendKey(...args)
    }
    checkIfHaveAvailableSidecarDevice(...args: any[]) {
        log.info('checkIfHaveAvailableSidecarDevice called with args:', args)
        return this.instance.checkIfHaveAvailableSidecarDevice(...args)
    }
    checkIsSupportAutoDetect(...args: any[]) {
        log.info('checkIsSupportAutoDetect called with args:', args)
        return this.instance.checkIsSupportAutoDetect(...args)
    }
    cleanWindowsInfo(...args: any[]) {
        log.info('cleanWindowsInfo called with args:', args)
        return this.instance.cleanWindowsInfo(...args)
    }
    clearQzoneUnreadCount(...args: any[]) {
        log.info('clearQzoneUnreadCount called with args:', args)
        return this.instance.clearQzoneUnreadCount(...args)
    }
    clearQzoneUnreadCountWithRedDot(...args: any[]) {
        log.info('clearQzoneUnreadCountWithRedDot called with args:', args)
        return this.instance.clearQzoneUnreadCountWithRedDot(...args)
    }
    closeWXMiniApp(...args: any[]) {
        log.info('closeWXMiniApp called with args:', args)
        return this.instance.closeWXMiniApp(...args)
    }
    delAutoRun(...args: any[]) {
        log.info('delAutoRun called with args:', args)
        return this.instance.delAutoRun(...args)
    }
    delBind(...args: any[]) {
        log.info('delBind called with args:', args)
        return this.instance.delBind(...args)
    }
    deleteShareFile(...args: any[]) {
        log.info('deleteShareFile called with args:', args)
        return this.instance.deleteShareFile(...args)
    }
    dispatchWmpfEvent(...args: any[]) {
        log.info('dispatchWmpfEvent called with args:', args)
        return this.instance.dispatchWmpfEvent(...args)
    }
    doAction(...args: any[]) {
        log.info('doAction called with args:', args)
        return this.instance.doAction(...args)
    }
    doPostAction(...args: any[]) {
        log.info('doPostAction called with args:', args)
        return this.instance.doPostAction(...args)
    }
    downloadMiniApp(...args: any[]) {
        log.info('downloadMiniApp called with args:', args)
        return this.instance.downloadMiniApp(...args)
    }
    downloadMiniGame(...args: any[]) {
        log.info('downloadMiniGame called with args:', args)
        return this.instance.downloadMiniGame(...args)
    }
    encodeAES(...args: any[]) {
        log.info('encodeAES called with args:', args)
        return this.instance.encodeAES(...args)
    }
    endScreenCapture(...args: any[]) {
        log.info('endScreenCapture called with args:', args)
        return this.instance.endScreenCapture(...args)
    }
    flashWindowInTaskbar(...args: any[]) {
        log.info('flashWindowInTaskbar called with args:', args)
        return this.instance.flashWindowInTaskbar(...args)
    }
    getAmsSDKInfo(...args: any[]) {
        log.info('getAmsSDKInfo called with args:', args)
        return this.instance.getAmsSDKInfo(...args)
    }
    getAppInfoById(...args: any[]) {
        log.info('getAppInfoById called with args:', args)
        return this.instance.getAppInfoById(...args)
    }
    getAppInfoByLink(...args: any[]) {
        log.info('getAppInfoByLink called with args:', args)
        return this.instance.getAppInfoByLink(...args)
    }
    getConcernWeather(...args: any[]) {
        log.info('getConcernWeather called with args:', args)
        return this.instance.getConcernWeather(...args)
    }
    getCurWindowInfo(...args: any[]) {
        log.info('getCurWindowInfo called with args:', args)
        return this.instance.getCurWindowInfo(...args)
    }
    getCurWindowInfoExceptList(...args: any[]) {
        log.info('getCurWindowInfoExceptList called with args:', args)
        return this.instance.getCurWindowInfoExceptList(...args)
    }
    getDeviceInfo(...args: any[]) {
        log.info('getDeviceInfo called with args:', args)
        return this.instance.getDeviceInfo(...args)
    }
    getDisplayInfo(...args: any[]) {
        log.info('getDisplayInfo called with args:', args)
        return this.instance.getDisplayInfo(...args)
    }
    getGetFullScreenInfo(...args: any[]) {
        log.info('getGetFullScreenInfo called with args:', args)
        return this.instance.getGetFullScreenInfo(...args)
    }
    getGroupMemberOpenID(...args: any[]) {
        log.info('getGroupMemberOpenID called with args:', args)
        return this.instance.getGroupMemberOpenID(...args)
    }
    getGroupOpenID(...args: any[]) {
        log.info('getGroupOpenID called with args:', args)
        return this.instance.getGroupOpenID(...args)
    }
    getMiniAppPath(...args: any[]) {
        log.info('getMiniAppPath called with args:', args)
        return this.instance.getMiniAppPath(...args)
    }
    getMiniGamePath(...args: any[]) {
        log.info('getMiniGamePath called with args:', args)
        return this.instance.getMiniGamePath(...args)
    }
    getMiniGameV2EngineConfig(...args: any[]) {
        log.info('getMiniGameV2EngineConfig called with args:', args)
        return this.instance.getMiniGameV2EngineConfig(...args)
    }
    getMyAppList(...args: any[]) {
        log.info('getMyAppList called with args:', args)
        return this.instance.getMyAppList(...args)
    }
    getNodeAndQQIPCVersions(...args: any[]) {
        log.info('getNodeAndQQIPCVersions called with args:', args)
        return this.instance.getNodeAndQQIPCVersions(...args)
    }
    getOpenAuth(...args: any[]) {
        log.info('getOpenAuth called with args:', args)
        return this.instance.getOpenAuth(...args)
    }
    getOpenAuthDelegateCode(...args: any[]) {
        log.info('getOpenAuthDelegateCode called with args:', args)
        return this.instance.getOpenAuthDelegateCode(...args)
    }
    getQQlevelInfo(...args: any[]) {
        log.info('getQQlevelInfo called with args:', args)
        return this.instance.getQQlevelInfo(...args)
    }
    getQimei36(...args: any[]) {
        log.info('getQimei36 called with args:', args)
        return this.instance.getQimei36(...args)
    }
    getQimei36WithNewSdk(...args: any[]) {
        log.info('getQimei36WithNewSdk called with args:', args)
        return this.instance.getQimei36WithNewSdk(...args)
    }
    getQzoneUnreadCount(...args: any[]) {
        log.info('getQzoneUnreadCount called with args:', args)
        return this.instance.getQzoneUnreadCount(...args)
    }
    getRelationUinToOpenID(...args: any[]) {
        log.info('getRelationUinToOpenID called with args:', args)
        return this.instance.getRelationUinToOpenID(...args)
    }
    getRelaunchParams(...args: any[]) {
        log.info('getRelaunchParams called with args:', args)
        return this.instance.getRelaunchParams(...args)
    }
    getSendKey(...args: any[]) {
        log.info('getSendKey called with args:', args)
        return this.instance.getSendKey(...args)
    }
    getUserDataDir(...args: any[]) {
        log.info('getUserDataDir called with args:', args)
        return this.instance.getUserDataDir(...args)
    }
    getWindowsInfo(...args: any[]) {
        log.info('getWindowsInfo called with args:', args)
        return this.instance.getWindowsInfo(...args)
    }
    getWindowsMenuInstallStatus(...args: any[]) {
        log.info('getWindowsMenuInstallStatus called with args:', args)
        return this.instance.getWindowsMenuInstallStatus(...args)
    }
    initAmsSDK(...args: any[]) {
        log.info('initAmsSDK called with args:', args)
        return this.instance.initAmsSDK(...args)
    }
    initScreenShotPlugin(...args: any[]) {
        log.info('initScreenShotPlugin called with args:', args)
        return this.instance.initScreenShotPlugin(...args)
    }
    initWXMiniAppSDK(...args: any[]) {
        log.info('initWXMiniAppSDK called with args:', args)
        return this.instance.initWXMiniAppSDK(...args)
    }
    installApp(...args: any[]) {
        log.info('installApp called with args:', args)
        return this.instance.installApp(...args)
    }
    isAppInstalled(...args: any[]) {
        log.info('isAppInstalled called with args:', args)
        return this.instance.isAppInstalled(...args)
    }
    isDwmCompositionEnabled(...args: any[]) {
        log.info('isDwmCompositionEnabled called with args:', args)
        return this.instance.isDwmCompositionEnabled(...args)
    }
    isMiniAppAlreadyExist(...args: any[]) {
        log.info('isMiniAppAlreadyExist called with args:', args)
        return this.instance.isMiniAppAlreadyExist(...args)
    }
    isMiniAppExist(...args: any[]) {
        log.info('isMiniAppExist called with args:', args)
        return this.instance.isMiniAppExist(...args)
    }
    isMiniGameAlreadyExist(...args: any[]) {
        log.info('isMiniGameAlreadyExist called with args:', args)
        return this.instance.isMiniGameAlreadyExist(...args)
    }
    isMiniGameExist(...args: any[]) {
        log.info('isMiniGameExist called with args:', args)
        return this.instance.isMiniGameExist(...args)
    }
    isOldQQRunning(...args: any[]) {
        log.info('isOldQQRunning called with args:', args)
        return this.instance.isOldQQRunning(...args)
    }
    isScreenCaptureOrRecording(...args: any[]) {
        log.info('isScreenCaptureOrRecording called with args:', args)
        return this.instance.isScreenCaptureOrRecording(...args)
    }
    isWeixinFastLoginSupported(...args: any[]) {
        log.info('isWeixinFastLoginSupported called with args:', args)
        return this.instance.isWeixinFastLoginSupported(...args)
    }
    judgeTimingRequest(...args: any[]) {
        log.info('judgeTimingRequest called with args:', args)
        return this.instance.judgeTimingRequest(...args)
    }
    listenMouseMoveOnDisplays(...args: any[]) {
        log.info('listenMouseMoveOnDisplays called with args:', args)
        return this.instance.listenMouseMoveOnDisplays(...args)
    }
    listenWindowEvents(...args: any[]) {
        log.info('listenWindowEvents called with args:', args)
        return this.instance.listenWindowEvents(...args)
    }
    loginWXMiniApp(...args: any[]) {
        log.info('loginWXMiniApp called with args:', args)
        return this.instance.loginWXMiniApp(...args)
    }
    logoutWXMiniApp(...args: any[]) {
        log.info('logoutWXMiniApp called with args:', args)
        return this.instance.logoutWXMiniApp(...args)
    }
    mainWindowInitComplete(...args: any[]) {
        log.info('mainWindowInitComplete called with args:', args)
        return this.instance.mainWindowInitComplete(...args)
    }
    notifyGuildHasHiddenDock(...args: any[]) {
        log.info('notifyGuildHasHiddenDock called with args:', args)
        return this.instance.notifyGuildHasHiddenDock(...args)
    }
    openFileAndDirSelectDlg(...args: any[]) {
        log.info('openFileAndDirSelectDlg called with args:', args)
        return this.instance.openFileAndDirSelectDlg(...args)
    }
    openIDToUin(...args: any[]) {
        log.info('openIDToUin called with args:', args)
        return this.instance.openIDToUin(...args)
    }
    openPictureUsingQQ(...args: any[]) {
        log.info('openPictureUsingQQ called with args:', args)
        return this.instance.openPictureUsingQQ(...args)
    }
    openSidecarMenu(...args: any[]) {
        log.info('openSidecarMenu called with args:', args)
        return this.instance.openSidecarMenu(...args)
    }
    prefetch(...args: any[]) {
        log.info('prefetch called with args:', args)
        return this.instance.prefetch(...args)
    }
    qqConnectBatchShare(...args: any[]) {
        log.info('qqConnectBatchShare called with args:', args)
        return this.instance.qqConnectBatchShare(...args)
    }
    qqConnectShare(...args: any[]) {
        log.info('qqConnectShare called with args:', args)
        return this.instance.qqConnectShare(...args)
    }
    qqConnectShareCheck(...args: any[]) {
        log.info('qqConnectShareCheck called with args:', args)
        return this.instance.qqConnectShareCheck(...args)
    }
    queryAutoRun(...args: any[]) {
        log.info('queryAutoRun called with args:', args)
        return this.instance.queryAutoRun(...args)
    }
    registerSchemes(...args: any[]) {
        log.info('registerSchemes called with args:', args)
        return this.instance.registerSchemes(...args)
    }
    registerScreenCaptureShortcutWithKeycode(...args: any[]) {
        log.info('registerScreenCaptureShortcutWithKeycode called with args:', args)
        return this.instance.registerScreenCaptureShortcutWithKeycode(...args)
    }
    registerScreenRecordShortcutWithKeycode(...args: any[]) {
        log.info('registerScreenRecordShortcutWithKeycode called with args:', args)
        return this.instance.registerScreenRecordShortcutWithKeycode(...args)
    }
    registerServiceMenu(...args: any[]) {
        log.info('registerServiceMenu called with args:', args)
        return this.instance.registerServiceMenu(...args)
    }
    removeKernelNodeMiscListener(...args: any[]) {
        log.info('removeKernelNodeMiscListener called with args:', args)
        return this.instance.removeKernelNodeMiscListener(...args)
    }
    removeQuarantineAttribute(...args: any[]) {
        log.info('removeQuarantineAttribute called with args:', args)
        return this.instance.removeQuarantineAttribute(...args)
    }
    reportExecuteRequest(...args: any[]) {
        log.info('reportExecuteRequest called with args:', args)
        return this.instance.reportExecuteRequest(...args)
    }
    scanQBar(...args: any[]) {
        log.info('scanQBar called with args:', args)
        return this.instance.scanQBar(...args)
    }
    sendLog(...args: any[]) {
        // log.info('sendLog called with args:', args)
        return this.instance.sendLog(...args)
    }
    sendMessageResponseToWX(...args: any[]) {
        log.info('sendMessageResponseToWX called with args:', args)
        return this.instance.sendMessageResponseToWX(...args)
    }
    sendMiniAppMsg(...args: any[]) {
        log.info('sendMiniAppMsg called with args:', args)
        return this.instance.sendMiniAppMsg(...args)
    }
    sendRequestToApiGateway(...args: any[]) {
        log.info('sendRequestToApiGateway called with args:', args)
        return this.instance.sendRequestToApiGateway(...args)
    }
    sendWXCustomMenuClickedAction(...args: any[]) {
        log.info('sendWXCustomMenuClickedAction called with args:', args)
        return this.instance.sendWXCustomMenuClickedAction(...args)
    }
    setAutoRun(...args: any[]) {
        log.info('setAutoRun called with args:', args)
        return this.instance.setAutoRun(...args)
    }
    setBackgroudWindowLevel(...args: any[]) {
        log.info('setBackgroudWindowLevel called with args:', args)
        return this.instance.setBackgroudWindowLevel(...args)
    }
    setMiniAppVersion(...args: any[]) {
        log.info('setMiniAppVersion called with args:', args)
        return this.instance.setMiniAppVersion(...args)
    }
    setMiniGameVersion(...args: any[]) {
        log.info('setMiniGameVersion called with args:', args)
        return this.instance.setMiniGameVersion(...args)
    }
    setScreenShotSetting(...args: any[]) {
        log.info('setScreenShotSetting called with args:', args)
        return this.instance.setScreenShotSetting(...args)
    }
    setVulkanEnable(...args: any[]) {
        log.info('setVulkanEnable called with args:', args)
        return this.instance.setVulkanEnable(...args)
    }
    setWXCustomMenuConfig(...args: any[]) {
        log.info('setWXCustomMenuConfig called with args:', args)
        return this.instance.setWXCustomMenuConfig(...args)
    }
    setWindowLayerNT(...args: any[]) {
        log.info('setWindowLayerNT called with args:', args)
        return this.instance.setWindowLayerNT(...args)
    }
    setWindowLevelNT(...args: any[]) {
        log.info('setWindowLevelNT called with args:', args)
        return this.instance.setWindowLevelNT(...args)
    }
    setWindowPos(...args: any[]) {
        log.info('setWindowPos called with args:', args)
        return this.instance.setWindowPos(...args)
    }
    setWindowsMenuInstallStatus(...args: any[]) {
        log.info('setWindowsMenuInstallStatus called with args:', args)
        return this.instance.setWindowsMenuInstallStatus(...args)
    }
    startNewApp(...args: any[]) {
        log.info('startNewApp called with args:', args)
        return this.instance.startNewApp(...args)
    }
    startNewAppInstance(...args: any[]) {
        log.info('startNewAppInstance called with args:', args)
        return this.instance.startNewAppInstance(...args)
    }
    startNewMiniApp(...args: any[]) {
        log.info('startNewMiniApp called with args:', args)
        return this.instance.startNewMiniApp(...args)
    }
    startScreenCapture(...args: any[]) {
        log.info('startScreenCapture called with args:', args)
        return this.instance.startScreenCapture(...args)
    }
    startScreenCaptureDetect(...args: any[]) {
        log.info('startScreenCaptureDetect called with args:', args)
        return this.instance.startScreenCaptureDetect(...args)
    }
    startScreenCaptureDetectByBuf(...args: any[]) {
        log.info('startScreenCaptureDetectByBuf called with args:', args)
        return this.instance.startScreenCaptureDetectByBuf(...args)
    }
    startScreenCaptureLong(...args: any[]) {
        log.info('startScreenCaptureLong called with args:', args)
        return this.instance.startScreenCaptureLong(...args)
    }
    startScreenShotInstance(...args: any[]) {
        log.info('startScreenShotInstance called with args:', args)
        return this.instance.startScreenShotInstance(...args)
    }
    startSession(...args: any[]) {
        log.info('startSession called with args:', args)
        return this.instance.startSession(...args)
    }
    startWXMiniApp(...args: any[]) {
        log.info('startWXMiniApp called with args:', args)
        return this.instance.startWXMiniApp(...args)
    }
    stopFlashWindow(...args: any[]) {
        log.info('stopFlashWindow called with args:', args)
        return this.instance.stopFlashWindow(...args)
    }
    toWindowID(...args: any[]) {
        log.info('toWindowID called with args:', args)
        return this.instance.toWindowID(...args)
    }
    uinQueryThirdPartBind(...args: any[]) {
        log.info('uinQueryThirdPartBind called with args:', args)
        return this.instance.uinQueryThirdPartBind(...args)
    }
    unlistenMouseMoveOnDisplays(...args: any[]) {
        log.info('unlistenMouseMoveOnDisplays called with args:', args)
        return this.instance.unlistenMouseMoveOnDisplays(...args)
    }
    unlistenWindowEvents(...args: any[]) {
        log.info('unlistenWindowEvents called with args:', args)
        return this.instance.unlistenWindowEvents(...args)
    }
    unregisterHotkey(...args: any[]) {
        log.info('unregisterHotkey called with args:', args)
        return this.instance.unregisterHotkey(...args)
    }
    verifyCaptchaTicket(...args: any[]) {
        log.info('verifyCaptchaTicket called with args:', args)
        return this.instance.verifyCaptchaTicket(...args)
    }
    wantParseClipboard(...args: any[]) {
        log.info('wantParseClipboard called with args:', args)
        return this.instance.wantParseClipboard(...args)
    }
    wantParseMultiClipboard(...args: any[]) {
        log.info('wantParseMultiClipboard called with args:', args)
        return this.instance.wantParseMultiClipboard(...args)
    }
    wantScreenOCR(...args: any[]) {
        log.info('wantScreenOCR called with args:', args)
        return this.instance.wantScreenOCR(...args)
    }
    wantScreenRecording(...args: any[]) {
        log.info('wantScreenRecording called with args:', args)
        return this.instance.wantScreenRecording(...args)
    }
    wantScreenRecordingNT(...args: any[]) {
        log.info('wantScreenRecordingNT called with args:', args)
        return this.instance.wantScreenRecordingNT(...args)
    }
    wantScreenShot(...args: any[]) {
        log.info('wantScreenShot called with args:', args)
        return this.instance.wantScreenShot(...args)
    }
    wantScreenShotNT(...args: any[]) {
        log.info('wantScreenShotNT called with args:', args)
        return this.instance.wantScreenShotNT(...args)
    }
    wantScreenShotWithLinuxX11Lib(...args: any[]) {
        log.info('wantScreenShotWithLinuxX11Lib called with args:', args)
        return this.instance.wantScreenShotWithLinuxX11Lib(...args)
    }
    wantWinScreenOCR(...args: any[]) {
        log.info('wantWinScreenOCR called with args:', args)
        return this.instance.wantWinScreenOCR(...args)
    }
    writeBitmapToClipboard(...args: any[]) {
        log.info('writeBitmapToClipboard called with args:', args)
        return this.instance.writeBitmapToClipboard(...args)
    }
    writeClipboard(...args: any[]) {
        log.info('writeClipboard called with args:', args)
        return this.instance.writeClipboard(...args)
    }
    writeMultiClipboard(...args: any[]) {
        log.info('writeMultiClipboard called with args:', args)
        return this.instance.writeMultiClipboard(...args)
    }
    writeVersionToRegistry(...args: any[]) {
        log.info('writeVersionToRegistry called with args:', args)
        return this.instance.writeVersionToRegistry(...args)
    }
};
export const getNodeIKernelNodeMiscService = (engine: any): any => {
    return NodeIKernelNodeMiscService
}