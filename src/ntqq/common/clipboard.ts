import { useLogger } from "../../common/log"
import { NTMessageConverter } from "../../transfer/message/convert"
import { getNTNodeMiscService } from "../core/core"
import { NTReceiveMessageType } from "../message/interfaces"

const log = useLogger('NTQQ/Clipboard')
export const NTParseClipboard2Msg = async () => {
    const miscService = getNTNodeMiscService()
    const ret = await miscService.wantParseClipboard()
    log.info('cliboard result:', typeof ret, JSON.stringify(ret, null, 4))
    const msg: NTReceiveMessageType.NTMessageItemType = {
        chatType: 1, peerUid: '0', guildId: '',
        msgId: "0",
        msgRandom: "0",
        msgSeq: "0",
        cntSeq: "0",
        msgType: 2,
        subMsgType: 1,
        sendType: 0,
        senderUid: "u_0",
        channelId: "",
        guildCode: "0",
        fromUid: "0",
        fromAppid: "0",
        msgTime: "0",
        msgMeta: "0x",
        sendStatus: 2,
        sendRemarkName: "",
        sendMemberName: "",
        sendNickName: "",
        guildName: "",
        channelName: "",
        elements: [],
        records: [],
        emojiLikesList: [],
        commentCnt: "0",
        directMsgFlag: 0,
        directMsgMembers: [],
        peerName: "",
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
        clientSeq: "0",
        fileGroupSize: null,
        foldingInfo: null,
        multiTransInfo: null,
        senderUin: "0",
        peerUin: "0",
        msgAttrs: {},
        anonymousExtInfo: null,
        nameType: 0,
        avatarFlag: 0,
        extInfoForUI: null,
        personalMedal: null,
        categoryManage: 0
    }
    return new NTMessageConverter(msg).convert()
}
