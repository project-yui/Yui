import { constants } from "os"
import { resolve } from "path"
import { useLogger } from "../common/log"

const log = useLogger('Bootstrap/Runtime')

const loadLinuxPreload = () => {
  if (process.platform !== 'linux') {
    return
  }
  log.info('preload.node')
  const m = { exports: {} }
  const preload = process.env['YUI_PRELOAD'] || resolve(__dirname, '../preload.node')
  process.dlopen(
    m,
    preload,
    constants.dlopen.RTLD_NOW | constants.dlopen.RTLD_GLOBAL
  )
}

const registerProcessHooks = () => {
  process.on('unhandledRejection', (err) => {
    log.error('unhandledRejection:', err)
  })
}

export const initRuntime = () => {
  global.module = module
  loadLinuxPreload()
  registerProcessHooks()
}
