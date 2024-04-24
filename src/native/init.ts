import { install } from 'yukihana-native'
import { useConfigStore } from '../store/config'
import { useLogger } from '../common/log'

const log = useLogger('NativeInit')
export const initNative = () => {
    // 获取函数签名
    const { getSignature } = useConfigStore()
    const sig = getSignature()
    const sigData: YukihanaNativeWrapper.SignatureType = {}

    if (sig?.sqlite3_stmt) {
        const signature = sig?.sqlite3_stmt
        const sigArr = signature?.match(/[a-zA-Z0-9]{2}/g)?.map(e=>parseInt(`0x${e}`))
        if (sigArr !== undefined) {
            sigData.sqlite3_stmt = sigArr
        }
    }
    if (sig?.get_ip_by_domain) {
        const signature = sig?.get_ip_by_domain
        const sigArr = signature?.match(/[a-zA-Z0-9]{2}/g)?.map(e=>parseInt(`0x${e}`))
        if (sigArr !== undefined) {
            sigData.hosts = sigArr
        }
    }
    setTimeout(() => {
        log.info('install:', sigData)
        const result = install(sigData)
        log.info('install result:', result)
    }, 2000)
}