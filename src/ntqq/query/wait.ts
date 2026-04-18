import { registerEventListener } from "../../store/event-registry"

const DEFAULT_QUERY_TIMEOUT = 30000

interface WaitForNTEventOptions<TArgs extends any[], TResult> {
  event: `${string}/${string}`
  timeoutMs?: number
  match: (...args: TArgs) => boolean
  select: (...args: TArgs) => TResult
}

export const createNTEventWaiter = <TArgs extends any[], TResult>({
  event,
  timeoutMs = DEFAULT_QUERY_TIMEOUT,
  match,
  select,
}: WaitForNTEventOptions<TArgs, TResult>) => {
  let listener: { remove: () => void } | null = null
  let timeout: ReturnType<typeof setTimeout> | null = null

  const cleanup = () => {
    if (timeout) {
      clearTimeout(timeout)
      timeout = null
    }
    listener?.remove()
    listener = null
  }

  const promise = new Promise<TResult>((resolve, reject) => {
    timeout = setTimeout(() => {
      cleanup()
      reject(`${event} timeout`)
    }, timeoutMs)

    listener = registerEventListener(event, 'always', (...args: TArgs) => {
      if (!match(...args)) return
      cleanup()
      resolve(select(...args))
    })
  })

  return {
    promise,
    cancel: cleanup,
  }
}

export const waitForNTEvent = <TArgs extends any[], TResult>(options: WaitForNTEventOptions<TArgs, TResult>): Promise<TResult> => {
  return createNTEventWaiter(options).promise
}
