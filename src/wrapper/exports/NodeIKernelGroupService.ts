import { useLogger } from "../../common/log";

const log = useLogger('Wrapper/NodeIKernelGroupService')
export class NodeIKernelGroupService {
    protected static singleton?: any = undefined
    protected instance: any
    constructor(instance: any) {
        log.info('constructor called')
        this.instance = instance
    }
    addGroupEssence(...args: any[]) {
        log.info('addGroupEssence called with args:', args)
        const result = this.instance.addGroupEssence(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('addGroupEssence called  promise result:', result)
                return res
            })
        }
        log.info('addGroupEssence called result:', result)
        return result
    }
    addKernelGroupListener(...args: any[]) {
        log.info('addKernelGroupListener called with args:', args)
        const result = this.instance.addKernelGroupListener(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('addKernelGroupListener called  promise result:', result)
                return res
            })
        }
        log.info('addKernelGroupListener called result:', result)
        return result
    }
    applyTeamUp(...args: any[]) {
        log.info('applyTeamUp called with args:', args)
        const result = this.instance.applyTeamUp(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('applyTeamUp called  promise result:', result)
                return res
            })
        }
        log.info('applyTeamUp called result:', result)
        return result
    }
    batchQueryCachedGroupDetailInfo(...args: any[]) {
        log.info('batchQueryCachedGroupDetailInfo called with args:', args)
        const result = this.instance.batchQueryCachedGroupDetailInfo(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('batchQueryCachedGroupDetailInfo called  promise result:', result)
                return res
            })
        }
        log.info('batchQueryCachedGroupDetailInfo called result:', result)
        return result
    }
    changeGroupShieldSettingTemp(...args: any[]) {
        log.info('changeGroupShieldSettingTemp called with args:', args)
        const result = this.instance.changeGroupShieldSettingTemp(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('changeGroupShieldSettingTemp called  promise result:', result)
                return res
            })
        }
        log.info('changeGroupShieldSettingTemp called result:', result)
        return result
    }
    checkGroupMemberCache(...args: any[]) {
        log.info('checkGroupMemberCache called with args:', args)
        const result = this.instance.checkGroupMemberCache(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('checkGroupMemberCache called  promise result:', result)
                return res
            })
        }
        log.info('checkGroupMemberCache called result:', result)
        return result
    }
    cleanCapsuleCache(...args: any[]) {
        log.info('cleanCapsuleCache called with args:', args)
        const result = this.instance.cleanCapsuleCache(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('cleanCapsuleCache called  promise result:', result)
                return res
            })
        }
        log.info('cleanCapsuleCache called result:', result)
        return result
    }
    clearGroupNotifies(...args: any[]) {
        log.info('clearGroupNotifies called with args:', args)
        const result = this.instance.clearGroupNotifies(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('clearGroupNotifies called  promise result:', result)
                return res
            })
        }
        log.info('clearGroupNotifies called result:', result)
        return result
    }
    clearGroupNotifiesUnreadCount(...args: any[]) {
        log.info('clearGroupNotifiesUnreadCount called with args:', args)
        const result = this.instance.clearGroupNotifiesUnreadCount(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('clearGroupNotifiesUnreadCount called  promise result:', result)
                return res
            })
        }
        log.info('clearGroupNotifiesUnreadCount called result:', result)
        return result
    }
    clearGroupNotifyLocalUnreadCount(...args: any[]) {
        log.info('clearGroupNotifyLocalUnreadCount called with args:', args)
        const result = this.instance.clearGroupNotifyLocalUnreadCount(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('clearGroupNotifyLocalUnreadCount called  promise result:', result)
                return res
            })
        }
        log.info('clearGroupNotifyLocalUnreadCount called result:', result)
        return result
    }
    clearGroupSquareRedpointCache(...args: any[]) {
        log.info('clearGroupSquareRedpointCache called with args:', args)
        const result = this.instance.clearGroupSquareRedpointCache(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('clearGroupSquareRedpointCache called  promise result:', result)
                return res
            })
        }
        log.info('clearGroupSquareRedpointCache called result:', result)
        return result
    }
    createGroup(...args: any[]) {
        log.info('createGroup called with args:', args)
        const result = this.instance.createGroup(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('createGroup called  promise result:', result)
                return res
            })
        }
        log.info('createGroup called result:', result)
        return result
    }
    createGroupV2(...args: any[]) {
        log.info('createGroupV2 called with args:', args)
        const result = this.instance.createGroupV2(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('createGroupV2 called  promise result:', result)
                return res
            })
        }
        log.info('createGroupV2 called result:', result)
        return result
    }
    createGroupWithMembers(...args: any[]) {
        log.info('createGroupWithMembers called with args:', args)
        const result = this.instance.createGroupWithMembers(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('createGroupWithMembers called  promise result:', result)
                return res
            })
        }
        log.info('createGroupWithMembers called result:', result)
        return result
    }
    createMemberListScene(...args: any[]) {
        log.info('createMemberListScene called with args:', args)
        const result = this.instance.createMemberListScene(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('createMemberListScene called  promise result:', result)
                return res
            })
        }
        log.info('createMemberListScene called result:', result)
        return result
    }
    deleteGroupBulletin(...args: any[]) {
        log.info('deleteGroupBulletin called with args:', args)
        const result = this.instance.deleteGroupBulletin(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('deleteGroupBulletin called  promise result:', result)
                return res
            })
        }
        log.info('deleteGroupBulletin called result:', result)
        return result
    }
    deleteTeamUp(...args: any[]) {
        log.info('deleteTeamUp called with args:', args)
        const result = this.instance.deleteTeamUp(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('deleteTeamUp called  promise result:', result)
                return res
            })
        }
        log.info('deleteTeamUp called result:', result)
        return result
    }
    destroyGroup(...args: any[]) {
        log.info('destroyGroup called with args:', args)
        const result = this.instance.destroyGroup(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('destroyGroup called  promise result:', result)
                return res
            })
        }
        log.info('destroyGroup called result:', result)
        return result
    }
    destroyGroupV2(...args: any[]) {
        log.info('destroyGroupV2 called with args:', args)
        const result = this.instance.destroyGroupV2(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('destroyGroupV2 called  promise result:', result)
                return res
            })
        }
        log.info('destroyGroupV2 called result:', result)
        return result
    }
    destroyMemberListScene(...args: any[]) {
        log.info('destroyMemberListScene called with args:', args)
        const result = this.instance.destroyMemberListScene(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('destroyMemberListScene called  promise result:', result)
                return res
            })
        }
        log.info('destroyMemberListScene called result:', result)
        return result
    }
    downloadGroupBulletinRichMedia(...args: any[]) {
        log.info('downloadGroupBulletinRichMedia called with args:', args)
        const result = this.instance.downloadGroupBulletinRichMedia(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('downloadGroupBulletinRichMedia called  promise result:', result)
                return res
            })
        }
        log.info('downloadGroupBulletinRichMedia called result:', result)
        return result
    }
    fetchGroupEssenceList(...args: any[]) {
        log.info('fetchGroupEssenceList called with args:', args)
        const result = this.instance.fetchGroupEssenceList(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('fetchGroupEssenceList called  promise result:', result)
                return res
            })
        }
        log.info('fetchGroupEssenceList called result:', result)
        return result
    }
    fetchGroupNotify(...args: any[]) {
        log.info('fetchGroupNotify called with args:', args)
        const result = this.instance.fetchGroupNotify(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('fetchGroupNotify called  promise result:', result)
                return res
            })
        }
        log.info('fetchGroupNotify called result:', result)
        return result
    }
    getAICommonVoice(...args: any[]) {
        log.info('getAICommonVoice called with args:', args)
        const result = this.instance.getAICommonVoice(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getAICommonVoice called  promise result:', result)
                return res
            })
        }
        log.info('getAICommonVoice called result:', result)
        return result
    }
    getAIOBindGuildInfo(...args: any[]) {
        log.info('getAIOBindGuildInfo called with args:', args)
        const result = this.instance.getAIOBindGuildInfo(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getAIOBindGuildInfo called  promise result:', result)
                return res
            })
        }
        log.info('getAIOBindGuildInfo called result:', result)
        return result
    }
    getAllGroupPrivilegeFlag(...args: any[]) {
        log.info('getAllGroupPrivilegeFlag called with args:', args)
        const result = this.instance.getAllGroupPrivilegeFlag(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getAllGroupPrivilegeFlag called  promise result:', result)
                return res
            })
        }
        log.info('getAllGroupPrivilegeFlag called result:', result)
        return result
    }
    getAllMemberList(...args: any[]) {
        log.info('getAllMemberList called with args:', args)
        const result = this.instance.getAllMemberList(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getAllMemberList called  promise result:', result)
                return res
            })
        }
        log.info('getAllMemberList called result:', result)
        return result
    }
    getAllMemberListV2(...args: any[]) {
        log.info('getAllMemberListV2 called with args:', args)
        const result = this.instance.getAllMemberListV2(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getAllMemberListV2 called  promise result:', result)
                return res
            })
        }
        log.info('getAllMemberListV2 called result:', result)
        return result
    }
    getAppCenter(...args: any[]) {
        log.info('getAppCenter called with args:', args)
        const result = this.instance.getAppCenter(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getAppCenter called  promise result:', result)
                return res
            })
        }
        log.info('getAppCenter called result:', result)
        return result
    }
    getCapsuleApp(...args: any[]) {
        log.info('getCapsuleApp called with args:', args)
        const result = this.instance.getCapsuleApp(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getCapsuleApp called  promise result:', result)
                return res
            })
        }
        log.info('getCapsuleApp called result:', result)
        return result
    }
    getCapsuleAppPro(...args: any[]) {
        log.info('getCapsuleAppPro called with args:', args)
        const result = this.instance.getCapsuleAppPro(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getCapsuleAppPro called  promise result:', result)
                return res
            })
        }
        log.info('getCapsuleAppPro called result:', result)
        return result
    }
    getCardAppList(...args: any[]) {
        log.info('getCardAppList called with args:', args)
        const result = this.instance.getCardAppList(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getCardAppList called  promise result:', result)
                return res
            })
        }
        log.info('getCardAppList called result:', result)
        return result
    }
    getDiscussExistInfo(...args: any[]) {
        log.info('getDiscussExistInfo called with args:', args)
        const result = this.instance.getDiscussExistInfo(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getDiscussExistInfo called  promise result:', result)
                return res
            })
        }
        log.info('getDiscussExistInfo called result:', result)
        return result
    }
    getFindPageRecommendGroup(...args: any[]) {
        log.info('getFindPageRecommendGroup called with args:', args)
        const result = this.instance.getFindPageRecommendGroup(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getFindPageRecommendGroup called  promise result:', result)
                return res
            })
        }
        log.info('getFindPageRecommendGroup called result:', result)
        return result
    }
    getGroupAllInfo(...args: any[]) {
        log.info('getGroupAllInfo called with args:', args)
        const result = this.instance.getGroupAllInfo(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getGroupAllInfo called  promise result:', result)
                return res
            })
        }
        log.info('getGroupAllInfo called result:', result)
        return result
    }
    getGroupArkInviteState(...args: any[]) {
        log.info('getGroupArkInviteState called with args:', args)
        const result = this.instance.getGroupArkInviteState(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getGroupArkInviteState called  promise result:', result)
                return res
            })
        }
        log.info('getGroupArkInviteState called result:', result)
        return result
    }
    getGroupAvatarWall(...args: any[]) {
        log.info('getGroupAvatarWall called with args:', args)
        const result = this.instance.getGroupAvatarWall(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getGroupAvatarWall called  promise result:', result)
                return res
            })
        }
        log.info('getGroupAvatarWall called result:', result)
        return result
    }
    getGroupBindGuilds(...args: any[]) {
        log.info('getGroupBindGuilds called with args:', args)
        const result = this.instance.getGroupBindGuilds(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getGroupBindGuilds called  promise result:', result)
                return res
            })
        }
        log.info('getGroupBindGuilds called result:', result)
        return result
    }
    getGroupBulletin(...args: any[]) {
        log.info('getGroupBulletin called with args:', args)
        const result = this.instance.getGroupBulletin(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getGroupBulletin called  promise result:', result)
                return res
            })
        }
        log.info('getGroupBulletin called result:', result)
        return result
    }
    getGroupBulletinDetail(...args: any[]) {
        log.info('getGroupBulletinDetail called with args:', args)
        const result = this.instance.getGroupBulletinDetail(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getGroupBulletinDetail called  promise result:', result)
                return res
            })
        }
        log.info('getGroupBulletinDetail called result:', result)
        return result
    }
    getGroupBulletinList(...args: any[]) {
        log.info('getGroupBulletinList called with args:', args)
        const result = this.instance.getGroupBulletinList(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getGroupBulletinList called  promise result:', result)
                return res
            })
        }
        log.info('getGroupBulletinList called result:', result)
        return result
    }
    getGroupBulletinReadUsers(...args: any[]) {
        log.info('getGroupBulletinReadUsers called with args:', args)
        const result = this.instance.getGroupBulletinReadUsers(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getGroupBulletinReadUsers called  promise result:', result)
                return res
            })
        }
        log.info('getGroupBulletinReadUsers called result:', result)
        return result
    }
    getGroupConfMember(...args: any[]) {
        log.info('getGroupConfMember called with args:', args)
        const result = this.instance.getGroupConfMember(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getGroupConfMember called  promise result:', result)
                return res
            })
        }
        log.info('getGroupConfMember called result:', result)
        return result
    }
    getGroupDBVersion(...args: any[]) {
        log.info('getGroupDBVersion called with args:', args)
        const result = this.instance.getGroupDBVersion(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getGroupDBVersion called  promise result:', result)
                return res
            })
        }
        log.info('getGroupDBVersion called result:', result)
        return result
    }
    getGroupDetailInfo(...args: any[]) {
        log.info('getGroupDetailInfo called with args:', args)
        const result = this.instance.getGroupDetailInfo(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getGroupDetailInfo called  promise result:', result)
                return res
            })
        }
        log.info('getGroupDetailInfo called result:', result)
        return result
    }
    getGroupDetailInfoByFilter(...args: any[]) {
        log.info('getGroupDetailInfoByFilter called with args:', args)
        const result = this.instance.getGroupDetailInfoByFilter(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getGroupDetailInfoByFilter called  promise result:', result)
                return res
            })
        }
        log.info('getGroupDetailInfoByFilter called result:', result)
        return result
    }
    getGroupDetailInfoForMqq(...args: any[]) {
        log.info('getGroupDetailInfoForMqq called with args:', args)
        const result = this.instance.getGroupDetailInfoForMqq(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getGroupDetailInfoForMqq called  promise result:', result)
                return res
            })
        }
        log.info('getGroupDetailInfoForMqq called result:', result)
        return result
    }
    getGroupExt0xEF0Info(...args: any[]) {
        log.info('getGroupExt0xEF0Info called with args:', args)
        const result = this.instance.getGroupExt0xEF0Info(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getGroupExt0xEF0Info called  promise result:', result)
                return res
            })
        }
        log.info('getGroupExt0xEF0Info called result:', result)
        return result
    }
    getGroupExtList(...args: any[]) {
        log.info('getGroupExtList called with args:', args)
        const result = this.instance.getGroupExtList(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getGroupExtList called  promise result:', result)
                return res
            })
        }
        log.info('getGroupExtList called result:', result)
        return result
    }
    getGroupFlagForThirdApp(...args: any[]) {
        log.info('getGroupFlagForThirdApp called with args:', args)
        const result = this.instance.getGroupFlagForThirdApp(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getGroupFlagForThirdApp called  promise result:', result)
                return res
            })
        }
        log.info('getGroupFlagForThirdApp called result:', result)
        return result
    }
    getGroupHonorList(...args: any[]) {
        log.info('getGroupHonorList called with args:', args)
        const result = this.instance.getGroupHonorList(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getGroupHonorList called  promise result:', result)
                return res
            })
        }
        log.info('getGroupHonorList called result:', result)
        return result
    }
    getGroupInfoForJoinGroup(...args: any[]) {
        log.info('getGroupInfoForJoinGroup called with args:', args)
        const result = this.instance.getGroupInfoForJoinGroup(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getGroupInfoForJoinGroup called  promise result:', result)
                return res
            })
        }
        log.info('getGroupInfoForJoinGroup called result:', result)
        return result
    }
    getGroupInviteNoAuthLimitNum(...args: any[]) {
        log.info('getGroupInviteNoAuthLimitNum called with args:', args)
        const result = this.instance.getGroupInviteNoAuthLimitNum(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getGroupInviteNoAuthLimitNum called  promise result:', result)
                return res
            })
        }
        log.info('getGroupInviteNoAuthLimitNum called result:', result)
        return result
    }
    getGroupLatestEssenceList(...args: any[]) {
        log.info('getGroupLatestEssenceList called with args:', args)
        const result = this.instance.getGroupLatestEssenceList(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getGroupLatestEssenceList called  promise result:', result)
                return res
            })
        }
        log.info('getGroupLatestEssenceList called result:', result)
        return result
    }
    getGroupList(...args: any[]) {
        log.info('getGroupList called with args:', args)
        const result = this.instance.getGroupList(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getGroupList called  promise result:', result)
                return res
            })
        }
        log.info('getGroupList called result:', result)
        return result
    }
    getGroupMedalList(...args: any[]) {
        log.info('getGroupMedalList called with args:', args)
        const result = this.instance.getGroupMedalList(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getGroupMedalList called  promise result:', result)
                return res
            })
        }
        log.info('getGroupMedalList called result:', result)
        return result
    }
    getGroupMemberLevelInfo(...args: any[]) {
        log.info('getGroupMemberLevelInfo called with args:', args)
        const result = this.instance.getGroupMemberLevelInfo(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getGroupMemberLevelInfo called  promise result:', result)
                return res
            })
        }
        log.info('getGroupMemberLevelInfo called result:', result)
        return result
    }
    getGroupMemberMaxNum(...args: any[]) {
        log.info('getGroupMemberMaxNum called with args:', args)
        const result = this.instance.getGroupMemberMaxNum(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getGroupMemberMaxNum called  promise result:', result)
                return res
            })
        }
        log.info('getGroupMemberMaxNum called result:', result)
        return result
    }
    getGroupMsgLimitFreq(...args: any[]) {
        log.info('getGroupMsgLimitFreq called with args:', args)
        const result = this.instance.getGroupMsgLimitFreq(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getGroupMsgLimitFreq called  promise result:', result)
                return res
            })
        }
        log.info('getGroupMsgLimitFreq called result:', result)
        return result
    }
    getGroupMsgMask(...args: any[]) {
        log.info('getGroupMsgMask called with args:', args)
        const result = this.instance.getGroupMsgMask(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getGroupMsgMask called  promise result:', result)
                return res
            })
        }
        log.info('getGroupMsgMask called result:', result)
        return result
    }
    getGroupNotifiesUnreadCount(...args: any[]) {
        log.info('getGroupNotifiesUnreadCount called with args:', args)
        const result = this.instance.getGroupNotifiesUnreadCount(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getGroupNotifiesUnreadCount called  promise result:', result)
                return res
            })
        }
        log.info('getGroupNotifiesUnreadCount called result:', result)
        return result
    }
    getGroupPayToJoinStatus(...args: any[]) {
        log.info('getGroupPayToJoinStatus called with args:', args)
        const result = this.instance.getGroupPayToJoinStatus(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getGroupPayToJoinStatus called  promise result:', result)
                return res
            })
        }
        log.info('getGroupPayToJoinStatus called result:', result)
        return result
    }
    getGroupPortrait(...args: any[]) {
        log.info('getGroupPortrait called with args:', args)
        const result = this.instance.getGroupPortrait(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getGroupPortrait called  promise result:', result)
                return res
            })
        }
        log.info('getGroupPortrait called result:', result)
        return result
    }
    getGroupRecommendContactArkJson(...args: any[]) {
        log.info('getGroupRecommendContactArkJson called with args:', args)
        const result = this.instance.getGroupRecommendContactArkJson(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getGroupRecommendContactArkJson called  promise result:', result)
                return res
            })
        }
        log.info('getGroupRecommendContactArkJson called result:', result)
        return result
    }
    getGroupRecommendContactArkJsonToWechat(...args: any[]) {
        log.info('getGroupRecommendContactArkJsonToWechat called with args:', args)
        const result = this.instance.getGroupRecommendContactArkJsonToWechat(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getGroupRecommendContactArkJsonToWechat called  promise result:', result)
                return res
            })
        }
        log.info('getGroupRecommendContactArkJsonToWechat called result:', result)
        return result
    }
    getGroupRemainAtTimes(...args: any[]) {
        log.info('getGroupRemainAtTimes called with args:', args)
        const result = this.instance.getGroupRemainAtTimes(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getGroupRemainAtTimes called  promise result:', result)
                return res
            })
        }
        log.info('getGroupRemainAtTimes called result:', result)
        return result
    }
    getGroupSecLevelInfo(...args: any[]) {
        log.info('getGroupSecLevelInfo called with args:', args)
        const result = this.instance.getGroupSecLevelInfo(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getGroupSecLevelInfo called  promise result:', result)
                return res
            })
        }
        log.info('getGroupSecLevelInfo called result:', result)
        return result
    }
    getGroupSeqAndJoinTimeForGrayTips(...args: any[]) {
        log.info('getGroupSeqAndJoinTimeForGrayTips called with args:', args)
        const result = this.instance.getGroupSeqAndJoinTimeForGrayTips(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getGroupSeqAndJoinTimeForGrayTips called  promise result:', result)
                return res
            })
        }
        log.info('getGroupSeqAndJoinTimeForGrayTips called result:', result)
        return result
    }
    getGroupShutUpMemberList(...args: any[]) {
        log.info('getGroupShutUpMemberList called with args:', args)
        const result = this.instance.getGroupShutUpMemberList(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getGroupShutUpMemberList called  promise result:', result)
                return res
            })
        }
        log.info('getGroupShutUpMemberList called result:', result)
        return result
    }
    getGroupSquareHomeHead(...args: any[]) {
        log.info('getGroupSquareHomeHead called with args:', args)
        const result = this.instance.getGroupSquareHomeHead(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getGroupSquareHomeHead called  promise result:', result)
                return res
            })
        }
        log.info('getGroupSquareHomeHead called result:', result)
        return result
    }
    getGroupSquareRedpointInfo(...args: any[]) {
        log.info('getGroupSquareRedpointInfo called with args:', args)
        const result = this.instance.getGroupSquareRedpointInfo(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getGroupSquareRedpointInfo called  promise result:', result)
                return res
            })
        }
        log.info('getGroupSquareRedpointInfo called result:', result)
        return result
    }
    getGroupStatisticInfo(...args: any[]) {
        log.info('getGroupStatisticInfo called with args:', args)
        const result = this.instance.getGroupStatisticInfo(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getGroupStatisticInfo called  promise result:', result)
                return res
            })
        }
        log.info('getGroupStatisticInfo called result:', result)
        return result
    }
    getGroupTagRecords(...args: any[]) {
        log.info('getGroupTagRecords called with args:', args)
        const result = this.instance.getGroupTagRecords(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getGroupTagRecords called  promise result:', result)
                return res
            })
        }
        log.info('getGroupTagRecords called result:', result)
        return result
    }
    getIllegalMemberList(...args: any[]) {
        log.info('getIllegalMemberList called with args:', args)
        const result = this.instance.getIllegalMemberList(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getIllegalMemberList called  promise result:', result)
                return res
            })
        }
        log.info('getIllegalMemberList called result:', result)
        return result
    }
    getJoinGroupLink(...args: any[]) {
        log.info('getJoinGroupLink called with args:', args)
        const result = this.instance.getJoinGroupLink(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getJoinGroupLink called  promise result:', result)
                return res
            })
        }
        log.info('getJoinGroupLink called result:', result)
        return result
    }
    getJoinGroupNoVerifyFlag(...args: any[]) {
        log.info('getJoinGroupNoVerifyFlag called with args:', args)
        const result = this.instance.getJoinGroupNoVerifyFlag(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getJoinGroupNoVerifyFlag called  promise result:', result)
                return res
            })
        }
        log.info('getJoinGroupNoVerifyFlag called result:', result)
        return result
    }
    getMemberCommonInfo(...args: any[]) {
        log.info('getMemberCommonInfo called with args:', args)
        const result = this.instance.getMemberCommonInfo(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getMemberCommonInfo called  promise result:', result)
                return res
            })
        }
        log.info('getMemberCommonInfo called result:', result)
        return result
    }
    getMemberExtInfo(...args: any[]) {
        log.info('getMemberExtInfo called with args:', args)
        const result = this.instance.getMemberExtInfo(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getMemberExtInfo called  promise result:', result)
                return res
            })
        }
        log.info('getMemberExtInfo called result:', result)
        return result
    }
    getMemberInfo(...args: any[]) {
        log.info('getMemberInfo called with args:', args)
        const result = this.instance.getMemberInfo(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getMemberInfo called  promise result:', result)
                return res
            })
        }
        log.info('getMemberInfo called result:', result)
        return result
    }
    getMemberInfoCache(...args: any[]) {
        log.info('getMemberInfoCache called with args:', args)
        const result = this.instance.getMemberInfoCache(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getMemberInfoCache called  promise result:', result)
                return res
            })
        }
        log.info('getMemberInfoCache called result:', result)
        return result
    }
    getMemberInfoForMqq(...args: any[]) {
        log.info('getMemberInfoForMqq called with args:', args)
        const result = this.instance.getMemberInfoForMqq(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getMemberInfoForMqq called  promise result:', result)
                return res
            })
        }
        log.info('getMemberInfoForMqq called result:', result)
        return result
    }
    getMemberInfoForMqqV2(...args: any[]) {
        log.info('getMemberInfoForMqqV2 called with args:', args)
        const result = this.instance.getMemberInfoForMqqV2(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getMemberInfoForMqqV2 called  promise result:', result)
                return res
            })
        }
        log.info('getMemberInfoForMqqV2 called result:', result)
        return result
    }
    getNextMemberList(...args: any[]) {
        log.info('getNextMemberList called with args:', args)
        const result = this.instance.getNextMemberList(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getNextMemberList called  promise result:', result)
                return res
            })
        }
        log.info('getNextMemberList called result:', result)
        return result
    }
    getPrevMemberList(...args: any[]) {
        log.info('getPrevMemberList called with args:', args)
        const result = this.instance.getPrevMemberList(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getPrevMemberList called  promise result:', result)
                return res
            })
        }
        log.info('getPrevMemberList called result:', result)
        return result
    }
    getRecGroups(...args: any[]) {
        log.info('getRecGroups called with args:', args)
        const result = this.instance.getRecGroups(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getRecGroups called  promise result:', result)
                return res
            })
        }
        log.info('getRecGroups called result:', result)
        return result
    }
    getSingleScreenNotifies(...args: any[]) {
        log.info('getSingleScreenNotifies called with args:', args)
        const result = this.instance.getSingleScreenNotifies(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getSingleScreenNotifies called  promise result:', result)
                return res
            })
        }
        log.info('getSingleScreenNotifies called result:', result)
        return result
    }
    getSingleScreenNotifiesV2(...args: any[]) {
        log.info('getSingleScreenNotifiesV2 called with args:', args)
        const result = this.instance.getSingleScreenNotifiesV2(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getSingleScreenNotifiesV2 called  promise result:', result)
                return res
            })
        }
        log.info('getSingleScreenNotifiesV2 called result:', result)
        return result
    }
    getSubGroupInfo(...args: any[]) {
        log.info('getSubGroupInfo called with args:', args)
        const result = this.instance.getSubGroupInfo(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getSubGroupInfo called  promise result:', result)
                return res
            })
        }
        log.info('getSubGroupInfo called result:', result)
        return result
    }
    getSwitchStatusForEssenceMsg(...args: any[]) {
        log.info('getSwitchStatusForEssenceMsg called with args:', args)
        const result = this.instance.getSwitchStatusForEssenceMsg(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getSwitchStatusForEssenceMsg called  promise result:', result)
                return res
            })
        }
        log.info('getSwitchStatusForEssenceMsg called result:', result)
        return result
    }
    getTeamUpDetail(...args: any[]) {
        log.info('getTeamUpDetail called with args:', args)
        const result = this.instance.getTeamUpDetail(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getTeamUpDetail called  promise result:', result)
                return res
            })
        }
        log.info('getTeamUpDetail called result:', result)
        return result
    }
    getTeamUpList(...args: any[]) {
        log.info('getTeamUpList called with args:', args)
        const result = this.instance.getTeamUpList(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getTeamUpList called  promise result:', result)
                return res
            })
        }
        log.info('getTeamUpList called result:', result)
        return result
    }
    getTeamUpMembers(...args: any[]) {
        log.info('getTeamUpMembers called with args:', args)
        const result = this.instance.getTeamUpMembers(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getTeamUpMembers called  promise result:', result)
                return res
            })
        }
        log.info('getTeamUpMembers called result:', result)
        return result
    }
    getTeamUpTemplateList(...args: any[]) {
        log.info('getTeamUpTemplateList called with args:', args)
        const result = this.instance.getTeamUpTemplateList(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getTeamUpTemplateList called  promise result:', result)
                return res
            })
        }
        log.info('getTeamUpTemplateList called result:', result)
        return result
    }
    getTopicPage(...args: any[]) {
        log.info('getTopicPage called with args:', args)
        const result = this.instance.getTopicPage(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getTopicPage called  promise result:', result)
                return res
            })
        }
        log.info('getTopicPage called result:', result)
        return result
    }
    getTopicRecall(...args: any[]) {
        log.info('getTopicRecall called with args:', args)
        const result = this.instance.getTopicRecall(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getTopicRecall called  promise result:', result)
                return res
            })
        }
        log.info('getTopicRecall called result:', result)
        return result
    }
    getTransferableMemberInfo(...args: any[]) {
        log.info('getTransferableMemberInfo called with args:', args)
        const result = this.instance.getTransferableMemberInfo(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getTransferableMemberInfo called  promise result:', result)
                return res
            })
        }
        log.info('getTransferableMemberInfo called result:', result)
        return result
    }
    getUidByUins(...args: any[]) {
        log.info('getUidByUins called with args:', args)
        const result = this.instance.getUidByUins(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getUidByUins called  promise result:', result)
                return res
            })
        }
        log.info('getUidByUins called result:', result)
        return result
    }
    getUinByUids(...args: any[]) {
        log.info('getUinByUids called with args:', args)
        const result = this.instance.getUinByUids(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getUinByUids called  promise result:', result)
                return res
            })
        }
        log.info('getUinByUids called result:', result)
        return result
    }
    getWxNotifyStatus(...args: any[]) {
        log.info('getWxNotifyStatus called with args:', args)
        const result = this.instance.getWxNotifyStatus(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getWxNotifyStatus called  promise result:', result)
                return res
            })
        }
        log.info('getWxNotifyStatus called result:', result)
        return result
    }
    groupBlacklistDelApply(...args: any[]) {
        log.info('groupBlacklistDelApply called with args:', args)
        const result = this.instance.groupBlacklistDelApply(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('groupBlacklistDelApply called  promise result:', result)
                return res
            })
        }
        log.info('groupBlacklistDelApply called result:', result)
        return result
    }
    groupBlacklistGetAllApply(...args: any[]) {
        log.info('groupBlacklistGetAllApply called with args:', args)
        const result = this.instance.groupBlacklistGetAllApply(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('groupBlacklistGetAllApply called  promise result:', result)
                return res
            })
        }
        log.info('groupBlacklistGetAllApply called result:', result)
        return result
    }
    halfScreenPullNotice(...args: any[]) {
        log.info('halfScreenPullNotice called with args:', args)
        const result = this.instance.halfScreenPullNotice(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('halfScreenPullNotice called  promise result:', result)
                return res
            })
        }
        log.info('halfScreenPullNotice called result:', result)
        return result
    }
    halfScreenReportClick(...args: any[]) {
        log.info('halfScreenReportClick called with args:', args)
        const result = this.instance.halfScreenReportClick(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('halfScreenReportClick called  promise result:', result)
                return res
            })
        }
        log.info('halfScreenReportClick called result:', result)
        return result
    }
    inviteMembersToGroup(...args: any[]) {
        log.info('inviteMembersToGroup called with args:', args)
        const result = this.instance.inviteMembersToGroup(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('inviteMembersToGroup called  promise result:', result)
                return res
            })
        }
        log.info('inviteMembersToGroup called result:', result)
        return result
    }
    inviteMembersToGroupWithMsg(...args: any[]) {
        log.info('inviteMembersToGroupWithMsg called with args:', args)
        const result = this.instance.inviteMembersToGroupWithMsg(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('inviteMembersToGroupWithMsg called  promise result:', result)
                return res
            })
        }
        log.info('inviteMembersToGroupWithMsg called result:', result)
        return result
    }
    inviteToGroup(...args: any[]) {
        log.info('inviteToGroup called with args:', args)
        const result = this.instance.inviteToGroup(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('inviteToGroup called  promise result:', result)
                return res
            })
        }
        log.info('inviteToGroup called result:', result)
        return result
    }
    inviteToGroupV2(...args: any[]) {
        log.info('inviteToGroupV2 called with args:', args)
        const result = this.instance.inviteToGroupV2(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('inviteToGroupV2 called  promise result:', result)
                return res
            })
        }
        log.info('inviteToGroupV2 called result:', result)
        return result
    }
    isEssenceMsg(...args: any[]) {
        log.info('isEssenceMsg called with args:', args)
        const result = this.instance.isEssenceMsg(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('isEssenceMsg called  promise result:', result)
                return res
            })
        }
        log.info('isEssenceMsg called result:', result)
        return result
    }
    joinGroup(...args: any[]) {
        log.info('joinGroup called with args:', args)
        const result = this.instance.joinGroup(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('joinGroup called  promise result:', result)
                return res
            })
        }
        log.info('joinGroup called result:', result)
        return result
    }
    kickMember(...args: any[]) {
        log.info('kickMember called with args:', args)
        const result = this.instance.kickMember(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('kickMember called  promise result:', result)
                return res
            })
        }
        log.info('kickMember called result:', result)
        return result
    }
    kickMemberV2(...args: any[]) {
        log.info('kickMemberV2 called with args:', args)
        const result = this.instance.kickMemberV2(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('kickMemberV2 called  promise result:', result)
                return res
            })
        }
        log.info('kickMemberV2 called result:', result)
        return result
    }
    listAllAIVoice(...args: any[]) {
        log.info('listAllAIVoice called with args:', args)
        const result = this.instance.listAllAIVoice(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('listAllAIVoice called  promise result:', result)
                return res
            })
        }
        log.info('listAllAIVoice called result:', result)
        return result
    }
    miniAppGetGroupInfo(...args: any[]) {
        log.info('miniAppGetGroupInfo called with args:', args)
        const result = this.instance.miniAppGetGroupInfo(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('miniAppGetGroupInfo called  promise result:', result)
                return res
            })
        }
        log.info('miniAppGetGroupInfo called result:', result)
        return result
    }
    modifyGroupDetailInfo(...args: any[]) {
        log.info('modifyGroupDetailInfo called with args:', args)
        const result = this.instance.modifyGroupDetailInfo(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('modifyGroupDetailInfo called  promise result:', result)
                return res
            })
        }
        log.info('modifyGroupDetailInfo called result:', result)
        return result
    }
    modifyGroupDetailInfoV2(...args: any[]) {
        log.info('modifyGroupDetailInfoV2 called with args:', args)
        const result = this.instance.modifyGroupDetailInfoV2(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('modifyGroupDetailInfoV2 called  promise result:', result)
                return res
            })
        }
        log.info('modifyGroupDetailInfoV2 called result:', result)
        return result
    }
    modifyGroupExtInfo(...args: any[]) {
        log.info('modifyGroupExtInfo called with args:', args)
        const result = this.instance.modifyGroupExtInfo(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('modifyGroupExtInfo called  promise result:', result)
                return res
            })
        }
        log.info('modifyGroupExtInfo called result:', result)
        return result
    }
    modifyGroupExtInfoV2(...args: any[]) {
        log.info('modifyGroupExtInfoV2 called with args:', args)
        const result = this.instance.modifyGroupExtInfoV2(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('modifyGroupExtInfoV2 called  promise result:', result)
                return res
            })
        }
        log.info('modifyGroupExtInfoV2 called result:', result)
        return result
    }
    modifyGroupName(...args: any[]) {
        log.info('modifyGroupName called with args:', args)
        const result = this.instance.modifyGroupName(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('modifyGroupName called  promise result:', result)
                return res
            })
        }
        log.info('modifyGroupName called result:', result)
        return result
    }
    modifyGroupRemark(...args: any[]) {
        log.info('modifyGroupRemark called with args:', args)
        const result = this.instance.modifyGroupRemark(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('modifyGroupRemark called  promise result:', result)
                return res
            })
        }
        log.info('modifyGroupRemark called result:', result)
        return result
    }
    modifyMemberCardName(...args: any[]) {
        log.info('modifyMemberCardName called with args:', args)
        const result = this.instance.modifyMemberCardName(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('modifyMemberCardName called  promise result:', result)
                return res
            })
        }
        log.info('modifyMemberCardName called result:', result)
        return result
    }
    modifyMemberRole(...args: any[]) {
        log.info('modifyMemberRole called with args:', args)
        const result = this.instance.modifyMemberRole(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('modifyMemberRole called  promise result:', result)
                return res
            })
        }
        log.info('modifyMemberRole called result:', result)
        return result
    }
    modifyWxNotifyStatus(...args: any[]) {
        log.info('modifyWxNotifyStatus called with args:', args)
        const result = this.instance.modifyWxNotifyStatus(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('modifyWxNotifyStatus called  promise result:', result)
                return res
            })
        }
        log.info('modifyWxNotifyStatus called result:', result)
        return result
    }
    monitorMemberList(...args: any[]) {
        log.info('monitorMemberList called with args:', args)
        const result = this.instance.monitorMemberList(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('monitorMemberList called  promise result:', result)
                return res
            })
        }
        log.info('monitorMemberList called result:', result)
        return result
    }
    operateSpecialFocus(...args: any[]) {
        log.info('operateSpecialFocus called with args:', args)
        const result = this.instance.operateSpecialFocus(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('operateSpecialFocus called  promise result:', result)
                return res
            })
        }
        log.info('operateSpecialFocus called result:', result)
        return result
    }
    operateSysNotify(...args: any[]) {
        log.info('operateSysNotify called with args:', args)
        const result = this.instance.operateSysNotify(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('operateSysNotify called  promise result:', result)
                return res
            })
        }
        log.info('operateSysNotify called result:', result)
        return result
    }
    operateSysNotifyV2(...args: any[]) {
        log.info('operateSysNotifyV2 called with args:', args)
        const result = this.instance.operateSysNotifyV2(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('operateSysNotifyV2 called  promise result:', result)
                return res
            })
        }
        log.info('operateSysNotifyV2 called result:', result)
        return result
    }
    postTeamUp(...args: any[]) {
        log.info('postTeamUp called with args:', args)
        const result = this.instance.postTeamUp(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('postTeamUp called  promise result:', result)
                return res
            })
        }
        log.info('postTeamUp called result:', result)
        return result
    }
    publishGroupBulletin(...args: any[]) {
        log.info('publishGroupBulletin called with args:', args)
        const result = this.instance.publishGroupBulletin(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('publishGroupBulletin called  promise result:', result)
                return res
            })
        }
        log.info('publishGroupBulletin called result:', result)
        return result
    }
    publishInstructionForNewcomers(...args: any[]) {
        log.info('publishInstructionForNewcomers called with args:', args)
        const result = this.instance.publishInstructionForNewcomers(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('publishInstructionForNewcomers called  promise result:', result)
                return res
            })
        }
        log.info('publishInstructionForNewcomers called result:', result)
        return result
    }
    queryAIOBindGuild(...args: any[]) {
        log.info('queryAIOBindGuild called with args:', args)
        const result = this.instance.queryAIOBindGuild(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('queryAIOBindGuild called  promise result:', result)
                return res
            })
        }
        log.info('queryAIOBindGuild called result:', result)
        return result
    }
    queryCachedEssenceMsg(...args: any[]) {
        log.info('queryCachedEssenceMsg called with args:', args)
        const result = this.instance.queryCachedEssenceMsg(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('queryCachedEssenceMsg called  promise result:', result)
                return res
            })
        }
        log.info('queryCachedEssenceMsg called result:', result)
        return result
    }
    queryJoinGroupCanNoVerify(...args: any[]) {
        log.info('queryJoinGroupCanNoVerify called with args:', args)
        const result = this.instance.queryJoinGroupCanNoVerify(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('queryJoinGroupCanNoVerify called  promise result:', result)
                return res
            })
        }
        log.info('queryJoinGroupCanNoVerify called result:', result)
        return result
    }
    quitGroup(...args: any[]) {
        log.info('quitGroup called with args:', args)
        const result = this.instance.quitGroup(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('quitGroup called  promise result:', result)
                return res
            })
        }
        log.info('quitGroup called result:', result)
        return result
    }
    quitGroupV2(...args: any[]) {
        log.info('quitGroupV2 called with args:', args)
        const result = this.instance.quitGroupV2(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('quitGroupV2 called  promise result:', result)
                return res
            })
        }
        log.info('quitGroupV2 called result:', result)
        return result
    }
    remindGroupBulletinRead(...args: any[]) {
        log.info('remindGroupBulletinRead called with args:', args)
        const result = this.instance.remindGroupBulletinRead(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('remindGroupBulletinRead called  promise result:', result)
                return res
            })
        }
        log.info('remindGroupBulletinRead called result:', result)
        return result
    }
    removeGroupEssence(...args: any[]) {
        log.info('removeGroupEssence called with args:', args)
        const result = this.instance.removeGroupEssence(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('removeGroupEssence called  promise result:', result)
                return res
            })
        }
        log.info('removeGroupEssence called result:', result)
        return result
    }
    removeGroupFromGroupList(...args: any[]) {
        log.info('removeGroupFromGroupList called with args:', args)
        const result = this.instance.removeGroupFromGroupList(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('removeGroupFromGroupList called  promise result:', result)
                return res
            })
        }
        log.info('removeGroupFromGroupList called result:', result)
        return result
    }
    removeKernelGroupListener(...args: any[]) {
        log.info('removeKernelGroupListener called with args:', args)
        const result = this.instance.removeKernelGroupListener(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('removeKernelGroupListener called  promise result:', result)
                return res
            })
        }
        log.info('removeKernelGroupListener called result:', result)
        return result
    }
    reqToJoinGroup(...args: any[]) {
        log.info('reqToJoinGroup called with args:', args)
        const result = this.instance.reqToJoinGroup(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('reqToJoinGroup called  promise result:', result)
                return res
            })
        }
        log.info('reqToJoinGroup called result:', result)
        return result
    }
    saveAIVoice(...args: any[]) {
        log.info('saveAIVoice called with args:', args)
        const result = this.instance.saveAIVoice(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('saveAIVoice called  promise result:', result)
                return res
            })
        }
        log.info('saveAIVoice called result:', result)
        return result
    }
    searchMember(...args: any[]) {
        log.info('searchMember called with args:', args)
        const result = this.instance.searchMember(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('searchMember called  promise result:', result)
                return res
            })
        }
        log.info('searchMember called result:', result)
        return result
    }
    setAIOBindGuild(...args: any[]) {
        log.info('setAIOBindGuild called with args:', args)
        const result = this.instance.setAIOBindGuild(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setAIOBindGuild called  promise result:', result)
                return res
            })
        }
        log.info('setAIOBindGuild called result:', result)
        return result
    }
    setActiveExtGroup(...args: any[]) {
        log.info('setActiveExtGroup called with args:', args)
        const result = this.instance.setActiveExtGroup(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setActiveExtGroup called  promise result:', result)
                return res
            })
        }
        log.info('setActiveExtGroup called result:', result)
        return result
    }
    setCapsuleSwitch(...args: any[]) {
        log.info('setCapsuleSwitch called with args:', args)
        const result = this.instance.setCapsuleSwitch(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setCapsuleSwitch called  promise result:', result)
                return res
            })
        }
        log.info('setCapsuleSwitch called result:', result)
        return result
    }
    setGroupAppList(...args: any[]) {
        log.info('setGroupAppList called with args:', args)
        const result = this.instance.setGroupAppList(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setGroupAppList called  promise result:', result)
                return res
            })
        }
        log.info('setGroupAppList called result:', result)
        return result
    }
    setGroupGeoInfo(...args: any[]) {
        log.info('setGroupGeoInfo called with args:', args)
        const result = this.instance.setGroupGeoInfo(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setGroupGeoInfo called  promise result:', result)
                return res
            })
        }
        log.info('setGroupGeoInfo called result:', result)
        return result
    }
    setGroupMsgMask(...args: any[]) {
        log.info('setGroupMsgMask called with args:', args)
        const result = this.instance.setGroupMsgMask(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setGroupMsgMask called  promise result:', result)
                return res
            })
        }
        log.info('setGroupMsgMask called result:', result)
        return result
    }
    setGroupMsgMaskV2(...args: any[]) {
        log.info('setGroupMsgMaskV2 called with args:', args)
        const result = this.instance.setGroupMsgMaskV2(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setGroupMsgMaskV2 called  promise result:', result)
                return res
            })
        }
        log.info('setGroupMsgMaskV2 called result:', result)
        return result
    }
    setGroupRelationToGuild(...args: any[]) {
        log.info('setGroupRelationToGuild called with args:', args)
        const result = this.instance.setGroupRelationToGuild(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setGroupRelationToGuild called  promise result:', result)
                return res
            })
        }
        log.info('setGroupRelationToGuild called result:', result)
        return result
    }
    setGroupShutUp(...args: any[]) {
        log.info('setGroupShutUp called with args:', args)
        const result = this.instance.setGroupShutUp(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setGroupShutUp called  promise result:', result)
                return res
            })
        }
        log.info('setGroupShutUp called result:', result)
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
    setMemberShutUp(...args: any[]) {
        log.info('setMemberShutUp called with args:', args)
        const result = this.instance.setMemberShutUp(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setMemberShutUp called  promise result:', result)
                return res
            })
        }
        log.info('setMemberShutUp called result:', result)
        return result
    }
    setRcvJoinVerifyMsg(...args: any[]) {
        log.info('setRcvJoinVerifyMsg called with args:', args)
        const result = this.instance.setRcvJoinVerifyMsg(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setRcvJoinVerifyMsg called  promise result:', result)
                return res
            })
        }
        log.info('setRcvJoinVerifyMsg called result:', result)
        return result
    }
    setTop(...args: any[]) {
        log.info('setTop called with args:', args)
        const result = this.instance.setTop(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setTop called  promise result:', result)
                return res
            })
        }
        log.info('setTop called result:', result)
        return result
    }
    shareDigest(...args: any[]) {
        log.info('shareDigest called with args:', args)
        const result = this.instance.shareDigest(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('shareDigest called  promise result:', result)
                return res
            })
        }
        log.info('shareDigest called result:', result)
        return result
    }
    shareTopic(...args: any[]) {
        log.info('shareTopic called with args:', args)
        const result = this.instance.shareTopic(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('shareTopic called  promise result:', result)
                return res
            })
        }
        log.info('shareTopic called result:', result)
        return result
    }
    teamUpCreateGroup(...args: any[]) {
        log.info('teamUpCreateGroup called with args:', args)
        const result = this.instance.teamUpCreateGroup(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('teamUpCreateGroup called  promise result:', result)
                return res
            })
        }
        log.info('teamUpCreateGroup called result:', result)
        return result
    }
    teamUpInviteToGroup(...args: any[]) {
        log.info('teamUpInviteToGroup called with args:', args)
        const result = this.instance.teamUpInviteToGroup(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('teamUpInviteToGroup called  promise result:', result)
                return res
            })
        }
        log.info('teamUpInviteToGroup called result:', result)
        return result
    }
    teamUpRequestToJoin(...args: any[]) {
        log.info('teamUpRequestToJoin called with args:', args)
        const result = this.instance.teamUpRequestToJoin(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('teamUpRequestToJoin called  promise result:', result)
                return res
            })
        }
        log.info('teamUpRequestToJoin called result:', result)
        return result
    }
    teamUpSubmitDeadline(...args: any[]) {
        log.info('teamUpSubmitDeadline called with args:', args)
        const result = this.instance.teamUpSubmitDeadline(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('teamUpSubmitDeadline called  promise result:', result)
                return res
            })
        }
        log.info('teamUpSubmitDeadline called result:', result)
        return result
    }
    topicFeedback(...args: any[]) {
        log.info('topicFeedback called with args:', args)
        const result = this.instance.topicFeedback(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('topicFeedback called  promise result:', result)
                return res
            })
        }
        log.info('topicFeedback called result:', result)
        return result
    }
    topicReport(...args: any[]) {
        log.info('topicReport called with args:', args)
        const result = this.instance.topicReport(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('topicReport called  promise result:', result)
                return res
            })
        }
        log.info('topicReport called result:', result)
        return result
    }
    transferGroup(...args: any[]) {
        log.info('transferGroup called with args:', args)
        const result = this.instance.transferGroup(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('transferGroup called  promise result:', result)
                return res
            })
        }
        log.info('transferGroup called result:', result)
        return result
    }
    transferGroupV2(...args: any[]) {
        log.info('transferGroupV2 called with args:', args)
        const result = this.instance.transferGroupV2(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('transferGroupV2 called  promise result:', result)
                return res
            })
        }
        log.info('transferGroupV2 called result:', result)
        return result
    }
    unbindAllGuilds(...args: any[]) {
        log.info('unbindAllGuilds called with args:', args)
        const result = this.instance.unbindAllGuilds(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('unbindAllGuilds called  promise result:', result)
                return res
            })
        }
        log.info('unbindAllGuilds called result:', result)
        return result
    }
    updateGroupInfoByMqq(...args: any[]) {
        log.info('updateGroupInfoByMqq called with args:', args)
        const result = this.instance.updateGroupInfoByMqq(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('updateGroupInfoByMqq called  promise result:', result)
                return res
            })
        }
        log.info('updateGroupInfoByMqq called result:', result)
        return result
    }
    updateMemberInfoByMqq(...args: any[]) {
        log.info('updateMemberInfoByMqq called with args:', args)
        const result = this.instance.updateMemberInfoByMqq(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('updateMemberInfoByMqq called  promise result:', result)
                return res
            })
        }
        log.info('updateMemberInfoByMqq called result:', result)
        return result
    }
    updateTeamUp(...args: any[]) {
        log.info('updateTeamUp called with args:', args)
        const result = this.instance.updateTeamUp(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('updateTeamUp called  promise result:', result)
                return res
            })
        }
        log.info('updateTeamUp called result:', result)
        return result
    }
    uploadGroupBulletinPic(...args: any[]) {
        log.info('uploadGroupBulletinPic called with args:', args)
        const result = this.instance.uploadGroupBulletinPic(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('uploadGroupBulletinPic called  promise result:', result)
                return res
            })
        }
        log.info('uploadGroupBulletinPic called result:', result)
        return result
    }
};
export const getNodeIKernelGroupService = (engine: any): any => {
    return class extends NodeIKernelGroupService {
        
    }
}