import { useRuntimeStore } from "../store/runtime"

const enum LogLevel {
  /** 追踪日志 */
  Trace,
  Debug,
  /** 警告日志 */
  /** 普通日志 */
  Info,
  /** 调试日志 */
  Warning,
  /** 错误日志 */
  Error,
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
] as const
/**
 * 日志的配置类型
 */
interface LoggerConfigType {
  /** 命名空间 */
  namespace: string
}
/**
 * 拦截器函数类型
 */
type InterceptorFuncType = (config: LoggerConfigType) => void

const isLogEnabled = process.env['YUI_LOG'] === 'true'

if (!isLogEnabled) {
  _console.info('================================日志打印已关闭！=======================================')
}

const CurrentLogLevel: LogLevel = LogLevel.Trace

/**
 * 日志打印工具，统一管理日志输出&上报
 */
class Logger {
  /** 命名空间（scope），用于区分所在执行文件 */
  private readonly beforeFuncs: InterceptorFuncType[] = []
  private readonly afterFuncs: InterceptorFuncType[] = []
  private readonly config: LoggerConfigType = {
    namespace: '',
  }

  constructor (namespace = 'unknown') {
    this.config.namespace = `[${namespace}]`
  }

  /**
   * 创建新的 Logger 实例
   *
   * @param namespace 命名空间
   * @returns Logger
   */
  public create (namespace = 'unknown') {
    return new Logger(namespace)
  }

  private _log (level: LogLevel, args: unknown[]) {
    const { getTraceId } = useRuntimeStore()
    const traceId = getTraceId()
    if (!isLogEnabled) return
    // 优先级小的不显示
    if (level < CurrentLogLevel) return
    this.beforeFuncs.forEach(e => e(this.config))
    const now = new Date()
    const fix = (d: number, len = 2) => (d + '').padStart(len, '0')
    const time = `${now.getFullYear()}-${fix(now.getMonth() + 1)}-${fix(now.getDate())} ${fix(now.getHours())}:${fix(now.getMinutes())}:${fix(now.getSeconds())}.${fix(now.getMilliseconds(), 3)}`
    _console[Methods[level]](`[${time}] [${Styles[level]}] [${traceId}] ${this.config.namespace}`, Methods[level], ...args)
    this.afterFuncs.forEach(e => e(this.config))
  }

  /**
   * 添加拦截器
   * @param func 拦截器
   * @param isBefore 是否日志之前
   * @returns this
   */
  public addInterceptor (func: InterceptorFuncType, isBefore = true) {
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
  public addBeforeInterceptor (func: InterceptorFuncType) {
    this.beforeFuncs.push(func)
    return this
  }

  /**
   * 添加日志打印之后的拦截函数
   *
   * @param func 拦截器
   * @returns this
   */
  public addAfterInterceptor (func: InterceptorFuncType) {
    this.afterFuncs.push(func)
    return this
  }

  /**
   * 打印追踪信息 🐛
   *
   * @param args 任意参数
   */
  public trace (...args: unknown[]) {
    this._log(LogLevel.Trace, args)
    return this
  }

  /**
   * 打印调试信息 🐛
   *
   * @param args 任意参数
   */
  public debug (...args: unknown[]) {
    this._log(LogLevel.Debug, args)
    return this
  }

  /**
   * 打印输出信息 🐛
   *
   * @param args 任意参数
   */
  public info (...args: unknown[]) {
    this._log(LogLevel.Info, args)
    return this
  }

  /**
   * 打印输出警告信息 ❕
   *
   * @param args 任意参数
   */
  public warn (...args: unknown[]) {
    this._log(LogLevel.Warning, args)
    return this
  }

  /**
   * 打印输出错误信息 ❌
   *
   * @param args 任意参数
   */
  public error (...args: unknown[]) {
    this._log(LogLevel.Error, args)
    return this
  }

  /**
   * 设置命名空间（日志前缀）
   * @param namespace
   */
  public setNamespace (namespace = '') {
    this.config.namespace = `[${namespace}]`
    return this
  }
}

// export const nanoLog = new Logger()

export const useLogger = (namespace?: string) => {
  return new Logger(namespace)
}
