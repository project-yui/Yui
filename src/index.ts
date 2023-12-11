import { useLogger } from "./common/log"
import { hook } from "./hook";
import { initBaseEvent } from "./ntqq/event/base";
import { initOnebot } from "./onebot/onebot";
import { startServer } from "./server";
import { test } from "./test/test";

const log = useLogger('Index')
log.info('hi ntqq bot!! v0.0.2')

// 核心事件hook
hook()

// 初始化基础事件处理
initBaseEvent()

initOnebot()

// 启动服务器
startServer()

// 测试
// test()

// ntqq/resources/app/app_launcher/index.js 原始代码
require('./launcher.node').load('external_index', module);