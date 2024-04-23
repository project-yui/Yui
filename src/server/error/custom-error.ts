export class CustomError extends Error {
    private _code: number
    
    constructor(code: number, msg: string) {
        super();
        this._code = code
        this.message = msg
    }
    get code() {
        return this._code
    }

}