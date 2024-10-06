import { useNTDispatcher } from "./dispatcher"
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
    return new wrapper.NodeQQNTWrapperUtil()
  },
  /**
   * 暂时只调用一次
   * @returns 
   */
  getGlobalAdapter: () => {
    const dispatcher = useNTDispatcher()
    const wrapper = useNTWrapper()
    return new wrapper.NodeIGlobalAdapter({
      onLog(...args) {
        log.info('GlobalAdapter/onLog', ...args)
        dispatcher.emit('GlobalAdapter/onLog', ...args)
      },
      onGetSrvCalTime(...args) {
        log.info('GlobalAdapter/onGetSrvCalTime', ...args)
        dispatcher.emit('GlobalAdapter/onGetSrvCalTime', ...args)
      },
      onShowErrUITips(...args) {
        log.info('GlobalAdapter/onShowErrUITips', ...args)
        dispatcher.emit('GlobalAdapter/onShowErrUITips', ...args)
      },
      async fixPicImgType(...args) {
        log.info('GlobalAdapter/fixPicImgType', ...args)
        dispatcher.emit('GlobalAdapter/fixPicImgType', ...args)
      },
      getAppSetting(...args) {
        log.info('GlobalAdapter/getAppSetting', ...args)
        dispatcher.emit('GlobalAdapter/getAppSetting', ...args)
      },
      async onInstallFinished(...args) {
        log.info('GlobalAdapter/onInstallFinished', ...args)
        dispatcher.emit('GlobalAdapter/onInstallFinished', ...args)
      },
      onUpdateGeneralFlag(...args) {
        log.info('GlobalAdapter/onUpdateGeneralFlag', ...args)
        dispatcher.emit('GlobalAdapter/onUpdateGeneralFlag', ...args)
      },
      onGetOfflineMsg(...args) {
        log.info('GlobalAdapter/onGetOfflineMsg', ...args)
        dispatcher.emit('GlobalAdapter/onGetOfflineMsg', ...args)
      },
    })
  },
  /**
   * 暂时只调用一次
   * @returns 
   */
  getWrapperEngine: () => {
    const wrapper = useNTWrapper()
    return new wrapper.NodeIQQNTWrapperEngine()
  },
  /**
   * 频繁调用
   * @returns 
   */
  getLoginService: (): NodeIKernelLoginService => {
    const wrapper = useNTWrapper()
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