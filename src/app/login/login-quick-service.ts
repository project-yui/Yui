import { NTGetQuickLoginList } from "../../ntqq/login"
import { QuickLoginItem } from "../../onebot/contracts/bot"

export const getQuickLoginList = async (): Promise<QuickLoginItem[]> => {
  const list = await NTGetQuickLoginList()
  return list.map<QuickLoginItem>((entry) => ({
    uin: entry.uin,
    uid: entry.uid,
    nick_name: entry.nickName,
    face_path: entry.facePath,
    face_url: entry.faceUrl,
    login_type: entry.loginType,
    is_quick_login: entry.isQuickLogin,
    is_auto_login: entry.isAutoLogin,
  }))
}
