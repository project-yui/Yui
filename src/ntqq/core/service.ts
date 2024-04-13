import { initBuddyService } from "./service/buddy"
import { initLogin } from "./service/login"

export const initService = () => {
  initLogin()
}