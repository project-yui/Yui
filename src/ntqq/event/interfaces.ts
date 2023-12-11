

export interface NTCmdDataType<PayloadType = any> {
  cmdName: string
  cmdType: string
  payload: PayloadType
}