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
        const result = this.instance.addKernelOnlineStatusListener(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('addKernelOnlineStatusListener called  promise result:', result)
                return res
            })
        }
        log.info('addKernelOnlineStatusListener called result:', result)
        return result
    }
    checkLikeStatus(...args: any[]) {
        log.info('checkLikeStatus called with args:', args)
        const result = this.instance.checkLikeStatus(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('checkLikeStatus called  promise result:', result)
                return res
            })
        }
        log.info('checkLikeStatus called result:', result)
        return result
    }
    didClickAggregationPageEntrance(...args: any[]) {
        log.info('didClickAggregationPageEntrance called with args:', args)
        const result = this.instance.didClickAggregationPageEntrance(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('didClickAggregationPageEntrance called  promise result:', result)
                return res
            })
        }
        log.info('didClickAggregationPageEntrance called result:', result)
        return result
    }
    getAggregationGroupModels(...args: any[]) {
        log.info('getAggregationGroupModels called with args:', args)
        const result = this.instance.getAggregationGroupModels(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getAggregationGroupModels called  promise result:', result)
                return res
            })
        }
        log.info('getAggregationGroupModels called result:', result)
        return result
    }
    getAggregationPageEntrance(...args: any[]) {
        log.info('getAggregationPageEntrance called with args:', args)
        const result = this.instance.getAggregationPageEntrance(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getAggregationPageEntrance called  promise result:', result)
                return res
            })
        }
        log.info('getAggregationPageEntrance called result:', result)
        return result
    }
    getLikeList(...args: any[]) {
        log.info('getLikeList called with args:', args)
        const result = this.instance.getLikeList(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getLikeList called  promise result:', result)
                return res
            })
        }
        log.info('getLikeList called result:', result)
        return result
    }
    getShouldShowAIOStatusAnimation(...args: any[]) {
        log.info('getShouldShowAIOStatusAnimation called with args:', args)
        const result = this.instance.getShouldShowAIOStatusAnimation(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getShouldShowAIOStatusAnimation called  promise result:', result)
                return res
            })
        }
        log.info('getShouldShowAIOStatusAnimation called result:', result)
        return result
    }
    removeKernelOnlineStatusListener(...args: any[]) {
        log.info('removeKernelOnlineStatusListener called with args:', args)
        const result = this.instance.removeKernelOnlineStatusListener(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('removeKernelOnlineStatusListener called  promise result:', result)
                return res
            })
        }
        log.info('removeKernelOnlineStatusListener called result:', result)
        return result
    }
    setLikeStatus(...args: any[]) {
        log.info('setLikeStatus called with args:', args)
        const result = this.instance.setLikeStatus(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setLikeStatus called  promise result:', result)
                return res
            })
        }
        log.info('setLikeStatus called result:', result)
        return result
    }
    setOnlineStatusLiteBusinessSwitch(...args: any[]) {
        log.info('setOnlineStatusLiteBusinessSwitch called with args:', args)
        const result = this.instance.setOnlineStatusLiteBusinessSwitch(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setOnlineStatusLiteBusinessSwitch called  promise result:', result)
                return res
            })
        }
        log.info('setOnlineStatusLiteBusinessSwitch called result:', result)
        return result
    }
    setReadLikeList(...args: any[]) {
        log.info('setReadLikeList called with args:', args)
        const result = this.instance.setReadLikeList(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setReadLikeList called  promise result:', result)
                return res
            })
        }
        log.info('setReadLikeList called result:', result)
        return result
    }
};
export const getNodeIKernelOnlineStatusService = (engine: any): any => {
    return class extends NodeIKernelOnlineStatusService {
        
    }
}