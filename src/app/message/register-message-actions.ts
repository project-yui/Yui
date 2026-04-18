import {
  defineActionHandlers,
  mergeActionHandlerMaps,
  registerActionHandlers,
} from "../register-action-handlers"
import { recallMessage, sendForwardMessage, sendMessage } from "./message-service"

export const sendMessageActionHandlers = defineActionHandlers({
  send_message: sendMessage,
  send_forward_message: sendForwardMessage,
})

export const recallMessageActionHandlers = defineActionHandlers({
  recall_message: recallMessage,
})

export const messageActionHandlers = mergeActionHandlerMaps(
  sendMessageActionHandlers,
  recallMessageActionHandlers,
)

export const registerSendMessageActions = () => {
  registerActionHandlers(sendMessageActionHandlers)
}

export const registerRecallMessageActions = () => {
  registerActionHandlers(recallMessageActionHandlers)
}

export const registerMessageActions = () => {
  registerActionHandlers(messageActionHandlers)
}
