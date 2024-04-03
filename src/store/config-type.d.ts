export interface YukihanaConfig {
    yukihana: {
        'storage-path': string
        http: {
            host: string
            port: number
        }
        signature: {
            win32: Record<string, SingatureInfo>
            linux: Record<string, SingatureInfo>
        }
        ws: {
            host: string
            port: number
        }
    }
}
export interface SingatureInfo {
    sqlite3_stmt: string
}