import { sendCustomPkg } from "../../native/native";
import { CommunicationPkg, PaiYiPaiReq } from "../../ntqq/protobuf/communication";
import { MemberUserInfoType } from "../types/user";
import { BaseUser } from "./base-user";

/**
 * 群里面的用户
 */
export class Member extends BaseUser
{
    private _groupId: number = 0
    private _info?: MemberUserInfoType

    protected constructor(id: number, uid: `u_${string}`)
    {
        super(id, uid)
    }
    /**
     * 创建群内用户
     * @param info 简单信息
     * @returns 新建对象
     */
    static async create(gid: number, info: MemberUserInfoType)
    {
        const m = new Member(info.uin, info.uid)
        m._groupId = gid
        await m.refresh()
        return m
    }
    /**
     * 刷新
     * @returns 
     */
    async refresh(): Promise<void> {
        return 
    }
    /**
     * 发送戳一戳/拍一拍
     * 
     * @returns 
     */
    async nudge()
    {
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