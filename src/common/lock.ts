/**
 * 基于Promise的锁
 */
export class Lock {
  /**
   * 锁
   */
  private _locked: boolean;
  /**
   * 等待列表
   */
  private _waiting: ((value?: unknown) => void)[];

  constructor() {
    this._locked = false;
    this._waiting = [];
  }

  /**
   * 获取锁
   */
  async lock() {
    if (this._locked) {
      // 如果已经上锁，将 Promise 添加到等待队列
      const unlockNext = new Promise((resolve) => this._waiting.push(resolve));
      await unlockNext;
    }
    this._locked = true;
  }

  /**
   * 解锁
   */
  unlock() {
    if (this._waiting.length > 0) {
      // 解锁下一个等待的 Promise
      const resolveNext = this._waiting.shift();
      if (resolveNext) resolveNext();
    } else {
      this._locked = false;
    }
  }
}