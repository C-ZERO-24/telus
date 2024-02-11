import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClientProvider } from '~/api';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { routes } from './routes';

import '@fontsource-variable/inter';

import '~/styles/reset.css';
import '~/styles/global.css';

const createRouter = () => createBrowserRouter(routes);

const ENABLE_MSW_BROWSER = true;

async function enableMocking() {
  if (!ENABLE_MSW_BROWSER || process.env.NODE_ENV !== 'development') {
    return;
  }

  const { worker } = await import('../api/msw/browser');

  return worker.start();
}

enableMocking().then(() => {
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <QueryClientProvider>
        <RouterProvider router={createRouter()} />
      </QueryClientProvider>
    </React.StrictMode>,
  );
});
