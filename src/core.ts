import { useLogger } from "./common/log"
import { initNTQQ } from "./ntqq";
import { initOnebot } from "./onebot/onebot";
import { startServer } from "./server";
// import { test } from "./test/test";
import { hookWrapper } from "./wrapper/hook";

global.module = module
const log = useLogger('Index')
try {
  log.info('hi ntqq bot!! v0.0.2')

  process.on('unhandledRejection', (err) => {
    log.error('unhandledRejection:', err)
    // process.exit(1)
  })

  // log.info('hook')
  // 核心事件hook
  // hook()

  log.info('initNTQQ')
  initNTQQ()

  log.info('initOnebot')
  initOnebot()

  log.info('startServer')
  // 启动服务器
  startServer()

  // 测试
  // test(module)

  log.info('hookWrapper')
  hookWrapper()
  // ntqq/resources/app/app_launcher/index.js 原始代码
  // require('./launcher.node').load('external_index', module);
}
catch(err) {
  log.error('Error:', err)
  process.exit(1)
}