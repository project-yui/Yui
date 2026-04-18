import { getConfig } from "../../store/config";
import { NTReceiveMessageType } from "../../ntqq/message/interfaces";
import { BotMessage } from "../../onebot/contracts/message";
import { BotMessageData } from "../../onebot/contracts/event";

const buildReceiveImageUrl = (peer: PeerInfo, msgId: `${number}`, element: NTReceiveMessageType.NTMessageElementType) => {
  const p = element.picElement
  if (!p?.originImageUrl) {
    return p?.originImageUrl ?? null
  }
  let url = p.originImageUrl
  if (url.startsWith('/gchatpic_new')) {
    return `https://gchat.qpic.cn${url}`
  }
  if (url.startsWith('/download')) {
    const cfg = getConfig()
    return `http://${cfg.yui.http.host}:${cfg.yui.http.port}/downloadRichMedia?file_model_id=0&down_source_type=0&trigger_type=1&msg_id=${msgId}&chat_type=${peer.chatType}&peer_uid=${peer.peerUid}&element_id=${element.elementId}&thumb_size=0&download_type=2&file_path=${encodeURIComponent(p.sourcePath)}`
  }
  return url ?? null
}

export const convertNTMsgElement2BotMsgElement = (peer: PeerInfo, msgId: `${number}`, elems: NTReceiveMessageType.NTMessageElementType[]): BotMessage.ReceiveElement[] => {
  const result: BotMessage.ReceiveElement[] = []
  for (const ele of elems) {
    switch (ele.elementType) {
      case 1:
        if (ele.textElement) {
          const cur = ele.textElement
          if (cur.atType === 2) {
            result.push({
              type: 'mention',
              data: {
                at: {
                  isAll: false,
                  uid: cur.atNtUid as `u_${string}`,
                  uin: parseInt(cur.atTinyId),
                  name: cur.content,
                }
              }
            })
            continue
          }
          if (cur.atType === 1) {
            result.push({
              type: 'mention',
              data: {
                at: {
                  isAll: true,
                  uid: 'all',
                  uin: 0,
                  name: cur.content,
                }
              }
            })
            continue
          }
          result.push({
            type: 'text',
            data: {
              text: ele.textElement.content
            }
          })
        }
        break
      case 2:
        if (ele.picElement) {
          const p = ele.picElement
          result.push({
            type: 'image',
            data: {
              pic: {
                type: p.picSubType === 0 ? 'simple' : 'emoji',
                width: p.picWidth,
                height: p.picHeight,
                size: parseInt(p.fileSize),
                md5: p.md5HexStr,
                uuid: p.fileUuid,
                url: buildReceiveImageUrl(peer, msgId, ele),
                path: p.sourcePath,
              }
            }
          })
        }
        break
      case 7:
        if (ele.replyElement) {
          result.push({
            type: 'reply',
            data: {
              reply: {
                srcMsgId: ele.replyElement.sourceMsgIdInRecords,
                msgSeq: ele.replyElement.replayMsgSeq,
                text: ele.replyElement.sourceMsgText,
                senderUin: ele.replyElement.senderUid,
                senderUid: ele.replyElement.senderUidStr,
              }
            }
          })
        }
        break
      default:
        break
    }
  }
  return result
}

export const convertNTMsg2BotMsg = (msg: NTReceiveMessageType.NTMessageItemType): BotMessageData => {
  const ret: BotMessageData = {
    messageId: msg.msgId,
    messageSeq: msg.msgSeq,
    groupId: 0,
    groupName: '',
    senderId: parseInt(msg.senderUin),
    senderUid: msg.senderUid,
    senderMemberName: msg.sendMemberName,
    time: parseInt(msg.msgTime),
    elements: convertNTMsgElement2BotMsgElement({
      chatType: msg.chatType,
      peerUid: msg.peerUid,
      guildId: ''
    }, msg.msgId, msg.elements),
    records: [],
  }
  ret.records = msg.records.map(e => convertNTMsg2BotMsg(e))
  return ret
}
