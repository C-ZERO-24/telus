import Providers from './providers.route.tsx';
import ErrorPage from '../error-page.tsx';
import ProviderProfile, {
  loader as ProviderLoader,
} from './provider-profile.route.tsx';

export const routes = [
  {
    path: '/',
    element: <Providers />,
    errorElement: <ErrorPage />,
    children: [],
  },
  {
    path: '/provider/:slug',
    element: <ProviderProfile />,
    loader: ProviderLoader,
    errorElement: <ErrorPage />,
  },
];
