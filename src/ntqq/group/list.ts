import { useStore } from "../../store/store"
import { useNTCore } from "../core/core"
import { NTGroupInfo } from "./types"

const { registerEventListener } = useStore()
export const NTGetGroupList = () => {
    return new Promise<NTGroupInfo[]>(async (resolve, reject) => {

        const { getWrapperSession } = useNTCore()
        const groupService = getWrapperSession().getGroupService()
        const listener = registerEventListener(
            'KernelGroupListener/onGroupListUpdate',
            'once',
            (a: number, list: NTGroupInfo[]) => {
                resolve(list)
            })
        const result = await groupService.getGroupList(true)
        if (result.result !== 0)
        {
            listener.remove()
            reject(result)
        }
    })
    
}