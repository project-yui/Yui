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
        // BrowserWindow: HookedBrowserWindow
      }
    },
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