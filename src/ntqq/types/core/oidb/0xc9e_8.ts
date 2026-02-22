export interface CheckScanStatusResult {
    status: 'waiting' | 'confirmed' | 'scanned' | 'rejected' | 'expired' | 'error'
    /**
     * confirmed状态下会有token，用于后续登录
     */
    token?: string
}