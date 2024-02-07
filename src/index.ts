import { useLogger } from "./common/log"
import { hook } from "./hook";
import { initNTQQ } from "./ntqq";
import { initOnebot } from "./onebot/onebot";
import { startServer } from "./server";
// import { test } from "./test/test";
import { hookWrapper } from "./wrapper/hook";

const log = useLogger('Index')
log.info('hi ntqq bot!! v0.0.2')

// 核心事件hook
hook()

initNTQQ()

initOnebot()

// 启动服务器
startServer()

// 测试
// test(module)

hookWrapper()

// ntqq/resources/app/app_launcher/index.js 原始代码
// require('./launcher.node').load('external_index', module);