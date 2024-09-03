import { CustomError } from "../../server/error/custom-error"
import { useNTCore } from "../core/core"

export const NTGroupMsgList = async (groupId: `${number}`, msgId: `${number}`, cnt: number) => {
    const { getWrapperSession } = useNTCore()
    const msgService = getWrapperSession().getMsgService()
    const ret = await msgService.getMsgsIncludeSelf({
        chatType: 2,
        peerUid: groupId,
        guildId: ""
    }, msgId, cnt, true)
    if (ret.result !== 0)
    {
        throw new CustomError(333, ret.errMsg)
    }
    return ret.msgList
}