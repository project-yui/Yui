import { useStore } from "../../../store/store"
import { loginByAccount, loginByQrCode } from "../../../transfer/login/login"

const { registerActionHandle } = useStore()

export const initBot = () => {
  // 登录
  registerActionHandle('login_by_account', loginByAccount)
  registerActionHandle('login_by_qrcode', loginByQrCode)
}