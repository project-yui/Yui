import { useLogger } from "../../common/log";
import { NodeIKernelAvatarService } from "./NodeIKernelAvatarService";
import { NodeIKernelHandOffService } from "./NodeIKernelHandOffService";
import { NodeIKernelMSFService } from "./NodeIKernelMSFService";
import { getNodeIKernelNodeMiscService, NodeIKernelNodeMiscService } from "./NodeIKernelNodeMiscService";
import { NodeIKernelOnlineStatusService } from "./NodeIKernelOnlineStatusService";
import { NodeIKernelPublicAccountService } from "./NodeIKernelPublicAccountService";
import { NodeIKernelRecentContactService } from "./NodeIKernelRecentContactService";
import { NodeIKernelRemotingService } from "./NodeIKernelRemotingService";
import { NodeIKernelUnitedConfigService } from "./NodeIKernelUnitedConfigService";

export const getNodeIQQNTWrapperSession = (engine: any): any => {
    const log = useLogger('Wrapper/NodeIQQNTWrapperSession')
    return class {
        protected static singleton?: any = undefined
        protected instance: any
        constructor(...args: any[]) {
            log.info('constructor called', args)
            this.instance = args[0]
        }
        close(...args: any[]) {
            log.info('close called with args:', args)
            return this.instance.close(...args)
        }
        disableIpDirect(...args: any[]) {
            log.info('disableIpDirect called with args:', args)
            return this.instance.disableIpDirect(...args)
        }
        getAVSDKService(...args: any[]) {
            log.info('getAVSDKService called with args:', args)
            return this.instance.getAVSDKService(...args)
        }
        getAccountPath(...args: any[]) {
            log.info('getAccountPath called with args:', args)
            return this.instance.getAccountPath(...args)
        }
        getAddBuddyService(...args: any[]) {
            log.info('getAddBuddyService called with args:', args)
            return this.instance.getAddBuddyService(...args)
        }
        getAlbumService(...args: any[]) {
            log.info('getAlbumService called with args:', args)
            const instance = this.instance.getAlbumService(...args)
            return instance
        }
        getAvatarService(...args: any[]) {
            log.info('getAvatarService called with args:', args)
            const instance = this.instance.getAvatarService(...args)
            return new NodeIKernelAvatarService(instance)
        }
        getBaseEmojiService(...args: any[]) {
            log.info('getBaseEmojiService called with args:', args)
            return this.instance.getBaseEmojiService(...args)
        }
        getBatchUploadService(...args: any[]) {
            log.info('getBatchUploadService called with args:', args)
            return this.instance.getBatchUploadService(...args)
        }
        getBdhUploadService(...args: any[]) {
            log.info('getBdhUploadService called with args:', args)
            return this.instance.getBdhUploadService(...args)
        }
        getBuddyService(...args: any[]) {
            log.info('getBuddyService called with args:', args)
            return this.instance.getBuddyService(...args)
        }
        getCacheErrLog(...args: any[]) {
            log.info('getCacheErrLog called with args:', args)
            return this.instance.getCacheErrLog(...args)
        }
        getCollectionService(...args: any[]) {
            log.info('getCollectionService called with args:', args)
            return this.instance.getCollectionService(...args)
        }
        getConfigMgrService(...args: any[]) {
            log.info('getConfigMgrService called with args:', args)
            return this.instance.getConfigMgrService(...args)
        }
        getDbToolsService(...args: any[]) {
            log.info('getDbToolsService called with args:', args)
            return this.instance.getDbToolsService(...args)
        }
        getEmojiService(...args: any[]) {
            log.info('getEmojiService called with args:', args)
            return this.instance.getEmojiService(...args)
        }
        getFileAssistantService(...args: any[]) {
            log.info('getFileAssistantService called with args:', args)
            return this.instance.getFileAssistantService(...args)
        }
        getFileBridgeHostService(...args: any[]) {
            log.info('getFileBridgeHostService called with args:', args)
            return this.instance.getFileBridgeHostService(...args)
        }
        getFlashTransferService(...args: any[]) {
            log.info('getFlashTransferService called with args:', args)
            return this.instance.getFlashTransferService(...args)
        }
        getGroupSchoolService(...args: any[]) {
            log.info('getGroupSchoolService called with args:', args)
            return this.instance.getGroupSchoolService(...args)
        }
        getGroupService(...args: any[]) {
            log.info('getGroupService called with args:', args)
            return this.instance.getGroupService(...args)
        }
        getGroupTabService(...args: any[]) {
            log.info('getGroupTabService called with args:', args)
            return this.instance.getGroupTabService(...args)
        }
        getGuildMsgService(...args: any[]) {
            log.info('getGuildMsgService called with args:', args)
            return this.instance.getGuildMsgService(...args)
        }
        getHandOffService(...args: any[]) {
            log.info('getHandOffService called with args:', args)
            const instance = this.instance.getHandOffService(...args)
            return new NodeIKernelHandOffService(instance)
        }
        getLiteBusinessService(...args: any[]) {
            log.info('getLiteBusinessService called with args:', args)
            return this.instance.getLiteBusinessService(...args)
        }
        getLockService(...args: any[]) {
            log.info('getLockService called with args:', args)
            return this.instance.getLockService(...args)
        }
        getMSFService(...args: any[]) {
            log.info('getMSFService called with args:', args)
            const instance = this.instance.getMSFService(...args)
            return new NodeIKernelMSFService(instance)
        }
        getMiniAppService(...args: any[]) {
            log.info('getMiniAppService called with args:', args)
            return this.instance.getMiniAppService(...args)
        }
        getMsgBackupService(...args: any[]) {
            log.info('getMsgBackupService called with args:', args)
            return this.instance.getMsgBackupService(...args)
        }
        getMsgService(...args: any[]) {
            log.info('getMsgService called with args:', args)
            return this.instance.getMsgService(...args)
        }
        getNodeMiscService(...args: any[]) {
            log.info('getNodeMiscService called with args:', args)
            const instance = this.instance.getNodeMiscService(...args)
            return new NodeIKernelNodeMiscService(instance)
        }
        getOnlineStatusService(...args: any[]) {
            log.info('getOnlineStatusService called with args:', args)
            const instance = this.instance.getOnlineStatusService(...args)
            return new NodeIKernelOnlineStatusService(instance)
        }
        getPersonalAlbumService(...args: any[]) {
            log.info('getPersonalAlbumService called with args:', args)
            return this.instance.getPersonalAlbumService(...args)
        }
        getProfileLikeService(...args: any[]) {
            log.info('getProfileLikeService called with args:', args)
            return this.instance.getProfileLikeService(...args)
        }
        getProfileService(...args: any[]) {
            log.info('getProfileService called with args:', args)
            return this.instance.getProfileService(...args)
        }
        getPublicAccountService(...args: any[]) {
            log.info('getPublicAccountService called with args:', args)
            const instance = this.instance.getPublicAccountService(...args)
            return new NodeIKernelPublicAccountService(instance)
        }
        getQQEmailService(...args: any[]) {
            log.info('getQQEmailService called with args:', args)
            return this.instance.getQQEmailService(...args)
        }
        getQQPlayService(...args: any[]) {
            log.info('getQQPlayService called with args:', args)
            return this.instance.getQQPlayService(...args)
        }
        getQiDianService(...args: any[]) {
            log.info('getQiDianService called with args:', args)
            return this.instance.getQiDianService(...args)
        }
        getRDeliveryService(...args: any[]) {
            log.info('getRDeliveryService called with args:', args)
            return this.instance.getRDeliveryService(...args)
        }
        getRecentContactService(...args: any[]) {
            log.info('getRecentContactService called with args:', args)
            const instance = this.instance.getRecentContactService(...args)
            return new NodeIKernelRecentContactService(instance)
        }
        getRemotingService(...args: any[]) {
            log.info('getRemotingService called with args:', args)
            const instance = this.instance.getRemotingService(...args)
            return new NodeIKernelRemotingService(instance)
        }
        getRichMediaService(...args: any[]) {
            log.info('getRichMediaService called with args:', args)
            return this.instance.getRichMediaService(...args)
        }
        getRobotService(...args: any[]) {
            log.info('getRobotService called with args:', args)
            return this.instance.getRobotService(...args)
        }
        getSearchService(...args: any[]) {
            log.info('getSearchService called with args:', args)
            return this.instance.getSearchService(...args)
        }
        getSessionId(...args: any[]) {
            log.info('getSessionId called with args:', args)
            return this.instance.getSessionId(...args)
        }
        getSettingService(...args: any[]) {
            log.info('getSettingService called with args:', args)
            return this.instance.getSettingService(...args)
        }
        getShareToWechatService(...args: any[]) {
            log.info('getShareToWechatService called with args:', args)
            return this.instance.getShareToWechatService(...args)
        }
        getShortLinkBlacklist(...args: any[]) {
            log.info('getShortLinkBlacklist called with args:', args)
            return this.instance.getShortLinkBlacklist(...args)
        }
        getSkinService(...args: any[]) {
            log.info('getSkinService called with args:', args)
            return this.instance.getSkinService(...args)
        }
        getStorageCleanService(...args: any[]) {
            log.info('getStorageCleanService called with args:', args)
            return this.instance.getStorageCleanService(...args)
        }
        getTestPerformanceService(...args: any[]) {
            log.info('getTestPerformanceService called with args:', args)
            return this.instance.getTestPerformanceService(...args)
        }
        getTianShuService(...args: any[]) {
            log.info('getTianShuService called with args:', args)
            return this.instance.getTianShuService(...args)
        }
        getTicketService(...args: any[]) {
            log.info('getTicketService called with args:', args)
            return this.instance.getTicketService(...args)
        }
        getTipOffService(...args: any[]) {
            log.info('getTipOffService called with args:', args)
            return this.instance.getTipOffService(...args)
        }
        getUixConvertService(...args: any[]) {
            log.info('getUixConvertService called with args:', args)
            return this.instance.getUixConvertService(...args)
        }
        getUnifySearchService(...args: any[]) {
            log.info('getUnifySearchService called with args:', args)
            return this.instance.getUnifySearchService(...args)
        }
        getUnitedConfigService(...args: any[]) {
            log.info('getUnitedConfigService called with args:', args)
            const instance = this.instance.getUnitedConfigService(...args)
            return new NodeIKernelUnitedConfigService(instance)
        }
        getVasSystemUpdateService(...args: any[]) {
            log.info('getVasSystemUpdateService called with args:', args)
            return this.instance.getVasSystemUpdateService(...args)
        }
        getWiFiPhotoClientService(...args: any[]) {
            log.info('getWiFiPhotoClientService called with args:', args)
            return this.instance.getWiFiPhotoClientService(...args)
        }
        getYellowFaceService(...args: any[]) {
            log.info('getYellowFaceService called with args:', args)
            return this.instance.getYellowFaceService(...args)
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
            return this.instance.init(args[0], getListener(args[1]), getListener(args[2]), getListener(args[3]))
        }
        offLine(...args: any[]) {
            log.info('offLine called with args:', args)
            return this.instance.offLine(...args)
        }
        offLineSync(...args: any[]) {
            log.info('offLineSync called with args:', args)
            return this.instance.offLineSync(...args)
        }
        onDispatchPush(...args: any[]) {
            log.info('onDispatchPush called with args:', args)
            return this.instance.onDispatchPush(...args)
        }
        onDispatchPushWithJson(...args: any[]) {
            log.info('onDispatchPushWithJson called with args:', args)
            return this.instance.onDispatchPushWithJson(...args)
        }
        onDispatchRequestReply(...args: any[]) {
            log.info('onDispatchRequestReply called with args:', args)
            return this.instance.onDispatchRequestReply(...args)
        }
        onLine(...args: any[]) {
            log.info('onLine called with args:', args)
            return this.instance.onLine(...args)
        }
        onMsfPush(...args: any[]) {
            log.info('onMsfPush called with args:', args)
            return this.instance.onMsfPush(...args)
        }
        onNetReply(...args: any[]) {
            log.info('onNetReply called with args:', args)
            return this.instance.onNetReply(...args)
        }
        onSendOidbReply(...args: any[]) {
            log.info('onSendOidbReply called with args:', args)
            return this.instance.onSendOidbReply(...args)
        }
        onSendSSOReply(...args: any[]) {
            log.info('onSendSSOReply called with args:', args)
            return this.instance.onSendSSOReply(...args)
        }
        onUIConfigUpdate(...args: any[]) {
            log.info('onUIConfigUpdate called with args:', args)
            return this.instance.onUIConfigUpdate(...args)
        }
        setOnMsfStatusChanged(...args: any[]) {
            log.info('setOnMsfStatusChanged called with args:', args)
            return this.instance.setOnMsfStatusChanged(...args)
        }
        setOnNetworkChanged(...args: any[]) {
            log.info('setOnNetworkChanged called with args:', args)
            return this.instance.setOnNetworkChanged(...args)
        }
        setOnWeakNetChanged(...args: any[]) {
            log.info('setOnWeakNetChanged called with args:', args)
            return this.instance.setOnWeakNetChanged(...args)
        }
        setQimei36(...args: any[]) {
            log.info('setQimei36 called with args:', args)
            return this.instance.setQimei36(...args)
        }
        switchToBackGround(...args: any[]) {
            log.info('switchToBackGround called with args:', args)
            return this.instance.switchToBackGround(...args)
        }
        switchToFront(...args: any[]) {
            log.info('switchToFront called with args:', args)
            return this.instance.switchToFront(...args)
        }
        updateTicket(...args: any[]) {
            log.info('updateTicket called with args:', args)
            return this.instance.updateTicket(...args)
        }
        static getNTWrapperSession(...args: any[]) {
            log.info('getNTWrapperSession called with args:', args)
            const instance = engine.getNTWrapperSession(...args)
            if (!this.singleton) {
                this.singleton = new this(instance)
            }
            return this.singleton
        }
        static get() {
            log.info('get called')
            const instance = engine.get()
            if (!this.singleton) {
                this.singleton = new this(instance)
            }
            return this.singleton
        }
    };
}