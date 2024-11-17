// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.5
//   protoc               v3.21.12
// source: src/ntqq/protobuf/communication.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";

export const protobufPackage = "nt.communication";

/**
 * from hap\resources\rawfile\oidb\oidb.proto
 *
 * 小圈子闹麻了，人菜瘾大，数据定义找官方拿。
 */
export interface CommunicationPkg {
  /** 主命令号, 即协议号 */
  uint32Command?:
    | number
    | undefined;
  /** 子命令号, 即在oidb.server.com门户上申请的业务类型 */
  uint32ServiceType?:
    | number
    | undefined;
  /** 返回值: oidb包头返回值 */
  uint32Result?:
    | number
    | undefined;
  /** 对应命令的包体 */
  bytesBodybuffer?:
    | Uint8Array
    | undefined;
  /** 出错信息 */
  strErrorMsg?:
    | string
    | undefined;
  /** 客户端的协议版本号 */
  strClientVersion?:
    | string
    | undefined;
  /**
   * optional LoginSig msg_login_sig = 7;    //客户端上传的登录态, 没填则使用SSO包头的A2
   * optional uint32 account_type = 9; //账号类型；账号均为uin：不填或者0；存在uid：1
   */
  trpcTransInfo: MetaData[];
}

/** from hap\resources\rawfile\oidb\oidb.proto */
export interface MetaData {
  key?: string | undefined;
  value?: string | undefined;
}

/**
 * https://github.com/tsuzcx/qq_apk/blob/afe46ef5640d0ba6850cdefd3c11badbd725a3f6/com.tencent.mobileqq/classes.jar/com/tencent/mobileqq/paiyipai/PaiYiPaiHandler.java#L305
 *
 * https://github.com/tsuzcx/qq_apk/blob/afe46ef5640d0ba6850cdefd3c11badbd725a3f6/com.tencent.mobileqq/classes.jar/tencent/im/oidb/cmd0xed3/oidb_cmd0xed3%24ReqBody.java#L24C192-L24C209
 *
 * 拍一拍数据结构定义
 */
export interface PaiYiPaiReq {
  uint64ToUin: number;
  uint64GroupCode?: number | undefined;
  uint32MsgSeq?: number | undefined;
  uint32MsgRand?: number | undefined;
  uint64AioUin?:
    | number
    | undefined;
  /** 1 - 拍一拍好友的在线状态 */
  uint32NudgeType: number;
}

function createBaseCommunicationPkg(): CommunicationPkg {
  return {
    uint32Command: undefined,
    uint32ServiceType: undefined,
    uint32Result: undefined,
    bytesBodybuffer: undefined,
    strErrorMsg: undefined,
    strClientVersion: undefined,
    trpcTransInfo: [],
  };
}

