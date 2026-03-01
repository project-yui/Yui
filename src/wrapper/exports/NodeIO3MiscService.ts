import { useLogger } from "../../common/log";

const log = useLogger('Wrapper/NodeIO3MiscService')
export class NodeIO3MiscService {
    protected static singleton?: any = undefined
    protected instance: any
    constructor(instance: any) {
        log.info('constructor called')
        this.instance = instance
    }
    addO3MiscListener(...args: any[]) {
        log.info('addO3MiscListener called with args:', args)
        const result = this.instance.addO3MiscListener(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('addO3MiscListener called  promise result:', result)
                return res
            })
        }
        log.info('addO3MiscListener called result:', result)
        return result
    }
    passthroughO3Data(...args: any[]) {
        log.info('passthroughO3Data called with args:', args)
        const result = this.instance.passthroughO3Data(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('passthroughO3Data called  promise result:', result)
                return res
            })
        }
        log.info('passthroughO3Data called result:', result)
        return result
    }
    removeO3MiscListener(...args: any[]) {
        log.info('removeO3MiscListener called with args:', args)
        const result = this.instance.removeO3MiscListener(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('removeO3MiscListener called  promise result:', result)
                return res
            })
        }
        log.info('removeO3MiscListener called result:', result)
        return result
    }
    reportAmgomWeather(...args: any[]) {
        log.info('reportAmgomWeather called with args:', args)
        const result = this.instance.reportAmgomWeather(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('reportAmgomWeather called  promise result:', result)
                return res
            })
        }
        log.info('reportAmgomWeather called result:', result)
        return result
    }
    reportCameraToO3(...args: any[]) {
        log.info('reportCameraToO3 called with args:', args)
        const result = this.instance.reportCameraToO3(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('reportCameraToO3 called  promise result:', result)
                return res
            })
        }
        log.info('reportCameraToO3 called result:', result)
        return result
    }
    setAmgomDataPiece(...args: any[]) {
        log.info('setAmgomDataPiece called with args:', args)
        const result = this.instance.setAmgomDataPiece(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setAmgomDataPiece called  promise result:', result)
                return res
            })
        }
        log.info('setAmgomDataPiece called result:', result)
        return result
    }
};
export const getNodeIO3MiscService = (engine: any): any => {
    return class extends NodeIO3MiscService {
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