import { NodeIKernelBuddyListener } from "ntwrapper"
import { useNTCore } from "../core"
import { useNTDispatcher } from "../dispatcher"
import { useLogger } from "../../../common/log"

const dispatcher = useNTDispatcher()
const log = useLogger('BuddyService')

/**
 * 初始化好友服务
 * 
 * 登陆后调用
 */
export const initBuddy = () => {
  const { getWrapperSession } = useNTCore()
  const buddy = getWrapperSession().getBuddyService()
  const listener = new NodeIKernelBuddyListener({
    onBuddyListChange(...args) {
      log.info('KernelBuddyListener/onBuddyListChange', ...args)
      dispatcher.emit('KernelBuddyListener/onBuddyListChange', ...args)
    },
    onBuddyInfoChange(...args) {
      log.info('KernelBuddyListener/onBuddyInfoChange', ...args)
      dispatcher.emit('KernelBuddyListener/onBuddyInfoChange', ...args)
    },
    onBuddyDetailInfoChange(...args) {
      log.info('KernelBuddyListener/onBuddyDetailInfoChange', ...args)
      dispatcher.emit('KernelBuddyListener/onBuddyDetailInfoChange', ...args)
    },
    onNickUpdated(...args) {
      log.info('KernelBuddyListener/onNickUpdated', ...args)
      dispatcher.emit('KernelBuddyListener/onNickUpdated', ...args)
    },
    onBuddyRemarkUpdated(...args) {
      log.info('KernelBuddyListener/onBuddyRemarkUpdated', ...args)
      dispatcher.emit('KernelBuddyListener/onBuddyRemarkUpdated', ...args)
    },
    onAvatarUrlUpdated(...args) {
      log.info('KernelBuddyListener/onAvatarUrlUpdated', ...args)
      dispatcher.emit('KernelBuddyListener/onAvatarUrlUpdated', ...args)
    },
    onBuddyReqChange(...args) {
      log.info('KernelBuddyListener/onBuddyReqChange', ...args)
      dispatcher.emit('KernelBuddyListener/onBuddyReqChange', ...args)
    },
    onBuddyReqUnreadCntChange(...args) {
      log.info('KernelBuddyListener/onBuddyReqUnreadCntChange', ...args)
      dispatcher.emit('KernelBuddyListener/onBuddyReqUnreadCntChange', ...args)
    },
    onCheckBuddySettingResult(...args) {
      log.info('KernelBuddyListener/onCheckBuddySettingResult', ...args)
      dispatcher.emit('KernelBuddyListener/onCheckBuddySettingResult', ...args)
    },
    onAddBuddyNeedVerify(...args) {
      log.info('KernelBuddyListener/onAddBuddyNeedVerify', ...args)
      dispatcher.emit('KernelBuddyListener/onAddBuddyNeedVerify', ...args)
    },
    onSmartInfos(...args) {
      log.info('KernelBuddyListener/onSmartInfos', ...args)
      dispatcher.emit('KernelBuddyListener/onSmartInfos', ...args)
    },
    onSpacePermissionInfos(...args) {
      log.info('KernelBuddyListener/onSpacePermissionInfos', ...args)
      dispatcher.emit('KernelBuddyListener/onSpacePermissionInfos', ...args)
    },
    onDoubtBuddyReqChange(...args) {
      log.info('KernelBuddyListener/onDoubtBuddyReqChange', ...args)
      dispatcher.emit('KernelBuddyListener/onDoubtBuddyReqChange', ...args)
    },
    onDoubtBuddyReqUnreadNumChange(...args) {
      log.info('KernelBuddyListener/onDoubtBuddyReqUnreadNumChange', ...args)
      dispatcher.emit('KernelBuddyListener/onDoubtBuddyReqUnreadNumChange', ...args)
    },
    onBlockChanged(...args) {
      log.info('KernelBuddyListener/onBlockChanged', ...args)
      dispatcher.emit('KernelBuddyListener/onBlockChanged', ...args)
    },
    onAddMeSettingChanged(...args) {
      log.info('KernelBuddyListener/onAddMeSettingChanged', ...args)
      dispatcher.emit('KernelBuddyListener/onAddMeSettingChanged', ...args)
    },
    onDelBatchBuddyInfos(...args) {
      log.info('KernelBuddyListener/onDelBatchBuddyInfos', ...args)
      dispatcher.emit('KernelBuddyListener/onDelBatchBuddyInfos', ...args)
    }
  })
  buddy.addKernelBuddyListener(listener)
}