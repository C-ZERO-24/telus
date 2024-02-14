import { HTTPErrror, TimeoutError } from './errors';
import { RequestOptions } from './types';

export class API {
  static baseUrl = 'http://localhost:8090';
  static headers: HeadersInit = {
    'Content-Type': 'application/json',
  };
  static timeout = 30000;

  static setHeaders(headers: HeadersInit) {
    this.headers = { ...this.headers, ...headers };
  }

  static buildUrl(pathName: string, params?: Record<string, string | number>) {
    const url = new URL(`${this.baseUrl}${pathName}`);

    if (params) {
      const paramsStringified = Object.entries(params).reduce<string[][]>(
        (acc, [key, value]) => {
          if (value) {
            acc.push([key, value.toString()]);
          }
          return acc;
        },
        [],
      );
      const searchParams = new URLSearchParams(paramsStringified);
      url.search = searchParams.toString();
    }
    return url.toString();
  }

  static async request<T>(pathName: string, options: RequestOptions<T> = {}) {
    const { method = 'GET', headers = {}, params } = options;

    const body = options.body ? JSON.stringify(options.body) : undefined;

    try {
      const url = this.buildUrl(pathName, params);

      const response = await Promise.race([
        fetch(url, {
          method,
          body,
          headers: {
            ...this.headers,
            ...headers,
          },
        }),
        new Promise((_, reject) =>
          setTimeout(
            () =>
              reject(
                new TimeoutError(`Fetch timed out after ${this.timeout} ms`),
              ),
            this.timeout,
          ),
        ),
      ]);

      if (!(response instanceof Response)) {
        throw new Error('Uknown response returned from fetch');
      }

      if (!response.ok) {
        throw new HTTPErrror(response.status, response.statusText);
      }

      const contentType = response.headers.get('Content-Type');

      if (contentType?.includes('application/json')) {
        return response.json();
      } else if (contentType?.includes('text/plain')) {
        return response.text();
      } else {
        return response;
      }
    } catch (error) {
      if (!(error instanceof Error)) {
        throw new Error('unknown error');
      }

      if (error instanceof TimeoutError) {
        console.error(`fetch timed out after ${this.timeout} ms`);
      }

      throw error;
    }
  }

  static async get<T>(url: string, options?: RequestOptions<T>) {
    return await this.request(url, { ...options, method: 'GET' });
  }

  static async post<T>(url: string, options?: RequestOptions<T>) {
    return await this.request(url, { ...options, method: 'POST' });
  }

  static async put<T>(url: string, options?: RequestOptions<T>) {
    return await this.request(url, { ...options, method: 'PUT' });
  }

  static async delete<T>(url: string, options?: RequestOptions<T>) {
    return await this.request(url, { ...options, method: 'DELETE' });
  }
}
