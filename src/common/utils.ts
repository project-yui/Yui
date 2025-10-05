import { createHash } from "crypto";
import { createReadStream } from "fs";
import { sendCustomPkgV2 } from "../native/native";
import { ReqBody, RspBody, SubCmd0x501ReqBody, SubCmd0x501Rspbody } from "../ntqq/protobuf/subcmd0x501";
import { CommunicationPkg } from "../ntqq/protobuf/communication";
import { useLogger } from "./log";

const log = useLogger('Utils')
export const sleep = (ms: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms)
  })
}

/**
 * 将对象的驼峰命名转为下划线命名
 * @param obj 
 * @returns 
 */
export function convertToSnakeCase(obj: any) {
  if (typeof obj !== 'object' || obj === null) {
    return obj;
  }

  let newObj: any = Array.isArray(obj) ? [] : {};

  Object.keys(obj).forEach((key) => {
    let newKey = key.replace(/([A-Z])/g, "_$1").toLowerCase();
    newObj[newKey] = typeof obj[key] === 'object' && obj[key] !== null ? convertToSnakeCase(obj[key]) : obj[key];
  });

  return newObj;
}

/**
 * 将对象的下划线命名转为驼峰命名
 * @param obj 
 * @returns 
 */
export function convertToCamelCase(obj: any) {
  if (typeof obj !== 'object' || obj === null) {
    return obj;
  }

  let newObj: any = Array.isArray(obj) ? [] : {};

  Object.keys(obj).forEach((key) => {
    let newKey = key.replace(/_([a-z])/g, (match, letter) => letter.toUpperCase());
    newObj[newKey] = typeof obj[key] === 'object' && obj[key] !== null ? convertToCamelCase(obj[key]) : obj[key];
  });

  return newObj;
}
/**
 * https://github.com/tsuzcx/qq_apk/blob/afe46ef5640d0ba6850cdefd3c11badbd725a3f6/com.tencent.mobileqq/classes.jar/com/tencent/mobileqq/utils/httputils/PkgTools.java#L967
 */
export const int2IPNet = (ip: number): string => {
  return (ip & 0xFF) + '.' +
    ((ip >> 8) & 0xFF) + '.' +
    ((ip >> 16) & 0xFF) + '.' +
    ((ip >> 24) & 0xFF);
}

export const calculateFileMd5 = (filePath: string): Promise<Buffer> => new Promise((resolve, reject) => {
    const hash = createHash('md5');
    const stream = createReadStream(filePath);
    stream.on('data', (data) => typeof data === 'object' && hash.update(new Uint8Array(data)));
    stream.on('end', () => resolve(hash.digest()));
    stream.on('error', (err) => reject(err));
});

export const calculateFileSha1 = (filePath: string): Promise<Buffer> => new Promise((resolve, reject) => {
    const hash = createHash('sha1');
    const stream = createReadStream(filePath);
    stream.on('data', (data) => typeof data === 'object' && hash.update(new Uint8Array(data)));
    stream.on('end', () => resolve(hash.digest()));
    stream.on('error', (err) => reject(err));
});

export const getHttpTicket = async(): Promise<Uint8Array> => {
  // com.tencent.mobileqq\classes.jar\com\tencent\mobileqq\highway\config\HwServlet.java
  log.info('Getting http ticket...');
  const resBuf = await sendCustomPkgV2('HttpConn.0x6ff_501', ReqBody.encode({
      msgSubcmd0x501ReqBody: {
        uint64Uin: 0,
        uint32IdcId: 0,
        uint32Appid: 16,
        uint32LoginSigType: 1,
        uint32RequestFlag: 3,
        rptUint32ServiceTypes: [1, 5, 10, 21],
        uint32Term: 2,
        uint32Plat: 9,
        uint32Net: 8,
        bytesVer: '1.0.1',
      }
    }).finish())
  const resp = RspBody.decode(resBuf)
  log.info('Getting http ticket response:', resp);
  return resp.msgSubcmd0x501RspBody?.bytesHttpconnSigSession || new Uint8Array();
}

export const admZip = () => {
  // 暂时没用，记录一下
  require('../major.node').load('internal_admzip', module);
  // const admzip = new AdmZip.admZip.default(zipPath);
  // admzip.extractAllTo(path.resolve(__dirname, `../versions/${version}`)); // 把整个压缩包完全解压
}