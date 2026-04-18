import { useLogger } from "../../common/log"
import { withReadyNTLoginService } from "./runtime"

const log = useLogger('NT Account')

const getNTQuickLoginEntry = async (uin: `${number}`) => {
  return withReadyNTLoginService(async (loginService) => {
    const loginList = await loginService.getLoginList()
    log.info('login list:', loginList)
    return loginList.LocalLoginInfoList.find((entry) => entry.uin === uin && entry.isQuickLogin)
  })
}

export const NTGetQuickLoginList = async () => {
  return withReadyNTLoginService(async (loginService) => {
    const loginList = await loginService.getLoginList()
    return loginList.LocalLoginInfoList
  })
}

export const NTQuickLoginByUin = async (uin: `${number}`) => {
  const quickLoginEntry = await getNTQuickLoginEntry(uin)
  if (!quickLoginEntry) {
    log.warn('quick login entry not found for uin:', uin)
  }
  return withReadyNTLoginService((loginService) => {
    return loginService.quickLoginWithUin(uin)
  })
}
