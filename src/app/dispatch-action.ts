import { useLogger } from "../common/log"
import { convertToCamelCase, convertToSnakeCase } from "../common/utils"
import { BotActionRequest, BotActionResponse } from "../onebot/contracts/actions"
import { CustomError } from "../common/error/custom-error"
import { getRegisteredActionHandler } from "../store/action-registry"
import { appActionHandlers, AppActionName } from "./register-onebot-actions"

const log = useLogger('App/DispatchAction')

export type ActionDispatchResult =
  | { found: false }
  | { found: true, data: unknown }

export const isAppActionName = (action: string): action is AppActionName => {
  return Object.prototype.hasOwnProperty.call(appActionHandlers, action)
}

export const dispatchAppAction = async (request: Pick<BotActionRequest, 'action' | 'params'>): Promise<ActionDispatchResult> => {
  const handle = getRegisteredActionHandler(request.action)
  if (!handle) {
    return { found: false }
  }

  const data = await handle(convertToCamelCase(request.params))
  return {
    found: true,
    data: convertToSnakeCase(data),
  }
}

const createActionErrorResponse = (
  requestId: string,
  retcode: number,
  message: string,
  data: unknown = null,
): BotActionResponse => ({
  id: requestId,
  status: 'failed',
  retcode,
  data,
  message,
})

export const executeAppAction = async (
  request: Pick<BotActionRequest, 'id' | 'action' | 'params'>,
): Promise<BotActionResponse> => {
  log.info('request action:', request.action)

  try {
    log.info('start handle for ', request.action)
    const result = await dispatchAppAction(request)
    if (!result.found) {
      if (!isAppActionName(request.action)) {
        log.warn('unsupported app action: %s', request.action)
      }
      return createActionErrorResponse(request.id, 10002, 'Unsupported Action')
    }

    const response: BotActionResponse = {
      id: request.id,
      status: 'ok',
      retcode: 0,
      data: result.data,
      message: '',
    }
    log.info('end handle for ', request.action)
    return response
  }
  catch (error) {
    log.error('内部错误:', error)
    if (error instanceof CustomError) {
      return createActionErrorResponse(request.id, error.code, error.message, undefined)
    }
    return createActionErrorResponse(request.id, 20002, 'Internal Handler Error')
  }
}
