import { useLogger } from "../../common/log"
import { initBuddyService } from "./service/buddy"
import { initGroupService } from "./service/group"
import { initMsgService } from "./service/msg"
import { initProfileService } from "./service/profile"
import { initStorageCleanService } from "./service/storage-clean"
import { initUnitedConfig } from "./service/united-config"

const log = useLogger('NTCore/PostLoginServices')

let ntPostLoginServicesInitialized = false

const initializeNTPostLoginConfigPhase = () => {
  log.info('phase: init united config')
  initUnitedConfig()
}

const initializeNTPostLoginMessagingPhase = async () => {
  log.info('phase: init msg service')
  await initMsgService()
}

const initializeNTPostLoginProfilePhase = () => {
  log.info('phase: init profile service')
  initProfileService()
}

const initializeNTPostLoginGroupPhase = () => {
  log.info('phase: init group service')
  initGroupService()
}

const initializeNTPostLoginBuddyPhase = () => {
  log.info('phase: init buddy service')
  initBuddyService()
}

const initializeNTPostLoginStoragePhase = () => {
  log.info('phase: init storage clean service')
  initStorageCleanService()
}

const runNTPostLoginServicePhases = async () => {
  initializeNTPostLoginConfigPhase()
  await initializeNTPostLoginMessagingPhase()
  initializeNTPostLoginProfilePhase()
  initializeNTPostLoginGroupPhase()
  initializeNTPostLoginBuddyPhase()
  initializeNTPostLoginStoragePhase()
}

export const initializeNTPostLoginServices = async () => {
  if (ntPostLoginServicesInitialized) {
    log.info('phase: post-login services already initialized')
    return
  }

  await runNTPostLoginServicePhases()
  ntPostLoginServicesInitialized = true
}

export const resetNTPostLoginServicesState = () => {
  ntPostLoginServicesInitialized = false
}
