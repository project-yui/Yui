import { useLogger } from "../../common/log";

const log = useLogger('Wrapper/NodeIKernelPersonalAlbumService')
export class NodeIKernelPersonalAlbumService {
    protected static singleton?: any = undefined
    protected instance: any
    constructor(instance: any) {
        log.info('constructor called')
        this.instance = instance
    }
    addAlbumPermissions(...args: any[]) {
        log.info('addAlbumPermissions called with args:', args)
        const result = this.instance.addAlbumPermissions(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('addAlbumPermissions called  promise result:', result)
                return res
            })
        }
        log.info('addAlbumPermissions called result:', result)
        return result
    }
    addComment(...args: any[]) {
        log.info('addComment called with args:', args)
        const result = this.instance.addComment(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('addComment called  promise result:', result)
                return res
            })
        }
        log.info('addComment called result:', result)
        return result
    }
    addReply(...args: any[]) {
        log.info('addReply called with args:', args)
        const result = this.instance.addReply(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('addReply called  promise result:', result)
                return res
            })
        }
        log.info('addReply called result:', result)
        return result
    }
    cloneBatchMedia(...args: any[]) {
        log.info('cloneBatchMedia called with args:', args)
        const result = this.instance.cloneBatchMedia(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('cloneBatchMedia called  promise result:', result)
                return res
            })
        }
        log.info('cloneBatchMedia called result:', result)
        return result
    }
    createAlbum(...args: any[]) {
        log.info('createAlbum called with args:', args)
        const result = this.instance.createAlbum(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('createAlbum called  promise result:', result)
                return res
            })
        }
        log.info('createAlbum called result:', result)
        return result
    }
    delBatchPhoto(...args: any[]) {
        log.info('delBatchPhoto called with args:', args)
        const result = this.instance.delBatchPhoto(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('delBatchPhoto called  promise result:', result)
                return res
            })
        }
        log.info('delBatchPhoto called result:', result)
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
    deleteAlbumMedia(...args: any[]) {
        log.info('deleteAlbumMedia called with args:', args)
        const result = this.instance.deleteAlbumMedia(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('deleteAlbumMedia called  promise result:', result)
                return res
            })
        }
        log.info('deleteAlbumMedia called result:', result)
        return result
    }
    deleteComment(...args: any[]) {
        log.info('deleteComment called with args:', args)
        const result = this.instance.deleteComment(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('deleteComment called  promise result:', result)
                return res
            })
        }
        log.info('deleteComment called result:', result)
        return result
    }
    deleteReply(...args: any[]) {
        log.info('deleteReply called with args:', args)
        const result = this.instance.deleteReply(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('deleteReply called  promise result:', result)
                return res
            })
        }
        log.info('deleteReply called result:', result)
        return result
    }
    doLike(...args: any[]) {
        log.info('doLike called with args:', args)
        const result = this.instance.doLike(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('doLike called  promise result:', result)
                return res
            })
        }
        log.info('doLike called result:', result)
        return result
    }
    editAlbum(...args: any[]) {
        log.info('editAlbum called with args:', args)
        const result = this.instance.editAlbum(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('editAlbum called  promise result:', result)
                return res
            })
        }
        log.info('editAlbum called result:', result)
        return result
    }
    editBatchMedia(...args: any[]) {
        log.info('editBatchMedia called with args:', args)
        const result = this.instance.editBatchMedia(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('editBatchMedia called  promise result:', result)
                return res
            })
        }
        log.info('editBatchMedia called result:', result)
        return result
    }
    editTravelAlbumScence(...args: any[]) {
        log.info('editTravelAlbumScence called with args:', args)
        const result = this.instance.editTravelAlbumScence(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('editTravelAlbumScence called  promise result:', result)
                return res
            })
        }
        log.info('editTravelAlbumScence called result:', result)
        return result
    }
    forwardAlbumToQzone(...args: any[]) {
        log.info('forwardAlbumToQzone called with args:', args)
        const result = this.instance.forwardAlbumToQzone(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('forwardAlbumToQzone called  promise result:', result)
                return res
            })
        }
        log.info('forwardAlbumToQzone called result:', result)
        return result
    }
    getAlbumInviteJoinPage(...args: any[]) {
        log.info('getAlbumInviteJoinPage called with args:', args)
        const result = this.instance.getAlbumInviteJoinPage(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getAlbumInviteJoinPage called  promise result:', result)
                return res
            })
        }
        log.info('getAlbumInviteJoinPage called result:', result)
        return result
    }
    getAlbumJoinApprovalPage(...args: any[]) {
        log.info('getAlbumJoinApprovalPage called with args:', args)
        const result = this.instance.getAlbumJoinApprovalPage(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getAlbumJoinApprovalPage called  promise result:', result)
                return res
            })
        }
        log.info('getAlbumJoinApprovalPage called result:', result)
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
    getAlbumMemberList(...args: any[]) {
        log.info('getAlbumMemberList called with args:', args)
        const result = this.instance.getAlbumMemberList(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getAlbumMemberList called  promise result:', result)
                return res
            })
        }
        log.info('getAlbumMemberList called result:', result)
        return result
    }
    getCommentList(...args: any[]) {
        log.info('getCommentList called with args:', args)
        const result = this.instance.getCommentList(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getCommentList called  promise result:', result)
                return res
            })
        }
        log.info('getCommentList called result:', result)
        return result
    }
    getLayerTailpageRecommend(...args: any[]) {
        log.info('getLayerTailpageRecommend called with args:', args)
        const result = this.instance.getLayerTailpageRecommend(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getLayerTailpageRecommend called  promise result:', result)
                return res
            })
        }
        log.info('getLayerTailpageRecommend called result:', result)
        return result
    }
    getPhotoList(...args: any[]) {
        log.info('getPhotoList called with args:', args)
        const result = this.instance.getPhotoList(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getPhotoList called  promise result:', result)
                return res
            })
        }
        log.info('getPhotoList called result:', result)
        return result
    }
    getPhotoListByTimeLine(...args: any[]) {
        log.info('getPhotoListByTimeLine called with args:', args)
        const result = this.instance.getPhotoListByTimeLine(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getPhotoListByTimeLine called  promise result:', result)
                return res
            })
        }
        log.info('getPhotoListByTimeLine called result:', result)
        return result
    }
    getPhotoTab(...args: any[]) {
        log.info('getPhotoTab called with args:', args)
        const result = this.instance.getPhotoTab(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getPhotoTab called  promise result:', result)
                return res
            })
        }
        log.info('getPhotoTab called result:', result)
        return result
    }
    getPhotoTabByTimeLine(...args: any[]) {
        log.info('getPhotoTabByTimeLine called with args:', args)
        const result = this.instance.getPhotoTabByTimeLine(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getPhotoTabByTimeLine called  promise result:', result)
                return res
            })
        }
        log.info('getPhotoTabByTimeLine called result:', result)
        return result
    }
    getShareInfo(...args: any[]) {
        log.info('getShareInfo called with args:', args)
        const result = this.instance.getShareInfo(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getShareInfo called  promise result:', result)
                return res
            })
        }
        log.info('getShareInfo called result:', result)
        return result
    }
    getVideoTab(...args: any[]) {
        log.info('getVideoTab called with args:', args)
        const result = this.instance.getVideoTab(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getVideoTab called  promise result:', result)
                return res
            })
        }
        log.info('getVideoTab called result:', result)
        return result
    }
    getVideoTabByTimeLine(...args: any[]) {
        log.info('getVideoTabByTimeLine called with args:', args)
        const result = this.instance.getVideoTabByTimeLine(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getVideoTabByTimeLine called  promise result:', result)
                return res
            })
        }
        log.info('getVideoTabByTimeLine called result:', result)
        return result
    }
    inviteCheckForLoversAlbum(...args: any[]) {
        log.info('inviteCheckForLoversAlbum called with args:', args)
        const result = this.instance.inviteCheckForLoversAlbum(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('inviteCheckForLoversAlbum called  promise result:', result)
                return res
            })
        }
        log.info('inviteCheckForLoversAlbum called result:', result)
        return result
    }
    joinShareAlbum(...args: any[]) {
        log.info('joinShareAlbum called with args:', args)
        const result = this.instance.joinShareAlbum(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('joinShareAlbum called  promise result:', result)
                return res
            })
        }
        log.info('joinShareAlbum called result:', result)
        return result
    }
    moveBatchMedia(...args: any[]) {
        log.info('moveBatchMedia called with args:', args)
        const result = this.instance.moveBatchMedia(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('moveBatchMedia called  promise result:', result)
                return res
            })
        }
        log.info('moveBatchMedia called result:', result)
        return result
    }
    moveBatchPhoto(...args: any[]) {
        log.info('moveBatchPhoto called with args:', args)
        const result = this.instance.moveBatchPhoto(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('moveBatchPhoto called  promise result:', result)
                return res
            })
        }
        log.info('moveBatchPhoto called result:', result)
        return result
    }
    queryAlbum(...args: any[]) {
        log.info('queryAlbum called with args:', args)
        const result = this.instance.queryAlbum(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('queryAlbum called  promise result:', result)
                return res
            })
        }
        log.info('queryAlbum called result:', result)
        return result
    }
    quitSharedAlbum(...args: any[]) {
        log.info('quitSharedAlbum called with args:', args)
        const result = this.instance.quitSharedAlbum(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('quitSharedAlbum called  promise result:', result)
                return res
            })
        }
        log.info('quitSharedAlbum called result:', result)
        return result
    }
    removeAlbumMember(...args: any[]) {
        log.info('removeAlbumMember called with args:', args)
        const result = this.instance.removeAlbumMember(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('removeAlbumMember called  promise result:', result)
                return res
            })
        }
        log.info('removeAlbumMember called result:', result)
        return result
    }
    respondToJoinRequest(...args: any[]) {
        log.info('respondToJoinRequest called with args:', args)
        const result = this.instance.respondToJoinRequest(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('respondToJoinRequest called  promise result:', result)
                return res
            })
        }
        log.info('respondToJoinRequest called result:', result)
        return result
    }
    sendAlbumInvitation(...args: any[]) {
        log.info('sendAlbumInvitation called with args:', args)
        const result = this.instance.sendAlbumInvitation(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('sendAlbumInvitation called  promise result:', result)
                return res
            })
        }
        log.info('sendAlbumInvitation called result:', result)
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
    setTopAlbum(...args: any[]) {
        log.info('setTopAlbum called with args:', args)
        const result = this.instance.setTopAlbum(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('setTopAlbum called  promise result:', result)
                return res
            })
        }
        log.info('setTopAlbum called result:', result)
        return result
    }
    sortPic(...args: any[]) {
        log.info('sortPic called with args:', args)
        const result = this.instance.sortPic(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('sortPic called  promise result:', result)
                return res
            })
        }
        log.info('sortPic called result:', result)
        return result
    }
    unLike(...args: any[]) {
        log.info('unLike called with args:', args)
        const result = this.instance.unLike(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('unLike called  promise result:', result)
                return res
            })
        }
        log.info('unLike called result:', result)
        return result
    }
    updateAlbumMember(...args: any[]) {
        log.info('updateAlbumMember called with args:', args)
        const result = this.instance.updateAlbumMember(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('updateAlbumMember called  promise result:', result)
                return res
            })
        }
        log.info('updateAlbumMember called result:', result)
        return result
    }
    verifyAlbumQuestion(...args: any[]) {
        log.info('verifyAlbumQuestion called with args:', args)
        const result = this.instance.verifyAlbumQuestion(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('verifyAlbumQuestion called  promise result:', result)
                return res
            })
        }
        log.info('verifyAlbumQuestion called result:', result)
        return result
    }
};
export const getNodeIKernelPersonalAlbumService = (engine: any): any => {
    return class extends NodeIKernelPersonalAlbumService {
        
    }
}