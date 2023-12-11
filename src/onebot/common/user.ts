import { randomUUID } from "crypto"
import { NTEventListenerHandle, useStore } from "../../store/store"
import { CurrentAccountInfo, UserDetailInfoType } from "./interfaces"
import { sendEvent } from "../../ntqq/event/base"

const { registerEventListener, removeEventListener } = useStore()

export const getUserInfoByUid = (uid: `u_${string}`): Promise<UserDetailInfoType> => {
  return new Promise(async (resolve, reject) => {
    let userInfoListener: NTEventListenerHandle | null = null
    // 超时拒绝
    let time = setTimeout(() => {
      if (userInfoListener)
        removeEventListener('IPC_DOWN_2_ns-ntApi-2_nodeIKernelProfileListener/onProfileDetailInfoChanged', userInfoListener)
      reject('timeout')
    }, 30000)
    userInfoListener = (payload: UserDetailInfoType) => {

      // 清除超时计时
      clearTimeout(time)
      resolve(payload)
    }
    registerEventListener(`IPC_DOWN_2_ns-ntApi-2_nodeIKernelProfileListener/onProfileDetailInfoChanged`, 'once', userInfoListener)
    const regResult = await sendEvent('IPC_UP_2', {
      type: 'request',
      callbackId: randomUUID(),
      eventName: 'ns-ntApi-2'
    }, ['nodeIKernelProfileService/getUserDetailInfo', {"uid": uid}, null])

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