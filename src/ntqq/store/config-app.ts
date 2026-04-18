import { useLogger } from "../../common/log"
import { getNTPackageInfo } from "../common/utils"
import { StoreAppInfo } from "../types/store/config"
import { getNTOsVersion } from "./config-device"
import {
  getNTAppId,
  getNTDesktopPlatform,
  getNTDesktopPlatformType,
} from "./config-platform"

const log = useLogger('NTConfig')

export const getNTAppInfo = (): StoreAppInfo => {
  const pkgInfo = getNTPackageInfo()
  const platform = getNTDesktopPlatform()
  const osVersion = getNTOsVersion()
  log.info('osVersion:', osVersion)
  return {
    app_id: getNTAppId(),
    platform_type: getNTDesktopPlatformType(),
    app_type: 4,
    app_version: pkgInfo.version,
    os_version: osVersion,
    qua: `V1_${platform === 'win32' ? 'WIN' : 'LNX'}_NQ_${pkgInfo.version.replace('-', '_')}_GW_B`,
    clientVer: pkgInfo.version,
  }
}
