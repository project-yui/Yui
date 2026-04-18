import { homedir } from "os"
import { getNTWrapper } from "../core/service/nt-wrapper"
import { getNTDesktopPlatform } from "./config-platform"

export const getNTConfigStoreFolder = (): string => {
  const platform = getNTDesktopPlatform()
  if (platform === 'win32') {
    const wrapper = getNTWrapper()
    return wrapper.NodeQQNTWrapperUtil.getNTUserDataInfoConfig() + ''
  }
  return `${homedir()}/.config/QQ`
}
