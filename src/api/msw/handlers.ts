import { HttpHandler, HttpResponse, delay, http } from 'msw';
import { PROVIDERS } from '../mockData';

export const handlers: HttpHandler[] = [
  http.get('/providers', async () => {
    await delay();
    return HttpResponse.json(PROVIDERS);
  }),
  http.get('/provider/:slug', async ({ params }) => {
    await delay();

    const provider = PROVIDERS.find(provider => provider.slug === params.slug);

    if (!provider) {
      return new HttpResponse('Not found', {
        status: 404,
        statusText: 'Provider not found',
      });
    }
    return HttpResponse.json(provider);
  }),
];
