import { Oidb0xc9e_8 } from "../core/oidb/0xc9e_8"
import { CheckScanStatusResult } from "../types/core/oidb/0xc9e_8"

const resolveDeviceVerifyTokens = (url: string) => {
  const parsed = new URL(url)
  return {
    uinToken: parsed.searchParams.get('uin-token') || '',
    devToken: parsed.searchParams.get('sig') || '',
  }
}

export const getDeviceVerifyQRCodeFromJumpUrl = async (
  uin: number,
  url: string,
): Promise<string> => {
  const deviceQRCode = new Oidb0xc9e_8(uin)
  const { uinToken, devToken } = resolveDeviceVerifyTokens(url)
  return deviceQRCode.getQRCode(uinToken, devToken)
}

export const NTGetDeviceVerifyQRCode = async (uin: number, url: string): Promise<string> => {
  return getDeviceVerifyQRCodeFromJumpUrl(uin, url)
}

export const NTCheckDeviceVerifyQRCodeStatus = async (
  url: string,
): Promise<CheckScanStatusResult> => {
  const deviceQRCode = new Oidb0xc9e_8(0)
  return deviceQRCode.checkScanStatus(url)
}
