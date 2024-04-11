import express from "express"
import { NextFunction, Request, Response } from 'express'
import { useConfigStore } from "../store/config";
import { useLogger } from "../common/log";
import router from "../http/route";
import bodyParser from 'body-parser'
import fileUpload from 'express-fileupload'
import https from 'https'
import { readFileSync } from "fs";
import { resolve } from "path";
import { createServer } from "http";

const log = useLogger('HTTP Server')
/**
 * 启动HTTP服务器
 */
export const startHTTPServer = () => {
    
    const { getConfig } = useConfigStore()
    const cfg = getConfig()
    const app = express()
    
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded())
    const { getStoragePath } = useConfigStore()
    const storagePath = getStoragePath()
    log.info('storagePath:', storagePath)
    app.use(fileUpload({
        createParentPath: true,
        useTempFiles : true,
        tempFileDir : storagePath,
        preserveExtension: true,
    }))
    app.use((req, res, next) => {
        log.info('before route')
        var oldJson = res.json;

        res.json = function(body?: any){
            if (body?.code === undefined || body?.code === null) {
                body = {
                    code: 0,
                    msg: 'success',
                    error: '',
                    data: body
                }
            }
            return oldJson.apply(res, [body]);
        }
        next()
    })
    app.use(router)
    app.use((req, res, next) => {
        log.info('after route')
        // next()
    })
    app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
        log.error('error handle:', err)
        res.status(500).send({
            code: 500,
            msg: 'error',
            error: err.message,
            data: null,
        })
    })
    
    const options = {
        key: readFileSync(resolve(__dirname, './server.key')),
        cert: readFileSync(resolve(__dirname, './server.crt'))
    };
    const httpServer = createServer(app)
    httpServer.listen(cfg.yukihana.http.port, cfg.yukihana.http.host)
    const httpsServer = https.createServer(options, app)
    httpsServer.listen(443)
}