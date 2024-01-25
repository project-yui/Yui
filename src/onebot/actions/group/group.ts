import { useLogger } from "../../../common/log"
import { useStore } from "../../../store/store"
import { sendMessageToFriend } from "../../../transfer/message/friend"
import { sendForwardMessageToGroup, sendMessageToGroup } from "../../../transfer/message/group"
import { BotMessage } from "../../common/interfaces"
import { getBotAccount } from "../../common/user"
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
          const bot = await getBotAccount()
          for(const m of msg.data.forwardList)
          {
            // 给机器人自己发消息
            if (Array.isArray(m)) {
              log.info('forward item type: msgElement')
              const result = await sendMessageToFriend(bot.uid, m)
              idList.push(result.msgId)
            }
            else
            {
              log.info('forward item type: msgId')
              idList.push(m)
            }
          }
          // 3. 创建并发送转发消息
          log.info('forward list:', idList)
          const result = await sendForwardMessageToGroup(bot.uid, p.group_id, idList.map(e => ({
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