import { randomUUID } from "crypto"
import { NTPackageInfo } from "./types/utils"
import { app } from "electron"
import { existsSync, readFileSync } from "fs"
import { type, userInfo } from "os"
import { execSync } from "child_process"

export const getNTPackageInfo = (): NTPackageInfo => {
  const appPath = app.getPath('appData')
  if (!existsSync(`${appPath}/package.json`)) {
    throw new Error('Can not find package.json!')
  }
  const pkg = JSON.parse(readFileSync(`${appPath}/package.json`).toString())
  return {
    version: pkg.version
  }
}
export const getOsVersion = (): string => {
  let ret = ''
  switch(process.platform) {
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
      throw new Error(`Current platform ${process.platform} is not supported !`)
      break
  }
  return ret
}
export const getDeviceInfo = (): NTNativeWrapper.DeviceInfo => {
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
    vendorOsName: process.platform,
    setMute: false,
    vendorType: 0
  }
}