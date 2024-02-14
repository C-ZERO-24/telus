import { API } from '../api';
import { Provider } from '../mockData';

export const getAllProviders = async (): Promise<Provider[]> => {
  const providers = await API.get('/providers');

  if (!providers) {
    throw new Error('Something went wrong when fetching providers');
  }

  return providers;
};

export const getProvider = async (slug: string): Promise<Provider> => {
  const provider = await API.get(`/provider/${slug}`);

  if (!provider) {
    throw new Error('Something went wrong when fetching the providers profile');
  }

  return provider;
};
