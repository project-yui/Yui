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
    // http: (module) => {
    //   return {
    //     ...module,
    //     request: function(...args: any){
    //       log.info('http request:', ...args)
    //       return module.request.apply(this, args)
    //     }
    //   }
    // },
    // https: (module) => {
    //   return {
    //     ...module,
    //     request: function(...args: any){
    //       log.info('https request:', ...args)
    //       return module.request.apply(this, args)
    //     }
    //   }
    // },
//     'wrapper.node': (module) => {
//       log.info('todo: hook wrapper.node')
//       return {
//         ...module,
//       }
//     },
//     'vm': (module) => {
//       // log.info('todo: hook vm', module)
//       return {
//         ...module,
//       }
//     },
//     'v8': (module) => {
//       // log.info('todo: hook v8', module)
//       return {
//         ...module,
//       }
//     },
//     'perf_hooks': (module) => {
//       // log.info('todo: hook perf_hooks', module)
//       return {
//         ...module,
//       }
//     },
//     'path': (module) => {
//       // log.info('hook path', module)
//       const resolve = module.resolve
//       const relative = module.relative
//       const dirname = module.dirname
//       const basename = module.basename
//       const join = module.join
//       const normalize = module.normalize
//       const isAbsolute = module.isAbsolute
//       const toNamespacedPath = module.toNamespacedPath
//       const extname = module.extname
//       const format = module.format
//       const parse = module.parse
//       return {
//         ...module,
//         resolve: function(...args: any) {
//           log.info('path.resolve:', ...args)
//           return resolve.apply(this, args)
//         },
//         normalize: function(...args: any) {
//           log.info('path.normalize:', ...args)
//           return normalize.apply(this, args)
//         },
//         isAbsolute: function(...args: any) {
//           log.info('path.isAbsolute:', ...args)
//           return isAbsolute.apply(this, args)
//         },
//         join: function(...args: any) {
//           log.info('path.join:', ...args)
//           return join.apply(this, args)
//         },
//         relative: function(...args: any) {
//           log.info('path.relative:', ...args)
//           return relative.apply(this, args)
//         },
//         toNamespacedPath: function(...args: any) {
//           log.info('path.toNamespacedPath:', ...args)
//           return toNamespacedPath.apply(this, args)
//         },
//         dirname: function(...args: any) {
//           log.info('path.dirname:', ...args)
//           return dirname.apply(this, args)
//         },
//         basename: function(...args: any) {
//           log.info('path.basename:', ...args)
//           return basename.apply(this, args)
//         },
//         extname: function(...args: any) {
//           log.info('path.extname:', ...args)
//           return extname.apply(this, args)
//         },
//         format: function(...args: any) {
//           log.info('path.format:', ...args)
//           return format.apply(this, args)
//         },
//         parse: function(...args: any) {
//           log.info('path.parse:', ...args)
//           return parse.apply(this, args)
//         },
//       }
//     },
//     '../major.node': (module) => {
//       log.info('todo: hook major.node', module)
//       const load = module.load
//       return {
//         load: function(...args: any) {
//           log.info('major.node load:', ...args)
//           return load.apply(this, args)
//         }
//       }
//     },
    // './launcher.node': (module) => {
    //   log.info('todo: hook launcher.node', module)
    //   const load = module.load

    //   return {
    //     load: function(...args: any) {
    //       log.info('launcher.node load:', ...args)
    //       load.apply(this, args)
    //     }
    //   }
    // },
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
    // log.info('module load:', args[0])
    const loaded_module = original_load(...args);

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