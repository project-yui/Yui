import { useLogger } from "../../common/log";

const log = useLogger('Wrapper/NodeIKernelProfileService')
export class NodeIKernelProfileService {
    protected static singleton?: any = undefined
    protected instance: any
    constructor(instance: any) {
        log.info('constructor called')
        this.instance = instance
    }
    addKernelProfileListener(...args: any[]) {
        log.info('addKernelProfileListener called with args:', args)
        const result = this.instance.addKernelProfileListener(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('addKernelProfileListener called  promise result:', result)
                return res
            })
        }
        log.info('addKernelProfileListener called result:', result)
        return result
    }
    addKernelProfileListenerForUICache(...args: any[]) {
        log.info('addKernelProfileListenerForUICache called with args:', args)
        const result = this.instance.addKernelProfileListenerForUICache(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('addKernelProfileListenerForUICache called  promise result:', result)
                return res
            })
        }
        log.info('addKernelProfileListenerForUICache called result:', result)
        return result
    }
    asyncGetCoreInfo(...args: any[]) {
        log.info('asyncGetCoreInfo called with args:', args)
        const result = this.instance.asyncGetCoreInfo(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('asyncGetCoreInfo called  promise result:', result)
                return res
            })
        }
        log.info('asyncGetCoreInfo called result:', result)
        return result
    }
    enumAreaOptions(...args: any[]) {
        log.info('enumAreaOptions called with args:', args)
        const result = this.instance.enumAreaOptions(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('enumAreaOptions called  promise result:', result)
                return res
            })
        }
        log.info('enumAreaOptions called result:', result)
        return result
    }
    enumCityOptions(...args: any[]) {
        log.info('enumCityOptions called with args:', args)
        const result = this.instance.enumCityOptions(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('enumCityOptions called  promise result:', result)
                return res
            })
        }
        log.info('enumCityOptions called result:', result)
        return result
    }
    enumCountryOptions(...args: any[]) {
        log.info('enumCountryOptions called with args:', args)
        const result = this.instance.enumCountryOptions(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('enumCountryOptions called  promise result:', result)
                return res
            })
        }
        log.info('enumCountryOptions called result:', result)
        return result
    }
    enumProvinceOptions(...args: any[]) {
        log.info('enumProvinceOptions called with args:', args)
        const result = this.instance.enumProvinceOptions(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('enumProvinceOptions called  promise result:', result)
                return res
            })
        }
        log.info('enumProvinceOptions called result:', result)
        return result
    }
    fetchUserDetailInfo(...args: any[]) {
        log.info('fetchUserDetailInfo called with args:', args)
        const result = this.instance.fetchUserDetailInfo(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('fetchUserDetailInfo called  promise result:', result)
                return res
            })
        }
        log.info('fetchUserDetailInfo called result:', result)
        return result
    }
    getCoreAndBaseInfo(...args: any[]) {
        log.info('getCoreAndBaseInfo called with args:', args)
        const result = this.instance.getCoreAndBaseInfo(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getCoreAndBaseInfo called  promise result:', result)
                return res
            })
        }
        log.info('getCoreAndBaseInfo called result:', result)
        return result
    }
    getCoreInfo(...args: any[]) {
        log.info('getCoreInfo called with args:', args)
        const result = this.instance.getCoreInfo(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getCoreInfo called  promise result:', result)
                return res
            })
        }
        log.info('getCoreInfo called result:', result)
        return result
    }
    getIntimate(...args: any[]) {
        log.info('getIntimate called with args:', args)
        const result = this.instance.getIntimate(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getIntimate called  promise result:', result)
                return res
            })
        }
        log.info('getIntimate called result:', result)
        return result
    }
    getLocalStrangerRemark(...args: any[]) {
        log.info('getLocalStrangerRemark called with args:', args)
        const result = this.instance.getLocalStrangerRemark(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getLocalStrangerRemark called  promise result:', result)
                return res
            })
        }
        log.info('getLocalStrangerRemark called result:', result)
        return result
    }
    getOtherFlag(...args: any[]) {
        log.info('getOtherFlag called with args:', args)
        const result = this.instance.getOtherFlag(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getOtherFlag called  promise result:', result)
                return res
            })
        }
        log.info('getOtherFlag called result:', result)
        return result
    }
    getProfileQzonePicInfo(...args: any[]) {
        log.info('getProfileQzonePicInfo called with args:', args)
        const result = this.instance.getProfileQzonePicInfo(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getProfileQzonePicInfo called  promise result:', result)
                return res
            })
        }
        log.info('getProfileQzonePicInfo called result:', result)
        return result
    }
    getRelationFlag(...args: any[]) {
        log.info('getRelationFlag called with args:', args)
        const result = this.instance.getRelationFlag(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getRelationFlag called  promise result:', result)
                return res
            })
        }
        log.info('getRelationFlag called result:', result)
        return result
    }
    getSelfStatus(...args: any[]) {
        log.info('getSelfStatus called with args:', args)
        const result = this.instance.getSelfStatus(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getSelfStatus called  promise result:', result)
                return res
            })
        }
        log.info('getSelfStatus called result:', result)
        return result
    }
    getStatus(...args: any[]) {
        log.info('getStatus called with args:', args)
        const result = this.instance.getStatus(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getStatus called  promise result:', result)
                return res
            })
        }
        log.info('getStatus called result:', result)
        return result
    }
    getStatusInfo(...args: any[]) {
        log.info('getStatusInfo called with args:', args)
        const result = this.instance.getStatusInfo(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getStatusInfo called  promise result:', result)
                return res
            })
        }
        log.info('getStatusInfo called result:', result)
        return result
    }
    getStockLocalData(...args: any[]) {
        log.info('getStockLocalData called with args:', args)
        const result = this.instance.getStockLocalData(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getStockLocalData called  promise result:', result)
                return res
            })
        }
        log.info('getStockLocalData called result:', result)
        return result
    }
    getUidByUin(...args: any[]) {
        log.info('getUidByUin called with args:', args)
        const result = this.instance.getUidByUin(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getUidByUin called  promise result:', result)
                return res
            })
        }
        log.info('getUidByUin called result:', result)
        return result
    }
    getUinByUid(...args: any[]) {
        log.info('getUinByUid called with args:', args)
        const result = this.instance.getUinByUid(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getUinByUid called  promise result:', result)
                return res
            })
        }
        log.info('getUinByUid called result:', result)
        return result
    }
    getUserDetailInfo(...args: any[]) {
        log.info('getUserDetailInfo called with args:', args)
        const result = this.instance.getUserDetailInfo(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getUserDetailInfo called  promise result:', result)
                return res
            })
        }
        log.info('getUserDetailInfo called result:', result)
        return result
    }
    getUserDetailInfoByUin(...args: any[]) {
        log.info('getUserDetailInfoByUin called with args:', args)
        const result = this.instance.getUserDetailInfoByUin(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getUserDetailInfoByUin called  promise result:', result)
                return res
            })
        }
        log.info('getUserDetailInfoByUin called result:', result)
        return result
    }
    getUserDetailInfoWithBizInfo(...args: any[]) {
        log.info('getUserDetailInfoWithBizInfo called with args:', args)
        const result = this.instance.getUserDetailInfoWithBizInfo(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getUserDetailInfoWithBizInfo called  promise result:', result)
                return res
            })
        }
        log.info('getUserDetailInfoWithBizInfo called result:', result)
        return result
    }
    getUserSimpleInfo(...args: any[]) {
        log.info('getUserSimpleInfo called with args:', args)
        const result = this.instance.getUserSimpleInfo(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getUserSimpleInfo called  promise result:', result)
                return res
            })
        }
        log.info('getUserSimpleInfo called result:', result)
        return result
    }
    getVasInfo(...args: any[]) {
        log.info('getVasInfo called with args:', args)
        const result = this.instance.getVasInfo(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getVasInfo called  promise result:', result)
                return res
            })
        }
        log.info('getVasInfo called result:', result)
        return result
    }
    getZplanAvatarInfos(...args: any[]) {
        log.info('getZplanAvatarInfos called with args:', args)
        const result = this.instance.getZplanAvatarInfos(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getZplanAvatarInfos called  promise result:', result)
                return res
            })
        }
        log.info('getZplanAvatarInfos called result:', result)
        return result
    }
    modifyDesktopMiniProfile(...args: any[]) {
        log.info('modifyDesktopMiniProfile called with args:', args)
        const result = this.instance.modifyDesktopMiniProfile(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('modifyDesktopMiniProfile called  promise result:', result)
                return res
            })
        }
        log.info('modifyDesktopMiniProfile called result:', result)
        return result
    }
    modifySelfProfile(...args: any[]) {
        log.info('modifySelfProfile called with args:', args)
        const result = this.instance.modifySelfProfile(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('modifySelfProfile called  promise result:', result)
                return res
            })
        }
        log.info('modifySelfProfile called result:', result)
        return result
    }
    prepareRegionConfig(...args: any[]) {
        log.info('prepareRegionConfig called with args:', args)
        const result = this.instance.prepareRegionConfig(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('prepareRegionConfig called  promise result:', result)
                return res
            })
        }
        log.info('prepareRegionConfig called result:', result)
        return result
    }
    removeKernelProfileListener(...args: any[]) {
        log.info('removeKernelProfileListener called with args:', args)
        const result = this.instance.removeKernelProfileListener(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('removeKernelProfileListener called  promise result:', result)
                return res
            })
        }
        log.info('removeKernelProfileListener called result:', result)
        return result
    }
    setBirthday(...args: any[]) {
        log.info('setBirthday called with args:', args)
        const result = this.instance.setBirthday(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setBirthday called  promise result:', result)
                return res
            })
        }
        log.info('setBirthday called result:', result)
        return result
    }
    setGander(...args: any[]) {
        log.info('setGander called with args:', args)
        const result = this.instance.setGander(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setGander called  promise result:', result)
                return res
            })
        }
        log.info('setGander called result:', result)
        return result
    }
    setHeader(...args: any[]) {
        log.info('setHeader called with args:', args)
        const result = this.instance.setHeader(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setHeader called  promise result:', result)
                return res
            })
        }
        log.info('setHeader called result:', result)
        return result
    }
    setLongNick(...args: any[]) {
        log.info('setLongNick called with args:', args)
        const result = this.instance.setLongNick(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setLongNick called  promise result:', result)
                return res
            })
        }
        log.info('setLongNick called result:', result)
        return result
    }
    setNickName(...args: any[]) {
        log.info('setNickName called with args:', args)
        const result = this.instance.setNickName(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setNickName called  promise result:', result)
                return res
            })
        }
        log.info('setNickName called result:', result)
        return result
    }
    setRecommendImgFlag(...args: any[]) {
        log.info('setRecommendImgFlag called with args:', args)
        const result = this.instance.setRecommendImgFlag(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setRecommendImgFlag called  promise result:', result)
                return res
            })
        }
        log.info('setRecommendImgFlag called result:', result)
        return result
    }
    setdisableEmojiShortCuts(...args: any[]) {
        log.info('setdisableEmojiShortCuts called with args:', args)
        const result = this.instance.setdisableEmojiShortCuts(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setdisableEmojiShortCuts called  promise result:', result)
                return res
            })
        }
        log.info('setdisableEmojiShortCuts called result:', result)
        return result
    }
    startStatusPolling(...args: any[]) {
        log.info('startStatusPolling called with args:', args)
        const result = this.instance.startStatusPolling(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('startStatusPolling called  promise result:', result)
                return res
            })
        }
        log.info('startStatusPolling called result:', result)
        return result
    }
    updateProfileData(...args: any[]) {
        log.info('updateProfileData called with args:', args)
        const result = this.instance.updateProfileData(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('updateProfileData called  promise result:', result)
                return res
            })
        }
        log.info('updateProfileData called result:', result)
        return result
    }
    updateStockLocalData(...args: any[]) {
        log.info('updateStockLocalData called with args:', args)
        const result = this.instance.updateStockLocalData(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('updateStockLocalData called  promise result:', result)
                return res
            })
        }
        log.info('updateStockLocalData called result:', result)
        return result
    }
};
export const getNodeIKernelProfileService = (engine: any): any => {
    return class extends NodeIKernelProfileService {
        
    }
}