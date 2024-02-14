import { useMemo } from 'react';
import { BreadcrumbProps } from './Breadcrumb.types';
import { BreadcrumbItem } from './BreadcrumbItem';
import { BreadcrumbContext } from './Breadcrumb.context';

export const Breadcrumb = ({
  children,
  separator,
  ...props
}: BreadcrumbProps) => {
  const breadCrumbContextProps = useMemo(
    () => ({
      separator,
    }),
    [separator],
  );

  return (
    <BreadcrumbContext.Provider value={breadCrumbContextProps}>
      <nav {...props}>
        <ol>{children}</ol>
      </nav>
    </BreadcrumbContext.Provider>
  );
};

Breadcrumb.Item = BreadcrumbItem;
