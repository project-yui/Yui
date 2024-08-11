
interface NodeIKernelUnitedConfigListenerConstructorOptions {
    onUnitedConfigUpdate: () => void
}
export class NodeIKernelUnitedConfigListener {
    constructor(options: NodeIKernelUnitedConfigListenerConstructorOptions)
}
export class NodeIKernelUnitedConfigService {
    addKernelUnitedConfigListener(listener: NodeIKernelUnitedConfigListener): void
    /**
     * 拉取配置
     * 
     * 在监听器里面回调
     * @param ids 拉取的配置id
     */
    fetchUnitedCommendConfig(ids: `${string}`[]): void
    loadUnitedConfig(id: string): Promise<NodeIKernelUnitedConfigServiceType.UnitedConfigResp>
    isUnitedConfigSwitchOn(id: string): Promise<NodeIKernelUnitedConfigServiceType.IsUnitedConfigSwitchOnResp>
    registerUnitedConfigPushGroupList(list: string[]): void
}