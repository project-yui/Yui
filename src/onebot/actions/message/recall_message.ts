import { useNTCore } from "../../../ntqq/core/core"
import { CustomError } from "../../../server/error/custom-error"
import { useStore } from "../../../store/store"
import { BotMessage } from "../../common/message"

const recallMessage = async (p: BotMessage.DeleteMsg): Promise<any> => {
    const { getWrapperSession } = useNTCore()
    const msgService = getWrapperSession().getMsgService()
    const peerInfo: PeerInfo = {
        chatType: 0,
        peerUid: "",
        guildId: ""
    }
    if (p.detail_type == 'group') {
        peerInfo.chatType = 2
        if (!p.group_id) {
            throw new CustomError(1, 'group_id is not supported!')
        }
        peerInfo.peerUid = `${p.group_id}`
    }
    else if (p.detail_type == 'private') {
        peerInfo.chatType = 1
        if (!p.user_id) {
            throw new CustomError(1, 'user_id is not supported!')
        }
        peerInfo.peerUid = `${p.user_id}`
    }
    else {
        throw new CustomError(1, 'detail_type is not supported!')
    }
    const ret = msgService.recallMsg(peerInfo, [p.message_id])
    return ret
}
export const initRecallMessage = () => {
    const { registerActionHandle } = useStore()
    registerActionHandle('recall_message', recallMessage)
}