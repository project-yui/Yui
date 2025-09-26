
export const sleep = (t: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, t)
  })
}

/**
 * 将对象的驼峰命名转为下划线命名
 * @param obj 
 * @returns 
 */
export function convertToSnakeCase(obj: any) {
  if (typeof obj !== 'object' || obj === null) {
    return obj;
  }

  let newObj: any = Array.isArray(obj) ? [] : {};

  Object.keys(obj).forEach((key) => {
    let newKey = key.replace(/([A-Z])/g, "_$1").toLowerCase();
    newObj[newKey] = typeof obj[key] === 'object' && obj[key] !== null ? convertToSnakeCase(obj[key]) : obj[key];
  });

  return newObj;
}

/**
 * 将对象的下划线命名转为驼峰命名
 * @param obj 
 * @returns 
 */
export function convertToCamelCase(obj: any) {
  if (typeof obj !== 'object' || obj === null) {
    return obj;
  }

  let newObj: any = Array.isArray(obj) ? [] : {};

  Object.keys(obj).forEach((key) => {
    let newKey = key.replace(/_([a-z])/g, (match, letter) => letter.toUpperCase());
    newObj[newKey] = typeof obj[key] === 'object' && obj[key] !== null ? convertToCamelCase(obj[key]) : obj[key];
  });

  return newObj;
}
/**
 * https://github.com/tsuzcx/qq_apk/blob/afe46ef5640d0ba6850cdefd3c11badbd725a3f6/com.tencent.mobileqq/classes.jar/com/tencent/mobileqq/utils/httputils/PkgTools.java#L967
 */
export const int2IPNet = (ip: number): string => {
  return (ip & 0xFF) + '.' +
    ((ip >> 8) & 0xFF) + '.' +
    ((ip >> 16) & 0xFF) + '.' +
    ((ip >> 24) & 0xFF);
}