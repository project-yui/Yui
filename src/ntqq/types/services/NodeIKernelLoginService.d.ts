
interface NodeIKernelLoginListenerConstructorOptions {
    onLoginConnected: () => void
    onLoginDisConnected: () => void
    onLoginConnecting: () => void
    onQRCodeGetPicture: () => void
    onQRCodeLoginPollingStarted: () => void
    /**
     * 用户扫描了二维码
     * 
     * @returns 
     */
    onQRCodeSessionUserScaned: () => void
    onLoginState: () => void
    onQRCodeLoginSucceed: (info: NodeIKernelLoginListenerType.UserInfo) => void
    onQRCodeSessionFailed: () => void
    onLoginFailed: () => void
    onLogoutSucceed: () => void
    onLogoutFailed: () => void
    onUserLoggedIn: () => void
    onQRCodeSessionQuickLoginFailed: () => void
    onPasswordLoginFailed: () => void
    OnConfirmUnusualDeviceFailed: () => void
    onQQLoginNumLimited: () => void
}
export class NodeIKernelLoginListener {
    constructor(options: NodeIKernelLoginListenerConstructorOptions);
}
export class NodeIKernelLoginService {
    constructor()
    addKernelLoginListener(listener: NodeIKernelLoginListener): void
    connect(): boolean
    destroy(): void
    get(): typeof NodeIKernelLoginService
    getMsfStatus(): number
    getLoginList(): Promise<NodeIKernelLoginServiceType.LoginInfoListResp>
    getLoginMiscData(name: string): Promise<NodeIKernelLoginServiceType.GetLoginMiscDataResp>
    /**
     * 获取登录二维码
     * 
     * 响应数据在监听器里面触发
     */
    getQRCodePicture(): boolean
    initConfig(config: NodeIKernelLoginServiceType.LoginInitConfig): void
    passwordLogin(login: NodeIKernelLoginServiceType.PasswordLoginReq): Promise<NodeIKernelLoginServiceType.PasswordLoginResp>
    quickLoginWithUin(uin: `${number}`): Promise<NodeIKernelLoginServiceType.QuickLoginResp>
    setLoginMiscData(name: string, value: string): Promise<NodeIKernelLoginServiceType.SetLoginMiscDataResp>
}