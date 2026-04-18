import { broadcast } from "../ws/connection-manager"
import { EventDataType } from "../../onebot/contracts/event"

export const sendOneBotEvent = <T>(event: EventDataType<T>) => {
  broadcast(event)
}
