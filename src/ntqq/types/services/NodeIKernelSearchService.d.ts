
interface NodeIKernelSearchListenerConstructorOptions {
    onSearchResult: () => void
    onSearchGroupResult: () => void
    onSearchLocalInfoResult: () => void
    onSearchBuddyChatInfoResult: () => void
    onSearchGroupChatInfoResult: () => void
    onSearchChatsKeywordsResult: () => void
    onSearchMsgKeywordsResult: () => void
    onSearchFileKeywordsResult: () => void
    onSearchCacheResult: () => void
}
export class NodeIKernelSearchListener {
    constructor(options: NodeIKernelSearchListenerConstructorOptions)
}
export class NodeIKernelSearchService {
    addKernelSearchListener(listener: NodeIKernelSearchListener): number
    searchRobot(req: {
        keyWords: `${number}`,
        context: `${number}`,
        cookie: Uint8Array
      }): Promise<SimpleResult>
    searchStranger(context: `${number}`, searchInfo: {
        keyWords: `${number}`
        forceUpdate: boolean
      }, searchParams: { businessMask: [], cookie: Uint8Array, pageSize: number }): Promise<SimpleResult>
}