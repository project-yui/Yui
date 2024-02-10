import { NodeIKernelMsgListener } from "ntwrapper"
import { useNTDispatcher } from "../dispatcher"
import { useNTCore } from "../core"
import { useLogger } from "../../../common/log"

const dispatcher = useNTDispatcher()
const log = useLogger('Service/msg')
/**
 * 初始化消息服务
 * 
 * Session初始化完成后，才能调用
 */
export const initMsgService = () => {
  log.info('initMsgService')
  const { getWrapperSession } = useNTCore()
  const session = getWrapperSession()
  log.info('getMsgService')
  const msgService = session.getMsgService()
  log.info('create listener')
  const listener = new NodeIKernelMsgListener({
    onAddSendMsg(...args) {
      dispatcher.emit('KernelMsgListener/onAddSendMsg', ...args)
    },
    onBroadcastHelperDownloadComplete(...args) {
      dispatcher.emit('KernelMsgListener/onBroadcastHelperDownloadComplete', ...args)
    },
    onBroadcastHelperProgerssUpdate(...args) {
      dispatcher.emit('KernelMsgListener/onBroadcastHelperProgerssUpdate', ...args)
    },
    onRecvMsg(...args) {
      dispatcher.emit('KernelMsgListener/onRecvMsg', ...args)
    },
    onFileMsgCome(...args) {
      dispatcher.emit('KernelMsgListener/onFileMsgCome', ...args)
    },
    onRecvOnlineFileMsg(...args) {
      dispatcher.emit('KernelMsgListener/onRecvOnlineFileMsg', ...args)
    },
    onSysMsgNotification(...args) {
      dispatcher.emit('KernelMsgListener/onSysMsgNotification', ...args)
    },
    onRecvSysMsg(...args) {
      dispatcher.emit('KernelMsgListener/onRecvSysMsg', ...args)
    },
    onRecvS2CMsg(...args) {
      dispatcher.emit('KernelMsgListener/onRecvS2CMsg', ...args)
    },
    onLineDev(...args) {
      dispatcher.emit('KernelMsgListener/onLineDev', ...args)
    },
    onKickedOffLine(...args) {
      dispatcher.emit('KernelMsgListener/onKickedOffLine', ...args)
    },
    onMsgSettingUpdate(...args) {
      dispatcher.emit('KernelMsgListener/onMsgSettingUpdate', ...args)
    },
    onMsgRecall(...args) {
      dispatcher.emit('KernelMsgListener/onMsgRecall', ...args)
    },
    onSendMsgError(...args) {
      dispatcher.emit('KernelMsgListener/onSendMsgError', ...args)
    },
    onRecvMsgSvrRspTransInfo(...args) {
      dispatcher.emit('KernelMsgListener/onRecvMsgSvrRspTransInfo', ...args)
    },
    onMsgInfoListUpdate(...args) {
      dispatcher.emit('KernelMsgListener/onMsgInfoListUpdate', ...args)
    },
    onMsgInfoListAdd(...args) {
      dispatcher.emit('KernelMsgListener/onMsgInfoListAdd', ...args)
    },
    onMsgSecurityNotify(...args) {
      dispatcher.emit('KernelMsgListener/onMsgSecurityNotify', ...args)
    },
    onMsgDelete(...args) {
      dispatcher.emit('KernelMsgListener/onMsgDelete', ...args)
    },
    onMsgEventListUpdate(...args) {
      dispatcher.emit('KernelMsgListener/onMsgEventListUpdate', ...args)
    },
    onCustomWithdrawConfigUpdate(...args) {
      dispatcher.emit('KernelMsgListener/onCustomWithdrawConfigUpdate', ...args)
    },
    onChannelFreqLimitInfoUpdate(...args) {
      dispatcher.emit('KernelMsgListener/onChannelFreqLimitInfoUpdate', ...args)
    },
    onUnreadCntUpdate(...args) {
      dispatcher.emit('KernelMsgListener/onUnreadCntUpdate', ...args)
    },
    onUnreadCntAfterFirstView(...args) {
      dispatcher.emit('KernelMsgListener/onUnreadCntAfterFirstView', ...args)
    },
    onContactUnreadCntUpdate(...args) {
      dispatcher.emit('KernelMsgListener/onContactUnreadCntUpdate', ...args)
    },
    onMsgAbstractUpdate(...args) {
      dispatcher.emit('KernelMsgListener/onMsgAbstractUpdate', ...args)
    },
    onDraftUpdate(...args) {
      dispatcher.emit('KernelMsgListener/onDraftUpdate', ...args)
    },
    onRichMediaUploadComplete(...args) {
      dispatcher.emit('KernelMsgListener/onRichMediaUploadComplete', ...args)
    },
    onRichMediaDownloadComplete(...args) {
      dispatcher.emit('KernelMsgListener/onRichMediaDownloadComplete', ...args)
    },
    onRichMediaProgerssUpdate(...args) {
      dispatcher.emit('KernelMsgListener/onRichMediaProgerssUpdate', ...args)
    },
    onGroupFileInfoUpdate(...args) {
      dispatcher.emit('KernelMsgListener/onGroupFileInfoUpdate', ...args)
    },
    onSearchGroupFileInfoUpdate(...args) {
      dispatcher.emit('KernelMsgListener/onSearchGroupFileInfoUpdate', ...args)
    },
    onGroupTransferInfoUpdate(...args) {
      dispatcher.emit('KernelMsgListener/onGroupTransferInfoUpdate', ...args)
    },
    onGroupFileInfoAdd(...args) {
      dispatcher.emit('KernelMsgListener/onGroupFileInfoAdd', ...args)
    },
    onGroupTransferInfoAdd(...args) {
      dispatcher.emit('KernelMsgListener/onGroupTransferInfoAdd', ...args)
    },
    onEmojiDownloadComplete(...args) {
      dispatcher.emit('KernelMsgListener/onEmojiDownloadComplete', ...args)
    },
    onEmojiResourceUpdate(...args) {
      dispatcher.emit('KernelMsgListener/onEmojiResourceUpdate', ...args)
    },
    onNtMsgSyncStart(...args) {
      dispatcher.emit('KernelMsgListener/onNtMsgSyncStart', ...args)
    },
    onNtFirstViewMsgSyncEnd(...args) {
      dispatcher.emit('KernelMsgListener/onNtFirstViewMsgSyncEnd', ...args)
    },
    onNtMsgSyncEnd(...args) {
      dispatcher.emit('KernelMsgListener/onNtMsgSyncEnd', ...args)
    },
    onInputStatusPush(...args) {
      dispatcher.emit('KernelMsgListener/onInputStatusPush', ...args)
    },
    onImportOldDbProgressUpdate(...args) {
      dispatcher.emit('KernelMsgListener/onImportOldDbProgressUpdate', ...args)
    },
    onFeedEventUpdate(...args) {
      dispatcher.emit('KernelMsgListener/onFeedEventUpdate', ...args)
    },
    onFirstViewDirectMsgUpdate(...args) {
      dispatcher.emit('KernelMsgListener/onFirstViewDirectMsgUpdate', ...args)
    },
    onFirstViewGroupGuildMapping(...args) {
      dispatcher.emit('KernelMsgListener/onFirstViewGroupGuildMapping', ...args)
    },
    onGrabPasswordRedBag(...args) {
      dispatcher.emit('KernelMsgListener/onGrabPasswordRedBag', ...args)
    },
    onGroupGuildUpdate(...args) {
      dispatcher.emit('KernelMsgListener/onGroupGuildUpdate', ...args)
    },
    onGuildInteractiveUpdate(...args) {
      dispatcher.emit('KernelMsgListener/onGuildInteractiveUpdate', ...args)
    },
    onGuildNotificationAbstractUpdate(...args) {
      dispatcher.emit('KernelMsgListener/onGuildNotificationAbstractUpdate', ...args)
    },
    onHitCsRelatedEmojiResult(...args) {
      dispatcher.emit('KernelMsgListener/onHitCsRelatedEmojiResult', ...args)
    },
    onHitEmojiKeywordResult(...args) {
      dispatcher.emit('KernelMsgListener/onHitEmojiKeywordResult', ...args)
    },
    onHitRelatedEmojiResult(...args) {
      dispatcher.emit('KernelMsgListener/onHitRelatedEmojiResult', ...args)
    },
    onlineStatusBigIconDownloadPush(...args) {
      dispatcher.emit('KernelMsgListener/onlineStatusBigIconDownloadPush', ...args)
    },
    onlineStatusSmallIconDownloadPush(...args) {
      dispatcher.emit('KernelMsgListener/onlineStatusSmallIconDownloadPush', ...args)
    },
    onLogLevelChanged(...args) {
      dispatcher.emit('KernelMsgListener/onLogLevelChanged', ...args)
    },
    onMsgBoxChanged(...args) {
      dispatcher.emit('KernelMsgListener/onMsgBoxChanged', ...args)
    },
    onMsgQRCodeStatusChanged(...args) {
      dispatcher.emit('KernelMsgListener/onMsgQRCodeStatusChanged', ...args)
    },
    onReadFeedEventUpdate(...args) {
      dispatcher.emit('KernelMsgListener/onReadFeedEventUpdate', ...args)
    },
    onRecvGroupGuildFlag(...args) {
      dispatcher.emit('KernelMsgListener/onRecvGroupGuildFlag', ...args)
    },
    onRecvUDCFlag(...args) {
      dispatcher.emit('KernelMsgListener/onRecvUDCFlag', ...args)
    },
    onRedTouchChanged(...args) {
      dispatcher.emit('KernelMsgListener/onRedTouchChanged', ...args)
    },
    onTempChatInfoUpdate(...args) {
      dispatcher.emit('KernelMsgListener/onTempChatInfoUpdate', ...args)
    },
    onUserChannelTabStatusChanged(...args) {
      dispatcher.emit('KernelMsgListener/onUserChannelTabStatusChanged', ...args)
    },
    onUserOnlineStatusChanged(...args) {
      dispatcher.emit('KernelMsgListener/onUserOnlineStatusChanged', ...args)
    },
    onUserSecQualityChanged(...args) {
      dispatcher.emit('KernelMsgListener/onUserSecQualityChanged', ...args)
    },
    onUserTabStatusChanged(...args) {
      dispatcher.emit('KernelMsgListener/onUserTabStatusChanged', ...args)
    },
  })
  // 添加事件监听器
  log.info('add listener')
  msgService.addKernelMsgListener(listener)
}