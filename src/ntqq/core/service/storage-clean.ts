import { useLogger } from "../../../common/log"
import { useNTCore } from "../core"
import { useListenerProxy } from "../dispatcher"
import { useNTWrapper } from "./nt-wrapper"

const log = useLogger('RichMedia')

export const initStorageCleanService = () => {
    const { getWrapperSession } = useNTCore()
    const storageClean = getWrapperSession().getStorageCleanService()
    const p = useListenerProxy('KernelMsgListener')
    const wrapper = useNTWrapper()
    storageClean.addKernelStorageCleanListener(new wrapper.NodeIKernelStorageCleanListener(p))
}