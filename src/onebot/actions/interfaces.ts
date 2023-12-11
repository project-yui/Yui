/**
 * 动作请求
 * 机器人 -> 框架
 */
export interface BotActionRequest<T = any> {
  /**
   * 唯一标识uuid
   */
  id: string
  /**
   * 动作名称
   */
  action: string
  /**
   * 动作参数
   */
  params: T
}

/**
 * 动作响应
 * 框架 -> 机器人
 */
export interface BotActionResponse<T = any> {
  /**
   * 唯一标识uuid，与对应请求一致
   */
  id: string
  /**
   * 动作执行结果
   */
  status: 'ok' | 'failed'
  /**
   * 返回码
   */
  retcode: number
  /**
   * 响应数据
   */
  data: T
  /**
   * 错误信息
   */
  message: string
}

export interface BotActionParams {
  /**
   * 内部标识，用于类型提示
   */
  _mark: 'action'
}
