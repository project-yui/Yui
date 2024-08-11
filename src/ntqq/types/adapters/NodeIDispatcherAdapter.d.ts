
interface NodeIDispatcherAdapterConstructorOptions {
    dispatchRequest: () => void
    dispatchCall: () => void
    dispatchCallWithJson: () => void
}
export class NodeIDispatcherAdapter {
    constructor(options: NodeIDispatcherAdapterConstructorOptions)
}