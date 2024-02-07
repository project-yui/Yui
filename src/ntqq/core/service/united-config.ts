import { useLogger } from "../../../common/log"
import { useNTStore } from "../store"

const log = useLogger('UnitedConfig')

export const initUnitedConfig = () => {
  log.info('initUnitedConfig')
  const { getWrapperSession } = useNTStore()
  const session = getWrapperSession()
  
  const unitedConfig = session.getUnitedConfigService()
  log.info('unitedConfig:', unitedConfig)
  unitedConfig.registerUnitedConfigPushGroupList([
    '100237',
    '100241',
    '100279',
    '100267',
    '101786',
    '100343',
    '100350',
    '100636',
    '101191',
    '100165',
    '100156',
    '100076',
    '100356',
    '101211',
    '100392',
    '100473',
    '100809',
    '101121',
    '101241',
    '100072',
    '100073',
    '100242',
    '100083',
    '100243',
    '100084',
    '100244',
    '100085',
    '100272',
    '100629',
    'group_bacth_download_max_num',
    '100164',
    '100690',
    '100691',
    '100354',
    '100716',
    '100167',
    '100647',
    '100069',
    '100354',
    '100145',
    '101227',
    '101206',
    '101205',
    '101204',
    '101203',
    '101202',
    '101201',
    '101200',
    'fav_face_lottie_emj'
  ])
}