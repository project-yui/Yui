import { NextFunction, Request, Response } from "express"
import fileUpload from "express-fileupload"
import fs from "fs"
import { resolve } from "path"
import { useLogger } from "../../common/log"
import { getConfig, getStoragePath } from "../../store/config"

const log = useLogger("UploadFile")

const mimeType2Extension = (type: string) => {
  const m: Record<string, string> = {
    "image/jpeg": ".jpg",
    "image/png": ".png",
  }
  if (m[type] != undefined) return m[type]
  return "bin"
}

export const uploadFile = (req: Request, res: Response, next: NextFunction) => {
  const storage = getStoragePath()

  if (!req.files) {
    next(new Error("No file found!"))
    return
  }
  log.info("req:", req.url, "files:", req.files)
  const file = req.files.file as fileUpload.UploadedFile

  if (!file) {
    next(new Error('Parameter "file" is lost!'))
    return
  }
  if (!file.name) {
    next(new Error("Can not identify name!"))
    return
  }
  const now = new Date()
  const p = `${now.getFullYear()}/${now.getMonth() + 1}/${now.getDate()}`
  const realPath = resolve(storage, `./upload/${p}`)
  try {
    fs.mkdirSync(realPath, { recursive: true })
  } catch (_error) {}
  log.info("mime type:", file.mimetype)
  const ext = mimeType2Extension(file.mimetype)
  file.mv(`${realPath}/${file.md5}${ext}`)
  const cfg = getConfig()
  let host = cfg.yui.http.host
  if (host === "0.0.0.0") {
    host = "127.0.0.1"
  }
  res.json({
    path: `${realPath}/${file.md5}${ext}`,
    url: `http://${host}:${cfg.yui.http.port}/static/${p}/${file.md5}${ext}`,
    md5: file.md5,
    size: file.size,
  })
}
