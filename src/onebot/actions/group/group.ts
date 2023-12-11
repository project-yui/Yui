import { useStore } from "../../../store/store"
import { sendMessageToGroup } from "../../../transfer/message/group"
import { BotMessage } from "../../common/interfaces"
import { BotActionResponse } from "../interfaces"

const { registerActionHandle } = useStore()

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


export const initGroup = () => {
  registerActionHandle('send_message', sendMessage)
}