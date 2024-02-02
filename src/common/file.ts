import fs from 'fs'
import crypto, { randomUUID } from 'crypto'
import imageSize from 'image-size'
import { ImageInfo } from './interface/file'
import http from 'http'
import https from 'https'
import path from 'path'
import { useLogger } from './log'

const log = useLogger('File')

/**
 * 获取图像信息
 * 
 * TODO: 使用NTQQ自带方法获取
 * @deprecated 使用NTQQ自带方法获取
 * @param path 图片路径
 * @returns 取图像信息
 */
export const getImageInfo = async (path: string): Promise<ImageInfo | undefined> => {
  if (!fs.existsSync(path)) return undefined
  const ret = imageSize(path)
  const md5 = await getFileMd5(path)
  const stat = fs.statSync(path)
  return {
    width: ret.width || 0,
    height: ret.height || 0,
    md5: md5,
    size: stat.size
  }
}

/**
 * 计算文件md5
 * 
 * @param path 文件路径
 */
export const getFileMd5 = (path: string) => {
  return new Promise<string>((resolve, reject) => {
    const stream = fs.createReadStream(path);
    const hash = crypto.createHash('md5');
    stream.on('data', chunk => {
      hash.update(chunk as any, 'utf8');
    });
    stream.on('end', () => {
      const md5 = hash.digest('hex');
      resolve(md5)
    });
  })
}

/**
 * 下载文件
 * 
 * @param url 网络地址
 * @param targetPath 存储地址
 * @returns 存储地址
 */
export const downloadFile = (url: string, targetPath?: string) => {
  return new Promise<string>((resolve, reject) => {
    const uri = new URL(url)
    let fileName = path.basename(`${uri.origin}${uri.pathname}`)
    if (fileName === '0') fileName = `${randomUUID()}.jpg`
    const basePath = path.resolve(process.env['YUKIHANA_STORAGE'] || __dirname, './storage')
    log.info(`base path: ${basePath}`)
    
    try {
      fs.mkdirSync(basePath, {
        recursive: true
      })
    }catch(err) {
      log.error('err')
    }
    const storagePath = targetPath || path.resolve(basePath, fileName)
    log.info(`storage path: ${storagePath}`)
    const fd = fs.openSync(storagePath, 'w')
    const h = url.startsWith('https') ? https : http
    const client = h.get(url, (msg) => {
      msg.on('data', (chunk) => {
        fs.writeSync(fd, chunk)
      })
      msg.on('end', () => {
        fs.closeSync(fd)
        log.info('download end')
        resolve(storagePath)
      })
    })
    client.on('error', (err) => {
      fs.closeSync(fd)
      reject(err)
    })
    client.end()
  })
}