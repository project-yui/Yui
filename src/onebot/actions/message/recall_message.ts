import { useStore } from "../../../store/store"
import { BotActionResponse } from "../interfaces"

const recallMessage = async (p: {}): Promise<any> => {
    return '1'
}
export const initRecallMessage = () => {
    const { registerActionHandle } = useStore()
    registerActionHandle('send_message', recallMessage)
}