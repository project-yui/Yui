import { IpcDownInfo } from "../store/interfaces"

export interface CallbackInfo {
  resolve: (value: { info: IpcDownInfo; data: any }) => void
  reject: (value: { info: IpcDownInfo; data: any }) => void
  /**
   * 超时reject用
   */
  timeout: NodeJS.Timeout
}
