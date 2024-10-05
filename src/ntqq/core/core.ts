import { useWrapper } from "ntwrapper"
import { useNTDispatcher } from "./dispatcher"
import { useLogger } from "../../common/log"
import { NodeIKernelLoginService } from "../types/services/NodeIKernelLoginService"
import { useAsyncStore } from "../../store/async-store"
import { useNTUserStore } from "../store/user"

const log = useLogger('NTStore')

export const useNTCore = () => ({
  getWrapperUtil: () => {
    const wrapper = useWrapper()
    return new wrapper.NodeQQNTWrapperUtil()
  },
  /**
   * 暂时只调用一次
   * @returns 
   */
  getGlobalAdapter: () => {
    const dispatcher = useNTDispatcher()
    const wrapper = useWrapper()
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
    const wrapper = useWrapper()
    return new wrapper.NodeIQQNTWrapperEngine()
  },
  /**
   * 频繁调用
   * @returns 
   */
  getLoginService: (): NodeIKernelLoginService => {
    const wrapper = useWrapper()
    const asyncStore = useAsyncStore()
    const s = asyncStore.getStore()
    const id = s?.get('id')
    if (!id) {
      throw new Error('id error')
    }
    const userStore = useNTUserStore()
    const accountNTData = userStore.getAllAccountData()
    if (!accountNTData[id])
    {
      accountNTData[id] = {
        loginService: new wrapper.NodeIKernelLoginService(),
        wrapperSession: new wrapper.NodeIQQNTWrapperSession(),
        info: {
          uin: undefined,
          uid: undefined,
          userNick: ""
        }
      }
    }
    return accountNTData[id].loginService
  },
  /**
   * 频繁调用
   * @returns 
   */
  getWrapperSession: (): NTNativeWrapper.NodeIQQNTWrapperSession => {
    const wrapper = useWrapper()
    const asyncStore = useAsyncStore()
    const s = asyncStore.getStore()
    const id = s?.get('id')
    if (!id) {
      throw new Error('id error')
    }
    const userStore = useNTUserStore()
    const accountNTData = userStore.getAllAccountData()
    if (!accountNTData[id])
    {
      accountNTData[id] = {
        loginService: new wrapper.NodeIKernelLoginService(),
        wrapperSession: new wrapper.NodeIQQNTWrapperSession(),
        info: {
          uin: undefined,
          uid: undefined,
          userNick: ""
        }
      }
    }
    return accountNTData[id].wrapperSession
  },
})