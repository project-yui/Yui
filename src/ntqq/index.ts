import { prepareBaseEnvironment } from "./core/prepare"
import { initService } from "./core/service"

/**
 * 初始化NTQQ
 * 
 * @param id QQ号
 */
export const NTInitialize = () => {
  prepareBaseEnvironment()
  initService()
}