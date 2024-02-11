import { HttpHandler, HttpResponse, delay, http } from 'msw';

export const handlers: HttpHandler[] = [
  http.get('/example', async () => {
    await delay();
    return HttpResponse.text('Hello world!');
  }),
  http.get('/example/:value', async ({ params }) => {
    await delay();

    if (!params.value) {
      return new HttpResponse('Not found', {
        status: 404,
        statusText: 'Post not found',
      });
    }
    return HttpResponse.text(`Hello world ${params.value}!`);
  }),
];
