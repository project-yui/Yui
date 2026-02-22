import { useLogger } from "../../common/log"
import { NTLogin } from "../../ntqq/login/interfaces"
import { useServer } from "../../server/server"
import { useAsyncStore } from "../../store/async-store"
import { useStore } from "../../store/store"
import { EventDataType } from "./interfaces"

const { registerEventListener } = useStore()
const log = useLogger('Event/Login')
/**
 * 获取登录二维码
 * @returns 二维码信息
 */
const qrCodeFetch = () => {
    const { sendMessage } = useServer()
    const getQrCode = registerEventListener('KernelLoginListener/onQRCodeGetPicture', 'always', (payload: NTLogin.GetQRCodeResponse) => {
        const asyncStore = useAsyncStore()
        const s = asyncStore.getStore()
        log.info('qrCodeFetch async store:', s)
        const uin = s?.get('uin')
        if (!uin) {
            log.error('qrCodeFetch: user not found')
            return
        }
        /**
         * 二维码数据
         */
        const ret: EventDataType<any> = {
            self: {
                id: parseInt(uin),
                uid: 'u_0'
            },
            time: new Date().getTime(),
            type: "notice",
            detailType: "login.qrcode.fetch",
            subType: "",
            data: payload
        }
        sendMessage(ret)
    })
}

/**
 * 超时
 * @returns 二维码信息
 */
const qrCodeFailed = () => {
    const { sendMessage } = useServer()
    const getQrCode = registerEventListener('KernelLoginListener/onQRCodeSessionFailed', 'always', (p1: number, p2: number) => {
        const asyncStore = useAsyncStore()
        const s = asyncStore.getStore()
        log.info('qrCodeFetch async store:', s)
        const uin = s?.get('uin')
        if (!uin) {
            log.error('qrCodeFetch: user not found')
            return
        }
        /**
         * 未扫描，超时：1 10
         * 扫描了，超时未确认：1 10
         * 扫描了，拒绝：1 5
         */
        let detailType = 'login.qrcode.timeout'
        if (p2 === 5) {
            detailType = 'login.qrcode.refused'
        }
        const ret: EventDataType<any> = {
            self: {
                id: uin,
                uid: 'u_0'
            },
            time: new Date().getTime(),
            type: "notice",
            detailType: detailType,
            subType: "",
            data: {
                p1,
                p2,
            }
        }
        sendMessage(ret)
    })
}

/**
 * 登录二维码被扫描
 * 
 * @returns
 */
const qrCodeScaned = () => {
    const { sendMessage } = useServer()
    const getQrCode = registerEventListener('KernelLoginListener/onQRCodeSessionUserScaned', 'always', (p1: number, avatarUrl: string) => {
        const asyncStore = useAsyncStore()
        const s = asyncStore.getStore()
        log.info('qrCodeFetch async store:', s)
        const uin = s?.get('uin')
        if (!uin) {
            log.error('qrCodeFetch: user not found')
            return
        }
        const ret: EventDataType<any> = {
            self: {
                id: uin,
                uid: 'u_0'
            },
            time: new Date().getTime(),
            type: "notice",
            detailType: "login.qrcode.scanned",
            subType: "",
            data: {
                p1,
                avatarUrl: avatarUrl,
            }
        }
        sendMessage(ret)
    })
}

/**
 * 二维码登录成功
 * 
 * @returns
 */
const qrCodeSuccess = () => {
    const { sendMessage } = useServer()
    const getQrCode = registerEventListener('KernelLoginListener/onQRCodeLoginSucceed', 'always', (userInfo) => {

        const ret: EventDataType<any> = {
            self: {
                id: parseInt(userInfo.uin),
                uid: userInfo.uid
            },
            time: new Date().getTime(),
            type: "notice",
            detailType: "login.qrcode.success",
            subType: "",
            data: {
                account: userInfo.account,
                uin: userInfo.uin,
                uid: userInfo.uid,
                nick_name: userInfo.nickName,
                face_url: userInfo.faceUrl,
            }
        }
        sendMessage(ret)
    })
}

/**
 * 二维码登录成功
 * 
 * @returns
 */
const alreadyLogin = () => {
    const { sendMessage } = useServer()
    const getQrCode = registerEventListener('KernelLoginListener/onUserLoggedIn', 'always', (uin: number) => {
        const ret: EventDataType<any> = {
            self: {
                id: 0,
                uid: 'u_'
            },
            time: new Date().getTime(),
            type: "notice",
            detailType: "login.qrcode.alreadyLogin",
            subType: "",
            data: {
                uin: uin,
            }
        }
        sendMessage(ret)
    })
}

const deviceConfirmStatus = () => {
    const { sendMessage } = useServer()
    const asyncStore = useAsyncStore()
    const s = asyncStore.getStore()
    log.info('qrCodeFetch async store:', s)
    const uin = s?.get('uin')
    if (!uin) {
        log.error('qrCodeFetch: user not found')
        return
    }
    // 手Q确认异常的处理
    /**
     * 5 - 手Q取消授权
     * 9 - 手Q拒绝授权
     * 10 - 手机端长时间未确认
     */
    const getStatus = registerEventListener('KernelLoginListener/OnConfirmUnusualDeviceFailed', 'always', (errCode: number, errMsg: string, errTips: NTLogin.PayloadConfirmUnusualDeviceFailed) => {

        log.info('deviceConfirmStatus payload:', errCode)
        const ret: EventDataType<any> = {
            self: {
                id: uin,
                uid: 'u_'
            },
            time: new Date().getTime(),
            type: "notice",
            detailType: "login.account.deviceConfirm",
            subType: "",
            data: errCode
        }

        // 手Q有登录，但是手Q取消/拒绝授权
        if (errCode === 5) {
            ret.detailType = 'login.account.deviceConfirm.cancel'
        }
        else if (errCode === 9) {
            ret.detailType = 'login.account.deviceConfirm.rejected'
        }
        else if (errCode === 10) {
            ret.detailType = 'login.account.deviceConfirm.timeout'
        } else {
            ret.detailType = 'login.account.deviceConfirm.unknown'
        }

        sendMessage(ret)
    })
}

const loginStatusChange = () => {
    const { sendMessage } = useServer()
    const asyncStore = useAsyncStore()
    const s = asyncStore.getStore()
    log.info('qrCodeFetch async store:', s)
    const uin = s?.get('uin')
    if (!uin) {
        log.error('qrCodeFetch: user not found')
        return
    }
    const onLoginState = registerEventListener('KernelLoginListener/onLoginState', 'always', (state: number) => {
        log.info('onLoginState state:', state)
        if (state === 0) {
            // 手Q确认，登录成功
            const ret: EventDataType<any> = {
                self: {
                    id: uin,
                    uid: 'u_'
                },
                time: new Date().getTime(),
                type: "notice",
                detailType: "login.account.deviceConfirm.success",
                subType: "",
                data: state
            }
            sendMessage(ret)
        }
    })
}
/**
 * 初始化时调用
 */
export const listenLoginEvent = () => {
    log.info('listenLoginEvent')
    qrCodeFetch()
    qrCodeFailed();
    qrCodeScaned();
    qrCodeSuccess();
    alreadyLogin();
    deviceConfirmStatus()
    loginStatusChange()
}