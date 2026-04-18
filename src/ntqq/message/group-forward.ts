import { randomBytes } from "crypto";
import { gzipSync } from "zlib";
import { useLogger } from "../../common/log";
import { sendCustomPkgV2 } from "../../native/native";
import { BotMessageSendElements } from "../../onebot/contracts/message";
import { ForwardConverter } from "../../transfer/message/forward-converter";
import { SendLongMsgReq, SendLongMsgResp, SsoSendLongMsgReq } from "../protobuf/longmsg";
import { PbSendMsgReq, PbSendMsgResp } from "../protobuf/msg_svc";

const log = useLogger('NTMessage/GroupForward')

const rand2uuid = (rand: number) => {
  return 16777216n << 32n | BigInt(rand)
}

export const sendGroupForwardMessage = async (
  groupId: number,
  forwardData: BotMessageSendElements.ForwardElement,
) => {
  const seq = randomBytes(2).readUInt16BE()
  const rand = randomBytes(4).readUInt32BE()
  const msgUid = rand2uuid(rand)
  log.info('seq:', seq, 'rand:', rand, 'msgUid:', msgUid)

  const normalizedForwardData = forwardData.groupId
    ? forwardData
    : { ...forwardData, groupId }
  const forwardConverter = new ForwardConverter(normalizedForwardData)
  await forwardConverter.uploadImage()

  const transmit = SsoSendLongMsgReq.encode({
    body: {
      fileName: 'MultiMsg',
      data: {
        msgs: forwardConverter.toPbMsg(),
      },
    },
  }).finish()
  log.info('transmit data:', Buffer.from(transmit).toString('hex'))

  const body = SendLongMsgReq.encode({
    info: {
      type: 3,
      peer: {
        uid: groupId.toString(),
      },
      groupCode: groupId,
      payload: new Uint8Array(gzipSync(transmit)),
    },
    settings: {
      field1: 4,
      field2: 1,
      field3: 3,
      field4: 0,
    },
  }).finish()
  log.info('full data:', Buffer.from(body).toString('hex'))

  const sendLongResp = await sendCustomPkgV2('trpc.group.long_msg_interface.MsgService.SsoSendLongMsg', body)
  log.info('send long resp:', Buffer.from(sendLongResp).toString('hex'))
  const sendLongResult = SendLongMsgResp.decode(sendLongResp, sendLongResp.byteLength)
  const resId = sendLongResult.result?.resId
  if (!resId) {
    throw new Error('发送失败，没有获取到resId')
  }

  const xml = forwardConverter.toXml(resId)

  log.info('send message.')
  const sendResultData = await sendCustomPkgV2('MessageSvc.PbSendMsg', PbSendMsgReq.encode({
    routingHead: {
      grp: {
        groupCode: groupId,
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
              bytesMsgResid: new Uint8Array(Buffer.from(resId)),
            },
          },
        ],
      },
    },
    msgSeq: randomBytes(2).readUInt16BE(),
    msgRand: randomBytes(4).readUInt32BE(),
    msgVia: 0,
  }).finish())
  return PbSendMsgResp.decode(sendResultData, sendResultData.byteLength)
}
