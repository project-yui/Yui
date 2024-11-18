import { randomUUID } from "crypto"
import { NTEventListenerHandle, useStore } from "../../store/store"
import { CurrentAccountInfo, GroupDetailInfoType, GroupMemberDetailInfoType, UserDetailInfoType } from "./interfaces"
import { useNTCore } from "../../ntqq/core/core"
import { useNTUserStore } from "../../ntqq/store/user"
import { useLogger } from "../../common/log"
import { CustomError } from "../../server/error/custom-error"

const { registerEventListener } = useStore()
const log = useLogger('Common/User')

export const getGroupInfoById = (gid: number): Promise<GroupDetailInfoType> => {
  return new Promise(async (resolve, reject) => {
    let remover: { remove: () => void } | null = null
    // 超时拒绝
    let time = setTimeout(() => {
      if (remover)
        remover?.remove()
      reject('getGroupInfoByUid timeout')
    }, 30000)
    remover = registerEventListener(`KernelGroupListener/onGroupDetailInfoChange`, 'always', (payload: GroupDetailInfoType) => {
      if (payload.groupCode !== `${gid}`) return
      remover?.remove()
      // 清除超时计时
      clearTimeout(time)
      resolve(payload)
    })
    const { getWrapperSession } = useNTCore()
    const session = getWrapperSession()
    const service = session.getGroupService()
    const result = await service.getGroupDetailInfo(`${gid}`, 1)
    log.info(`getGroupDetailInfo[${gid}]:`, result)
  })
}