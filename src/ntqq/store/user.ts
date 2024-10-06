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
  getUserInfo: (uin?: number) => {
    let resultUin: number
    if (!uin)
    {
      const asyncStore = useAsyncStore()
      const s = asyncStore.getStore()
      resultUin = s?.get('uin')
      if (!resultUin)
      {
        throw new Error('useNTUserStore -> getUserInfo id error.')
      }
    }
    else
    {
      resultUin = uin
    }
    log.info('useNTUserStore -> getUserInfo', resultUin, accountNTData)
    return accountNTData[resultUin]?.info
  },
  getAllAccountData: () => accountNTData,
  getCurrentAccountData: () => {
    const asyncStore = useAsyncStore()
    const s = asyncStore.getStore()
    const uin: number = s?.get('uin')
    if (!uin)
    {
      throw new Error('useNTUserStore -> getCurrentAccountData id error.')
    }
    return accountNTData[uin]
  }
})