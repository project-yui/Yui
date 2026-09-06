import { CustomError } from "../../common/error/custom-error"

export type NTDesktopPlatform = 'win32' | 'linux'

export const getNTDesktopPlatform = (): NTDesktopPlatform => {
  if (process.platform === 'win32' || process.platform === 'linux') {
    return process.platform
  }
  throw new CustomError(500, `Current platform ${process.platform} is not supported !`)
}

export const getNTDesktopPlatformType = () => {
  return getNTDesktopPlatform() === 'win32' ? 3 : 5
}

export const getNTDesktopDeviceName = () => {
  return getNTDesktopPlatform() === 'win32' ? 'Windows_NT' : 'Linux'
}

/**
 * AppId,从major.node中获取,会随版本更新.
 * TODO: 目前先写死,后续再考虑从major.node中获取
 * @returns 
 */
export const getNTAppId = () => {
  return getNTDesktopPlatform() === 'win32'
    ? '537249321'
    : '537379447'
}
