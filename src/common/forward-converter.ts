import { Elem } from "../ntqq/protobuf/im_msg_body";
import { Msg } from "../ntqq/protobuf/nt_msg_common";
import { BotMessageSendElements } from "../onebot/common/message";

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
}