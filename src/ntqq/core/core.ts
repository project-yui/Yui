import { useLogger } from "../../common/log"
import { sleep } from "../../common/utils"
import path from 'path'
import { release, userInfo } from "os"
import { getNTPackageInfo } from "../common/utils"
import { useNTStore } from "./store"
import { initMsgService } from "./service/msg"

const log = useLogger('NTCore/init')

/**
 * 准备NT环境
 */
export const prepareBaseEnvironment = async() => {
  log.info('init start')
  const { getWrapperUtil, getGlobalAdapter, getWrapperEngine, getLoginService } = useNTStore()
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
    qua: 'V1_WIN_NQ_9.9.7_21357_GW_B',
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

  initMsgService()
  
}