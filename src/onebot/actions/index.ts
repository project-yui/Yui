import { initBot } from "./bot/bot"
import { initFriend } from "./friend/friend"
import { initGroup } from "./group/group"

export const initAction = () => {
  initBot()
  initGroup()
  initFriend()
}