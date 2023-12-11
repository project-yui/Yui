import { randomUUID } from "crypto"
import { IpcUpInfo } from "../../store/interfaces"
import { sendEvent } from "../event/base"
import { NTSendMessageType } from "./interfaces"
import { useLogger } from "../../common/log"

const log = useLogger('NTMessage')

export const NTSendMessage = async (msg: NTSendMessageType.SendRequest): Promise<NTSendMessageType.SendResponse> => {
  log.info('send data:', msg, msg.msgElements)
  const channel = 'IPC_UP_2'
  const uuid = randomUUID()
  const reqInfo: IpcUpInfo = {
    type: 'request',
    callbackId: uuid,
    eventName: 'ns-ntApi-2'
  }
  const reqData: [string, NTSendMessageType.SendRequest, any] = [
    "nodeIKernelMsgService/sendMsg",
    msg,
    null
  ]
  return await sendEvent<NTSendMessageType.SendRequest, NTSendMessageType.SendResponse>(channel, reqInfo, reqData)
}