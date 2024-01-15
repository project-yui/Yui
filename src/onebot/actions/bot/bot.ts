import { useStore } from "../../../store/store"
import { BotActionResponse, BotActionParams } from "../interfaces"
import { getUserInfoByUid } from "../../common/user"
import { loginByAccount, loginByQrCode } from "../../../transfer/login/login"

const { registerActionHandle, registerEventListener, removeEventListener } = useStore()

export const initBot = () => {
  // 登录
  registerActionHandle('login_by_account', loginByAccount)
  registerActionHandle('login_by_qrcode', loginByQrCode)
}