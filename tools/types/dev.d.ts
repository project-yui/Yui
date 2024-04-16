import { TelecordConfig } from "../../src/store/config-type"

interface TelecordConfigDev {
    telecord: {
        dev: {
            program_path?: string
        }
    }
}

export type TelecordDevConfig = TelecordConfigDev & TelecordConfig