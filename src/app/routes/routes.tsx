import Root, { loader as rootLoader } from './root.tsx';
import ErrorPage from '../error-page.tsx';

export const routes = [
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    children: [],
  },
];
