import { NextFunction, Request, Response } from "express"
import { useNTCore } from "../../ntqq/core/core"
import { existsSync } from "fs"
import { useStore } from "../../store/store"
import { useLogger } from "../../common/log"

const log = useLogger('DownloadRichMedia')
export const downloadRichMedia = (req: Request, res: Response, next: NextFunction) => {
    const { getWrapperSession } = useNTCore()
    const msgService = getWrapperSession().getMsgService()
    const p = req.query
    log.info('param:', JSON.stringify(p, null, 4))
    if (typeof p['file_path'] !== 'string')
    {
        next(new Error('file_path error'))
        return;
    }
    if (p['file_path'] && existsSync(p['file_path']))
    {
        // 已存在，不用下载
        res.download(p['file_path'])
        return;
    }
    log.info('need download...')
    const { registerEventListener } = useStore()
    registerEventListener('KernelMsgListener/onRichMediaDownloadComplete', 'once', (a) => {
        log.info('result:', a)
        // download 结果的path和请求的会不一致
        res.download(a.filePath)
    })
    // 不存在，下载
    msgService.downloadRichMedia({
        peerUid: p['peer_uid'] as string,
        chatType: parseInt(p['chat_type'] as string),
        msgId: p['msg_id'] as `${number}`,
        elementId: p['element_id'] as `${number}`,
        downloadType: parseInt(p['download_type'] as string),
        thumbSize: parseInt(p['chat_type'] as string),
        filePath: p['file_path'],
        fileModelId: p['file_model_id'] as `${number}`,
        downSourceType: parseInt(p['down_source_type'] as string),
        triggerType: parseInt(p['trigger_type'] as string)
    })
}