import { BotActionParams } from "../onebot/contracts/actions"
import { useLogger } from "../common/log"

export type ActionHandler<TPayload extends BotActionParams = BotActionParams, TResult = unknown> = (payload: TPayload) => Promise<TResult>
export type AnyActionHandler = (payload: any) => Promise<unknown>
export type ActionHandlerMap = Readonly<Record<string, AnyActionHandler>>

const log = useLogger('Store/ActionRegistry')
const actionMap: Record<string, AnyActionHandler> = {}

export const getRegisteredActionHandler = (action: string): AnyActionHandler | undefined => {
  return actionMap[action]
}

export const registerActionHandler = <TName extends string, TPayload extends BotActionParams, TResult>(
  name: TName,
  handle: ActionHandler<TPayload, TResult>,
) => {
  if (actionMap[name]) {
    log.warn('Action: %s已经被注册，将覆盖旧的处理函数', name)
  }
  actionMap[name] = handle as AnyActionHandler
}
