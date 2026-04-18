import { useLogger } from "../common/log"
import { registerAppOneBotActions as initializeOneBot } from "../app/register-onebot-actions"
import { startServers } from "../adapters/server/start-servers"
import { initRuntime } from "./init-runtime"

const log = useLogger('Bootstrap/App')

export const startApp = () => {
  log.info('Hi Yui bot!!')

  initRuntime()

  log.info('initOnebot')
  initializeOneBot()

  log.info('startServer')
  startServers()

  log.info('end....')
}
