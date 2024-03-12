import { install } from 'yukihana-native'
import { useConfigStore } from '../store/config'

export const initNative = () => {
    // 获取函数签名
    const { getSignature } = useConfigStore()
    const sig = getSignature()

    const signature = sig?.sqlite3_stmt
    const sigArr = signature?.match(/[a-zA-Z0-9]{2}/g)?.map(e=>parseInt(`0x${e}`))
    if (sigArr !== undefined) {
        setTimeout(() => {
            const result = install(sigArr)
            console.log('install result:', result)
        }, 2000)
    }
}