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

export const getNTAppId = () => {
  return getNTDesktopPlatform() === 'win32'
    ? '537249321'
    : '537328659'
}
