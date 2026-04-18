import { ActionHandlerMap } from "../store/action-registry"
import { registerActionHandler } from "../store/action-registry"

export type { ActionHandler, ActionHandlerMap } from "../store/action-registry"

type UnionToIntersection<T> =
  (T extends unknown ? (value: T) => void : never) extends ((value: infer I) => void)
    ? I
    : never

export type MergedActionHandlerMap<THandlers extends readonly ActionHandlerMap[]> = UnionToIntersection<THandlers[number]>

export const defineActionHandlers = <THandlers extends ActionHandlerMap>(handlers: THandlers) => handlers

export const mergeActionHandlerMaps = <THandlers extends readonly ActionHandlerMap[]>(...handlers: THandlers) => {
  return Object.assign({}, ...handlers) as MergedActionHandlerMap<THandlers>
}

export const registerActionHandlers = <THandlers extends ActionHandlerMap>(handlers: THandlers) => {
  for (const [action, handler] of Object.entries(handlers)) {
    registerActionHandler(action, handler)
  }
}
