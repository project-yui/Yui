
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
}