import { registerFriendActions } from "./friend/register-friend-actions"
import { friendActionHandlers } from "./friend/register-friend-actions"
import {
  groupDomainActionHandlers,
  groupActionHandlers,
  groupMemberActionHandlers,
  registerGroupActions,
  registerGroupDomainActions,
  registerGroupMemberActions,
} from "./group/register-group-actions"
import { registerLoginActions } from "./login/register-login-actions"
import { loginActionHandlers } from "./login/register-login-actions"
import {
  messageActionHandlers,
  recallMessageActionHandlers,
  registerMessageActions,
  registerRecallMessageActions,
  registerSendMessageActions,
  sendMessageActionHandlers,
} from "./message/register-message-actions"
import { mergeActionHandlerMaps, registerActionHandlers } from "./register-action-handlers"

export const appActionHandlers = mergeActionHandlerMaps(
  loginActionHandlers,
  messageActionHandlers,
  groupDomainActionHandlers,
  friendActionHandlers,
)

export type AppActionName = keyof typeof appActionHandlers

export const registerAppOneBotActions = () => {
  registerActionHandlers(appActionHandlers)
}

export {
  registerFriendActions,
  registerGroupActions,
  registerGroupDomainActions,
  registerGroupMemberActions,
  registerLoginActions,
  registerMessageActions,
  registerRecallMessageActions,
  registerSendMessageActions,
  groupActionHandlers,
  groupMemberActionHandlers,
  recallMessageActionHandlers,
  sendMessageActionHandlers,
}
