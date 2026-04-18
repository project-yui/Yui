let currentTraceId: string | undefined

export const getTraceId = () => currentTraceId

export const setTraceId = (traceId?: string) => {
  currentTraceId = traceId
}

export const clearTraceId = () => {
  currentTraceId = undefined
}
