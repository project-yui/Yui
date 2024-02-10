import { NodeIDependsAdapter, NodeIDispatcherAdapter, NodeIKernelSessionListener } from "ntwrapper"
import { useLogger } from "../../common/log"
import { useNTCore } from "./core"
import { sleep } from "../../common/utils"
import { release } from "os"
import { getDeviceInfo, getNTPackageInfo } from "../common/utils"
import { initMsgService } from "./service/msg"
import { initUnitedConfig } from "./service/united-config"
import { initProfileService } from "./service/profile"

const log = useLogger('AfterLogin')

export const initWrapperSession = async (uin: `${number}`, uid: `u_${string}`) => {
  log.info('start to init wrapper session')
  const { getWrapperSession, getWrapperUtil } = useNTCore()
  const session = getWrapperSession()
  const msfService = session.getMSFService()
  log.info('getMsfStatus:', msfService.getMsfStatus())
  
  
  // 登陆后初始化
  // wrapperUtil.emptyWorkingSet(61444);
  const depends = new NodeIDependsAdapter({
    onMSFSsoError(...args) {
        log.info('DependsAdapter/onMSFSsoError', ...args)
    },
    onMSFStatusChange(...args) {
      log.info('DependsAdapter/onMSFStatusChange', ...args)
    },
    getGroupCode(...args) {
      log.info('DependsAdapter/getGroupCode', ...args)
    },
  })
  const dispatcherAdapter = new NodeIDispatcherAdapter({
    dispatchCall(...args) {
      log.info('DispatcherAdapter/dispatchCall', ...args)
    },
    dispatchCallWithJson(...args) {
      log.info('DispatcherAdapter/dispatchCallWithJson', ...args)
    },
    dispatchRequest(...args) {
      log.info('DispatcherAdapter/dispatchRequest', ...args)
    },
  })
  const sessionListener = new NodeIKernelSessionListener({
    onGetSelfTinyId(...args) {
      log.info('KernelSessionListener/onGetSelfTinyId', ...args)
    },
    onGProSessionCreate( ...args) {
      log.info('KernelSessionListener/onGProSessionCreate', ...args)
    },
    onNTSessionCreate( ...args) {
      log.info('KernelSessionListener/onNTSessionCreate', ...args)
    },
    onOpentelemetryInit(result) {
      log.info('KernelSessionListener/onOpentelemetryInit', result)
      if (result.is_init) {
        log.info('NTWrapperSession init successful!')
        initUnitedConfig()
        initMsgService()
        initProfileService()
      }
      else {
        log.error('NTWrapperSession init failed!')
      }
    },
    onSessionInitComplete(a, uid) {
      log.info('KernelSessionListener/onSessionInitComplete', a, uid)
    },
    onUserOnlineResult( ...args) {
      log.info('KernelSessionListener/onUserOnlineResult', ...args)
    },
  })
  const wrapperUtil = getWrapperUtil()
  const configFolder = wrapperUtil.getNTUserDataInfoConfig()
  const pkgInfo = getNTPackageInfo()
  session.init({
    selfUin: uin,
    selfUid: uid,
    desktopPathConfig: {
      account_path: configFolder
    },
    clientVer: pkgInfo.version,
    a2: '',
    d2: '',
    d2Key: '',
    machineId: '',
    platform: 3,
    platVer: release(),
    appid: '537207183',
    rdeliveryConfig: {
      appKey: '',
      systemId: 0,
      appId: '',
      logicEnvironment: '',
      platform: 3,
      language: '',
      sdkVersion: '',
      userId: '',
      appVersion: '',
      osVersion: '',
      bundleId: '',
      serverUrl: '',
      fixedAfterHitKeys: [ '' ]
    },
    defaultFileDownloadPath: 'C:\\Users\\jiyec\\Downloads',
    deviceInfo: getDeviceInfo(),
    deviceConfig: '{"appearance":{"isSplitViewMode":true},"msg":{}}'
  }, depends, dispatcherAdapter, sessionListener)
  await sleep(1000)
  session.startNT()
}