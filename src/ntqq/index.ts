import { prepareBaseEnvironment } from "./core/prepare"
import { initService } from "./core/service"

/**
 * 初始化NTQQ
 */
export const initNTQQ = () => {
  prepareBaseEnvironment()
  initService()
}