import { Elem } from "../ntqq/protobuf/im_msg_body";
import { Msg } from "../ntqq/protobuf/nt_msg_common";
import { BotMessageSendElements } from "../onebot/common/message";
import type { BotMessage } from "../onebot/common/message";

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
        const sender = item.senderMemberName || item.senderUid || `${item.senderUin}`;
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
    toPbMsg(): Msg[] {
        const msgs: Msg[] = this.forwardData.items.map(item => {
            return {
                routingHead: {
                    fromUin: item.senderUin,
                    toUin: this.forwardData.groupId || 0,
                    group: {
                        groupCode: this.forwardData.groupId || 0,
                    },
                },
                contentHead: {
                    msgType: 82,
                    random: Math.floor(Math.random() * 100000),
                    msgTime: item.msgTime,
                    msgSeq: Math.floor(Math.random() * 10000),
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
                                ele.onlineImage = {
                                    filePath: new Uint8Array(Buffer.from(e.data.pic.path || '')),
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