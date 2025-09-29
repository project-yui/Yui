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
import { ForwardConverter } from "../../common/forward-converter";

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
    async sendForwardMessage(forwardData: BotMessageSendElements.ForwardElement) {
        log.info("upload test....")
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
        const msgItem = new ForwardConverter(forwardData).toPbMsg()
        const transmit = SsoSendLongMsgReq.encode({
            body: {
                fileName: "MultiMsg",
                data: {
                    msgs: msgItem,
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
