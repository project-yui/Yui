import { NodeIGlobalAdapter, NodeIKernelLoginService, NodeIQQNTWrapperEngine, NodeIQQNTWrapperSession, NodeQQNTWrapperUtil } from "ntwrapper"
import { useNTDispatcher } from "./dispatcher"

const dispatcher = useNTDispatcher()

const wrapperUtil = new NodeQQNTWrapperUtil()
const globalAdapter = new NodeIGlobalAdapter({
  onGetOfflineMsg(...args) {
    dispatcher.emit('GlobalAdapter/onGetOfflineMsg', ...args)
  },
  onGetSrvCalTime(...args) {
    dispatcher.emit('GlobalAdapter/onGetSrvCalTime', ...args)
  },
  async onInstallFinished(...args) {
    dispatcher.emit('GlobalAdapter/onInstallFinished', ...args)
  },
  onLog(...args) {
    dispatcher.emit('GlobalAdapter/onLog', ...args)
  },
  onShowErrUITips(...args) {
    dispatcher.emit('GlobalAdapter/onShowErrUITips', ...args)
  },
  onUpdateGeneralFlag(...args) {
    dispatcher.emit('GlobalAdapter/onUpdateGeneralFlag', ...args)
  },
  async fixPicImgType(...args) {
    dispatcher.emit('GlobalAdapter/fixPicImgType', ...args)
  },
})
const wrapperEngine = new NodeIQQNTWrapperEngine()
const loginService = new NodeIKernelLoginService()
const wrapperSession = new NodeIQQNTWrapperSession()

export const useNTStore = () => ({
  getWrapperUtil: () => wrapperUtil,
  getGlobalAdapter: () => globalAdapter,
  getWrapperEngine: () => wrapperEngine,
  getLoginService: () => loginService,
  getWrapperSession: () => wrapperSession,
})