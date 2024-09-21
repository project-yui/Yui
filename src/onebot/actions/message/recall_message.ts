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
    if (p.detailType == 'group') {
        peerInfo.chatType = 2
        if (!p.groupId) {
            throw new CustomError(1, 'group_id is not supported!')
        }
        peerInfo.peerUid = `${p.groupId}`
    }
    else if (p.detailType == 'private') {
        peerInfo.chatType = 1
        if (!p.userId) {
            throw new CustomError(1, 'user_id is not supported!')
        }
        peerInfo.peerUid = `${p.userId}`
    }
    else {
        throw new CustomError(1, 'detail_type is not supported!')
    }
    const ret = msgService.recallMsg(peerInfo, p.messageId)
    return ret
}
export const initRecallMessage = () => {
    const { registerActionHandle } = useStore()
    registerActionHandle('recall_message', recallMessage)
}