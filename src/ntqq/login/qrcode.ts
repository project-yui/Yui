import { randomUUID } from "crypto"
import { useStore } from "../../store/store"
import { sendEvent } from "../event/base"
import { NTLogin } from "./interfaces"

const { registerEventListener } = useStore()

/**
 * 获取登录二维码
 * @returns 二维码信息
 */
export const NTGetLoginQrCode = (): Promise<NTLogin.GetQRCodeResponse> => {
  return new Promise(async (resolve, reject) => {
    const getQrCode = registerEventListener('IPC_DOWN_1_ns-ntApi-1_nodeIKernelLoginListener/onQRCodeGetPicture', 'once', (payload: NTLogin.GetQRCodeResponse) => {
      resolve(payload)
    })
    const resp = await sendEvent<null, boolean>('IPC_UP_1', {
      type: "request",
      callbackId: randomUUID(),
      eventName: "ns-ntApi-1"
    }, [
      'nodeIKernelLoginService/getQRCodePicture',
      null,
      null
    ])
    if (!resp.data) {
      // 移除监听
      getQrCode.remove()
      // 二维码获取失败
      reject(null)
    }

  })
}