import { useLogger } from "./common/log"
import { hook } from "./hook";
import { initNative } from "./native/native";
import { initOnebot } from "./onebot/onebot";
import { startServer } from "./server";
import { test } from "./test/testaction";
import { hookWrapper } from "./wrapper/hook";
import { constants } from 'os'

global.module = module
const log = useLogger('Index')
try {
  log.info('Hi Yui bot!!')
  log.info('preload.node')
  {
    const m = { exports: {} };
    const preload = process.env['YUI_PRELOAD']  || './preload.node'
    process.dlopen( 
        m,
        preload,
        constants.dlopen.RTLD_NOW | constants.dlopen.RTLD_GLOBAL
    )
  }

  process.on('unhandledRejection', (err) => {
    log.error('unhandledRejection:', err)
    // process.exit(1)
  })

  log.info('initOnebot')
  initOnebot()

  log.info('startServer')
  // 启动服务器
  startServer()

  // 测试
  test(module)

  // 核心事件hook
  if (process.env['YUI_ACTION'] === 'ui') {
    // log.info('hook')
    hook()
    log.info('hookWrapper')
    hookWrapper()
    initNative('wrapper.node')
    // ntqq/resources/app/app_launcher/index.js 原始代码
    console.log(require('../major.node').load('internal_index', module));
  }
  else
  {
    delete require.cache['electron']
    delete require.cache['electron/common']
    delete require.cache['electron/main']
  }
  log.info('end....')
}
catch(err) {
  log.error('Error:', err)
  process.exit(1)
}