export const CommunicationPkg: MessageFns<CommunicationPkg> = {
  encode(message: CommunicationPkg, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.uint32Command !== undefined) {
      writer.uint32(8).uint32(message.uint32Command);
    }
    if (message.uint32ServiceType !== undefined) {
      writer.uint32(16).uint32(message.uint32ServiceType);
    }
    if (message.uint32Result !== undefined) {
      writer.uint32(24).uint32(message.uint32Result);
    }
    if (message.bytesBodybuffer !== undefined) {
      writer.uint32(34).bytes(message.bytesBodybuffer);
    }
    if (message.strErrorMsg !== undefined) {
      writer.uint32(42).string(message.strErrorMsg);
    }
    if (message.strClientVersion !== undefined) {
      writer.uint32(50).string(message.strClientVersion);
    }
    for (const v of message.trpcTransInfo) {
      MetaData.encode(v!, writer.uint32(90).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): CommunicationPkg {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCommunicationPkg();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.uint32Command = reader.uint32();
          continue;
        }
        case 2: {
          if (tag !== 16) {
            break;
          }

          message.uint32ServiceType = reader.uint32();
          continue;
        }
        case 3: {
          if (tag !== 24) {
            break;
          }

          message.uint32Result = reader.uint32();
          continue;
        }
        case 4: {
          if (tag !== 34) {
            break;
          }

          message.bytesBodybuffer = reader.bytes();
          continue;
        }
        case 5: {
          if (tag !== 42) {
            break;
          }

          message.strErrorMsg = reader.string();
          continue;
        }
        case 6: {
          if (tag !== 50) {
            break;
          }

          message.strClientVersion = reader.string();
          continue;
        }
        case 11: {
          if (tag !== 90) {
            break;
          }

          message.trpcTransInfo.push(MetaData.decode(reader, reader.uint32()));
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CommunicationPkg {
    return {
      uint32Command: isSet(object.uint32Command) ? globalThis.Number(object.uint32Command) : undefined,
      uint32ServiceType: isSet(object.uint32ServiceType) ? globalThis.Number(object.uint32ServiceType) : undefined,
      uint32Result: isSet(object.uint32Result) ? globalThis.Number(object.uint32Result) : undefined,
      bytesBodybuffer: isSet(object.bytesBodybuffer) ? bytesFromBase64(object.bytesBodybuffer) : undefined,
      strErrorMsg: isSet(object.strErrorMsg) ? globalThis.String(object.strErrorMsg) : undefined,
      strClientVersion: isSet(object.strClientVersion) ? globalThis.String(object.strClientVersion) : undefined,
      trpcTransInfo: globalThis.Array.isArray(object?.trpcTransInfo)
        ? object.trpcTransInfo.map((e: any) => MetaData.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CommunicationPkg): unknown {
    const obj: any = {};
    if (message.uint32Command !== undefined) {
      obj.uint32Command = Math.round(message.uint32Command);
    }
    if (message.uint32ServiceType !== undefined) {
      obj.uint32ServiceType = Math.round(message.uint32ServiceType);
    }
    if (message.uint32Result !== undefined) {
      obj.uint32Result = Math.round(message.uint32Result);
    }
    if (message.bytesBodybuffer !== undefined) {
      obj.bytesBodybuffer = base64FromBytes(message.bytesBodybuffer);
    }
    if (message.strErrorMsg !== undefined) {
      obj.strErrorMsg = message.strErrorMsg;
    }
    if (message.strClientVersion !== undefined) {
      obj.strClientVersion = message.strClientVersion;
    }
    if (message.trpcTransInfo?.length) {
      obj.trpcTransInfo = message.trpcTransInfo.map((e) => MetaData.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CommunicationPkg>, I>>(base?: I): CommunicationPkg {
    return CommunicationPkg.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CommunicationPkg>, I>>(object: I): CommunicationPkg {
    const message = createBaseCommunicationPkg();
    message.uint32Command = object.uint32Command ?? undefined;
    message.uint32ServiceType = object.uint32ServiceType ?? undefined;
    message.uint32Result = object.uint32Result ?? undefined;
    message.bytesBodybuffer = object.bytesBodybuffer ?? undefined;
    message.strErrorMsg = object.strErrorMsg ?? undefined;
    message.strClientVersion = object.strClientVersion ?? undefined;
    message.trpcTransInfo = object.trpcTransInfo?.map((e) => MetaData.fromPartial(e)) || [];
    return message;
  },
};

function createBaseMetaData(): MetaData {
  return { key: undefined, value: undefined };
}

export const MetaData: MessageFns<MetaData> = {
  encode(message: MetaData, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== undefined) {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): MetaData {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMetaData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.key = reader.string();
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.value = reader.string();
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MetaData {
    return {
      key: isSet(object.key) ? globalThis.String(object.key) : undefined,
      value: isSet(object.value) ? globalThis.String(object.value) : undefined,
    };
  },

  toJSON(message: MetaData): unknown {
    const obj: any = {};
    if (message.key !== undefined) {
      obj.key = message.key;
    }
    if (message.value !== undefined) {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MetaData>, I>>(base?: I): MetaData {
    return MetaData.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MetaData>, I>>(object: I): MetaData {
    const message = createBaseMetaData();
    message.key = object.key ?? undefined;
    message.value = object.value ?? undefined;
    return message;
  },
};

function createBasePaiYiPaiReq(): PaiYiPaiReq {
  return {
    uint64ToUin: 0,
    uint64GroupCode: undefined,
    uint32MsgSeq: undefined,
    uint32MsgRand: undefined,
    uint64AioUin: undefined,
    uint32NudgeType: 0,
  };
}

export const PaiYiPaiReq: MessageFns<PaiYiPaiReq> = {
  encode(message: PaiYiPaiReq, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.uint64ToUin !== 0) {
      writer.uint32(8).uint32(message.uint64ToUin);
    }
    if (message.uint64GroupCode !== undefined) {
      writer.uint32(16).uint32(message.uint64GroupCode);
    }
    if (message.uint32MsgSeq !== undefined) {
      writer.uint32(24).uint32(message.uint32MsgSeq);
    }
    if (message.uint32MsgRand !== undefined) {
      writer.uint32(32).uint32(message.uint32MsgRand);
    }
    if (message.uint64AioUin !== undefined) {
      writer.uint32(40).uint32(message.uint64AioUin);
    }
    if (message.uint32NudgeType !== 0) {
      writer.uint32(48).uint32(message.uint32NudgeType);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): PaiYiPaiReq {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePaiYiPaiReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.uint64ToUin = reader.uint32();
          continue;
        }
        case 2: {
          if (tag !== 16) {
            break;
          }

          message.uint64GroupCode = reader.uint32();
          continue;
        }
        case 3: {
          if (tag !== 24) {
            break;
          }

          message.uint32MsgSeq = reader.uint32();
          continue;
        }
        case 4: {
          if (tag !== 32) {
            break;
          }

          message.uint32MsgRand = reader.uint32();
          continue;
        }
        case 5: {
          if (tag !== 40) {
            break;
          }

          message.uint64AioUin = reader.uint32();
          continue;
        }
        case 6: {
          if (tag !== 48) {
            break;
          }

          message.uint32NudgeType = reader.uint32();
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PaiYiPaiReq {
    return {
      uint64ToUin: isSet(object.uint64ToUin) ? globalThis.Number(object.uint64ToUin) : 0,
      uint64GroupCode: isSet(object.uint64GroupCode) ? globalThis.Number(object.uint64GroupCode) : undefined,
      uint32MsgSeq: isSet(object.uint32MsgSeq) ? globalThis.Number(object.uint32MsgSeq) : undefined,
      uint32MsgRand: isSet(object.uint32MsgRand) ? globalThis.Number(object.uint32MsgRand) : undefined,
      uint64AioUin: isSet(object.uint64AioUin) ? globalThis.Number(object.uint64AioUin) : undefined,
      uint32NudgeType: isSet(object.uint32NudgeType) ? globalThis.Number(object.uint32NudgeType) : 0,
    };
  },

  toJSON(message: PaiYiPaiReq): unknown {
    const obj: any = {};
    if (message.uint64ToUin !== 0) {
      obj.uint64ToUin = Math.round(message.uint64ToUin);
    }
    if (message.uint64GroupCode !== undefined) {
      obj.uint64GroupCode = Math.round(message.uint64GroupCode);
    }
    if (message.uint32MsgSeq !== undefined) {
      obj.uint32MsgSeq = Math.round(message.uint32MsgSeq);
    }
    if (message.uint32MsgRand !== undefined) {
      obj.uint32MsgRand = Math.round(message.uint32MsgRand);
    }
    if (message.uint64AioUin !== undefined) {
      obj.uint64AioUin = Math.round(message.uint64AioUin);
    }
    if (message.uint32NudgeType !== 0) {
      obj.uint32NudgeType = Math.round(message.uint32NudgeType);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PaiYiPaiReq>, I>>(base?: I): PaiYiPaiReq {
    return PaiYiPaiReq.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PaiYiPaiReq>, I>>(object: I): PaiYiPaiReq {
    const message = createBasePaiYiPaiReq();
    message.uint64ToUin = object.uint64ToUin ?? 0;
    message.uint64GroupCode = object.uint64GroupCode ?? undefined;
    message.uint32MsgSeq = object.uint32MsgSeq ?? undefined;
    message.uint32MsgRand = object.uint32MsgRand ?? undefined;
    message.uint64AioUin = object.uint64AioUin ?? undefined;
    message.uint32NudgeType = object.uint32NudgeType ?? 0;
    return message;
  },
};

function bytesFromBase64(b64: string): Uint8Array {
  if ((globalThis as any).Buffer) {
    return Uint8Array.from(globalThis.Buffer.from(b64, "base64"));
  } else {
    const bin = globalThis.atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
      arr[i] = bin.charCodeAt(i);
    }
    return arr;
  }
}

function base64FromBytes(arr: Uint8Array): string {
  if ((globalThis as any).Buffer) {
    return globalThis.Buffer.from(arr).toString("base64");
  } else {
    const bin: string[] = [];
    arr.forEach((byte) => {
      bin.push(globalThis.String.fromCharCode(byte));
    });
    return globalThis.btoa(bin.join(""));
  }
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}

export interface MessageFns<T> {
  encode(message: T, writer?: BinaryWriter): BinaryWriter;
  decode(input: BinaryReader | Uint8Array, length?: number): T;
  fromJSON(object: any): T;
  toJSON(message: T): unknown;
  create<I extends Exact<DeepPartial<T>, I>>(base?: I): T;
  fromPartial<I extends Exact<DeepPartial<T>, I>>(object: I): T;
}
