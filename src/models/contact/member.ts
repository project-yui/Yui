import { useLogger } from "../../common/log";
import { sendCustomPkg } from "../../native/native";
import { useNTCore } from "../../ntqq/core/core";
import { CommunicationPkg, PaiYiPaiReq } from "../../ntqq/protobuf/communication";
import { GroupMemberDetailInfoType } from "../../onebot/common/interfaces";
import { CustomError } from "../../server/error/custom-error";
import { useStore } from "../../store/store";
import { MemberUserInfoType } from "../types/user";
import { BaseUser } from "./base-user";

const log = useLogger('Member')
/**
 * 群里面的用户
 */
export class Member extends BaseUser {
    private _groupId: number = 0
    private _info?: MemberUserInfoType

    protected constructor(id: number, uid: `u_${string}`) {
        super(id, uid)
    }
    /**
     * 创建群内用户
     * @param info 简单信息
     * @returns 新建对象
     */
    static create(gid: number, info: MemberUserInfoType) {
        const m = new Member(info.uin, info.uid)
        m._groupId = gid
        return m
    }
    /**
     * 刷新
     * @returns 
     */
    async refresh(): Promise<void> {
        return
    }
    async getInfo(): Promise<GroupMemberDetailInfoType> {
        if (!this.uid)
        {
            log.info('getGroupMemberInfoByUin', this._groupId, this.id)
            const { getWrapperSession } = useNTCore()
            const session = getWrapperSession()
            const convert = session.getUixConvertService()
            const info = await convert.getUid([`${this.id}`])
            log.info('get uid:', info)
            const uid = info?.uidInfo?.get(`${this.id}`)
            if (!uid) {
                throw new CustomError(1, 'Failed to get uid by uin!')
            }
            this.uid = uid
        }
        return await this.getInfoByUid()
    }
    private async getInfoByUid(): Promise<GroupMemberDetailInfoType> {
        log.info('getGroupMemberInfoByUid', this._groupId, this.uid)
        if (!this.uid) throw new CustomError(1, 'uid lost')
        const uid = this.uid
        return new Promise(async (resolve, reject) => {
            const { registerEventListener } = useStore()
            let remover: { remove: () => void } | null = null
            // 超时拒绝
            let time = setTimeout(() => {
                if (remover)
                    remover?.remove()
                reject('getGroupMemberInfoByUid timeout')
            }, 30000)
            remover = registerEventListener(`KernelGroupListener/onMemberInfoChange`, 'always', (groupId: `${number}`, b: number, payload: Map<`u_${string}`, GroupMemberDetailInfoType>) => {
                if (groupId !== `${this._groupId}`) return
                if (!payload.has(uid)) return
                remover?.remove()
                // 清除超时计时
                clearTimeout(time)
                const result = payload.get(uid)
                if (!result) {
                    log.error('info:', result, 'payload:', payload)
                    throw new CustomError(1, 'Failed to get member info!')
                }
                resolve(result)
            })
            const { getWrapperSession } = useNTCore()
            const session = getWrapperSession()
            const service = session.getGroupService()
            const result = await service.getMemberInfo(`${this._groupId}`, [uid], true)
            log.info(`getGroupMemberInfoByUid[${this._groupId}]:`, result)
        })
    }
    /**
     * 发送戳一戳/拍一拍
     * 
     * @returns 
     */
    async nudge() {
        const result = await sendCustomPkg('OidbSvcTrpcTcp.0xed3_1', CommunicationPkg.encode({
            uint32Command: 0xed3,
            uint32ServiceType: 1,
            bytesBodybuffer: PaiYiPaiReq.encode({
                uint64ToUin: this.id,
                uint64GroupCode: this._groupId,
                uint32NudgeType: 0,
            }).finish(),
            trpcTransInfo: [],
        }).finish())
        return result.uint32Result === 0
    }
}