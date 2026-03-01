import { useLogger } from "../../common/log";

const log = useLogger('Wrapper/NodeIKernelGuildMsgService')
export class NodeIKernelGuildMsgService {
    protected static singleton?: any = undefined
    protected instance: any
    constructor(instance: any) {
        log.info('constructor called')
        this.instance = instance
    }
    addKernelGuildMsgListener(...args: any[]) {
        log.info('addKernelGuildMsgListener called with args:', args)
        const result = this.instance.addKernelGuildMsgListener(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('addKernelGuildMsgListener called  promise result:', result)
                return res
            })
        }
        log.info('addKernelGuildMsgListener called result:', result)
        return result
    }
    fetchGroupGuildUnread(...args: any[]) {
        log.info('fetchGroupGuildUnread called with args:', args)
        const result = this.instance.fetchGroupGuildUnread(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('fetchGroupGuildUnread called  promise result:', result)
                return res
            })
        }
        log.info('fetchGroupGuildUnread called result:', result)
        return result
    }
    getAllJoinGuildCnt(...args: any[]) {
        log.info('getAllJoinGuildCnt called with args:', args)
        const result = this.instance.getAllJoinGuildCnt(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getAllJoinGuildCnt called  promise result:', result)
                return res
            })
        }
        log.info('getAllJoinGuildCnt called result:', result)
        return result
    }
    getChannelFreqLimitInfo(...args: any[]) {
        log.info('getChannelFreqLimitInfo called with args:', args)
        const result = this.instance.getChannelFreqLimitInfo(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getChannelFreqLimitInfo called  promise result:', result)
                return res
            })
        }
        log.info('getChannelFreqLimitInfo called result:', result)
        return result
    }
    getGuestMsgAbstractByRange(...args: any[]) {
        log.info('getGuestMsgAbstractByRange called with args:', args)
        const result = this.instance.getGuestMsgAbstractByRange(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getGuestMsgAbstractByRange called  promise result:', result)
                return res
            })
        }
        log.info('getGuestMsgAbstractByRange called result:', result)
        return result
    }
    getGuestMsgAbstracts(...args: any[]) {
        log.info('getGuestMsgAbstracts called with args:', args)
        const result = this.instance.getGuestMsgAbstracts(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getGuestMsgAbstracts called  promise result:', result)
                return res
            })
        }
        log.info('getGuestMsgAbstracts called result:', result)
        return result
    }
    getGuestMsgByRange(...args: any[]) {
        log.info('getGuestMsgByRange called with args:', args)
        const result = this.instance.getGuestMsgByRange(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getGuestMsgByRange called  promise result:', result)
                return res
            })
        }
        log.info('getGuestMsgByRange called result:', result)
        return result
    }
    getGuildGroupBubble(...args: any[]) {
        log.info('getGuildGroupBubble called with args:', args)
        const result = this.instance.getGuildGroupBubble(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getGuildGroupBubble called  promise result:', result)
                return res
            })
        }
        log.info('getGuildGroupBubble called result:', result)
        return result
    }
    getGuildGroupTransData(...args: any[]) {
        log.info('getGuildGroupTransData called with args:', args)
        const result = this.instance.getGuildGroupTransData(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getGuildGroupTransData called  promise result:', result)
                return res
            })
        }
        log.info('getGuildGroupTransData called result:', result)
        return result
    }
    getGuildMsgAbFlag(...args: any[]) {
        log.info('getGuildMsgAbFlag called with args:', args)
        const result = this.instance.getGuildMsgAbFlag(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getGuildMsgAbFlag called  promise result:', result)
                return res
            })
        }
        log.info('getGuildMsgAbFlag called result:', result)
        return result
    }
    getMsgAbstractList(...args: any[]) {
        log.info('getMsgAbstractList called with args:', args)
        const result = this.instance.getMsgAbstractList(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getMsgAbstractList called  promise result:', result)
                return res
            })
        }
        log.info('getMsgAbstractList called result:', result)
        return result
    }
    getMsgAbstractListBySeqRange(...args: any[]) {
        log.info('getMsgAbstractListBySeqRange called with args:', args)
        const result = this.instance.getMsgAbstractListBySeqRange(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getMsgAbstractListBySeqRange called  promise result:', result)
                return res
            })
        }
        log.info('getMsgAbstractListBySeqRange called result:', result)
        return result
    }
    getMsgsBySeqList(...args: any[]) {
        log.info('getMsgsBySeqList called with args:', args)
        const result = this.instance.getMsgsBySeqList(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getMsgsBySeqList called  promise result:', result)
                return res
            })
        }
        log.info('getMsgsBySeqList called result:', result)
        return result
    }
    getMsgsBySeqRange(...args: any[]) {
        log.info('getMsgsBySeqRange called with args:', args)
        const result = this.instance.getMsgsBySeqRange(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getMsgsBySeqRange called  promise result:', result)
                return res
            })
        }
        log.info('getMsgsBySeqRange called result:', result)
        return result
    }
    insertGameResultAsMsgToDb(...args: any[]) {
        log.info('insertGameResultAsMsgToDb called with args:', args)
        const result = this.instance.insertGameResultAsMsgToDb(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('insertGameResultAsMsgToDb called  promise result:', result)
                return res
            })
        }
        log.info('insertGameResultAsMsgToDb called result:', result)
        return result
    }
    isGuildChannelSync(...args: any[]) {
        log.info('isGuildChannelSync called with args:', args)
        const result = this.instance.isGuildChannelSync(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('isGuildChannelSync called  promise result:', result)
                return res
            })
        }
        log.info('isGuildChannelSync called result:', result)
        return result
    }
    onScenesChangeForSilenceMode(...args: any[]) {
        log.info('onScenesChangeForSilenceMode called with args:', args)
        const result = this.instance.onScenesChangeForSilenceMode(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('onScenesChangeForSilenceMode called  promise result:', result)
                return res
            })
        }
        log.info('onScenesChangeForSilenceMode called result:', result)
        return result
    }
    refreshMsgAbstracts(...args: any[]) {
        log.info('refreshMsgAbstracts called with args:', args)
        const result = this.instance.refreshMsgAbstracts(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('refreshMsgAbstracts called  promise result:', result)
                return res
            })
        }
        log.info('refreshMsgAbstracts called result:', result)
        return result
    }
    refreshMsgAbstractsByGuildIds(...args: any[]) {
        log.info('refreshMsgAbstractsByGuildIds called with args:', args)
        const result = this.instance.refreshMsgAbstractsByGuildIds(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('refreshMsgAbstractsByGuildIds called  promise result:', result)
                return res
            })
        }
        log.info('refreshMsgAbstractsByGuildIds called result:', result)
        return result
    }
    removeKernelGuildMsgListener(...args: any[]) {
        log.info('removeKernelGuildMsgListener called with args:', args)
        const result = this.instance.removeKernelGuildMsgListener(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('removeKernelGuildMsgListener called  promise result:', result)
                return res
            })
        }
        log.info('removeKernelGuildMsgListener called result:', result)
        return result
    }
    sendSummonMsg(...args: any[]) {
        log.info('sendSummonMsg called with args:', args)
        const result = this.instance.sendSummonMsg(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('sendSummonMsg called  promise result:', result)
                return res
            })
        }
        log.info('sendSummonMsg called result:', result)
        return result
    }
    setAllGuildMsgRead(...args: any[]) {
        log.info('setAllGuildMsgRead called with args:', args)
        const result = this.instance.setAllGuildMsgRead(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setAllGuildMsgRead called  promise result:', result)
                return res
            })
        }
        log.info('setAllGuildMsgRead called result:', result)
        return result
    }
    setBuildMode(...args: any[]) {
        log.info('setBuildMode called with args:', args)
        const result = this.instance.setBuildMode(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setBuildMode called  promise result:', result)
                return res
            })
        }
        log.info('setBuildMode called result:', result)
        return result
    }
    setConfigurationServiceData(...args: any[]) {
        log.info('setConfigurationServiceData called with args:', args)
        const result = this.instance.setConfigurationServiceData(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setConfigurationServiceData called  promise result:', result)
                return res
            })
        }
        log.info('setConfigurationServiceData called result:', result)
        return result
    }
    setFocusOnGuild(...args: any[]) {
        log.info('setFocusOnGuild called with args:', args)
        const result = this.instance.setFocusOnGuild(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setFocusOnGuild called  promise result:', result)
                return res
            })
        }
        log.info('setFocusOnGuild called result:', result)
        return result
    }
    setGroupGuildBubbleRead(...args: any[]) {
        log.info('setGroupGuildBubbleRead called with args:', args)
        const result = this.instance.setGroupGuildBubbleRead(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setGroupGuildBubbleRead called  promise result:', result)
                return res
            })
        }
        log.info('setGroupGuildBubbleRead called result:', result)
        return result
    }
    setGroupGuildFlag(...args: any[]) {
        log.info('setGroupGuildFlag called with args:', args)
        const result = this.instance.setGroupGuildFlag(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setGroupGuildFlag called  promise result:', result)
                return res
            })
        }
        log.info('setGroupGuildFlag called result:', result)
        return result
    }
    setGroupGuildMsgRead(...args: any[]) {
        log.info('setGroupGuildMsgRead called with args:', args)
        const result = this.instance.setGroupGuildMsgRead(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setGroupGuildMsgRead called  promise result:', result)
                return res
            })
        }
        log.info('setGroupGuildMsgRead called result:', result)
        return result
    }
    setGuildTabUserFlag(...args: any[]) {
        log.info('setGuildTabUserFlag called with args:', args)
        const result = this.instance.setGuildTabUserFlag(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setGuildTabUserFlag called  promise result:', result)
                return res
            })
        }
        log.info('setGuildTabUserFlag called result:', result)
        return result
    }
    setGuildUDCFlag(...args: any[]) {
        log.info('setGuildUDCFlag called with args:', args)
        const result = this.instance.setGuildUDCFlag(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setGuildUDCFlag called  promise result:', result)
                return res
            })
        }
        log.info('setGuildUDCFlag called result:', result)
        return result
    }
    startGuildMsgSync(...args: any[]) {
        log.info('startGuildMsgSync called with args:', args)
        const result = this.instance.startGuildMsgSync(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('startGuildMsgSync called  promise result:', result)
                return res
            })
        }
        log.info('startGuildMsgSync called result:', result)
        return result
    }
};
export const getNodeIKernelGuildMsgService = (engine: any): any => {
    return class extends NodeIKernelGuildMsgService {
        
    }
}