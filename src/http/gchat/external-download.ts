import { NextFunction, Response, Request } from "express";
import { get as getHttps } from 'https'
import { IncomingMessage, get as getHttp } from 'http'
import { useLogger } from "../../common/log";

const log = useLogger('ExternalDownload')

export const externalDownload = (req: Request, res: Response, next: NextFunction) => {
    log.info('external-download')
    // X-ErrNo
    res.setHeader('X-ErrNo', 0)
    const url = new URL(req.url, `http://${req.headers.host}`);
    // 图片地址
    let link = url.searchParams.get('url')
    if (link == null)
    {
        res.status(400)
        next()
        return
    }
    link = decodeURIComponent(link)
    const callback  = (resp: IncomingMessage) => {
        resp.pipe(res)
        
    }
    if (link.startsWith('https'))
    {
        log.info('request https link:', link)
        getHttps(link, callback).on('error', (err) => {
        log.error('HTTP request error:', err);
        res.status(500).send('Internal Server Error');
        });
        return
    }
    else if (link.startsWith('http'))
    {
        getHttp(link, callback).on('error', (err) => {
        log.error('HTTP request error:', err);
        res.status(500).send('Internal Server Error');
        });
        return
    }
    else
    {
        res.status(400).send('Bad Request: Invalid URL');
        return
    }
}