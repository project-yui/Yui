import { useLogger } from "../../../common/log"
import { useNTCore } from "../core"

const log = useLogger('UnitedConfig')

/**
 * Session初始化完成后才能调用
 */
export const initUnitedConfig = () => {
  log.info('initUnitedConfig')
  const { getWrapperSession } = useNTCore()
  const session = getWrapperSession()
  
  const unitedConfig = session.getUnitedConfigService()
  log.info('unitedConfig:', unitedConfig)
  const list: string[] = []
  for (let i = 0; i < 99999; i++) {
    list.push(`${100000 + i}`)
    
  }
  unitedConfig.registerUnitedConfigPushGroupList(list)
}