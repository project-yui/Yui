import { existsSync, readFileSync } from "fs"
import yaml from 'yaml'
import { YukihanaConfig } from "./config-type"
import { getNTPackageInfo } from "../ntqq/common/utils"
import { useLogger } from "../common/log"
import { resolve } from "path"

let configCache: YukihanaConfig = {
    yukihana: {
        http: {
            host: "127.0.0.1",
            port: 8081
        },
        'storage-path': './storage',
        ws: {
            host: "127.0.0.1",
            port: 8080
        },
        signature: {
            win32: {},
            linux: {}
        }
    }
}
let inited: boolean = false
const log = useLogger('Yukihana Config')

/**
 * 从文件加载配置
 * 
 * @returns 配置
 */
const loadFromFile = () => {
    log.info('loadFromFile')
    const cfg = readFileSync(resolve(__dirname, './yukihana.yaml')).toString()
    let defaultConfig = yaml.parse(cfg) as YukihanaConfig
    log.info('cfg data:', defaultConfig)
    {
        const localPath = resolve(__dirname, './yukihana.local.yaml')
        if (existsSync(localPath)) {
            const localCfg = readFileSync(localPath).toString()
            const localConfig = yaml.parse(localCfg) as YukihanaConfig
            defaultConfig = {
                ...defaultConfig,
                ...localConfig,
            }
        }
    }
    return defaultConfig
}

/**
 * 获取配置
 * 
 * @param update 强制读取最新配置
 * @returns 配置信息
 */
const getConfig = (update: boolean = false) => {
    if (!inited || update) {
        try {
            inited = true
            // TODO: 深层合并
            configCache = {
                ...configCache,
                ...loadFromFile()
            }
        }
        catch (ex) {
            log.error('failed to load config!', ex)
        }
    }
    return configCache
}
const getSignature = () => {
    const pkg = getNTPackageInfo()
    const cfg = getConfig()
    if (process.platform === 'linux' || process.platform === 'win32')
        return cfg.yukihana.signature[process.platform][pkg.version]
}
const getStoragePath = () => {
    const cfg = getConfig()
    return cfg.yukihana['storage-path']
}
export const useConfigStore = () => ({
    getConfig,
    getSignature,
    getStoragePath,
})