import { useLogger } from "../../common/log"
import { NTLogin } from "../../ntqq/login/interfaces"
import {
  buildAlreadyLoginEvent,
  buildDeviceConfirmStatusEvent,
  buildDeviceConfirmSuccessEvent,
  buildQRCodeFailedEvent,
  buildQRCodeFetchEvent,
  buildQRCodeScannedEvent,
  buildQRCodeSuccessEvent,
} from "./login-event-builders"
import { defineOneBotEventDomainRegistrar } from "./register-event-domain"
import { registerBuiltOneBotEvent, registerSimpleOneBotEvent } from "./register-built-event"

const log = useLogger('Event/Login')

const registerQRCodeFetchEvent = () => {
  registerBuiltOneBotEvent({
    event: 'KernelLoginListener/onQRCodeGetPicture',
    build: (payload: NTLogin.GetQRCodeResponse) => buildQRCodeFetchEvent(payload),
    onEmpty: () => {
      log.error('qrCodeFetch: user not found')
    },
  })
}

const registerQRCodeFailedEvent = () => {
  registerBuiltOneBotEvent({
    event: 'KernelLoginListener/onQRCodeSessionFailed',
    build: (p1: number, p2: number) => buildQRCodeFailedEvent(p1, p2),
    onEmpty: () => {
      log.error('qrCodeFetch: user not found')
    },
  })
}

const registerQRCodeScannedEvent = () => {
  registerBuiltOneBotEvent({
    event: 'KernelLoginListener/onQRCodeSessionUserScaned',
    build: (p1: number, avatarUrl: string) => buildQRCodeScannedEvent(p1, avatarUrl),
    onEmpty: () => {
      log.error('qrCodeFetch: user not found')
    },
  })
}

const registerQRCodeSuccessEvent = () => {
  registerSimpleOneBotEvent({
    event: 'KernelLoginListener/onQRCodeLoginSucceed',
    build: (userInfo) => buildQRCodeSuccessEvent(userInfo),
  })
}

const registerAlreadyLoginEvent = () => {
  registerSimpleOneBotEvent({
    event: 'KernelLoginListener/onUserLoggedIn',
    build: (uin: number) => buildAlreadyLoginEvent(uin),
  })
}

const registerDeviceConfirmStatusEvent = () => {
  registerBuiltOneBotEvent({
    event: 'KernelLoginListener/OnConfirmUnusualDeviceFailed',
    build: (errCode: number, _errMsg: string, _errTips: NTLogin.PayloadConfirmUnusualDeviceFailed) => {
      log.info('deviceConfirmStatus payload:', errCode)
      return buildDeviceConfirmStatusEvent(errCode)
    },
    onEmpty: () => {
      log.error('qrCodeFetch: user not found')
    },
  })
}

const registerLoginStatusChangeEvent = () => {
  registerBuiltOneBotEvent({
    event: 'KernelLoginListener/onLoginState',
    build: (state: number) => {
      log.info('onLoginState state:', state)
      if (state !== 0) {
        return undefined
      }
      const event = buildDeviceConfirmSuccessEvent(state)
      if (!event) {
        log.error('qrCodeFetch: user not found')
      }
      return event
    },
  })
}

export const loginEventRegistrar = defineOneBotEventDomainRegistrar('login', () => {
  log.info('registerLoginEvents')
  registerQRCodeFetchEvent()
  registerQRCodeFailedEvent()
  registerQRCodeScannedEvent()
  registerQRCodeSuccessEvent()
  registerAlreadyLoginEvent()
  registerDeviceConfirmStatusEvent()
  registerLoginStatusChangeEvent()
})

export const registerLoginEvents = () => {
  loginEventRegistrar.register()
}
