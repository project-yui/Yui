import { randomUUID } from "crypto"
import { useStore } from "../../store/store"
import { sendEvent } from "../event/base"
import { NTFriend } from "./interfaces"


const { registerEventListener } = useStore()
/**
 * 获取好友列表
 * 
 * @returns 好友列表
 */
export const NTGetFriendList = (): Promise<NTFriend.FriendGroupType[]> => {
  return new Promise(async (resolve, reject) => {

    // 订阅好友列表更新事件
    const regResult = await sendEvent('IPC_UP_2', {
      type: 'request',
      callbackId: randomUUID(),
      eventName: 'ns-NodeStoreApi-2-register'
    }, ['onBuddyListChange', null, null])

    // 超时拒绝
    let time = setTimeout(() => {
      reject(new Error('timeout'))
    }, 30000)

    registerEventListener(`IPC_DOWN_2_ns-NodeStoreApi-2_onBuddyListChange`, 'once', (payload: NTFriend.PayloadBuddyList) => {

      // 清除超时计时
      clearTimeout(time)
      resolve(payload.data)
    })
    const reqResult = await sendEvent('IPC_UP_2', {
      type: 'request',
      callbackId: randomUUID(),
      eventName: 'ns-NodeStoreApi-2'
    }, ['getBuddyList', null, null])
    
  })
}
