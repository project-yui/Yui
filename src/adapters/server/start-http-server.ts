import express from "express"
import { NextFunction, Request, Response } from "express"
import bodyParser from "body-parser"
import fileUpload from "express-fileupload"
import { createServer } from "http"
import { useLogger } from "../../common/log"
import { getConfig, getStoragePath } from "../../store/config"
import { createHTTPRouter } from "../http/create-router"

const log = useLogger("HTTP Server")
const router = createHTTPRouter()

export const startHTTPServerRuntime = () => {
  const cfg = getConfig()
  const app = express()
  const storagePath = getStoragePath()

  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded())
  log.info("storagePath:", storagePath)
  app.use(fileUpload({
    createParentPath: true,
    useTempFiles: true,
    tempFileDir: storagePath,
    preserveExtension: true,
  }))
  app.use((req, res, next) => {
    log.info("before route", req.url)
    const oldJson = res.json

    res.json = function(body?: any) {
      if (body?.code === undefined || body?.code === null) {
        body = {
          code: 0,
          msg: "success",
          error: "",
          data: body,
        }
      }
      return oldJson.apply(res, [body])
    }
    next()
  })
  app.use(router)
  app.use((_req, _res, _next) => {
    log.info("after route")
  })
  app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
    log.error("error handle:", err)
    res.status(500).send({
      code: 500,
      msg: "error",
      error: err.message,
      data: null,
    })
  })

  const httpServer = createServer(app)
  httpServer.listen(cfg.yui.http.port, cfg.yui.http.host)
}
