import { Router } from "express"
import { useLogger } from "../../common/log"
import { downloadRichMedia } from "./download-rich-media"
import { externalDownload } from "./external-download"
import { uploadFile } from "./upload-file"

const log = useLogger('HTTP/AppRoutes')

export const registerAppRoutes = (router: Router) => {
  router.get('/downloadRichMedia', downloadRichMedia)
  router.post('/group/uploadFile', uploadFile)
  router.get('/external-download', externalDownload)
  router.get('/test', (req, res, next) => {
    log.info('test')
    res.json({ data: 1 })
    next()
  })
}
