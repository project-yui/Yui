import { GroupInfoType } from "../types/group";
import { Contact } from "./contact";
import { Member } from "./member";

/**
 * 群组对象
 */
export class Group extends Contact {
    private members: Map<number, Member> = new Map()
    protected constructor(info: GroupInfoType)
    {
        super(info.id)
    }
    static async create(info: GroupInfoType)
    {
        const g = new Group(info)
        await g.refresh()
        return g
    }
    async refresh(): Promise<void> {
        return 
    }
    async getMember(mid: number)
    {
        if (this.members.has(mid))
        {
            return this.members.get(mid)
        }
        if (this.members.has(mid))
        {
            return this.members.get(mid)
        }
        const m = await Member.create(this.id, {
            uin: mid,
            uid: "u_",
            groupNick: "",
            remark: "",
            nick: "",
            signature: ""
        })
        this.members.set(mid, m)
        return m
    }
}