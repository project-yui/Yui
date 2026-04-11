import { useWrapper } from "ntwrapper"
import { useNTUserStore } from "../../store/user"
import { useLogger } from "../../../common/log";
import EventEmitter from "events";
import { CustomError } from "../../../server/error/custom-error";
import { initNative } from "../../../native/native";

const log = useLogger('NTWrapper')
export const useNTWrapper = () => {
    const { getCurrentAccountData, getCurrentUin, setCurrentAccountData } = useNTUserStore()
    const current = (() => {
        try {
            return getCurrentAccountData()
        } catch {
            return null
        }
    })()
    if (!current) {
        const uin = getCurrentUin()
        const idx = 1
        log.info('wrapper index:', uin, idx)
        const wrapper = useWrapper(idx)
        const sw = wrapper.NodeIQQNTStartupSessionWrapper.create()
        const sessionIdList = sw.getSessionIdList()
        const sessionId = sessionIdList.get('nt')
        if (!sessionId) {
            log.error('get sessionId error:', sessionIdList)
            throw new CustomError(500, 'sessionId error.')
        }
        setCurrentAccountData({
            moduleIndex: idx,
            info: {
                uin: uin || 0,
                uid: 'u_',
                userNick: ""
            },
            dispatcher: new EventEmitter(),
            loginService: new wrapper.NodeIKernelLoginService(),
            wrapperSession: wrapper.NodeIQQNTWrapperSession.getNTWrapperSession(sessionId),
            wrapperEngine: new wrapper.NodeIQQNTWrapperEngine(),
            startupSessionWrapper: sw,
        })
        initNative(`wrapper-${idx}.node`)
    }
    return useWrapper(getCurrentAccountData().moduleIndex)
}

export const resetNTWrapper = () => {
    const { getCurrentUin, getCurrentAccountData } = useNTUserStore()
    const uin = getCurrentUin()
    if (!uin) {
      throw new CustomError(500, 'id error')
    }
    const accountNTData = getCurrentAccountData()
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
