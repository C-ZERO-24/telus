import { cn } from '~/utils';
import { Subheading } from '../Subheading';
import { CardSubheadingProps } from './Card.types';

export const CardSubheading = ({
  className,
  ...props
}: CardSubheadingProps) => {
  return (
    <Subheading
      className={'text-input-1 text-neutral-7 -mt-1 col-start-2 row-span-2'}
      {...props}
    />
  );
};
