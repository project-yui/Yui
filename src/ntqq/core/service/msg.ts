import { useListenerProxy } from "../dispatcher"
import { useNTCore } from "../core"
import { useLogger } from "../../../common/log"
import { useNTWrapper } from "./nt-wrapper"

const log = useLogger('Service/msg')
/**
 * 初始化消息服务
 * 
 * Session初始化完成后，才能调用
 */
export const initMsgService = async () => {
  log.info('initMsgService')
  const { getWrapperSession } = useNTCore()
  const session = getWrapperSession()
  log.info('getMsgService')
  const msgService = session.getMsgService()
  log.info('create listener')
  const p = useListenerProxy('KernelMsgListener')
  // 添加事件监听器
  log.info('add msg listener')
  msgService.addKernelMsgListener(p)
  const dev = await msgService.getOnLineDev()
  log.info('dev:', dev)
  log.info('registerSysMsgNotification')
  // session.getRecentContactService().addKernelRecentContactListener(useListenerProxy('RecentContactListener'))
  // try
  // {
  //   // const t = msgService.registerSysMsgNotification(1, 2, [1])
  //   // log.info('registerSysMsgNotification:', t)
  //   // t.then(res => {
  //   //   log.info('registerSysMsgNotification:', res)
  //   // })
  //   // .catch(err => {
  //   //   log.error('registerSysMsgNotification:', err)
  //   // })

  // }catch (err) {
  //   log.error('error:', err)
  // }
}