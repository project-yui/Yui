import { useListenerProxy } from "./dispatcher"
import { useLogger } from "../../common/log"
import { NodeIKernelLoginService } from "../types/services/NodeIKernelLoginService"
import { useNTUserStore } from "../store/user"
import { resetNTWrapper, useNTWrapper } from "./service/nt-wrapper"

const log = useLogger('NTStore')

const requireCurrentAccountData = () => {
  const userStore = useNTUserStore()
  userStore.requireCurrentUin()
  return userStore.getCurrentAccountData()
}

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
    return requireCurrentAccountData().wrapperEngine
  },
  /**
   * 频繁调用
   * @returns 
   */
  getLoginService: (): NodeIKernelLoginService => {
    return requireCurrentAccountData().loginService
  },
  /**
   * 频繁调用
   * @returns 
   */
  getWrapperSession: (): NTNativeWrapper.NodeIQQNTWrapperSession => {
    return requireCurrentAccountData().wrapperSession
  },
  /**
   * 频繁调用
   * @returns 
   */
  getStartupSessionWrapper: (): NTNativeWrapper.NodeIQQNTStartupSessionWrapper => {
    useNTWrapper()
    return requireCurrentAccountData().startupSessionWrapper
  },

  destroy: () => {
    log.warn('destroy ntqq core')
    resetNTWrapper()
  }
})
