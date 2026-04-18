import { useLogger } from "../../common/log"
import { withReadyNTLoginService } from "./runtime"

const log = useLogger('NTQQ/Login/qrcode')
/**
 * 获取登录二维码
 * @returns 二维码信息
 */
export const NTGetLoginQrCode = async () => {
  log.info('NTGetLoginQrCode')
  return withReadyNTLoginService(async (loginService) => {
    const result = loginService.getQRCodePicture()
    log.info('get qrcode:', result)
    return result
  })
}
