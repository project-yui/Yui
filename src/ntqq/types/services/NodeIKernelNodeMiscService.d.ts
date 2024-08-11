
interface NodeIKernelNodeMiscListenerConstructorOptions {
    onLoginFinish: () => void
    onMainWindowAction: () => void
    onQQCloseThenHideUi: () => void
    onQQCloseThenCloseUi: () => void
    onQQCloseThenExit: () => void
    onQQChangeSendKeyButton: () => void
    onQQScreenShotComplete: () => void
    onQQScreenRecordingComplete: () => void
    onQQScreenShotCompleteNT: () => void
    onQQScreenRecordingCompleteNT: () => void
    onQQScreenOCRBegin: () => void
    onQQScreenOCRComplete: () => void
    onQQScreenOCRPublicComplete: () => void
    onQQScreenShotToolReport: () => void
    onQQScreenAgentConnected: () => void
    onQQScreenAgentDisConnected: () => void
    onQQScreenCheckRecordInInCatalina: () => void
    onQQScreenRegisterShortCut: () => void
    onQQScreenCheckVersionAvailableFail: () => void
    onQQScreenLongCaptureEvent: () => void
    onQQShowMainPanel: () => void
    onGetRelaunchParams: () => void
    onGetJumpGuild: () => void
    oncheckIfHaveAvailableSidecarDevice: () => void
    onGetDataFromSidecar: () => void
    onScreenShotToolReportNT: () => void
    onRecvMiniAppMsg: () => void
    onMiniAppConnected: () => void
    onMiniAppDisconnected: () => void
    onMiniAppDownloadComplete: () => void
    onMininAppDownloadProgress: () => void
}
export class NodeIKernelNodeMiscListener {
    constructor(options: NodeIKernelNodeMiscListenerConstructorOptions)
}
export default class NodeIKernelNodeMiscService {
    getGetFullScreenInfo(): NodeIKernelNodeMiscServiceType.GetFullScreenInfoResp
    getMiniAppPath(): string
    isMiniAppExist(): boolean
    /**
     * 发送日志
     * 
     * @param level 等级，猜的
     * @param module 模块
     * @param log 日志内容
     */
    sendLog(level: number, module: string, log: string): void
    setMiniAppVersion(ver: string): void
    /**
     * 注册系统协议
     * 
     * win + R -> tencent://xxx
     * 
     * @param schemes 协议
     */
    registerSchemes(schemes: string): boolean
    /**
     * 重新发送消息
     * 
     * @param peer 消息所属对象 群/好友
     * @param msgId 消息ID
     */
    resendMsg(peer: PeerInfo, msgId: `${number}`): Promise<SimpleResult>
    addKernelNodeMiscListener(listener: NodeIKernelNodeMiscListener): void
}