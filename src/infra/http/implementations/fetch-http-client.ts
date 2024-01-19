import { IHttpClientBase } from "@/src/infra/http/IHttpClient";

export class FetchHttpClient extends IHttpClientBase {
  constructor(config: IHttpClientBase.Config) {
    super(config);
  }

  async get<T>(url: string): Promise<IHttpClientBase.Response<T>> {
    const { baseUrl, headers } = this.config;
    const requestOptions: RequestInit = {
      method: 'GET',
      headers: { ...headers, 'Content-Type': 'application/json' },
    };

    const requestUrl = `${baseUrl}${url}`;
    const timeoutPromise = this.createTimeoutPromise(20000);

    try {
      const result = await Promise.race([
        fetch(requestUrl, requestOptions),
        timeoutPromise,
      ]);

      if (result instanceof TimeoutError) {
        throw new Error('Request timed out');
      }
      
      const response = result as Response;
      
      if (!response.ok) {
        throw new RequestError(`Request failed with status: ${response.status}`);
      }
      
      const responseBody: T = await response.json();
      return { statusCode: response.status, body: responseBody, ok: response.ok };
    } catch (error) {
      throw new Error(`Error in GET request: ${error}`);
    }
  }

  async post<T>(url: string, data: any): Promise<IHttpClientBase.Response<T>> {
    const { baseUrl, headers } = this.config;
    const requestOptions: RequestInit = {
      method: 'POST',
      headers: { ...headers, 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    };

    const requestUrl = `${baseUrl}${url}`;
    const timeoutPromise = this.createTimeoutPromise(20000);

    try {
      const result = await Promise.race([
        fetch(requestUrl, requestOptions),
        timeoutPromise,
      ]);

      if (result instanceof TimeoutError) {
        throw new Error('Request timed out');
      }

      const response = result as Response;
      
      if (!response.ok) {
        throw new Error(`Request failed with status: ${response.status}`);
      }

      const responseBody: T = await response.json();

      return { statusCode: response.status, body: responseBody, ok: response.ok };
    } catch (error) {
      throw new Error(`Error in POST request: ${error}`);
    }
  }

  private createTimeoutPromise(timeout: number): Promise<boolean> {
    return new Promise((_, reject) =>
      setTimeout(() => reject(new TimeoutError('Request timed out')), timeout)
    );
  }
}

class TimeoutError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'TimeoutError';
  }
}

class RequestError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'RequestError';
  }
}