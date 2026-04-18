import { useLogger } from "../../common/log"
import { convertToSnakeCase } from "../../common/utils"
import { WSMessageSender } from "../../common/interface/ws"

const log = useLogger('WS/ConnectionManager')
type ConnectionRecord = {
  id: number
  send: WSMessageSender
}

let nextConnectionId = 1
const clientConnections = new Map<WSMessageSender, ConnectionRecord>()

const serializePublishedMessage = (message: unknown) => {
  return JSON.stringify(convertToSnakeCase(message))
}

export const addConnection = (handle: WSMessageSender) => {
  if (clientConnections.has(handle)) {
    return clientConnections.get(handle)!
  }

  const record: ConnectionRecord = {
    id: nextConnectionId++,
    send: handle,
  }
  clientConnections.set(handle, record)
  log.info('connection added, current count:', clientConnections.size)
  return record
}

export const removeConnection = (handle: WSMessageSender) => {
  const removed = clientConnections.delete(handle)
  if (!removed) {
    log.warn('事件处理器移除失败，未找到该处理器')
    return false
  }
  log.info('connection removed, current count:', clientConnections.size)
  return true
}

export const publish = (message: unknown) => {
  const payload = serializePublishedMessage(message)
  for (const [handle, connection] of clientConnections.entries()) {
    try {
      handle(payload)
    }
    catch (error) {
      log.warn('connection publish failed, remove broken handle:', connection.id)
      clientConnections.delete(handle)
    }
  }
  return payload
}

export const broadcast = (message: unknown) => {
  publish(message)
}

export const getConnectionCount = () => clientConnections.size

export const listConnectionIds = () => {
  return Array.from(clientConnections.values(), (connection) => connection.id)
}
