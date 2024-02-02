/**
 * FsApi获取到的图片信息
 */
export interface ImageSizeInfo {
  width: number
  height: number,
  type: 'jpg',
  mime: 'image/jpeg'
  wUnits: 'px',
  hUnits: 'px'
}

/**
 * 文件类型
 */
export interface FileType {
  /**
   * 文件后缀
   */
  ext: string
  /**
   * 文件mime类型
   */
  mime: string
}