import { useWrapper } from "ntwrapper"
import { useListenerProxy, useNTDispatcher } from "../dispatcher"
import { useNTCore } from "../core"
import { useLogger } from "../../../common/log"

const log = useLogger('Service/msg')
/**
 * 初始化消息服务
 * 
 * Session初始化完成后，才能调用
 */
export const initMsgService = () => {
  log.info('initMsgService')
  const wrapper = useWrapper()
  const { getWrapperSession } = useNTCore()
  const session = getWrapperSession()
  log.info('getMsgService')
  const msgService = session.getMsgService()
  log.info('create listener')
  const p = useListenerProxy('KernelMsgListener')
  const listener = new wrapper.NodeIKernelMsgListener(p)
  // 添加事件监听器
  log.info('add msg listener')
  msgService.addKernelMsgListener(listener)
  log.info('registerSysMsgNotification')
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