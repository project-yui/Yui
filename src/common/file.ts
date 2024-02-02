import fs from 'fs'
import crypto from 'crypto'
import imageSize from 'image-size'
import { ImageInfo } from './interface/file'

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
    height: ret.width || 0,
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
      if (typeof chunk == 'string')
        hash.update(chunk, 'utf8');
      else 
        hash.update(chunk.toString(), 'utf8');
    });
    stream.on('end', () => {
      const md5 = hash.digest('hex');
      resolve(md5)
    });
  })
}