import { YuiConfig } from "../../src/store/config-type"

interface YuiConfigDev {
    yui: {
        dev: {
        }
    }
}

export type YuiDevConfig = YuiConfigDev & YuiConfig