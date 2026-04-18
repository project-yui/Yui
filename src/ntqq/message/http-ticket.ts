import { useLogger } from "../../common/log";
import { sendCustomPkgV2 } from "../../native/native";
import { ReqBody, RspBody } from "../protobuf/subcmd0x501";

const log = useLogger('NTMessage/HttpTicket')

export const getHttpTicket = async (): Promise<Uint8Array> => {
  // com.tencent.mobileqq\classes.jar\com\tencent\mobileqq\highway\config\HwServlet.java
  log.info('Getting http ticket...')
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
    },
  }).finish())
  const resp = RspBody.decode(resBuf)
  log.info('Getting http ticket response:', resp)
  return resp.msgSubcmd0x501RspBody?.bytesHttpconnSigSession || new Uint8Array()
}
