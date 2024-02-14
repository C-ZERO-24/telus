import { Subheading } from '../Subheading';
import { CardSubheadingProps } from './Card.types';
import clsx from 'clsx';

export const CardSubheading = ({
  className,
  ...props
}: CardSubheadingProps) => {
  return (
    <Subheading
      className={clsx('text-neutral-7 col-start-2 row-span-2', className)}
      {...props}
    />
  );
};
