import { useNTCore } from "../core/core"

export const NTgetFaceEmoji = async () => {
    // 获取全部表情
    const { getWrapperSession } = useNTCore()
    const emojiService = getWrapperSession().getBaseEmojiService()
    const emojis = await emojiService.fetchFullSysEmojis({
        pullMoment: 1,
        pullType: 7,
        refresh: true,
        fetchAdvaceSource: true,
        fetchBaseSource: true,
        thresholdValue: 40
      })
    // 获取最近常用表情
}