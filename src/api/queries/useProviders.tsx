import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { getAllProviders } from '..';
import { Provider } from '../mockData';

type UseProviders = () => UseQueryResult<Provider[]>;

export const useProviders: UseProviders = () => {
  return useQuery<Provider[]>({
    queryKey: ['providers'],
    queryFn: getAllProviders,
  });
};
