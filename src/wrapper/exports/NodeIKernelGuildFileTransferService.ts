import { useLogger } from "../../common/log";

const log = useLogger('Wrapper/NodeIKernelGuildFileTransferService')
export class NodeIKernelGuildFileTransferService {
    protected static singleton?: any = undefined
    protected instance: any
    constructor(instance: any) {
        log.info('constructor called')
        this.instance = instance
    }
    addFileUploadListener(...args: any[]) {
        log.info('addFileUploadListener called with args:', args)
        const result = this.instance.addFileUploadListener(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('addFileUploadListener called  promise result:', result)
                return res
            })
        }
        log.info('addFileUploadListener called result:', result)
        return result
    }
    cancelFileGroupUpload(...args: any[]) {
        log.info('cancelFileGroupUpload called with args:', args)
        const result = this.instance.cancelFileGroupUpload(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('cancelFileGroupUpload called  promise result:', result)
                return res
            })
        }
        log.info('cancelFileGroupUpload called result:', result)
        return result
    }
    createFileGroupUpload(...args: any[]) {
        log.info('createFileGroupUpload called with args:', args)
        const result = this.instance.createFileGroupUpload(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('createFileGroupUpload called  promise result:', result)
                return res
            })
        }
        log.info('createFileGroupUpload called result:', result)
        return result
    }
    decoderUploadFileGroupInfo(...args: any[]) {
        log.info('decoderUploadFileGroupInfo called with args:', args)
        const result = this.instance.decoderUploadFileGroupInfo(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('decoderUploadFileGroupInfo called  promise result:', result)
                return res
            })
        }
        log.info('decoderUploadFileGroupInfo called result:', result)
        return result
    }
    decoderUploadFileInfo(...args: any[]) {
        log.info('decoderUploadFileInfo called with args:', args)
        const result = this.instance.decoderUploadFileInfo(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('decoderUploadFileInfo called  promise result:', result)
                return res
            })
        }
        log.info('decoderUploadFileInfo called result:', result)
        return result
    }
    encodeUploadFileGroupInfo(...args: any[]) {
        log.info('encodeUploadFileGroupInfo called with args:', args)
        const result = this.instance.encodeUploadFileGroupInfo(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('encodeUploadFileGroupInfo called  promise result:', result)
                return res
            })
        }
        log.info('encodeUploadFileGroupInfo called result:', result)
        return result
    }
    encodeUploadFileInfo(...args: any[]) {
        log.info('encodeUploadFileInfo called with args:', args)
        const result = this.instance.encodeUploadFileInfo(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('encodeUploadFileInfo called  promise result:', result)
                return res
            })
        }
        log.info('encodeUploadFileInfo called result:', result)
        return result
    }
    getFileGroupInfo(...args: any[]) {
        log.info('getFileGroupInfo called with args:', args)
        const result = this.instance.getFileGroupInfo(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getFileGroupInfo called  promise result:', result)
                return res
            })
        }
        log.info('getFileGroupInfo called result:', result)
        return result
    }
    pauseFileGroupUpload(...args: any[]) {
        log.info('pauseFileGroupUpload called with args:', args)
        const result = this.instance.pauseFileGroupUpload(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('pauseFileGroupUpload called  promise result:', result)
                return res
            })
        }
        log.info('pauseFileGroupUpload called result:', result)
        return result
    }
    removeFileGroupUpload(...args: any[]) {
        log.info('removeFileGroupUpload called with args:', args)
        const result = this.instance.removeFileGroupUpload(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('removeFileGroupUpload called  promise result:', result)
                return res
            })
        }
        log.info('removeFileGroupUpload called result:', result)
        return result
    }
    removeFileUploadListener(...args: any[]) {
        log.info('removeFileUploadListener called with args:', args)
        const result = this.instance.removeFileUploadListener(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('removeFileUploadListener called  promise result:', result)
                return res
            })
        }
        log.info('removeFileUploadListener called result:', result)
        return result
    }
    resumeFileGroupUpload(...args: any[]) {
        log.info('resumeFileGroupUpload called with args:', args)
        const result = this.instance.resumeFileGroupUpload(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('resumeFileGroupUpload called  promise result:', result)
                return res
            })
        }
        log.info('resumeFileGroupUpload called result:', result)
        return result
    }
};
export const getNodeIKernelGuildFileTransferService = (engine: any): any => {
    return class extends NodeIKernelGuildFileTransferService {
        
    }
}