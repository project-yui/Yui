/**
 * 获取application.asar的源代码
 * 
 * 1. 解压asar [asar e application.asar application]
 * 2. 修改脚本路径
 * 3. 使用QQ.exe执行脚本
 * 
 * 原理：QQ.exe读取文件时会自动解密。
 * 图片似乎没有效果，不重要。
 */

const getSourceCode = () => {
  const applicationDir = path.resolve(__dirname, '../versions/9.9.3-17412/application')
  const targetPath = path.resolve(__dirname, '../versions/9.9.3-17412/application.out')
  const queue = [
    {
      path: '.',
      type: 'dir'
    }
  ]
  while(queue.length > 0) {
    const first = queue.shift()
    if (first.type == 'dir') {
      console.log('目录')
      const p = path.resolve(applicationDir, first.path)
      const itemList = fs.readdirSync(p)
      const r = itemList.map(e => ({
        path: `${first.path}/${e}`,
        type: fs.statSync(path.resolve(applicationDir, `${first.path}/${e}`)).isDirectory() ? 'dir' : 'file'
      }))
      console.log(r)
      queue.push(...r)
    }
    else if (first.type == 'file') {
      console.log('文件')
      const p = path.resolve(applicationDir, first.path)
      const data = fs.readFileSync(p).toString()
      const writePath = path.join(targetPath, first.path)
      console.log('write to:', writePath)
      try {
        const dir = path.dirname(writePath)
        console.log('mkdir:', dir)
        fs.mkdirSync(dir, {recursive: true})
        // fs.rmdirSync(dir)
      } catch (error) {
        
      }
      fs.writeFileSync(writePath, data)
    }
  }
  
}