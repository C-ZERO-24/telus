import { cn } from '~/utils';
import { Heading, HeadingProps } from '../Heading';

export const CardHeading = ({ className, ...props }: HeadingProps) => {
  return (
    <Heading className={cn('col-start-2 row-start-1', className)} {...props} />
  );
};
