import { install } from 'yukihana-native'

export const initNative = () => {
    const signature = '48895C2420564883EC20488BD933F6E8DC'
    const sigArr = signature.match(/[a-zA-Z0-9]{2}/g)?.map(e=>parseInt(`0x${e}`))
    if (sigArr !== undefined) {
        setTimeout(() => {
            const result = install(sigArr)
            console.log('install result:', result)
        }, 2000)
    }
}