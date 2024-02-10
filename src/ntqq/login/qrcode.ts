import { randomUUID } from "crypto"
import { useStore } from "../../store/store"
import { NTLogin } from "./interfaces"
import { useNTCore } from "../core/core"

const { registerEventListener } = useStore()

/**
 * 获取登录二维码
 * @returns 二维码信息
 */
export const NTGetLoginQrCode = (): Promise<NTLogin.GetQRCodeResponse> => {
  return new Promise(async (resolve, reject) => {
    const getQrCode = registerEventListener('KernelLoginListener/onQRCodeGetPicture', 'once', (payload: NTLogin.GetQRCodeResponse) => {
      resolve(payload)
    })
    const { getLoginService } = useNTCore()
    const login = getLoginService()
    login.getQRCodePicture()

  })
}