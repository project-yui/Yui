import { addPkg, install } from 'yui-native'
import { useConfigStore } from '../store/config'
import { useLogger } from '../common/log'
import { useNTCore } from '../ntqq/core/core'
import { CommunicationPkg } from '../ntqq/protobuf/communication'
import { useNTConfig } from '../ntqq/store/config'
import { useNTUserStore } from '../ntqq/store/user'

const log = useLogger('Native')
export const initNative = (name: string) => {
    // 获取函数签名
    const { getSignature } = useConfigStore()
    const sig = getSignature()
    const sigData: YuiNativeWrapper.SignatureType = {}

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
    if (sig?.msf_task) {
        const signature = sig?.msf_task
        const sigArr = signature?.match(/[a-zA-Z0-9]{2}/g)?.map(e=>parseInt(`0x${e}`))
        if (sigArr !== undefined) {
            sigData.msf = sigArr
        }
    }
    if (sig?.msf_resp) {
        const signature = sig?.msf_resp
        const sigArr = signature?.match(/[a-zA-Z0-9]{2}/g)?.map(e=>parseInt(`0x${e}`))
        if (sigArr !== undefined) {
            sigData.msf_resp = sigArr
        }
    }
    log.info('install target:', sigData)
    const result = install(name, sigData)
    log.info('install result:', result)
}

/**
 * 
 * @param cmd 
 * @param data 
 * @returns 
 */
export const sendCustomPkg = async (cmd: string, data: Uint8Array) => {
    const { getWrapperSession } = useNTCore()
    const session = getWrapperSession()
    log.debug('wrapper session:', session)
    const search = session.getSearchService()
    log.debug('search service:', search)
    const { getCurrentAccountData } = useNTUserStore()
    const info = getCurrentAccountData()
    const send = addPkg({
        data: data,
        uin: info.info.uin,
        cmd,
    })
    log.debug('emit start ...')
    const t = search.searchStranger('565656556', {
      keyWords: '1145141919810', // 触发关键字
      forceUpdate: true
    }, {
      businessMask: [],
      cookie: new Uint8Array(),
      pageSize: 1
    })
    log.debug('emit over, await ...')
    const result = await send
    log.debug('decode ...', result)
    const resp = CommunicationPkg.decode(result, result.byteLength)
    return resp
}
/**
 * 
 * @param cmd 
 * @param data 
 * @returns 
 */
export const sendCustomPkgV2 = async (cmd: string, data: Uint8Array) => {
    const { getWrapperSession } = useNTCore()
    const session = getWrapperSession()
    log.debug('wrapper session:', session)
    const search = session.getSearchService()
    log.debug('search service:', search)
    const { getCurrentAccountData } = useNTUserStore()
    const info = getCurrentAccountData()
    const send = addPkg({
        data: data,
        uin: info.info.uin,
        cmd,
    })
    log.debug('emit start ...')
    const t = search.searchStranger('565656556', {
      keyWords: '1145141919810', // 触发关键字
      forceUpdate: true
    }, {
      businessMask: [],
      cookie: new Uint8Array(),
      pageSize: 1
    })
    log.debug('emit over, await ...')
    const result = await send
    return result
}