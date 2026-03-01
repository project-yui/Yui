
module.exports = {
    genStaticFunction: (funcInfo) => {
        if (funcInfo.name === 'create') {
            return `static create(...args: any[]) {
            log.info('create called with args:', args)
            const result = engine.create(...args)
            if (!this.singleton) {
                this.singleton = new this(result)
            }
            log.info('create called result:', this.singleton)
            return this.singleton
        }`
        }
    }
}