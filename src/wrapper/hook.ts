import { randomUUID } from "crypto";
import { useLogger } from "../common/log";
import { readFileSync } from "fs";

const log = useLogger('Wrapper/hook')

const readFile = (path: string) => {
  const data = readFileSync(path).toString()
  log.info(path, 'content:\n', data)
}
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
      const genProxyForObject = (name: string | symbol, o: any) => {
        log.info('type:', typeof o)
        if (o === undefined)
        {
          return undefined
        }
        return new Proxy(o, {
          construct(target, argArray, newTarget) {
            log.info(`construct from ${String(name)}:`, target, argArray, newTarget)
            return o(...argArray)
          },
          get(obj, p, recv){
            log.info(`get from ${String(name)}:`, obj, p, recv)
            if (p == 'get') {
              log.info('get ---->', o.get())
              log.info('get ---->', o.get().prototype)
              log.info('get ---->', o.prototype)
              log.info('get ---->', Object.keys(o.prototype))
              return o.get
            }
            return o[p]
          }
        })
      }
      const _exports = m.exports
      m.exports = new Proxy({}, {
        get(obj, p, recv) {
          log.info('get from export:', obj, p, recv)
          return genProxyForObject(p, _exports[p])
        }
      })
      // for (const serviceName in _exports) {
      //   const service = _exports[serviceName]
      //   log.info('service:', service)
      //   log.info('function:', service.prototype)
      //   _exports[serviceName] = new Proxy
      // }
    }
    return ret
  }
}