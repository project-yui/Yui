import { useLogger } from "../../../common/log"
import { NTGetQuickLoginList, NTQuickLoginByUin } from "../../../ntqq/login/account"
import { useNTUserStore } from "../../../ntqq/store/user"
import { CustomError } from "../../../server/error/custom-error"
import { useStore } from "../../../store/store"
import { loginByAccount, loginByQrCode } from "../../../transfer/login/login"
import { getUserInfoByUid } from "../../common/user"
import { UserInfoReq, UserInfoResp } from "../friend/interfaces"
import { BotActionParams } from "../interfaces"
import { getClipboardMsg } from "./clipboard"
import { QuickLoginItem } from "./types"

const log = useLogger('Bot')
const getBotInfo = async (p: {}): Promise<UserInfoResp> => {
  const { userInfo } = useNTUserStore()
  const resp: UserInfoResp = {
    userUid: "u_",
    userUin: 0,
    nick: "",
    userDisplayname: "",
    userRemark: "",
    avatarUrl: ''
  }
  if (!userInfo.uid) {
    throw new CustomError(1, 'user info error!')
  }
  const ret = await getUserInfoByUid(userInfo.uid)
  log.info('getUserDetailInfo:', ret)
  resp.userUid = ret.uid
  resp.userUin = parseInt(ret.uin)
  resp.nick = ret.simpleInfo.coreInfo.nick
  resp.avatarUrl = `http://q1.qlogo.cn/g?b=qq&nk=${resp.userUin}&s=640`
  return resp
}
const getQuickLoginList = async (p: {}) => {
  const list = await NTGetQuickLoginList()
  return list.map<QuickLoginItem>(e => ({
    uin: e.uin,
    uid: e.uid,
    nick_name: e.nickName,
    face_path: e.facePath,
    face_url: e.faceUrl,
    login_type: e.loginType,
    is_quick_login: e.isQuickLogin,
    is_auto_login: e.isAutoLogin,
  }))
}

interface QuickLoginReq extends BotActionParams {
  uin: `${number}`
}
const QuickLoginByUin = async (p: QuickLoginReq) => {
  const result = await NTQuickLoginByUin(p.uin)
  if (result.result !== '0')
  {
    throw new CustomError(parseInt(result.result), result.loginErrorInfo.errMsg)
  }
  return {}
}
export const initBot = () => {
  const { registerActionHandle } = useStore()
  // 登录
  registerActionHandle('login_by_account', loginByAccount)
  registerActionHandle('login_by_qrcode', loginByQrCode)
  registerActionHandle('get_self_info', getBotInfo)
  registerActionHandle('get_quick_login_list', getQuickLoginList)
  registerActionHandle('quick_login_by_uin', QuickLoginByUin)
  registerActionHandle('get_clipboard_msg', getClipboardMsg)
}