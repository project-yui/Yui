const path = require('path')
const fs = require('fs')

const getClassGroupList = () => {
    const groupData = {}

    {
        const funcContent = fs.readFileSync(path.resolve(__dirname, '../docs/functions/full-func.log'), 'utf-8')
        const lines = funcContent.replace(/\r\n/g, '\n').split('\n')
        const classAndFunction = lines.map(e => e.split(' ')[5])
        for (const item of classAndFunction){
            const [className, functionName] = item.split('::')
            groupData[className] = groupData[className] || {}
            groupData[className][functionName] = 'static'
        }
    }
    {
        const funcContent = fs.readFileSync(path.resolve(__dirname, '../docs/functions/instance-func.log'), 'utf-8')
        const lines = funcContent.replace(/\r\n/g, '\n').split('\n')
        const classAndFunction = lines.map(e => e.split(' ')[3])
        for (const item of classAndFunction){
            const [className, functionName] = item.split('::')
            groupData[className] = groupData[className] || {}
            groupData[className][functionName] = 'dynamic'
        }
    }

    const list = []
    for (const k in groupData) {
        const func = []
        for (const name in groupData[k]) {
            func.push({
                name: name,
                type: groupData[k][name]
            })
        }
        list.push({
            className: k,
            functions: func.sort((a, b) => a.name > b.name ? 1 : -1)
        })
    }
    return list
}

const groups = getClassGroupList()

class TypescriptFileGenerator {
    constructor(define, classList) {
        this.classDefine = define
        this.classList = classList
    }
    genDynamicFunction(funcInfo) {
        try {
            const replace = require(`./wrapper/${this.classDefine.className}.cjs`)
            const t = replace?.genDynamicFunction(funcInfo, this.classList)
            if (t) {
                return t
            }
        } catch{}
        return `
    ${funcInfo.name}(...args: any[]) {
        log.info('${funcInfo.name} called with args:', args)
        const result = this.instance.${funcInfo.name}(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('${funcInfo.name} called  promise result:', result)
                return res
            })
        }
        log.info('${funcInfo.name} called result:', result)
        return result
    }`
    }
    genStaticFunction(funcInfo) {
        try {
            const replace = require(`./wrapper/${this.classDefine.className}.cjs`)
            const t = replace?.genStaticFunction(funcInfo, this.classList)
            if (t) {
                return t
            }
        } catch{}
        if (funcInfo.name === 'get') {
            return `static get() {
            log.info('get called')
            const instance = engine.get()
            if (!this.singleton) {
                this.singleton = new this(instance)
            }
            return this.singleton
        }`
        }
        return `
        static ${funcInfo.name}(...args: any[]) {
            log.info('${funcInfo.name} called with args:', args)
            const result = engine.${funcInfo.name}(...args)
            log.info('${funcInfo.name} called result:', result)
            return result
        }`
    }
    gen() {
        let importStr = ''
        try {
            const replace = require(`./wrapper/${this.classDefine.className}.cjs`)
            importStr = replace?.genImport(this.classList, this.classDefine.functions) ?? ''
        } catch{}
        return `import { useLogger } from "../../common/log";
${importStr}
const log = useLogger('Wrapper/${this.classDefine.className}')
export class ${this.classDefine.className} {
    protected static singleton?: any = undefined
    protected instance: any
    constructor(instance: any) {
        log.info('constructor called')
        this.instance = instance
    }${this.classDefine.functions.filter(e => e.type === 'dynamic').map(e => this.genDynamicFunction(e)).join('')}
};
export const get${this.classDefine.className} = (engine: any): any => {
    return class extends ${this.classDefine.className} {
        ${this.classDefine.functions.filter(e => e.type === 'static').map(e => this.genStaticFunction(e)).join('')}
    }
}`
    }
}
for (const group of groups) {
    const targetFile = path.resolve(__dirname, `../src/wrapper/exports/${group.className}.ts`)
    // if (fs.existsSync(targetFile)) continue
    console.info(group)
    const generator = new TypescriptFileGenerator(group, groups.map(e => e.className))
    const c = generator.gen()
    fs.writeFileSync(targetFile, c)
}