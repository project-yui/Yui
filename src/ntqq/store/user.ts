import EventEmitter from "events"
import { useLogger } from "../../common/log"
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

let currentAccountData: CoreData | null = null
let currentUin: number | undefined

export const useNTUserStore = () => ({
  getCurrentUin: () => currentAccountData?.info.uin || currentUin,
  setCurrentUin: (uin?: number) => {
    currentUin = uin
  },
  setCurrentAccountData: (data: CoreData) => {
    currentAccountData = data
    if (data.info.uin) {
      currentUin = data.info.uin
    }
  },
  getUserInfo: (uin?: number) => {
    const info = currentAccountData?.info
    if (!info) {
      return undefined
    }
    if (uin !== undefined && info.uin && info.uin !== uin) {
      return undefined
    }
    log.info('useNTUserStore -> getUserInfo', info.uin || currentUin)
    return info
  },
  /**
   * 获取当前登录的用户
   * @returns 
   */
  getUser: () => {
    const uin = currentAccountData?.info.uin || currentUin
    if (!uin || !currentAccountData)
    {
      throw new CustomError(500, 'useNTUserStore -> getUser id error.')
    }
    log.info('useNTUserStore -> getUser', uin, currentAccountData)
    let user = currentAccountData.user
    if (user) return user
    user = User.create(uin)
    currentAccountData.user = user
    return user
  },
  getAccountList: () => {
    const uin = currentAccountData?.info.uin || currentUin
    return uin ? [uin] : []
  },
  requireCurrentUin: () => {
    const uin = currentAccountData?.info.uin || currentUin
    if (!uin) {
      throw new CustomError(500, 'useNTUserStore -> requireCurrentUin id error.')
    }
    return uin
  },
  getCurrentAccountData: () => {
    if (!currentAccountData) {
      throw new CustomError(500, 'useNTUserStore -> getCurrentAccountData id error.')
    }
    return currentAccountData
  },
  getCurrentAccountInfo: () => {
    const data = currentAccountData
    if (!data) {
      throw new CustomError(500, 'useNTUserStore -> getCurrentAccountInfo id error.')
    }
    return data.info
  }
})
