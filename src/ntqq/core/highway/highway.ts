import { createReadStream, statSync } from "fs";
import { useLogger } from "../../../common/log";
import { request } from "http";
import { MessageFns, ReqDataHighwayHead, RspDataHighwayHead } from "../../protobuf/CSDataHighwayHead";
import { createHash } from "crypto";
import { isNode } from "yaml";

const log = useLogger('Highway')
interface ServerInfo {
    ip: string;
    port: number;
}
const calculateFileMd5 = (filePath: string): Promise<Buffer> => new Promise((resolve, reject) => {
    const hash = createHash('md5');
    const stream = createReadStream(filePath);
    stream.on('data', (data) => typeof data === 'object' && hash.update(new Uint8Array(data)));
    stream.on('end', () => resolve(hash.digest()));
    stream.on('error', (err) => reject(err));
});
interface FileDetail {
    md5: Buffer;
    size: number;
    chunks: Uint8Array[];
    sha1s: Uint8Array[];
}
export class HighwayUpload {
    /**
     * 分片大小
     */
    protected chunkSize: number = 0x80000;
    private filePath: string = "";
    private uin: number;
    private htcmd: `0x${string}`;
    private server: ServerInfo;
    protected fileDetail?: FileDetail;
    private ticket?: Uint8Array;
    protected extendInfo?: Uint8Array;
    constructor(uin: number, htcmd: `0x${string}`, server: ServerInfo) {
        this.uin = uin;
        this.htcmd = htcmd;
        this.server = server;
    }
    addFilePath(file: string) {
        this.filePath = file;
        return this;
    }
    setTicket(ticket: Uint8Array) {
        this.ticket = ticket;
        return this;
    }
    setExtendInfo(info: Uint8Array) {
        this.extendInfo = info;
        return this;
    }
    protected async prepare() {
        const fileStream = createReadStream(this.filePath, { highWaterMark: this.chunkSize });
        const chunks: Uint8Array[] = [];
        const chunksSha1: Uint8Array[] = [];
        const md5Hash = createHash('md5')
        for await (const chunk of fileStream) {
            const c = new Uint8Array(chunk)
            chunks.push(c);
            chunksSha1.unshift(new Uint8Array(createHash('sha1').update(c).digest()));
            md5Hash.update(c);
        }
        // 计算文件总的大小与MD5
        const stat = statSync(this.filePath);
        const fileSize = stat.size;
        const fileMd5 = md5Hash.digest();
        this.fileDetail = {
            md5: fileMd5,
            size: fileSize,
            chunks,
            sha1s: chunksSha1
        };
    }
    async upload() {
        const log = useLogger('HighwayUpload');
        if (!this.filePath) {
            throw new Error("filePath is empty");
        }
        if (this.fileDetail === undefined) {
            throw new Error("file not prepared, please call prepare() first");
        }
        const totalChunks = Math.ceil(this.fileDetail.size / this.chunkSize);
        log.info(`File size: ${this.fileDetail!.size} bytes, Total chunks: ${totalChunks}`);
        let chunkIndex = 0;
        const results: RspDataHighwayHead[] = [];
        for (const chunk of this.fileDetail!.chunks) {
            chunkIndex++;
            log.info(`Uploading chunk ${chunkIndex}/${totalChunks}, Size: ${chunk.length} bytes`);
            if (typeof chunk !== "object") {
                throw new Error("Invalid chunk data type");
            }
            const resBuf = await this.sendChunk(chunk, chunkIndex, totalChunks);
            const headerSize = resBuf.readUInt32BE(1);
            const headerBuf = new Uint8Array(resBuf).slice(9, 9 + headerSize);
            const resp = RspDataHighwayHead.decode(headerBuf);
            log.info(`Received response for chunk ${chunkIndex}:`, JSON.stringify(resp, null, 2));
            if (resp.uint32ErrorCode !== 0) {
                throw new Error(`Upload failed at chunk ${chunkIndex} with error code ${resp.uint32ErrorCode}`);
            }
            results.push(resp);
        }
        log.info("Upload complete");
        return results;
    }
    private sendChunk(chunk: Uint8Array, chunkIndex: number, totalChunks: number): Promise<Buffer> {
        const url = `http://${this.server.ip}:${this.server.port}/cgi-bin/httpconn?htcmd=${this.htcmd}&uin=${this.uin}`;
        log.info(`Sending chunk ${chunkIndex}/${totalChunks} to ${url}`);
        
        return new Promise((resolve, reject) => {
            const chunkMd5 = createHash('md5').update(chunk).digest();
            const header = ReqDataHighwayHead.encode({
                msgBasehead: {
                    uint32Version: 1,
                    bytesUin: this.uin.toString(),
                    bytesCommand: 'PicUp.DataUp',
                    uint32Seq: chunkIndex,
                    uint32RetryTimes: 0,
                    uint32Appid: 1600001604,
                    uint32Dataflag: 16,
                    uint32CommandId: 1004,
                },
                msgSeghead: {
                    uint32Serviceid: 0,
                    uint64Filesize: this.fileDetail!.size,
                    uint64Dataoffset: (chunkIndex - 1) * this.chunkSize,
                    uint32Datalength: chunk.length,
                    bytesServiceticket: this.ticket || new Uint8Array(),
                    bytesMd5: new Uint8Array(chunkMd5),
                    bytesFileMd5: new Uint8Array(this.fileDetail!.md5),
                    uint32CacheAddr: 0,
                    uint32CachePort: 0,
                },
                bytesReqExtendinfo: this.extendInfo || new Uint8Array(),
                uint64Timestamp: 0,
                msgLoginSigHead: {
                    appid: 1600001604,
                    uint32LoginsigType: 8,
                }
            }).finish();
            
            // 包装数据
            const body = Buffer.alloc(header.length + 10 + chunk.length);
            body.writeUInt8(40);
            body.writeUInt32BE(header.length, 1);
            body.writeUInt32BE(chunk.length, 5);
            body.set(header, 9);
            body.set(chunk, 9 + header.length);
            body.writeUInt8(41, body.length - 1);

            const req = request(url, {
                    method: 'POST',
                    headers: {
                        'user-agent': 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2)',
                        'Cache-Control': 'no-cache',
                        "content-length": body.length,
                        connection: 'Keep-Alive',
                        Pragma: 'no-cache',
                        Accept: '*/*',
                    },
                    path: `/cgi-bin/httpconn?htcmd=${this.htcmd}&uin=${this.uin}`,
                }, (res) => {
                console.log(`STATUS: ${res.statusCode}`);
                let result: Uint8Array[] = [];
                res.on('data', (data) => {
                    log.info('Received data chunk', typeof data, data.length);
                    result.push(data);
                });
                res.on('end', () => {
                    const r = Buffer.concat(result)
                    log.info('Received data chunk:', r.toString('hex'));
                    resolve(r);
                });
                if (res.statusCode != 200) {
                    req.destroy()
                    reject(new Error(`Request failed with status code ${res.statusCode}`));
                    return;
                }
            });
            // Highway 协议头包装
            // com.tencent.mobileqq\classes.jar\com\tencent\mobileqq\highway\codec\TcpProtocolDataCodec.java

            log.info('body hex:', body.toString('hex'));
            req.write(body);
            req.end();
            req.on('error', (error) => {
                console.error('Error uploading chunk:', error);
                reject(error);
            });
        });
    }
}