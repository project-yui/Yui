import { useLogger } from "../../../common/log"
import { useStore } from "../../../store/store"
import { sendForwardMessageToGroup, sendMessageToGroup } from "../../../transfer/message/group"
import { BotMessage } from "../../common/interfaces"
import { BotActionResponse } from "../interfaces"

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
       * 2. 发送转发消息的内容
       * 3. 创建并发送转发消息
       */
      const msg = p.message[0]
      if (msg.type == 'multiforward') {
        if (msg.data.forwardList) {
          const idList: `${number}`[] = []
          // 2. 发送转发消息的内容
          for(const m of msg.data.forwardList)
          {
            // TODO: 给机器人自己发消息
            const result = await sendMessageToGroup(p.group_id, m)
            idList.push(result.msgId)
          }
          // 3. 创建并发送转发消息
          log.info('forward list:', idList)
          const result = await sendForwardMessageToGroup(p.group_id, idList.map(e => ({
            msgId: e,
            senderShowName: 'QQ用户'
          })))
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