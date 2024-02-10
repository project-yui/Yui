import { useLogger } from "../../common/log"
import { sleep } from "../../common/utils"
import path from 'path'
import { release, userInfo } from "os"
import { getDeviceInfo, getNTPackageInfo } from "../common/utils"
import { useNTStore } from "./store"
import { initMsgService } from "./service/msg"
import { NodeIDependsAdapter, NodeIDispatcherAdapter, NodeIKernelSessionListener } from "ntwrapper"
import { initUnitedConfig } from "./service/united-config"

const log = useLogger('NTCore/init')

/**
 * 准备NT环境
 */
export const prepareBaseEnvironment = async() => {
  log.info('init start')
  const { getWrapperUtil, getGlobalAdapter, getWrapperEngine, getLoginService, getWrapperSession } = useNTStore()
  // const wrapper = require('../versions/9.9.7-21357/wrapper.node') as typeof NTNativeWrapper
  const wrapperUtil = getWrapperUtil()
  const configFolder = wrapperUtil.getNTUserDataInfoConfig()
  log.info('configFolder:', configFolder)
  const globalPath = path.resolve(configFolder, './nt_qq/global')
  const pkgInfo = getNTPackageInfo()
  const cfg: NodeIQQNTWrapperEngineType.Init = {
    base_path_prefix: '',
    /**
     * 3 - windows
     * 5 - linux
     */
    platform_type: 3,
    /**
     * 4 - desktop ?
     */
    app_type: 4,
    app_version: pkgInfo.version,
    os_version: 'Windows 10 Pro',
    use_xlog: true,
    qua: `V1_WIN_NQ_${pkgInfo.version.replace('-', '_')}_GW_B`,
    global_path_config: {
      desktopGlobalPath: globalPath
    },
    thumb_config: {
      maxSide: 324,
      minSide: 48,
      longLimit: 6,
      density: 2
    }
  }
  const globalAdapter = getGlobalAdapter()
  const wrapperEngine = getWrapperEngine()
  const initResult = wrapperEngine.initWithDeskTopConfig(cfg, globalAdapter)
  log.info('initResult:', initResult)
  const login = getLoginService()
  login.initConfig({
    machineId: '',
    appid: '537207183',
    platVer: release(),
    commonPath: globalPath,
    clientVer: pkgInfo.version,
    hostName: userInfo().username,
  })
  const loginList = await login.getLoginList()
  log.info('login list:', loginList)
  const hotUpdateSign = await login.getLoginMiscData('hotUpdateSign')
  log.info('hotUpdateSign:', hotUpdateSign)
  const setLoginMiscData = await login.setLoginMiscData('hotUpdateSign', '')
  log.info('setLoginMiscData:', setLoginMiscData)
  const connect = login.connect()
  log.info('connect:', connect)
  const appVersion = await login.getLoginMiscData('appVersion')
  log.info('appVersion:', appVersion)
  const msfStatus = await login.getMsfStatus()
  log.info('MsfStatus:', msfStatus)
  const isLogout = await login.getLoginMiscData('isLogout')
  log.info('isLogout:', isLogout)
  await sleep(2000)
  const user = loginList.LocalLoginInfoList.find(e => e.isQuickLogin)
  if (!user) {
    log.info('no user find!')
    return
  }
  const session = getWrapperSession()
  const msfService = session.getMSFService()
  log.info('getMsfStatus:', msfService.getMsfStatus())
  
  const loginResult = await login.quickLoginWithUin(user.uin)
  log.info('loginResult:', loginResult)
  await sleep(1000)
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
  session.init({
    selfUin: user.uin,
    selfUid: user.uid,
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