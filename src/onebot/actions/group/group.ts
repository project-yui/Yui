import { useLogger } from "../../../common/log"
import { useNTCore } from "../../../ntqq/core/core"
import { useStore } from "../../../store/store"
import { convertBotMessage2NTInnerMessage, convertBotMessage2NTMessage } from "../../../transfer/message/convert"
import { sendMessageToFriend } from "../../../transfer/message/friend"
import { sendForwardMessageToGroup, sendMessageToGroup } from "../../../transfer/message/group"
import { BotMessage } from "../../common/message"
import { getBotAccount } from "../../common/user"
import { BotActionResponse } from "../interfaces"
import { addMsg } from 'yukihana-native'

const { registerActionHandle } = useStore()
const log = useLogger('ActionGroup')
const sendMessage = (p: BotMessage.SendMsg): Promise<BotActionResponse<any>> => {
  return new Promise(async (resolve, reject) => {
    const resp: BotActionResponse<any> = {
      id: "",
      status: "ok",
      retcode: 0,
      data: undefined,
      message: ""
    }
    if (p.detail_type === 'group' && p.group_id) {
      const result = await sendMessageToGroup(p.group_id, p.message)
      resp.data = result
      resolve(resp)
    }
  })
}

/**
 * 向群发送转发消息
 * 
 * 待完善
 * 
 * @param p 转发消息内容
 * @returns 发送结果
 */
const sendForwardMessage = (p: BotMessage.SendMsg): Promise<BotActionResponse<any>> => {
  return new Promise(async (resolve, reject) => {
    const resp: BotActionResponse<any> = {
      id: "",
      status: "ok",
      retcode: 0,
      data: undefined,
      message: ""
    }
    if (p.detail_type === 'group' && p.group_id) {
      /**
       * 1. 检查是否为转发消息
       * 2. 存储转发消息的内容
       * 3. 创建并发送转发消息
       */
      const msg = p.message[0]
      if (msg.type == 'multiforward') {
        if (msg.data.forward_data) {
          const result = await sendForwardMessageToGroup(p.group_id, msg.data.forward_data)
          resp.data = result
        }
      }
      resolve(resp)
    }
  })
}

export const initGroup = () => {
  registerActionHandle('send_message', sendMessage)
  registerActionHandle('send_forward_message', sendForwardMessage)
}