import { useLogger } from "../../../common/log";
import { RspDataHighwayHead } from "../../protobuf/CSDataHighwayHead";
import { PicHighwayUploadExtendInfo } from "../../protobuf/pic_upload";
import { HighwayUpload } from "./highway";

const log = useLogger('PicHighway')
export class PicHighwayUpload extends HighwayUpload {
    private extendInfoDetail?: PicHighwayUploadExtendInfo
    setExtendInfoDetail(info: PicHighwayUploadExtendInfo) {
        this.extendInfoDetail = info;
        info.field10 = 1048576
        return this;
    }
    async upload(): Promise<RspDataHighwayHead[]> {
        if (!this.extendInfoDetail) {
            throw new Error("extendInfoDetail is empty");
        }
        log.info('start prepare file')
        await this.prepare()
        // 填充sha1
        this.extendInfoDetail.chunkInfo = {
            chunkSha1: this.fileDetail!.sha1s || []
        }
        this.extendInfo = PicHighwayUploadExtendInfo.encode(this.extendInfoDetail).finish()
        return await super.upload();
    }
}