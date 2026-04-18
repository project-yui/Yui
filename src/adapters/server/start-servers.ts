import { useLogger } from "../../common/log"
import { startHTTPServerRuntime } from "./start-http-server"
import { startWebsocketServerRuntime } from "./start-websocket-server"

const log = useLogger('Adapters/Server')

export const startServers = () => {
  log.info('start websocket server...')
  startWebsocketServerRuntime()
  log.info('start http server...')
  startHTTPServerRuntime()
}
