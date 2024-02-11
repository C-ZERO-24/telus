import { useLoaderData } from 'react-router-dom';
import { LoaderData } from '~/types';
import { getExample } from '~/api';

export const loader = async () => {
  return await getExample();
};

export default function Root() {
  const example = useLoaderData() as LoaderData<typeof loader>;

  return <h1 className="m-4 text-heading-1">{example}</h1>;
}
