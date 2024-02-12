import bytenode from 'bytenode'
import { resolve } from 'path';
;(async() => {
  const args = process.argv.splice(2)
  console.log(process.version)
  console.log('args:', args)
  console.log('fromPath:', args[0])
  console.log('toPath:', args[1])
  const fromPath = args[0] || resolve(__dirname, './core.js')
  const toPath = args[1] || resolve(__dirname, './core.jsc')
  console.log('fromPath:', fromPath)
  console.log('toPath:', toPath)
  console.log('compile....')
  const coreCode = await bytenode.compileFile({
    filename: fromPath,
    compileAsModule: true,
  })
  console.log(coreCode)
  process.exit(0)
})()