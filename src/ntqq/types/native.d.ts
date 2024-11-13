/// <reference types="node" />

declare namespace YuiNativeWrapper {
    namespace CrossProcessExports {
        /**
         * 模块安装
         * 
         * @param signature 函数签名
         */
        const install: (name: string, signature: SignatureType) => Record<string, boolean>
        /**
         * 添加消息
         */
        const addMsg: (msg: AddMsgType) => boolean
        const addPkg: (pkg: AddPkgType) => Promise<Uint8Array>
    }
    interface SignatureType {
      sqlite3_stmt?: number[]
      hosts?: number[]
      msf?: number[]
      msf_resp?: number[]
    }
    interface AddMsgType {
        msgId: `${number}`
        msgRandom: number
        msgSeq: number
        cntSeq: `${number}`
        chatType: 2
        msgType: 2
        subMsgType: 0 | 1
        sendType: 0
        senderUid: `u_${string}`
        peerUid: `${number}`
        channelId: ''
        guildId: ''
        guildCode: '0'
        fromUid: '0'
        fromAppid: '0'
        msgTime: number
        msgMeta: '0x'
        sendStatus: 0 | 2
        sendRemarkName: string
        sendMemberName: string
        sendNickName: string
        guildName: string
        channelName: string
        elements: any[]
        records: []
        emojiLikesList: [],
        commentCnt: "0",
        directMsgFlag: 0,
        directMsgMembers: [],
        peerName: string,
        freqLimitInfo: null,
        editable: false,
        avatarMeta: "",
        avatarPendant: "",
        feedId: "",
        roleId: "0",
        timeStamp: "0",
        clientIdentityInfo: null,
        isImportMsg: false,
        atType: 0,
        roleType: 0,
        fromChannelRoleInfo: {
          roleId: "0",
          name: "",
          color: 0
        },
        fromGuildRoleInfo: {
          roleId: "0",
          name: "",
          color: 0
        },
        levelRoleInfo: {
          roleId: "0",
          name: "",
          color: 0
        },
        recallTime: "0",
        isOnlineMsg: false,
        generalFlags: "0x",
        clientSeq: 0,
        fileGroupSize: null,
        foldingInfo: null,
        multiTransInfo: null,
        senderUin: number,
        peerUin: `${number}`,
        msgAttrs: Map<string, any>
        anonymousExtInfo: null,
        nameType: 0,
        avatarFlag: 0,
        extInfoForUI: null,
        personalMedal: null,
        categoryManage: 0
    }
    interface AddPkgType {
      uin: number
      cmd: string
      data: Uint8Array
    }
}

declare module 'yui-native' {
    export = YuiNativeWrapper.CrossProcessExports
  }
  