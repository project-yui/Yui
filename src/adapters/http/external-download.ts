import { NextFunction, Request, Response } from "express"
import { IncomingMessage, get as getHttp } from "http"
import { get as getHttps } from "https"
import { useLogger } from "../../common/log"

const log = useLogger("ExternalDownload")

export const externalDownload = (req: Request, res: Response, next: NextFunction) => {
  log.info("external-download")
  res.setHeader("X-ErrNo", 0)
  const url = new URL(req.url, `http://${req.headers.host}`)
  let link = url.searchParams.get("url")
  if (link == null) {
    res.status(400)
    next()
    return
  }
  link = decodeURIComponent(link)
  const callback = (resp: IncomingMessage) => {
    resp.pipe(res)
  }
  if (link.startsWith("https")) {
    log.info("request https link:", link)
    getHttps(link, callback).on("error", (err) => {
      log.error("HTTP request error:", err)
      res.status(500).send("Internal Server Error")
    })
    return
  }
  if (link.startsWith("http")) {
    getHttp(link, callback).on("error", (err) => {
      log.error("HTTP request error:", err)
      res.status(500).send("Internal Server Error")
    })
    return
  }
  res.status(400).send("Bad Request: Invalid URL")
}
