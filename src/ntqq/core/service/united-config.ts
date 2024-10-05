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
    '102294',
    '102331',
    '102814',
    '100076',
    '100356',
    '101211',
    '102495',
    '100392',
    '100473',
    '100809',
    '102217',
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
    '102738',
    '102544',
    '100354',
    '100716',
    '100167',
    '100647',
    '102232',
    '102626',
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
    'fav_face_lottie_emj',
    '102176',
    '102810',
    '102772',
    '102793',
    '100075',
    '100074',
    '102219',
    '100759',
    '100077',
    '100987',
    '101558',
    '101718',
    '101963',
    '101989',
    '102027',
    '102878'
  ])
  log.info('registerUnitedConfigPushGroupList')
}