import { getNTLoginService, getNTWrapperSession } from "../core"
import { createNTListenerProxy } from "../dispatcher"

export const bindKernelListener = <TService, TListener extends object>({
  service,
  listenerName,
  attach,
}: {
  service: TService
  listenerName: string
  attach: (service: TService, listener: TListener) => void
}) => {
  const listener = createNTListenerProxy(listenerName) as TListener
  attach(service, listener)
}

/**
 * Listener-binding helper for flows that still start from wrapper session.
 */
export const bindWrapperSessionKernelListener = <
  TService,
  TListener extends object,
>({
  listenerName,
  getService,
  attach,
}: {
  listenerName: string
  getService: (session: NTNativeWrapper.NodeIQQNTWrapperSession) => TService
  attach: (service: TService, listener: TListener) => void
}) => {
  return bindRuntimeServiceKernelListener({
    listenerName,
    getService: () => getService(getNTWrapperSession()),
    attach: (service, listener) => attach(service, listener as TListener),
  })
}

/**
 * Preferred helper for binding listeners against already-exposed runtime service getters.
 */
export const bindRuntimeServiceKernelListener = <
  TService,
  TListener extends object,
>({
  listenerName,
  getService,
  attach,
}: {
  listenerName: string
  getService: () => TService
  attach: (service: TService, listener: TListener) => void
}) => {
  const service = getService()
  bindKernelListener({
    service,
    listenerName,
    attach,
  })
  return service
}

export const bindLoginKernelListener = <
  TListener extends object,
>({
  listenerName,
  attach,
}: {
  listenerName: string
  attach: (service: ReturnType<typeof getNTLoginService>, listener: TListener) => void
}) => {
  return bindRuntimeServiceKernelListener({
    listenerName,
    getService: getNTLoginService,
    attach,
  })
}
