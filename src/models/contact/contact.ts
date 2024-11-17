/**
 * 联系对象
 * 
 * 用户/群组/Bot
 */
export abstract class Contact {
    /**
     * 对象ID
     */
    protected id: number
    protected constructor(id: number) {
        this.id = id
    }
    /**
     * getId
     */
    public getId() {
        return this.id
    }
    /**
     * 刷新数据
     */
    abstract refresh(): Promise<void>
}