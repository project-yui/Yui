console.log('here is msojocs222!!!!')
const {protocol, session, ipcMain } = require('electron')
const { Module } = require("module");
const fs = require('fs')

// HOOK
const {app, BrowserWindow} = require('electron');
const path = require('path');

const originalBrowserWindow = BrowserWindow;
app.commandLine.appendSwitch("disable-features", "OutOfBlinkCors");
const hookBrowserWindow = (OriginalBrowserWindow) => {
  function HookedBrowserWindow(options) {
    // 修改或增加构造函数的选项
    try {
      console.log('options before:', options)
      if (options && options.webPreferences) {
        options.webPreferences.devTools = true
        // options.webPreferences.preload = "D:/Work/QQ/QQ9.9.3.17412_x64/Files/resources/app/versions/9.9.3-17412/plugin-preloads.js"
      }
      // console.log('options after:', options)
    }catch(e) {

    }
    // 使用修改后的选项调用原始构造函数
    return new OriginalBrowserWindow(options);
  }

  // 复制原始构造函数的原型链并进行替换
  HookedBrowserWindow.prototype = Object.create(OriginalBrowserWindow.prototype);
  HookedBrowserWindow.prototype.constructor = HookedBrowserWindow;
  Object.setPrototypeOf(HookedBrowserWindow, OriginalBrowserWindow);

  return HookedBrowserWindow;
};

// 使用替换的构造函数
const HookedBrowserWindow = hookBrowserWindow(originalBrowserWindow);
const ModuleLoadHook = {
  electron: (module) => {
    return {
      ...module,
      BrowserWindow: HookedBrowserWindow
    }
  },
  // crypto: (module) => {
  //   console.log('load crypt')
  //   const _createHmac = function(...args) {
  //     // console.log('createHmac:', ...args)
  //     // console.log(args[1])
  //     const ret = module.createHmac(...args)
  //     ret._digest = ret.digest
  //     ret.digest = function(...args) {
  //       // console.log('digest args:', ...args)
  //       const ret = this._digest(...args)
  //       // console.log('digest ret:', ret)
  //       return ret
  //     }
  //     // console.log('createHmac ret:', ret)
  //     return ret
  //   }
  //   const _createCipheriv = function(...args) {
  //     // console.log('createCipheriv:', ...args)
  //     const ret = module.createCipheriv(...args)
  //     return ret
  //   }
  //   const _createDecipheriv = function(...args) {
  //     console.log('createDecipheriv:')
  //     const ret = module.createDecipheriv(...args)
  //     ret._update = ret.update
  //     ret.update = function(...a) {
  //       console.log('update:', ...a)
  //       return ret._update(...a)
  //     }
  //     ret._final = ret.final
  //     ret.final = function(...a) {
  //       console.log('final:', ...a)
  //       const r = ret._final(...a)
  //       console.log('r:', r.toString())
  //       return r
  //     }
  //     ret._write = ret.write
  //     ret.write = function(...a) {
  //       console.log('write:', ...a)
  //       const r = ret._write(...a)
  //       // console.log('r:', r.toString())
  //       return r
  //     }
      
  //     // console.log('createDecipheriv ret:', t)
  //     // ret._on = ret.on
  //     // ret.on = function(...args) {
  //     //   return ret._on(...args)
  //     // }
  //     return ret
  //   }
  //   // const ret = {}
  //   // for (const k in module) {
  //   //   ret[k] = function(...args) {
  //   //     console.log(`${k}:`, ...args)
  //   //     const ret = module[k](...args)
  //   //     return ret
  //   //   }
  //   // }
  //   // return ret
  //   return {
  //     ...module,
  //     createHmac: _createHmac,
  //     createCipheriv: _createCipheriv,
  //     createDecipheriv: _createDecipheriv,
  //   }
  // },
}
// 监听窗口创建
function observeNewBrowserWindow(callback) {
  const original_load = Module._load;
  // console.log('Module:', Module)
  Module._load = (...args) => {
    const loaded_module = original_load(...args);

    // console.log('load', args[0])
    if (ModuleLoadHook[args[0]]) {
      return ModuleLoadHook[args[0]](loaded_module)
    }
    else {
      return loaded_module;
    }
  }
  const original_compile = Module._compile;
  Module._compile = function(...args) {
    console.log('_compile:', ...args)
    return original_compile(...args)
  }
}
observeNewBrowserWindow((win) => {
  console.log('BrowserWindow Create')
})

