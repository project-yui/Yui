import { homedir, type, userInfo } from "os";
import { getNTPackageInfo } from "../common/utils";
import { StoreAppInfo } from "../types/store/config";
import { NodeQQNTWrapperUtil } from "ntwrapper";
import { randomUUID } from "crypto";
import { execSync } from "child_process";

const platform: 'win32' | 'linux' = process.platform as 'win32' | 'linux'

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
          const cmd = 'uname -v'
          ret = execSync(cmd).toString()
        }
        break;
      default:
        throw new Error(`Current platform ${platform} is not supported !`)
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
      devType: type(),
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
    return platform === 'win32' ? '537207183' : '537207207'
 }
 const getNTConfigStoreFolder = (): string => {
    const wrapperUtil = new NodeQQNTWrapperUtil()
   switch(platform) {
     case 'win32':
       return wrapperUtil.getNTUserDataInfoConfig() + '/nt_qq_linux'
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