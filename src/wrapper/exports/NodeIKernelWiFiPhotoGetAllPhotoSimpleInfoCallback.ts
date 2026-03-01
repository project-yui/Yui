import { useLogger } from "../../common/log";

const log = useLogger('Wrapper/NodeIKernelWiFiPhotoGetAllPhotoSimpleInfoCallback')
export class NodeIKernelWiFiPhotoGetAllPhotoSimpleInfoCallback {
    protected static singleton?: any = undefined
    protected instance: any
    constructor(instance: any) {
        log.info('constructor called')
        this.instance = instance
    }
    onResult(...args: any[]) {
        log.info('onResult called with args:', args)
        const result = this.instance.onResult(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('onResult called  promise result:', result)
                return res
            })
        }
        log.info('onResult called result:', result)
        return result
    }
};
export const getNodeIKernelWiFiPhotoGetAllPhotoSimpleInfoCallback = (engine: any): any => {
    return class extends NodeIKernelWiFiPhotoGetAllPhotoSimpleInfoCallback {
        
    }
}