const originloadURL = BrowserWindow.prototype.loadURL;
BrowserWindow.prototype.loadURL = function(...args){
  // this.setMinimumSize(300, 300);
  console.log('=====loadURL', ...args)
  // setTimeout(() => {
  //   this.webContents.openDevTools()
  //   this.webContents.toggleDevTools();
  // }, 3000)
  this.webContents.openDevTools()
  const path = require('path');
  const extPath = path.join(path.dirname(app.getAppPath()), "extensions");
  console.log('----extPath----', extPath)
  const _send = this.webContents.send
  this.webContents.send = function(...args) {
    console.log('\n\n=====\nsend:', JSON.stringify(args))
    return _send.apply(this, args)
  }
  // this.webContents.session.loadExtension(extPath + "/extension").then(({ id }) => {
  //   // ...
  //   console.log('-----Load Extension:', id)
  // })
  // 设置PAC代理脚本
  // this.webContents.on('ipc-message-sync', (event, ...args)=>{
  //   if(args[0] === "config/roamingPAC"){
  //     console.log("receive config/roamingPAC: ", ...args)
  //     const ses = this.webContents.session
  //     ses.setProxy({
  //       mode: 'pac_script',
  //       pacScript: args[1]
  //     }).then(res=>{
  //       console.log("====set proxy")
  //       ses.forceReloadProxyConfig().then(()=>{
  //         ses.resolveProxy("akamai.net").then(res=>{
  //           console.log("resolveProxy akamai.net --> ", res)
  //           event.returnValue = res.length === 0?'error':'ok'
  //           if(res.length === 0)
  //           ses.setProxy({mode:'system'})
  //         })

  //       })
  //     }).catch(err=>{
  //       console.error("====set error", err)
  //       event.returnValue = 'error'
  //     })
  //   }
  // })
  return originloadURL.apply(this, args)
};
const ipcMap = {}
ipcMain._on = ipcMain.on
ipcMain.on = function(...args) {
  console.log('ipcMain on register:', args)
  if (args[0].includes('IPC_UP')) {
    ipcMap[args[0]] = {
      handle: args[1]
    }
  }
  return ipcMain._on(args[0], function(...a) {
    console.log(`\nipcMain emit for ${args[0]}:`, args)
    // console.log('args:', ...a)
    for (let i = 0; i < a.length; i++) {
      const arg = a[i]
      console.log(`arg${i}:`, arg)
    }
    args[1](...a)
  })
}

ipcMain._handle = ipcMain.handle
ipcMain.handle = function(...args) {
  console.log(`\nipcMain handle register from ${args[0]}:`, args)
  return ipcMain._handle(args[0], function(...a) {
    // console.log('\nipcMain handle emit, arg length:', a.length)
    // console.log('args:', ...a)
    args[1](...a)
  })
}

// setTimeout(() => {
//   const e = {}
//   console.log('\n\n===========\nstart test')
//   const req = ipcMap['IPC_UP_1'](e, {
//     type: 'request',
//     callbackId: '285eb7f8-05c1-4f98-860c-e61abae18ce5',
//     eventName: 'ns-ntApi-1'
//   },[
//     "nodeIKernelLoginService/getLoginList",
//     null,
//     null
//   ]).then((res) => {
//     console.log('result:', res, e)
//   })
  
//   console.log('req:', req)
// }, 5000)

setTimeout(() => {
  const e = {}
  
  console.log('\n\n===========\n发送消息')
  ipcMap['IPC_UP_2'].handle(e, {
    type: 'request',
    callbackId: '370d9f75-c818-4ea6-946b-2462a5b76c9f',
    eventName: 'ns-ntApi-2'
  },[
    "nodeIKernelMsgService/sendMsg",
    {
      "msgId":"0",
      "peer":{
        "chatType":2,
        "peerUid":"933286835",
        "guildId":""
      },
      "msgElements":[
        {
          "elementType":1,
          "elementId":"",
          "textElement": {
            "content":"hi, message from nt bot!!!",
            "atType":0,
            "atUid":"",
            "atTinyId":"",
            "atNtUid":""
          }
        }
      ],
      "msgAttributeInfos": new Map()
    },
    null
  ])
}, 10000)
// protocol._registerStringProtocol = protocol.registerStringProtocol
// protocol.registerStringProtocol = function(...args) {
//   console.log('registerStringProtocol:', ...args)
//   return protocol._registerStringProtocol(...args)
// }
app.on('ready', ()=>{
  // 自定义协议的具体实现
  // protocol.registerStringProtocol('roaming', (req, cb) => {
  //   // console.log('registerHttpProtocol', req)
  //   HttpGet(req.url.replace('roaming', 'https'), {
  //     cookie: req.headers['x-cookie']
  //   }).then(res=>{
  //     cb(res)
  //   }).catch(err=>{
  //     cb({
  //       statusCode: 500,
  //       data: JSON.stringify(err)
  //     })
  //   })
  // })
  
  // protocol.registerHttpProtocol('roaming-thpic', (req, cb) => {
  //   cb({
  //     url: req.url.replace('roaming-thpic', 'https')
  //   })
  // })
  
});
require('./launcher.node').load('external_index', module);//