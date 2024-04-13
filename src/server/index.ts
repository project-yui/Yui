import { useLogger } from "../common/log"
import { startHTTPServer } from "./http"
import { startWebsocketServer } from "./websocket"

const log = useLogger('ServerIndex')

export const startServer = () => {
  log.info('start websocket server...')
  startWebsocketServer()
  log.info('start http server...')
  startHTTPServer()
}