
const genImport = (classList, functions) => {
    const list = functions.filter(e => /get([a-zA-Z]+Service)/.test(e.name)).map(e => e.name)
    return list.map(e => /get([a-zA-Z]+Service)/.exec(e)[1]).map(baseName => {
        const name = classList.find(e => e.endsWith(`NodeIKernel${baseName}`) || e.endsWith(`NodeI${baseName}`))
        if (!name) return undefined
        return`import { ${name} } from './${name}'`
    }).filter(e => e).join('\n')
}

const genStaticFunction = (funcInfo) => {
    if (funcInfo.name === 'getNTWrapperSession') {
        return `static getNTWrapperSession(...args: any[]) {
            log.info('getNTWrapperSession called with args:', args)
            const result = engine.getNTWrapperSession(...args)
            if (!this.singleton) {
                this.singleton = new this(result)
            }
            log.info('getNTWrapperSession called result:', this.singleton)
            return this.singleton
        }`
    }
}

const genDynamicFunction = (funcInfo, classList) => {
    if (/get([a-zA-Z]+Service)/.test(funcInfo.name)) {
        const baseName = /get([a-zA-Z]+Service)/.exec(funcInfo.name)[1]
        const name = classList.find(e => e.endsWith(`NodeIKernel${baseName}`) || e.endsWith(`NodeI${baseName}`))
        if (!name) {
            throw new Error(`Can not found name: ${baseName}`)
        }
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
        return new ${name}(result)
    }`
    } else if (funcInfo.name === 'init') {
        return `
    init(...args: any[]) {
        const getListener = (listener: any) => new Proxy(listener, {
            get(target, p, recv) {
                return function (...args: any[]) {
                    log.info(\`NodeIQQNTWrapperSession/\${String(p)} call start\`, args)
                    const ignore: string[] = [
                        // 'onMSFStatusChange',
                        // 'onNTSessionCreate',
                        // 'onOpentelemetryInit',
                        // 'onSessionInitComplete',
                        // 'dispatchCall',
                        // 'onSendMsfReply',
                    ]
                    if (ignore.includes(String(p))) {
                        log.info(\`NodeIQQNTWrapperSession/\${String(p)} call ignored.\`)
                        return;
                    }
                    const result = target[p](...args)
                    log.info(\`NodeIQQNTWrapperSession/\${String(p)} call end\`, args)
                    return result
                }
            }
        })
        log.info('init called with args:', args)
        const result = this.instance.init(args[0], getListener(args[1]), getListener(args[2]), getListener(args[3]))
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('init called  promise result:', result)
                return res
            })
        }
        log.info('init called result:', result)
        return result
    }`
    }
}

module.exports = {
    genStaticFunction,
    genDynamicFunction,
    genImport,
}