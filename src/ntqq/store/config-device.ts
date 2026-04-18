import { execSync } from "child_process"
import { randomUUID } from "crypto"
import { hostname } from "os"
import { getNTPackageInfo } from "../common/utils"
import {
  getNTDesktopDeviceName,
  getNTDesktopPlatform,
} from "./config-platform"

export const getNTOsVersion = (): string => {
  const platform = getNTDesktopPlatform()
  if (platform === 'win32') {
    return 'Windows 10 Pro'
  }

  try {
    return execSync('uname -v').toString()
  } catch {
    return '#1 SMP Thu Mar 7 03:22:57 UTC 2024'
  }
}

export const getNTDeviceInfo = (): NTNativeWrapper.DeviceInfo => {
  const pkgInfo = getNTPackageInfo()
  const platform = getNTDesktopPlatform()
  return {
    guid: randomUUID(),
    buildVer: pkgInfo.version,
    localId: 2052,
    devName: hostname(),
    devType: getNTDesktopDeviceName(),
    vendorName: '',
    osVer: getNTOsVersion(),
    vendorOsName: platform,
    setMute: false,
    vendorType: 0,
  }
}
