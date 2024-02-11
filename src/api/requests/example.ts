import { API } from '../api';

export const getExample = async (args?: { value: string }) => {
  const path = args?.value ? `/example/${args.value}` : '/example';

  const data = await API.get(path);

  return data;
};
