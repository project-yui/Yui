import { useWrapper } from "ntwrapper"
import { useAsyncStore } from "../../../store/async-store"
import { useNTUserStore } from "../../store/user"
import { useLogger } from "../../../common/log";
import EventEmitter from "events";

const log = useLogger('NTWrapper')
let globalModuleIndex = 1;
export const useNTWrapper = () => {
    // QQ号索引处理
    const asyncStore = useAsyncStore()
    const s = asyncStore.getStore()
    const id = s?.get('id')
    if (!id)
    {
        throw new Error('useNTWrapper id error.')
    }
    const userStore = useNTUserStore().getAllAccountData()
    if (!userStore[id])
    {
        const idx = globalModuleIndex++
        log.info('wrapper index:', id, idx)
        const wrapper = useWrapper(idx)
        userStore[id] = {
            moduleIndex: idx,
            info: {
                uin: undefined,
                uid: undefined,
                userNick: ""
            },
            dispatcher: new EventEmitter(),
            loginService: new wrapper.NodeIKernelLoginService(),
            wrapperSession: new wrapper.NodeIQQNTWrapperSession(),
        }
    }
    return useWrapper(userStore[id].moduleIndex)
}