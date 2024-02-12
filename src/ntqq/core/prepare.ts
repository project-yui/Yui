import { useLogger } from "../../common/log"
import { sleep } from "../../common/utils"
import path from 'path'
import { release, userInfo } from "os"
import { getDeviceInfo, getNTPackageInfo } from "../common/utils"
import { useNTCore } from "./core"
import { initMsgService } from "./service/msg"
import { NodeIDependsAdapter, NodeIDispatcherAdapter, NodeIKernelSessionListener } from "ntwrapper"
import { initUnitedConfig } from "./service/united-config"

const log = useLogger('NTCore/init')

/**
 * 准备NT环境
 */
export const prepareBaseEnvironment = async() => {
  log.info('init start')
  const { getNTConfigStoreFolder, getAppId, getGlobalAdapter, getWrapperEngine, getLoginService, getWrapperSession } = useNTCore()
  // const wrapper = require('../versions/9.9.7-21357/wrapper.node') as typeof NTNativeWrapper
  const configFolder = getNTConfigStoreFolder()
  log.info('configFolder:', configFolder)
  const globalPath = path.resolve(configFolder, './global')
  const pkgInfo = getNTPackageInfo()
  const devInfo = getDeviceInfo()
  const cfg: NodeIQQNTWrapperEngineType.Init = {
    base_path_prefix: '',
    /**
     * 3 - windows
     * 5 - linux
     */
    platform_type: process.platform === 'win32' ? 3 : 5,
    /**
     * 4 - desktop ?
     */
    app_type: 4,
    app_version: pkgInfo.version,
    os_version: devInfo.osVer,
    use_xlog: true,
    qua: `V1_${process.platform === 'win32' ? 'WIN' : 'LNX' }_NQ_${pkgInfo.version.replace('-', '_')}_GW_B`,
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