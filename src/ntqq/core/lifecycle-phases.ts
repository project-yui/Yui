import { useLogger } from "../../common/log"
import { sleep } from "../../common/utils"
import { getNTPackageInfo } from "../common/utils"
import {
  getNTAppId,
  getNTAppInfo,
  getNTConfigStoreFolder,
  getNTDeviceInfo,
  getNTDesktopPlatformType,
} from "../store/config"
import {
  getNTGlobalAdapter,
  getNTLoginService,
  getNTMSFService,
  getNTWrapperEngine,
  initializeCurrentNTWrapperSession,
  startNTStartupSession,
} from "./core"
import { getNTWrapper } from "./service/nt-wrapper"
import path from "path"
import { release, userInfo } from "os"

const log = useLogger('NTCore/LifecyclePhases')

export const buildNTDesktopInitConfig = () => {
  const configFolder = getNTConfigStoreFolder()
  log.info('configFolder:', configFolder)
  const globalPath = path.resolve(configFolder, './global')
  const appInfo = getNTAppInfo()
  const config: NodeIQQNTWrapperEngineType.Init = {
    base_path_prefix: '',
    platform_type: appInfo.platform_type,
    app_type: appInfo.app_type,
    app_version: appInfo.app_version,
    os_version: appInfo.os_version,
    use_xlog: true,
    qua: appInfo.qua,
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
  return {
    configFolder,
    globalPath,
    config,
  }
}

export const initializeNTWrapperEngineRuntime = () => {
  const { config, globalPath } = buildNTDesktopInitConfig()
  const globalAdapter = getNTGlobalAdapter()
  const wrapperEngine = getNTWrapperEngine()
  log.info('cfg:', config)
  log.info('globalAdapter:', globalAdapter)
  const initResult = wrapperEngine.initWithDeskTopConfig(config, globalAdapter)
  log.info('initResult:', initResult)
  return {
    globalPath,
    initResult,
  }
}

export const initializeNTLoginRuntime = async (globalPath: string) => {
  const pkgInfo = getNTPackageInfo()
  const login = getNTLoginService()
  login.initConfig({
    machineId: '',
    appid: getNTAppId(),
    platVer: release(),
    commonPath: globalPath,
    clientVer: pkgInfo.version,
    hostName: userInfo().username,
    externalVersion: false
  })
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
}

export const waitNTLoginRuntimeReadyPhase = async () => {
  log.info('phase: wait login runtime ready')
  await sleep(2000)
}

export const prepareNTBaseEnvironmentPhases = async () => {
  log.info('phase: init wrapper engine')
  const { globalPath } = initializeNTWrapperEngineRuntime()
  log.info('phase: init login config and connect')
  await initializeNTLoginRuntime(globalPath)
  await waitNTLoginRuntimeReadyPhase()
  return { globalPath }
}

export const buildNTSessionInitConfig = (uin: `${number}`, uid: `u_${string}`): NodeIQQNTWrapperSessionType.Init => {
  const configFolder = getNTConfigStoreFolder()
  const pkgInfo = getNTPackageInfo()

  return {
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
    platform: getNTDesktopPlatformType(),
    platVer: release(),
    appid: getNTAppId(),
    rdeliveryConfig: {
      appKey: '',
      systemId: 0,
      appId: '',
      logicEnvironment: '',
      platform: 5,
      language: '',
      sdkVersion: '',
      userId: '',
      appVersion: '',
      osVersion: '',
      bundleId: '',
      serverUrl: '',
      fixedAfterHitKeys: ['']
    },
    defaultFileDownloadPath: '/home/msojocs',
    deviceInfo: getNTDeviceInfo(),
    deviceConfig: '{"appearance":{"isSplitViewMode":true},"msg":{}}',
    deviceType: 3
  }
}

export const startNTSessionBootstrapPhases = (uin: `${number}`, uid: `u_${string}`) => {
  log.info('phase: start wrapper session', uin, uid)
  const msfService = getNTMSFService()
  log.info('getMsfStatus:', msfService.getMsfStatus())

  const wrapper = getNTWrapper()
  wrapper.NodeQQNTWrapperUtil.emptyWorkingSet(61444)

  const initConfig = buildNTSessionInitConfig(uin, uid)
  initializeCurrentNTWrapperSession(initConfig)
  startNTStartupSession()
}
