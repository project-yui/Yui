(() => {
  const orgi_rquire = module.require
  module.require = function (...args) {
    if (args[0] === 'ntwrapper') {
      const fs = orgi_rquire('fs')
      const path = orgi_rquire('path')
      const configPath = path.resolve(__dirname, '../versions/config.json')
      if (!fs.existsSync(configPath)) {
        console.log('config not exists!')
        process.exit(1)
      }
      const config = JSON.parse(fs.readFileSync(configPath).toString())
      const version = config.curVersion
      return orgi_rquire(path.resolve(__dirname, `../versions/${version}/wrapper.node`))
    }
    return orgi_rquire.apply(this, args)
  }
})();