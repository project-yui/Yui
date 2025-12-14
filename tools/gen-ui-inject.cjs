const path = require('path')
const fs = require('fs')

const list = fs.readdirSync(path.resolve(__dirname, '../src/wrapper/exports/defines'))
console.info(list)
const parseDefine = (define) => {
    const lines = define.replace(/\r\n/g, '\n').split('\n')
    const classAndFunction = lines.map(e => e.split(' ')[3])
    const className = classAndFunction[0].split('::')[0]
    return {
        className,
        functions: classAndFunction.map(e => e.split('::')[1])
    }
}
class TypescriptFileGenerator {
    constructor(define) {
        this.classDefine = define
    }
    genFunction(name) {
        return `
    ${name}(...args: any[]) {
        log.info('${name} called with args:', args)
        return this.instance.${name}(...args)
    }`
    }
    gen() {
        return `import { useLogger } from "../../common/log";
const log = useLogger('Wrapper/${this.classDefine.className}')
export class ${this.classDefine.className} {
    protected static singleton?: any = undefined
    protected instance: any
    constructor(instance: any) {
        log.info('constructor called')
        this.instance = instance
    }${this.classDefine.functions.map(e => this.genFunction(e)).join('')}
};
export const get${this.classDefine.className} = (engine: any): any => {
    return class extends ${this.classDefine.className} {
        static get() {
            log.info('get called')
            const instance = engine.get()
            if (!this.singleton) {
                this.singleton = new this(instance)
            }
            return this.singleton
        }
    }
}`
    }
}
for (const file of list) {
    const content = fs.readFileSync(path.resolve(__dirname, '../src/wrapper/exports/defines', file), 'utf-8')
    const classDefine = parseDefine(content)
    const targetFile = path.resolve(__dirname, `../src/wrapper/exports/${classDefine.className}.ts`)
    if (fs.existsSync(targetFile)) continue
    console.info(classDefine)
    const generator = new TypescriptFileGenerator(classDefine)
    const c = generator.gen()
    fs.writeFileSync(targetFile, c)
}