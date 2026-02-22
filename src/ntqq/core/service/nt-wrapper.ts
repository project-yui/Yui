import { useWrapper } from "ntwrapper"
import { useAsyncStore } from "../../../store/async-store"
import { useNTUserStore } from "../../store/user"
import { useLogger } from "../../../common/log";
import EventEmitter from "events";
import { CustomError } from "../../../server/error/custom-error";
import { initNative } from "../../../native/native";

const log = useLogger('NTWrapper')
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
        const sw = wrapper.NodeIQQNTStartupSessionWrapper.create()
        const sessionIdList = sw.getSessionIdList()
        const sessionId = sessionIdList.get('nt')
        if (!sessionId) {
            log.error('get sessionId error:', sessionIdList)
            throw new CustomError(500, 'sessionId error.')
        }
        userStore[uin] = {
            moduleIndex: idx,
            info: {
                uin: 0,
                uid: 'u_',
                userNick: ""
            },
            dispatcher: new EventEmitter(),
            loginService: new wrapper.NodeIKernelLoginService(),
            wrapperSession: wrapper.NodeIQQNTWrapperSession.getNTWrapperSession(sessionId),
            wrapperEngine: new wrapper.NodeIQQNTWrapperEngine(),
            startupSessionWrapper: sw,
        }
        initNative(`wrapper-${idx}.node`)
    }
    return useWrapper(userStore[uin].moduleIndex)
}

export const resetNTWrapper = () => {
    const asyncStore = useAsyncStore()
    const s = asyncStore.getStore()
    const uin: number = s?.get('uin')
    if (!uin) {
      throw new CustomError(500, 'id error')
    }
    const userStore = useNTUserStore()
    const accountNTData = userStore.getCurrentAccountData()
    accountNTData.wrapperEngine.destroy()
    accountNTData.loginService.destroy()

    const wrapper = useWrapper(accountNTData.moduleIndex)
    const sw = wrapper.NodeIQQNTStartupSessionWrapper.create()
    const sessionIdList = sw.getSessionIdList()
    const sessionId = sessionIdList.get('nt')
    if (!sessionId) {
        log.error('get sessionId error:', sessionIdList)
        throw new CustomError(500, 'sessionId error.')
    }
    accountNTData.loginService = new wrapper.NodeIKernelLoginService()
    accountNTData.wrapperSession = wrapper.NodeIQQNTWrapperSession.getNTWrapperSession(sessionId)
    accountNTData.wrapperEngine = new wrapper.NodeIQQNTWrapperEngine()
}