(() => {
  const orgi_rquire = module.require
  module.require = function (...args) {
    if (args[0] === 'ntwrapper') {
      const fs = orgi_rquire('fs')
      const path = orgi_rquire('path')
        /**  @type {import('electron')} */
      const electron = orgi_rquire('electron')
      const appPath = electron.app.getPath('appData')
      console.log('appPath:', appPath)
      const packagePath = path.resolve(appPath, './package.json')
      if (!fs.existsSync(packagePath)) {
        console.log('config not exists!')
        process.exit(1)
      }
      const config = JSON.parse(fs.readFileSync(packagePath).toString())
      const version = config.version
      return orgi_rquire(path.resolve(appPath, `./versions/${version}/wrapper.node`))
    }
    return orgi_rquire.apply(this, args)
  }
})();