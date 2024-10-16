import { useLogger } from "../../common/log"
import { useStore } from "../../store/store"
import { useNTCore } from "../core/core"
import { NTGroupInfo } from "./types"

const { registerEventListener } = useStore()
const log = useLogger('GroupList')
export const NTGetGroupList = () => {
    return new Promise<NTGroupInfo[]>(async (resolve, reject) => {

        const { getWrapperSession } = useNTCore()
        const wrapperSession = getWrapperSession()
        log.info('wrapperSession:', wrapperSession)
        const groupService = wrapperSession.getGroupService()
        log.info('groupService:', groupService)
        const listener = registerEventListener(
            'KernelGroupListener/onGroupListUpdate',
            'once',
            (a: number, list: NTGroupInfo[]) => {
                log.info(a, list)
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