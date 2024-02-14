import clsx from 'clsx';
import { Link } from '..';
import { useBreadcrumbContextProps } from './Breadcrumb.context';
import { BreadcrumbItemsProps } from './Breadcrumb.types';

export const BreadcrumbItem = ({
  children,
  active,
  ...props
}: BreadcrumbItemsProps) => {
  const { separator } = useBreadcrumbContextProps();

  return (
    <li className="inline-block [&>span]:hidden [&>span]:[&:not(:first-child)]:inline-block ">
      <span className="mx-2">{separator}</span>
      <Link
        className={clsx(
          `text-neutral-7 hover:underline text text-input-1`,
          active && 'text-neutral-8',
        )}
        {...props}
      >
        {children}
      </Link>
    </li>
  );
};
