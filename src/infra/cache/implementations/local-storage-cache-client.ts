import { ICacheClient } from "@/src/infra/cache/ICacheClient";

export class LocalStorageCacheClient implements ICacheClient {
  async get<T>(key: string): Promise<T | null> {
    const item = window.localStorage.getItem(key);

    if (!item) return null;

    return item as T;
  }

  async set(key: string, value: string): Promise<boolean> {
    const valueParsed = typeof value === 'string' ? value : JSON.stringify(value);

    try {
      window.localStorage.setItem(key, valueParsed);

      return true;
    } catch (error) {
      return false;
    }
  }
}