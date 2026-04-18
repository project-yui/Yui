import { parseBotActionRequest, toBadRequestResponse } from "../../common/action"
import { useLogger } from "../../common/log"
import { BotActionResponse } from "../../onebot/contracts/actions"
import { clearTraceId, setTraceId } from "../../store/runtime"
import { executeAppAction } from "../../app/dispatch-action"
import { ensureBotActionRuntimeReady } from "./ensure-runtime-ready"

const log = useLogger('WS/HandleBotAction')

export const handleBotActionRequest = async (rawMessage: string): Promise<BotActionResponse> => {
  try {
    log.info('server: received: ', rawMessage)
    const msg = parseBotActionRequest(rawMessage)
    setTraceId(msg.id)
    await ensureBotActionRuntimeReady(msg)
    const resp = await executeAppAction(msg)
    log.info(`reply ${resp.id}:`, JSON.stringify(resp))
    return resp
  }
  catch (error) {
    log.error(error)
    return toBadRequestResponse(error)
  }
  finally {
    clearTraceId()
  }
}
