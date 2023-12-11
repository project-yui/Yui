import { useLogger } from "../common/log"
import { hookElectron } from "./electron_hook"
import { hookModule } from "./module_hook"

const log = useLogger('HOOK')
export const hook = () => {
  log.info('hook electron')
  hookElectron()
  log.info('hook module')
  hookModule()
}