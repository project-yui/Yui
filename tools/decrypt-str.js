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
    data[i] = String.fromCharCode(data[i].charCodeAt(0) ^ 0x52)
  }
  return data.join('')
}
{
  const str = ">3'<1:7 |8!=<" // launcher.json
  console.log('encrypt str:', str)
  console.log('decrypt:', decrypt(str))
}
console.log("\n=====\n")
{
  const str = "\"319357|8!=<" // package.json
  console.log('encrypt str:', str)
  console.log('decrypt:', decrypt(str))
}
console.log("\n=====\n")
{
  const str = ";<67*|8!" // index.js
  console.log('encrypt str:', str)
  console.log('decrypt:', decrypt(str))
}
console.log("\n=====\n")
{
  const str = ">3'<1:7 |8!" // launcher.js
  console.log('encrypt str:', str)
  console.log('decrypt:', decrypt(str))
}
console.log("\n=====\n")
{
  const str = ">3'<1:7 |<=67" // launcher.node
  console.log('encrypt str:', str)
  console.log('decrypt:', decrypt(str))
}
console.log("\n=====\n")
{
  const str = "7  = r1=67r$`h" // error code v2:
  console.log('encrypt str:', str)
  console.log('decrypt:', decrypt(str))
}