import EventEmitter from "events"
import { useLogger } from "../../common/log"
import { useAsyncStore } from "../../store/async-store"
import { NodeIKernelLoginService } from "../types/services/NodeIKernelLoginService"

const log = useLogger('Store/User')
interface CoreData {
  moduleIndex: number
  loginService: NodeIKernelLoginService
  wrapperSession: NTNativeWrapper.NodeIQQNTWrapperSession
  dispatcher: EventEmitter
  info: UserInfo
}
const accountNTData: Record<string, CoreData> = {}
export const useNTUserStore = () => ({
  getUserInfo: (uin?: `${number}`) => {
    let id: `${number}`
    if (!uin)
    {
      const asyncStore = useAsyncStore()
      const s = asyncStore.getStore()
      id = s?.get('id')
      if (!id)
      {
        throw new Error('useNTUserStore -> getUserInfo id error.')
      }
    }
    else
    {
      id = uin
    }
    log.info('useNTUserStore -> getUserInfo', id, accountNTData)
    return accountNTData[id]?.info
  },
  getAllAccountData: () => accountNTData,
  getCurrentAccountData: () => {
    const asyncStore = useAsyncStore()
    const s = asyncStore.getStore()
    const id = s?.get('id')
    if (!id)
    {
      throw new Error('useNTUserStore -> getCurrentAccountData id error.')
    }
    return accountNTData[id]
  }
})