import { useLogger } from "../../../common/log"
import { getNTMsgService } from "../core"
import { bindRuntimeServiceKernelListener } from "./bind-kernel-listener"

const log = useLogger('Service/msg')
/**
 * 初始化消息服务
 * 
 * Session初始化完成后，才能调用
 */
export const initMsgService = async () => {
  log.info('initMsgService')
  log.info('getMsgService')
  // 添加事件监听器
  log.info('add msg listener')
  const msgService = bindRuntimeServiceKernelListener({
    listenerName: 'KernelMsgListener',
    getService: getNTMsgService,
    attach: (service, listener) => service.addKernelMsgListener(listener),
  })
  const dev = await msgService.getOnLineDev()
  log.info('dev:', dev)
  log.info('registerSysMsgNotification')
  // session.getRecentContactService().addKernelRecentContactListener(createNTListenerProxy('RecentContactListener'))
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
