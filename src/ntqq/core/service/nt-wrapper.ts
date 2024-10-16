import { useWrapper } from "ntwrapper"
import { useAsyncStore } from "../../../store/async-store"
import { useNTUserStore } from "../../store/user"
import { useLogger } from "../../../common/log";
import EventEmitter from "events";
import { CustomError } from "../../../server/error/custom-error";

const log = useLogger('NTWrapper')
const wrapper = useWrapper(1)
const loginService = new wrapper.NodeIKernelLoginService()
const wrapperSession = new wrapper.NodeIQQNTWrapperSession()
const wrapperEngine = new wrapper.NodeIQQNTWrapperEngine()
export const useNTWrapper = () => {
    // QQ号索引处理
    const asyncStore = useAsyncStore()
    const s = asyncStore.getStore()
    const uin: number = s?.get('uin')
    if (!uin)
    {
        throw new CustomError(500, 'useNTWrapper id error.')
    }
    const userStore = useNTUserStore().getAllAccountData()
    if (!userStore[uin])
    {
        const ids = Object.keys(userStore)
        const idx = ids.length + 1
        log.info('wrapper index:', uin, idx, ids)
        const wrapper = useWrapper(idx)
        userStore[uin] = {
            moduleIndex: idx,
            info: {
                uin: undefined,
                uid: undefined,
                userNick: ""
            },
            dispatcher: new EventEmitter(),
            loginService,
            wrapperSession,
            wrapperEngine,
        }
    }
    return useWrapper(userStore[uin].moduleIndex)
}