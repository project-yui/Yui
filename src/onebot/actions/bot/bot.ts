import { useLogger } from "../../../common/log"
import { useNTUserStore } from "../../../ntqq/store/user"
import { CustomError } from "../../../server/error/custom-error"
import { useStore } from "../../../store/store"
import { loginByAccount, loginByQrCode } from "../../../transfer/login/login"
import { getUserInfoByUid } from "../../common/user"
import { UserInfoReq, UserInfoResp } from "../friend/interfaces"

const log = useLogger('Bot')
const getBotInfo = async (p: {}): Promise<UserInfoResp> => {
  const { userInfo } = useNTUserStore()
  const resp: UserInfoResp = {
    user_uid: "u_",
    user_uin: 0,
    nick: "",
    user_displayname: "",
    user_remark: "",
    avatar_url: ''
  }
  if (!userInfo.uid) {
    throw new CustomError(1, 'user info error!')
  }
  const ret = await getUserInfoByUid(userInfo.uid)
  log.info('getUserDetailInfo:', ret)
  resp.user_uid = ret.uid
  resp.user_uin = parseInt(ret.uin)
  resp.nick = ret.nick
  resp.avatar_url = `http://q1.qlogo.cn/g?b=qq&nk=${resp.user_uin}&s=640`
  return resp
}
export const initBot = () => {
  const { registerActionHandle } = useStore()
  // 登录
  registerActionHandle('login_by_account', loginByAccount)
  registerActionHandle('login_by_qrcode', loginByQrCode)
  registerActionHandle('get_self_info', getBotInfo)
}