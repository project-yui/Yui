
export namespace NodeIKernelRichMediaServiceType {
    interface UploadRMFileWithoutMsgReq {
      transferId: number
      bizType: number
      filePath: string
      peerUid: `${number}`
      useNTV2: boolean
    }
    interface FileInfo {
      fileName: string
      filePath: string
      fileModelId: `${number}`
    }
    interface UploadRMFileWithoutMsgResp {
      
    }
  }

export class NodeIKernelRichMediaService extends NTNativeWrapper.NTBaseClass {
    downloadFile(a1: {
      fileModelId: `${number}`
      msgId: `${number}`
      elemId: `${number}`
      uuid: `${number}`
      subId: `${number}`
      fileName: string
      fileSize: `${number}`
      msgTime: `${number}`
      peerUid: string
      chatType: number
      md510m: string
      sha: string
      sha3: string
      parent: string
      favId: string
      bizType: number
    }, a2: number, a3: number, a4: string): any
    downloadFileByUrlList(a1: number, a2: string[]): any
    downloadFileForFileInfo(): any
    downloadFileForFileUuid(): any
    downloadFileForModelId(): any
    uploadRMFileWithoutMsg(data: NodeIKernelRichMediaServiceType.UploadRMFileWithoutMsgReq): Promise<NodeIKernelRichMediaServiceType.UploadRMFileWithoutMsgResp>
    onlyUploadFile(peer: PeerInfo, files: NodeIKernelRichMediaServiceType.FileInfo[]): any
  }