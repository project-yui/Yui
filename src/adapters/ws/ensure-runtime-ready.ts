import { useLogger } from "../../common/log"
import { BotActionRequest } from "../../onebot/contracts/actions"
import { initializeNTRuntime } from "../../ntqq/core/lifecycle"
import { isCurrentNTUserReady, setCurrentNTUin } from "../../ntqq/core/runtime-store"
import { registerOneBotEvents as registerOneBotRuntimeEvents } from "../onebot/register-events"

const log = useLogger('WS/EnsureRuntimeReady')

export const ensureBotActionRuntimeReady = async (
  request: Pick<BotActionRequest, 'user'>,
) => {
  log.info('uin:', request.user.uin)
  setCurrentNTUin(request.user.uin)

  if (isCurrentNTUserReady()) {
    return
  }

  log.info(`user(${request.user.uin}) has not been initialized, start to initialize...`)
  await initializeNTRuntime()
  registerOneBotRuntimeEvents()
}
