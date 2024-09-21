import { useLogger } from "../../common/log"
import { convertNTMessage2BotMessage } from "../../transfer/message/convert"
import { useNTCore } from "../core/core"

const log = useLogger('NTQQ/Clipboard')
export const NTParseClipboard2Msg = async () => {
    const { getWrapperSession } = useNTCore()
    const miscService = getWrapperSession().getNodeMiscService()
    const ret = await miscService.wantParseClipboard()
    log.info('cliboard result:', typeof ret, JSON.stringify(ret, null, 4))
    return convertNTMessage2BotMessage({chatType: 1}, '0', ret.msgElements)
}