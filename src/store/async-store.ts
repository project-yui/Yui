import { AsyncLocalStorage } from "async_hooks";

export const useAsyncStore = () => (global as any).asyncLocalStorage as AsyncLocalStorage<Map<string, string>>