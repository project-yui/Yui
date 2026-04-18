import { useLogger } from "../../common/log"
import { getUserInfoByUid } from "../../ntqq/query/detail-info"
import { UserInfoReq, UserInfoResp } from "../../onebot/contracts/friend"

const log = useLogger('App/FriendQueryService')

export const getUserInfo = async (payload: UserInfoReq): Promise<UserInfoResp> => {
  const response: UserInfoResp = {
    uid: "u_",
    uin: 0,
    nick: "",
    userDisplayname: "",
    userRemark: "",
    avatarUrl: '',
  }

  const detail = await getUserInfoByUid(payload.userUid)
  log.info('getUserDetailInfo:', detail)
  response.uid = detail.uid
  response.uin = parseInt(detail.uin)
  response.nick = detail.simpleInfo.coreInfo.nick
  response.avatarUrl = `http://q1.qlogo.cn/g?b=qq&nk=${response.uin}&s=640`
  return response
}
