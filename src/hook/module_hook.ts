import { Module } from "module"
import { getHookedBrowserWindow } from "./electron_hook"
import { useLogger } from "../common/log"
const log = useLogger('ModuleHook')
export const hookModule = () => {
  const HookedBrowserWindow = getHookedBrowserWindow()
  const ModuleLoadHook: Record<string, (m: any) => any> = {
    electron: (module) => {
      return {
        ...module,
        BrowserWindow: HookedBrowserWindow
      }
    },
    // crypto: (module) => {
    //   console.log('load crypt')
    //   const _createHmac = function(...args) {
    //     // console.log('createHmac:', ...args)
    //     // console.log(args[1])
    //     const ret = module.createHmac(...args)
    //     ret._digest = ret.digest
    //     ret.digest = function(...args) {
    //       // console.log('digest args:', ...args)
    //       const ret = this._digest(...args)
    //       // console.log('digest ret:', ret)
    //       return ret
    //     }
    //     // console.log('createHmac ret:', ret)
    //     return ret
    //   }
    //   const _createCipheriv = function(...args) {
    //     // console.log('createCipheriv:', ...args)
    //     const ret = module.createCipheriv(...args)
    //     return ret
    //   }
    //   const _createDecipheriv = function(...args) {
    //     console.log('createDecipheriv:')
    //     const ret = module.createDecipheriv(...args)
    //     ret._update = ret.update
    //     ret.update = function(...a) {
    //       console.log('update:', ...a)
    //       return ret._update(...a)
    //     }
    //     ret._final = ret.final
    //     ret.final = function(...a) {
    //       console.log('final:', ...a)
    //       const r = ret._final(...a)
    //       console.log('r:', r.toString())
    //       return r
    //     }
    //     ret._write = ret.write
    //     ret.write = function(...a) {
    //       console.log('write:', ...a)
    //       const r = ret._write(...a)
    //       // console.log('r:', r.toString())
    //       return r
    //     }
        
    //     // console.log('createDecipheriv ret:', t)
    //     // ret._on = ret.on
    //     // ret.on = function(...args) {
    //     //   return ret._on(...args)
    //     // }
    //     return ret
    //   }
    //   // const ret = {}
    //   // for (const k in module) {
    //   //   ret[k] = function(...args) {
    //   //     console.log(`${k}:`, ...args)
    //   //     const ret = module[k](...args)
    //   //     return ret
    //   //   }
    //   // }
    //   // return ret
    //   return {
    //     ...module,
    //     createHmac: _createHmac,
    //     createCipheriv: _createCipheriv,
    //     createDecipheriv: _createDecipheriv,
    //   }
    // },
  }
  const original_load = (Module as any)._load;
  // console.log('Module:', Module)
  (Module as any)._load = (...args: any) => {
    const loaded_module = original_load(...args);

    // console.log('load', args[0])
    if (ModuleLoadHook[args[0]]) {
      return ModuleLoadHook[args[0]](loaded_module)
    }
    else {
      return loaded_module;
    }
  }
  const original_compile = (Module as any)._compile;
  (Module as any)._compile = function(...args: any[]) {
    log.info('_compile:', ...args)
    return original_compile(...args)
  }
}