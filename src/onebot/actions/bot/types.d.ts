export interface QuickLoginItem {
    /**
     * QQ号
     */
    uin: `${number}`
    /**
     * 用户ID
     */
    uid: `u_${string}`
    /**
     * 昵称
     */
    nick_name: string
    face_url: string
    face_path: string
    login_type: 1 | 2
    /**
     * 是否快速登录
     */
    is_quick_login: boolean
    /**
     * 是否自动登录
     */
    is_auto_login: boolean
}