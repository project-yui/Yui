import { statSync } from "fs";
import { sendCustomPkgV2 } from "../native/native";
import { CommunicationPkg } from "../ntqq/protobuf/communication";
import { Elem } from "../ntqq/protobuf/im_msg_body";
import { Msg } from "../ntqq/protobuf/nt_msg_common";
import { IPAddressInfo, PicHighwayUploadExtendInfo, ReqUploadGroupPicPrepare, RspBodyField6, RspUploadGroupPicPrepare } from "../ntqq/protobuf/pic_upload";
import { BotMessageSendElements } from "../onebot/common/message";
import type { BotMessage } from "../onebot/common/message";
import { useLogger } from "./log";
import { calculateFileMd5, calculateFileSha1, getHttpTicket, int2IPNet } from "./utils";
import { HighwayUpload } from "../ntqq/core/highway/highway";
import { downloadFile, getImageInfo } from "./file";
import { useNTUserStore } from "../ntqq/store/user";
import { PicHighwayUpload } from "../ntqq/core/highway/pic-highway";
import { getImageSizeFromPath } from "../ntqq/common/fs-api";
import { randomBytes } from "crypto";

const MAX_FORWARD_PREVIEW = 4;
const HEADER_TITLE = "群聊的聊天记录";

const escapeXml = (value: string): string =>
    value
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&apos;");

const summarizeElements = (elements: BotMessage.SendElement[]): string => {
    const maxContentLength = 40;
    const fragments = elements.map(element => {
        switch (element.type) {
            case "text":
                return element.data.text || "";
            case "mention":
                if (element.data.at) {
                    const { name, uin } = element.data.at;
                    return `@${name || uin}`;
                }
                return "";
            case "mention_all":
                return "@全体成员";
            case "image":
                return "[图片]";
            case "file":
                return element.data.file?.name ? `[文件:${element.data.file.name}]` : "[文件]";
            case "reply":
                return "[回复]";
            case "audio":
            case "vioce":
                return "[语音]";
            case "video":
                return "[视频]";
            case "multiforward":
                return "[转发]";
            case "location":
                return "[位置]";
            default:
                return element.type ? `[${element.type}]` : "";
        }
    }).filter(Boolean);

    const content = fragments.join(" ").trim();
    if (!content) {
        return "[消息]";
    }
    if (content.length <= maxContentLength) {
        return content;
    }
    return `${content.slice(0, maxContentLength - 1)}…`;
};

const buildPreviewTitles = (forwardData: BotMessageSendElements.ForwardElement): string[] => {
    return forwardData.items.slice(0, MAX_FORWARD_PREVIEW).map(item => {
        const sender = item.senderMemberName || `${item.senderUin}` || item.senderUid;
        const content = summarizeElements(item.elements);
        const titleText = content ? `${sender}:${content}` : sender;
        return `<title color="#777777" size="26"> ${escapeXml(titleText)} </title>`;
    });
};

