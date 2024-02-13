import { API } from '../api';
import { Provider } from '../mockData';

export const getExample = async (args?: { value: string }) => {
  const path = args?.value ? `/example/${args.value}` : '/example';

  const data = await API.get(path);

  return data;
};

export const getAllProviders = async (): Promise<Provider[]> => {
  const providers = await API.get('/providers');

  return providers;
};

export const getProvider = async (id: string) => {
  const provider = await API.get('/provider', { params: { id } });

  return provider;
};
