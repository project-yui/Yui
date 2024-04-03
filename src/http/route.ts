import { Router } from 'express'
import { useLogger } from '../common/log'
import { uploadFile } from './group/upload-file'

const log = useLogger('HTTP Route')
const router = Router()
router.post('/group/uploadFile', uploadFile)
router.get('/test', (req, res, next) => {
  log.info('test')
  res.json({data: 1})
  next()
})

export default router