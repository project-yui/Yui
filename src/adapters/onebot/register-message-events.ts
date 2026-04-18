import { useLogger } from "../../common/log"
import { NTReceiveMessageType } from "../../ntqq/message/interfaces"
import {
  buildMessageEvent,
  buildNudgeEvent,
  buildPostSendEvent,
  buildRecallEvent,
  hasRecallMessageEvent,
  shouldSkipMessageEvent,
} from "./message-event-builders"
import { defineOneBotEventDomainRegistrar } from "./register-event-domain"
import { registerBuiltOneBotEvent, registerIteratedBuiltOneBotEvent } from "./register-built-event"

const log = useLogger('Event/Message')

const shouldIgnoreMessageEvent = (msg: NTReceiveMessageType.NTMessageItemType) => {
  if (shouldSkipMessageEvent(msg)) {
    return true
  }
  return false
}

const logSkippedMessageEvent = (msg: NTReceiveMessageType.NTMessageItemType) => {
  if (Date.now() / 1000 - parseInt(msg.msgTime) > 60) {
    log.info('一分钟前的消息不处理')
  }
}

const buildReceiveMessageEvent = async (msg: NTReceiveMessageType.NTMessageItemType) => {
  const nudgeEvent = await buildNudgeEvent(msg)
  if (nudgeEvent) {
    return nudgeEvent
  }

  return buildMessageEvent(msg)
}

const registerRecvMessageEvent = () => {
  registerIteratedBuiltOneBotEvent({
    event: 'KernelMsgListener/onRecvMsg',
    iterate: (payload) => payload,
    shouldSkip: shouldIgnoreMessageEvent,
    onSkip: logSkippedMessageEvent,
    onBeforeBuild: (msg) => {
      log.info('receive:', JSON.stringify(msg))
    },
    build: buildReceiveMessageEvent,
  })
}

const registerPostSendMessageEvent = () => {
  registerBuiltOneBotEvent({
    event: 'KernelMsgListener/onAddSendMsg',
    build: async (payload: NTReceiveMessageType.NTMessageItemType) => {
      if (shouldIgnoreMessageEvent(payload)) {
        return undefined
      }
      log.info('receive:', JSON.stringify(payload))
      return buildPostSendEvent(payload)
    },
  })
}

const registerUpdateMessageEvent = () => {
  let oldPayload = ''
  registerIteratedBuiltOneBotEvent({
    event: 'KernelMsgListener/onMsgInfoListUpdate',
    iterate: (payload) => {
      const rawPayload = JSON.stringify(payload)
      if (oldPayload === rawPayload) {
        log.warn('onMsgInfoListUpdate payload no change')
        return []
      }

      oldPayload = rawPayload
      log.info('onMsgInfoListUpdate count:', payload.length)
      return payload.filter(hasRecallMessageEvent)
    },
    onBeforeBuild: (msg) => {
      log.info(`get user info for user: ${msg.senderUid}`)
    },
    build: buildRecallEvent,
  })
}

export const messageEventRegistrar = defineOneBotEventDomainRegistrar('message', () => {
  registerRecvMessageEvent()
  registerPostSendMessageEvent()
  registerUpdateMessageEvent()
})

export const registerMessageEvents = () => {
  messageEventRegistrar.register()
}
