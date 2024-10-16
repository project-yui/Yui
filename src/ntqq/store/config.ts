import { homedir, userInfo } from "os";
import { getNTPackageInfo } from "../common/utils";
import { StoreAppInfo } from "../types/store/config";
import { randomUUID } from "crypto";
import { execSync } from "child_process";
import { useLogger } from "../../common/log";
import { useNTWrapper } from "../core/service/nt-wrapper";
import { CustomError } from "../../server/error/custom-error";

const platform: 'win32' | 'linux' = process.platform as 'win32' | 'linux'
const log = useLogger('NTConfig')

const getOsVersion = (): string => {
    let ret = ''
    switch(platform) {
      case 'win32':
        {
          // const cmd = 'wmic os get Caption'
          // ret = execSync(cmd).toString()
          return 'Windows 10 Pro'
        }
        break;
      case 'linux':
        {
            try
            {
                const cmd = 'uname -v'
                ret = execSync(cmd).toString()
            }catch(err) {
                ret = '#1 SMP Thu Mar 7 03:22:57 UTC 2024'
            }
        }
        break;
      default:
        throw new CustomError(500, `Current platform ${platform} is not supported !`)
        break
    }
    return ret
  }
  
const getDeviceInfo = (): NTNativeWrapper.DeviceInfo => {
    const guid = randomUUID()
    const pkgInfo = getNTPackageInfo()
    const osVersion = getOsVersion()
    return {
      guid,
      buildVer: pkgInfo.version,
      localId: 2052,
      devName: userInfo().username,
      devType: platform == 'win32' ? 'Windows_NT' : 'Linux',
      vendorName: '',
      osVer: osVersion,
      vendorOsName: platform,
      setMute: false,
      vendorType: 0
    }
  }
const getAppInfo = (): StoreAppInfo => {
    const pkgInfo = getNTPackageInfo()
    const devInfo = getDeviceInfo()
    log.info('deviceInfo:', devInfo)
    return {
        app_id: getAppId(),
        /**
         * 3 - windows
         * 5 - linux
         */
        platform_type: platform === 'win32' ? 3 : 5,
        /**
         * 4 - desktop ?
         */
        app_type: 4,
        app_version: pkgInfo.version,
        os_version: devInfo.osVer,
        /**
         * 
         * V1_AND_SQ_${getQQVersion(MobileQQ.getContext())}_${getQQVersionCode()}_YYB_D
         */
        qua: `V1_${platform === 'win32' ? 'WIN' : 'LNX' }_NQ_${pkgInfo.version.replace('-', '_')}_GW_B`,
        clientVer: pkgInfo.version,
    }
}
const getAppId = () => {
    return platform === 'win32' ? '537249321' : '537207207'
 }
const getNTConfigStoreFolder = (): string => {
  const wrapper = useNTWrapper()
  switch(platform) {
    case 'win32':
      return wrapper.NodeQQNTWrapperUtil.getNTUserDataInfoConfig() + ''
    case 'linux':
      return `${homedir()}/.config/QQ`
      break
    default:
      return './nt_qq'
      break
  }
}
export const useNTConfig = () => ({
    getNTConfigStoreFolder,
    getAppId,
    getDeviceInfo,
    getAppInfo,
})