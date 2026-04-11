let currentTraceId: string | undefined

export const useRuntimeStore = () => ({
  getTraceId: () => currentTraceId,
  setTraceId: (traceId?: string) => {
    currentTraceId = traceId
  },
  clearTraceId: () => {
    currentTraceId = undefined
  }
})
