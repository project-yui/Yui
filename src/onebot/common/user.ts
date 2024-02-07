import { randomUUID } from "crypto"
import { NTEventListenerHandle, useStore } from "../../store/store"
import { CurrentAccountInfo, UserDetailInfoType } from "./interfaces"
import { sendEvent } from "../../ntqq/event/base"
import { useNTStore } from "../../ntqq/core/store"

const { registerEventListener, removeEventListener } = useStore()

export const getUserInfoByUid = (uid: `u_${string}`): Promise<UserDetailInfoType> => {
  return new Promise(async (resolve, reject) => {
    let userInfoListener: NTEventListenerHandle | null = null
    // 超时拒绝
    let time = setTimeout(() => {
      if (userInfoListener)
        removeEventListener('KernelProfileListener/onProfileDetailInfoChanged', userInfoListener)
      reject('timeout')
    }, 30000)
    userInfoListener = (payload: UserDetailInfoType) => {

      // 清除超时计时
      clearTimeout(time)
      resolve(payload)
    }
    registerEventListener(`KernelProfileListener/onProfileDetailInfoChanged`, 'once', userInfoListener)
    const { getWrapperSession } = useNTStore()
    const session = getWrapperSession()
    const service = session.getProfileService()
    const result = await service.getUserDetailInfo(uid)
    
  })
}

/**
 * 获取机器人的信息
 * 
 * @returns 
 */
export const getBotAccount = async (): Promise<CurrentAccountInfo> => {
  const regResult = await sendEvent<null, CurrentAccountInfo>('IPC_UP_2', {
    type: 'request',
    callbackId: randomUUID(),
    eventName: 'ns-GlobalDataApi-2'
  }, ['fetchAuthData', null, null])
  return regResult.data
}