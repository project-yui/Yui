//////////
////
//// QQ.exe 启动程序中对部分字符串进行位运算加密，以下是解密方法及部分实例。
////
//////////

/**
 * 将加密的字符串进行解密
 * 
 * @param {string} encrypted 
 * @returns 解密的字符串
 */
const decrypt = (encrypted) => {
  const data = encrypted.split('')
  for (let i = 0; i < data.length; i++) {
    data[i] = String.fromCharCode(data[i].charCodeAt(0) ^ 0x1B)
  }
  return data.join('')
}
const strList = [
  'wznuxs~i5qhtu',
  'zxpz|~5qhtu',
  'kkDwznuxs~iG',
]
for (const str of strList){
  console.log('encrypt str:', str)
  console.log('decrypt:', decrypt(str))
  console.log('\n')
}