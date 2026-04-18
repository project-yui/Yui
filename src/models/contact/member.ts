import { useLogger } from "../../common/log";
import { getNTGroupService, getNTUixConvertService } from "../../ntqq/core/core";
import { nudgeGroupMember } from "../../ntqq/group/nudge";
import { GroupMemberDetailInfoType } from "../../onebot/contracts/common";
import { createNTEventWaiter } from "../../ntqq/query/wait";
import { CustomError } from "../../common/error/custom-error";
import { MemberUserInfoType } from "../types/user";
import { BaseUser } from "./base-user";

const log = useLogger('Member')
/**
 * 群里面的用户
 */
export class Member extends BaseUser {
    private _groupId: number = 0
    private _info?: MemberUserInfoType

    protected constructor(id: number, uid: `u_${string}` | undefined) {
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
            const convert = getNTUixConvertService()
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
            try {
                const waiter = createNTEventWaiter<
                    [groupId: `${number}`, _unused: number, payload: Map<`u_${string}`, GroupMemberDetailInfoType>],
                    GroupMemberDetailInfoType | undefined
                >({
                    event: 'KernelGroupListener/onMemberInfoChange',
                    match: (groupId, _unused, payload) => groupId === `${this._groupId}` && payload.has(uid),
                    select: (_groupId, _unused, payload) => payload.get(uid),
                })
                const service = getNTGroupService()
                const result = await service.getMemberInfo(`${this._groupId}`, [uid], true)
                log.info(`getGroupMemberInfoByUid[${this._groupId}]:`, result)

                const memberInfo = await waiter.promise
                if (!memberInfo) {
                    throw new CustomError(1, 'Failed to get member info!')
                }
                resolve(memberInfo)
            } catch (error) {
                reject(error)
            }
        })
    }
    /**
     * 发送戳一戳/拍一拍
     * 
     * @returns 
     */
    async nudge() {
        return await nudgeGroupMember(this._groupId, this.id)
    }
}
