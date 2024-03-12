export interface YukihanaConfig {
    yukihana: {
        ws: {
            host: string
            port: number
        }
        signature: {
            win32: Record<string, SingatureInfo>
            linux: Record<string, SingatureInfo>
        }
    }
}
export interface SingatureInfo {
    sqlite3_stmt: string
}