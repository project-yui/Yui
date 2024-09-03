import { Router, static as static_ } from 'express'
import { useLogger } from '../common/log'
import { uploadFile } from './group/upload-file'
import { createProxyMiddleware } from 'http-proxy-middleware'
import { externalDownload } from './gchat/external-download'
import { useConfigStore } from '../store/config'
import { resolve } from 'path'
import { downloadRichMedia } from './common/download-rich-media'

const log = useLogger('HTTP Route')

const { getStoragePath } = useConfigStore()
const router = Router()
const storage = getStoragePath()
router.use('/static', static_(resolve(storage, './upload')))
router.get('/downloadRichMedia', downloadRichMedia)
router.get('/download', createProxyMiddleware({
  target: 'https://gchat.qpic.cn',
  changeOrigin: true,
}))
router.get('/gchatpic_new/*', createProxyMiddleware({
  target: 'https://gchat.qpic.cn',
  changeOrigin: true,
}))
router.post('/group/uploadFile', uploadFile)
router.get('/external-download', externalDownload)
router.get('/test', (req, res, next) => {
  log.info('test')
  res.json({data: 1})
  next()
})

export default router