/* eslint-disable unicorn/prevent-abbreviations */
import createClient, { type Middleware } from 'openapi-fetch';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const client = createClient<any>({
  baseUrl: 'https://tickets.dev-options.com/',
});

const authMiddleware: Middleware = {
  async onRequest(request) {
    const token = localStorage.getItem('token');
    const tokenType = localStorage.getItem('tokenType');
    if (token) request.headers.set('Authorization', `${tokenType} ${token}`);
    return request;
  },
  async onResponse(response) {
    const { body, ...resOptions } = response;
    // change status of response
    return new Response(body, { ...resOptions, status: response.status });
  },
};

client.use(authMiddleware);
