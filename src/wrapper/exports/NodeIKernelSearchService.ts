import { useLogger } from "../../common/log";

const log = useLogger('Wrapper/NodeIKernelSearchService')
export class NodeIKernelSearchService {
    protected static singleton?: any = undefined
    protected instance: any
    constructor(instance: any) {
        log.info('constructor called')
        this.instance = instance
    }
    addKernelSearchListener(...args: any[]) {
        log.info('addKernelSearchListener called with args:', args)
        const result = this.instance.addKernelSearchListener(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('addKernelSearchListener called  promise result:', result)
                return res
            })
        }
        log.info('addKernelSearchListener called result:', result)
        return result
    }
    addOrUpdateSearchMostUseItem(...args: any[]) {
        log.info('addOrUpdateSearchMostUseItem called with args:', args)
        const result = this.instance.addOrUpdateSearchMostUseItem(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('addOrUpdateSearchMostUseItem called  promise result:', result)
                return res
            })
        }
        log.info('addOrUpdateSearchMostUseItem called result:', result)
        return result
    }
    addSearchHistory(...args: any[]) {
        log.info('addSearchHistory called with args:', args)
        const result = this.instance.addSearchHistory(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('addSearchHistory called  promise result:', result)
                return res
            })
        }
        log.info('addSearchHistory called result:', result)
        return result
    }
    cancelSearchAtMeChats(...args: any[]) {
        log.info('cancelSearchAtMeChats called with args:', args)
        const result = this.instance.cancelSearchAtMeChats(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('cancelSearchAtMeChats called  promise result:', result)
                return res
            })
        }
        log.info('cancelSearchAtMeChats called result:', result)
        return result
    }
    cancelSearchBuddyChatInfo(...args: any[]) {
        log.info('cancelSearchBuddyChatInfo called with args:', args)
        const result = this.instance.cancelSearchBuddyChatInfo(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('cancelSearchBuddyChatInfo called  promise result:', result)
                return res
            })
        }
        log.info('cancelSearchBuddyChatInfo called result:', result)
        return result
    }
    cancelSearchChatAtMeMsgs(...args: any[]) {
        log.info('cancelSearchChatAtMeMsgs called with args:', args)
        const result = this.instance.cancelSearchChatAtMeMsgs(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('cancelSearchChatAtMeMsgs called  promise result:', result)
                return res
            })
        }
        log.info('cancelSearchChatAtMeMsgs called result:', result)
        return result
    }
    cancelSearchChatMsgs(...args: any[]) {
        log.info('cancelSearchChatMsgs called with args:', args)
        const result = this.instance.cancelSearchChatMsgs(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('cancelSearchChatMsgs called  promise result:', result)
                return res
            })
        }
        log.info('cancelSearchChatMsgs called result:', result)
        return result
    }
    cancelSearchChatsWithKeywords(...args: any[]) {
        log.info('cancelSearchChatsWithKeywords called with args:', args)
        const result = this.instance.cancelSearchChatsWithKeywords(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('cancelSearchChatsWithKeywords called  promise result:', result)
                return res
            })
        }
        log.info('cancelSearchChatsWithKeywords called result:', result)
        return result
    }
    cancelSearchContact(...args: any[]) {
        log.info('cancelSearchContact called with args:', args)
        const result = this.instance.cancelSearchContact(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('cancelSearchContact called  promise result:', result)
                return res
            })
        }
        log.info('cancelSearchContact called result:', result)
        return result
    }
    cancelSearchFileWithKeywords(...args: any[]) {
        log.info('cancelSearchFileWithKeywords called with args:', args)
        const result = this.instance.cancelSearchFileWithKeywords(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('cancelSearchFileWithKeywords called  promise result:', result)
                return res
            })
        }
        log.info('cancelSearchFileWithKeywords called result:', result)
        return result
    }
    cancelSearchGroupChatInfo(...args: any[]) {
        log.info('cancelSearchGroupChatInfo called with args:', args)
        const result = this.instance.cancelSearchGroupChatInfo(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('cancelSearchGroupChatInfo called  promise result:', result)
                return res
            })
        }
        log.info('cancelSearchGroupChatInfo called result:', result)
        return result
    }
    cancelSearchLocalInfo(...args: any[]) {
        log.info('cancelSearchLocalInfo called with args:', args)
        const result = this.instance.cancelSearchLocalInfo(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('cancelSearchLocalInfo called  promise result:', result)
                return res
            })
        }
        log.info('cancelSearchLocalInfo called result:', result)
        return result
    }
    cancelSearchMsgWithKeywords(...args: any[]) {
        log.info('cancelSearchMsgWithKeywords called with args:', args)
        const result = this.instance.cancelSearchMsgWithKeywords(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('cancelSearchMsgWithKeywords called  promise result:', result)
                return res
            })
        }
        log.info('cancelSearchMsgWithKeywords called result:', result)
        return result
    }
    clearSearchCache(...args: any[]) {
        log.info('clearSearchCache called with args:', args)
        const result = this.instance.clearSearchCache(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('clearSearchCache called  promise result:', result)
                return res
            })
        }
        log.info('clearSearchCache called result:', result)
        return result
    }
    clearSearchHistory(...args: any[]) {
        log.info('clearSearchHistory called with args:', args)
        const result = this.instance.clearSearchHistory(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('clearSearchHistory called  promise result:', result)
                return res
            })
        }
        log.info('clearSearchHistory called result:', result)
        return result
    }
    deleteSearchMostUseItem(...args: any[]) {
        log.info('deleteSearchMostUseItem called with args:', args)
        const result = this.instance.deleteSearchMostUseItem(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('deleteSearchMostUseItem called  promise result:', result)
                return res
            })
        }
        log.info('deleteSearchMostUseItem called result:', result)
        return result
    }
    getSearchMostUseItem(...args: any[]) {
        log.info('getSearchMostUseItem called with args:', args)
        const result = this.instance.getSearchMostUseItem(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('getSearchMostUseItem called  promise result:', result)
                return res
            })
        }
        log.info('getSearchMostUseItem called result:', result)
        return result
    }
    loadSearchHistory(...args: any[]) {
        log.info('loadSearchHistory called with args:', args)
        const result = this.instance.loadSearchHistory(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('loadSearchHistory called  promise result:', result)
                return res
            })
        }
        log.info('loadSearchHistory called result:', result)
        return result
    }
    removeKernelSearchListener(...args: any[]) {
        log.info('removeKernelSearchListener called with args:', args)
        const result = this.instance.removeKernelSearchListener(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('removeKernelSearchListener called  promise result:', result)
                return res
            })
        }
        log.info('removeKernelSearchListener called result:', result)
        return result
    }
    removeSearchHistory(...args: any[]) {
        log.info('removeSearchHistory called with args:', args)
        const result = this.instance.removeSearchHistory(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('removeSearchHistory called  promise result:', result)
                return res
            })
        }
        log.info('removeSearchHistory called result:', result)
        return result
    }
    resetSearchGroupChatInfoFilterMembers(...args: any[]) {
        log.info('resetSearchGroupChatInfoFilterMembers called with args:', args)
        const result = this.instance.resetSearchGroupChatInfoFilterMembers(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('resetSearchGroupChatInfoFilterMembers called  promise result:', result)
                return res
            })
        }
        log.info('resetSearchGroupChatInfoFilterMembers called result:', result)
        return result
    }
    resetSearchGroupChatInfoSortType(...args: any[]) {
        log.info('resetSearchGroupChatInfoSortType called with args:', args)
        const result = this.instance.resetSearchGroupChatInfoSortType(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('resetSearchGroupChatInfoSortType called  promise result:', result)
                return res
            })
        }
        log.info('resetSearchGroupChatInfoSortType called result:', result)
        return result
    }
    searchAtMeChats(...args: any[]) {
        log.info('searchAtMeChats called with args:', args)
        const result = this.instance.searchAtMeChats(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('searchAtMeChats called  promise result:', result)
                return res
            })
        }
        log.info('searchAtMeChats called result:', result)
        return result
    }
    searchBuddyChatInfo(...args: any[]) {
        log.info('searchBuddyChatInfo called with args:', args)
        const result = this.instance.searchBuddyChatInfo(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('searchBuddyChatInfo called  promise result:', result)
                return res
            })
        }
        log.info('searchBuddyChatInfo called result:', result)
        return result
    }
    searchCache(...args: any[]) {
        log.info('searchCache called with args:', args)
        const result = this.instance.searchCache(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('searchCache called  promise result:', result)
                return res
            })
        }
        log.info('searchCache called result:', result)
        return result
    }
    searchChatAtMeMsgs(...args: any[]) {
        log.info('searchChatAtMeMsgs called with args:', args)
        const result = this.instance.searchChatAtMeMsgs(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('searchChatAtMeMsgs called  promise result:', result)
                return res
            })
        }
        log.info('searchChatAtMeMsgs called result:', result)
        return result
    }
    searchChatMsgs(...args: any[]) {
        log.info('searchChatMsgs called with args:', args)
        const result = this.instance.searchChatMsgs(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('searchChatMsgs called  promise result:', result)
                return res
            })
        }
        log.info('searchChatMsgs called result:', result)
        return result
    }
    searchChatsWithKeywords(...args: any[]) {
        log.info('searchChatsWithKeywords called with args:', args)
        const result = this.instance.searchChatsWithKeywords(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('searchChatsWithKeywords called  promise result:', result)
                return res
            })
        }
        log.info('searchChatsWithKeywords called result:', result)
        return result
    }
    searchContact(...args: any[]) {
        log.info('searchContact called with args:', args)
        const result = this.instance.searchContact(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('searchContact called  promise result:', result)
                return res
            })
        }
        log.info('searchContact called result:', result)
        return result
    }
    searchFileWithKeywords(...args: any[]) {
        log.info('searchFileWithKeywords called with args:', args)
        const result = this.instance.searchFileWithKeywords(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('searchFileWithKeywords called  promise result:', result)
                return res
            })
        }
        log.info('searchFileWithKeywords called result:', result)
        return result
    }
    searchGroup(...args: any[]) {
        log.info('searchGroup called with args:', args)
        const result = this.instance.searchGroup(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('searchGroup called  promise result:', result)
                return res
            })
        }
        log.info('searchGroup called result:', result)
        return result
    }
    searchGroupChatInfo(...args: any[]) {
        log.info('searchGroupChatInfo called with args:', args)
        const result = this.instance.searchGroupChatInfo(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('searchGroupChatInfo called  promise result:', result)
                return res
            })
        }
        log.info('searchGroupChatInfo called result:', result)
        return result
    }
    searchLocalInfo(...args: any[]) {
        log.info('searchLocalInfo called with args:', args)
        const result = this.instance.searchLocalInfo(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('searchLocalInfo called  promise result:', result)
                return res
            })
        }
        log.info('searchLocalInfo called result:', result)
        return result
    }
    searchMoreAtMeChats(...args: any[]) {
        log.info('searchMoreAtMeChats called with args:', args)
        const result = this.instance.searchMoreAtMeChats(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('searchMoreAtMeChats called  promise result:', result)
                return res
            })
        }
        log.info('searchMoreAtMeChats called result:', result)
        return result
    }
    searchMoreBuddyChatInfo(...args: any[]) {
        log.info('searchMoreBuddyChatInfo called with args:', args)
        const result = this.instance.searchMoreBuddyChatInfo(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('searchMoreBuddyChatInfo called  promise result:', result)
                return res
            })
        }
        log.info('searchMoreBuddyChatInfo called result:', result)
        return result
    }
    searchMoreChatAtMeMsgs(...args: any[]) {
        log.info('searchMoreChatAtMeMsgs called with args:', args)
        const result = this.instance.searchMoreChatAtMeMsgs(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('searchMoreChatAtMeMsgs called  promise result:', result)
                return res
            })
        }
        log.info('searchMoreChatAtMeMsgs called result:', result)
        return result
    }
    searchMoreChatMsgs(...args: any[]) {
        log.info('searchMoreChatMsgs called with args:', args)
        const result = this.instance.searchMoreChatMsgs(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('searchMoreChatMsgs called  promise result:', result)
                return res
            })
        }
        log.info('searchMoreChatMsgs called result:', result)
        return result
    }
    searchMoreChatsWithKeywords(...args: any[]) {
        log.info('searchMoreChatsWithKeywords called with args:', args)
        const result = this.instance.searchMoreChatsWithKeywords(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('searchMoreChatsWithKeywords called  promise result:', result)
                return res
            })
        }
        log.info('searchMoreChatsWithKeywords called result:', result)
        return result
    }
    searchMoreContact(...args: any[]) {
        log.info('searchMoreContact called with args:', args)
        const result = this.instance.searchMoreContact(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('searchMoreContact called  promise result:', result)
                return res
            })
        }
        log.info('searchMoreContact called result:', result)
        return result
    }
    searchMoreFileWithKeywords(...args: any[]) {
        log.info('searchMoreFileWithKeywords called with args:', args)
        const result = this.instance.searchMoreFileWithKeywords(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('searchMoreFileWithKeywords called  promise result:', result)
                return res
            })
        }
        log.info('searchMoreFileWithKeywords called result:', result)
        return result
    }
    searchMoreGroupChatInfo(...args: any[]) {
        log.info('searchMoreGroupChatInfo called with args:', args)
        const result = this.instance.searchMoreGroupChatInfo(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('searchMoreGroupChatInfo called  promise result:', result)
                return res
            })
        }
        log.info('searchMoreGroupChatInfo called result:', result)
        return result
    }
    searchMoreMsgWithKeywords(...args: any[]) {
        log.info('searchMoreMsgWithKeywords called with args:', args)
        const result = this.instance.searchMoreMsgWithKeywords(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('searchMoreMsgWithKeywords called  promise result:', result)
                return res
            })
        }
        log.info('searchMoreMsgWithKeywords called result:', result)
        return result
    }
    searchMsgWithKeywords(...args: any[]) {
        log.info('searchMsgWithKeywords called with args:', args)
        const result = this.instance.searchMsgWithKeywords(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('searchMsgWithKeywords called  promise result:', result)
                return res
            })
        }
        log.info('searchMsgWithKeywords called result:', result)
        return result
    }
    searchRobot(...args: any[]) {
        log.info('searchRobot called with args:', args)
        const result = this.instance.searchRobot(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('searchRobot called  promise result:', result)
                return res
            })
        }
        log.info('searchRobot called result:', result)
        return result
    }
    searchStranger(...args: any[]) {
        log.info('searchStranger called with args:', args)
        const result = this.instance.searchStranger(...args)
        if (result instanceof Promise) {
            return result.then((res) => {
                log.info('searchStranger called  promise result:', result)
                return res
            })
        }
        log.info('searchStranger called result:', result)
        return result
    }
};
export const getNodeIKernelSearchService = (engine: any): any => {
    return class extends NodeIKernelSearchService {
        
    }
}