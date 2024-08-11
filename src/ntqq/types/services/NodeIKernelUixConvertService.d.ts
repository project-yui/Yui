
interface NodeIKernelSessionListenerConstructorOptions {
    onNTSessionCreate: () => void
    onGProSessionCreate: () => void
    onSessionInitComplete: (a: number, uid: `u_${string}`) => void
    onOpentelemetryInit: (result: {is_init: boolean, is_report: boolean}) => void
    onUserOnlineResult: () => void
    onGetSelfTinyId: () => void
  }
 export class NodeIKernelSessionListener {
    constructor(options: NodeIKernelSessionListenerConstructorOptions)
  }

  interface UidInfo {
    uidInfo: Map<`${number}`, `u_${string}`>
  }
  // #region UixConvertService
 export class NodeIKernelUixConvertService extends NTNativeWrapper.NTBaseClass {
    /**
     * 根据QQ号获取用户id
     * 
     * 已测试
     * @param uin QQ号
     */
    getUid(uin: `${number}`[]): Promise<UidInfo>
    /**
     * 根据用户id获取QQ号
     * 
     * 未测试
     * @param uin QQ号
     */
    getUin(uid: `u_${string}`[]): Promise<Map<`u_${string}`, `${number}`>>
  }