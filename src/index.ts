import { useLogger } from "./common/log"
import { startApp } from "./bootstrap/start-app"

const log = useLogger('Index')
try {
  startApp()
}
catch(err) {
  log.error('Error:', err)
  process.exit(1)
}
