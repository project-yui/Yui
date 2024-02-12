import { randomUUID } from "crypto";
import { useLogger } from "../common/log";

const log = useLogger('Wrapper/hook')

/**
 * 底层 wrapper.node hook
 */
export const hookWrapper = ()=> {
  
  const open = (process as any).dlopen
  // 拦截native加载方法
  ;(process as any).dlopen = (m: any, file: string) => {
    log.info('process.dlopen', m, file)
    // 调用默认native加载方法
    const ret = open(m, file)
    log.info('dlopen result:', ret, m)

    // 修改加载后的native方法
    if (file.includes('wrapper')){
      const _exports = m.exports
      for (const serviceName in _exports) {
        const service = _exports[serviceName]
        
        // 修改构造方法
        const ori = service
        const temp = function (...args: any) {
          const id = randomUUID()
          log.info(`wrapper/${serviceName}[${id}]/constructor`, ...args)
          const r = new ori(...args)
          r.id = id
          return r
        }
        temp.prototype.constructor = Object.create(ori.prototype)
        temp.prototype.constructor = temp
        Object.setPrototypeOf(temp, ori);
        _exports[serviceName] = temp

        const funcs = service.prototype
        for (const funcName in funcs) {
          const func = funcs[funcName]
          // 修改方法
          funcs[funcName] = function(...args: any) {
            let r = func.apply(this, args)
            if (r instanceof Promise) {
              const uuid = randomUUID()
              log.info(`wrapper/${serviceName}[${this.id}]/${funcName}`, uuid)
              return r.then((res) => {
                log.info(`wrapper/${serviceName}[${this.id}]/${funcName}/${uuid}`, '\narguments:', ...args, '\nJSON arguments:', JSON.stringify(args), '\n----\nresponse:\n', res)
                return Promise.resolve(res)
              })
            }
            else {
              log.info(`wrapper/${serviceName}[${this.id}]/${funcName}`, '\narguments:', ...args, '\nJSON arguments:', JSON.stringify(args), '\n----\nresponse:\n', r)
            }
            return r
          }
        }
      }
    }
    return ret
  }
}