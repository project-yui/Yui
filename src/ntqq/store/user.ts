import EventEmitter from "events"
import { useLogger } from "../../common/log"
import { useAsyncStore } from "../../store/async-store"
import { NodeIKernelLoginService } from "../types/services/NodeIKernelLoginService"
import { CustomError } from "../../server/error/custom-error"
import { User } from "../../models/contact/user"

const log = useLogger('Store/User')
interface CoreData {
  moduleIndex: number
  loginService: NodeIKernelLoginService
  wrapperSession: NTNativeWrapper.NodeIQQNTWrapperSession
  wrapperEngine: NTNativeWrapper.NodeIQQNTWrapperEngine
  startupSessionWrapper: NTNativeWrapper.NodeIQQNTStartupSessionWrapper
  dispatcher: EventEmitter
  info: UserInfo
  user?: User
}
const accountNTData: Record<number, CoreData> = {}
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
        throw new CustomError(500, 'useNTUserStore -> getUserInfo id error.')
      }
    }
    else
    {
      resultUin = uin
    }
    log.info('useNTUserStore -> getUserInfo', resultUin)
    return accountNTData[resultUin]?.info
  },
  /**
   * 获取当前登录的用户
   * @returns 
   */
  getUser: () => {
    let resultUin: number
    const asyncStore = useAsyncStore()
    const s = asyncStore.getStore()
    resultUin = s?.get('uin')
    if (!resultUin)
    {
      throw new CustomError(500, 'useNTUserStore -> getUser id error.')
    }
    log.info('useNTUserStore -> getUser', resultUin, accountNTData)
    let user = accountNTData[resultUin]?.user
    if (user) return user
    user = User.create(resultUin)
    accountNTData[resultUin].user = user
    return user
  },
  getAllAccountData: () => accountNTData,
  getCurrentAccountData: () => {
    const asyncStore = useAsyncStore()
    const s = asyncStore.getStore()
    const uin: number = s?.get('uin')
    if (!uin)
    {
      throw new CustomError(500, 'useNTUserStore -> getCurrentAccountData id error.')
    }
    return accountNTData[uin]
  }
})