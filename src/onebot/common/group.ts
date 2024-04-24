import { randomUUID } from "crypto"
import { NTEventListenerHandle, useStore } from "../../store/store"
import { CurrentAccountInfo, GroupDetailInfoType, GroupMemberDetailInfoType, UserDetailInfoType } from "./interfaces"
import { useNTCore } from "../../ntqq/core/core"
import { useNTUserStore } from "../../ntqq/store/user"
import { useLogger } from "../../common/log"
import { CustomError } from "../../server/error/custom-error"

const { registerEventListener, removeEventListener } = useStore()
const log = useLogger('Common/User')

export const getGroupInfoById = (gid: number): Promise<GroupDetailInfoType> => {
  return new Promise(async (resolve, reject) => {
    let remover: { remove: () => void } | null = null
    // 超时拒绝
    let time = setTimeout(() => {
      if (remover)
        remover?.remove()
      reject('getUserInfoByUid timeout')
    }, 30000)
    remover = registerEventListener(`KernelGroupListener/onGroupDetailInfoChange`, 'always', (payload: GroupDetailInfoType) => {
      if (payload.groupCode !== `${gid}`) return
      remover?.remove()
      // 清除超时计时
      clearTimeout(time)
      resolve(payload)
    })
    const { getWrapperSession } = useNTCore()
    const session = getWrapperSession()
    const service = session.getGroupService()
    const result = await service.getGroupDetailInfo(`${gid}`, 1)
    log.info(`getGroupDetailInfo[${gid}]:`, result)
  })
}

/**
 * 
 * @param gid 群号
 * @param uid 用户id
 * @returns 
 */
export const getGroupMemberInfoByUin = async (gid: number, uin: number): Promise<GroupMemberDetailInfoType> => {
  log.info('getGroupMemberInfoByUin', gid, uin)
  const { getWrapperSession } = useNTCore()
  const session = getWrapperSession()
  const convert = session.getUixConvertService()
  const info = await convert.getUid([`${uin}`])
  log.info('get uid:', info)
  const uid = info?.uidInfo?.get(`${uin}`)
  if (!uid) {
    throw new CustomError(1, 'Failed to get uid by uin!')
  }
  return await getGroupMemberInfoByUid(gid, uid)
}
/**
 * 
 * @param gid 群号
 * @param uid 用户id
 * @returns 
 */
export const getGroupMemberInfoByUid = (gid: number, uid: `u_${string}`): Promise<GroupMemberDetailInfoType> => {
  log.info('getGroupMemberInfoByUid', gid, uid)
  return new Promise(async (resolve, reject) => {
    let remover: { remove: () => void } | null = null
    // 超时拒绝
    let time = setTimeout(() => {
      if (remover)
        remover?.remove()
      reject('getGroupMemberInfoByUid timeout')
    }, 30000)
    remover = registerEventListener(`KernelGroupListener/onMemberInfoChange`, 'always', (groupId: `${number}`, b: number, payload: Map<`u_${string}`, GroupMemberDetailInfoType>) => {
      if (groupId !== `${gid}`) return
      if (!payload.has(uid)) return
      remover?.remove()
      // 清除超时计时
      clearTimeout(time)
      const result = payload.get(uid)
      if (!result) {
        log.error('info:', result, 'payload:', payload)
        throw new CustomError(1, 'Failed to get member info!')
      }
      resolve(result)
    })
    const { getWrapperSession } = useNTCore()
    const session = getWrapperSession()
    const service = session.getGroupService()
    const result = await service.getMemberInfo(`${gid}`, [uid], true)
    log.info(`getGroupMemberInfoByUid[${gid}]:`, result)
  })
}
