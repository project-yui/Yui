import { sendCustomPkg } from "../../native/native";
import { CommunicationPkg, PaiYiPaiReq } from "../protobuf/communication";

export const nudgeGroupMember = async (groupId: number, userUin: number): Promise<boolean> => {
  const result = await sendCustomPkg('OidbSvcTrpcTcp.0xed3_1', CommunicationPkg.encode({
    uint32Command: 0xed3,
    uint32ServiceType: 1,
    bytesBodybuffer: PaiYiPaiReq.encode({
      uint64ToUin: userUin,
      uint64GroupCode: groupId,
      uint32NudgeType: 0,
    }).finish(),
    trpcTransInfo: [],
  }).finish())
  return result.uint32Result === 0
}
