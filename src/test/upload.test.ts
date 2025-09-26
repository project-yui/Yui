import { connect } from "net";
import { useLogger } from "../common/log";
import { ReqDataHighwayHead, RspDataHighwayHead } from "../ntqq/protobuf/CSDataHighwayHead";
import { LongMsgReqBody } from "../ntqq/protobuf/longmsg";
import { PbMultiMsgNew, PbMultiMsgTransmit } from "../ntqq/protobuf/msg_transmit";
import { randomBytes, createHash } from "crypto";
import { gzipSync } from "zlib";
import { request } from "http";
const log = console;

describe('File Upload', () => {
    test('should upload a file successfully', async () => {
        const ip = '183.47.108.243'
        const port = 8080
        const ukey = Buffer.from([20,
            253,
            204,
            32,
            174,
            49,
            186,
            82,
            63,
            237,
            238,
            251,
            184,
            198,
            167,
            202,
            18,
            142,
            88,
            71,
            139,
            23,
            184,
            217,
            163,
            103,
            70,
            136,
            1,
            104,
            8,
            167,
            43,
            205,
            172,
            23,
            198,
            148,
            112,
            44,
            230,
            184,
            194,
            14,
            231,
            192,
            206,
            166,
            141,
            29,
            17,
            34,
            136,
            178,
            72,
            47,
            102,
            239,
            220,
            150,
            164,
            113,
            160,
            82,
            246,
            92,
            49,
            144,
            85,
            91,
            15,
            192,
            10,
            104,
            158,
            195,
            155,
            229,
            41,
            61,
            104,
            215,
            243,
            109,
            75,
            246,
            128,
            172,
            102,
            193,
            18,
            88,
            101,
            203,
            100,
            96,
            74,
            111,
            26,
            152,
            1,
            26,
            220,
            51,
            182,
            251,
            178,
            194,
            170,
            101,
            141,
            206,
            228,
            149,
            248,
            11,
            28,
            146,
            221,
            210,
            76,
            52,
            136,
            190,
            102,
            127,
            178,
            94,
            120,
            81,
            86,
            208,
            178,
            228,
            216,
            236,
            101,
            101,
            210,
            224,
            0,
            133,
            187,
            138,
            233,
            81,
            136,
            157,
            251,
            82,
            29,
            81])
        const msgSig = Buffer.from([204, 245,
            58,
            192,
            46,
            232,
            23,
            157,
            187,
            185,
            223,
            73,
            96,
            158,
            107,
            149,
            174,
            111,
            96,
            72,
            250,
            250,
            141,
            153,
            77,
            234,
            119,
            235,
            159,
            48,
            160,
            44,
            42,
            135,
            181,
            237,
            127,
            21,
            49,
            95,
            109,
            59,
            96,
            192,
            242,
            121,
            140,
            230,
            85,
            55,
            5,
            153,
            225,
            86,
            141,
            213,
            231,
            245,
            140,
            78,
            32,
            131,
            159,
            243,
            15,
            192,
            161,
            255,
            190,
            151,
            151,
            244,
            39,
            209,
            39,
            162,
            241,
            175,
            84,
            15,
            184,
            59,
            114,
            39,
            59,
            118,
            198,
            209,
            131,
            31,
            194,
            152,
            242,
            127,
            203,
            208,
            171,
            205,
            163,
            156,
            78,
            255,
            80,
            185])
        const rand2uuid = (rand: number) => {
            return 16777216n << 32n | BigInt(rand)
        }
        const seq = randomBytes(2).readUInt16BE()
        const rand = randomBytes(4).readUInt32BE()
        const msgUid = rand2uuid(rand)
        log.info('seq:', seq, 'rand:', rand, 'msgUid:', msgUid)
        // 1. 组装PbMultiMsgTransmit
        const msgItem = {
            msgHead: {
                fromUin: 335438501,
                toUin: 933286835,
                msgType: 82,
                c2cCmd: 0,
                msgSeq: seq,
                msgTime: Math.floor(Date.now() / 1000),
                msgUid: msgUid as unknown as number,
                // 9
                groupInfo: {
                    groupCode: 933286835,
                    groupCard: new Uint8Array()
                },
                // 14
                fromNick: '',
                // 20
                mutiltransHead: {
                    status: 0,
                    msgId: 1,
                }
            },
            msgBody: {
                richText: {
                    elems: [
                        {
                            text: {
                                str: new Uint8Array(Buffer.from('test'))
                            }
                        }
                    ]
                }
            }
        }
        const transmit = PbMultiMsgTransmit.encode({
            msg: [
                msgItem
            ],
            pbItemList: [
                {
                    fileName: 'MultiMsg',
                    buffer: PbMultiMsgNew.encode({
                        msg: [
                            msgItem
                        ]
                    }).finish()
                }
            ]
        }).finish()
        // 2. gzip压缩
        const compressed = gzipSync(transmit)
        const md5Tool = createHash('md5');
        const md5 = md5Tool.update(new Uint8Array(compressed)).digest();

        // 3. 组装LongMsgReqBody，把压缩后的数据塞进去
        let longMsgReq = LongMsgReqBody.encode({
            uint32Subcmd: 1,
            uint32TermType: 5,
            uint32PlatformType: 9,
            rptMsgUpReq: [
                // 有没有这个错误码都是6
                {
                    uint32MsgType: 3,
                    uint64DstUin: 933286835,
                    bytesMsgContent: new Uint8Array(compressed),
                    uint32StoreType: 2,
                    bytesMsgUkey: new Uint8Array(ukey),
                    uint32NeedCache: 0
                }
            ],
            rptMsgDownReq: [],
            rptMsgDelReq: [],
            uint32BusiType: 0
        }).finish()
        log.info('longMsgReq:', Buffer.from(longMsgReq).toString('hex'))
        const head = ReqDataHighwayHead.encode({
            msgBasehead: {
                uint32Version: 1,
                bytesUin: '335438501',
                // 指令错误，ErrorCode: 68
                bytesCommand: 'PicUp.DataUp',
                uint32Seq: 0,
                uint32RetryTimes: 0,
                uint32Appid: 1600001604,
                uint32CommandId: 27,
                uint32Dataflag: 16,
                localeId: 2052,
            },
            msgSeghead: {
                uint32Serviceid: 0,
                uint32Datalength: longMsgReq.byteLength,
                uint64Dataoffset: 0,
                uint64Filesize: longMsgReq.byteLength,
                // 没有这个，错误码：199;有但是错误，错误码67  resp.rptMultimsgApplyupRsp?.[0]?.bytesMsgSig
                bytesServiceticket: new Uint8Array(msgSig),
                bytesMd5: new Uint8Array(md5),
                bytesFileMd5: new Uint8Array(md5),
                uint32Flag: 0,
                uint32Rtcode: 0,
            },
            bytesReqExtendinfo: new Uint8Array(),
            uint64Timestamp: 0,
        }).finish()
        // log.info('upload data head:', JSON.stringify(ReqDataHighwayHead.decode(head, head.byteLength), null, 2))
        // log.info('upload data body:', JSON.stringify(LongMsgReqBody.decode(longMsgReq, longMsgReq.byteLength), null, 2))

        // java: localObject = new byte[paramEndPoint.length + 10 + i];
        const body = Buffer.alloc(head.byteLength + 10 + longMsgReq.byteLength)
        // java: localObject[0] = 40;
        body.writeUInt8(40, 0)
        body.writeInt32BE(head.byteLength, 1)
        body.writeInt32BE(longMsgReq.byteLength, 5)
        body.set(head, 9)
        body.set(longMsgReq, 9 + head.byteLength)
        // java: localObject[(localObject.length - 1)] = 41;
        body.writeUInt8(41, body.byteLength - 1)

        log.info('final body:', body.toString('hex'))
        const result = await uploadData(ip, port, body)
        expect(result.uint32ErrorCode).toBe(0)
    });
})


