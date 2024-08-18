import { useLogger } from "../../common/log"
import { sleep } from "../../common/utils"
import path from 'path'
import { release, userInfo } from "os"
import { getNTPackageInfo } from "../common/utils"
import { useNTCore } from "./core"
import { useNTConfig } from "../store/config"

const log = useLogger('NTCore/init')

/**
 * 准备NT环境
 */
export const prepareBaseEnvironment = async() => {
  log.info('init start')
  const { getGlobalAdapter, getWrapperEngine, getLoginService, getWrapperSession } = useNTCore()
  const { getNTConfigStoreFolder, getAppId, getAppInfo } = useNTConfig()
  // const wrapper = require('../versions/9.9.7-21357/wrapper.node') as typeof NTNativeWrapper
  const configFolder = getNTConfigStoreFolder()
  log.info('configFolder:', configFolder)
  const globalPath = path.resolve(configFolder, './global')
  const pkgInfo = getNTPackageInfo()
  const appInfo = getAppInfo()
  const cfg: NodeIQQNTWrapperEngineType.Init = {
    base_path_prefix: '',
    /**
     * 3 - windows
     * 5 - linux
     */
    platform_type: appInfo.platform_type,
    /**
     * 4 - desktop ?
     */
    app_type: appInfo.app_type,
    app_version: appInfo.app_version,
    os_version: appInfo.os_version,
    use_xlog: true,
    /**
     * 
     * V1_AND_SQ_${getQQVersion(MobileQQ.getContext())}_${getQQVersionCode()}_YYB_D
     */
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
  log.info('cfg:', cfg)
  const globalAdapter = getGlobalAdapter()
  const wrapperEngine = getWrapperEngine()
  const initResult = wrapperEngine.initWithDeskTopConfig(cfg, globalAdapter)
  log.info('initResult:', initResult)
  const login = getLoginService()
  login.initConfig({
    machineId: '',
    appid: getAppId(),
    platVer: release(),
    commonPath: globalPath,
    clientVer: pkgInfo.version,
    hostName: userInfo().username,
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
  await sleep(2000)
  
}