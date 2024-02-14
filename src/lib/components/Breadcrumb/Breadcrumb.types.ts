import { LinkProps } from 'react-router-dom';

export type BreadcrumbProps = {
  children: React.ReactNode;
  separator?: React.ReactNode;
} & React.HTMLAttributes<HTMLElement>;

export type BreadcrumbItemsProps = {
  children: React.ReactNode;
  active?: boolean;
} & LinkProps;

export type BreadCrumbContextProps = {
  separator: BreadcrumbProps['separator'];
};
