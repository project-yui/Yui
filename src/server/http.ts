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
        key: '-----BEGIN RSA PRIVATE KEY-----\nMIICXQIBAAKBgQCgOPlzKTVOXsWIn0c7rXb+QUGcEzq1fQkAq55o7YJ6tUO4d4Zm\nvp4EMwnH9+rqwHYrMKwuanVP3zTuTHzGvGoL5wu/i3z4eDJpxtSEw8Py56HfKK0u\nxbfGJB+NyZOECk0CeYf/MriLyGPg5T6nJSK1CkJ5BDirnXrPBgQG2L5PtQIDAQAB\nAoGAKtAOl98jB1X7oo4tEp0/dqEpTvM0dNp8VVmGcrNEclWNSvVlTH8S6jxZGL3+\nX8wdx1yyJZT80+Lo2eRGUzR1gVxQNlTQwCD6HG4K/wtobOwL24eegxykCx5V7tfp\nhRejms9tJwHRRj21W7gBfXbvnSCOL4UiPQiQIJ3kM+A4ngECQQDVmRPjyD3kVW01\n2duuszHw1Phf8WVsYbazZMVDvtPLauFoyWHcoXjw/bVCHPUQ1DQwUqhVpT2YrcZc\nDtxv2e9FAkEAwAdj5Gpk8jU0HVNZlKnziY8osTJy/rapxwWr5uSFMRK+bwFqPrJD\nY80uXZaQZFeQ3urJCCH1SX25wLExXKntsQJBAJ6xi5B5blpdibUvtkK2ig0m/Z2y\nqKr8chQYc2MgvRRtxSjoLdgQ890AchG7l+u37UpVrxFqojf0K+Kre+VyIo0CQHaH\n2UQT3E2ZQ5raaRAXu4jsgfymnE7XZ4K+4HX8Fq7M2Bli8TbUCD7hVr5UArq9RmIi\n4IYRl/uODIuBlGuTRHECQQDAuvpEevFkU/HOt4gnTyQr/yeevHngUpbFlP+y3FJL\newqhNuLL+EHifYxl27R1S43H4x0TI6KO575PSAWIKtOw\n-----END RSA PRIVATE KEY-----\n',
        cert: '-----BEGIN CERTIFICATE-----\nMIICnjCCAgegAwIBAgIUKH3zxmPYVVfEmWxBZNZ4zol+hTYwDQYJKoZIhvcNAQEL\nBQAwYTELMAkGA1UEBhMCQ04xDjAMBgNVBAgMBW15a2V5MQ4wDAYDVQQHDAVteWtl\neTEOMAwGA1UECgwFbXlrZXkxDjAMBgNVBAsMBW15a2V5MRIwEAYDVQQDDAkqLnFw\naWMuY24wHhcNMjQwNDE2MDYwNzAxWhcNMzQwNDE0MDYwNzAxWjBhMQswCQYDVQQG\nEwJDTjEOMAwGA1UECAwFbXlrZXkxDjAMBgNVBAcMBW15a2V5MQ4wDAYDVQQKDAVt\neWtleTEOMAwGA1UECwwFbXlrZXkxEjAQBgNVBAMMCSoucXBpYy5jbjCBnzANBgkq\nhkiG9w0BAQEFAAOBjQAwgYkCgYEAoDj5cyk1Tl7FiJ9HO612/kFBnBM6tX0JAKue\naO2CerVDuHeGZr6eBDMJx/fq6sB2KzCsLmp1T9807kx8xrxqC+cLv4t8+HgyacbU\nhMPD8ueh3yitLsW3xiQfjcmThApNAnmH/zK4i8hj4OU+pyUitQpCeQQ4q516zwYE\nBti+T7UCAwEAAaNTMFEwHQYDVR0OBBYEFFtGEtCepxMPTOJkw+QzLxabYY3bMB8G\nA1UdIwQYMBaAFFtGEtCepxMPTOJkw+QzLxabYY3bMA8GA1UdEwEB/wQFMAMBAf8w\nDQYJKoZIhvcNAQELBQADgYEAHe/4WLXpVvOplqd7kN52xlzL0pkTgpkn8/L8m2xY\njAsVjqRhPIYuTeasGDtzM8f+I/iG4vD1wzYMBCda6Qmuz79JE99rqMXmmdYREhVF\nHZUUuvnaCA7ysHBkfb//n9GeNov7rViNjUiTtQGresoAxRrnjtl5hnyT+cxNhZmJ\n4M4=\n-----END CERTIFICATE-----\n'
    };
    const httpServer = createServer(app)
    httpServer.listen(cfg.yui.http.port, cfg.yui.http.host)
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