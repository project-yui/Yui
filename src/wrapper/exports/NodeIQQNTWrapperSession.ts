import { useLogger } from "../../common/log";
import { NodeIKernelAVSDKService } from './NodeIKernelAVSDKService'
import { NodeIKernelAddBuddyService } from './NodeIKernelAddBuddyService'
import { NodeIKernelAlbumService } from './NodeIKernelAlbumService'
import { NodeIKernelAvatarService } from './NodeIKernelAvatarService'
import { NodeIKernelBaseEmojiService } from './NodeIKernelBaseEmojiService'
import { NodeIKernelBatchUploadService } from './NodeIKernelBatchUploadService'
import { NodeIKernelBdhUploadService } from './NodeIKernelBdhUploadService'
import { NodeIKernelBuddyService } from './NodeIKernelBuddyService'
import { NodeIKernelCollectionService } from './NodeIKernelCollectionService'
import { NodeIKernelConfigMgrService } from './NodeIKernelConfigMgrService'
import { NodeIKernelDbToolsService } from './NodeIKernelDbToolsService'
import { NodeIKernelEmojiService } from './NodeIKernelEmojiService'
import { NodeIKernelFileAssistantService } from './NodeIKernelFileAssistantService'
import { NodeIKernelFileBridgeHostService } from './NodeIKernelFileBridgeHostService'
import { NodeIKernelFlashTransferService } from './NodeIKernelFlashTransferService'
import { NodeIKernelGroupSchoolService } from './NodeIKernelGroupSchoolService'
import { NodeIKernelGroupService } from './NodeIKernelGroupService'
import { NodeIKernelGroupTabService } from './NodeIKernelGroupTabService'
import { NodeIKernelGuildMsgService } from './NodeIKernelGuildMsgService'
import { NodeIKernelHandOffService } from './NodeIKernelHandOffService'
import { NodeIKernelLiteBusinessService } from './NodeIKernelLiteBusinessService'
import { NodeIKernelLockService } from './NodeIKernelLockService'
import { NodeIKernelMSFService } from './NodeIKernelMSFService'
import { NodeIKernelMiniAppService } from './NodeIKernelMiniAppService'
import { NodeIKernelMsgBackupService } from './NodeIKernelMsgBackupService'
import { NodeIKernelMsgService } from './NodeIKernelMsgService'
import { NodeIKernelNodeMiscService } from './NodeIKernelNodeMiscService'
import { NodeIKernelOnlineStatusService } from './NodeIKernelOnlineStatusService'
import { NodeIKernelPersonalAlbumService } from './NodeIKernelPersonalAlbumService'
import { NodeIKernelProfileLikeService } from './NodeIKernelProfileLikeService'
import { NodeIKernelProfileService } from './NodeIKernelProfileService'
import { NodeIKernelPublicAccountService } from './NodeIKernelPublicAccountService'
import { NodeIQQEmailService } from './NodeIQQEmailService'
import { NodeIKernelQQPlayService } from './NodeIKernelQQPlayService'
import { NodeIKernelQiDianService } from './NodeIKernelQiDianService'
import { NodeIKernelRDeliveryService } from './NodeIKernelRDeliveryService'
import { NodeIKernelRecentContactService } from './NodeIKernelRecentContactService'
import { NodeIKernelRemotingService } from './NodeIKernelRemotingService'
import { NodeIKernelRichMediaService } from './NodeIKernelRichMediaService'
import { NodeIKernelRobotService } from './NodeIKernelRobotService'
import { NodeIKernelSearchService } from './NodeIKernelSearchService'
import { NodeIKernelSettingService } from './NodeIKernelSettingService'
import { NodeIShareToWechatService } from './NodeIShareToWechatService'
import { NodeIKernelSkinService } from './NodeIKernelSkinService'
import { NodeIKernelStorageCleanService } from './NodeIKernelStorageCleanService'
import { NodeIKernelTestPerformanceService } from './NodeIKernelTestPerformanceService'
import { NodeIKernelTianShuService } from './NodeIKernelTianShuService'
import { NodeIKernelTicketService } from './NodeIKernelTicketService'
import { NodeIKernelTipOffService } from './NodeIKernelTipOffService'
import { NodeIKernelUixConvertService } from './NodeIKernelUixConvertService'
import { NodeIKernelUnifySearchService } from './NodeIKernelUnifySearchService'
import { NodeIKernelUnitedConfigService } from './NodeIKernelUnitedConfigService'
import { NodeIKernelVasSystemUpdateService } from './NodeIKernelVasSystemUpdateService'
import { NodeIKernelWiFiPhotoClientService } from './NodeIKernelWiFiPhotoClientService'
import { NodeIKernelYellowFaceService } from './NodeIKernelYellowFaceService'
const log = useLogger('Wrapper/NodeIQQNTWrapperSession')
export class NodeIQQNTWrapperSession {
    protected static singleton?: any = undefined
    protected instance: any
    constructor(instance: any) {
        log.info('constructor called')
        this.instance = instance
    }
    close(...args: any[]) {
        log.info('close called with args:', args)
        const result = this.instance.close(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('close called  promise result:', result)
                return res
            })
        }
        log.info('close called result:', result)
        return result
    }
    disableIpDirect(...args: any[]) {
        log.info('disableIpDirect called with args:', args)
        const result = this.instance.disableIpDirect(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('disableIpDirect called  promise result:', result)
                return res
            })
        }
        log.info('disableIpDirect called result:', result)
        return result
    }
    getAVSDKService(...args: any[]) {
        log.info('getAVSDKService called with args:', args)
        const result = this.instance.getAVSDKService(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getAVSDKService called  promise result:', result)
                return res
            })
        }
        log.info('getAVSDKService called result:', result)
        return new NodeIKernelAVSDKService(result)
    }
    getAccountPath(...args: any[]) {
        log.info('getAccountPath called with args:', args)
        const result = this.instance.getAccountPath(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getAccountPath called  promise result:', result)
                return res
            })
        }
        log.info('getAccountPath called result:', result)
        return result
    }
    getAddBuddyService(...args: any[]) {
        log.info('getAddBuddyService called with args:', args)
        const result = this.instance.getAddBuddyService(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getAddBuddyService called  promise result:', result)
                return res
            })
        }
        log.info('getAddBuddyService called result:', result)
        return new NodeIKernelAddBuddyService(result)
    }
    getAlbumService(...args: any[]) {
        log.info('getAlbumService called with args:', args)
        const result = this.instance.getAlbumService(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getAlbumService called  promise result:', result)
                return res
            })
        }
        log.info('getAlbumService called result:', result)
        return new NodeIKernelAlbumService(result)
    }
    getAvatarService(...args: any[]) {
        log.info('getAvatarService called with args:', args)
        const result = this.instance.getAvatarService(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getAvatarService called  promise result:', result)
                return res
            })
        }
        log.info('getAvatarService called result:', result)
        return new NodeIKernelAvatarService(result)
    }
    getBaseEmojiService(...args: any[]) {
        log.info('getBaseEmojiService called with args:', args)
        const result = this.instance.getBaseEmojiService(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getBaseEmojiService called  promise result:', result)
                return res
            })
        }
        log.info('getBaseEmojiService called result:', result)
        return new NodeIKernelBaseEmojiService(result)
    }
    getBatchUploadService(...args: any[]) {
        log.info('getBatchUploadService called with args:', args)
        const result = this.instance.getBatchUploadService(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getBatchUploadService called  promise result:', result)
                return res
            })
        }
        log.info('getBatchUploadService called result:', result)
        return new NodeIKernelBatchUploadService(result)
    }
    getBdhUploadService(...args: any[]) {
        log.info('getBdhUploadService called with args:', args)
        const result = this.instance.getBdhUploadService(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getBdhUploadService called  promise result:', result)
                return res
            })
        }
        log.info('getBdhUploadService called result:', result)
        return new NodeIKernelBdhUploadService(result)
    }
    getBuddyService(...args: any[]) {
        log.info('getBuddyService called with args:', args)
        const result = this.instance.getBuddyService(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getBuddyService called  promise result:', result)
                return res
            })
        }
        log.info('getBuddyService called result:', result)
        return new NodeIKernelBuddyService(result)
    }
    getCacheErrLog(...args: any[]) {
        log.info('getCacheErrLog called with args:', args)
        const result = this.instance.getCacheErrLog(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getCacheErrLog called  promise result:', result)
                return res
            })
        }
        log.info('getCacheErrLog called result:', result)
        return result
    }
    getCollectionService(...args: any[]) {
        log.info('getCollectionService called with args:', args)
        const result = this.instance.getCollectionService(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getCollectionService called  promise result:', result)
                return res
            })
        }
        log.info('getCollectionService called result:', result)
        return new NodeIKernelCollectionService(result)
    }
    getConfigMgrService(...args: any[]) {
        log.info('getConfigMgrService called with args:', args)
        const result = this.instance.getConfigMgrService(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getConfigMgrService called  promise result:', result)
                return res
            })
        }
        log.info('getConfigMgrService called result:', result)
        return new NodeIKernelConfigMgrService(result)
    }
    getDbToolsService(...args: any[]) {
        log.info('getDbToolsService called with args:', args)
        const result = this.instance.getDbToolsService(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getDbToolsService called  promise result:', result)
                return res
            })
        }
        log.info('getDbToolsService called result:', result)
        return new NodeIKernelDbToolsService(result)
    }
    getEmojiService(...args: any[]) {
        log.info('getEmojiService called with args:', args)
        const result = this.instance.getEmojiService(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getEmojiService called  promise result:', result)
                return res
            })
        }
        log.info('getEmojiService called result:', result)
        return new NodeIKernelEmojiService(result)
    }
    getFileAssistantService(...args: any[]) {
        log.info('getFileAssistantService called with args:', args)
        const result = this.instance.getFileAssistantService(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getFileAssistantService called  promise result:', result)
                return res
            })
        }
        log.info('getFileAssistantService called result:', result)
        return new NodeIKernelFileAssistantService(result)
    }
    getFileBridgeHostService(...args: any[]) {
        log.info('getFileBridgeHostService called with args:', args)
        const result = this.instance.getFileBridgeHostService(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getFileBridgeHostService called  promise result:', result)
                return res
            })
        }
        log.info('getFileBridgeHostService called result:', result)
        return new NodeIKernelFileBridgeHostService(result)
    }
    getFlashTransferService(...args: any[]) {
        log.info('getFlashTransferService called with args:', args)
        const result = this.instance.getFlashTransferService(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getFlashTransferService called  promise result:', result)
                return res
            })
        }
        log.info('getFlashTransferService called result:', result)
        return new NodeIKernelFlashTransferService(result)
    }
    getGroupSchoolService(...args: any[]) {
        log.info('getGroupSchoolService called with args:', args)
        const result = this.instance.getGroupSchoolService(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getGroupSchoolService called  promise result:', result)
                return res
            })
        }
        log.info('getGroupSchoolService called result:', result)
        return new NodeIKernelGroupSchoolService(result)
    }
    getGroupService(...args: any[]) {
        log.info('getGroupService called with args:', args)
        const result = this.instance.getGroupService(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getGroupService called  promise result:', result)
                return res
            })
        }
        log.info('getGroupService called result:', result)
        return new NodeIKernelGroupService(result)
    }
    getGroupTabService(...args: any[]) {
        log.info('getGroupTabService called with args:', args)
        const result = this.instance.getGroupTabService(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getGroupTabService called  promise result:', result)
                return res
            })
        }
        log.info('getGroupTabService called result:', result)
        return new NodeIKernelGroupTabService(result)
    }
    getGuildMsgService(...args: any[]) {
        log.info('getGuildMsgService called with args:', args)
        const result = this.instance.getGuildMsgService(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getGuildMsgService called  promise result:', result)
                return res
            })
        }
        log.info('getGuildMsgService called result:', result)
        return new NodeIKernelGuildMsgService(result)
    }
    getHandOffService(...args: any[]) {
        log.info('getHandOffService called with args:', args)
        const result = this.instance.getHandOffService(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getHandOffService called  promise result:', result)
                return res
            })
        }
        log.info('getHandOffService called result:', result)
        return new NodeIKernelHandOffService(result)
    }
    getLiteBusinessService(...args: any[]) {
        log.info('getLiteBusinessService called with args:', args)
        const result = this.instance.getLiteBusinessService(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getLiteBusinessService called  promise result:', result)
                return res
            })
        }
        log.info('getLiteBusinessService called result:', result)
        return new NodeIKernelLiteBusinessService(result)
    }
    getLockService(...args: any[]) {
        log.info('getLockService called with args:', args)
        const result = this.instance.getLockService(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getLockService called  promise result:', result)
                return res
            })
        }
        log.info('getLockService called result:', result)
        return new NodeIKernelLockService(result)
    }
    getMSFService(...args: any[]) {
        log.info('getMSFService called with args:', args)
        const result = this.instance.getMSFService(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getMSFService called  promise result:', result)
                return res
            })
        }
        log.info('getMSFService called result:', result)
        return new NodeIKernelMSFService(result)
    }
    getMiniAppService(...args: any[]) {
        log.info('getMiniAppService called with args:', args)
        const result = this.instance.getMiniAppService(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getMiniAppService called  promise result:', result)
                return res
            })
        }
        log.info('getMiniAppService called result:', result)
        return new NodeIKernelMiniAppService(result)
    }
    getMsgBackupService(...args: any[]) {
        log.info('getMsgBackupService called with args:', args)
        const result = this.instance.getMsgBackupService(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getMsgBackupService called  promise result:', result)
                return res
            })
        }
        log.info('getMsgBackupService called result:', result)
        return new NodeIKernelMsgBackupService(result)
    }
    getMsgService(...args: any[]) {
        log.info('getMsgService called with args:', args)
        const result = this.instance.getMsgService(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getMsgService called  promise result:', result)
                return res
            })
        }
        log.info('getMsgService called result:', result)
        return new NodeIKernelMsgService(result)
    }
    getNodeMiscService(...args: any[]) {
        log.info('getNodeMiscService called with args:', args)
        const result = this.instance.getNodeMiscService(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getNodeMiscService called  promise result:', result)
                return res
            })
        }
        log.info('getNodeMiscService called result:', result)
        return new NodeIKernelNodeMiscService(result)
    }
    getOnlineStatusService(...args: any[]) {
        log.info('getOnlineStatusService called with args:', args)
        const result = this.instance.getOnlineStatusService(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getOnlineStatusService called  promise result:', result)
                return res
            })
        }
        log.info('getOnlineStatusService called result:', result)
        return new NodeIKernelOnlineStatusService(result)
    }
    getPersonalAlbumService(...args: any[]) {
        log.info('getPersonalAlbumService called with args:', args)
        const result = this.instance.getPersonalAlbumService(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getPersonalAlbumService called  promise result:', result)
                return res
            })
        }
        log.info('getPersonalAlbumService called result:', result)
        return new NodeIKernelPersonalAlbumService(result)
    }
    getProfileLikeService(...args: any[]) {
        log.info('getProfileLikeService called with args:', args)
        const result = this.instance.getProfileLikeService(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getProfileLikeService called  promise result:', result)
                return res
            })
        }
        log.info('getProfileLikeService called result:', result)
        return new NodeIKernelProfileLikeService(result)
    }
    getProfileService(...args: any[]) {
        log.info('getProfileService called with args:', args)
        const result = this.instance.getProfileService(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getProfileService called  promise result:', result)
                return res
            })
        }
        log.info('getProfileService called result:', result)
        return new NodeIKernelProfileService(result)
    }
    getPublicAccountService(...args: any[]) {
        log.info('getPublicAccountService called with args:', args)
        const result = this.instance.getPublicAccountService(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getPublicAccountService called  promise result:', result)
                return res
            })
        }
        log.info('getPublicAccountService called result:', result)
        return new NodeIKernelPublicAccountService(result)
    }
    getQQEmailService(...args: any[]) {
        log.info('getQQEmailService called with args:', args)
        const result = this.instance.getQQEmailService(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getQQEmailService called  promise result:', result)
                return res
            })
        }
        log.info('getQQEmailService called result:', result)
        return new NodeIQQEmailService(result)
    }
    getQQPlayService(...args: any[]) {
        log.info('getQQPlayService called with args:', args)
        const result = this.instance.getQQPlayService(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getQQPlayService called  promise result:', result)
                return res
            })
        }
        log.info('getQQPlayService called result:', result)
        return new NodeIKernelQQPlayService(result)
    }
    getQiDianService(...args: any[]) {
        log.info('getQiDianService called with args:', args)
        const result = this.instance.getQiDianService(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getQiDianService called  promise result:', result)
                return res
            })
        }
        log.info('getQiDianService called result:', result)
        return new NodeIKernelQiDianService(result)
    }
    getRDeliveryService(...args: any[]) {
        log.info('getRDeliveryService called with args:', args)
        const result = this.instance.getRDeliveryService(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getRDeliveryService called  promise result:', result)
                return res
            })
        }
        log.info('getRDeliveryService called result:', result)
        return new NodeIKernelRDeliveryService(result)
    }
    getRecentContactService(...args: any[]) {
        log.info('getRecentContactService called with args:', args)
        const result = this.instance.getRecentContactService(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getRecentContactService called  promise result:', result)
                return res
            })
        }
        log.info('getRecentContactService called result:', result)
        return new NodeIKernelRecentContactService(result)
    }
    getRemotingService(...args: any[]) {
        log.info('getRemotingService called with args:', args)
        const result = this.instance.getRemotingService(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getRemotingService called  promise result:', result)
                return res
            })
        }
        log.info('getRemotingService called result:', result)
        return new NodeIKernelRemotingService(result)
    }
    getRichMediaService(...args: any[]) {
        log.info('getRichMediaService called with args:', args)
        const result = this.instance.getRichMediaService(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getRichMediaService called  promise result:', result)
                return res
            })
        }
        log.info('getRichMediaService called result:', result)
        return new NodeIKernelRichMediaService(result)
    }
    getRobotService(...args: any[]) {
        log.info('getRobotService called with args:', args)
        const result = this.instance.getRobotService(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getRobotService called  promise result:', result)
                return res
            })
        }
        log.info('getRobotService called result:', result)
        return new NodeIKernelRobotService(result)
    }
    getSearchService(...args: any[]) {
        log.info('getSearchService called with args:', args)
        const result = this.instance.getSearchService(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getSearchService called  promise result:', result)
                return res
            })
        }
        log.info('getSearchService called result:', result)
        return new NodeIKernelSearchService(result)
    }
    getSessionId(...args: any[]) {
        log.info('getSessionId called with args:', args)
        const result = this.instance.getSessionId(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getSessionId called  promise result:', result)
                return res
            })
        }
        log.info('getSessionId called result:', result)
        return result
    }
    getSettingService(...args: any[]) {
        log.info('getSettingService called with args:', args)
        const result = this.instance.getSettingService(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getSettingService called  promise result:', result)
                return res
            })
        }
        log.info('getSettingService called result:', result)
        return new NodeIKernelSettingService(result)
    }
    getShareToWechatService(...args: any[]) {
        log.info('getShareToWechatService called with args:', args)
        const result = this.instance.getShareToWechatService(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getShareToWechatService called  promise result:', result)
                return res
            })
        }
        log.info('getShareToWechatService called result:', result)
        return new NodeIShareToWechatService(result)
    }
    getShortLinkBlacklist(...args: any[]) {
        log.info('getShortLinkBlacklist called with args:', args)
        const result = this.instance.getShortLinkBlacklist(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getShortLinkBlacklist called  promise result:', result)
                return res
            })
        }
        log.info('getShortLinkBlacklist called result:', result)
        return result
    }
    getSkinService(...args: any[]) {
        log.info('getSkinService called with args:', args)
        const result = this.instance.getSkinService(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getSkinService called  promise result:', result)
                return res
            })
        }
        log.info('getSkinService called result:', result)
        return new NodeIKernelSkinService(result)
    }
    getStorageCleanService(...args: any[]) {
        log.info('getStorageCleanService called with args:', args)
        const result = this.instance.getStorageCleanService(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getStorageCleanService called  promise result:', result)
                return res
            })
        }
        log.info('getStorageCleanService called result:', result)
        return new NodeIKernelStorageCleanService(result)
    }
    getTestPerformanceService(...args: any[]) {
        log.info('getTestPerformanceService called with args:', args)
        const result = this.instance.getTestPerformanceService(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getTestPerformanceService called  promise result:', result)
                return res
            })
        }
        log.info('getTestPerformanceService called result:', result)
        return new NodeIKernelTestPerformanceService(result)
    }
    getTianShuService(...args: any[]) {
        log.info('getTianShuService called with args:', args)
        const result = this.instance.getTianShuService(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getTianShuService called  promise result:', result)
                return res
            })
        }
        log.info('getTianShuService called result:', result)
        return new NodeIKernelTianShuService(result)
    }
    getTicketService(...args: any[]) {
        log.info('getTicketService called with args:', args)
        const result = this.instance.getTicketService(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getTicketService called  promise result:', result)
                return res
            })
        }
        log.info('getTicketService called result:', result)
        return new NodeIKernelTicketService(result)
    }
    getTipOffService(...args: any[]) {
        log.info('getTipOffService called with args:', args)
        const result = this.instance.getTipOffService(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getTipOffService called  promise result:', result)
                return res
            })
        }
        log.info('getTipOffService called result:', result)
        return new NodeIKernelTipOffService(result)
    }
    getUixConvertService(...args: any[]) {
        log.info('getUixConvertService called with args:', args)
        const result = this.instance.getUixConvertService(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getUixConvertService called  promise result:', result)
                return res
            })
        }
        log.info('getUixConvertService called result:', result)
        return new NodeIKernelUixConvertService(result)
    }
    getUnifySearchService(...args: any[]) {
        log.info('getUnifySearchService called with args:', args)
        const result = this.instance.getUnifySearchService(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getUnifySearchService called  promise result:', result)
                return res
            })
        }
        log.info('getUnifySearchService called result:', result)
        return new NodeIKernelUnifySearchService(result)
    }
    getUnitedConfigService(...args: any[]) {
        log.info('getUnitedConfigService called with args:', args)
        const result = this.instance.getUnitedConfigService(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getUnitedConfigService called  promise result:', result)
                return res
            })
        }
        log.info('getUnitedConfigService called result:', result)
        return new NodeIKernelUnitedConfigService(result)
    }
    getVasSystemUpdateService(...args: any[]) {
        log.info('getVasSystemUpdateService called with args:', args)
        const result = this.instance.getVasSystemUpdateService(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getVasSystemUpdateService called  promise result:', result)
                return res
            })
        }
        log.info('getVasSystemUpdateService called result:', result)
        return new NodeIKernelVasSystemUpdateService(result)
    }
    getWiFiPhotoClientService(...args: any[]) {
        log.info('getWiFiPhotoClientService called with args:', args)
        const result = this.instance.getWiFiPhotoClientService(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getWiFiPhotoClientService called  promise result:', result)
                return res
            })
        }
        log.info('getWiFiPhotoClientService called result:', result)
        return new NodeIKernelWiFiPhotoClientService(result)
    }
    getYellowFaceService(...args: any[]) {
        log.info('getYellowFaceService called with args:', args)
        const result = this.instance.getYellowFaceService(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getYellowFaceService called  promise result:', result)
                return res
            })
        }
        log.info('getYellowFaceService called result:', result)
        return new NodeIKernelYellowFaceService(result)
    }
    init(...args: any[]) {
        const getListener = (listener: any) => new Proxy(listener, {
            get(target, p, recv) {
                return function (...args: any[]) {
                    log.info(`NodeIQQNTWrapperSession/${String(p)} call start`, args)
                    const ignore: string[] = [
                        // 'onMSFStatusChange',
                        // 'onNTSessionCreate',
                        // 'onOpentelemetryInit',
                        // 'onSessionInitComplete',
                        // 'dispatchCall',
                        // 'onSendMsfReply',
                    ]
                    if (ignore.includes(String(p))) {
                        log.info(`NodeIQQNTWrapperSession/${String(p)} call ignored.`)
                        return;
                    }
                    const result = target[p](...args)
                    log.info(`NodeIQQNTWrapperSession/${String(p)} call end`, args)
                    return result
                }
            }
        })
        log.info('init called with args:', args)
        const result = this.instance.init(args[0], getListener(args[1]), getListener(args[2]), getListener(args[3]))
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('init called  promise result:', result)
                return res
            })
        }
        log.info('init called result:', result)
        return result
    }
    offLine(...args: any[]) {
        log.info('offLine called with args:', args)
        const result = this.instance.offLine(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('offLine called  promise result:', result)
                return res
            })
        }
        log.info('offLine called result:', result)
        return result
    }
    offLineSync(...args: any[]) {
        log.info('offLineSync called with args:', args)
        const result = this.instance.offLineSync(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('offLineSync called  promise result:', result)
                return res
            })
        }
        log.info('offLineSync called result:', result)
        return result
    }
    onDispatchPush(...args: any[]) {
        log.info('onDispatchPush called with args:', args)
        const result = this.instance.onDispatchPush(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('onDispatchPush called  promise result:', result)
                return res
            })
        }
        log.info('onDispatchPush called result:', result)
        return result
    }
    onDispatchPushWithJson(...args: any[]) {
        log.info('onDispatchPushWithJson called with args:', args)
        const result = this.instance.onDispatchPushWithJson(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('onDispatchPushWithJson called  promise result:', result)
                return res
            })
        }
        log.info('onDispatchPushWithJson called result:', result)
        return result
    }
    onDispatchRequestReply(...args: any[]) {
        log.info('onDispatchRequestReply called with args:', args)
        const result = this.instance.onDispatchRequestReply(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('onDispatchRequestReply called  promise result:', result)
                return res
            })
        }
        log.info('onDispatchRequestReply called result:', result)
        return result
    }
    onLine(...args: any[]) {
        log.info('onLine called with args:', args)
        const result = this.instance.onLine(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('onLine called  promise result:', result)
                return res
            })
        }
        log.info('onLine called result:', result)
        return result
    }
    onMsfPush(...args: any[]) {
        log.info('onMsfPush called with args:', args)
        const result = this.instance.onMsfPush(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('onMsfPush called  promise result:', result)
                return res
            })
        }
        log.info('onMsfPush called result:', result)
        return result
    }
    onNetReply(...args: any[]) {
        log.info('onNetReply called with args:', args)
        const result = this.instance.onNetReply(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('onNetReply called  promise result:', result)
                return res
            })
        }
        log.info('onNetReply called result:', result)
        return result
    }
    onSendOidbReply(...args: any[]) {
        log.info('onSendOidbReply called with args:', args)
        const result = this.instance.onSendOidbReply(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('onSendOidbReply called  promise result:', result)
                return res
            })
        }
        log.info('onSendOidbReply called result:', result)
        return result
    }
    onSendSSOReply(...args: any[]) {
        log.info('onSendSSOReply called with args:', args)
        const result = this.instance.onSendSSOReply(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('onSendSSOReply called  promise result:', result)
                return res
            })
        }
        log.info('onSendSSOReply called result:', result)
        return result
    }
    onUIConfigUpdate(...args: any[]) {
        log.info('onUIConfigUpdate called with args:', args)
        const result = this.instance.onUIConfigUpdate(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('onUIConfigUpdate called  promise result:', result)
                return res
            })
        }
        log.info('onUIConfigUpdate called result:', result)
        return result
    }
    setOnMsfStatusChanged(...args: any[]) {
        log.info('setOnMsfStatusChanged called with args:', args)
        const result = this.instance.setOnMsfStatusChanged(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setOnMsfStatusChanged called  promise result:', result)
                return res
            })
        }
        log.info('setOnMsfStatusChanged called result:', result)
        return result
    }
    setOnNetworkChanged(...args: any[]) {
        log.info('setOnNetworkChanged called with args:', args)
        const result = this.instance.setOnNetworkChanged(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setOnNetworkChanged called  promise result:', result)
                return res
            })
        }
        log.info('setOnNetworkChanged called result:', result)
        return result
    }
    setOnWeakNetChanged(...args: any[]) {
        log.info('setOnWeakNetChanged called with args:', args)
        const result = this.instance.setOnWeakNetChanged(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setOnWeakNetChanged called  promise result:', result)
                return res
            })
        }
        log.info('setOnWeakNetChanged called result:', result)
        return result
    }
    setQimei36(...args: any[]) {
        log.info('setQimei36 called with args:', args)
        const result = this.instance.setQimei36(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setQimei36 called  promise result:', result)
                return res
            })
        }
        log.info('setQimei36 called result:', result)
        return result
    }
    switchToBackGround(...args: any[]) {
        log.info('switchToBackGround called with args:', args)
        const result = this.instance.switchToBackGround(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('switchToBackGround called  promise result:', result)
                return res
            })
        }
        log.info('switchToBackGround called result:', result)
        return result
    }
    switchToFront(...args: any[]) {
        log.info('switchToFront called with args:', args)
        const result = this.instance.switchToFront(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('switchToFront called  promise result:', result)
                return res
            })
        }
        log.info('switchToFront called result:', result)
        return result
    }
    updateTicket(...args: any[]) {
        log.info('updateTicket called with args:', args)
        const result = this.instance.updateTicket(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('updateTicket called  promise result:', result)
                return res
            })
        }
        log.info('updateTicket called result:', result)
        return result
    }
};
export const getNodeIQQNTWrapperSession = (engine: any): any => {
    return class extends NodeIQQNTWrapperSession {
        static getNTWrapperSession(...args: any[]) {
            log.info('getNTWrapperSession called with args:', args)
            const result = engine.getNTWrapperSession(...args)
            if (!this.singleton) {
                this.singleton = new this(result)
            }
            log.info('getNTWrapperSession called result:', this.singleton)
            return this.singleton
        }
    }
}