import { initAction } from "./actions"
import { initEvent } from "./event"

/**
 * 初始化onebot
 */
export const initOnebot = () => {
  initAction()
  initEvent()
}