import { useLogger } from "../../../common/log"
import { useNTUserStore } from "../../../ntqq/store/user"
import { CustomError } from "../../../server/error/custom-error"
import { useStore } from "../../../store/store"
import { sendMessageToGroup } from "../../../transfer/message/group"
import { BotMessage } from "../../common/message"

const log = useLogger('ActionGroup')
const sendMessage = async (p: BotMessage.SendMsg): Promise<any> => {
  if (p.detailType === 'group' && p.groupId) {
    const result = await sendMessageToGroup(`${p.groupId}`, p.message)
    return result
  }
  else {
    throw new CustomError(1, 'detail_type not supported!')
  }
}

/**
 * 向群发送转发消息
 * 
 * 待完善
 * 
 * @param p 转发消息内容
 * @returns 发送结果
 */
const sendForwardMessage = async (p: BotMessage.SendMsg): Promise<any> => {
  const { getUser } = useNTUserStore()
  // 1. get operate user
  const user = getUser()
  
  if (p.detailType === 'group' && p.groupId) {
    // 2. get group
    const group = user.getGroup(p.groupId)
    if (!group)
    {
      throw new CustomError(10000002, '获取群实例失败')
    }
    /**
     * 1. 检查是否为转发消息
     * 2. 存储转发消息的内容
     * 3. 创建并发送转发消息
     */
    const msg = p.message[0]
    if (msg.type == 'multiforward') {
      if (msg.data.forwardData) {
        // 3. send forwardMsg
        const result = await group.sendForwardMessage(msg.data.forwardData)
        return result
      }
    }
  }
  else {
    throw new CustomError(1, 'detail_type is not supported!')
  }
}

/**
 * 
 */
export const initSendMessage = () => {
  const { registerActionHandle } = useStore()
  registerActionHandle('send_message', sendMessage)
  registerActionHandle('send_forward_message', sendForwardMessage)
}