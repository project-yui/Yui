import { useLogger } from './common/log'
import { hookWrapper } from './wrapper/hook'
import { hook } from './hook'

const log = useLogger('UI')
log.info('hook')
hook()
log.info('hookWrapper')
hookWrapper()
// ntqq/resources/app/app_launcher/index.js 原始代码
log.info('load internal_index')
require('../application.asar/app_launcher/index.js')
// require('../major.node').load('internal_index', module)
