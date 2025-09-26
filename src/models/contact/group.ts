import { sendCustomPkgV2 } from "../../native/native";
import { GroupInfoType } from "../types/group";
import { Contact } from "./contact";
import { Member } from "./member";
import { useLogger } from "../../common/log";
import { BotMessageSendElements } from "../../onebot/common/message";
import { int2IPNet } from "../../common/utils";
import { gzipSync } from "zlib";
import { request } from "http";
import { createHash, randomBytes } from "crypto";
import { useNTUserStore } from "../../ntqq/store/user";
import { connect } from "net";
import { useNTCore } from "../../ntqq/core/core";
import { NTSendMessageType } from "../../ntqq/message/interfaces";
import { SendLongMsgReq, SendLongMsgResp, SsoSendLongMsgReq } from "../../ntqq/protobuf/longmsg";
import { Msg } from "../../ntqq/protobuf/nt_msg_common";
import { PbSendMsgReq, PbSendMsgResp } from "../../ntqq/protobuf/msg_svc";

const log = useLogger('Group')
/**
 * 群组对象
 */
export class Group extends Contact {
    protected constructor(info: GroupInfoType)
    {
        super(info.id)
    }
    static create(info: GroupInfoType)
    {
        return new Group(info)
    }
    async refresh(): Promise<void> {
        return 
    }
    getMember(mid: number)
    {
        return Member.create(this.id, {
            uin: mid,
            uid: undefined,
            groupNick: "",
            remark: "",
            nick: "",
            signature: ""
        })
    }
    getMemberByUid(uid: `u_${string}`)
    {
        return Member.create(this.id, {
            uin: 0,
            uid: uid,
            groupNick: "",
            remark: "",
            nick: "",
            signature: ""
        })
    }
    async sendForwardMessage2(forwardData: BotMessageSendElements.ForwardElement) {
        log.info("upload test....")
        // {
        //     const { getWrapperSession } = useNTCore()
        //     const msgService = getWrapperSession().getMsgService()
        //     const msg: NTSendMessageType.SendForwardRequest = {
        //         msgInfos: [
        //             {
        //                 msgId: "7554008478026237747",
        //                 senderShowName: "hello1"
        //             },
        //             {
        //                 msgId: "7554008487028123602",
        //                 senderShowName: "hello2"
        //             },
        //             {
        //                 msgId: "7554008499491336519",
        //                 senderShowName: "hello3"
        //             }
        //         ],
        //         srcContact: {
        //             chatType: 2,
        //             peerUid: '933286835',
        //         },
        //         dstContact: {
        //             chatType: 2,
        //             peerUid: '933286835',
        //         },
        //         commentElements: [],
        //         msgAttributeInfos: new Map()
        //     }
        //     const sendResult = await msgService.multiForwardMsgWithComment(msg.msgInfos, msg.srcContact, msg.dstContact, msg.commentElements, new Map())
        //     return
        // }
        const { getUserInfo } = useNTUserStore()
        const core = useNTCore()
        const user = getUserInfo()
        const rand2uuid = (rand: number) => {
            return 16777216n << 32n | BigInt(rand)
        }
        const seq = randomBytes(2).readUInt16BE()
        const rand = randomBytes(4).readUInt32BE()
        const msgUid = rand2uuid(rand)
        log.info('seq:', seq, 'rand:', rand, 'msgUid:', msgUid)
        // 1. 组装PbMultiMsgTransmit
        const msgItem: Msg = {
                    routingHead: {
                        fromUin: user.uin,
                        toUin: this.id,
                        group: {
                            groupCode: this.id,
                        }
                    },
                    contentHead: {
                        msgType: 82,
                        random: rand,
                        msgTime: Math.floor(Date.now() / 1000),
                        msgSeq: seq,
                    },
                    body: {
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
        const transmit = SsoSendLongMsgReq.encode({
            body: {
                fileName: "MultiMsg",
                data: {
                    msgs: [msgItem],
                }
                
            }
        }).finish()
        // 2. gzip压缩
        const compressed = gzipSync(transmit)
        let body = SendLongMsgReq.encode({
            info: {
                type: 3,
                peer: {
                    uid: this.id.toString(),
                },
                groupCode: this.id,
                payload: new Uint8Array(compressed)
            },
            settings: {
                field1: 4,
                field2: 1,
                field3: 7,
                field4: 0
            }
        }).finish()
        body = new Uint8Array(Buffer.from('12 af 02 08 01 12 1a 12 18 75 5f 45 62 78 42 73 4f 2d 4a 4c 69 33 6f 78 45 59 61 62 4a 30 75 6d 67 22 8e 02 1f 8b 08 00 00 00 00 00 00 0b 13 ea 62 e6 e2 f0 2d cd 29 c9 f4 2d 4e 17 fa cb c4 95 cf 65 2b 24 51 1a ef 9a 54 e1 54 ec af eb e5 93 69 9c 5f e1 1a 99 98 e4 65 50 9a 9b ee a4 c8 b1 79 79 f3 5e 66 25 f1 17 ed ab 9e ee eb 7e ba 76 d9 93 9d 0b 9e ce eb 76 f4 7c b2 ab 07 48 6b 30 09 29 73 04 29 ec fc f5 f0 03 9b c6 e9 0a 83 a5 dd b7 8e b1 59 30 3a 30 78 30 54 71 71 30 08 30 48 30 28 31 68 31 48 71 72 b1 0b b1 72 31 73 31 1a 72 cd 60 e4 32 07 d9 68 e9 1e 99 5b 5c 56 52 6e 98 19 10 e2 5a 96 e8 e7 ed e9 1e e5 94 ee 24 0d b5 51 10 c3 46 a8 5d eb 3f 5d 6a 61 d6 38 83 db 2e 0b 2e 33 21 f5 55 4c 2a b3 18 15 4f 30 32 7c 60 64 f8 c1 c8 30 81 89 61 06 33 c3 02 66 86 0d cc 0c 07 98 19 76 b0 30 1c 60 61 68 60 63 10 62 f1 62 e2 60 80 39 8d 2a 61 f1 70 d1 d3 a9 cc 1a 67 2b 0c 36 ce 21 14 16 00 cb cb cb 08 8d 01 00 00 7a 08 08 04 10 01 18 03 20 00'.replace(/ /g, ''), 'hex'))
        const sendLongResp = await sendCustomPkgV2('trpc.group.long_msg_interface.MsgService.SsoSendLongMsg', body)
        log.info('send long resp:', Buffer.from(sendLongResp).toString('hex'))
        const sendLongResult = SendLongMsgResp.decode(sendLongResp, sendLongResp.byteLength)
        const resId = sendLongResult.result?.resId
        if (!resId) {
            throw new Error('发送失败，没有获取到resId')
        }
        const xml = `<?xml version='1.0' encoding='UTF-8' standalone=\"yes\"?> <msg serviceID=\"35\" templateID=\"1\" action=\"viewMultiMsg\" brief=\"[聊天记录]\" m_fileName=\"MultiMsg\" m_resid=\"${resId}\" tSum=\"2\" flag=\"3\"><item layout=\"1\"> <title color=\"#000000\" size=\"34\"> 群聊的聊天记录 </title><title color=\"#777777\" size=\"26\"> 群昵称123:无人鸡 </title><title color=\"#777777\" size=\"26\"> 荒:[动画表情] </title> <hr></hr> <summary color=\"#808080\"> 查看转发消息  </summary></item> <source name=\" 群聊的聊天记录 \"></source> </msg>`
        log.info('send message.')
        const sendResultData = await sendCustomPkgV2('MessageSvc.PbSendMsg', PbSendMsgReq.encode({
            routingHead: {
                grp: {
                    groupCode: this.id,
                },
            },
            contentHead: {
                pkgNum: 1,
                pkgIndex: 0,
                divSeq: 0,
            },
            msgBody: {
                richText: {
                    elems: [
                        {
                            richMsg: {
                                bytesTemplate1: new Uint8Array(Buffer.from(xml)),
                                uint32ServiceId: 35,
                                bytesMsgResid: new Uint8Array(Buffer.from(resId || '')),
                            }
                        }
                    ],
                }
            },
            msgSeq: randomBytes(2).readUInt16BE(),
            msgRand: randomBytes(4).readUInt32BE(),
            msgVia: 0,
        }).finish())
        const sendResult = PbSendMsgResp.decode(sendResultData, sendResultData.byteLength)
        return sendResult
    }
}
