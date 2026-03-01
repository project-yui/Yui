
module.exports = {
    genDynamicFunction: (funcInfo) => {
        if (funcInfo.name === 'addKernelLoginListener') {
            return `
    addKernelLoginListener(...args: any[]) {
        const listener = new Proxy(args[0], {
            get(target, p, recv) {
                return function (...args: any[]) {
                    log.info(\`NodeIKernelLoginService/\${String(p)} call start\`, args)
                    const ignore: string[] = [
                        // 'onLoginConnecting',
                        // 'onLoginConnected',
                        // 'onQRCodeLoginSucceed', // 触发Login -> init,start
                        // 'onLoginState',
                    ]
                    if (ignore.includes(String(p))) {
                        log.info(\`NodeIKernelLoginService/\${String(p)} call ignored.\`, args)
                        return
                    }
                    const result = target[p](...args)
                    log.info(\`NodeIKernelLoginService/\${String(p)} call end\`, args)
                    return result
                }
            }
        })
        log.info('addKernelLoginListener called with args:', args)
        const result = this.instance.addKernelLoginListener(listener)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('addKernelLoginListener called  promise result:', result)
                return res
            })
        }
        log.info('addKernelLoginListener called result:', result)
        return result
    }`
        }
    }
}