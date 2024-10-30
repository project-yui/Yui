const fs = require('fs')
const path = require('path')
let data = fs.readFileSync(path.resolve(__dirname, '../docs/functions/func.log')).toString()
data = data.split('\n')
console.log(data.length)
const allFuncs = data.filter(e => e && e.length > 0).map(e => {
    let a=e.split(' ')
    const [service, func] = a[5].split('::')
    return {
        service,
        func: func,
        count: parseInt(a[7])
    }
})
const _exports = {}
for(const func of allFuncs)
{
    if (_exports[func.service])
    {
        _exports[func.service].push(func)
    }
    else
    {
        _exports[func.service] = [func]
    }
}

let markdown = ''
// 遍历类
for (const serviceName in _exports) {
    console.info('serviceName:', serviceName)
    const service = _exports[serviceName]
    console.info('service:', service)
    const funcs = service
    markdown += `## ${serviceName}\n\n`
    markdown += '| 方法名 | 参数数量 |\n'
    markdown += '|-------|-----|\n'
    // 遍历方法
    for (const func of funcs) {
        markdown += `| ${func.func} | ${func.count} |\n`
    }
    markdown += '\n'
}
fs.writeFileSync(path.resolve(__dirname, '../docs/function.md'), markdown)