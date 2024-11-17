import { UserInfoType } from "../types/user";
import { BaseUser } from "./base-user";
import { Group } from "./group";

/**
 * 当前登录的用户
 */
export class User extends BaseUser
{
    private _group: Map<number, Group> = new Map()
    private _info?: UserInfoType

    protected constructor(id: number, uid: `u_${string}`)
    {
        super(id, uid)
    }
    static async create(uin: number)
    {
        const u = new User(uin, 'u_')
        await u.refresh()
        return u
    }
    async getGroup(gid: number)
    {
        if (this._group.has(gid))
        {
            return this._group.get(gid)
        }
        const g = await Group.create({
            id: gid,
            name: ""
        })
        this._group.set(gid, g)
        return g
    }
    async refresh(): Promise<void> {
        // TODO:
        return 
    }
}