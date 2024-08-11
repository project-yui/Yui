
interface NodeIKernelRecentContactListenerConstructorOptions {
    onRecentContactListChanged: () => void
    onRecentContactListChangedVer2: () => void
    onGuildDisplayRecentContactListChanged: () => void
    onRecentContactNotification: () => void
    onMsgUnreadCountUpdate: () => void
    onDeletedContactsNotify: () => void
}
export class NodeIKernelRecentContactListener {

}
export class NodeIKernelRecentContactService {
    addKernelRecentContactListener(listener: NodeIKernelRecentContactListener): number
    fetchAndSubscribeABatchOfRecentContact(recentContactReq: NodeIKernelRecentContactServiceType.FetchAndSubscribeReq): Promise<NodeIKernelRecentContactServiceType.FetchAndSubscribeResp>
}