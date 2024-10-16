const { AsyncLocalStorage } = require('async_hooks');

/** @type {import('async_hooks').AsyncLocalStorage<Map>} */
const asyncLocalStorage = new AsyncLocalStorage();
global.asyncLocalStorage = asyncLocalStorage;
;(() => {
  const orgi_require = module.require
  const log = (...a) => {
    console.log('[prepend]', ...a)
  }
  const handle = {
    ntwrapper: (t) => {
      /**  @type {import('fs')} */
      const fs = orgi_require('fs')
      const path = orgi_require('path')
      const packagePath = path.resolve(__dirname, '../package.json')
      if (!fs.existsSync(packagePath)) {
        log('config not exists!')
        process.exit(1)
      }
      const config = JSON.parse(fs.readFileSync(packagePath).toString())
      const version = config.version
      let wrapperPath = path.resolve(__dirname, `../wrapper.node`)
      if (process.platform === 'win32') {
        if (!fs.existsSync(wrapperPath)) {
          log('wrapper.node not exists!')
          const zipPath = path.resolve(__dirname, `../versions/${version}.zip`)
          log('try to extract zip file:', zipPath)
          /**  @type {import('adm-zip')} */
          const AdmZip = require('./adm-zip')
          const admzip = new AdmZip.admZip.default(zipPath);
          admzip.extractAllTo(path.resolve(__dirname, `../versions/${version}`)); // 把整个压缩包完全解压
        }
      }
      else {
        wrapperPath = path.resolve(__dirname, `../wrapper.node`)
      }
      return {
        /**
         * 载入特定模块
         * @param {number} idx 模块索引
         * @returns 
         */
        useWrapper: (idx) => {
          if (idx === undefined || idx === null)
          {
            throw new Error('use wrapper: idx error')
          }
          const targetPath = wrapperPath //.replace('wrapper.node', `wrapper-${idx}.node`)
          if (!fs.existsSync(targetPath))
          {
            fs.cpSync(wrapperPath, targetPath)
          }
          return orgi_require.apply(t, [targetPath])
        }
      }
    },
    'yui-native': (t) => {
      /**  @type {import('path')} */
      const path = orgi_require('path')
      let wrapperPath = path.resolve(__dirname, `./native.node`)
      if (process.env['YUKIHANA_NATIVE']) {
        wrapperPath = process.env['YUKIHANA_NATIVE']
      }
      return orgi_require.apply(t, [wrapperPath])
    }
  }
  module.require = function (...args) {
    if (handle[args[0]]) {
      return handle[args[0]](this)
    }
    return orgi_require.apply(this, args)
  }
})();