import { useLogger } from "./common/log"
import { hook } from "./hook";
import { initNative } from "./native/init";
import { NTInitialize } from "./ntqq";
import { initOnebot } from "./onebot/onebot";
import { startServer } from "./server";
import { useAsyncStore } from "./store/async-store";
import { test } from "./test/test";
import { hookWrapper } from "./wrapper/hook";

global.module = module
const log = useLogger('Index')
try {
  log.info('hi ntqq bot!! v0.0.2')
  console.log(process.version)

  process.on('unhandledRejection', (err) => {
    log.error('unhandledRejection:', err)
    // process.exit(1)
  })

  // 核心事件hook
  if (process.env['YUKIHANA_ACTION'] === 'ui') {
    // log.info('hook')
    hook()
    log.info('hookWrapper')
    hookWrapper()
  }
                
  log.info('initNTQQ')
  // initNative()

  log.info('initOnebot')
  initOnebot()

  log.info('startServer')
  // 启动服务器
  startServer()

  // 测试
  test(module)

  // ntqq/resources/app/app_launcher/index.js 原始代码
  if (process.env['YUKIHANA_ACTION'] === 'ui')
    console.log(require('../major.node').load('internal_index', module));
  console.log('end....')
}
catch(err) {
  log.error('Error:', err)
  process.exit(1)
}