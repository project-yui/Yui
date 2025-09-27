import { WebSocketServer } from 'ws' // https://github.com/websockets/ws/issues/1538#issuecomment-1150203821
import { BotActionRequest, BotActionResponse } from '../onebot/actions/interfaces';
import { useStore } from '../store/store';
import { NIL as NIL_UUID } from 'uuid'
import { checkBaseRequestField } from '../common/action';
import { useLogger } from '../common/log';
import { useServer } from './server';
import { useConfigStore } from '../store/config';
import { CustomError } from './error/custom-error';
import { convertToCamelCase, convertToSnakeCase } from '../common/utils';
import { NTInitialize } from '../ntqq';
import { useAsyncStore } from '../store/async-store';
import { listenMessage } from '../onebot/event/message';
import { useNTUserStore } from '../ntqq/store/user';
import { initEvent } from '../onebot/event';

const { getActionHandle } = useStore()
const log = useLogger('WebSocket')
const { addSendHandle, removeSendHandle } = useServer()

/**
 * 启动Websocket服务器
 */
export const startWebsocketServer = () => {

  const { getConfig } = useConfigStore()
  const cfg = getConfig()
  const wss = new WebSocketServer({
    host: cfg.yui.ws.host,
    port: cfg.yui.ws.port,
  });
  wss.once('close', () => {
    log.info('websocket server closed.')
  })
  wss.once('listening', () => {
    log.info(`websocket server listening on ${cfg.yui.ws.host}:${cfg.yui.ws.port}`)
  })
  wss.on('connection', function connection(ws, req) {
    log.info('receive connection.');
    const asyncStore = useAsyncStore()
    try {
      log.info('async run.');
      if (!req.url) {
        log.error('url error')
        ws.terminate()
        ws.close(400, 'url error')
        return;
      }
      // TODO: 注册事件监听
      const eventHandle = (msg: string) => {
        ws.send(msg)
      }
      addSendHandle(eventHandle)
      ws.on('close', (code, reason) => {
        log.info('connection close.', code, reason.toString())
        removeSendHandle(eventHandle)
      })

      ws.on('message', function incoming(message) {

        asyncStore.run(new Map(), async () => {
          let msg: BotActionRequest
          try {
            log.info('server: received: ', message.toString());
            // 此处解析可能会失败
            msg = JSON.parse(message.toString())
            const ret = checkBaseRequestField(msg)
            if (ret !== undefined) {
              ws.send(JSON.stringify(ret));
              return
            }
            log.info('uin:', msg.user.uin)
            asyncStore.getStore()?.set('uin', msg.user.uin)
            asyncStore.getStore()?.set('traceId', msg.id)
            const { getUserInfo } = useNTUserStore()
            let u = getUserInfo()
            if (!u) {
              log.info(`user(${msg.user.uin}) has not been initialized, start to initialize...`)
              await NTInitialize()
              initEvent()
            }
          }
          catch (e) {
            // 消息json格式不正确
            log.error(e)
            const result: BotActionResponse = {
              id: NIL_UUID,
              status: 'failed',
              retcode: 10004,
              data: null,
              message: 'Bad Request'
            }
            if (e instanceof CustomError) {
              result.status = 'failed'
              result.retcode = e.code
              result.message = e.message
            }
            ws.send(JSON.stringify(result));
            return
          }

          // 获取动作处理函数
          log.info('request action:', msg.action)
          const handle = getActionHandle(msg.action)
          if (handle != undefined) {
            let resp: BotActionResponse = {
              id: msg.id,
              status: 'ok',
              retcode: 0,
              data: undefined,
              message: ''
            }
            try {
              log.info('start handle for ', msg.action)
              resp.data = convertToSnakeCase(await handle(convertToCamelCase(msg.params)))
              log.info('end handle for ', msg.action)
            }
            catch (e) {
              log.error('内部错误:', e)
              // TODO: 支持Error和CustomError处理
              if (e instanceof CustomError) {
                resp.status = 'failed'
                resp.retcode = e.code
                resp.message = e.message
              }
              else {
                resp = {
                  id: msg.id,
                  status: 'failed',
                  retcode: 20002,
                  data: null,
                  message: 'Internal Handler Error'
                }
              }
            }
            log.info(`reply ${resp.id}:`, JSON.stringify(resp))
            ws.send(JSON.stringify(resp));
          }
          else {
            // 没有找到处理函数
            const result: BotActionResponse = {
              id: msg.id,
              status: 'failed',
              retcode: 10002,
              data: null,
              message: 'Unsupported Action'
            }
            ws.send(JSON.stringify(result));
          }
        });
      })
    }
    catch (err) {
      log.error(err)
    }
  });
  wss.on('error', (e) => {
    log.info('failed to create server!', e)
  })
  return wss
}