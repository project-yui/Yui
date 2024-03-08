/// <reference types="node" />

declare namespace YukihanaNativeWrapper {
    namespace CrossProcessExports {
        /**
         * 模块安装
         * 
         * @param signature 函数签名
         */
        const install: (signature: number[]) => boolean
        /**
         * 添加消息
         */
        const addMsg: (msg: import('../message/interfaces').NTReceiveMessageType.NTMessageItemType) => boolean
    }
    interface AddMsgType {}
}

declare module 'yukihana-native' {
    export = YukihanaNativeWrapper.CrossProcessExports
  }
  