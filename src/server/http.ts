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
        log.info('before route', req.url)
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
    httpServer.listen(cfg.telecord.http.port, cfg.telecord.http.host)
    const httpsServer = https.createServer(options, app)
    log.info('Try to listen on 443.')
    httpsServer.listen(443)
    httpsServer.on('error', function (err: any) {
        log.error('err:', err)
        if (err.code === 'EACCES' && err.port === 443) {
            log.warn('Failed to listen on 443, try to listen on 8443.');
            httpsServer.listen(8443);
            log.warn('Please forward it to 443: sudo iptables -t nat -A OUTPUT -p tcp --dport 443 -j REDIRECT --to-port 8443');
        } else {
            // 处理其他类型的错误或者在其他端口上的错误
            log.error(err);
            process.exit(1); // 或者你可以选择其他的错误处理方式
        }
    });
}