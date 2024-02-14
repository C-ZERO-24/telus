import { createContext, useContext } from 'react';
import { BreadCrumbContextProps } from './Breadcrumb.types';

export const BreadcrumbContext = createContext<
  BreadCrumbContextProps | undefined
>(undefined);

export const useBreadcrumbContextProps = () => {
  const props = useContext(BreadcrumbContext);

  if (!props) {
    throw new Error('Not a valid context');
  }

  return props;
};
