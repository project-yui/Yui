
const LogLevel = {
  /** 追踪日志 */
  Trace: 0,
  /** 调试日志 */
  Debug: 1,
  /** 普通日志 */
  Info: 2,
  /** 警告日志 */
  Warning: 3,
  /** 错误日志 */
  Error: 4,
}
const _console = {
  debug: console.debug,
  info: console.info,
  warn: console.warn,
  error: console.error,
  trace: console.trace,
}
const color = {
  red: 31,
  green: 32,
  yellow: 33,
  blue: 34,
  white: 37,
}
const Styles = [
  `\x1b[${color.white}m%s\x1b[0m`,
  `\x1b[${color.blue}m%s\x1b[0m`,
  `\x1b[${color.green}m%s\x1b[0m`,
  `\x1b[${color.yellow}m%s\x1b[0m`,
  `\x1b[${color.red}m%s\x1b[0m`
]
const Methods = [
  'trace',
  'debug',
  'info',
  'warn',
  'error'
]

const isLogEnabled = true

if (!isLogEnabled) {
  _console.info('================================日志打印已关闭！=======================================')
}

const CurrentLogLevel = 0

/**
 * 日志打印工具，统一管理日志输出&上报
 */
class Logger {

  constructor (namespace = 'unknown') {
    this.beforeFuncs = [];
    this.afterFuncs = [];
    this.config = {
        namespace: '',
    };
    this.config.namespace = `[${namespace}]`;
  }

  /**
   * 创建新的 Logger 实例
   *
   * @param namespace 命名空间
   * @returns Logger
   */
  create (namespace = 'unknown') {
    return new Logger(namespace)
  }

  _log (level, args) {
    if (!isLogEnabled) return
    // 优先级小的不显示
    if (level < CurrentLogLevel) return
    this.beforeFuncs.forEach(e => e(this.config))
    const now = new Date()
    const fix = (d, len = 2) => (d + '').padStart(len, '0')
    const time = `${now.getFullYear()}-${fix(now.getMonth() + 1)}-${fix(now.getDate())} ${fix(now.getHours())}:${fix(now.getMinutes())}:${fix(now.getSeconds())}.${fix(now.getMilliseconds(), 3)}`
    _console[Methods[level]](`[${time}] [${Styles[level]}] ${this.config.namespace}`, Methods[level], ...args)
    this.afterFuncs.forEach(e => e(this.config))
  }

  /**
   * 添加拦截器
   * @param func 拦截器
   * @param isBefore 是否日志之前
   * @returns this
   */
  addInterceptor (func, isBefore = true) {
    if (typeof func !== 'function')
      return this.error('拦截器函数不符合规范')
    if (isBefore) {
      this.beforeFuncs.push(func)
      return this
    }
    this.afterFuncs.push(func)
    return this
  }

  /**
   * 添加日志打印之前的拦截函数
   *
   * @param func 拦截器
   * @returns this
   */
  addBeforeInterceptor (func) {
    this.beforeFuncs.push(func)
    return this
  }

  /**
   * 添加日志打印之后的拦截函数
   *
   * @param func 拦截器
   * @returns this
   */
  addAfterInterceptor (func) {
    this.afterFuncs.push(func)
    return this
  }

  /**
   * 打印追踪信息 🐛
   *
   * @param args 任意参数
   */
  trace (...args) {
    this._log(LogLevel.Trace, args)
    return this
  }

  /**
   * 打印调试信息 🐛
   *
   * @param args 任意参数
   */
  debug (...args) {
    this._log(LogLevel.Info, args)
    return this
  }

  /**
   * 打印输出信息 🐛
   *
   * @param args 任意参数
   */
  info (...args) {
    this._log(LogLevel.Info, args)
    return this
  }

  /**
   * 打印输出警告信息 ❕
   *
   * @param args 任意参数
   */
  warn (...args) {
    this._log(LogLevel.Warning, args)
    return this
  }

  /**
   * 打印输出错误信息 ❌
   *
   * @param args 任意参数
   */
  error (...args) {
    this._log(LogLevel.Error, args)
    return this
  }

  /**
   * 设置命名空间（日志前缀）
   * @param namespace
   */
  setNamespace (namespace = '') {
    this.config.namespace = `[${namespace}]`
    return this
  }
}

// export const nanoLog = new Logger()

const useLogger = (namespace) => {
  return new Logger(namespace)
}
module.exports = {
  useLogger
}
