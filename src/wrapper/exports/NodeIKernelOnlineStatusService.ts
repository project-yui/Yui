import { useLogger } from "../../common/log";
const log = useLogger('Wrapper/NodeIKernelOnlineStatusService')
export class NodeIKernelOnlineStatusService {
    protected static singleton?: any = undefined
    protected instance: any
    constructor(instance: any) {
        log.info('constructor called')
        this.instance = instance
    }
    addKernelOnlineStatusListener(...args: any[]) {
        log.info('addKernelOnlineStatusListener called with args:', args)
        return this.instance.addKernelOnlineStatusListener(...args)
    }
    checkLikeStatus(...args: any[]) {
        log.info('checkLikeStatus called with args:', args)
        return this.instance.checkLikeStatus(...args)
    }
    didClickAggregationPageEntrance(...args: any[]) {
        log.info('didClickAggregationPageEntrance called with args:', args)
        return this.instance.didClickAggregationPageEntrance(...args)
    }
    getAggregationGroupModels(...args: any[]) {
        log.info('getAggregationGroupModels called with args:', args)
        return this.instance.getAggregationGroupModels(...args)
    }
    getAggregationPageEntrance(...args: any[]) {
        log.info('getAggregationPageEntrance called with args:', args)
        return this.instance.getAggregationPageEntrance(...args)
    }
    getLikeList(...args: any[]) {
        log.info('getLikeList called with args:', args)
        return this.instance.getLikeList(...args)
    }
    getShouldShowAIOStatusAnimation(...args: any[]) {
        log.info('getShouldShowAIOStatusAnimation called with args:', args)
        return this.instance.getShouldShowAIOStatusAnimation(...args)
    }
    removeKernelOnlineStatusListener(...args: any[]) {
        log.info('removeKernelOnlineStatusListener called with args:', args)
        return this.instance.removeKernelOnlineStatusListener(...args)
    }
    setLikeStatus(...args: any[]) {
        log.info('setLikeStatus called with args:', args)
        return this.instance.setLikeStatus(...args)
    }
    setOnlineStatusLiteBusinessSwitch(...args: any[]) {
        log.info('setOnlineStatusLiteBusinessSwitch called with args:', args)
        return this.instance.setOnlineStatusLiteBusinessSwitch(...args)
    }
    setReadLikeList(...args: any[]) {
        log.info('setReadLikeList called with args:', args)
        return this.instance.setReadLikeList(...args)
    }
};
export const getNodeIKernelOnlineStatusService = (engine: any): any => {
    return class extends NodeIKernelOnlineStatusService {
        static get() {
            log.info('get called')
            const instance = engine.get()
            if (!this.singleton) {
                this.singleton = new this(instance)
            }
            return this.singleton
        }
    }
}