import { useLogger } from "../../common/log"
import { useNTCore } from "./core"
import { sleep } from "../../common/utils"
import { release } from "os"
import { getNTPackageInfo } from "../common/utils"
import { initMsgService } from "./service/msg"
import { initUnitedConfig } from "./service/united-config"
import { initProfileService } from "./service/profile"
import { useListenerProxy } from "./dispatcher"
import { useStore } from "../../store/store"
import { initGroupService } from "./service/group"
import { initBuddyService } from "./service/buddy"
import { useNTConfig } from "../store/config"
import { initStorageCleanService } from "./service/storage-clean"
import { useNTWrapper } from "./service/nt-wrapper"
import { useNTUserStore } from "../store/user"
import { useAsyncStore } from "../../store/async-store"
import { CustomError } from "../../server/error/custom-error"

const log = useLogger('AfterLogin')

export const initWrapperSession = async (uin: `${number}`, uid: `u_${string}`) => {
  const wrapper = useNTWrapper()
  log.info('start to init wrapper session', uin, uid)
  const { getWrapperSession } = useNTCore()
  const { getDeviceInfo } = useNTConfig()
  const { getAppId, getNTConfigStoreFolder } = useNTConfig()
  const session = getWrapperSession()
  const msfService = session.getMSFService()
  log.info('getMsfStatus:', msfService.getMsfStatus())
  const { registerEventListener } = useStore()
  
  // 登陆后初始化
  wrapper.NodeQQNTWrapperUtil.emptyWorkingSet(61444);
  const p1 = useListenerProxy('DependsAdapter')

  const p2 = useListenerProxy('DispatcherAdapter')

  const p = useListenerProxy('KernelSessionListener')
  registerEventListener('KernelSessionListener/onOpentelemetryInit', 'always', async (result) => {
    if (result.is_init) {
      log.info('NTWrapperSession init successful!')
      log.info('initUnitedConfig start')
      initUnitedConfig()
      log.info('initMsgService start')
      await initMsgService()
      log.info('initProfileService start')
      initProfileService()
      log.info('initGroupService start')
      initGroupService()
      log.info('initBuddyService start')
      initBuddyService()
      log.info('initStorageCleanService start')
      initStorageCleanService()
      // 切换模块附属
      const userStore = useNTUserStore()
      const account = userStore.getAllAccountData()
      const asyncStore = useAsyncStore()
      const s = asyncStore.getStore()
      const uin = s?.get('uin') as number
      const t = account[uin]
      log.info('account data:', t)
      if (!t.info.uin) {
        throw new CustomError(20302, 'uin error')
      }
      log.info(`变更模块${uin}所属为${t.info.uin}`)
      s?.set('uin', t.info.uin)
      delete account[uin]
      account[t.info.uin] = t
      const userInfo = useNTUserStore()
      log.info('current user info:', userInfo.getUserInfo())
    }
    else {
      log.error('NTWrapperSession init failed!')
    }
  })
  const configFolder = getNTConfigStoreFolder()
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
    appid: getAppId(),
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
  }, p1, p2, p)
  await sleep(1000)
  try{
    session.startNT(1)
  }
  catch(err) {
    session.startNT()
  }
}