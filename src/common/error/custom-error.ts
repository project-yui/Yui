export class CustomError extends Error {
  private readonly _code: number

  constructor(code: number, msg: string) {
    super(msg)
    this.name = 'CustomError'
    this._code = code
  }

  get code() {
    return this._code
  }
}
