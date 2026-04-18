import { useLogger } from "../../common/log"
import { NTReceiveMessageType, NTSendMessageType } from "../../ntqq/message/interfaces"
import { BotMessage } from "../../onebot/contracts/message"
import {
  buildFileSendElement,
  buildImageInnerSendElement,
  buildImageSendElement,
  buildMentionInnerSendElement,
  buildMentionSendElement,
  buildReplyInnerSendElement,
  buildReplySendElement,
  buildTextInnerSendElement,
  buildTextSendElement,
} from "./send-element-builders"

const log = useLogger('Convert')

type SendElementConverter = (msg: BotMessage.SendElement) => Promise<NTSendMessageType.MsgElement | undefined> | NTSendMessageType.MsgElement | undefined
type InnerSendElementConverter = (msg: BotMessage.SendElement, eleId: number) => Promise<NTReceiveMessageType.NTMessageElementType | undefined> | NTReceiveMessageType.NTMessageElementType | undefined

const collectConvertedElements = async <TResult>(
  elems: BotMessage.SendElement[],
  convert: (msg: BotMessage.SendElement, index: number) => Promise<TResult | undefined>,
): Promise<TResult[]> => {
  const result: TResult[] = []
  for (const [index, ele] of elems.entries()) {
    const converted = await convert(ele, index)
    if (converted !== undefined) {
      result.push(converted)
    }
  }
  return result
}

const sendElementConverters: Partial<Record<BotMessage.SendElement['type'], SendElementConverter>> = {
  text: buildTextSendElement,
  mention: buildMentionSendElement,
  image: async (msg) => {
    log.info('element type: image')
    return buildImageSendElement(msg)
  },
  file: (msg) => {
    log.info('element type: file')
    return buildFileSendElement(msg)
  },
  reply: buildReplySendElement,
}

const innerSendElementConverters: Partial<Record<BotMessage.SendElement['type'], InnerSendElementConverter>> = {
  text: buildTextInnerSendElement,
  mention: buildMentionInnerSendElement,
  image: async (msg, eleId) => {
    log.info('element type: image')
    return buildImageInnerSendElement(msg, eleId)
  },
  reply: buildReplyInnerSendElement,
}

export const convertBotMessage2NTMessage = async (elems: BotMessage.SendElement[]): Promise<NTSendMessageType.MsgElement[]> => {
  return collectConvertedElements(elems, (ele) => convertBotMessage2NTMessageSingle(ele))
}

export const convertBotMessage2NTMessageSingle = async (msg: BotMessage.SendElement): Promise<NTSendMessageType.MsgElement | undefined> => {
  const converter = sendElementConverters[msg.type]
  return converter ? await converter(msg) : undefined
}

export const convertBotMessage2NTInnerMessage = async (elems: BotMessage.SendElement[]): Promise<NTReceiveMessageType.NTMessageElementType[]> => {
  log.info('convert inner msg')
  let eleId = Math.floor(Math.random() * 10e15)
  return collectConvertedElements(elems, (ele) => convertBotMessage2NTInnerMessageSingle(ele, eleId++))
}

export const convertBotMessage2NTInnerMessageSingle = async (msg: BotMessage.SendElement, eleId: number): Promise<NTReceiveMessageType.NTMessageElementType | undefined> => {
  const converter = innerSendElementConverters[msg.type]
  return converter ? await converter(msg, eleId) : undefined
}
