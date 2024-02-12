import bytenode from 'bytenode'
import { readFileSync } from 'fs'
import { resolve } from 'path'
// require('./compile.js')
if (false) {
  require('./core.js')
}
else {
  const corePath = resolve(__dirname, './core.jsc')
  console.log('require:', corePath)
  const code = readFileSync(corePath)
  const f = bytenode.runBytecode(code)
  // const f = require(corePath)
  const d = {}
  f(d, require, module, __filename, __dirname)
}