export class ForwardConverter {
    forwardData: BotMessageSendElements.ForwardElement;
    constructor(forwardData: BotMessageSendElements.ForwardElement) {
        this.forwardData = forwardData;
    }
    async uploadImage() {
        const { getUserInfo } = useNTUserStore()
        const user = getUserInfo()
        const log = useLogger('ForwardConverter');
        let picElements = this.forwardData.items.flatMap(item => item.elements.filter(e => e.type === 'image' && e.data.pic).map(e => e.data.pic!));
        if (picElements.length === 0) {
            log.info('No images to upload');
            return;
        }
        log.info(`Uploading ${picElements.length} images`);
        const ticket = await getHttpTicket();
        for (const pic of picElements) {
            // 处理没有路径有URL的
            if (!pic.path) {
                if (!pic.url) continue
                log.info('Downloading image from URL:', pic.url);
                pic.path = await downloadFile(pic.url);
                log.info('Downloaded to:', pic.path);
            }
            const picInfo = statSync(pic.path);
            const md5 = await calculateFileMd5(pic.path);
            const sha1 = await calculateFileSha1(pic.path);
            const info = await getImageInfo(pic.path)
            if (!info) {
                throw new Error('Failed to get image info');
            }
            log.info(`Image: ${pic.path}, Size: ${picInfo.size}, MD5: ${md5.toString('hex')}`);
            // 发送请求
            // UploadGroupPicPrepare OidbSvcTrpcTcp.0x11c4_100 准备一下
            const retBuf = await sendCustomPkgV2('OidbSvcTrpcTcp.0x11c4_100', CommunicationPkg.encode({
                uint32Command: 0x11c4,
                uint32ServiceType: 100,
                bytesBodybuffer: ReqUploadGroupPicPrepare.encode({
                    head: {
                        field1: {
                            field1: 3,
                            field2: 100
                        },
                        field2: {
                            field101: 2,
                            field102: 1,
                            field103: 0,
                            field200: 2,
                            peerInfo: {
                                groupCode: this.forwardData.groupId || 0,
                            }
                        },
                        field3: {
                            field1: 2
                        }
                    },
                    body: {
                        field1: [{
                            imageInfo: {
                                picSize: picInfo.size,
                                picMd5: md5.toString('hex').toLowerCase(),
                                sha1: sha1.toString('hex').toLowerCase(),
                                fileName: `${md5.toString('hex').toUpperCase()}.jpg`,
                                field5: {
                                    field1: 1,
                                    field2: 1001,
                                    field3: 0,
                                    field4: 0
                                },
                                picWidth: info.width,
                                picHeight: info.height,
                                field8: 0,
                                field9: 1
                            },
                            field2: 0
                        }],
                        field2: 1,
                        field3: 0,
                        field4: randomBytes(4).readUInt32BE(0),
                        field5: 2,
                        field6: {
                            field1: {
                                filed1: 0,
                                field2: "",
                                field12: {
                                    field1: 0,
                                    field3: 0,
                                    field4: 0,
                                    field9: "",
                                    field10: 0,
                                    field12: "",
                                    field18: "",
                                    field19: "",
                                    field21: {
                                        field1: 0,
                                        field2: "",
                                        field3: 0,
                                        field4: 0,
                                        field5: 0,
                                        field7: ""
                                    },
                                    field31: ""
                                }
                            },
                            field2: {
                                field3: ""
                            },
                            field3: {
                                field11: "",
                                field12: ""
                            },
                            field10: 0
                        },
                        field7: randomBytes(4).readUint16BE(0),
                        field8: 1,
                        field9: new Uint8Array(),
                    },
                }).finish(),
                trpcTransInfo: [],
                field12: 1,
            }).finish());
            const bodyBuf = CommunicationPkg.decode(retBuf)
            if (!bodyBuf.bytesBodybuffer) {
                throw new Error('Upload prepare response has no body buffer');
            }
            const resp = RspUploadGroupPicPrepare.decode(bodyBuf.bytesBodybuffer);
            log.info('Upload prepare response:', resp);
            if (!resp.body) {
                throw new Error('Upload prepare response has no body');
            }
            if (resp.body?.ipInfo.length === 0) {
                throw new Error('No upload IP info received');
            }
            pic.url = resp.body.field6?.field1?.downloadInfo?.path || pic.url
            pic.md5 = md5.toString('hex').toLowerCase()
            pic.size = picInfo.size
            if (resp.body.field6) {
                resp.body.field6.field1 && (resp.body.field6.field1.field5 = 0)
                if (resp.body.field6.field1?.field1) {
                    resp.body.field6.field1.field1.field6 = 0
                    resp.body.field6.field1.field1.field7 = undefined
                    resp.body.field6.field1.field5 = 1
                }
                if (resp.body.field6.field1?.field1?.imageInfo?.field5) {
                    resp.body.field6.field1.field1.imageInfo.field8 = 0
                    resp.body.field6.field1.field1.imageInfo.field5.field3 = 0
                    resp.body.field6.field1.field1.imageInfo.field5.field4 = 0
                }
                // resp.body.field6.field2?.field1?.field1
                pic.pbElem = RspBodyField6.encode(resp.body.field6).finish()
            }
            if (!resp.body.field1) {
                // lost说明图片已经上传过了
                log.info('Image already exists on server, no need to upload');
                continue;
            }
            
            const ips: IPAddressInfo[] = resp.body.ipInfo.map<IPAddressInfo>(e => ({
                ip: {
                    type: 1,
                    ip: int2IPNet(e.ip2)
                },
                port: e.port2
            }))
            const highway = new PicHighwayUpload(user.uin, '0x6FF0087', {
                ip: int2IPNet(resp.body.uploadIpList[0].ip),
                port: resp.body.uploadIpList[0].port,
            })
            .addFilePath(pic.path)
            .setTicket(ticket)
            .setExtendInfoDetail({
                fileId: resp.body.field6?.field1?.field1?.fileId || '',
                token2: resp.body.field1,
                field3: 1,
                field4: {
                    field4: 1,
                },
                field5: {
                    ipList: ips,
                },
                field6: resp.body.field6?.field1,
                field10: 0,
                chunkInfo: {
                    chunkSha1: []
                }
            })
            await highway.upload();
        }
        log.info('All images uploaded.');
    }
    toPbMsg(): Msg[] {
        const msgs: Msg[] = this.forwardData.items.map<Msg>(item => {
            return {
                routingHead: {
                    fromUin: item.senderUin,
                    // toUin: this.forwardData.groupId || 0,
                    group: {
                        groupCode: this.forwardData.groupId || 0,
                        groupCard: new Uint8Array(Buffer.from(item.senderMemberName || '', 'utf-8')),
                        groupCardType: 1
                    },
                },
                contentHead: {
                    msgType: 82,
                    random: Math.floor(Math.random() * 100000),
                    msgTime: item.msgTime || Math.floor(Date.now() / 1000),
                    msgSeq: Math.floor(Math.random() * 10000),
                    pkgNum: 1,
                    pkgIndex: 0,
                    divSeq: 0,
                    forward: {
                        field1: 0,
                        field2: 0,
                        field3: 0,
                        field4: "",
                        field5: "",
                    }
                },
                body: {
                    richText: {
                        elems: item.elements.map<Elem>(e => {
                            const ele: Elem = {};

                            if (e.type === 'text' && e.data.text) {
                                ele.text = {
                                    str: new Uint8Array(Buffer.from(e.data.text)),
                                };
                            } else if (e.type === 'image' && e.data.pic) {
                                // ele.onlineImage = {
                                //     filePath: new Uint8Array(Buffer.from(e.data.pic.path || '')),
                                //     guid: new Uint8Array(Buffer.from(e.data.pic.md5 || '', 'hex')),
                                // };
                                ele.commonElem = {
                                    uint32ServiceType: 48,
                                    uint32BusinessType: 20,
                                    bytesPbElem: e.data.pic.pbElem || new Uint8Array(),
                                };
                            } else if (e.type === 'file' && e.data.file) {
                                ele.transElemInfo = {
                                    elemType: 1,
                                    elemValue: new Uint8Array(Buffer.from(e.data.file.name || '')),
                                };
                            } else if (e.type === 'mention' && e.data.at) {
                                ele.text = {
                                    str: new Uint8Array(Buffer.from(`@${e.data.at.uin}`)),
                                };
                            } else if (e.type === 'reply' && e.data.reply) {
                                ele.text = {
                                    str: new Uint8Array(Buffer.from(`Reply: ${e.data.reply.msgId}`)),
                                };
                            }

                            return ele;
                        }),
                    },
                },
            };
        });
        return msgs;
    }

    toXml(resId: string): string {
        const previewTitles = buildPreviewTitles(this.forwardData);
        const titleNodes = previewTitles.length > 0
            ? previewTitles.join("")
            : `<title color="#777777" size="26"> ${escapeXml("[暂无聊天记录]")} </title>`;

        return `<?xml version='1.0' encoding='UTF-8' standalone="yes"?> <msg serviceID="35" templateID="1" action="viewMultiMsg" brief="[聊天记录]" m_fileName="MultiMsg" m_resid="${escapeXml(resId)}" tSum="${this.forwardData.items.length}" flag="3"><item layout="1"> <title color="#000000" size="34"> ${HEADER_TITLE} </title>${titleNodes} <hr></hr> <summary color="#808080"> 查看转发消息  </summary></item> <source name=" ${HEADER_TITLE} "></source> </msg>`;
    }
}