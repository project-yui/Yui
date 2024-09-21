import { useNTCore } from "../core/core"

export const NTParseClipboard2Msg = () => {
    const { getWrapperSession } = useNTCore()
    const miscService = getWrapperSession().getNodeMiscService()
}