import { createNTEventWaiter } from "../query/wait"
import { NTLogin } from "./interfaces"
import { createFailedAccountLoginResponse } from "./account-response"

export const createDuplicateLoginWaiter = () => {
  return createNTEventWaiter<[unknown], NTLogin.AccountLoginResponse>({
    event: 'KernelLoginListener/onUserLoggedIn',
    match: () => true,
    select: () => createFailedAccountLoginResponse('重复登录'),
  })
}

export const createQuickLoginFailedWaiter = () => {
  return createNTEventWaiter<
    [NTLogin.PayloadQRCodeSessionQuickLoginFailed],
    NTLogin.AccountLoginResponse
  >({
    event: 'KernelLoginListener/onQRCodeSessionQuickLoginFailed',
    match: () => true,
    select: () => createFailedAccountLoginResponse('需要手Q确认，但是手Q没有登录'),
  })
}
