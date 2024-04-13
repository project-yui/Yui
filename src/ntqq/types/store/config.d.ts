
export interface StoreAppInfo {
    app_id: `${number}`
    /**
     * 3 - windows
     * 5 - linux
     */
    platform_type: 3 | 5
    /**
     * 4 - desktop ?
     */
    app_type: 4
    app_version: string
    os_version: string
    /**
     * 
     * V1_AND_SQ_${getQQVersion(MobileQQ.getContext())}_${getQQVersionCode()}_YYB_D
     */
    qua: `V1_WIN_NQ_${string}_GW_B` | `V1_LNX_NQ_${string}_GW_B` | `V1_AND_SQ_${string}_YYB_D`
    clientVer: string
}