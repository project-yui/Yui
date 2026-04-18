import { registerEventListener } from "../../store/event-registry"
import { EventDataType } from "../../onebot/contracts/event"
import { NTReceiveMessageType } from "../../ntqq/message/interfaces"
import { sendOneBotEvent } from "./send-event"

const emitBuiltOneBotEvent = <TPayload>(
  event: EventDataType<TPayload> | null | undefined,
  onEmpty?: () => void,
  onEmit?: (event: EventDataType<TPayload>) => void,
) => {
  if (!event) {
    onEmpty?.()
    return
  }

  sendOneBotEvent(event)
  onEmit?.(event)
}

export const registerBuiltOneBotEvent = <TArgs extends any[], TPayload>({
  event,
  build,
  onEmpty,
  onEmit,
}: {
  event: `${string}/${string}`
  build: (...args: TArgs) => EventDataType<TPayload> | null | undefined | Promise<EventDataType<TPayload> | null | undefined>
  onEmpty?: () => void
  onEmit?: (event: EventDataType<TPayload>) => void
}) => {
  registerEventListener(event, 'always', async (...args: TArgs) => {
    emitBuiltOneBotEvent(await build(...args), onEmpty, onEmit)
  })
}

export const registerSimpleOneBotEvent = <TArgs extends any[], TPayload>({
  event,
  build,
}: {
  event: `${string}/${string}`
  build: (...args: TArgs) => EventDataType<TPayload>
}) => {
  registerEventListener(event, 'always', (...args: TArgs) => {
    sendOneBotEvent(build(...args))
  })
}

export const registerIteratedBuiltOneBotEvent = ({
  event,
  shouldSkip,
  build,
  iterate,
  onSkip,
  onBeforeBuild,
}: {
  event: `${string}/${string}`
  iterate: (payload: NTReceiveMessageType.NTMessageItemType[]) => Iterable<NTReceiveMessageType.NTMessageItemType>
  shouldSkip?: (payload: NTReceiveMessageType.NTMessageItemType) => boolean
  build: (payload: NTReceiveMessageType.NTMessageItemType) => EventDataType<unknown> | null | undefined | Promise<EventDataType<unknown> | null | undefined>
  onSkip?: (payload: NTReceiveMessageType.NTMessageItemType) => void
  onBeforeBuild?: (payload: NTReceiveMessageType.NTMessageItemType) => void
}) => {
  registerEventListener(event, 'always', async (payload: NTReceiveMessageType.NTMessageItemType[]) => {
    for (const item of iterate(payload)) {
      if (shouldSkip?.(item)) {
        onSkip?.(item)
        continue
      }

      onBeforeBuild?.(item)
      emitBuiltOneBotEvent(await build(item))
    }
  })
}
