import { NTReceiveMessageType } from "../../message/interfaces"

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
declare namespace NodeIKernelNodeMiscServiceType {
  interface GetFullScreenInfoResp {
    in_full_screen: boolean
    is_self: boolean
  }
  interface ParseClipboardResp {
    /**
     * 0 - 没有可解析的消息（纯文本）
     * 1 - ok
     */
    result: number
    errMsg: string
    msgElements: NTReceiveMessageType.NTMessageElementType[]
  }
  interface WriteClipboardResp {
    callId: string
    /**
     * 1 - ok
     */
    result: number
    errMsg: string
  }
}
export class NodeIKernelNodeMiscListener {
    constructor(options: NodeIKernelNodeMiscListenerConstructorOptions)
}
export default class NodeIKernelNodeMiscService {
    addKernelNodeMiscListener(listener: NodeIKernelNodeMiscListener): void
    getGetFullScreenInfo(): NodeIKernelNodeMiscServiceType.GetFullScreenInfoResp
    getMiniAppPath(): string
    isMiniAppExist(): boolean
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
     * 解析剪贴板内容为消息元素
     */
    wantParseClipboard(): Promise<NodeIKernelNodeMiscServiceType.ParseClipboardResp>
    writeClipboard(msgElements: NTReceiveMessageType.NTMessageElementType[]): NodeIKernelNodeMiscServiceType.WriteClipboardResp
}