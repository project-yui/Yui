import bytenode from 'bytenode'
import { existsSync } from 'fs'
import { resolve } from 'path'

// const nativeModule = require('D:/GitHub/nt-native/build/Debug/nt_native.node')
// const signature = '48895C2420564883EC20488BD933F6E8DC'
// const sigArr = signature.match(/[a-zA-Z0-9]{2}/g)?.map(e=>parseInt(`0x${e}`))
// if (sigArr !== null) {
//   setTimeout(() => {
//     const result = nativeModule.install(sigArr)
//     console.log('install result:', result)
//   }, 2000)
// }

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
      // 不能删除，否则bytenode会被rollup移除
      // bytenode内部添加了对.jsc文件加载的支持
      bytenode
      // 从字节码启动
      require('./core.jsc')
    }
    break
}