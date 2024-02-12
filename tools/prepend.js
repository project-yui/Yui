(() => {
  const orgi_rquire = module.require
  module.require = function (...args) {
    if (args[0] === 'ntwrapper') {
      const log = (...a) => {
        console.log('[prepend]', ...a)
      }
      /**  @type {import('fs')} */
      const fs = orgi_rquire('fs')
      const path = orgi_rquire('path')
      const packagePath = path.resolve(__dirname, '../package.json')
      if (!fs.existsSync(packagePath)) {
        log('config not exists!')
        process.exit(1)
      }
      const config = JSON.parse(fs.readFileSync(packagePath).toString())
      const version = config.version
      let wrapperPath = path.resolve(__dirname, `../versions/${version}/wrapper.node`)
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
      return orgi_rquire.apply(this, [wrapperPath])
    }
    return orgi_rquire.apply(this, args)
  }
})();