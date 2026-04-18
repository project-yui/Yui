import {
  defineActionHandlers,
  mergeActionHandlerMaps,
  registerActionHandlers,
} from "../register-action-handlers"
import {
  getGroupInfo,
  getGroupList,
  getGroupMemberInfo,
  getGroupMsgList,
  sendNudgeToMember,
} from "./group-service"

export const groupActionHandlers = defineActionHandlers({
  get_group_list: getGroupList,
  get_group_info: getGroupInfo,
  get_group_msg: getGroupMsgList,
})

export const groupMemberActionHandlers = defineActionHandlers({
  send_nudge_to_member: sendNudgeToMember,
  get_group_member_info: getGroupMemberInfo,
})

export const groupDomainActionHandlers = mergeActionHandlerMaps(
  groupActionHandlers,
  groupMemberActionHandlers,
)

export const registerGroupActions = () => {
  registerActionHandlers(groupActionHandlers)
}

export const registerGroupMemberActions = () => {
  registerActionHandlers(groupMemberActionHandlers)
}

export const registerGroupDomainActions = () => {
  registerActionHandlers(groupDomainActionHandlers)
}
