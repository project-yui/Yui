import { useLogger } from "../../common/log";

const log = useLogger('Wrapper/NodeIKernelAlbumService')
export class NodeIKernelAlbumService {
    protected static singleton?: any = undefined
    protected instance: any
    constructor(instance: any) {
        log.info('constructor called')
        this.instance = instance
    }
    addAlbum(...args: any[]) {
        log.info('addAlbum called with args:', args)
        const result = this.instance.addAlbum(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('addAlbum called  promise result:', result)
                return res
            })
        }
        log.info('addAlbum called result:', result)
        return result
    }
    deleteAlbum(...args: any[]) {
        log.info('deleteAlbum called with args:', args)
        const result = this.instance.deleteAlbum(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('deleteAlbum called  promise result:', result)
                return res
            })
        }
        log.info('deleteAlbum called result:', result)
        return result
    }
    deleteMedias(...args: any[]) {
        log.info('deleteMedias called with args:', args)
        const result = this.instance.deleteMedias(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('deleteMedias called  promise result:', result)
                return res
            })
        }
        log.info('deleteMedias called result:', result)
        return result
    }
    deleteQunFeed(...args: any[]) {
        log.info('deleteQunFeed called with args:', args)
        const result = this.instance.deleteQunFeed(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('deleteQunFeed called  promise result:', result)
                return res
            })
        }
        log.info('deleteQunFeed called result:', result)
        return result
    }
    doQunComment(...args: any[]) {
        log.info('doQunComment called with args:', args)
        const result = this.instance.doQunComment(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('doQunComment called  promise result:', result)
                return res
            })
        }
        log.info('doQunComment called result:', result)
        return result
    }
    doQunLike(...args: any[]) {
        log.info('doQunLike called with args:', args)
        const result = this.instance.doQunLike(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('doQunLike called  promise result:', result)
                return res
            })
        }
        log.info('doQunLike called result:', result)
        return result
    }
    doQunReply(...args: any[]) {
        log.info('doQunReply called with args:', args)
        const result = this.instance.doQunReply(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('doQunReply called  promise result:', result)
                return res
            })
        }
        log.info('doQunReply called result:', result)
        return result
    }
    getAlbumInfo(...args: any[]) {
        log.info('getAlbumInfo called with args:', args)
        const result = this.instance.getAlbumInfo(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getAlbumInfo called  promise result:', result)
                return res
            })
        }
        log.info('getAlbumInfo called result:', result)
        return result
    }
    getAlbumList(...args: any[]) {
        log.info('getAlbumList called with args:', args)
        const result = this.instance.getAlbumList(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getAlbumList called  promise result:', result)
                return res
            })
        }
        log.info('getAlbumList called result:', result)
        return result
    }
    getAllAlbumList(...args: any[]) {
        log.info('getAllAlbumList called with args:', args)
        const result = this.instance.getAllAlbumList(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getAllAlbumList called  promise result:', result)
                return res
            })
        }
        log.info('getAllAlbumList called result:', result)
        return result
    }
    getFeedById(...args: any[]) {
        log.info('getFeedById called with args:', args)
        const result = this.instance.getFeedById(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getFeedById called  promise result:', result)
                return res
            })
        }
        log.info('getFeedById called result:', result)
        return result
    }
    getMainPage(...args: any[]) {
        log.info('getMainPage called with args:', args)
        const result = this.instance.getMainPage(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getMainPage called  promise result:', result)
                return res
            })
        }
        log.info('getMainPage called result:', result)
        return result
    }
    getMediaList(...args: any[]) {
        log.info('getMediaList called with args:', args)
        const result = this.instance.getMediaList(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getMediaList called  promise result:', result)
                return res
            })
        }
        log.info('getMediaList called result:', result)
        return result
    }
    getMediaListTailTab(...args: any[]) {
        log.info('getMediaListTailTab called with args:', args)
        const result = this.instance.getMediaListTailTab(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getMediaListTailTab called  promise result:', result)
                return res
            })
        }
        log.info('getMediaListTailTab called result:', result)
        return result
    }
    getQunComment(...args: any[]) {
        log.info('getQunComment called with args:', args)
        const result = this.instance.getQunComment(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getQunComment called  promise result:', result)
                return res
            })
        }
        log.info('getQunComment called result:', result)
        return result
    }
    getQunFeedDetail(...args: any[]) {
        log.info('getQunFeedDetail called with args:', args)
        const result = this.instance.getQunFeedDetail(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getQunFeedDetail called  promise result:', result)
                return res
            })
        }
        log.info('getQunFeedDetail called result:', result)
        return result
    }
    getQunFeeds(...args: any[]) {
        log.info('getQunFeeds called with args:', args)
        const result = this.instance.getQunFeeds(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getQunFeeds called  promise result:', result)
                return res
            })
        }
        log.info('getQunFeeds called result:', result)
        return result
    }
    getQunLikes(...args: any[]) {
        log.info('getQunLikes called with args:', args)
        const result = this.instance.getQunLikes(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getQunLikes called  promise result:', result)
                return res
            })
        }
        log.info('getQunLikes called result:', result)
        return result
    }
    getQunNoticeList(...args: any[]) {
        log.info('getQunNoticeList called with args:', args)
        const result = this.instance.getQunNoticeList(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getQunNoticeList called  promise result:', result)
                return res
            })
        }
        log.info('getQunNoticeList called result:', result)
        return result
    }
    getQunRight(...args: any[]) {
        log.info('getQunRight called with args:', args)
        const result = this.instance.getQunRight(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getQunRight called  promise result:', result)
                return res
            })
        }
        log.info('getQunRight called result:', result)
        return result
    }
    getRedPoints(...args: any[]) {
        log.info('getRedPoints called with args:', args)
        const result = this.instance.getRedPoints(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getRedPoints called  promise result:', result)
                return res
            })
        }
        log.info('getRedPoints called result:', result)
        return result
    }
    modifyAlbum(...args: any[]) {
        log.info('modifyAlbum called with args:', args)
        const result = this.instance.modifyAlbum(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('modifyAlbum called  promise result:', result)
                return res
            })
        }
        log.info('modifyAlbum called result:', result)
        return result
    }
    queryQuoteToQunAlbumStatus(...args: any[]) {
        log.info('queryQuoteToQunAlbumStatus called with args:', args)
        const result = this.instance.queryQuoteToQunAlbumStatus(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('queryQuoteToQunAlbumStatus called  promise result:', result)
                return res
            })
        }
        log.info('queryQuoteToQunAlbumStatus called result:', result)
        return result
    }
    quoteToQunAlbum(...args: any[]) {
        log.info('quoteToQunAlbum called with args:', args)
        const result = this.instance.quoteToQunAlbum(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('quoteToQunAlbum called  promise result:', result)
                return res
            })
        }
        log.info('quoteToQunAlbum called result:', result)
        return result
    }
    quoteToQzone(...args: any[]) {
        log.info('quoteToQzone called with args:', args)
        const result = this.instance.quoteToQzone(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('quoteToQzone called  promise result:', result)
                return res
            })
        }
        log.info('quoteToQzone called result:', result)
        return result
    }
    reportViewQunFeed(...args: any[]) {
        log.info('reportViewQunFeed called with args:', args)
        const result = this.instance.reportViewQunFeed(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('reportViewQunFeed called  promise result:', result)
                return res
            })
        }
        log.info('reportViewQunFeed called result:', result)
        return result
    }
    setAlbumServiceInfo(...args: any[]) {
        log.info('setAlbumServiceInfo called with args:', args)
        const result = this.instance.setAlbumServiceInfo(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setAlbumServiceInfo called  promise result:', result)
                return res
            })
        }
        log.info('setAlbumServiceInfo called result:', result)
        return result
    }
};
export const getNodeIKernelAlbumService = (engine: any): any => {
    return class extends NodeIKernelAlbumService {
        
    }
}