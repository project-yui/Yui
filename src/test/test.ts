import path, { resolve } from "path"
import { useLogger } from "../common/log"
import { NTSendForwardMessage, NTSendMessage } from "../ntqq/message/message"
import { BotActionResponse } from "../onebot/actions/interfaces"
import { useStore } from "../store/store"
import { sendForwardMessageToGroup, sendMessageToGroup } from "../transfer/message/group"
import fs from 'fs'
import { Script } from 'vm'
import { randomUUID } from "crypto"
import vm from 'vm'
import v8 from 'v8'
import events from 'events'
import { app } from 'electron'


const { registerActionHandle } = useStore()
const log = useLogger('Test')

const testSendMsg = async (p: any): Promise<BotActionResponse<any>> => {
  log.info('testSendMsg')
  const { getWrapperSession } = useNTCore()
  const session = getWrapperSession()
  const msgService = session.getMsgService()
  let ret = undefined
  // const ret = await msgService.getSingleMsg(p.a, p.b)
  // log.info('ret:', ret)
  switch(p.type)
  {
    case 'forward':{
      ret = await msgService.multiForwardMsgWithComment(p.param, { chatType: 2, peerUid: '933286835', guildId: '' }, { chatType: 1, peerUid: 'u_K54_tDilsiaIV_m0q4XgCg', guildId: '' }, [], new Map())
      }break;
    case 'singleMsg':{
      const param = p.data
      ret = await msgService.getSingleMsg(param.a, param.b)
      }break;
    case 'sendMsg':{
      const param = p.data
      ret = await msgService.sendMsg('0', param.peer, param.b, new Map());
     } break;
    case 'addSendMsg':
      {
        log.info('addSendMsg',  p.data)
        try{
          const param = p.data
          ret = await msgService.addSendMSg('0', param.peer, param.b, new Map())
        }catch(err)
        {
          log.error('error:', err)
        }
        log.info('ret:', ret)
      }
      break;
    case 'upload':
      {
        log.info('upload',  p.data)
        try{
          const param = p.data
          ret = session.getRichMediaService().uploadRMFileWithoutMsg(param)
        }catch(err)
        {
          ret = err
          log.error('error:', err)
        }
        log.info('ret:', ret)
      }
      break;
    case 'richfile':
      {
        log.info('richfile',  p.data)
        try{
          ret = session.getRichMediaService().onlyUploadFile({
            "chatType": 2,
            "peerUid": "933286835",
            "guildId": ""
          }, [{
            fileName: 'test.jpg',
            filePath: "D:/Pictures/壁纸/wallpaper/0new.jpg",
            fileModelId: '123545665'
          }])
        }catch(err)
        {
          log.error('error:', err)
        }
        log.info('ret:', ret)
      }
      break;
    case 'addNewDownloadOrUploadFile':
      {
        log.info('addNewDownloadOrUploadFile',  p.data)
        try{
          ret = session.getStorageCleanService().addNewDownloadOrUploadFile(p.data)
        }catch(err)
        {
          log.info('exception...')
          log.error('error:', err)
        }
        log.info('ret:', ret)
      }
      break;
  }
  const resp: BotActionResponse = {
    id: "",
    status: "ok",
    retcode: 0,
    data: ret,
    message: ""
  }
  return Promise.resolve(resp)
}

