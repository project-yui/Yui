import { getCurrentNTSelfOrNull } from "../../ntqq/core/runtime-store"
import { KickedOfflinePayload } from "../../ntqq/types/listener/msg"
import { EventDataType } from "../../onebot/contracts/event"

export const buildKickedOfflineEvent = (payload: KickedOfflinePayload): EventDataType<{ p1: KickedOfflinePayload }> | null => {
  const self = getCurrentNTSelfOrNull()
  if (!self) {
    return null
  }
  return {
    self,
    time: Date.now(),
    type: "notice",
    detailType: 'account.kickedOffline',
    subType: "",
    data: {
      p1: payload,
    }
  }
}
