import { getNodeIGlobalAdapter } from "./NodeIGlobalAdapter"
import { getNodeIKernelLoginService } from "./NodeIKernelLoginService"
import { getNodeIQQNTStartupSessionWrapper } from "./NodeIQQNTStartupSessionWrapper"
import { getNodeIQQNTWrapperEngine } from "./NodeIQQNTWrapperEngine"
import { getNodeIQQNTWrapperSession } from "./NodeIQQNTWrapperSession"

export const getWrapperExports = (wrapper: NTNativeWrapper.CrossProcessExportsInterface): any => {
    // TODO: 这里可以做一些方法的包装和修改
    return {
        NodeIGlobalAdapter: getNodeIGlobalAdapter(wrapper.NodeIGlobalAdapter),
        NodeIKernelLoginService: getNodeIKernelLoginService(wrapper.NodeIKernelLoginService),
        NodeIQQNTWrapperEngine: getNodeIQQNTWrapperEngine(wrapper.NodeIQQNTWrapperEngine),
        NodeIQQNTWrapperSession: getNodeIQQNTWrapperSession(wrapper.NodeIQQNTWrapperSession),
        NodeQQNTWrapperUtil: wrapper.NodeQQNTWrapperUtil,
        NodeIQQNTStartupSessionWrapper: getNodeIQQNTStartupSessionWrapper(wrapper.NodeIQQNTStartupSessionWrapper),
    }
}