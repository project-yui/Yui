import { NTLogin } from "../../ntqq/login/interfaces"
import { getCurrentNTSelfOrNull } from "../../ntqq/core/runtime-store"
import { EventDataType } from "../../onebot/contracts/event"

const requireCurrentSelf = (uid: `u_${string}` = 'u_0') => {
  return getCurrentNTSelfOrNull(uid)
}

export const buildQRCodeFetchEvent = (payload: NTLogin.GetQRCodeResponse): EventDataType<NTLogin.GetQRCodeResponse> | null => {
  const self = requireCurrentSelf()
  if (!self) return null
  return {
    self,
    time: Date.now(),
    type: "notice",
    detailType: "login.qrcode.fetch",
    subType: "",
    data: payload
  }
}

export const buildQRCodeFailedEvent = (p1: number, p2: number): EventDataType<{ p1: number, p2: number }> | null => {
  const self = requireCurrentSelf()
  if (!self) return null
  let detailType = 'login.qrcode.timeout'
  if (p2 === 5) {
    detailType = 'login.qrcode.refused'
  }
  return {
    self,
    time: Date.now(),
    type: "notice",
    detailType,
    subType: "",
    data: { p1, p2 }
  }
}

export const buildQRCodeScannedEvent = (p1: number, avatarUrl: string): EventDataType<{ p1: number, avatarUrl: string }> | null => {
  const self = requireCurrentSelf()
  if (!self) return null
  return {
    self,
    time: Date.now(),
    type: "notice",
    detailType: "login.qrcode.scanned",
    subType: "",
    data: { p1, avatarUrl }
  }
}

export const buildQRCodeSuccessEvent = (userInfo: { uin: string, uid: `u_${string}`, account: string, nickName: string, faceUrl: string }) => {
  return {
    self: {
      id: parseInt(userInfo.uin),
      uid: userInfo.uid
    },
    time: Date.now(),
    type: "notice" as const,
    detailType: "login.qrcode.success",
    subType: "",
    data: {
      account: userInfo.account,
      uin: userInfo.uin,
      uid: userInfo.uid,
      nick_name: userInfo.nickName,
      face_url: userInfo.faceUrl,
    }
  }
}

export const buildAlreadyLoginEvent = (uin: number) => {
  return {
    self: {
      id: 0,
      uid: 'u_' as const
    },
    time: Date.now(),
    type: "notice" as const,
    detailType: "login.qrcode.alreadyLogin",
    subType: "",
    data: { uin }
  }
}

export const buildDeviceConfirmStatusEvent = (errCode: number): EventDataType<number> | null => {
  const self = requireCurrentSelf('u_')
  if (!self) return null
  let detailType = "login.account.deviceConfirm"
  if (errCode === 5) {
    detailType = 'login.account.deviceConfirm.cancel'
  }
  else if (errCode === 9) {
    detailType = 'login.account.deviceConfirm.rejected'
  }
  else if (errCode === 10) {
    detailType = 'login.account.deviceConfirm.timeout'
  } else {
    detailType = 'login.account.deviceConfirm.unknown'
  }
  return {
    self,
    time: Date.now(),
    type: "notice",
    detailType,
    subType: "",
    data: errCode
  }
}

export const buildDeviceConfirmSuccessEvent = (state: number): EventDataType<number> | null => {
  const self = requireCurrentSelf('u_')
  if (!self) return null
  return {
    self,
    time: Date.now(),
    type: "notice",
    detailType: "login.account.deviceConfirm.success",
    subType: "",
    data: state
  }
}
