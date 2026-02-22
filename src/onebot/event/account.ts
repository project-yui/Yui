import { useLogger } from "../../common/log"
import { KickedOfflinePayload } from "../../ntqq/types/listener/msg"
import { useServer } from "../../server/server"
import { useAsyncStore } from "../../store/async-store"
import { useStore } from "../../store/store"
import { EventDataType } from "./interfaces"

const { registerEventListener } = useStore()
const log = useLogger('Event/Account')

const kickedOffline = () => {
    const { sendMessage } = useServer()
    registerEventListener('KernelMsgListener/onKickedOffLine', 'always', (p1: KickedOfflinePayload) => {
        const asyncStore = useAsyncStore()
        const s = asyncStore.getStore()
        log.info('onKickedOffLine async store:', s)
        const uin = s?.get('uin')
        if (!uin) {
            log.error('onKickedOffLine: user not found')
            return
        }
        const ret: EventDataType<any> = {
            self: {
                id: uin,
                uid: 'u_0'
            },
            time: new Date().getTime(),
            type: "notice",
            detailType: 'account.kickedOffline',
            subType: "",
            data: {
                p1,
            }
        }
        sendMessage(ret)
    })
}
export const listenAccountEvent = () => {
    kickedOffline()
}