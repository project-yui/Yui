import bytenode from 'bytenode'
import { existsSync } from 'fs'
import { resolve } from 'path'
switch (process.env['YUKIHANA_ACTION']) {
  case 'dev':
    // 开发模式，从源码启动
    require('./core.js')
    break
  case 'compile':
    // 调用编译模块
    /**
     * 用途：
     * 快速生成Linux平台字节码
     */
    if (existsSync(resolve(__dirname, './compile.js')))
      require('./compile.js')
    break
  default: {
      bytenode
      // 从字节码启动
      require('./core.jsc')
    }
    break
}