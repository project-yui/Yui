import { NextFunction, Request, Response } from "express";
import { useLogger } from "../../common/log";
import fs from "fs";
import fileUpload from 'express-fileupload'
import { useConfigStore } from "../../store/config";
import { resolve } from "path";

const log = useLogger('UploadFile')

const mimeType2Extension = (type: string) => {
    const m: Record<string, string> = {
        'image/jpeg': '.jpg',
        'image/png': '.png',
    }
    if (m[type] != undefined) return m[type]
    return 'bin'
}

export const uploadFile = (req: Request, res: Response, next: NextFunction) => {
    const { getStoragePath, getConfig } = useConfigStore()
    const storage = getStoragePath()

    if (!req.files) {
        next(new Error('No file found!'));
        return;
    }
    log.info('req:', req)
    const file = req.files.file as fileUpload.UploadedFile
    
    if (!file) {
        next(new Error('Parameter "file" is lost!'));
        return;
    }
    if (!file.name) {
        next(new Error('Can not identify name!'));
        return
    }
    const now = new Date()
    const p = `${now.getFullYear()}/${now.getMonth() + 1}/${now.getDate()}`
    const realPath = resolve(storage, `./upload/${p}`)
    try {
        // 创建文件夹
        fs.mkdirSync(realPath, { recursive: true})
    } catch (error) {
        
    }
    log.info('mime type:', file.mimetype)
    const ext = mimeType2Extension(file.mimetype)
    file.mv(`${realPath}/${file.md5}${ext}`)
    const cfg = getConfig()
    let host = cfg.yui.http.host
    if (host === '0.0.0.0') {
        host = '127.0.0.1'
    }
    res.json({
        path: `${realPath}/${file.md5}${ext}`,
        url: `http://${host}:${cfg.yui.http.port}/static/${p}/${file.md5}${ext}`,
        md5: file.md5,
        size: file.size,
    })
}