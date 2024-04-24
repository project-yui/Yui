import { YukihanaConfig } from "../../src/store/config-type"

interface YukihanaConfigDev {
    yukihana: {
        dev: {
            program_path?: string
        }
    }
}

export type YukihanaDevConfig = YukihanaConfigDev & YukihanaConfig