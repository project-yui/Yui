import { NextFunction, Request, Response } from "express";
import formidable, { Fields } from "formidable";
import { useLogger } from "../../common/log";
import path from "path";
import fs from "fs";
import { useNTCore } from "../../ntqq/core/core";
import { useNTDispatcher } from "../../ntqq/core/dispatcher";
import { useStore } from "../../store/store";
import { useConfigStore } from "../../store/config";

const log = useLogger('UploadFile')
const parsePeerInfo = (fields: Fields<"chatType" | "peerUid" | "guildId">): PeerInfo => {

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
    log.info('peerUid:', fields.peerUid[0])
    peerInfo.peerUid = fields.peerUid[0] as `${number}` | `u_${string}`
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
    const { getStoragePath } = useConfigStore()
    const storagePath = getStoragePath()
    const form = formidable({
        uploadDir: storagePath,
        createDirsFromUploads: true,
        keepExtensions: true,
    });
    form.parse<'chatType' | 'peerUid' | 'guildId', "file">(req, (err, fields, files) => {
        if (err) {
            log.error('file parse error:', err)
            next(err);
            return;
        }

        try {
            const peerInfo = parsePeerInfo(fields)
            // res.end('上传成功')
            log.info(files);
            const file = files.file?.[0]
            if (!file) {
                next(new Error('Parameter "file" is lost!'));
                return;
            }
            if (!file.originalFilename) {
                next(new Error('Can not identify originalFilename!'));
                return
            }
            log.info('onlyUploadFile')
            const fileInfo = {
                fileName: file.originalFilename,
                filePath: file.filepath,
                fileModelId: `${Math.floor(Math.random() * 10e9)}` as `${number}`
            }
            log.info('fileModelId:', fileInfo.fileModelId)
            let listener: undefined | { remove: () => void } = undefined
            listener = registerEventListener('KernelMsgListener/onRichMediaUploadComplete', 'always', (info: NTNativeWrapper.RichMediaUploadResult) => {
                // 同时上传，可能会识别错误，需要判定一下
                if (info.fileModelId === fileInfo.fileModelId)
                {
                    listener?.remove()
                    res.json({
                        path: file.filepath,
                        md5: info.commonFileInfo.md5,
                        size: info.commonFileInfo.fileSize,
                    })
                    next()
                }
            })
            richMedia.onlyUploadFile(peerInfo, [fileInfo])
        }
        catch (err) {
            next(err);
            return;
        }
    });
}