import { useLogger } from "../../common/log"
import { getCurrentNTUin, getCurrentNTUserInfo } from "../../ntqq/core/runtime-store"
import { getUserInfoByUid } from "../../ntqq/query/detail-info"
import { UserInfoResp } from "../../onebot/contracts/friend"
import { CustomError } from "../../common/error/custom-error"

const log = useLogger('App/LoginSelfService')

export const getBotInfo = async (): Promise<UserInfoResp> => {
  const userInfo = getCurrentNTUserInfo()
  const response: UserInfoResp = {
    uid: "u_",
    uin: 0,
    nick: "",
    userDisplayname: "",
    userRemark: "",
    avatarUrl: '',
  }

  if (!userInfo || !userInfo.uid) {
    log.error('user info:', userInfo)
    throw new CustomError(1, 'user info error!')
  }

  const detail = await getUserInfoByUid(userInfo.uid)
  log.info('getUserDetailInfo:', detail)
  response.uid = detail.uid
  response.uin = parseInt(detail.uin)
  response.nick = detail.simpleInfo.coreInfo.nick
  response.avatarUrl = `http://q1.qlogo.cn/g?b=qq&nk=${response.uin}&s=640`
  return response
}

export const getAccountList = () => {
  const uin = getCurrentNTUin()
  return uin ? [String(uin)] : []
}
