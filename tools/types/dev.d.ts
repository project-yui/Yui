import { YuiConfig } from "../../src/store/config-type"

interface YuiConfigDev {
    yui: {
        dev: {
            program_path?: string
        }
    }
}

export type YuiDevConfig = YuiConfigDev & YuiConfig