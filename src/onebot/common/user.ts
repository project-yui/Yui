import { randomUUID } from "crypto"
import { NTEventListenerHandle, useStore } from "../../store/store"
import { CurrentAccountInfo, UserDetailInfoType } from "./interfaces"
import { useNTCore } from "../../ntqq/core/core"
import { useNTUserStore } from "../../ntqq/store/user"
import { useLogger } from "../../common/log"

const { registerEventListener, removeEventListener } = useStore()
const log = useLogger('Common/User')

export const getUserInfoByUid = (uid: `u_${string}`): Promise<UserDetailInfoType> => {
  return new Promise(async (resolve, reject) => {
    let userInfoListener: NTEventListenerHandle | null = null
    // 超时拒绝
    let time = setTimeout(() => {
      if (userInfoListener)
        removeEventListener('KernelProfileListener/onProfileDetailInfoChanged', userInfoListener)
      reject('getUserInfoByUid timeout')
    }, 30000)
    userInfoListener = (payload: UserDetailInfoType) => {

      // 清除超时计时
      clearTimeout(time)
      resolve(payload)
    }
    registerEventListener(`KernelProfileListener/onProfileDetailInfoChanged`, 'once', userInfoListener)
    const { getWrapperSession } = useNTCore()
    const session = getWrapperSession()
    const service = session.getProfileService()
    const result = await service.getUserDetailInfo(uid)
    log.info('getUserDetailInfo:', result)
  })
}

/**
 * 获取机器人的信息
 * 
 * @returns 
 */
export const getBotAccount = () => {
  const { userInfo } = useNTUserStore()
  return userInfo
}