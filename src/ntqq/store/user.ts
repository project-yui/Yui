import { useAsyncStore } from "../../store/async-store"
import { NodeIKernelLoginService } from "../types/services/NodeIKernelLoginService"

interface CoreData {
  loginService: NodeIKernelLoginService
  wrapperSession: NTNativeWrapper.NodeIQQNTWrapperSession
  info: UserInfo
}
const accountNTData: Record<string, CoreData> = {}
export const useNTUserStore = () => ({
  getUserInfo: () => {
    const asyncStore = useAsyncStore()
    const s = asyncStore.getStore()
    const id = s?.get('id')
    if (!id)
    {
      throw new Error('useNTUserStore -> getUserInfo id error.')
    }
    return accountNTData[id].info
  },
  getAllAccountData: () => accountNTData
})