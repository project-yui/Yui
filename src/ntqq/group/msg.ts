import { CustomError } from "../../common/error/custom-error"
import { getNTMsgService } from "../core/core"

export const NTGroupMsgList = async (groupId: `${number}`, msgId: `${number}`, cnt: number) => {
    const msgService = getNTMsgService()
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
