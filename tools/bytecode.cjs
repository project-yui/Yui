const bytenode = require('bytenode')
const path = require('path')
const fs = require('fs')

;(async() => {
  bytenode.compileFile({
    filename: path.resolve(__dirname, '../ntqq/resources/app/app_launcher/core.js'),
    compileAsModule: true,
    electron: true,
    compress: true,
    electronPath: path.resolve(__dirname, '../ntqq/QQ.exe'),
    output: path.resolve(__dirname, '../ntqq/resources/app/app_launcher/core.jsc'),
  })
  // const ret = await bytenode.compileElectronCode(`console.log('hi');module.exports = {}`, {
  //   electronPath: path.resolve(__dirname, '../ntqq/QQ.exe'),
    
  // })
  // fs.writeFileSync(path.resolve(__dirname, '../ntqq/resources/app/app_launcher/core.jsc'), ret)
})()