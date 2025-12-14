const path = require('path')
const { constants } = require('os')
const preload = '/home/msojocs/github/Yui-native/build/preload.node'
const m = { exports: {} };
process.dlopen( 
    m,
    preload,
    constants.dlopen.RTLD_NOW | constants.dlopen.RTLD_GLOBAL
)
const wrapper = require(path.resolve(__dirname, '../program/wrapper.node'))

const wrapperSession = new wrapper.NodeIQQNTWrapperSession()
const ws = wrapper.NodeIQQNTWrapperSession.getNTWrapperSession(1)
console.info('ws:', ws)