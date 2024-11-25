import { Contact } from "./contact";
import { Group } from "./group";

/**
 * 当前登录的用户
 */
export abstract class BaseUser extends Contact
{
    protected uid: `u_${string}` | undefined

    protected constructor(id: number, uid: `u_${string}` | undefined)
    {
        super(id)
        this.uid = uid
    }
}