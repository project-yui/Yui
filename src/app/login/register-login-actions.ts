import { BotActionParams } from "../../onebot/contracts/actions"
import { defineActionHandlers, registerActionHandlers } from "../register-action-handlers"
import {
  checkDeviceVerifyQRCodeStatus,
  getAccountList,
  getBotInfo,
  getClipboardMsg,
  getDeviceVerifyQRCode,
  getLoginStatus,
  getQuickLoginList,
  loginByAccount,
  loginByQrCode,
  quickLoginByUin,
} from "./login-service"

interface QuickLoginReq extends BotActionParams {
  uin: `${number}`
}

const quickLoginByUinAction = async (payload: QuickLoginReq) => {
  return await quickLoginByUin(payload.uin)
}

const getAccountListAction = async () => {
  return getAccountList()
}

export const loginActionHandlers = defineActionHandlers({
  login_by_account: loginByAccount,
  check_device_verify_qrcode_status: checkDeviceVerifyQRCodeStatus,
  get_device_verify_qrcode: getDeviceVerifyQRCode,
  login_by_qrcode: loginByQrCode,
  get_self_info: getBotInfo,
  is_self_login: getLoginStatus,
  get_quick_login_list: getQuickLoginList,
  quick_login_by_uin: quickLoginByUinAction,
  get_clipboard_msg: getClipboardMsg,
  get_account_list: getAccountListAction,
})

export const registerLoginActions = () => {
  registerActionHandlers(loginActionHandlers)
}
