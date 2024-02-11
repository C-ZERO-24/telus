import { LoaderFunction, LoaderFunctionArgs } from 'react-router-dom';

/**
 * Wraps the loader function to provide adequate type safety for inferring the return type of useLoaderData.
 * @param LoaderFunctionArgs from React Router
 * @returns the loader function
 */
export function getLoader<T>(loader: (args: LoaderFunctionArgs) => Promise<T>) {
  return loader satisfies LoaderFunction<Promise<T>>;
}
