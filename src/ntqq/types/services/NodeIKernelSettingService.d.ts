
interface NodeIKernelSettingListenerConstructorOptions {
    onPrivacySettingChanged: () => void
    onVerifyInfoChange: () => void
    onNumSettingChanged: () => void
    onStrSettingChanged: () => void
    onBufferSettingChanged: () => void
    onCleanCacheProgressChanged: () => void
}
export class NodeIKernelSettingListener {
    constructor(options: NodeIKernelSettingListenerConstructorOptions)
}
export class NodeIKernelSettingService {
    addKernelSettingListener(listener: NodeIKernelSettingListener): number
    getAutoLoginSwitch(): Promise<any>
    getNeedConfirmSwitch(): Promise<any>
    getSettingForNum(settings: number[]): Promise<NodeIKernelSettingServiceType.GetSettingResp>
    getSettingForStr(settings: number[]): Promise<NodeIKernelSettingServiceType.GetSettingResp>
    setAutoLoginSwitch(on: boolean): Promise<SimpleResult>
}