import { NextFunction, Request, Response } from "express";
import { useLogger } from "../../common/log";
import path from "path";
import fs from "fs";
import { useNTCore } from "../../ntqq/core/core";
import { useNTDispatcher } from "../../ntqq/core/dispatcher";
import { useStore } from "../../store/store";
import { useConfigStore } from "../../store/config";
import fileUpload from 'express-fileupload'

const log = useLogger('UploadFile')
const parsePeerInfo = (fields: Record<string, string>): PeerInfo => {

    const peerInfo: PeerInfo = {
        chatType: 0,
        peerUid: '',
        guildId: ''
    }
    // 参数检查
    // chatType
    if (fields.chatType === undefined) {
        throw new Error('Parameter "chatType" lost!')
    }
    log.info('chatType:', fields.chatType[0])
    peerInfo.chatType = parseInt(fields.chatType[0])
    if (peerInfo.chatType != 2) {
        throw new Error('Parameter "chatType" is error!')
    }
    // peerUid
    if (fields.peerUid === undefined) {
        throw new Error('Parameter "peerUid" lost!')
    }
    log.info('peerUid:', fields.peerUid)
    peerInfo.peerUid = fields.peerUid as `${number}` | `u_${string}`
    if (peerInfo.peerUid.length === 0) {
        throw new Error('Parameter "peerUid" is error!')
    }
    // TODO: guildId
    // 参数检查 end
    return peerInfo
}
export const uploadFile = (req: Request, res: Response, next: NextFunction) => {
    const { getWrapperSession } = useNTCore()
    const { registerEventListener } = useStore()

    const richMedia = getWrapperSession().getRichMediaService()
    if (richMedia.isNull()) {
        next(new Error('Rich media service is not ready!'));
        return;
    }
    if (!req.files) {
        next(new Error('No file found!'));
        return;
    }
    log.info('req:', req)
    const peerInfo = parsePeerInfo(req.body)
    log.info('peer info:', peerInfo)
    const file = req.files.file as fileUpload.UploadedFile
    
    if (!file) {
        next(new Error('Parameter "file" is lost!'));
        return;
    }
    if (!file.name) {
        next(new Error('Can not identify name!'));
        return
    }
    log.info('onlyUploadFile')
    fs.renameSync(file.tempFilePath, `${file.tempFilePath}.jpg`)
    const fileInfo = {
        fileName: `${file.md5}.jpg`,
        filePath: `${file.tempFilePath}.jpg`,
        fileModelId: `${Math.floor(Math.random() * 10e9)}` as `${number}`
    }
    log.info('fileInfo:', fileInfo)
    let listener: undefined | { remove: () => void } = undefined
    listener = registerEventListener('KernelMsgListener/onRichMediaUploadComplete', 'always', (info: NTNativeWrapper.RichMediaUploadResult) => {
        // 同时上传，可能会识别错误，需要判定一下
        if (info.fileModelId === fileInfo.fileModelId)
        {
            listener?.remove()
            res.json({
                path: file.tempFilePath,
                md5: info.commonFileInfo.md5,
                size: info.commonFileInfo.fileSize,
            })
            next()
        }
    })
    richMedia.onlyUploadFile(peerInfo, [fileInfo])
}