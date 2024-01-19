export abstract class ICacheClient {
  protected constructor() {}

  abstract get<T>(key: string): Promise<T | null>;
  abstract set(key: string, value: string): Promise<boolean>;
}