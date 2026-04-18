import { existsSync, readFileSync } from "fs"
import yaml from 'yaml'
import { YuiConfig } from "./config-type"
import { getNTPackageInfo } from "../ntqq/common/utils"
import { useLogger } from "../common/log"
import { resolve } from "path"
import { mergeDeep } from "../common/deep-merge"

let configCache: YuiConfig = {
    yui: {
        profiles: {
            active: 'prod',
        },
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
const log = useLogger('Yui Config')

const cloneConfig = <TConfig>(config: TConfig): TConfig => {
    return JSON.parse(JSON.stringify(config)) as TConfig
}

const loadYamlConfig = (filePath: string) => {
    return yaml.parse(readFileSync(filePath).toString()) as YuiConfig
}

/**
 * 从文件加载配置
 * 
 * @returns 配置
 */
const loadFromFile = () => {
    log.info('loadFromFile')
    const defaultPath = resolve(__dirname, './yui.yaml')
    const localPath = resolve(__dirname, './yui.local.yaml')
    const defaultConfig = loadYamlConfig(defaultPath)
    log.info('cfg data:', defaultConfig)

    if (!existsSync(localPath)) {
        return defaultConfig
    }

    const localConfig = loadYamlConfig(localPath)
    log.info('local cfg data:', localConfig)
    return mergeDeep(cloneConfig(defaultConfig), localConfig) as YuiConfig
}

/**
 * 获取配置
 * 
 * @param update 强制读取最新配置
 * @returns 配置信息
 */
export const getConfig = (update: boolean = false) => {
    if (!inited || update) {
        try {
            inited = true
            configCache = mergeDeep(cloneConfig(configCache), loadFromFile()) as YuiConfig
        }
        catch (ex) {
            log.error('failed to load config!', ex)
        }
    }
    return configCache
}
export const getSignature = () => {
    const pkg = getNTPackageInfo()
    const cfg = getConfig()
    if (process.platform === 'linux' || process.platform === 'win32')
        return cfg.yui.signature[process.platform][pkg.version]
}
export const getStoragePath = () => {
  const cfg = getConfig()
  return resolve(__dirname, cfg.yui['storage-path'])
}
