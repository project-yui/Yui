import { useLogger } from "../../../common/log"
import { getNTStorageCleanService } from "../core"
import { bindRuntimeServiceKernelListener } from "./bind-kernel-listener"

const log = useLogger('RichMedia')

export const initStorageCleanService = () => {
    bindRuntimeServiceKernelListener({
        listenerName: 'KernelStorageCleanListener',
        getService: getNTStorageCleanService,
        attach: (service, listener) => service.addKernelStorageCleanListener(listener),
    })
}
