import { UserInfoType } from "../types/user";
import { BaseUser } from "./base-user";
import { Group } from "./group";

/**
 * 当前登录的用户
 */
export class User extends BaseUser
{
    private _info?: UserInfoType

    protected constructor(id: number, uid: `u_${string}`)
    {
        super(id, uid)
    }
    static create(uin: number)
    {
        return new User(uin, 'u_')
    }
    getGroup(gid: number)
    {
        return Group.create({
            id: gid,
            name: ""
        })
    }
    async refresh(): Promise<void> {
        // TODO:
        return 
    }
}