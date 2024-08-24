
interface NodeIKernelProfileListenerConstructorOptions {
    onProfileSimpleChanged: () => void
    onProfileDetailInfoChanged: () => void
    onStatusUpdate: () => void
    onSelfStatusChanged: () => void
}
export class NodeIKernelProfileListener {
    constructor(options: NodeIKernelProfileListenerConstructorOptions)
}

interface CoreAndBaseInfo {
    uid: `u_${string}`
    uin: `${number}`
    coreInfo: {
        /**
         * 昵称
         */
        nick: string
        /**
         * 备注
         */
        remark: string
    }
    baseInfo: {
        /**
         * 签名
         */
        loongNick: string
        /**
         * 最后在线时间？
         */
        richTime: number
    }
}
export class NodeIKernelProfileService {
    addKernelProfileListener(listener: NodeIKernelProfileListener): number
    getUserSimpleInfo(a: boolean, uid: `u_${string}`[]): Promise<NodeIKernelProfileServiceType.UserSimpleInfoResp>
    getUserDetailInfo(uid: `u_${string}`): Promise<SimpleResult>
    getUserDetailInfoWithBizInfo(uid: `u_${string}`, keys: number[]): Promise<SimpleResult>
    getCoreAndBaseInfo(src: string, ids: `u_${string}`[]): Map<`u_${string}`, CoreAndBaseInfo>
}