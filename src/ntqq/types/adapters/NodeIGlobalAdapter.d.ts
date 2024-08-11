
interface NodeIGlobalAdapterConstructorOptions {
    onLog?: () => void
    onGetSrvCalTime?: () => void
    onShowErrUITips?: () => void
    fixPicImgType?: () => Promise<void>
    getAppSetting?: () => void
    onInstallFinished?: () => Promise<void>
    onUpdateGeneralFlag?: () => void
    onGetOfflineMsg?: () => void
}
export class NodeIGlobalAdapter {
    constructor(options: NodeIGlobalAdapterConstructorOptions)

}