import { useLogger } from "../common/log"
import { registerActionHandler } from "../store/action-registry"
import { sendMessageToGroup } from "../transfer/message/group"
import { BotActionParams } from "../onebot/contracts/actions"
import { BotMessage } from "../onebot/contracts/message"

const log = useLogger('Test')

interface TestSendMessagePayload extends BotActionParams {
  groupId: `${number}`
  message: BotMessage.SendElement[]
}

const sendTestMessage = async (
  payload: TestSendMessagePayload,
): Promise<string> => {
  log.info('run test action')
  return String(await sendMessageToGroup(payload.groupId, payload.message))
}

export const isDebugTestActionEnabled = () => {
  return process.env.YUI_ENABLE_TEST_ACTION === '1'
}

export const registerDebugTestAction = () => {
  registerActionHandler('test', sendTestMessage)
}

export const registerDebugTestActionFromEnv = () => {
  if (!isDebugTestActionEnabled()) {
    return
  }
  registerDebugTestAction()
}
