import EventEmitter from "events"

const dispatcher = new EventEmitter()

/**
 * 
 * @returns 调度器
 */
export const useNTDispatcher = () => dispatcher