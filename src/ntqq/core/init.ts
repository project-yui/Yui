import { NodeQQNTWrapperUtil } from "ntwrapper"
import { useLogger } from "../../common/log"
import { sleep } from "../../common/utils"

const log = useLogger('NTCore/init')

export const init = async() => {
  log.info('init start')
  const wrapperUtil = new NodeQQNTWrapperUtil()
  // const wrapper = require('../versions/9.9.7-21357/wrapper.node') as typeof NTNativeWrapper
  // const configFolder = wrapperUtil.getNTUserDataInfoConfig()
  // log.info('configFolder:', configFolder)
  // const cfg = {
  //   base_path_prefix: '',
  //   platform_type: 3,
  //   app_type: 4,
  //   app_version: '9.9.7-21357',
  //   os_version: 'Windows 10 Pro',
  //   use_xlog: true,
  //   qua: 'V1_WIN_NQ_9.9.7_21357_GW_B',
  //   global_path_config: {
  //     desktopGlobalPath: 'D:\\Users\\jiyec\\Documents\\Tencent Files\\nt_qq\\global'
  //   },
  //   thumb_config: { maxSide: 324, minSide: 48, longLimit: 6, density: 2 }
  // }
  // const globalAdapter = new wrapper.NodeIGlobalAdapter({})
  // const wrapperEngine = new wrapper.NodeIQQNTWrapperEngine()
  // const initResult = wrapperEngine.initWithDeskTopConfig(cfg, globalAdapter)
  // log.info('initResult:', initResult)
  // const login = new wrapper.NodeIKernelLoginService()
  // login.initConfig({
  //   machineId: '',
  //   appid: '537207183',
  //   platVer: '10.0.22635',
  //   commonPath: 'D:\\Users\\jiyec\\Documents\\Tencent Files\\nt_qq\\global',
  //   clientVer: '9.9.7-21357',
  //   hostName: 'jiyec'
  // })
  // const loginList = await login.getLoginList()
  // log.info('login list:', loginList)
  // const hotUpdateSign = await login.getLoginMiscData('hotUpdateSign')
  // log.info('hotUpdateSign:', hotUpdateSign)
  // const setLoginMiscData = await login.setLoginMiscData('hotUpdateSign', '')
  // log.info('setLoginMiscData:', setLoginMiscData)
  // const connect = login.connect()
  // log.info('connect:', connect)
  // const appVersion = await login.getLoginMiscData('appVersion')
  // log.info('appVersion:', appVersion)
  // const msfStatus = await login.getMsfStatus()
  // log.info('MsfStatus:', msfStatus)
  // const isLogout = await login.getLoginMiscData('isLogout')
  // log.info('isLogout:', isLogout)
  // // 初始化完毕

  // await sleep(2000)
  // // 快速登录
  // const loginResult = await login.quickLoginWithUin('335438501')
  // log.info('loginResult:', loginResult)
  process.exit(1)
}