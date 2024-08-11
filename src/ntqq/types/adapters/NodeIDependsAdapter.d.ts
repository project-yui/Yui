
interface NodeIDependsAdapterConstructorOptions {
    onMSFStatusChange: () => void
    onMSFSsoError: () => void
    getGroupCode: () => void
}
export class NodeIDependsAdapter {
    constructor(options: NodeIDependsAdapterConstructorOptions)
}