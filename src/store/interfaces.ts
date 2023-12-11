/**
 * UP
 * GUI -> MAIN
 */
export interface IpcUpInfo {
  type: 'request'
  callbackId?: string
  eventName: string
}

/**
 * DOWN
 * MAIN -> GUI
 */
export interface IpcDownInfo {
  type: 'response'
  callbackId?: string
  promiseStatue: string
  eventName: `ns-${string}`
}