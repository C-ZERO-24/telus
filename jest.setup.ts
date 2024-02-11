import '@testing-library/jest-dom';
import '@inrupt/jest-jsdom-polyfills';
import { setGlobalOrigin } from 'undici';

import { server } from '~/api/msw';

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

beforeEach(() => {
  setGlobalOrigin(window.location.href);
});

afterAll(() => server.close());

server.events.on('request:start', ({ request }) => {
  console.log('MSW intercepted:', request.method, request.url);
});
