import { randomUUID } from "crypto"
import { useStore } from "../../store/store"
import { NTLogin } from "./interfaces"
import { useNTCore } from "../core/core"
import { sleep } from "../../common/utils"
import { useLogger } from "../../common/log"

const { registerEventListener } = useStore()

const log = useLogger('NTQQ/Login/qrcode')
/**
 * 获取登录二维码
 * @returns 二维码信息
 */
export const NTGetLoginQrCode = (): Promise<NTLogin.GetQRCodeResponse> => {
  log.info('NTGetLoginQrCode')
  return new Promise(async (resolve, reject) => {
    const getQrCode = registerEventListener('KernelLoginListener/onQRCodeGetPicture', 'once', (payload: NTLogin.GetQRCodeResponse) => {
      resolve(payload)
    })
    const { getLoginService } = useNTCore()
    await sleep(2000)
    const login = getLoginService()
    log.info('get qrcode:', login.getQRCodePicture())

  })
}