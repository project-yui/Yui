import { useLogger } from "../common/log"
import { startWebsocketServer } from "./websocket"

const log = useLogger('ServerIndex')

export const startServer = () => {
  log.info('start websocket server...')
  startWebsocketServer()
}