class ScriptHook extends Script{
  private id: string
  private script: Script
  private script1: Script
  constructor(code: any, options?: any) {
    super(code, options)
    // if (code) {
    //   code = `undefined;` + code
    // }
    this.script = new Script(code, options)
    this.script1 = new Script(`
      // const keys = Object.keys(global)
      // console.log('keys of global', keys)
      // setInterval(() => {
      //   const keys = Object.keys(global.global)
      //   console.log('keys of global', keys)
      //   for (const k of keys) {
      //     console.log('key:', k, 'type:', typeof global[k])
      //   }
      //   for (const k of keys) {
      //     console.log('key:', k, '---->', global[k])
          
      //   }
      // }, 1000)
      (() => {
        // const rep = global.require
        let keys = [
          // 'global',             'queueMicrotask',
          // 'clearImmediate',     'setImmediate',
          // 'structuredClone',    'clearInterval',
          // 'clearTimeout',       'setInterval',
          // 'setTimeout',         'atob',
          // 'btoa',               'performance',
          // 'fetch',
          'TIMES',
          'launcher',           'loginWin',
          'loginWindowPid',     'TIMES_LABEL',
          'isFirstWinFromPool', '_',
          'isAppQuiting',       'multiInstancePort'
        ];
        for (const k of keys) {
          if (global[k]) continue
          console.log('\\n')
          console.log('add:', k)
          global[k] = {}
          let v1;
          Object.defineProperty(global, k, {
            get() {
              console.log('get:', k, v1)
              return v1
            },
            set(v) {
              console.log('set', k, '=', v)
              v1 = v
            }
          })
        }
      })();
      `)
    if (options) {
      const r = this.script1.runInThisContext()
      // log.info('result:', r)
    }

    this.id = randomUUID()
    log.info('ScriptHook/constructor', this.id, 'code:', code, 'options:', options)
    log.info('length:', code?.length, options?.cachedData?.length)
    if (options) {
      log.info('cachedData:', options.cachedData?.toString())
      fs.writeFileSync(`D:\\GitHub\\Telecord\\tmp\\start.code`, options.cachedData)
    }
  }
  runInContext(obj: any, options?: any) {
    // const ret = super.runInContext(obj, options)
    const ret = this.script.runInContext(obj, options)
    log.info('ScriptHook/runInContext', this.id, obj, options, ret)
    return ret
  }
  runInNewContext(...args: any) {
    // const ret = super.runInNewContext(...args)
    const ret = this.script.runInNewContext(...args)
    log.info('ScriptHook/runInNewContext', this.id, ...args, ret)
    return ret
  }
  runInThisContext(options: any) {
    log.info('runInThisContext', this.id, 'options:', options);
    // const ret = super.runInContext({}, options)
    // const ret = super.runInThisContext(options)
    const ret = this.script.runInThisContext(options)
    log.info('ScriptHook/runInThisContext', this.id, options)
    log.info('ScriptHook/runInThisContext ret1:', this.id, ret)

    // log.info('length:', ret.length)
    // log.info('ScriptHook/runInThisContext ret2:', ret())
    return function(...args: any[]) {
      log.info('execute function:', ...args)
      log.info('arg count:', args.length)
      for (let i=0; i < args.length; i++) {
        log.info(`arg ${i}:`, args[i])
      }
      const r = ret(...args)
      log.info('execute result:', r)
      return r
    }
  }
  createCachedData() {
    // const ret = super.createCachedData()
    const ret = this.script.createCachedData()
    log.info('ScriptHook/createCachedData', this.id, ret)
    return ret
  }
}

