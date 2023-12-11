import { initAction } from "./actions"
import { initEvent } from "./event"

export const initOnebot = () => {
  initAction()
  initEvent()
}