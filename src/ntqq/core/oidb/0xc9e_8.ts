import os from 'os'
import { useLogger } from '../../../common/log'
import { CheckScanStatusResult } from '../../types/core/oidb/0xc9e_8'
const log = useLogger('Oidb0xc9e_8')
export class Oidb0xc9e_8 {
    private uin: number
    constructor(uin: number) {
        this.uin = uin
    }
    async getQRCode(uinToken: string, devToken: string) {
        const result = await this.req({
            str_dev_auth_token: devToken,
            uint32_flag: 1,
            uint32_url_type: 0,
            str_uin_token: uinToken,
            str_dev_type: process.platform === 'win32' ? 'Windows' : 'Linux',
            str_dev_name: os.hostname()
        })
        log.info('get qrcode result:', result)
        return result.str_url
    }
    async checkScanStatus(url: string): Promise<CheckScanStatusResult> {
        const checkToken = new URL(url).searchParams.get('str_url') || ''
        if (!checkToken) {
            throw new Error("'str_url' is not found in url");
        }
        const result = await this.req({
            uint32_flag: 0,
            bytes_token: btoa(checkToken),
        })
        log.debug('check scan status result:', result)
        const ret: CheckScanStatusResult = {
            status: 'waiting'
        }
        if (result.ErrorCode === 0) {
            switch(result.uint32_guarantee_status) {
                case 0:
                    ret.status = 'waiting'
                    break
                case 1:
                    ret.status = 'confirmed'
                    ret.token = result.str_nt_succ_token
                    break
                case 3:
                    ret.status = 'scanned'
                    break
                case 4:
                    ret.status = 'rejected'
                    break
            }
        }
        else if (result.ErrorCode === 1005) {
            ret.status = 'expired'
        } else {
            ret.status = 'error'
        }
        return ret
    }
    private req(data: any) {
        const url = `https://oidb.tim.qq.com/v3/oidbinterface/oidb_0xc9e_8?uid=${this.uin}&getqrcode=1&sdkappid=39998&actype=2`
        return fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) QQ/9.9.23-42430 Chrome/138.0.7204.35 Electron/37.1.0 Safari/537.36',
                origin: 'app://.',
            },
            body: JSON.stringify(data)
        }).then(res => res.json())
    }
}