class CustomEventEmitter extends events.EventEmitter
{
  constructor(options?: any){
    super(options)
    log.info('CustomEventEmitter', options)
  }
  // on(eventName: string | symbol, listener: (...args: any[]) => void): this {
  //   log.info('CustomEventEmitter/on', eventName)
  //   // super.on(eventName, listener)
  //   return this
  // }
  // once(eventName: string | symbol, listener: (...args: any[]) => void): this {
  //   log.info('CustomEventEmitter/once', eventName)
  //   super.once(eventName, listener)
  //   return this
  // }
  // off(eventName: string | symbol, listener: (...args: any[]) => void): this {
  //   log.info('CustomEventEmitter/off', eventName)
  //   super.once(eventName, listener)
  //     return this
  // }
  // listenerCount(eventName: string | symbol, listener?: Function | undefined): number {
  //   const ret = super.listenerCount(eventName, listener)
  //   log.info('CustomEventEmitter/listenerCount', eventName)
  //   return ret
  //   return 1
  // }
  // addListener(eventName: string | symbol, listener: (...args: any[]) => void): this {
  //   log.info('CustomEventEmitter/addListener', eventName)
  //   return this
  // }
  // removeListener(eventName: string | symbol, listener: (...args: any[]) => void): this {
  //   log.info('CustomEventEmitter/removeListener', eventName)
  //   return this
  // }
  // setMaxListeners(n: number): this {
  //   log.info('CustomEventEmitter/removeListener', n)
  //   return this
  // }
}
const nodeModule = async () => {
  const open = (process as any).dlopen
  // 拦截native加载方法
  ;(process as any).dlopen = function(m: any, file: string){
    log.info('process.dlopen', m, file)
    // 调用默认native加载方法
    const ret = open(m, file)
    log.info('dlopen result:', ret, m)

    // 修改加载后的native方法
    if (file.includes('wrapper')){
      const _exports = m.exports
      for (const serviceName in _exports) {
        const service = _exports[serviceName]
        
        const ori = service
        const temp = function (...args: any) {
          log.info(`wrapper/${serviceName}/constructor`, ...args)
          return new ori(...args)
        }
        temp.prototype.constructor = Object.create(ori.prototype)
        temp.prototype.constructor = temp
        Object.setPrototypeOf(temp, ori);
        _exports[serviceName] = temp

        const funcs = service.prototype
        for (const funcName in funcs) {
          const func = funcs[funcName]
          funcs[funcName] = function(...args: any) {
            let r = func.apply(this, args)
            if (r instanceof Promise) {
              const uuid = randomUUID()
              log.info(`wrapper/${serviceName}/${funcName}`, uuid)
              return r.then((res) => {
                log.info(`wrapper/${serviceName}/${funcName}/${uuid}`, '\narguments:', ...args, '\nJSON arguments:', JSON.stringify(args), '\n----\nresponse:\n', res)
                return Promise.resolve(res)
              })
            }
            else {
              log.info(`wrapper/${serviceName}/${funcName}`, '\narguments:', ...args, '\nJSON arguments:', JSON.stringify(args), '\n----\nresponse:\n', r)
            }
            return r
          }
        }
      }
    }
    return ret
  }
}
const genMarkdown = () => {
  const _exports = require('../versions/9.9.9-22741/wrapper.node')
  let markdown = ''
  // 遍历类
  for (const serviceName in _exports) {
    const service = _exports[serviceName]
    const funcs = service.prototype
    markdown += `## ${serviceName}\n\n`
    markdown += '| 方法名 | 描述 |\n'
    markdown += '|-------|-----|\n'
    // 遍历方法
    for (const funcName in funcs) {
      markdown += `| ${funcName} | |\n`
    }
    markdown += '\n'
  }
  fs.writeFileSync('./docs/function.md', markdown)
  
}
const vmSrcipt = () => {
  global.require = require
  const script = new vm.Script(`const fs = require('fs')`)
  script.runInThisContext()
  
}

