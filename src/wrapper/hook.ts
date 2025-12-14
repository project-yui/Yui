import { useLogger } from "../common/log";
import { readFileSync } from "fs";
import { getWrapperExports } from "./exports";

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
      // const typeMap: Record<string, 'object' | 'function'> = {
      //   'wrapper.NodeIQQNTWrapperEngine': 'object',
      //   'wrapper.NodeIQQNTStartupSessionWrapper': 'object',
      //   'wrapper.NodeIQQNTStartupSessionWrapper.create': 'function',
      //   'wrapper.NodeIQQNTWrapperSession': 'object',
      //   'wrapper.NodeQQNTWrapperUtil': 'object',
      //   'wrapper.NodeIKernelLoginService': 'object',
      // }
      // const genProxyForObject = (name: string | symbol, o: any) => {
      //   log.info('type:', typeof o)
      //   if (o === undefined)
      //   {
      //     return undefined
      //   }
      //   return new Proxy(o, {
      //     construct(target, argArray, newTarget) {
      //       log.info(`construct from ${String(name)}:`, target, argArray, newTarget)
      //       return o(...argArray)
      //     },
      //     get(obj, p, recv){
      //       try {
      //         log.info(`get from ${String(name)}:`, p)
      //         const r = o[p]
      //         log.info(`typeof ${String(name)}.${String(p)}:`, typeof r)
      //         const type = typeMap[`${String(name)}.${String(p)}`]
      //         if (type === 'object' && r !== null) {
      //           log.info('replace object.')
      //           return genProxyForObject(`${String(name)}.${String(p)}`, r)
      //         } else if (type === 'function') {
      //           log.info('replace function.')
      //           return function (...args: any[]) {
      //             log.info(`call ${String(name)}.${String(p)} with args:`, args)
      //             const res = r.apply(o, args)
      //             log.info(`${String(name)}.${String(p)} result:`, res)
      //             return res
      //           }
      //         } 
      //         return r
      //       } catch (e) {
      //         log.error('error in get proxy:', e)
      //       }
      //     }
      //   })
      // }
      const _exports = {
        ...m.exports,
        ...getWrapperExports(m.exports)
      }
      m.exports = _exports
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