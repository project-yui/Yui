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
      const packagePath = path.resolve(__dirname, './package.json')
      if (!fs.existsSync(packagePath)) {
        log('config not exists!')
        process.exit(1)
      }
      let wrapperPath = path.resolve(__dirname, `./wrapper.node`)
      if (process.platform === 'win32') {
      }
      else {
        wrapperPath = path.resolve(__dirname, `./wrapper.node`)
      }
      return {
        /**
         * 载入 wrapper.node
         * @param {number} idx 兼容旧调用，已忽略
         * @returns 
         */
        useWrapper: (idx) => {
          return orgi_require.apply(t, [wrapperPath])
        }
      }
    },
    'yui-native': (t) => {
      /**  @type {import('path')} */
      const path = orgi_require('path')
      let modulePath = path.resolve(__dirname, `./nt_native.node`)
      if (process.env['YUI_NATIVE']) {
        modulePath = process.env['YUI_NATIVE']
      }
      if (!orgi_require('fs').existsSync(modulePath)) {
        log('---------------->nt_native.node not exists!')
        return {
          install: () => {
            log('----------------->nt_native.node not exists! fake installing...')
            return false
          }
        }
      }
      return orgi_require.apply(t, [modulePath])
    }
  }
  module.require = function (...args) {
    if (handle[args[0]]) {
      return handle[args[0]](this)
    }
    return orgi_require.apply(this, args)
  }
})();
