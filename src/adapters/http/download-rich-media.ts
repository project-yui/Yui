import { NextFunction, Request, Response } from "express"
import { existsSync } from "fs"
import { useLogger } from "../../common/log"
import { getNTMsgService } from "../../ntqq/core/core"
import { registerEventListener } from "../../store/event-registry"
import { CustomError } from "../../common/error/custom-error"

const log = useLogger("DownloadRichMedia")

export const downloadRichMedia = (req: Request<any, any, any, {
  file_model_id: `${number}`,
  down_source_type: string,
  trigger_type: string,
  msg_id: `${number}`,
  chat_type: string,
  peer_uid: string,
  element_id: `${number}`,
  thumb_size: string,
  download_type: string,
  file_path?: string
}>, res: Response, next: NextFunction) => {
  const msgService = getNTMsgService()
  const p = req.query
  log.info("param:", JSON.stringify(p, null, 4))
  if (typeof p["file_path"] !== "string") {
    next(new Error("file_path error"))
    return
  }
  if (p["file_path"] && existsSync(p["file_path"])) {
    res.download(p["file_path"])
    return
  }
  log.info("need download...")
  const rm = registerEventListener("KernelMsgListener/onRichMediaDownloadComplete", "always", (a) => {
    log.info("onRichMediaDownloadComplete:", JSON.stringify(a, null, 4))
    if (a.msgId !== p["msg_id"] || a.msgElementId !== p["element_id"]) return
    rm.remove()
    log.info("result:", a)
    res.download(a.filePath)
  })
  setTimeout(() => {
    rm.remove()
    next(new CustomError(10201, "timeout"))
  }, 30000)
  const result = msgService.downloadRichMedia({
    fileModelId: p.file_model_id,
    downSourceType: parseInt(p.down_source_type),
    triggerType: parseInt(p.trigger_type),
    msgId: p.msg_id,
    chatType: parseInt(p.chat_type),
    peerUid: p.peer_uid,
    elementId: p.element_id,
    thumbSize: parseInt(p.thumb_size),
    downloadType: parseInt(p.download_type),
    filePath: p.file_path,
  })
  log.info("downloadRichMedia result:", result)
}
