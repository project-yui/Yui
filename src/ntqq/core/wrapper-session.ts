import { NodeIDependsAdapter, NodeIDispatcherAdapter, NodeIKernelSessionListener } from "ntwrapper"
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

const log = useLogger('AfterLogin')

export const initWrapperSession = async (uin: `${number}`, uid: `u_${string}`) => {
  log.info('start to init wrapper session')
  const { getWrapperSession } = useNTCore()
  const { getDeviceInfo } = useNTConfig()
  const { getAppId, getNTConfigStoreFolder } = useNTConfig()
  const session = getWrapperSession()
  const msfService = session.getMSFService()
  log.info('getMsfStatus:', msfService.getMsfStatus())
  const { registerEventListener } = useStore()
  
  // 登陆后初始化
  // wrapperUtil.emptyWorkingSet(61444);
  const p1 = useListenerProxy('DependsAdapter')
  const depends = new NodeIDependsAdapter(p1)

  const p2 = useListenerProxy('DispatcherAdapter')
  const dispatcherAdapter = new NodeIDispatcherAdapter(p2)

  const p = useListenerProxy('KernelSessionListener')
  registerEventListener('KernelSessionListener/onOpentelemetryInit', 'always', (result) => {
    if (result.is_init) {
      log.info('NTWrapperSession init successful!')
      initUnitedConfig()
      initMsgService()
      initProfileService()
      initGroupService()
      initBuddyService()
    }
    else {
      log.error('NTWrapperSession init failed!')
    }
  })
  const sessionListener = new NodeIKernelSessionListener(p)
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
  }, depends, dispatcherAdapter, sessionListener)
  await sleep(1000)
  session.startNT()
}