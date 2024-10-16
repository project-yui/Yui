import { useListenerProxy, useNTDispatcher } from "./dispatcher"
import { useLogger } from "../../common/log"
import { NodeIKernelLoginService } from "../types/services/NodeIKernelLoginService"
import { useAsyncStore } from "../../store/async-store"
import { useNTUserStore } from "../store/user"
import { useNTWrapper } from "./service/nt-wrapper"
import { CustomError } from "../../server/error/custom-error"

const log = useLogger('NTStore')

export const useNTCore = () => ({
  getWrapperUtil: () => {
    const wrapper = useNTWrapper()
    return wrapper.NodeQQNTWrapperUtil
  },
  /**
   * 暂时只调用一次
   * @returns 
   */
  getGlobalAdapter: () => {
    return useListenerProxy('NodeIGlobalAdapter')
  },
  /**
   * 暂时只调用一次
   * @returns 
   */
  getWrapperEngine: () => {
    const asyncStore = useAsyncStore()
    const s = asyncStore.getStore()
    const uin: number = s?.get('uin')
    if (!uin) {
      throw new CustomError(500, 'id error')
    }
    const userStore = useNTUserStore()
    const accountNTData = userStore.getCurrentAccountData()
    return accountNTData.wrapperEngine
  },
  /**
   * 频繁调用
   * @returns 
   */
  getLoginService: (): NodeIKernelLoginService => {
    const asyncStore = useAsyncStore()
    const s = asyncStore.getStore()
    const uin: number = s?.get('uin')
    if (!uin) {
      throw new CustomError(500, 'id error')
    }
    const userStore = useNTUserStore()
    const accountNTData = userStore.getCurrentAccountData()
    return accountNTData.loginService
  },
  /**
   * 频繁调用
   * @returns 
   */
  getWrapperSession: (): NTNativeWrapper.NodeIQQNTWrapperSession => {
    const wrapper = useNTWrapper()
    const asyncStore = useAsyncStore()
    const s = asyncStore.getStore()
    const uin: number = s?.get('uin')
    if (!uin) {
      throw new CustomError(500, 'id error')
    }
    const userStore = useNTUserStore()
    const accountNTData = userStore.getCurrentAccountData()
    return accountNTData.wrapperSession
  },
})