import { NodeIGlobalAdapter, NodeIKernelLoginService, NodeIQQNTWrapperEngine, NodeIQQNTWrapperSession, NodeQQNTWrapperUtil } from "ntwrapper"
import { useNTDispatcher } from "./dispatcher"
import { useLogger } from "../../common/log"
import { homedir } from "os"

const dispatcher = useNTDispatcher()
const log = useLogger('NTStore')
const wrapperUtil = new NodeQQNTWrapperUtil()
const globalAdapter = new NodeIGlobalAdapter({
  onGetOfflineMsg(...args) {
    log.info('GlobalAdapter/onGetOfflineMsg', ...args)
    dispatcher.emit('GlobalAdapter/onGetOfflineMsg', ...args)
  },
  onGetSrvCalTime(...args) {
    log.info('GlobalAdapter/onGetSrvCalTime', ...args)
    dispatcher.emit('GlobalAdapter/onGetSrvCalTime', ...args)
  },
  async onInstallFinished(...args) {
    log.info('GlobalAdapter/onInstallFinished', ...args)
    dispatcher.emit('GlobalAdapter/onInstallFinished', ...args)
  },
  onLog(...args) {
    log.info('GlobalAdapter/onLog', ...args)
    dispatcher.emit('GlobalAdapter/onLog', ...args)
  },
  onShowErrUITips(...args) {
    log.info('GlobalAdapter/onShowErrUITips', ...args)
    dispatcher.emit('GlobalAdapter/onShowErrUITips', ...args)
  },
  onUpdateGeneralFlag(...args) {
    log.info('GlobalAdapter/onUpdateGeneralFlag', ...args)
    dispatcher.emit('GlobalAdapter/onUpdateGeneralFlag', ...args)
  },
  async fixPicImgType(...args) {
    log.info('GlobalAdapter/fixPicImgType', ...args)
    dispatcher.emit('GlobalAdapter/fixPicImgType', ...args)
  },
})
const wrapperEngine = new NodeIQQNTWrapperEngine()
const loginService = new NodeIKernelLoginService()
const wrapperSession = new NodeIQQNTWrapperSession()
const getAppId = () => {
   return process.platform === 'win32' ? '537207183' : '537207207'
}
const getNTConfigStoreFolder = (): string => {
  switch(process.platform) {
    case 'win32':
      return wrapperUtil.getNTUserDataInfoConfig() + '/nt_qq'
    case 'linux':
      return `${homedir()}/.config/QQ`
      break
    default:
      return './nt_qq'
      break
  }
}
export const useNTCore = () => ({
  getWrapperUtil: () => wrapperUtil,
  getGlobalAdapter: () => globalAdapter,
  getWrapperEngine: () => wrapperEngine,
  getLoginService: () => loginService,
  getWrapperSession: () => wrapperSession,
  getAppId,
  getNTConfigStoreFolder,
})