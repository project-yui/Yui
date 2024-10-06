import { randomUUID } from "crypto"
import { NTEventListenerHandle, useStore } from "../../store/store"
import { CurrentAccountInfo, UserDetailInfoType } from "./interfaces"
import { useNTCore } from "../../ntqq/core/core"
import { useNTUserStore } from "../../ntqq/store/user"
import { useLogger } from "../../common/log"
import { CustomError } from "../../server/error/custom-error"

const { registerEventListener } = useStore()
const log = useLogger('Common/User')

export const getUserInfoByUid = (uid: `u_${string}`): Promise<UserDetailInfoType> => {
  return new Promise(async (resolve, reject) => {
    let userInfoListener: {remove: () => void} | null = null
    // 超时拒绝
    let time = setTimeout(() => {
      userInfoListener?.remove()
      reject('getUserInfoByUid timeout')
    }, 30000)
    userInfoListener = registerEventListener(`KernelProfileListener/onUserDetailInfoChanged`, 'always', (payload: UserDetailInfoType) => {
      if (payload.uid !== uid) return;
      // 清除超时计时
      clearTimeout(time)
      resolve(payload)
    })
    const { getWrapperSession } = useNTCore()
    const session = getWrapperSession()
    const service = session.getProfileService()
    const result = await service.getUserDetailInfo(uid)
    log.info(`getUserDetailInfo[${uid}]:`, result)
  })
}

/**
 * 获取机器人的信息
 * 
 * @returns 
 */
export const getBotAccount = () => {
  const { getUserInfo } = useNTUserStore()
  const info = getUserInfo()
  if (!info)
  {
    throw new CustomError(500, 'Failed to get user info')
  }
  return info
}