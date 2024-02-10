import { initBuddy } from "./service/buddy"
import { initLogin } from "./service/login"

export const initService = () => {
  initLogin()
}