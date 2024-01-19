interface HttpClientBaseConfig {
  baseUrl: string;
  headers: Record<string, string>
}

interface HttpResponse<T> {
  ok: boolean;
  statusCode: number;
  headers?: Record<string, string>
  body: T | null;
}

export abstract class IHttpClientBase {
  protected constructor(protected config: IHttpClientBase.Config) {}

  abstract get<T>(url: string): Promise<IHttpClientBase.Response<T>>;
  abstract post<T>(url: string, data: any): Promise<IHttpClientBase.Response<T>>;
}

export namespace IHttpClientBase {
  export type Response<T> = HttpResponse<T>;

  export type Config = HttpClientBaseConfig;
}