import { useLogger } from "../../common/log"
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
const qrCodeFailed = () => {
    const { sendMessage } = useServer()
    const getQrCode = registerEventListener('KernelLoginListener/onQRCodeSessionFailed', 'once', (p1: number, p2: number) => {
        /**
         * 未扫描，超时：1 10
         * 扫描了，超时未确认：1 10
         */
        const ret: EventDataType<any> = {
            self: {
                id: 0,
                uid: 'u_0'
            },
            time: new Date().getTime(),
            type: "notice",
            detailType: "qrcode_error",
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
    const getQrCode = registerEventListener('KernelLoginListener/onQRCodeSessionUserScaned', 'once', (p1: number, avatarUrl: string) => {

        const ret: EventDataType<any> = {
            self: {
                id: 0,
                uid: 'u_0'
            },
            time: new Date().getTime(),
            type: "notice",
            detailType: "qrcode_scaned",
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
    const getQrCode = registerEventListener('KernelLoginListener/onQRCodeLoginSucceed', 'once', (userInfo) => {

        const ret: EventDataType<any> = {
            self: {
                id: parseInt(userInfo.uin),
                uid: userInfo.uid
            },
            time: new Date().getTime(),
            type: "notice",
            detailType: "qrcode_success",
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
    const getQrCode = registerEventListener('KernelLoginListener/onUserLoggedIn', 'once', (uin: number) => {

        const ret: EventDataType<any> = {
            self: {
                id: 0,
                uid: 'u_'
            },
            time: new Date().getTime(),
            type: "notice",
            detailType: "qrcode_userLogged",
            subType: "",
            data: {
                uin: uin,
            }
        }
        sendMessage(ret)
    })
}

/**
 * 请求二维码的时候才会调用
 */
export const listenLoginEvent = () => {
    log.info('listenLoginEvent')
    qrCodeFailed();
    qrCodeScaned();
    qrCodeSuccess();
    alreadyLogin();
}