const uploadData = async (ip: string, port: number, body: Buffer) => new Promise<RspDataHighwayHead>((resolve, reject) => {
    const socket = connect(port, ip, () => {
        log.info(`连接上传点 ${ip}:${port} 成功！开始上传...`)
        socket.write(new Uint8Array(body))
    }).on('error', (err) => {
        log.error(`连接上传点 ${ip}:${port} 失败:`, err)
        reject(err)
    }).on('data', (data) => {
        log.info('上传结果:', data.toString('hex'))
        const len = data.readUInt32BE(1)
        log.info('数据长度:', len)
        const response = RspDataHighwayHead.decode(new Uint8Array(data.buffer, 9, len))
        // log.info('解析后:', JSON.stringify(response, null, 2))
        socket.end()
        resolve(response)
    })

})
const uploadData2 = async (ip: string, port: number, body: Buffer) => {
    const result = await fetch(`http://${ip}:${port}/cgi-bin/httpconn`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/octet-stream'
        },
        body: new Uint8Array(body)
    })
    const data = Buffer.from(await result.arrayBuffer())
    log.info('上传结果:', data.toString('hex'))
    const len = data.readUInt32BE(1)
    log.info('数据长度:', len)
    const response = RspDataHighwayHead.decode(new Uint8Array(data.buffer, 9, len))
    return response
}