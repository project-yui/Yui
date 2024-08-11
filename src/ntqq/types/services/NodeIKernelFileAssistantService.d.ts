
interface NodeIKernelFileAssistantListenerConstructorOptions {
    onSessionListChanged: () => void
    onSessionChanged: () => void
    onFileListChanged: () => void
    onFileSearch: () => void
    onFileStatusChanged: () => void
}
export class NodeIKernelFileAssistantListener {
    constructor()
}
export class NodeIKernelFileAssistantService {
    addKernelFileAssistantListener(listener: NodeIKernelFileAssistantListener): number
}