import async_hooks from 'node:async_hooks';
import { stdout } from 'node:process';
import { useNTCore } from "../ntqq/core/core"
import { DESTRUCTION } from "dns"
const hookAsync = () => {
  const { fd } = stdout;

  let indent = 0;
  async_hooks.createHook({
    init(asyncId, type, triggerAsyncId, resource) {
      const eid = async_hooks.executionAsyncId();
      const indentStr = ' '.repeat(indent);
      fs.writeSync(
        fd,
        `${indentStr}${type}(${asyncId}):` +
        ` trigger: ${triggerAsyncId} execution: ${eid} ${resource}\n`);
    },
    before(asyncId) {
      const indentStr = ' '.repeat(indent);
      fs.writeSync(fd, `${indentStr}before:  ${asyncId}\n`);
      indent += 2;
    },
    after(asyncId) {
      indent -= 2;
      const indentStr = ' '.repeat(indent);
      fs.writeSync(fd, `${indentStr}after:  ${asyncId}\n`);
    },
    destroy(asyncId) {
      const indentStr = ' '.repeat(indent);
      fs.writeSync(fd, `${indentStr}destroy:  ${asyncId}\n`);
    },
  }).enable();

}
const vmTest = () => {
  let codeTarget = 1
  const config = JSON.parse(fs.readFileSync(`D:\\GitHub\\Telecord\\tmp\\bytecode\\start${codeTarget}.json`).toString())
  const byteCode = fs.readFileSync(`D:\\GitHub\\Telecord\\tmp\\bytecode\\start${codeTarget}.jsc`)
  log.info('start with:', config.filename)
  // bytenode.runBytecode(code)
  v8.setFlagsFromString('--no-lazy')
  v8.setFlagsFromString('--no-flush-bytecode')
  // const s1 = new Script('')
  // const cache1 = s1.createCachedData()
  // log.info('cache1:', cache1)

  // const s2 = new Script('')
  // const cache2 = s2.createCachedData()
  // log.info('cache2:', cache2)

  const script = new Script(config.code, {
    filename: config.filename,
    cachedData: byteCode,
    lineOffset: 0,
  })
  // const platform = process.platform
  // Object.defineProperty(process, 'platform', {
  //   get () {
  //     log.info('get platform')
  //     return platform
  //   }
  // })
  log.info(Object.keys(global))
  
  const wrapper1 = require('../versions/9.9.7-21357/wrapper.node')
  for (const k in wrapper1.NodeIKernelLoginService.prototype) {
    wrapper1.NodeIKernelLoginService.prototype[k] = null
  }
  const keys = [
    // 'global',             'queueMicrotask',
    // 'clearImmediate',     'setImmediate',
    // 'structuredClone',    'clearInterval',
    // 'clearTimeout',       'setInterval',
    // 'setTimeout',         'atob',
    // 'btoa',               'performance',
    // 'fetch',
    'TIMES',
    'launcher',           'loginWin',
    'loginWindowPid',     'TIMES_LABEL',
    'isFirstWinFromPool', '_',
    'isAppQuiting',       'multiInstancePort'
  ]
  for (const k of keys) {
    if ((global as any)[k]) continue;
    (global as any)[k] = {}
    console.log('register:', k)
    let v1: any = null;
    Object.defineProperty(global, k, {
      get() {
        log.info('get', k, v1)
        return v1
      },
      set(v) {
        log.info('set', k, '=', v)
        v1 = v
      }
    })
  }
  try {
    const f = script.runInThisContext({
      filename: config.filename,
      lineOffset: 0,
      columnOffset: 0,
      displayErrors: true,
    })
    
    log.info('runInThisContext ret:', f, 'type:', typeof f)
    log.info('keys:', Object.keys(f), f === undefined)
    log.info('f:', f)
    const a0 = {}
    const a1 = function(file: string) {
      log.info('require:', file)
      if (file.startsWith('./') && file.endsWith('.js')) file = path.resolve(__dirname, `../versions/9.9.7-21357/application/${file}`)
      return require(file)
    }
    const a2 = module
    const a3 = config.filename
    const a4 = path.dirname(config.filename)
    log.info('f():', f(a0, a1, a2, a3, a4))
  }
  catch(err) {
    log.error('error1:', err)
  }
  // try {
    
  //   const ctx = vm.createContext({
  //     'global': function() {},
  //     'queueMicrotask': function() {},
  //     'clearImmediate':  function(){},    
  //     'setImmediate':  function(){},
  //     'structuredClone': function() {},  
  //     'clearInterval': function() {},
  //     'clearTimeout': function() {},     
  //     'setInterval': function() {},
  //     'setTimeout': function() {},       
  //     'atob': function() {},
  //     'btoa':  function(){},            
  //     'performance':  function(){},
  //     'fetch': function() {},           
  //     'TIMES':  function(){},
  //     'launcher':  function(){},        
  //     'loginWin':  function(){},
  //     'loginWindowPid':  function(){},   
  //     'TIMES_LABEL':  function(){},
  //     'isFirstWinFromPool':  function(){},
  //     '_':  function(){},
  //     'isAppQuiting':  function(){},    
  //     'multiInstancePort':  function(){}
  //   })
  //   const f = script.runInNewContext(ctx, {
  //     filename: 'D:\\GitHub\\Telecord\\ntqq\\resources\\app\\versions\\9.9.7-21357\\app_launcher\\index.js',
  //     lineOffset: 0,
  //     columnOffset: 0,
  //     displayErrors: true,
  //   })
  //   ;(global as any).f = f
  //   const t = new Script('console.log(f)')
  //   const ret = t.runInThisContext()
  //   log.info('ret:', ret)
    
  //   log.info(ctx)
  //   log.info('runInThisContext ret:', f, 'type:', typeof f)
  //   log.info('keys:', Object.keys(f), f === undefined)
  //   log.info('f:', f)
  //   log.info('f():', f())
  // }
  // catch(err) {
  //   log.error('error2:', err)
  //   process.exit(1)
  // }
}
export const test = (m: NodeModule) => {
  try {
    // log.info(require('os').platform())
    // vmSrcipt()
    // nodeModule()
    // useExample()
    genMarkdown()
    // setTimeout(() => {
      // vmTest()
    // }, 30000)
    // getExports()
    // process.exit(1)
    // hookFunction()
    // hookAsync()
    // const { registerEventListener } = useStore()
    // let i = 0
    // registerEventListener('KernelMsgListener/onRecvSysMsg', 'always', (data: number[]) => {
    //   log.info('sys msg:', data)
    //   fs.writeFileSync(`tmp/test${i++}.bin`, Buffer.from(data))
    // })
  }
  catch(err) {
    log.error('error:', err)
    process.exit(1)
  }
  registerActionHandle('test', testSendMsg)
}