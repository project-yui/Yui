import { useLogger } from "../../common/log"
import { KickedOfflinePayload } from "../../ntqq/types/listener/msg"
import { buildKickedOfflineEvent } from "./account-event-builders"
import { defineOneBotEventDomainRegistrar } from "./register-event-domain"
import { registerBuiltOneBotEvent } from "./register-built-event"

const log = useLogger('Event/Account')

export const accountEventRegistrar = defineOneBotEventDomainRegistrar('account', () => {
  registerBuiltOneBotEvent({
    event: 'KernelMsgListener/onKickedOffLine',
    build: (payload: KickedOfflinePayload) => buildKickedOfflineEvent(payload),
    onEmpty: () => {
      log.error('onKickedOffLine: user not found')
    },
    onEmit: () => {
      // 被踢下线后当前实例已无法可靠继续提供服务，保留延迟退出以便上层拉起或人工接管。
      setTimeout(process.exit, 5000, 1)
    },
  })
})

export const registerAccountEvents = () => {
  accountEventRegistrar.register()
}
