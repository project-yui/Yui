import { WebSocketServer } from "ws"
import { useLogger } from "../../common/log"
import {
  addConnection,
  getConnectionCount,
  removeConnection,
} from "../ws/connection-manager"
import { getConfig } from "../../store/config"
import { handleBotActionRequest } from "../ws/handle-bot-action-request"

const log = useLogger("WebSocket")

export const startWebsocketServerRuntime = () => {
  const cfg = getConfig()
  const wss = new WebSocketServer({
    host: cfg.yui.ws.host,
    port: cfg.yui.ws.port,
  })

  wss.once("close", () => {
    log.info("websocket server closed.")
  })
  wss.once("listening", () => {
    log.info(`websocket server listening on ${cfg.yui.ws.host}:${cfg.yui.ws.port}`)
  })
  wss.on("connection", (ws, req) => {
    log.info("receive connection.")
    try {
      log.info("async run.")
      if (!req.url) {
        log.error("url error")
        ws.terminate()
        ws.close(400, "url error")
        return
      }

      const eventHandle = (msg: string) => {
        ws.send(msg)
      }
      addConnection(eventHandle)
      log.info("connection registered, total:", getConnectionCount())
      ws.on("close", (code, reason) => {
        log.info("connection close.", code, reason.toString())
        removeConnection(eventHandle)
        log.info("connection removed, total:", getConnectionCount())
      })

      ws.on("message", (message) => {
        void (async () => {
          const resp = await handleBotActionRequest(message.toString())
          ws.send(JSON.stringify(resp))
        })()
      })
    }
    catch (err) {
      log.error(err)
    }
  })
  wss.on("error", (error) => {
    log.info("failed to create server!", error)
  })
  return wss
}
