import { GroupInfoType } from "../types/group";
import { Contact } from "./contact";
import { Member } from "./member";

/**
 * 群组对象
 */
export class Group extends Contact {
    protected constructor(info: GroupInfoType)
    {
        super(info.id)
    }
    static create(info: GroupInfoType)
    {
        return new Group(info)
    }
    async refresh(): Promise<void> {
        return 
    }
    getMember(mid: number)
    {
        return Member.create(this.id, {
            uin: mid,
            uid: "u_",
            groupNick: "",
            remark: "",
            nick: "",
            signature: ""
        })
    }
    getMemberByUid(uid: `u_${string}`)
    {
        return Member.create(this.id, {
            uin: 0,
            uid: uid,
            groupNick: "",
            remark: "",
            nick: "",
            signature: ""
        })
    }
}