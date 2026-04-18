import { useLogger } from "../../common/log"
import { getNTGroupService } from "../core/core"
import { createNTEventWaiter } from "../query/wait"
import { NTGroupInfo } from "./types"

const log = useLogger('GroupList')
export const NTGetGroupList = () => {
    return new Promise<NTGroupInfo[]>(async (resolve, reject) => {
        const groupService = getNTGroupService()
        log.info('groupService:', groupService)
        const waiter = createNTEventWaiter<[number, NTGroupInfo[]], NTGroupInfo[]>({
            event: 'KernelGroupListener/onGroupListUpdate',
            match: () => true,
            select: (_unused, list) => {
                log.info(_unused, list)
                return list
            },
        })
        try {
            const result = await groupService.getGroupList(true)
            if (result.result !== 0) {
                waiter.cancel()
                reject(result)
                return
            }
            resolve(await waiter.promise)
        } catch (error) {
            waiter.cancel()
            reject(error)
        }
    })
}
